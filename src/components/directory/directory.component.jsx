import React from 'react';
import './directory.scss';
import MenuItem from '../menuItem/menuItem.component';
import { connect } from 'react-redux';
import { selectSession } from '../../redux/directory/directory.selector';
import { createStructuredSelector } from 'reselect';

class Directory extends React.Component {

    render() {
        const { sessions } = this.props;
        return (
            <div className='directory-menu'>
                {sessions.map(({ id, ...others }) => (
                    <MenuItem key={id} {...others} />
                ))}
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    sessions: selectSession
})

export default connect(mapStateToProps)(Directory);