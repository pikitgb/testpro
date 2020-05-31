import React from 'react';
import SideBar from './components/SideBar';
import Dashboard from './components/Dashboard';
import { MessageCenter } from './components/MessageCenter/';
import { MessageContextProvider } from './reducers/messages'

// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <MessageContextProvider>
      <div id='wrapper' className="App">
        <SideBar />
        <Dashboard />
        <MessageCenter />
      </div>
    </MessageContextProvider>
  );
}

export default App;
