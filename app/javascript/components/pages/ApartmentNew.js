import React, { Component } from 'react'
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label
} from 'reactstrap'
import { Redirect } from 'react-router-dom'

class ApartmentNew extends Component{
  constructor(props){
    super(props)
    this.state = {
      form:{
        street: "",
        city: "",
        state: "",
        manager: "",
        email: "",
        price: "",
        bedrooms: "",
        bathrooms: "",
        pets: "no",
        user_id: this.props.current_user.id
      },
      success: false
    }
  }
  handleChange = (e) => {
    // destructuring form out of state
    let { form } = this.state
    form[e.target.name] = e.target.value
    this.setState({ form: form })
  }

  handleSubmit = (e) => {
    // keeps react from refreshing the page unnecessarily
    e.preventDefault()
    this.props.createNewApartment(this.state.form)
    this.setState({ success: true })
  }

  render(){
    return(
      <React.Fragment>
        <h3>Add an Apartment</h3>
        <div className="form-body">
          <Form>
            <FormGroup>
              <Label>Street</Label>
              <Input
                type="text"
                name="street"
                onChange={ this.handleChange }
                value={ this.state.form.street }
              />
            </FormGroup>
            <FormGroup>
              <Label>City</Label>
              <Input
                type="text"
                name="city"
                onChange={ this.handleChange }
                value={ this.state.form.city }
              />
            </FormGroup>
            <FormGroup>
              <Label>State</Label>
              <Input
                type="text"
                name="state"
                onChange={ this.handleChange }
                value={ this.state.form.state }
              />
            </FormGroup>
            <FormGroup>
              <Label>Manager's Name</Label>
              <Input
                type="text"
                name="manager"
                onChange={ this.handleChange }
                value={ this.state.form.manager }
              />
            </FormGroup>
            <FormGroup>
              <Label>Manager's Email</Label>
              <Input
                type="email"
                name="email"
                onChange={ this.handleChange }
                value={ this.state.form.email }
              />
            </FormGroup>
            <FormGroup>
              <Label>Price</Label>
              <Input
                type="text"
                name="price"
                onChange={ this.handleChange }
                value={ this.state.form.price }
              />
            </FormGroup>
            <FormGroup>
              <Label>Number of Bedrooms</Label>
              <Input
                type="number"
                name="bedrooms"
                onChange={ this.handleChange }
                value={ this.state.form.bedrooms }
              />
            </FormGroup>
            <FormGroup>
              <Label>Number of Bathrooms</Label>
              <Input
                type="number"
                name="bathrooms"
                onChange={ this.handleChange }
                value={ this.state.form.bathrooms }
              />
            </FormGroup>
            {/* Setting up a radio button option for pets */}
            <FormGroup>
              <Label>Pets</Label>
              <FormGroup check>
                <Label check>
                  <Input
                    type="radio"
                    name="pets"
                    value="yes"
                    checked={ this.state.form.pets === "yes" }
                    onChange={ this.handleChange }
                  />
                  Yes
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input
                    type="radio"
                    name="pets"
                    value="no"
                    checked={ this.state.form.pets === "no" }
                    onChange={ this.handleChange }
                  />
                  No
                </Label>
              </FormGroup>
            </FormGroup>


            <Button
            name="submit"
            color="secondary"
            onClick={ this.handleSubmit }
            >
            Add a New Apartment
            </Button>
          </Form>
          { this.state.success && <Redirect to="/myapartmentindex" /> }
        </div>
      </React.Fragment>
    )
  }
}
export default ApartmentNew
