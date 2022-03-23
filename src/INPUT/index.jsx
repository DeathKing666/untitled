import React from "react";
import "./index.css"
export default class Input extends React.Component{
    state={
        value:"",
    };
    inputRef=React.createRef();

    onInputFocus=()=>{
        this.setState({value: "默认的初始值"})
    }
    onInputChange=e=>{
        console.log(e.target.value)
        this.setState({value:e.target.value})
    };
    render() {
        const{value}=this.state;
        return(
            <>
                <h2>{value}</h2>
                <input onFocus={this.onInputFocus} onChange={this.onInputChange} value={value}/>

            </>
        )
    }
}