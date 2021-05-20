import { Route, Switch, BrowserRouter } from 'react-router-dom'

import { Home } from './components/Home'
import ThankYou from './components/ThankYou'

export default props => {

    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/thankYou' component={ThankYou} />
            </Switch>
        </BrowserRouter>
    )
}