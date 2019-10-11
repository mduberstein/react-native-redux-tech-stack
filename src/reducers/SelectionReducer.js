// default parameter takes care of the first reducer call at startup, when initial state === undefined
export default (state = null, action) => {
  // console.log(action);
  // // initial state return acceptable to redux
  // return null;

  // reducer boilerplate
  switch(action.type){
    case 'select_library':
      return action.payload;
    default:
      return state;
  }
};