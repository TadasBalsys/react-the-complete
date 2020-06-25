import React from 'react';
import styled from 'styled-components';
interface PersonProps {
  name: string;
  age: number;
  id: number;
  index: number;
  deletePerson: Function;
  changeName: Function;
}

const StyledDiv = styled('div')`
  width: 60%;
  background-color: red;
  margin: auto;
  `;

const StyledDivSmall = styled('div')`
  background-color: yellow;
  padding: 0.6rem;
  margin-bottom: 0.5rem;
  border: 1px solid black;
`;

const StyledInput = styled('input')`
  padding: 0.5rem 1rem;
`;

const Person = (props: PersonProps): JSX.Element => {
  const { name, age, id, index, deletePerson, changeName } = props;

  return (
    <StyledDiv>
      <StyledDivSmall onClick={(event: React.MouseEvent) => deletePerson(index)}>
        Hi, my name is {name} and I am {age} years old.
      </StyledDivSmall>
      <StyledInput
        defaultValue={name}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          changeName(event.target.value, id)
        }
      />
    </StyledDiv>
  );
};

export default Person;
