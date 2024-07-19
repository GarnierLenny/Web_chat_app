var socket = new WebSocket("ws://localhost:8080/ws")

let connect = () => {
  console.log("Attempting connection to websocket...");

  socket.onopen = () => {
    console.log("Successfully connected!");
  };

  socket.onmessage = (msg) => {
    console.log(msg);
  };

  socket.onclose = event => {
    console.log("Socket closed:", event);
  };

  socket.onerror = event => {
    console.log("Socket error:", event);
  };
};

let sendMsg = msg => {
  socket.send(msg);
}

export { connect, sendMsg }
