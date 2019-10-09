import React from 'react';
import TodoContainer from '../todo/container';
import '../../App.css';

function AppComponent(props) {
	console.log(props)
  return (
    <div className="App">
    <TodoContainer />
    </div>
  );
}
export default AppComponent;
