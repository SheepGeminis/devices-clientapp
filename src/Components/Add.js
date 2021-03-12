import { Fragment } from 'react';
import React, { Component } from 'react';
import axios from 'axios'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class Add extends Component {

    constructor(props){
        super(props);
        this.state = {
            system_name: '',
            type: '',
            hdd_capacity: ''
        }        
        this.addDevice = this.addDevice.bind(this)
    }

    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val})
        console.log(val)
    }

    addDevice() {

        axios.post('http://localhost:3000/devices', {
          system_name: this.state.system_name,
          type: this.state.type,
          hdd_capacity: this.state.hdd_capacity
         })
          .then((response) => {
            alert('El dispositivo se ha añadido con éxito')
            }, (error) => {
                alert('Error');
          });
    }

    render(){

    return (

        <Fragment>
            <Form>
            <Form.Group controlId="addDevice.ControlInput1">
                <Form.Label>Nombre del dispositivo:</Form.Label>
                <Form.Control type='text' name='system_name' onChange={this.myChangeHandler}/>
            </Form.Group>
            <Form.Group controlId="addDevice.ControlSelect1">
                <Form.Label>Tipo de dispositivo:</Form.Label>
                <Form.Control as="select" name='type' onChange={this.myChangeHandler}>
                <option>Selecciona un tipo de dispositivo</option>
                <option value="MAC">MAC</option>
                <option value="WINDOWS_SERVER">WINDOWS_SERVER</option>
                <option value="WINDOWS_WORKSTATION">WINDOWS_WORKSTATION</option>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="addDevice.ControlTextarea1">
                <Form.Label>Capacidad de Almacenamiento (Gb):</Form.Label>
                <Form.Control type="number" name='hdd_capacity' onChange={this.myChangeHandler}/>
            </Form.Group>
            </Form>

            <Button variant='info' onClick={this.addDevice}
            >Añadir</Button><Button href='/' variant='danger'>Volver</Button>
        </Fragment>
    )
}
}

export default Add;

