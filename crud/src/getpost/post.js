import React from "react";
import GetUsers from "./get";

class PostUsers extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            namee: '',
            occupation: ''
        }
    }

    GetData = e => this.setState({ [e.target.name]: e.target.value });

    PostData = () => {
        console.log(this.state);
        <GetUsers />
    }

    render() {
        // const { name, occupation } = this.state
        return (
            <div>
                <input type="text" id="name" name="namee" value={this.state.namee} placeholder="Name" onChange={this.GetData} />
                <input type="text" id="occupation" name="occupation" value={this.state.occupation} placeholder="Occupation" onChange={this.GetData} />
                <button type="button" onClick={this.PostData}>Save</button>
            </div >
        )
    }
}

export default PostUsers