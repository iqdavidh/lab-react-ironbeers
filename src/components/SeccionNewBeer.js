import React, {Component} from 'react';
import {Form, Box, Button, FormField, Select, CheckBox, RadioButtonGroup, TextInput, TextArea} from "grommet";
import DataService from "../servicios/DataService";


class SeccionNewBeer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      tagline: '',
      description: '',
      first_brewed: '',
      attenuation_level: '',
      contributed_by: '',
      isValid: false
    };

  }


  onNameChange = (event) => {
    this.setState({'name': event.target.value})
  };

  onTagNameChange = (event) => {
    this.setState({'tagline': event.target.value})
  };

  onDescriptionChange = (event) => {
    this.setState({'description': event.target.value})
  };

  onFirstBrewedChange = (event) => {
    this.setState({'first_brewed': event.target.value})
  };

  onAttLevelChange = (event) => {
    this.setState({'attenuation_level': event.target.value})
  };

  onContributedChange = (event) => {
    this.setState({'contributed_by': event.target.value})
  };

  onSubmit = event => {
    event.preventDefault();

    //agregar al DataService

    DataService.addBeer(this.state)
        .then(respuesta => {

          this.setState(
              {
                name: '',
                tagline: '',
                description: '',
                first_brewed: '',
                attenuation_level: '',
                contributed_by: '',
                isValid: false
              }
          );

          this.render();

        })
    ;


  };


  render() {
    return (
        <Box animation="fadeIn" pad="small">

          <h1 className="tituloForm">Agregar Cerveza</h1>

          <Form onSubmit={event => this.onSubmit(event)}>

            <FormField name="name"
                       label="Nombre"
                       required={true}

                       onChange={this.onNameChange}
            />

            <FormField name="tagline"
                       label="Tagline"
                       required={true}
                       onChange={this.onTagNameChange}
            />

            <FormField name="description"
                       label="Description"
                       required={true}
                       onChange={this.onDescriptionChange}

            />

            <FormField name="first_brewed"
                       label="first_brewed"
                       onChange={this.onFirstBrewedChange}
            />

            <FormField name="attenuation_level"
                       label="attenuation_level"
                       onChange={this.onAttLevelChange}
            />

            <FormField name="contributed_by"
                       label="contributed_by"
                       onChange={this.onContributedChange}
            />

            <Button type="submit" label="Submit" primary={true}/>
          </Form>
        </Box>
    );
  }
}

export default SeccionNewBeer;
