import React from "react";
import {useSelector} from 'react-redux'
const CounterDisplay = ()=>{
    const counter = useSelector(state=>state.counter);
    return(
        <div>
            <p>当前计数:{counter}</p>
        </div>
    )
}
const firstName = useSelector(state=>state.user.firstName)
const LastName = useSelector(state=>state.user.LastName)
import {shallowEqual} from 'react-redux'
const user = useSelector(
    state=>({
        firstName:state.user.firstName,
        lastName:state.user.lastName
    })
    shallowEqual
)
export default CounterDisplay