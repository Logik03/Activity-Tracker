# Activity Tracker

A real-time activity tracking application built with React and Socket.IO that monitors and displays user activities with live updates.

## Table of Contents

- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Available Scripts](#available-scripts)
- [Assumptions Made During Development](#assumptions-made-during-development)
- [Areas for Improvement](#areas-for-improvement)
- [Learn More](#learn-more)

## Installation

Before running the application, ensure you have the following installed:
- Node.js (version 18.0 or higher)
- npm (comes with Node.js)

1. Clone the repository
   ```bash
   git clone https://github.com/Logik03/Activity-Tracker.git
   cd Activity-Tracker
   ```

2. Install dependencies:
   
   ```bash
   npm install
   # or
   yarn install
   ```
   from the project root directory i.e, activity-tracker, to install all dependencies needed for the frontend to run successfully 

   ```bash
   cd Activity-tracker/server
   ```

   ```bash
   npm install
   # or
   yarn install
   ```
   once again: this is to install all the dependencies needed to run the mock-data for the socket.io-client  

## Running the Application

### Development Mode
To run the application in development mode:

```bash
cd back to the project root
```

```bash
npm start
```

this command will start both the server and also the frontend client at the same time. you can inspect the contents of the package.json in the root folder to see how concurently is used to serve both the Frontend and Backend 

This will:
- Start the development server for the Frontend client 
- Start the development server for the websocket mock-data api also
- Open [http://localhost:3000](http://localhost:3000) in your browser
- Enable hot reloading (the page will reload automatically when you make changes)
- Display lint errors in the console

### Production Build
To create a production build:

```bash
npm run build
```

This will create an optimized production build in the `build` folder, ready for deployment.

## Available Scripts

### `npm start`
Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits, and you will also see any lint errors in the console.

### `npm test`
Launches the test runner in interactive watch mode. See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`
Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes. Your app is ready to be deployed!

### `npm run eject`
**Note: this is a one-way operation. Once you `eject`, you can't go back!**

## Assumptions Made During Development
- web server client emits events every 6 seconds i.e 30,000 this is to prevent many events being emmited at once and easy monitoring and debugging of the events
- **Screen Sizes**: The UI is optimized for desktop and tablet viewports, with basic mobile responsiveness.
- **Data Format**: All API responses are expected to be in JSON format.
- **Network Connectivity**: The application assumes a stable internet connection for API calls.
- **JavaScript Enabled**: Users are expected to have JavaScript enabled in their browsers.

## Areas for Improvement

Given more time, the following enhancements could be implemented:

### Performance Optimizations
- usage of Nx-monorepo to keep both Mock-data server and frontend client within the same codebase
- implement proper end to end testing and also cover 90% of the test cases
- Implement virtual scrolling for large data sets

### User Experience
- Add loading states and skeleton screens
- Implement error boundaries for better error handling
- Add comprehensive form validation with user-friendly error messages
- Improve accessibility (ARIA labels, keyboard navigation, screen reader support)

### Testing
- Increase test coverage to 90%+ with unit and integration tests
- Add end-to-end testing with tools like Cypress or Playwright

### Code Quality
- Set up comprehensive typescript types and Prettier configurations
- Add pre-commit hooks with Husky for code quality enforcement
- Implement all my payloads to use typescript types for more safety and predefined data

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Contributing
