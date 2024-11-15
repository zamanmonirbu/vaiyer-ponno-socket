require('dotenv').config()
const port=process.env.PORT;


const io = require("socket.io")(port, {
  cors: {
    origin: "*",
  },
});

let activeUsers = [];

io.on("connection", (socket) => {
  // console.log("A user connected with socket ID:", socket.id);

  socket.on("new-user-add", (newUserId) => {
    if (!activeUsers.some((user) => user.userId === newUserId)) {
      activeUsers.push({ userId: newUserId, socketId: socket.id });
      // console.log(`User ${newUserId} connected. Active users:`, activeUsers);
    }
    io.emit("get-users", activeUsers);
  });

  socket.on("disconnect", () => {
    activeUsers = activeUsers.filter((user) => user.socketId !== socket.id);
    // console.log(`User with socket ID ${socket.id} disconnected. Active users:`, activeUsers);
    io.emit("get-users", activeUsers);
  });

  socket.on("send-message", (data) => {
    const { receiverId } = data;
    const user = activeUsers.find((user) => user.userId === receiverId);

    // console.log(receiverId,user)
    if (user) {
      io.to(user.socketId).emit("receive-message", data);
      // console.log(`Message sent to user ${receiverId}. Data:`, data);
    } else {
      // console.log(`User ${receiverId} not found for message.`);
    }
  });

 
    // When a new order is placed, send notification to the seller
    socket.on("new-order", (orderData) => {
      const { sellerId, orderDetails } = orderData;
      const seller = activeUsers.find((user) => user.userId === sellerId);

      console.log("seller",seller,"sellerId",sellerId, "orderDetails",orderDetails)
      if (seller) {
        io.to(seller.socketId).emit("receive-order-notification", { sellerId, orderDetails });
      }
    });
  
  

});
