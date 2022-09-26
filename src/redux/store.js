import { createStore, applyMiddleware, compose } from "redux"
import createSagaMiddleware from "redux-saga"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage" 
import reducers from "./reducers"
import sagas from "./sagas"

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware]

const persistConfig = {
    key: "root",
    storage,
}

const persistedReducer = persistReducer(persistConfig, reducers)

export function configureStore(initialState) {
    
    const store = createStore(persistedReducer, initialState, compose(applyMiddleware(...middlewares)))

    let persistor = persistStore(store)

    sagaMiddleware.run(sagas)

    if (module.hot) {
        module.hot.accept("./reducers", () => {
            const nextRootReducer = require("./reducers")
            store.replaceReducer(nextRootReducer)
        })
    }

    return { store, persistor }
}