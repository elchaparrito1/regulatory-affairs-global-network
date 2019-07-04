import React from "react";
import BlankModal from "../../components/Modals/BlankModal";
import API from "../../utils/API";
// import Select from "react-select";
import Select from 'react-styled-select'

import {
    Row,
    Column,
    Box,
    Label,
    FormLabel,
    Button,
    Input
} from "./styled";
import "./Signup.css";

const classificationOptions = [
    { value: 'food', label: 'Food' },
    { value: 'food supplement', label: 'Food Supplement' },
    { value: 'medicine', label: 'Medicine' },
    { value: 'cosmetic', label: 'Cosmetic' },
    { value: 'otc', label: 'OTC' },
];  

class Signup extends React.Component {
    state = {
        isOpen: false,
        signupType: "new-customer",
        company: "",
        contact: "",
        email: "",
        password: "",
        phone: "",
        regions: [],
        location: "",
        address1: "",
        locality: "",
        country: "",
        postal: "",
        media: "",
        qualifications: [],
        emailCheck: "",
        classifications: []
    }
      
    // Method for opening modal
    handleModal = () => {
        if(!this.state.isOpen) {
            this.setState({
                isOpen: true
            });
       } else if (this.state.isOpen) {
           this.setState({
                isOpen: false
           });
       }
    };

    // Method for changing state of radio buttons
    handleThisChange = (event) => {
        this.setState({
          signupType: event.target.value
        });
    };

    // Method for updating input fields
    handleInputChange = (name) => (event) => {
        this.setState({
            [name]: event.target.value
        });
    };

    handleChange = classifications => {
        this.setState({ classifications });
    };

    // Method to determine which signup path to use
    chooseType = (e) => {
        e.preventDefault();
        if (this.state.signupType === "new-customer") {
            this.createCustomer(e);
        } else if (this.state.signupType === "new-consultant") {
            this.createConsultant(e);
        }
    };

    // Method for checking for valid email
    validateEmail = (email) => {
        // eslint-disable-next-line
        const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        console.log(regex.test(email));
        return regex.test(email);
    };

    // Method to automatically capitalize first syllables of each name
    generateCapitals = (str) => {
        let result = [];
        str = str.split(" ").forEach(function(word) {
            result.push(word.slice(0).charAt(0).toUpperCase().concat(word.slice(1)));
        });
        return result.join(" ");
    };

    // Method for signing up customer
    createCustomer = (e) => {
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

    // Method for signing up consultant
    createConsultant = (e) => {
        e.preventDefault();
        const consultantObj = {
            company: this.state.company,
            contact: this.state.contact,
            email: this.state.email,
            password: this.state.password,
            phone: this.state.phone,
            location: this.state.location,
            address1: this.state.address,
            locality: this.state.locality,
            country: this.state.country,
            postal: this.state.postal,
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

    // Method to render the body of the modal
    renderBody = () => {
        const { classifications } = this.state;
        return (
            <div style={{border: this.state.typeColor}}>
                <form>
                    <Row>
                        <Column lg="12" md="12" sm="12" xs="12">
                            <FormLabel>Account type *</FormLabel>
                        </Column>
                    </Row>
                    <Row>
                        <Column lg="12" md="12" sm="12" xs="12">
                            <label>
                                <input
                                    type="radio"
                                    className="form-radio"
                                    value="new-customer"
                                    checked={this.state.signupType === "new-customer"}
                                    onChange={this.handleThisChange}
                                />
                                <span> Customer</span>
                            </label>
                        </Column>
                    </Row>
                    <Row>
                        <Column style={{marginBottom: "15px"}} lg="12" md="12" sm="12" xs="12">
                            <label>
                                <input
                                    type="radio"
                                    className="form-radio"
                                    value="new-consultant"
                                    checked={this.state.signupType === "new-consultant"}
                                    onChange={this.handleThisChange}
                                />
                                <span> Consultant</span>
                            </label>
                        </Column>
                    </Row>
                    {this.state.signupType === "new-customer" && (
                        <div style={{margin: "0 auto"}}>
                            <Row>
                                <Column style={{marginBottom: "15px"}} lg="6" md="6" sm="6" xs="6">
                                    <FormLabel>Company *</FormLabel>
                                    <Input
                                        id="company"
                                        type="text"
                                        placeholder="Your company..."
                                        value={this.state.company}
                                        autoComplete="off"
                                        onChange={this.handleInputChange("company")}
                                    />
                                </Column>
                                <Column style={{marginBottom: "15px"}} lg="6" md="6" sm="6" xs="6">
                                    <FormLabel>Contact Person *</FormLabel>
                                    <Input
                                        id="contact"
                                        type="text"
                                        placeholder="Your contact person..."
                                        value={this.generateCapitals(this.state.contact)}
                                        autoComplete="off"
                                        maxLength="30"
                                        onChange={this.handleInputChange("contact")}
                                    />
                                </Column>
                            </Row>
                            <Row>
                                <Column style={{marginBottom: "15px"}} lg="6" md="6" sm="6" xs="6">
                                    <FormLabel>Email *</FormLabel>
                                    <Input
                                        id="email"
                                        type="text"
                                        placeholder="Your email..."
                                        value={this.state.email}
                                        autoComplete="off"
                                        onChange={this.handleInputChange("email")}
                                    />
                                </Column>
                                <Column style={{marginBottom: "15px"}} lg="6" md="6" sm="6" xs="6">
                                    <FormLabel>Password *</FormLabel>
                                    <Input
                                        id="password"
                                        type="password"
                                        placeholder="Your password..."
                                        value={this.state.password}
                                        autoComplete="off"
                                        onChange={this.handleInputChange("password")}
                                    />
                                </Column>
                            </Row>
                            <Row>
                                <Column style={{marginBottom: "15px"}} lg="6" md="6" sm="6" xs="6">
                                    <FormLabel>Phone *</FormLabel>
                                    <Input
                                        id="phone"
                                        type="tel"
                                        placeholder="Your phone..."
                                        value={this.state.phone}
                                        autoComplete="off"
                                        onChange={this.handleInputChange("phone")}
                                    />
                                </Column>
                                <Column style={{marginBottom: "15px"}} lg="6" md="6" sm="6" xs="6">
                                   
                                </Column>
                            </Row>
                        </div>
                    )}
                    {this.state.signupType === "new-consultant" && (
                        <div>
                            <Row>
                                <Column style={{marginBottom: "15px"}} lg="6" md="6" sm="6" xs="6">
                                    <FormLabel>Company *</FormLabel>
                                    <Input
                                        id="companyCompany"
                                        type="text"
                                        placeholder="Your company..."
                                        value={this.state.company}
                                        autoComplete="off"
                                        onChange={this.handleInputChange("company")}
                                    />
                                </Column>
                                <Column style={{marginBottom: "15px"}} lg="6" md="6" sm="6" xs="6">
                                    <FormLabel>Contact Person *</FormLabel>
                                    <Input
                                        id="contactCompany"
                                        type="text"
                                        placeholder="Your contact person..."
                                        value={this.generateCapitals(this.state.contact)}
                                        autoComplete="off"
                                        maxLength="30"
                                        onChange={this.handleInputChange("contact")}
                                    />
                                </Column>
                            </Row>
                            <Row>
                                <Column style={{marginBottom: "15px"}} lg="6" md="6" sm="6" xs="6">
                                    <FormLabel>Phone *</FormLabel>
                                    <Input
                                        id="phoneCompany"
                                        type="tel"
                                        placeholder="Your phone..."
                                        value={this.state.phone}
                                        autoComplete="off"
                                        onChange={this.handleInputChange("phone")}
                                    />
                                </Column>
                                <Column style={{marginBottom: "15px"}} lg="6" md="6" sm="6" xs="6">
                                   
                                </Column>
                            </Row>
                            <Row>
                                <Column style={{marginBottom: "15px"}} lg="6" md="6" sm="6" xs="6">
                                    <FormLabel>Email *</FormLabel>
                                    <Input
                                        id="emailCompany"
                                        type="text"
                                        placeholder="Your email..."
                                        value={this.state.email}
                                        autoComplete="off"
                                        onChange={this.handleInputChange("email")}
                                    />
                                </Column>
                                <Column style={{marginBottom: "15px"}} lg="6" md="6" sm="6" xs="6">
                                    <FormLabel>Password *</FormLabel>
                                    <Input
                                        id="passwordCompany"
                                        type="password"
                                        placeholder="Your password..."
                                        value={this.state.password}
                                        autoComplete="off"
                                        onChange={this.handleInputChange("password")}
                                    />
                                </Column>
                            </Row>
                            <Row>
                                <Column style={{marginBottom: "15px"}} lg="6" md="6" sm="6" xs="6">
                                    <FormLabel>Street *</FormLabel>
                                    <Input
                                        id="address1"
                                        type="text"
                                        placeholder="Your street..."
                                        value={this.state.address1}
                                        autoComplete="off"
                                        onChange={this.handleInputChange("address1")}
                                    />
                                </Column>
                                <Column style={{marginBottom: "15px"}} lg="6" md="6" sm="6" xs="6">
                                    <FormLabel>City *</FormLabel>
                                    <Input
                                        id="locality"
                                        type="text"
                                        placeholder="Your city..."
                                        value={this.state.locality}
                                        autoComplete="off"
                                        onChange={this.handleInputChange("locality")}
                                    />
                                </Column>
                            </Row>
                            <Row>
                                <Column style={{marginBottom: "15px"}} lg="6" md="6" sm="6" xs="6">
                                    <FormLabel>Postal Code *</FormLabel>
                                    <Input
                                        id="postal"
                                        type="text"
                                        placeholder="Your postal code..."
                                        value={this.state.postal}
                                        autoComplete="off"
                                        onChange={this.handleInputChange("postal")}
                                    />
                                </Column>
                                <Column style={{marginBottom: "15px"}} lg="6" md="6" sm="6" xs="6">
                                    <FormLabel>Country *</FormLabel>
                                    <Input
                                        id="country"
                                        type="text"
                                        placeholder="Your country code..."
                                        value={this.state.country}
                                        autoComplete="off"
                                        onChange={this.handleInputChange("country")}
                                    />
                                </Column>
                            </Row>
                            <Row>
                                <Column style={{marginBottom: "15px"}} lg="6" md="6" sm="6" xs="6">
                                    <FormLabel>Classifications *</FormLabel>
                                        <Select
                                            id="select"
                                            value={classifications}
                                            onChange={this.handleChange}
                                            options={classificationOptions}
                                            multi
                                            style={{width: "75%"}}
                                            className="dark-theme"
                                        />
                                </Column>
                                <Column style={{marginBottom: "15px"}} lg="6" md="6" sm="6" xs="6">
                                    <FormLabel>Regions *</FormLabel>
                                    
                                </Column>
                            </Row>
                            <Row>
                                <Column style={{marginBottom: "15px"}} lg="6" md="6" sm="6" xs="6">
                                    <FormLabel>Media</FormLabel>
                                    <Input
                                        id="media"
                                        type="text"
                                        placeholder="Your media..."
                                        value={this.state.media}
                                        autoComplete="off"
                                        onChange={this.handleInputChange("media")}
                                    />
                                </Column>
                                <Column style={{marginBottom: "15px"}} lg="6" md="6" sm="6" xs="6">
                                    <FormLabel>Qualifications</FormLabel>
                                    <Input
                                        id="qualifications"
                                        type="text"
                                        placeholder="Your qualifications..."
                                        value={this.state.qualifications}
                                        autoComplete="off"
                                        onChange={this.handleInputChange("qualifications")}
                                    />
                                </Column>
                            </Row>
                        </div>
                    )}
                </form>
            </div>
        )
    };

    // Method to render the head content of the modal
    renderHeader = () => {
        return (
            <h1>Create your account</h1>
        )
    }

    render() {
        console.log(this.state.signupType, this.state.regions, this.state.classifications);
        return (
            <div>
                <BlankModal 
                    isOpen={this.state.isOpen}
                    handleModal={this.handleModal}
                    header={this.renderHeader()}
                    body={this.renderBody()}
                    footerMethod={this.chooseType}
                    footer="Submit"
                /> 
                <Box>
                    <Row>
                        <Column lg="7" md="7" sm="7" xs="7">
                            <Label>First Time User?</Label>
                        </Column>
                        <Column lg="5" md="5" sm="5" xs="5">
                            <Button onClick={this.handleModal}>Register</Button>
                        </Column>
                    </Row>
                </Box>
            </div>
        )
    }
};

export default Signup;