import { Route, Switch, BrowserRouter } from 'react-router-dom'

import { Home } from './components/Home'

export default props => {

    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/thankYou' component={Home} />
            </Switch>
        </BrowserRouter>
    )
}