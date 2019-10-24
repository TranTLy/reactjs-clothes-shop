import React from 'react';
import { SpinnerOverlay, SpinnerContainer } from './with-spiner.style';

const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
    console.log("isLoading: " + isLoading)
    return isLoading ? (
        <SpinnerOverlay>
            <SpinnerContainer />
        </SpinnerOverlay>
    ) : (
            <WrappedComponent {...otherProps} />
        )
}

export default WithSpinner;




