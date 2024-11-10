# Socket Service for Vaiyer Ponno

[Live Link](https://vaiyer-ponno-client.vercel.app/) |  [Front-end Code](https://github.com/zamanmonirbu/vaiyer-ponno-client.git) |
 [Backend Code](https://github.com/zamanmonirbu/vaiyer-ponno-backend) |
[Demo Video](https://youtu.be/xU94ACV-VyQ)


---
This is the Socket.IO service used for real-time communication in the Vaiyer Ponno platform. It enables live updates for various events like user connections, messages, and orders.

## Features

- **Real-time User Connection Management**: Tracks active users and their socket IDs for real-time communication.
- **User Messaging**: Sends and receives messages between users instantly.
- **Order Notifications**: Sends real-time notifications to vendors when they receive a new order.

## Login Credentials

To access different roles within the platform, use the following credentials:

- **User Login**: 
  - Email: `user@gmail.com` 
  - Password: `user@gmail.com`

- **Seller Login**: 
  - Email: `seller@gmail.com`
  - Password: `seller@gmail.com`

- **Admin Login**: 
  - Email: `admin@gmail.com` 
  - Password: `admin@gmail.com`


## Setup

### Prerequisites

1. **Node.js**: Ensure you have Node.js installed on your system.
2. **Socket.IO**: This application uses Socket.IO for real-time communication.

### Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/zamanmonirbu/vaiyer-ponno-socket.git
    cd vaiyer-ponno-socket
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Create a `.env` file**:
    Make sure to create a `.env` file and add the following:
    ```env
    PORT=
    ```

4. **Start the server**:
    Run the following command to start the Socket.IO server:
    ```bash
    npm start
    ```

## How it Works

- **User Connection**:
  When a user connects, the socket ID is saved in `activeUsers` with their `userId`. The list of active users is emitted to all connected clients.

- **New User Add**:
  When a new user is added (`new-user-add`), their ID and socket ID are stored in `activeUsers`, and the updated list is broadcast to all users.

- **Disconnect**:
  When a user disconnects, their entry is removed from `activeUsers`, and the updated list is broadcast to the remaining users.

- **Send Message**:
  The `send-message` event allows users to send messages to one another. The message is routed to the target user based on their `userId`.

- **New Order Notification**:
  The `new-order` event is triggered when a new order is placed. A notification is sent to the vendor (seller) associated with the `sellerId` to inform them about the new order.

## API Events

- **new-user-add**:  
  Triggered when a new user connects to the socket. Sends the `userId` of the new user.
  
- **disconnect**:  
  Triggered when a user disconnects from the socket.

- **send-message**:  
  Triggered when a user sends a message. Requires the `data` object containing `receiverId` and message content.
  
- **new-order**:  
  Triggered when a new order is placed. Sends an `orderData` object containing `sellerId` and `orderDetails`.



## Getting Started

### Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/zamanmonirbu/vaiyer-ponno-socket.git
    cd vaiyer-ponno-socket
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ````

4. **Run the application**:
    ```bash
    npm start



## Contributing

Contributions are welcome! Please fork the repository and submit a pull request. For any issues or suggestions, feel free to open an issue.

## Connect with Me

You can connect with me through the following platforms:

- **Email:** [monir.cse6.bu@gmail.com](mailto:monir.cse6.bu@gmail.com)
- **GitHub:** [![GitHub Icon](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/zamanmonirbu)
- **LinkedIn:** [![LinkedIn Icon](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mdmoniruzzamanbu/)
- **Codeforces:** [![Codeforces Icon](https://img.shields.io/badge/Codeforces-00FF00?style=for-the-badge&logo=codeforces&logoColor=white)](https://codeforces.com/profile/ZaMo)
- **LeetCode:** [![LeetCode Icon](https://img.shields.io/badge/LeetCode-FFA116?style=for-the-badge&logo=leetcode&logoColor=white)](https://leetcode.com/u/moniruzzamancse6/)
- **Portfolio:** [![Portfolio Icon](https://img.shields.io/badge/Portfolio-000000?style=for-the-badge&logo=codeforces&logoColor=white)](https://moniruzzamanbu.netlify.app/)
- **Medium:** [![Medium Icon](https://img.shields.io/badge/Medium-12100E?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@zamanmonirbu)

Feel free to reach out or connect for collaborations, suggestions, or just to chat about technology!

