import React, { Component } from 'react';
import './counter'
import './counter.scss'

class Counter extends Component {
    state = {
        count: this.props.count,
        id: this.props.counter.id,
        tags: ['tag1', 'tag2', 'tag3', 'tag4']
    }

    constructor(props) {
        super(props);

        this.handle = this.handle.bind(this);

    }
    handle() {
        this.setState({ count: this.state.count + 1 });
    }

    // handle = () => {
    //     console.log("this is hahahhahahhahahah: ");
    //     this.setState({ count: this.state.count++ });
    // }

    getCount() {
        return this.props.counter.count === 0 ? "Zero" : this.props.counter.count;

    }

    render() {
        return (
            <div className="wrap">
                <div className={this.getBadgeClass()}>{this.getCount()}</div>

                {/* //do this when we don't have arguments in the func */}
                {/* <button className='btn btn-primary' onClick={this.handle}>Increase</button> */}
                {/* //do this when we don have arguments in the func */}

                {/* <button className='btn btn-primary btn-sm m-2' onClick={() => { this.handle() }}>Increase</button> */}

                {/* controller model: the props will be controll by parents */}
                <button className='btn btn-primary btn-sm m-2' onClick={() => this.props.onIncrease(this.props.counter)}>Increase</button>

                <button className="btn btn-danger btn-sm m-2" onClick={() => this.props.onDelete(this.state.id)}>Delete</button>

                {/* {this.format()} */}
                {/* {console.log("djfksdfksjdflksjd")} */}
                {/* <ul>
                    {this.state.tags.map((tag, index) => <li key={tag}>{tag} - {index}</li>)}
                </ul> */}
                {/* {this.state.count === 0 && "Count equals 0 - This is render with condition logically"} */}

            </div>
        );
    }

    getBadgeClass() { //refactor tips: Ctrl + shift + R
        let classes = "badge badge-";
        classes += this.props.counter.count % 5 === 0 ? "warning" : "primary";
        return classes;
    }

    format() {
        const { count } = this.props.counter;
        return count === 0 ? <h1>Zero</h1> : count;
    }
}

export default Counter;