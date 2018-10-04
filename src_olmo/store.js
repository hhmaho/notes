import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory, routerReducer, routerMiddleware, startListener } from 'redux-first-routing'

const appState = { foo: 1 }

const appReducer = (state = appState, action) => {
    if (action.type === "FOO") {
        return {
            foo: state.foo + 1
        }
    }
    return state
}

const history = createBrowserHistory()

const reducer = combineReducers({
    app: appReducer,
    router: routerReducer,
})

const middleware = applyMiddleware(routerMiddleware(history))

const store = createStore(reducer,
    composeWithDevTools(middleware))

startListener(history, store)

export default store
