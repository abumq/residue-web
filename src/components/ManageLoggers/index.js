import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import './style.css';

const ManageLoggers = React.createClass({

  propTypes: {
    loggers: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
    })).isRequired
  },

  componentDidMount() {

  },

  render() {
    return (
      <div className="page ManageLoggers">
        <h1 className="heading">Manage Loggers</h1>
        <div className="page-contents">
          <table className="manage-table">
            <thead>
              <tr>
                <td>Logger ID</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {this.props.loggers.map((logger, idx) => (
                <tr key={idx} className={idx % 2 ? 'even' : 'odd'}>
                  <td>{logger.id}</td>
                  <td>
                    <Link to={`/loggers/${logger.id}`}>Edit</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
});

export default ManageLoggers;
