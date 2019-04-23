// To keep the App component clean and concise, I like to extract the session handling for the authenticated user to a separate higher-order component
import React from 'react';

// const withAuthentication = Component => {
//   class WithAuthentication extends React.Component {
//     render() {
//       return <Component {...this.props} />;
//     }
//   }

//   return WithAuthentication;
// };

// export default withAuthentication;


import AuthUserContext from './context';
import { withFirebase } from '../Firebase';

const withAuthentication = Component => {
  class WithAuthentication extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        authUser:  JSON.parse(localStorage.getItem('authUser')),
      };
    }

    componentDidMount() {
      
      this.listener = this.props.firebase.onAuthUserListener(
        authUser => {
          localStorage.setItem('authUser', JSON.stringify(authUser));
          this.setState({ authUser });
          console.log(authUser);
        },
        () => {
          localStorage.removeItem('authUser');
          this.setState({ authUser: null });
        },
      );
    }

    componentWillUnmount() {
      this.listener();
    }

    render() {
      return (
        <AuthUserContext.Provider value={this.state.authUser}>
          <Component {...this.props} />
        </AuthUserContext.Provider>
      );
    }
  }

  return withFirebase(WithAuthentication);
};

export default withAuthentication;