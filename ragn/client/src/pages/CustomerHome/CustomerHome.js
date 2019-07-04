import React from "react";

class CustomerHome extends React.Component {
    state = {
        id: "",
        name: ""
    }

    componentDidMount() {
        // Loading session data to the profile page
        this.setSessionData();
    }

    setSessionData = () => {
        this.setState({
        id: this.props.location.state.detail._id,
        name: this.props.location.state.detail.contact
        })
    }

    render() {
        console.log(this.state.id, this.state.name);
    return (
        <div style={{backgroundImage: "none"}}>
            <h1>Welcome {this.state.name}</h1>
        </div>
    )
    }
}

export default CustomerHome;