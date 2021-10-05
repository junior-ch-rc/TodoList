import React from 'react';
import Clock from './components/Clock';
import { Footer } from './components/Footer';
import { TodoList } from './components/TodoList';

class App extends React.Component {
  
  render() {
    return (
      <>
        <Clock/>
        <TodoList/>
        <Footer/>
      </>
    );
  }
}

export default App;
