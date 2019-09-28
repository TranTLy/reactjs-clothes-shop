import React, { Component } from 'react';
import './detect-mobile.scss';
import { isMobile } from 'react-device-detect';

class DetectMobile extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    changed = () => {
        window.location.href = "/home";
    }
    render() {
        return (<div>
            {isMobile &&
                (
                    <div>This is mobile view</div>
                )
            }

            <div onClick={this.changed}>
                Click this
            </div>
        </div>);
    }
}

export default DetectMobile;