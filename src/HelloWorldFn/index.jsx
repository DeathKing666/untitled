import React  from "react";
//相对路径

function HelloWorldFn(){
    function onClick(){
        alert("Hello fn")
    }
    const style={color:"red"}
    return <div style={style} onClick={onClick}>Hello world</div>
}

    export default HelloWorldFn;