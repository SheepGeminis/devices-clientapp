import { Fragment } from "react";
import React from 'react';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import axios from 'axios'


function List({dispositivos}) {

    const deleteDevice = (dispositivo) => {

        if(window.confirm(`¿Está seguro de que desea eliminar el dispositivo ${dispositivo.system_name}?`)){

        axios.delete(`http://localhost:3000/devices/${dispositivo.id}`)
          .then((response) => {
            alert('El dispositivo se ha eliminado con éxito');
            window.location.reload()
            }, (error) => {
                alert('Error');
          });        
    }}

    return(
        
        <Fragment>
        <Table striped bordered hover size='sm'>
            <thead>
                <tr>
                    <td>Nombre del Dispositivo</td>
                    <td>Tipo</td>
                    <td>Capacidad de Memoria</td>
                    <td>Controles</td>
                </tr>
            </thead>
            <tbody>
                {dispositivos.map((dispositivo, index) => {
            return (
                <tr>
                    <td>{dispositivo.system_name}</td>
                    <td>{dispositivo.type}</td>
                    <td>{dispositivo.hdd_capacity}</td>
                    <td><Button variant="info" href={`/edit/${dispositivo.id}`}>Editar</Button>
                    <Button variant="danger" onClick={() => {deleteDevice(dispositivo)}}>Eliminar</Button></td>
                </tr>
            );})}
            </tbody>
        </Table>

        <Button variant="info" href='/add'>Añadir</Button>

        </Fragment>

    )
}

export default List;