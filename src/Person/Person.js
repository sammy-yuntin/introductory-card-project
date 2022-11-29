import React from "react"
 

const Person = (props) => {
    return( 
    <div className="contactcard">
        <h2 onClick={props.clickWIthParagraph}>I'm {props.name} and i am {props.age} years old.</h2>
        <input type="text" onChange={props.changeName} value={props.name}/>
    </div>
        
    )
}; 

export default Person