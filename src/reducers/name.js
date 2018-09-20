import C from '../constants';

const name = (state='', action) => {

    switch(action.type) {
  
      case C.CHANGE_NAME : 
        return action.payload;  

      case C.CLEAR_NAME : 
        return '';

      default:
        return state;
    }
  
  };

  export default name;