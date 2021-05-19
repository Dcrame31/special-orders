import React from 'react';
import CustomerForm from './components/customer/CustomerForm';
import UserContainer from './components/user/UserContainer';

function App() {
  return (
    <div className="ui container">
      <div>
        Cookbook Special Orders
      </div>
      <UserContainer/>
    </div>
  );
}

export default App;
