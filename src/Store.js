

import {createStore} from "redux";
import {Counterreducer} from './Services/Reducer/Counterreducer';

const store = createStore(Counterreducer);

export default store;