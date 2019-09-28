import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip'

class ToolipComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <div>Hello tooltip</div>
                <p data-tip="hello world">Tooltip</p>
                <ReactTooltip />
            </div>
        );
    }
}

export default ToolipComponent;