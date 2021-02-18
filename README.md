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


## Installation

### webSocket connection

#### webSocktet connection
```
npm install --save websocket http uuid
```

## Features

### webSocket connection


Reference:
  - https://www.npmjs.com/package/websocket
  - https://nodejs.org/api/http.html
  - https://www.npmjs.com/package/uuid


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
