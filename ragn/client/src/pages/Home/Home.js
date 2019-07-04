import React from "react";
import Navigation from "../../components/Navigation/Navigation";
import Login from "../../components/Login/Login";
import Signup from "../../components/Signup/Signup";
import API from "../../utils/API";
import "./Home.css";
// import history from "../../history";

class Home extends React.Component {
    state = {
        company: "",
        contact: "",
        email: "",
        password: "",
        phone: "",
        regions: [],
        classifications: [],
        address: "",
        media: "",
        qualifications: [],
        emailCheck: ""
    }

    handleInputChange = (name) => (event) => {
        if (name === "classifications") {
            this.setState({ 
                classifications: [...this.state.classifications, event.target.value] 
            });
        } else if (name === "regions") {
            this.setState({ 
                regions: [...this.state.regions, event.target.value] 
            });
        } else {
        this.setState({
            [name]: event.target.value
        });
        }
    };

    validateEmail = (email) => {
        // eslint-disable-next-line
        const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        console.log(regex.test(email));
        return regex.test(email);
    };

    generateCapitals = (str) => {
        let result = [];
        str = str.split(" ").forEach(function(word) {
            result.push(word.slice(0).charAt(0).toUpperCase().concat(word.slice(1)));
        });
        return result.join(" ");
    };

    createUser = (e) => {
        e.preventDefault();
        const customerObj = {
            company: this.state.company,
            contact: this.state.contact,
            email: this.state.email,
            password: this.state.password,
            phone: this.state.phone 
        }
        if (!this.validateEmail(this.state.email)) {
            this.setState({
                emailCheck: "invalid email"
            });
        } else {
        API.customerSignup(customerObj)
            .then(response => {
                if (response.data === "email already exists") {
                    this.setState({
                        emailCheck: "email already exists"
                    })
                } else {
                    this.props.history.push({
                        pathname: "/customer",
                        state: { detail: response.data}
                    });
                }
            }).catch(error => {
                console.log(`Sign up server error: ${error}`);
            })
        }
    };

    createConsultant = (e) => {
        e.preventDefault();
        const consultantObj = {
            company: this.state.company,
            contact: this.state.contact,
            email: this.state.email,
            password: this.state.password,
            phone: this.state.phone,
            classifications: this.state.classifications,
            regions: this.state.regions,
            media: this.state.media,
            qualifications: this.state.qualifications
        }
        if (!this.validateEmail(this.state.email)) {
            this.setState({
                emailCheck: "invalid email"
            });
        } else {
        API.consultantSignup(consultantObj)
        .then(response => {
            if (response.data === "email already exists") {
                this.setState({
                    emailCheck: "email already exists"
                })
            } else {
                this.props.history.push({
                    pathname: "/consultant",
                    state: { detail: response.data}
                });
            }
            }).catch(error => {
            console.log(`Sign up server error: ${error}`);
            })
        }
    };

    render() {
            return (
                <div className="bg-image">
                    <Navigation/>
                    {/* <form>
                        <label>Company</label>
                        <input
                        id="company"
                        type="text"
                        placeholder="Your company..."
                        value={this.state.company}
                        autoComplete="off"
                        onChange={this.handleInputChange("company")}
                        />
                        <label>Contact Person</label>
                        <input
                        id="contact"
                        type="text"
                        placeholder="Your contact person..."
                        value={this.generateCapitals(this.state.contact)}
                        autoComplete="off"
                        maxLength="30"
                        onChange={this.handleInputChange("contact")}
                        />
                        <label>Email</label>
                        <input
                        id="email"
                        type="text"
                        placeholder="Your email..."
                        value={this.state.email}
                        autoComplete="off"
                        onChange={this.handleInputChange("email")}
                        />
                        <label>Password</label>
                        <input
                        id="password"
                        type="password"
                        placeholder="Your password..."
                        value={this.state.password}
                        autoComplete="off"
                        onChange={this.handleInputChange("password")}
                        />
                        <label>Phone</label>
                        <input
                        id="phone"
                        type="tel"
                        placeholder="Your phone..."
                        value={this.state.phone}
                        autoComplete="off"
                        onChange={this.handleInputChange("phone")}
                        />
                        <button onClick={this.createUser}>Submit</button>
                    </form>
                    {this.state.emailCheck === "invalid email" && (
                                <div>Invalid email</div>)}
                    {this.state.emailCheck === "email already exists" && (
                                <div>Email already exists</div>)}
                <form>
                <label>Company</label>
                <input
                id="companyCompany"
                type="text"
                placeholder="Your company..."
                value={this.state.company}
                autoComplete="off"
                onChange={this.handleInputChange("company")}
                />
                <label>Contact Person</label>
                <input
                id="contactCompany"
                type="text"
                placeholder="Your contact person..."
                value={this.generateCapitals(this.state.contact)}
                autoComplete="off"
                maxLength="30"
                onChange={this.handleInputChange("contact")}
                />
                <label>Phone</label>
                <input
                id="phoneCompany"
                type="tel"
                placeholder="Your phone..."
                value={this.state.phone}
                autoComplete="off"
                onChange={this.handleInputChange("phone")}
                />
                <label>Email</label>
                <input
                id="emailCompany"
                type="text"
                placeholder="Your email..."
                value={this.state.email}
                autoComplete="off"
                onChange={this.handleInputChange("email")}
                />
                <label>Password</label>
                <input
                id="passwordCompany"
                type="password"
                placeholder="Your password..."
                value={this.state.password}
                autoComplete="off"
                onChange={this.handleInputChange("password")}
                />
                <label>Address</label>
                <input
                id="address"
                type="text"
                placeholder="Your address..."
                value={this.state.address}
                autoComplete="off"
                onChange={this.handleInputChange("address")}
                />
                <label>Classifications</label>
                <select 
                id="classifications"
                autoComplete="off"
                multiple={true}
                onChange={this.handleInputChange("classifications")}>
                value={this.state.classifications}
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                </select>
                <label>Regions</label>
                <select 
                id="regions"
                autoComplete="off"
                multiple={true}
                onChange={this.handleInputChange("regions")}>
                value={this.state.regions}
                    <option value="united states">United States</option>
                    <option value="germany">Germany</option>
                    <option value="brazil">Brazil</option>
                    <option value="china">China</option>
                </select>
                <label>Media</label>
                <input
                id="media"
                type="text"
                placeholder="Your media..."
                value={this.state.media}
                autoComplete="off"
                onChange={this.handleInputChange("media")}
                />
                <label>Qualifications</label>
                <input
                id="qualifications"
                type="text"
                placeholder="Your qualifications..."
                value={this.state.qualifications}
                autoComplete="off"
                onChange={this.handleInputChange("qualifications")}
                />
                <button onClick={this.createConsultant}>Submit</button>
            </form> */}
        <Login/>
            <br />
        <Signup/>
            <br />
    </div>
    )
    }
}

export default Home;