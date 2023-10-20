import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import './style.css';

const ManageClients = React.createClass({

  propTypes: {
    clients: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      keySize: PropTypes.number.isRequired,
    })).isRequired
  },

  componentDidMount() {
  },

  render() {
    return (
      <div className="page ManageClients">
        <h1 className="heading">Manage Clients</h1>
        <div className="page-contents">
          <table className="manage-table">
            <thead>
              <tr>
                <td>Client ID</td>
                <td>Key Size</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {this.props.clients.map((client, idx) => (
                <tr key={idx} className={idx % 2 ? 'even' : 'odd'}>
                  <td>{client.id}</td>
                  <td>{client.keySize}-bit</td>
                  <td>
                    <Link to={`/clients/${client.id}`}>Edit</Link>
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

export default ManageClients;
