import React from 'react';

import Person from './Person/person';
import './App.css';

interface PersonProps {
  name: string;
  age: number;
  children: React.ReactNode;
}

interface PersonData {
  name: string;
  age: number;
}

interface PersonState {
  people: PersonData[];
}

class App extends React.Component<{}, PersonState> {
  constructor(props: PersonData) {
    super(props);

    this.state = {
      people: [
        {
          name: 'Tadas',
          age: 33,
        },
        {
          name: 'Aina',
          age: 30,
        },
      ],
    };
  }
  render() {
    return (
      <div className='App'>
        <h1>Hello World</h1>
        {this.state.people.map((person: PersonData, i: number) => (
          <Person key={i} {...person} />
        ))}
      </div>
    );
  }
}

export default App;
