import React from "react";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";

import './Sidebar.css'
import logoWhiteReBg from '../../../assets/removebg-white-full-logo.png';

import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavText,
} from "@trendmicro/react-sidenav";
import { Link } from 'react-router-dom';

class SideNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true
    };
  }

  render() {
    return (
      <div className="side-nav">
        <SideNav expanded={this.state.isVisible} style={{ backgroundColor: "#2A304B"}}>
        <img src={logoWhiteReBg} alt="Logo" className='logo'></img>
        <h5>Kasemdet Soommmart</h5>
          <SideNav.Nav defaultSelected="home">
            <NavItem eventKey="home">
              <Link to="/" style={{ color: 'white' }}>จัดการห้อง</Link>
              {/* <NavText herf='/test'>จัดการห้อง</NavText> */}
            </NavItem>
            <NavItem eventKey="history">
              <Link to="/" style={{ color: 'white' }}>ประวัติการขาย</Link>
            </NavItem>
            <NavItem eventKey="changepassword">
              <NavText herf='/' style={{ color: 'white' }}>เปลี่ยน password</NavText>
            </NavItem>
          </SideNav.Nav>
        </SideNav>
      </div>
    );
  }
}

export default SideNavBar;
