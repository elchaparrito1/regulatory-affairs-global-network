import React from 'react';
import Logo from '../../images/logo2.svg';
import { Row, Column, Image, List, Links, Pages } from './styled';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';

class Navigation extends React.Component {
  menuChoice = () => {
    const locale = window.location.pathname;
    if (locale === '/') {
      return (
        <List>
          <Pages contact>
            <Fade right>
              <Link to="/contact">
                <Links link>Contact</Links>
              </Link>
            </Fade>
          </Pages>
          <Pages>
            <Fade right>
              <Link to="/about">
                <Links link>About</Links>
              </Link>
            </Fade>
          </Pages>
          <Pages>
            <Fade right>
              <Link to="/resume">
                <Links link>Resume</Links>
              </Link>
            </Fade>
          </Pages>
        </List>
      );
    } else {
      return (
        <List>
          <Pages contact>
            <Fade right>
              <Link to="/contact">
                <Links link>Contact</Links>
              </Link>
            </Fade>
          </Pages>
          <Pages>
            <Fade right>
              <Link to="/about">
                <Links link>About</Links>
              </Link>
            </Fade>
          </Pages>
          <Pages>
            <Fade right>
              <Link to="/resume">
                <Links link>Resume</Links>
              </Link>
            </Fade>
          </Pages>
          <Pages>
            <Fade right>
              <Link to="/">
                <Links link>Home</Links>
              </Link>
            </Fade>
          </Pages>
        </List>
      );
    }
  };

  render() {
    return (
      <div>
        {window.location.pathname === '/login-signup' ? (
          <div>
            <Row style={{ margin: '20px', float: 'center' }}>
              <Column lg="12" md="12" sm="12" xs="12">
                <Image src={Logo} />
              </Column>
            </Row>
          </div>
        ) : (
          <div>
            <Row style={{ borderBottom: 'solid 2px gray' }}>
              <Column lg="4" md="4" sm="4" xs="4">
                <Image src={Logo} />
              </Column>
              <Column lg="4" md="4" sm="4" xs="4">
                <table style={{ float: 'right' }}>
                  <tbody>{this.menuChoice()}</tbody>
                </table>
              </Column>
              <Column lg="4" md="4" sm="4" xs="4">
                <Image src={Logo} />
              </Column>
            </Row>
          </div>
        )}
      </div>
    );
  }
}

export default Navigation;
