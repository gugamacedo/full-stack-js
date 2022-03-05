import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import TemplateDefault from './templates/Default/Default'
import Home from './pages/Home'

const App = () => (
  <TemplateDefault>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  </TemplateDefault>
)

export default App
