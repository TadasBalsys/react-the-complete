import React, { useState } from 'react';

import Person from './Person/person';
import './App.css';

interface PersonProps {
  name: string;
  age: number;
}

interface PersonData {
  name: string;
  age: number;
}

// interface PersonState {
//   people: PersonData[];
// }

const initialState: PersonData[] = [
  { name: 'Tadas', age: 33 },
  { name: 'Aina', age: 30 },
];

const App = (): JSX.Element => {
  const [state, setState] = useState<PersonData[]>(initialState);

  return (
    <div className='App'>
      <h1>Hello World</h1>
      {state.map((person: PersonData, i: number) => (
        <Person key={i} {...person} />
      ))}
    </div>
  );
};

// class App extends React.Component<{}, PersonState> {
// constructor(props: PersonData) {
//     super(props);

//     this.state = {
//       people: [
//         {
//           name: 'Tadas',
//           age: 33,
//         },
//         {
//           name: 'Aina',
//           age: 30,
//         },
//       ],
//     };
//   }
//   render() {
//     return (
//       <div className='App'>
//         <h1>Hello World</h1>
//         {this.state.people.map((person: PersonData, i: number) => (
//           <Person key={i} {...person} />
//         ))}
//       </div>
//     );
//   }
// }

export default App;
