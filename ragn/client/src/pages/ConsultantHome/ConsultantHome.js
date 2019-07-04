import React from "react";

class ConsultantHome extends React.Component {
    state = {
        id: "",
        name: "",
        regions: []
    }

    componentDidMount() {
        // Loading session data to the profile page
        this.setSessionData();
    }

    setSessionData = () => {
        this.setState({
        id: this.props.location.state.detail._id,
        name: this.props.location.state.detail.contact,
        regions: this.props.location.state.detail.regions
        })
    }

    render() {
        console.log(this.state.id, this.state.name, this.state.regions);
    return (
        <div>
            <h1>Welcome Lawyer</h1>
        </div>
    )
    }
}

export default ConsultantHome;