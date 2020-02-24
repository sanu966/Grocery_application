import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import createSagaMiddleware from 'redux-saga';
import HomeContainer from './containers/home/index';
import Login from './containers/login';
import Register from './containers/register';
import plp from './containers/plp';
import { Provider } from 'react-redux';
import reducer from './reducers';
import { createStore, applyMiddleware } from 'redux';
import rootSaga from './rootSaga';


const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

function App(){
  return (
    <Provider store={store}>
    <Router>
      <div>
          <Route exact path="/" component={HomeContainer} />
          <Route path="/plp/:cid" component={plp} />
          <Route path="/login" component={Login} />
          <Route path="/Register" component={Register} />
      </div>
    </Router>
    </Provider>
  );
}

export default App;
