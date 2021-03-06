import store from './configureStore';

import appInitSaga from './sagas/appInit';
import { initCurrenciesSaga } from './sagas/userCurrencies';
import rootSaga from './saga';

store.runSaga(rootSaga);
store.runSaga(appInitSaga);
store.runSaga(initCurrenciesSaga);

export default store;
