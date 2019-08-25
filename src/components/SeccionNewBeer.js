import React, {Component} from 'react';
import {Box, Button, FormField, Select, CheckBox, RadioButtonGroup, TextInput, TextArea} from "grommet";




class SeccionNewBeer extends Component {

  render() {
    return (
        <Box animation="fadeIn" pad="small">

          <h1>Agregar Cerveza</h1>

          <form onSubmit={({ value }) => console.log("Submit: ", value)}>

            <FormField name="name" label="Nombre" required={true} >
              <TextInput/>
            </FormField>
            <FormField name="tagline" label="Tagline" required={true} >
              <TextInput/>
            </FormField>
            <FormField name="description" label="Description" required={true} >
              <TextArea/>
            </FormField>
            <FormField name="first_brewed" label="first_brewed"  >
              <TextInput/>
            </FormField>
            <FormField name="attenuation_level" label="attenuation_level"  >
              <TextInput/>
            </FormField>
            <FormField name="contributed_by" label="contributed_by"  >
              <TextInput/>
            </FormField>


            <Button type="submit" label="Submit" primary={true} />
          </form>
        </Box>
    );
  }
}

export default SeccionNewBeer;
