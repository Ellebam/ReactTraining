import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      /*with the gapi.load() method you have to pass a callback function
        as the second argument, since it starts an asynchronous action. The
        gapi.client.init() function instead will return a promise. This 
        enables us to chaing a .then function to catch that promise for
        a new action*/
      window.gapi.client
        .init({
          clientId:
            '931693994122-22f87d722frb8hllbtmunk6cfqfc88nv.apps.googleusercontent.com',
          scope: 'email',
        })
        .then(() => {
          //reference to auth instance to check the current authentication
          //status
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn();
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} className=' ui red google button'>
          <i className='google icon' /> Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignInClick} className=' ui blue google button'>
          <i className='google icon' /> Sign in with Google
        </button>
      );
    }
  }

  render() {
    return <div> {this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};
export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
