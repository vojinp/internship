import C from '../constants';

const items = (state=[], action) => {

    switch(action.type) {
  
      case C.ADD_ITEM : 
    
        return [
             ...state,
             action.payload
           ];
  
      case C.REMOVE_ITEM :
  
        return state.filter((item) => item.id !== action.payload)  ;   
  
      default:
        return state;
    }
  
  };

  export default items;