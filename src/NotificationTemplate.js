import React, { useEffect, useState } from 'react';
import signalrConnection from './SignalRConnection';

const NotificationComponent = () => {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        signalrConnection.start()
            .then(() => {
                console.log("Connected to SignalR");

                signalrConnection.on("ReceiveNotification", message => {
                    setNotifications(prev => [...prev, message]);
                });
            })
            .catch(error => console.error("SignalR signalrConnection Error: ", error));

        return () => {
            signalrConnection.stop();
        };
    }, []);

    return (
        <div>
            <h2>Notifications</h2>
            <ul>
                {notifications.map((note, index) => (
                    <li key={index}>{note}</li>
                ))}
            </ul>
        </div>
    );
};

export default NotificationComponent;