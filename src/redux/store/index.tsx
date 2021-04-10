import { applyMiddleware,createStore,combineReducers,Middleware } from 'redux'
import rootReducer from '../reducers'
import rootEpic from '../epics';
import thunk from 'redux-thunk'
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history'
import { connectRouter, routerMiddleware } from 'connected-react-router'

const epicMiddleware = createEpicMiddleware();
const middleware: [Middleware] = [epicMiddleware]

export const history = createBrowserHistory()

const reducer = combineReducers({
    router: connectRouter(history),
    ...rootReducer,
})

middleware.push(routerMiddleware(history))

const store = createStore(reducer, {}, composeWithDevTools(
    applyMiddleware(thunk,...middleware),
));

epicMiddleware.run(rootEpic);

export default store;