import React from "react";
import "./index.css"

let cls = '';

class NumberList extends React.Component {
    state = {
        isEven: "",
    };
    onClickOne = () => {
        this.setState({isEven: true})
    }
    onClickTwo = () => {
        this.setState({isEven: false})
    }
    onClickThree = () => {
        this.setState({isEven: null})
    }

    render() {
        const list = [2, 4, 6, 8, 10];
        return (
            <div>
                <div>
                    <button onClick={this.onClickOne}>奇数行加深</button>
                    <button onClick={this.onClickTwo}>偶数行加深</button>
                    <button onClick={this.onClickThree}>正常展示</button>
                </div>
                {
                    list.map((item, index) => {
                            // const cls=isEven?"line even":"line";
                            //Es6模板字符串
                            if (this.state.isEven === true) {
                                if (index === 0 || index === 2 || index === 4) {
                                    cls = "line even";
                                } else {
                                    cls = "line";
                                }
                            } else if (this.state.isEven === false) {
                                if (index === 1 || index === 3 || index === 5) {
                                    cls = "line even";
                                } else {
                                    cls = "line";
                                }
                            } else if (this.state.isEven === null) {
                                cls = "line";
                            }
                            return (
                                <p className={cls} key={item}>
                                    {item}
                                </p>
                            );
                            // list.map((item,index)=> {
                            //     const isEven = index % 2;
                            //
                            //     // const cls=isEven?"line even":"line";
                            //     //Es6模板字符串
                            //     if (isEven){
                            //
                            //     }
                            //     const cls = `line  ${isEven ? 'even':''}`;
                            //     return (
                            //         <p  className={cls} key={item}>
                            //             {item}
                            //         </p>
                            //     );
                        }
                    )
                }
            </div>
        );
    }
}

export default NumberList