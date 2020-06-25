import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

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

const StyledButton = styled('button')`
  background-color: ${(props) => (props.color === "true" ? 'black' : 'red')};
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  color: white;
  width: 15rem;
  &:hover {
    background-color: lightgreen;
    cursor: pointer;
  }

  @media (max-width: 50rem) {
    width: 8rem;
  }
`;

const App = (): JSX.Element => {
  const [persons, setPersons] = useState<PersonData[]>(personArr);
  const [isListVisible, setIsListVisible] = useState<Boolean>(false);
  const [personsList, setPersonsList] = useState<JSX.Element[] | null>(null);

  const deletePersonHandler = (index: number): void => {
    const newPersonsArr: PersonData[] = [...persons];
    newPersonsArr.splice(index, 1);
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

  useEffect(() => {
    if (isListVisible) {
      setPersonsList(
        persons.map((person: PersonData, index: number) => (
          <Person
            key={person.id}
            index={index}
            {...person}
            deletePerson={deletePersonHandler}
            changeName={nameChangedHandler}
          />
        ))
      );
    } else {
      setPersonsList(null);
    }
  }, [isListVisible, persons]);

  return (
    <div className='App'>
      <h1>Hello World</h1>
      <StyledButton color={isListVisible.toString()} onClick={() => setIsListVisible(!isListVisible)}>
        Show People
      </StyledButton>
      {personsList}
    </div>
  );
};

export default App;
