import React from "react";
import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText
} from "./error-boundary.style";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hassError: false
    };
  }

  static getDerivedStateFromError(err) {
    //process err
    return { hassError: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hassError) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl="https://i.imgur.com/oCkEbrA.png" />
          <ErrorImageText>Somethings went wrong</ErrorImageText>
        </ErrorImageOverlay>
      );
    }
    return <div>{this.props.children}</div>;
  }
}

export default ErrorBoundary;
