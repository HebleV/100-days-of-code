import React from 'react';
import ReactDOM from 'react-dom';
import { Child } from './Child';
import { Sibling } from './Sibling';

class Parent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: 'Frarthur' };

    this.changeName = this.changeName.bind(this);
  }

  changeName(newName) {
    this.setState({
      name: newName
    });
  }

  render() {
    return (
      <div>
        <Child onChange={this.changeName} />
        <Sibling name={this.state.name} />
      </div>
    );
  }
};

ReactDOM.render(
  <Parent />,
  document.getElementById('app')
);

// This is React pattern where a stateless component update their parents component - most used pattern
//In lesson 1, you learned your first React programming pattern: a stateful, parent component passes down a prop to a stateless, child component.
//In lesson 2, you learned that lesson 1’s pattern is actually part of a larger pattern: a stateful, parent component passes down an event handler to a stateless, child component. The child component then uses that event handler to update its parent’s state.

//CHILD COMPONENTS UPDATE THEIR SIBLINGS' PROPS
// Stateless Components Inherit From Stateful Components Recap
// You just executed your first complete React programming pattern!

// Let’s review. Follow each step in the code editor:

// A stateful component class defines a function that calls this.setState. (Parent.js, lines 15-19)

// The stateful component passes that function down to a stateless component. (Parent.js, line 24)

// That stateless component class defines a function that calls the passed-down function, and that can take an event object as an argument. (Child.js, lines 10-13)

// The stateless component class uses this new function as an event handler. (Child.js, line 20)

// When an event is detected, the parent’s state updates. (A user selects a new dropdown menu item)

// The stateful component class passes down its state, distinct from the ability to change its state, to a different stateless component. (Parent.js, line 25)

// That stateless component class receives the state and displays it. (Sibling.js, lines 5-10)

// An instance of the stateful component class is rendered. One stateless child component displays the state, and a different stateless child component displays a way to change the state. (Parent.js, lines 23-26)

// This pattern occurs in React all the time! The more that you see it, the more that its elegance will become clear