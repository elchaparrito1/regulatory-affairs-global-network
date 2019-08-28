import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../src/actions/session';
import WarningModal from '../src/components/Modals/WarningModal';
import warningIcon from '../src/images/warning.png';

const requiredSessionAuthentication = ComposedComponent => {
  const mapStateToProps = ({ session }) => ({
    session
  });

  const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
  });

  class HOC extends React.Component {
    state = {
      count: 900,
      isOpen: false
    };

    //Lifecycle method for react to initialize timer on load and event listeners for the page
    componentDidMount() {
      this.startTimer();
      window.addEventListener('load', this.resetTimeout);
      window.addEventListener('click', this.resetTimeout);
      window.addEventListener('scroll', this.resetTimeout);
      window.addEventListener('keypress', this.resetTimeout);
    }

    //Lifecycle method that is not initially called, but rather after updating occurs.
    componentDidUpdate(prevProps, prevState) {
      if (prevState.count !== this.state.count) {
        this.warn();
      }

      this.forceLogout();
    }

    //IIFE after component is unmounted
    componentWillUnmount() {
      clearInterval(this.startTimer);
      clearInterval(this.stopTimer);
      clearInterval(this.tick);
      clearInterval(this.resetTimeout);
      clearInterval(this.timer);
      window.removeEventListener('load', this.resetTimeout);
      window.removeEventListener('click', this.resetTimeout);
      window.removeEventListener('scroll', this.resetTimeout);
      window.removeEventListener('keypress', this.resetTimeout);
    }

    //Method for updating count state every second
    tick = () => {
      this.setState({ count: this.state.count - 1 });
    };

    //Method to start the timer, and invoke tick method
    startTimer = () => {
      clearInterval(this.timer);
      this.timer = setInterval(this.tick.bind(this), 1000);
    };

    //Method to clearInterval and stop timer
    stopTimer = () => {
      clearInterval(this.timer);
    };

    //Method to reset count state every time one of the addEventListeners is fired
    resetTimeout = () => {
      this.setState({
        count: 900
      });
      this.startTimer();
    };

    // Method for opening modal
    handleModal = () => {
      if (!this.state.isOpen) {
        this.setState({
          isOpen: true
        });
      } else if (this.state.isOpen) {
        window.addEventListener('click', this.resetTimeout);
        this.setState({
          isOpen: false
        });
      }
    };

    //Method that will warn the user the session will soon time out
    warn = () => {
      if (this.state.count === 30) {
        window.removeEventListener('click', this.resetTimeout);
        this.setState({
          isOpen: true
        });
      }
    };

    //Method to force logout user after certain amount of inactivity
    forceLogout = () => {
      if (this.state.count === 0) {
        // Send a logout request to the API
        this.stopTimer();
        this.props.logout();
      }
    };

    // Method to render the head content of the modal
    renderHeader = () => {
      return (
        <h1>
          <span>
            <img
              style={{ width: '30px' }}
              src={warningIcon}
              alt="warning icon"
            />
          </span>{' '}
          Session Warning
        </h1>
      );
    };

    //Method to render the body of the Modal
    renderBody = () => {
      if (this.state.count > 1) {
        return (
          <div>
            <h2>Your session will expire in {this.state.count} seconds</h2>
            <h3>Please click the button below to continue.</h3>
          </div>
        );
      } else {
        return (
          <div>
            <h2>Your session will expire in {this.state.count} second</h2>
            <h3>Please click the button below to continue.</h3>
          </div>
        );
      }
    };

    render() {
      console.log(this.state.count);
      return (
        <>
          <WarningModal
            isOpen={this.state.isOpen}
            handleModal={this.handleModal}
            header={this.renderHeader()}
            body={this.renderBody()}
            footerMethod={this.handleModal}
            footer="Refresh"
          />
          <ComposedComponent {...this.props} />
        </>
      );
    }
  }

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(HOC);
};

export default requiredSessionAuthentication;
