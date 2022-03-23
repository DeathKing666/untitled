import React from "react";
export default class Fb extends React.Component {

    state = {
        list: [0, 1]
    }

    componentDidMount() {
        setInterval(() => {
            const [a, b] = this.state.list.slice(-2);
            const c = a + b;
            this.setState({
                list: [...this.state.list, c]
            });
        }, 1000);
    }


    render() {
        return (
            <>
                {
                    this.state.list.map((item, index) => (
                        <span>{item} ,</span>)
                    )
                }
            </>
        )
    }
}
