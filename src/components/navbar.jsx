import React, { Component } from 'react';


class NavBar extends Component {
    render() {
        return (<div>

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Card</a>
                <bagde className="badge-pill badge-secondary">{this.props.total}</bagde>
            </nav>
        </div>);
    }
}

export default NavBar;