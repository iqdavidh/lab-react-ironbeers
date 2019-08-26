import React, {Component} from 'react';
import {Form,Box, Button, FormField, Select, CheckBox, RadioButtonGroup, TextInput, TextArea} from "grommet";




class SeccionNewBeer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name:'n',
      tagline:'t',
      description:'des',
      first_brewed:'f',
      attenuation_level:'at',
      contributed_by:'c'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }


  render() {
    return (
        <Box animation="fadeIn" pad="small">

          <h1>Agregar Cerveza</h1>

          <Form onSubmit={({ value }) => console.log("Submit: ", value)}>

            <FormField name="name" label="Nombre" required={true} />
            <FormField name="tagline" label="Tagline" required={true} />
            <FormField name="description" label="Description" required={true} />
            <FormField name="first_brewed" label="first_brewed"  />
            <FormField name="attenuation_level" label="attenuation_level"  />
            <FormField name="contributed_by" label="contributed_by"  />

            <Button type="submit" label="Submit" primary={true}
             onClick={e=>this.handleFormSubmit(e)}
            />
          </Form>
        </Box>
    );
  }
}

export default SeccionNewBeer;
