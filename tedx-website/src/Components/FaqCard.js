import React from 'react'
import Collapsible from 'react-collapsible'

export default function FaqCard(props) {
    return (
      <div className="columns section has-text-centered">
      <Collapsible trigger={props.title} triggerStyle={{color:"#ffffff"}}>
        <p>{props.content}</p>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </Collapsible>
      </div>
    )
}
