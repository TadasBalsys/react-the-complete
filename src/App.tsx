import React, { useState } from 'react';

import Person from './components/Person/person';
import './App.css';

interface PersonData {
  id: number;
  name: string;
  age: number;
}

const personArr: PersonData[] = [
  { id: 8, name: 'Tadas', age: 33 },
  { id: 9, name: 'Aina', age: 30 },
];

let showList: Boolean = false;

const App = (): JSX.Element => {
  const [persons, setPersons] = useState<PersonData[]>(personArr);
  const [isListVisible, setIsListVisible] = useState<Boolean>(showList);

  const deletePersonHandler = (index: number): void => {
    const newPersonsArr: PersonData[] = [...persons];
    newPersonsArr.splice(index, 1);
    console.log(newPersonsArr);
    setPersons(newPersonsArr);
  };

  const nameChangedHandler = (value: string, id: number) => {
    const personIndex: number = persons.findIndex((p) => p.id === id);
    const person: PersonData = { ...persons[personIndex] };
    const newPersonsArr: PersonData[] = [...persons];
    person.name = value;
    newPersonsArr[personIndex] = person;
    setPersons(newPersonsArr);
  };

  let personsList: JSX.Element[] | null = null;

  if (isListVisible) {
    personsList = persons.map((person: PersonData, index: number) => (
      <Person
        key={person.id}
        index={index}
        {...person}
        deletePerson={deletePersonHandler}
        changeName={nameChangedHandler}
      />
    ));
  }

  return (
    <div className='App'>
      <h1>Hello World</h1>
      <button onClick={() => setIsListVisible(!isListVisible)}>
        Show People
      </button>
      {personsList}
    </div>
  );
};

export default App;
