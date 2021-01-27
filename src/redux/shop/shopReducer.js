import { UPDATE_COLLECTIONS } from '../constants';
import SHOP_DATA from './Shop.data';

const INITIAL_STATE = {
  collections: SHOP_DATA
};

const shopReducer = ( state = INITIAL_STATE, action)=>{
    switch(action.type){
        case UPDATE_COLLECTIONS:
          return {
            ...state,
            collections: action.payload
          }
        default:
            return state
    }
}

export default shopReducer