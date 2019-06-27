import React from 'react';
import { CustomInput, Form, FormGroup, Label } from 'reactstrap';

export default class RadioButtonsBT extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="exampleCheckbox">Radios</Label>
          <div>
            <CustomInput type="radio" id="exampleCustomRadio" name="customRadio" label="Select this custom radio" />
            <CustomInput type="radio" id="exampleCustomRadio2" name="customRadio" label="Or this one" />
            <CustomInput type="radio" id="exampleCustomRadio3" label="But not this disabled one" disabled />
            <CustomInput type="radio" id="exampleCustomRadio4" label="Can't click this label to select!" htmlFor="exampleCustomRadio4_X" disabled />
          </div>
        </FormGroup>
      </Form>
    );
  }
}