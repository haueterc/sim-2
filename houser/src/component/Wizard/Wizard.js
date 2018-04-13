import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Wizard extends Component {
    constructor() {
        super();
        this.state={
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: 0,
            nextAction: false
        };
        this.updateName = this.updateName.bind( this );
        this.updateAddress = this.updateAddress.bind( this );
        this.updateCity = this.updateCity.bind( this );
        this.updateState = this.updateState.bind( this );
        this.updateZipcode = this.updateZipcode.bind( this );
        this.sendProperty = this.sendProperty.bind( this );
        this.deleteProperty = this.deleteProperty.bind( this );
    }

    updateName( name ) {
        console.log( name )
        this.setState({ name });
    }
    updateAddress( address ) {
        console.log( address )
        this.setState({ address });
    }
    updateCity( city ) {
        console.log( city )
        this.setState({ city });
    }
    updateState( state ) {
        console.log( state )
        this.setState({ state });
    }
    updateZipcode( zipcode ) {
        console.log( zipcode )
        this.setState({ zipcode });
    }
    sendProperty() {
        const { name, address, city, state, zipcode } = this.state;
        axios.post('http//localhost:4000/api/houses', {
            name: name,
            address: address,
            city: city,
            state: state,
            zipcode: zipcode
        }).then();
    }
    cancelProperty() {
        const { name, address, city, state, zipcode } = this.state;
        this.setState({
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: 0,
        })
    }
    render() {
        // Destructuring
        const { name, address, city, state, zipcode } = this.state;
        return (
            <div>
            <div>Wizard</div>
            <input 
                className="name"
                placeholder="name"
                value={ name }
                onChange={ (e) => this.updateName( e.target.value ) } />

            <input 
                className="address"
                placeholder="address"
                value={ address }
                onChange={ (e) => this.updateAddress( e.target.value ) } />

            <input 
                className="city"
                placeholder="city"
                value={ city }
                onChange={ (e) => this.updateCity( e.target.value ) } />

            <input 
                className="state"
                placeholder="state"
                value={ state }
                onChange={ (e) => this.updateState( e.target.value ) } />

            <input 
                className="zipcode"
                placeholder="zipcode"
                value={ zipcode }
                onChange={ (e) => this.updateZipcode( e.target.value ) } />

            <Link to={'/'} key={'lksjdf;l'}>
            <button onCLick={ () => this.sendProperty }>Complete</button>
            </Link>

            <Link to={'/'} key={ 'unielakdjf' }><button onClick={ () => this.cancelProperty }>Cancel</button></Link>
            </div>
        );
    }
}

export default Wizard