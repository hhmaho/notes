import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createBrowserHistory, routerReducer, routerMiddleware, startListener } from 'redux-first-routing'
import { composeWithDevTools } from 'redux-devtools-extension'

const history = createBrowserHistory()

// store/app.js:

const initialAppState = {

}

const appReducer = (state = initialAppState, action) => state

//

const rootReducer = combineReducers(
    {
        app: appReducer,
        router: routerReducer
    }
)

const store = createStore(
    rootReducer,
    {},
    composeWithDevTools(applyMiddleware(routerMiddleware(history)))
)

startListener(history, store)

export default store