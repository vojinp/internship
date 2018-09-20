import C from '../constants';

const date = (state=new Date(), action) => {

    switch(action.type) {
  
      case C.SET_DATE : 
        return new Date();   

      default:
        return state;
    }
  
  };

  export default date;