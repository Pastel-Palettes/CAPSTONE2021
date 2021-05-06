/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState } from "react";

// reactstrap components
import { Button, Card, Container, Row, Colm, CardImg, Col } from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import Simul from "components/Simul";

class Profile extends React.Component {
  state = {
    price: ' ',
    month: ' ',
    deposit: ' ',
    fee: '0',
    amount: '0',
    deposit_: '0',
    retooling: '0'
  }

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }

  priceOnChange = (e) => {
    this.setState({ price: e.target.value });
  }

  monthOnChange = (e) => {
    this.setState({ month: e.target.value });
  }

  depositOnChange = (e) => {
    this.setState({ deposit: e.target.value });
  }


  handleClick = (e) => {
    this.setState({ retooling: (this.state.price * 0.3) * 0.7 });
  }

  render() {
    return (
      <>
        <DemoNavbar />
        <main className="profile-page" ref="main">
          <section className="section-profile-cover section-shaped my-0">
            <div className="shape shape-style-1 shape-default">
            </div>
          </section>
          <Container>
            <section>
              <Simul />
            </section>
          </Container>

        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Profile;
