import React from 'react';

function Calendar() {
    return (
        <div className="jumbotron bg-white" id="gcal">
            <iframe
                src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FLos_Angeles&amp;src=YXZpbGFqb3JnZTMxNEBnbWFpbC5jb20&amp;src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;src=ZmFtaWx5MDMwMTQ1NzMxNTE2NDczODY1NjFAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=amoxYm5mYWFvY2NodmpoamQ5bGw2ZzY2ZXNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=ajNhdmlsYUBlbmcudWNzZC5lZHU&amp;src=ajNhdmlsYUB1Y3NkLmVkdQ&amp;src=ZGRwazRtYzMzYzhxYXZzcG5pdmY5bDlrM2h2bDFrdGJAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=MjZjaWZyaWgwb3Z1YzUxMGhkNHFjbmM0b2dmM3F2anBAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;color=%234285F4&amp;color=%237986CB&amp;color=%23E4C441&amp;color=%23039BE5&amp;color=%23F6BF26&amp;color=%23AD1457&amp;color=%23EF6C00&amp;color=%239E69AF&amp;showTitle=0&amp;showNav=1&amp;showDate=1&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=1&amp;showTz=0&amp;mode=WEEK"
                width="1200" height="600" frameBorder="0" scrolling="no"></iframe>
        </div>
    );
}

export default Calendar;