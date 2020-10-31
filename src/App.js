import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './stylesheet/tailwind.output.css'
import './stylesheet/style.css'
import {Home} from './components/Home'
import { AddEmployee } from './components/AddEmployee'
import { GlobalProvider } from './context/GlobalState'
import { EditEmployee } from './components/EditEmployee'
const App = () => {
  return (
    <GlobalProvider>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/add" component={AddEmployee} exact />
        <Route path="/edit/:id" component={EditEmployee} exact />
      </Switch>
    </GlobalProvider>
  );
}

export default App;
