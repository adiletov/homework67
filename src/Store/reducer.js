const initialState = {
    result: '',
    keys: '1234',
    style: ''
};

const reducer = (state = initialState, action)=>{
    switch (action.type) {
        case 'NUMBER':
            if (state.result.length < 4){
                return {...state, result: state.result + action.value, typeInput: 'password' };
            }else{
                return state;
            }
        case 'DELETE':
            if (state.result === 'Access Granted' || state.result === 'No access'){
                return {...state, result: '', style: ''}
            }
            return {...state, result: state.result.substring(0, state.result.length -1)};
        case 'ENTER':
            if (state.result === state.keys){
                return  {...state,result: 'Access Granted', typeInput: 'text' , style: 'green'}
            }else{
                return {...state, result: 'No access', typeInput: 'text' , style: 'red'}
            }
        default:
            return state
    }

};

export default reducer;

