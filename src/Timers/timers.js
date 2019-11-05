import React, {useEffect, useState} from 'react';
import 'firebase/firestore';
import {
    useFirestoreCollection,
    useFirebaseApp,
    SuspenseWithPerf
} from 'reactfire';
import firebase from 'firebase';

import { Card, CardColumns, ButtonToolbar, Button, Modal, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faPlus, faCloudUploadAlt, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import DateTimePicker from 'react-datetime-picker';
import moment from 'moment';
import 'moment-countdown';

import '../index.css';
import './timers.css';

function Submit(props) {
    console.log(props)
    if (props.submit) {
        return (
            <StoreTimer
                data={props.send}
                cancelSubmit={props.cancelSubmit}
                addTimer={props.addTimer}>
            </StoreTimer>
        );
    }
    return null;
}


function StoreTimer(props) {
    const [timer, setTimer] = useState(null);

    const data = props.data;
    const colRef = data.colRef;

    console.log("StoreTimer called!");
    console.log(props);
    colRef.add({ title: data.title, url: data.url, time: data.date.getTime() })
        .then((docRef) => docRef.get())
        .then((docSnp) => {
            if (docSnp.exists) {
                console.log(docSnp.data());
                const data = docSnp.data();
                const time = data.time;
                const mmt = moment(time);
                const timer = {
                    id: docSnp.id,
                    data: data,
                    countdown: moment(time).countdown(),
                    date: mmt.format("dddd, MMMM, Do, YYYY"),
                    time: mmt.format("h:mm:ss a"),
                    index: -1
                };
                console.log(timer);
                props.addTimer(timer);
            }
        });
    return (<>{props.cancelSubmit()}</>);
}

function DeleteTimer(props) {
    // TODO: Need to account for timers that are added then immediately deleted.
    let id = props.status.id;
    console.log(props);
    props.colRef.doc(props.status.id).delete();
    props.removeTimer(props.status.id);
    props.setDelete(false);
    return null;
}

function DeleteButton(props) {
    if (props.status.delete) {
        return (
            <Button
                variant="danger"
                size="sm"
                className="m-2 buttons"
                onClick={() => {
                    props.setDelete(true);
                }}
            >
                <FontAwesomeIcon icon={faTrashAlt}/>
                <DeleteTimer
                    status={props.status}
                    removeTimer={props.removeTimer}
                    colRef={props.colRef}
                    setDelete={props.setDelete}
                />
            </Button>
        );
    } else {
        return (
            <Button
                variant="danger"
                size="sm"
                className="m-2 buttons"
                onClick={() => {
                    props.setDelete(true);
                }}
            >
                <FontAwesomeIcon icon={faTrashAlt}/>
            </Button>
        );
    }
}

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countdown: props.countdown,
            date: props.date,
            time: props.time,
            data: props.data,
            id: props.id,
            colRef: props.colRef,
            status: {edit: false, delete: false, index: props.index, id: props.id},
            removeTimer: props.removeTimer,
            updateTimer: props.updateTimer,
        };

        setInterval(() => {
            this.update();
        }, 1000);
    }

    update = () => {
        if (this.state.time !== null) {
            this.setState({countdown: moment(this.state.data.time).countdown()});
        }
    };

    setDelete = (setTo) => {
        let new_status = this.state.status;
        new_status.delete = setTo;
        this.setState({status: new_status});
    };

    setEdit = () => {
        let new_status = this.state.status;
        new_status.edit = true;
        this.setState({status: new_status});
    };

    render() {
        return (
            <Card className="">
                <Card className="bg-light text-white font-weight-bolder">
                    <Card.Img src={this.state.data.url} alt="Card Image"/>
                    <Card.ImgOverlay>
                        <div style={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
                            <br/>
                            <h4 className="text-center">{this.state.data.title}</h4>
                            <div className="countdown-wrapper">
                                <div className="countdown-item">
                                    {this.state.countdown.days}
                                    <span>days</span>
                                </div>
                                <div className="countdown-item">
                                    {this.state.countdown.hours}
                                    <span>hours</span>
                                </div>
                                <div className="countdown-item">
                                    {this.state.countdown.minutes}
                                    <span>minutes</span>
                                </div>
                                <div className="countdown-item">
                                    {this.state.countdown.seconds}
                                    <span>seconds</span>
                                </div>
                                <div className="text-center">
                                    <p>
                                        {this.state.date}
                                        <br/>
                                        {this.state.time}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Card.ImgOverlay>
                </Card>
                <ButtonToolbar className="float-right mb-3">
                    <Button
                        variant="info"
                        size="sm"
                        className="m-2 buttons"
                        onClick={() => {
                           this.state.updateTimer(this.state.index);
                        }}
                    >
                        <FontAwesomeIcon icon={faEdit}/>
                    </Button>
                    <DeleteButton
                        status={this.state.status}
                        setDelete={this.setDelete}
                        removeTimer={this.state.removeTimer}
                        colRef={this.state.colRef}
                    />
                </ButtonToolbar>
            </Card>
        );
    };
}

function GetTimers(props) {

    const timerCol = useFirestoreCollection(props.timersColRef);
    if (!timerCol.empty) {
        const timers = timerCol.docs.map((element, index) => {
            const time = element.data().time;
            const mmt = moment(time);
            return ({
                id: element.id,
                data: element.data(),
                countdown: moment(time).countdown(),
                date: mmt.format("dddd, MMMM, Do, YYYY"),
                time: mmt.format("h:mm:ss a"),
                index: index
            });
        }, (error) => console.log("Firestore call failed: ", error));
        return (
            <Timers timers={timers} colRef={props.timersColRef} />
        );
    }
    return props.children;

}

class Timers extends React.Component {

    static collectionName = 'countdown-timers';

    constructor(props) {
        super(props);
        this.state = {
            timers: [...props.timers],
            showModal: false,
            data: {submit: false, url: '', title: '', date: new Date()},
            colRef: props.colRef,
            send: {submit: false, url: '', title: '', date: new Date(), colRef: props.colRef},
            submit: false,
        };
    }

    onSubmit = (data) => {
        this.setState((prevState) => {
            console.log(data);
          return {
              data: {submit: true, url: data.url, title: data.title, date: data.date},
              send: {submit: true, url: data.url, title: data.title, date: data.date, colRef: this.state.colRef},
              submit: true
          };
        });
    };

    cancelSubmit = () => {
        if (this.state.submit || this.state.send.submit) {
            let new_send = this.state.send;
            new_send.submit = false;
            this.setState({send: new_send});
            this.setState({submit: false});
        }
        return null;
    };

    updateTimers = (timers) => {
        this.setState({timers: timers});
    };

    addTimer = (timer) => {
        if (timer) {
            this.setState((state, props) => {
                if (timer.index === -1) {
                    timer.index = state.timers.length;
                }
                return {timers: [...state.timers, timer]};
            });
        }
    };

    updateTimer = (newTimer, index) => {
        this.setState((state, props) => {
            const timers = state.timers.map((item, j) => {
                if (j === index) {
                   return newTimer;
                } else {
                    return item;
                }
            });
            return {timers: timers};
        });
    };

    removeTimer = (timer_id) => {
        let id = timer_id;
        console.log(timer_id);
        const timers = this.state.timers.filter((item) => item.id !== id);
        this.state.timers.forEach((item) => {
            if (item.id === id) item.delete = true;
        });
        this.setState({timers: []});
        console.log(timers);
        this.setState({timers: timers});
        console.log(this.state);
    };

    getTimerCount = () => {
        return this.state.timers.length;
    };

    clearTimers = () => {
        if (this.state.timers.length > 0) {
            this.setState({timers: []});
        }
    };

    render() {
        return (
            <div className="jumbotron bg-white" style={{paddingTop: '0'}}>
                <CardColumns className="ml-4 mr-4">
                    {(this.state.timers || []).map((item, index) => {
                        if (item.delete) return (<div key={item.id}></div>);
                        return (
                            <Timer
                                key={item.id}
                                countdown={item.countdown}
                                date={item.date}
                                time={item.time}
                                data={item.data}
                                id={item.id}
                                index={index}
                                colRef={this.state.colRef}
                                removeTimer={this.removeTimer}
                                updateTimer={this.updateTimer}/>);
                    })}
                </CardColumns>
                <Button variant="success" size="lg" className="float-right buttons" onClick={() => this.setState({showModal: true})}><FontAwesomeIcon icon={faPlus}/></Button>
                <UseCreateTimerModal
                    show={this.state.showModal}
                    onHide={() => this.setState({showModal: false})}
                    onSubmit={this.onSubmit}>
                </UseCreateTimerModal>
                <Submit
                    send={this.state.send}
                    submit={this.state.submit}
                    cancelSubmit={this.cancelSubmit}
                    addTimer={this.addTimer}
                />
            </div>
        );
    }
}

function UseCreateTimerModal(props) {
    const [url, setUrl] = useState(null);
    const [title, setTitle] = useState('');
    const [date, setDate] = useState(new Date());

    let onChange = date => {
        setDate(new Date(date));
    };

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add Timer
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Title" name="title" onChange={event => setTitle(event.target.value)}/>
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Label>Image Url</Form.Label>
                        <Form.Control type="url" placeholder="Enter image url ..." name="url" onChange={event => setUrl(event.target.value)} />
                    </Form.Group>
                </Form>
                <DateTimePicker
                    onChange={onChange}
                    value={date}
                    required={true}
                />
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={
                    () => {
                        props.onHide();
                        props.onSubmit({title: title, url: url, date: date});
                    }}
                        size="lg" variant="info"><FontAwesomeIcon icon={faCloudUploadAlt}/>
                </Button>
                <Button onClick={props.onHide} size="lg" variant="secondary"><FontAwesomeIcon icon={faTimesCircle}/></Button>
            </Modal.Footer>
        </Modal>
    );
}

export default GetTimers;