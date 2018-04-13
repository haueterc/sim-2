import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import House from '../House/House';

class Dashboard extends Component {
    constructor() {
        super();
        this.state={
            houses: [],
            update: []
        };
        this.updateHouse = this.updateHouse.bind(this);
        this.deleteHouse = this.deleteHouse.bind(this);
    }

    componentDidMount() {
        axios.get('http//localhost:4000/api/houses').then( results => {
            this.setState({
                houses: results.data
            });
        });
    }

    updateHouse(update) {
        const { name, address, city, state, zipcode } = this.update;
        axios.put(`http://localhost:4000/api/houses?id=${this.props.match.params.id}`, {
            name: name,
            address: address,
            city: city,
            state: state,
            zipcode: zipcode
        }).then( results => {
            this.setState({
                houses: results.data
            })
        });
    }

    deleteHouse( id ) {
        axios.delete(`http://localhost:4000/api/houses?id=${ id }`).then( results => {
            this.setState({ houses: results.data});
        });
    }

    render() {
        const houses = this.state.houses.map((house, i) => (
            <House 
                key={i}
                name={house.name}
                address={house.address}
                city={house.city}
                state={house.state}
                zipcode={house.zipcode}
                updatePostFn={ this.updateHouse}
                deletePostFn={ this.deleteHouse}/>
        ));
        return (
            <div>
            <Link to={'/wizard'} key={ i }>Add New Property</Link>
            <div>Dashboard</div>
            { houses }
            </div>
        );
    }
}

export default Dashboard