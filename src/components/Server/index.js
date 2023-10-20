import React, { PropTypes } from 'react';

import './style.css';

const Server = React.createClass({

  propTypes: {
    info: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })).isRequired,
  },

  render() {
    return (
      <div className="page Server">
        <h1>
          Server Details
        </h1>
        <table className="manage-table">
          <tbody>
            {this.props.info.map((prop, idx) => (
              <tr key={idx} className={idx % 2 ? 'even' : 'odd'}>
                <td>{prop.key}</td>
                <td>{prop.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
});

export default Server;
