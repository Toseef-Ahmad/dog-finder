import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Dog from './Dog';
import DogDetail from './DogDetail';

const Routes = (props) => {
  const getDog = (defaultProps) => {
    let name = defaultProps.match.params.name;
    console.log(name);
    let selectedDog = props.dogs.find((dog) => {
      return dog.name.toLowerCase() === name.toLowerCase();
    });
    return <DogDetail {...defaultProps} dog={selectedDog} />;
  };
  return (
    <Switch>
      <Route
        exact
        path="/dogs"
        render={() => <Dog dogs={props.dogs} />}
      ></Route>
      <Route exact path="/dogs/:name" render={getDog}></Route>
      <Redirect to="/dogs" />
    </Switch>
  );
};

export default Routes;
