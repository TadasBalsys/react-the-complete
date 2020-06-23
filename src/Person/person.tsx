import React from 'react';

interface PersonProps {
  name: string;
  age: number;
  children?: React.ReactNode;
}

const Person = (props: PersonProps): JSX.Element => {
  const { name, age, children } = props;
  return (
    <div>
      <div>
        Hi, my name is {name} and I am {age} years old
      </div>
      <div>{children}</div>{' '}
    </div>
  );
};

export default Person;
