import React from 'react';
import { Switch, Route } from 'react-router-dom';
import deviceListContainer from './Containers/deviceListContainer'
import deviceAddContainer from './Containers/deviceAddContainer'
import editDevices from './Components/Edit'

const Routes = () => {
    return (

        <Switch>
            <Route exact path='/' component={deviceListContainer}/>
            <Route path='/add' component={deviceAddContainer} />
            <Route path='/edit/:id' component={editDevices} />

        </Switch>
    )
}

export default Routes;