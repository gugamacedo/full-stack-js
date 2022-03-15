import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import TemplateDefault from './templates/Default'
import TemplatePage from './templates/Page'
import TemplateClean from './templates/Clean'

import Home from './pages/Home'
import Login from './pages/Login'
import CustomersList from './pages/customers/List'
import CustomersAdd from './pages/customers/Add'
import CustomersEdit from './pages/customers/Edit'

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/login">
        <TemplateClean title="Acesso Restrito" Component={Login} />
      </Route>
      <TemplateDefault>
        <Route exact path="/">
          <TemplatePage title="Home" Component={Home} />
        </Route>
        <Route exact path="/customers">
          <TemplatePage title="Listar Clientes" Component={CustomersList} />
        </Route>
        <Route exact path="/customers/add">
          <TemplatePage title="Adicionar Clientes" Component={CustomersAdd} />
        </Route>
        <Route exact path="/customers/edit/:id">
          <TemplatePage title="Editar Clientes" Component={CustomersEdit} />
        </Route>
      </TemplateDefault>
    </Switch>
  </Router>
)

export default App
