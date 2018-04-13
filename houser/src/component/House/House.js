import React from 'react';

export default function House() {
    render() {
        const { name, address, city, state, zip } = this.props;
        const { deleteHouse } = this.props;
        return (
            <div>
            <div>House</div>
            <div>{name}</div>
            <div>{address}</div>
            <div>{city}</div>
            <div>{state}</div>
            <div>{zip}</div>
            <button onClick={deleteHouse}>Delete</button>
            </div>
        );
    }
}