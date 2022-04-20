import userReducer from '../Container/redux/reducer/Mainreducer';
import { configureStore } from '@reduxjs/toolkit'
const store=configureStore({
    reducer: userReducer
}
    );
export default store;