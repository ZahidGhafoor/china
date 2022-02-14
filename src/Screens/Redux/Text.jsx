import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

import { addnum, minnum } from '../../actions/index'

const Text = () => {

    const myState = useSelector((state)=>state.changeTheNumber)
    const dispatch = useDispatch()


    // const [num, setNum] = useState(10)

    // const addnum = () => {
    //     setNum(num + 1)
    // }
    // const minnum = () => {
    //     setNum(num - 1)
    // }
    return (
        <div style={{display:"flex", margin:"4rem"}}>
            <h1 onClick={()=>dispatch(addnum())}>+</h1>
            <h2  style={{padding:" 0 2rem"}}>{myState}</h2>
            <h1 onClick={()=>dispatch(minnum())}>-</h1>
        </div>
    )
}

export default Text