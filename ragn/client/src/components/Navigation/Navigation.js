import React from "react";
import Logo from "../../images/logo2.svg";
import {
  Row,
  Column,
  Image
} from "./styled";

const Navigation = () => {
    return (
      <div>
        <Row style={{margin: "20px", float: "center"}}>
          <Column lg="12" md="12" sm="12" xs="12">
            <Image src={Logo}/>
          </Column>
        </Row>
      </div>
    )
}

export default Navigation;
