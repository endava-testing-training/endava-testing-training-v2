//Component-DropdownMenu.js
import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class DropdownMenuBT extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          Button Dropdown
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Title</DropdownItem>
          <DropdownItem disabled>Disabled action</DropdownItem>
          <DropdownItem>One Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Other Action</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}

