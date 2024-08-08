import { HubConnectionBuilder } from '@microsoft/signalr';

const signalrConnection = new HubConnectionBuilder()
    .withUrl("https://localhost:7094/notificationHub")
    .withAutomaticReconnect()
    .build();

    // signalrConnection.start()
    // .then(() => {
    //     console.log("Connected to SignalR");
    //     console.log("Connection ID: ", signalrConnection.connectionId);  // Access the connection ID here
    // })
    // .catch(error => console.error("SignalR Connection Error: ", error));

export default signalrConnection;