const redux = require('redux');

const counterReduce = (state = {counter:0}, action) => {

    if(action.type === 'increment'){
        return {
            counter: state.counter+1 
        };
    }
    if(action.type === 'decrement'){
        return{
            counter: state.counter-1 
        }
    }
    else
    return state ;


};

const store = redux.createStore(counterReduce);


const counterSubscriber =()=>{
    const latestStore = store.getState();
    console.log(latestStore);
};

store.subscribe(counterSubscriber);
store.dispatch({type :'increment'});
store.dispatch({type:'decrement'});

export default store ;