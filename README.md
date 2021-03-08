# RealScript
## UIUC CS 296-41 Final Project:

## Table of Contents
- [Project Synopsis](https://github.com/nnrogers515/RealScript#project-synopsis)
- [Project Purpose](https://github.com/nnrogers515/RealScript#project-purpose)
- [Installation](https://github.com/nnrogers515/RealScript#installation)
- [Features](https://github.com/nnrogers515/RealScript#features)
- [Milestones](https://github.com/nnrogers515/RealScript#milestones)
- [Tools](https://github.com/nnrogers515/RealScript#tools)
- [Contributors](https://github.com/nnrogers515/RealScript#contributors)

## Project Synopsis
The goal of the project is to build a real-time document editor app. Users who visit the site should be able to type text messages on the whiteboard, and other users will be able to see what has been written immediately.
## Project Purpose
Due to pandemic, everything moves online, and many people find it difficult to collaborate with classmates, colleagues, or team members efficiently. Even though some online meeting platforms, like zoom, have the in-built whiteboard, it is found to have unexpected latency or strokes detected in the wrong position from time to time. As a result, having a separate real-time communication app would be beneficial for every online collaborator to communicate directly on board and quickly get other attention for feedback and approval - even though you are working in a different time zone, which is our prime intention, to provide persistent real-time communication between the client and server over a single TCP socket connection. And with the help of real-time collaborating, it can help users jot down and organize ideas faster. Also we would get a chance to get hands on the real experience of P2P networking project, to learn more about web socket, load balancer with nginx, and other networking tools, which are extremely common in any professional setting. 


## Dev Setup

1. Verify that you have yarn and/or npm installed on your device.
   - You can get the downloadable [Here](https://nodejs.org/en/download/) for Nodejs and npm (recommend 14.15.1 for this project, or even numbers in general for longterm support). 
   - If you already have npm ensure your node version is up to date (a helpful resource for managing node versions is [nvm](https://heynode.com/tutorial/install-nodejs-locally-nvm) which you can download via Linux/Mac Terminal or through utilizing Git Bash, WSL, or some other way on Windows.
2. Clone/Download the Project locally and change directory into the downloaded directory `cd /path/to/downloaded/folder`
3. Now simply run npm install or yarn install to get the necessary dependencies, if errors occur at this stage, it is likely that the node version you are using is not compatible (most likely too old), without much hassle you can change node version to ours through the command `nvm install 14.15.1` or if you already have installed this version of node, `nvm use 14.15.1` (this is assuming you have install nvm, if you haven't then you can download the 14.15.1 version in step 1).

## Running Dev

1. Execute `yarn start` or `npm run start` to start both the backend server as well as the frontend. 
2. Alternative: If you wish to run both frontend and backend as separate foreground processes, then open up two separate shells within the downloaded project folder, and in the first call `yarn start-server` or `npm run start-server` for the backend, and in the second call `yarn start-app` or `npm run start-app` for the frontend. 
3. You can then search `localhost:3000` or `127.0.0.1:3000` in your browser to view the frontend (the backend is likewise found at port 8000, so replace 3000 with 8000 to find that endpoint but it is essentially empty!).
4. Check out the App!

## Features

### webSocket connection

Reference:
  - https://www.npmjs.com/package/websocket
  - https://nodejs.org/api/http.html
  - https://www.npmjs.com/package/uuid
  - https://www.w3.org/TR/websockets/
  - https://www.w3.org/TR/websockets/
  - https://blog.logrocket.com/websockets-tutorial-how-to-go-real-time-with-node-and-react-8e4693fbf843/

## Milestones

  ### 1. Basic Version

  - Week 1 ( 2/8 - 2/14 )
    - Setup basic structure on Github
    - Research Websocket, React.js and LogRocket
  - Week 2 ( 2/15 - 2/21) & Week 3 ( 2/22 - 2/28)
    - Establish Websocket communication
    - Build up React frontend - have a web based texting editor UI for user to interact with
  - Week 4 ( 3/1 - 3/7 ) & Week 5 ( 3/8 - 3/14 )
    - Implement messaging functionality for one-to-one
    - Support user activities real-time transmission
  - Week 6 ( 3/15 - 3/21 )
    - Debugging and Monitoring Websocket
  - Week 7 ( 3/22 - 3/28 ) & Week 8 ( 3/29 - 4/4 )
    - Allow for simultaneous utilization by multiple users
    - Use Cognito to Handle User Pools
 ### 2. Advanced Version

  - Week 9 ( 4/5 - 4/11 )
    - Add more user customizing feature options
  - Week 10 ( 4/12 - 4/18) & Week 11 ( 4/18 - 4/25)
    - Config server with NGINX
    - Deploy on AWS
  - Week 12 and later (TBD)
    - End to end testing
    - Other advanced features, like drawing aspect

## Tools
    Node.js
    Web Canvas API (for advanced features)
    Simple-peer(library) (for advanced features)
    ws(websocket for Node.js)
    WebTorrent (for advanced features)
    React.js
    LogRocket
    Nginx
    Authorization tools such as Cognito for User Accounts
    Cloud computer services such as AWS for deployment

## Contributors

- ### James Bayus
- ### Gabriella Xue
- ### Noah Rogers
