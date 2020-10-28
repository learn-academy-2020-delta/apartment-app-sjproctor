// Apartments have: a street designation, a city, state, a manager's name, manager's contact email, monthly rental price, bedrooms, bathrooms, and whether they allow pets

import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class ApartmentIndex extends Component{
  render(){
    return(
      <React.Fragment>
        <h3>All the Apartments</h3>
        <div id="index-body">
          { this.props.apartments.map((apartment, index) => {
            return(
              <div key={ index } className="index-card">
                <h3>{ apartment.street }</h3>
                <h3>{ apartment.city }</h3>
                <h3>{ apartment.state }</h3>
                <br />
                <Link to={`/apartmentshow/${apartment.id}`} className="button">
                  More Info
                </Link>
              </div>
            )
          })}
        </div>
      </React.Fragment>
    )
  }
}
export default ApartmentIndex
