import React from "react";
import './App.css';
import HelloWord from "./HelloWord";
import HelloWorldFn from "./HelloWorldFn";
import Input from "./INPUT";
import NumberList from "./NumberList";
import Fb from "./Math/Fibonaccisequence";
//设置参数对象
const menus = [
    {
        title: "hello world",
        Component: HelloWord,
        groupTitle: "Day1"

    },
    {
        title: "hello world fn",
        Component: HelloWorldFn,


    },
    {
        title: "hello world List",
        Component: NumberList,


    },
    {
        title: "hello world fb",
        Component: Fb,


    },
    {
        title: "hello world Input",
        Component: Input,


    },
]

class App extends React.Component {
    state = {
        menuIndex: 0,
    };


    onMenuChange = menuIndex => {
        this.setState({menuIndex})
    };

    render() {
        const {menuIndex} = this.state
        const {title, Component} = menus[menuIndex];

        return (
            <div className="app">
                <div className="menu">
                    <ul>{menus.map((item, index) => {
                        const isCurrent = index === menuIndex;
                        const groupTitle = item.groupTitle;
                        return (
                            <li
                                className={isCurrent ? 'active' : ''}
                                onClick={() => this.onMenuChange(index)}
                                key={index}
                            >
                                {groupTitle && <h2>{groupTitle}</h2>}
                                {item.title}
                            </li>
                        );
                    })}
                    </ul>
                </div>
                <div className="main">
                    <Component/>
                </div>
            </div>
        );
    }
}
export default App;
