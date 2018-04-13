import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {connect} from 'react-redux';
import { updateApplicant } from '../../ducks/reducer';

class Header extends Component {
    render() {
        const { applicant } = this.props
        const { updateApplicant } = this.props;
    return (
        <div>
        <div>Header</div>
        <input placeholder={ applicant } onChange={ (e) => updateApplicant(e.target.value) } />
        
        </div>
    )
  }
}

function mapStateToProps( state ) {
    const { applicant } = state;

    return {
        applicant
    };
}

export default connect( mapStateToProps, { updateApplicant } )( Header );