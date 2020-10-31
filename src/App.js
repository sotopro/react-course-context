import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './stylesheet/tailwind.output.css'
import './stylesheet/style.css'
import {Home} from './components/Home'
import { GlobalProvider } from './context/GlobalState'

const App = () => {
  return (
    <GlobalProvider>
      <Switch>
        <Route path="/" component={Home} exact />
      </Switch>
    </GlobalProvider>
  );
}

export default App;
