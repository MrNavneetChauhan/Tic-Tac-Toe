import React, { useContext } from 'react'
import { NameContext } from '../../context/NameProvider'
import "./Message.css"
export const Message = ({message,user,classes}) => {
const {name} = useContext(NameContext);
    if(user){
        return (
            <div className={`messageBox ${classes}`}>
                {`${user} : ${message}`}
            </div>
          )     
    }
    else{
        return (
            <div className={`messageBox ${classes}`}>
                {`${name} : ${message}`}
            </div>
          )
    }
  
}
