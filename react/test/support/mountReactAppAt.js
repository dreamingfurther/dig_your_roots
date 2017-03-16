import Root from '../../src/Root';
import routes from '../../src/routes';
import configureStore from '../../src/configureStore';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

let mountReactAppAt = (url) => {
  store = configureStore();
  store.dispatch(push(url));

  let history = syncHistoryWithStore(browserHistory, store);
  return mount(
    <Root store={store} history={history} routes={routes}/>
  );
}

export default mountReactAppAt;
