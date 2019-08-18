import React from 'react';
import { Link } from 'react-router-dom';
import BlankModal from '../components/Modals/BlankModal';

class SecondPage extends React.Component {
  state = {
    isOpen: false
  };

  // Method for opening modal
  handleModal = () => {
    if (!this.state.isOpen) {
      this.setState({
        isOpen: true
      });
    } else if (this.state.isOpen) {
      this.setState({
        isOpen: false
      });
    }
  };

  // Method to render the head content of the modal
  renderHeader = () => {
    return <h1>Separate Modal</h1>;
  };

  //Method to render the body of the Modal
  renderBody = () => {
    return (
      <div>
        <h1>This is just a test</h1>
        <p>Want to make sure this will work</p>
      </div>
    );
  };

  render() {
    const { logout, session } = this.props;
    console.log(session);
    return (
      <>
        <BlankModal
          isOpen={this.state.isOpen}
          handleModal={this.handleModal}
          header={this.renderHeader()}
          body={this.renderBody()}
          footerMethod={this.handleModal}
          footer="Close"
        />
        <h1>Hey again {session.username}</h1>
        <p>You are now logged in!</p>
        <button onClick={logout}>Logout</button>
        <button onClick={this.handleModal}>Modal</button>
        <Link to="/dashboard">Dashboard</Link>
      </>
    );
  }
}

export default SecondPage;
