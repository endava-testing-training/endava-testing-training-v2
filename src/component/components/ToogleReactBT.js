import React from 'react';
import { CustomInput, Form, FormGroup, Label } from 'reactstrap';

export default class ToogleReactBT extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="exampleCheckbox">Switches</Label>
          <div>
            <CustomInput type="switch" id="exampleCustomSwitch" name="customSwitch" label="Turn off this custom switch" defaultChecked/>
            <CustomInput type="switch" id="exampleCustomSwitch2" name="customSwitch" label="Or turn on this one" />
            <CustomInput type="switch" id="exampleCustomSwitch3" label="But not this disabled one" disabled />
            <CustomInput type="switch" id="exampleCustomSwitch4" label="Can't click this label to turn on!" htmlFor="exampleCustomSwitch4_X" disabled />
          </div>
        </FormGroup>
 
      </Form>
    );
  }
}