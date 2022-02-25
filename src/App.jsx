import logo from './logo.svg';
import './App.css';
import React from 'react';
import { connect } from 'react-redux';
import { Navigate, Redirect } from 'react-router-dom';

class App extends React.Component {
  render() {
    if(!this.props.token) {
      return (
        <Navigate to="/login" />
      )
    }

    return (
      <p> {this.props.token } </p>
    )
  }
}

export default connect((state) => ({token: state.auth.token }) )(App);
