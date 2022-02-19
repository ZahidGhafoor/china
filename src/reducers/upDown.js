const initial = 20

const changeTheNumber = (state = initial, action)=>{
    if(action.type =="INCRIMENT"){
        return state + 1
    }
    else if(action.type=="DECRIMENT"){
        return state - 1
    }
    else{
        return state
    }



}

export default changeTheNumber