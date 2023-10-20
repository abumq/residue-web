import React, { PropTypes } from 'react';

import './style.css';

const CreateLogger = React.createClass({

  propTypes: {
    clients: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    })),
  },

  getDefaultProps() {
    return {
        clients: [],
    };
  },

  componentDidMount() {

  },

  render() {
    return (
      <div className="page CreateLogger">
        <h1 className="heading">Create Logger</h1>
        <div className="page-contents">
          <form>
            <h4>Logger ID</h4>
            <div>
              <input type='text' className='CreateLogger__logger-id' placeholder='<Specify>' />
            </div>
            <br/>
            <h4>Configuration</h4>
            <div>
              <textarea value={this.props.configuration} />
            </div>
            <h4>Client</h4>
            <div>
              <select className='CreateLogger__client'>
                  {this.props.clients.map((client) => (<option value={client.id}>{client.name}</option>))}
              </select>
            </div>
            <br/>
            <input type='button' value='Create' />
          </form>
        </div>
      </div>
    );
  }
});

export default CreateLogger;
