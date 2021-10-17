import React from 'react';
import './DogDetail.css';
import { Link } from 'react-router-dom';

class DogDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { dog } = this.props;
    const styles = {
      button: {
        position: 'relative',
        marginRight: 'auto',
        margin: 10,
        padding: '10px 20px',
      },
    };
    return (
      <>
        <div className="DogDetail-container">
          <img src={dog.src} alt={dog.name} />
          <h1>{dog.name}</h1>
          <ol>
            {dog.facts.map((list) => (
              <li className="DogDetail-list">{list}</li>
            ))}
          </ol>
          <button style={styles.button}>{<Link to="/dogs">GoBack</Link>}</button>
        </div>
      </>
    );
  }
}

export default DogDetail;
