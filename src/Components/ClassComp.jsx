import { Component } from "react";

class ClassComp extends Component {
    constructor(props) {
        super(props)
        console.log(props)

        this.state = {
            count: 0,
            status: false
        }
    }
    // props to pass data from one component to another
    // state is to handle the data within the component


    // Before 16v there is no state in functional component
    

    render() {
        return (
            <section>
                <div>This is class Component</div>
                <h4>Title: {this.props.title}</h4>
            </section>

        )
    }
}

export default ClassComp