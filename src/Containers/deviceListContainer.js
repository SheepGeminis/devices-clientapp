import React, { Component } from 'react';
import List from '../Components/List'
import axios from 'axios'

class deviceListContainer extends Component {

    state = {
        devices: []
    }

    componentDidMount(){

        axios.get('http://localhost:3000/devices')
        .then(res => {
            const devices = res.data

            this.setState({
                devices: devices
            })
        })
        
        .catch(error => {
            console.log(error)
        })

    }
    
    render() {

        const { devices } = this.state;

        return (

            <List dispositivos = { devices } />
        )
    }
}

export default deviceListContainer