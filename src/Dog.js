import React from 'react';
import './Dog.css';

class Dog extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Dog-container">
        {this.props.dogs.map((d) => {
          return (
            <div className="Dog">
              <div className="Dog-img">
                <img src={d.src} />
              </div>
              <div className="Dog-heading">
                <h1>{d.name}</h1>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Dog;
