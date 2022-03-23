import React  from "react";
//相对路径
import './index.css'


class HelloWord extends React.Component{
    static defaultProps={
        content:"默认帅哥，还没有钱"
    }

    state={time:0};
    handleClick=()=>{
        alert('Hello World');
}
    componentDidMount() {

        setInterval(()=>{
            this.setState({
                time:this.state.time+1,
            });
        },1000);
    }

    render() {
        return <div className='hello-word'  onClick={this.handleClick}>
            <h1>{this.props.content}</h1>
           <h1>{this.state.time}</h1>
        </div>
    }

}
    export default HelloWord;