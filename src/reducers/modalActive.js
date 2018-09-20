import C from '../constants';

const modalActive = (state=false, action) => {

    switch(action.type) {
  
      case C.TOGGLE_MODAL : 
        return !state;   

      default:
        return state;
    }
  
  };

  export default modalActive;