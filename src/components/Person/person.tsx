import React from 'react';

interface PersonProps {
  name: string;
  age: number;
  id: number;
  index: number;
  deletePerson: Function;
  changeName: Function;
}

const Person = (props: PersonProps): JSX.Element => {
  const { name, age, id, index, deletePerson, changeName } = props;
  return (
    <div>
      <div onClick={(event: React.MouseEvent) => deletePerson(index)}>
        Hi, my name is {name} and I am {age} years old.
      </div>
      <input
        defaultValue={name}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          changeName(event.target.value, id)
        }
      />
    </div>
  );
};

export default Person;
