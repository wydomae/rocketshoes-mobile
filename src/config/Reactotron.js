import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';

if (__DEV__) {
  const tron = Reactotron.configure({
    host: '127.0.0.1',
  })
    .use(reactotronRedux())
    .use(reactotronSaga())
    .useReactNative()
    .connect();

  tron.clear();

  console.tron = tron;
}
