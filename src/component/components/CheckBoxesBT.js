import React from 'react';
import { CustomInput, Form, FormGroup, Label } from 'reactstrap';

export default class CheckBoxesBT extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="exampleCheckbox">Checkboxes</Label>
          <div>
            <CustomInput type="checkbox" id="exampleCustomCheckbox" label="Check this custom checkbox" />
            <CustomInput type="checkbox" id="exampleCustomCheckbox2" label="Or this one" />
            <CustomInput type="checkbox" id="exampleCustomCheckbox3" label="But not this disabled one" disabled />
            <CustomInput type="checkbox" id="exampleCustomCheckbox4" label="Check the First!" htmlFor="exampleCustomCheckbox" />
          </div>
        </FormGroup>
      </Form>
    );
  }
}