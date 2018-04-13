const initialState={
    applicant: 'Chandler Haueter',
    address: '123',
    city: 'Provo',
    state: 'UT',
    zipcode: 11111
}

const UPDATE_APPLICANT = "UPDATE_APPLICANT";

function reducer( state = initialState, action) {
    switch( action.type ) {
        case UPDATE_APPLICANT:
        return Object.assign({}, state, { applicant: action.payload })

        default: return state;
    }
}

export function updateApplicant() {
    return {
        type: UPDATE_APPLICANT,
        payload: applicant
    }
}

export default reducer;