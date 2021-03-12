import React, { Component } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Fragment } from 'react'

class editDevice extends Component {
    constructor(props) {
        super(props);

        this.editDevice = this.editDevice.bind(this);

        this.state = {
            device: []
        }
}

    componentDidMount(){

        console.log('http://localhost:3000/devices/'+this.props.match.params.id)

        axios.get('http://localhost:3000/devices/'+this.props.match.params.id)
        .then(res => {
            const device = res.data

            this.setState(
                device
            )
        })
        
        .catch(error => {
            console.log(error)
        })
        console.log(this.state)
    }

    editDevice() {

        axios.put(`http://localhost:3000/devices/`+this.props.match.params.id, {
          system_name: this.state.system_name,
          type: this.state.type,
          hdd_capacity: this.state.hdd_capacity
         })
          .then((response) => {
            alert('El dispositivo se ha editado con éxito')
            }, (error) => {
                alert('Error');
          });
    }

    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState( {[nam]: val})
        console.log(val)
    }

    render() {

        const { device } = this.state;

    return (

        <Fragment>
            <Form>
            <Form.Group controlId="addDevice.ControlInput1">
                <Form.Label>Nombre del dispositivo:</Form.Label>
                <Form.Control type='text' name='system_name' value={this.state.system_name} onChange={this.myChangeHandler}/>
            </Form.Group>
            <Form.Group controlId="addDevice.ControlSelect1">
                <Form.Label>Tipo de dispositivo:</Form.Label>
                <Form.Control as="select" name='type' value={this.state.type} onChange={this.myChangeHandler}>
                <option>Selecciona un tipo de dispositivo</option>
                <option value="MAC">MAC</option>
                <option value="WINDOWS_SERVER">WINDOWS_SERVER</option>
                <option value="WINDOWS_WORKSTATION">WINDOWS_WORKSTATION</option>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="addDevice.ControlTextarea1">
                <Form.Label>Capacidad de Almacenamiento (Gb):</Form.Label>
                <Form.Control type="number" name='hdd_capacity' value={this.state.hdd_capacity} onChange={this.myChangeHandler}/>
            </Form.Group>
            </Form>

            <Button variant='info' onClick={this.editDevice}
            >Editar</Button><Button href='/' variant='danger'>Volver</Button>
        </Fragment>
    )
}
}

export default editDevice;

