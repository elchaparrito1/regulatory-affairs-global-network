import React from "react";
import API from "../../utils/API";
import { withRouter } from "react-router-dom";
import BlankModal from "../Modals/BlankModal";
import {
    Row,
    Column,
    Text,
    Input,
    Label,
    Box,
    Button,
    TextMessage,
    Icon,
    P
  } from "./styled";
import "./Login.css";
import warningImg from "../../images/warning.png";

class Login extends React.Component {
    state = {
        email: "",
        password: "",
        type: "customer",
        emailError: "",
        passwordError: "",
        typeColor: "",
        emailColor: "",
        passwordColor: "",
        isOpen: false
    };

    // Method for changing state of input fields
    handleInputChange = (name) => (event) => {
        this.setState({
            [name]: event.target.value
        });
    };

    // Method for changing state of radio buttons
    handleChange = (event) => {
        this.setState({
          type: event.target.value
        });
    };

    // Method to check that email has been entered in.
    checkEmail = () => {
        if (this.validateEmail(this.state.email) === false) {
            this.setState({
                emailError: "blank",
                emailColor: "red"
            });
            return false;
        } else {
            this.setState({
                emailError: "",
                emailColor: ""
            });
            return true;
        }
    };

    // Method to check that password has been entered in.
    checkPassword = () => {
        if (this.state.password === "") {
            this.setState({
                passwordError: "blank",
                passwordColor: "red"
            });
            return false;
        } else {
            this.setState({
                passwordError: "",
                passwordColor: ""
            });
            return true;
        }
    };

    // Method to validate email entry.
    validateEmail = () => {
        const { email } = this.state;
        // eslint-disable-next-line
        const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        // console.log(regex.test(email));
        return regex.test(email);
    };

    // Method for customer/consultant login and input verification. Code is broken down to follow two separate paths based on type selection by user.
    loginSubmit = event => {
        const loginData = {
          email: this.state.email,
          password: this.state.password,
          type: this.state.type
        };
        event.preventDefault();
        this.checkEmail();
        this.checkPassword();
        if (loginData.type === "customer" && loginData.email !== "" && loginData.password !== "") {
            API.customerLogin(loginData)
            .then(response => {
              console.log("response", response);
              if (response.data === "invalid") {
                this.setState({
                    isOpen: true,
                    typeColor: "solid 1px red",
                    emailColor: "red",
                    passwordColor: "red"
                });
              }
              else {
                this.setState({
                  email: "",
                  password: "",
                });
                this.props.history.push({
                  pathname: "/customer",
                  state: { detail: response.data }
                });
                }
            })
            .catch(err => console.log(err));
        } else if (loginData.type === "consultant" && loginData.email !== "" && loginData.password !== "") {
            API.consultantLogin(loginData)
            .then(response => {
              console.log("response", response);
              if (response.data === "invalid") {
                this.setState({
                    isOpen: true,
                    typeColor: "solid 1px red",
                    emailColor: "red",
                    passwordColor: "red"
                });
              }
              else {
                this.setState({
                  email: "",
                  password: ""
                });
                this.props.history.push({
                  pathname: "/consultant",
                  state: { detail: response.data }
                });
                }
            })
            .catch(err => console.log(err));
        }
    };

    // The below methods are used specifically for the modal(s)
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

    render() {
        console.log(this.state.type);
        return (
            <div>
                <BlankModal 
                    isOpen={this.state.isOpen}
                    handleModal={this.handleModal}
                    body={
                        <div>
                            <Row>
                                <Column lg="12" md="12" sm="12" xs="12">
                                    <P><span><Icon src={warningImg}/></span> Login Failed</P>
                                </Column>
                            </Row>
                            <Row>
                                <Column lg="12" md="12" sm="12" xs="12">
                                    <P>Please check credentials used</P>
                                </Column>
                            </Row>
                        </div>
                        }
                    footerMethod={this.handleModal}
                    footer="Close"
                />
                <Row>
                    <Column lg="12" md="12" sm="12" xs="12">
                        <Box>
                            <Row>
                                <Column lg="12" md="12" sm="12" xs="12">
                                    <Text>Log in to RAGN</Text>
                                </Column>
                            </Row>
                        <form>
                            <Row>
                                <Column lg="12" md="12" sm="12" xs="12">
                                    <Label>Login type *</Label>
                                </Column>
                            </Row>
                        <div style={{border: this.state.typeColor}}>
                            <Row>
                                <Column lg="12" md="12" sm="12" xs="12">
                                    <label>
                                        <input
                                            type="radio"
                                            className="form-radio"
                                            value="customer"
                                            checked={this.state.type === "customer"}
                                            onChange={this.handleChange}
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
                                            value="consultant"
                                            checked={this.state.type === "consultant"}
                                            onChange={this.handleChange}
                                        />
                                        <span> Consultant</span>
                                    </label>
                                </Column>
                            </Row>
                        </div>
                            {this.state.typeError === "blank" && (
                            <Row>
                                <Column lg="12" md="12" sm="12" xs="12">
                                    <TextMessage>Choose account type</TextMessage>
                                </Column>
                            </Row>)}
                            <Row>
                                <Column lg="12" md="12" sm="12" xs="12">
                                    <Label>Email *</Label>
                                </Column>
                            </Row>
                            <Row>
                                <Column lg="12" md="12" sm="12" xs="12">
                                    <Input
                                      style={{borderColor: this.state.emailColor}}
                                      id="email"
                                      type="text"
                                      placeholder="Your email..."
                                      value={this.state.email}
                                      autoComplete="off"
                                      onChange={this.handleInputChange("email")}
                                      onBlur={this.checkEmail}
                                    />
                                </Column>
                            </Row>
                            {this.state.emailError === "blank" && (
                            <Row>
                                <Column lg="12" md="12" sm="12" xs="12">
                                    <TextMessage>Valid email required</TextMessage>
                                </Column>
                            </Row>)}    
                            <Row>
                                <Column lg="12" md="12" sm="12" xs="12">
                                    <Label>Password *</Label>
                                </Column>
                            </Row>
                            <Row>
                                <Column lg="12" md="12" sm="12" xs="12">
                                    <Input
                                      style={{borderColor: this.state.passwordColor}}
                                      id="password"
                                      type="password"
                                      placeholder="Your password..."
                                      value={this.state.password}
                                      autoComplete="off"
                                      onChange={this.handleInputChange("password")}
                                      onBlur={this.checkPassword}
                                    />
                                </Column>
                            </Row>
                            {this.state.passwordError === "blank" && (
                            <Row>
                                <Column lg="12" md="12" sm="12" xs="12">
                                    <TextMessage>Password required</TextMessage>
                                </Column>
                            </Row>)}
                                <Row>
                                    <Column lg="12" md="12" sm="12" xs="12">
                                        <Button style={{float: "right"}} onClick={this.loginSubmit}>Login</Button>
                                    </Column>
                                </Row>
                            </form>
                        </Box>
                    </Column>
                </Row>
            </div>
        )
    }
}

export default withRouter(Login);