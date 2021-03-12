import React, { Component } from 'react';
import Add from '../Components/Add'


class deviceAddContainer extends Component {
  
  render(){

    return (
      <Add />
      )
}}

export default deviceAddContainer;

// --------------------->


// import React, { Component } from 'react';
// import { Fragment } from 'react'

// class DeviceForm extends Component {
//   constructor() {
//     super();
//     this.state = {
//       system_name: '',
//       type: '',
//       hdd_capacity: '',
//     };
//   }

//   onChange = (e) => {
//     /*
//       Because we named the inputs to match their
//       corresponding values in state, it's
//       super easy to update the state
//     */
//     this.setState({ [e.target.name]: e.target.value });
//   }

//   render() {
//     const { system_name, type, hdd_capacity } = this.state;
//     return (

//       <form>
//         <label for="system_name">Nombre del Dispositivo</label>
//         <input
//           type="text"
//           name="system_name"
//           value={system_name}
//           onChange={this.onChange}
//         />
//         <label for="type">Tipo de Dispositivo</label>
//         <input
//           type="text"
//           name="type"
//           value={type}
//           onChange={this.onChange}
//         />
//         <label for="hdd_capacity">Capacidad de Memoria</label>
//         <input
//           type="number"
//           name="hdd_capacity"
//           value={hdd_capacity}
//           onChange={this.onChange}
//         />
//       </form>

//     );
//   }
// }