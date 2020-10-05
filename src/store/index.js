import { createStore } from 'easy-peasy';
import counterModel from './models/counter';

const storeModel = {
  counter: counterModel,
};

const store = createStore(storeModel);

export default store;