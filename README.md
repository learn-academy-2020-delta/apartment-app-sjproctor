# Apartment App

**Day 1**
### Rails App
- $ rails new apartment_app -d postgresql -T
- $ cd apartment_app
- $ rails db:create

### RSpec Install
- $ bundle add rspec-rails
- $ rails generate rspec:install

### Devise
- $ bundle add devise
- $ rails generate devise:install
- $ rails generate devise User
- $ rails db:migrate
- Set action mailer in *config/environments/development.rb*
- Update a line in the file *config/initializers/devise.rb* from this: `config.sign_out_via = :delete` and replace it with this: `config.sign_out_via = :get`

### Apartment Resource
- Apartments have: a street designation, a city, state, a manager's name, manager's contact email, monthly rental price, bedrooms, bathrooms, and whether they allow pets
- $ rails g resource Apartment street:string city:string state:string manager:string email:string price:string bedrooms:integer bathrooms:integer pets:string user_id:integer
- $ rails db:migrate
- defined relationships between model classes

### React in Rails
- $ bundle add react-rails
- $ rails webpacker:install
- $ rails webpacker:install:react
- $ rails generate react:install
- $ rails g react:component App
- $ rails g controller Home
- Add a file in *app/views/home* called *index.html.erb*
- *index.html.erb*:
```
<%= react_component("App", {
    logged_in: user_signed_in?,
    sign_in_route: new_user_session_path,
    sign_out_route: destroy_user_session_path
}) %>
```
- Add `root to: 'home#index'` to *config/routes.rb*
- Add constraints to routes: `get '*path', to: 'home#index', constraints: ->(request){ request.format.html? }`

### File Structure
- pages, components, assets
- pages: Home, ApartmentIndex, ApartmentShow, ApartmentNew, ApartmentEdit, NotFound
- components: Header, Footer

### Add Sign In/Out Buttons
*app/javascript/components/App.js*
```javascript
import React, { Component } from "react"

class App extends Component {
  render () {
    const {
      logged_in,
      sign_in_route,
      sign_out_route
    } = this.props
    return (
      <React.Fragment>
        <h1>Hello World!!!</h1>
        { logged_in &&
          <div>
            <a href={ sign_out_route }>Sign Out</a>
          </div>
        }

        { !logged_in &&
          <div>
            <a href={ sign_in_route }>Sign In</a>
          </div>
        }
      </React.Fragment>
    )
  }
}

export default App
```

### Extra Installs
- $ bundle add bootstrap (Restart the rails server if running!!)
- Modify the application.css to be a "sass" file: $ mv app/assets/stylesheets/application.css app/assets/stylesheets/application.scss
- Add an import to the "sass" file @import 'bootstrap'
- $ yarn add reactstrap
- $ yarn add react-router-dom

### Imports
- Import all files
- Import all components
- Route to all components
- Import BrowserRouter

### Mock Data
- Add a file to *app/javascript/components* to hold frontend mock data
- Set mock data to state

### Add to GitHub
- $ git remote add origin https://github.com/sjproctor/apartment-app.git
- $ git checkout -b main
- $ git add .
- $ git commit -m "initial commit"
- $ git push origin main

**Day 2**
### Footer
- $ git checkout -b footer
- Take Footer content from Cat Tinder
- Update routes to include sign in and sign up, current_user
- Destructured the routes in App.js
- Passed all the routes to Footer component
- Destructured the routes and set up conditional rendering to either see sign up/sign in or sign out based on the status of logged_in (a boolean value)
- Adding a bit of styling
- Merge footer branch

### Index
- $ git checkout -b index
- Refactor static index route to be dynamic
```
<Route
  path="/apartmentindex"
  render={ (props) => <ApartmentIndex apartments={ this.state.apartments } /> }
/>
```
- Pass the mock apartments from state to the index route
- Map over the apartment array in the index component
- Display the street, city, state of the apartment
- Add a button to navigate to the show page
- Add some basic styling for the index cards
- Merge index branch

### Show
- $ git checkout -b show
- Refactor static show route to be dynamic
```
<Route
  path="/apartmentshow/:id"
  render={ (props) => {
    let localid = props.match.params.id
    let apartment = this.state.apartments.find(apt => apt.id === parseInt(localid))
    return (
      <ApartmentShow apartment={ apartment } />
    )
  } }
/>
```
- Created a variable to hold the param of the apartment id
- Created a variable to hold the one apartment that matched the params of id
- Send the single apartment to the show page
- Destructure the apartment in the show page
- Display all the information for a single apartment
- Small amount of styling
- WIP: styling
- Merge show branch


### New
- $ git checkout -b new-apartment
- Added form for all apartment attributes
- Apartment must have a user_id
- Add a handleChange method that updates state in the form
- Add a handleSubmit method that passes the data to App.js
- Log the outcome of the createNewApartment method in App.js
- Refactor static new route to be dynamic
- Protected the route by checking for the value of logged_in, so a user cannot access the route
- Pass the createNewApartment method and the current_user to the ApartmentNew component
- Merge new-apartment branch

### Edit
- $ git checkout -b edit-apartment
- Added form for all apartment attributes
- Add a handleChange method that updates state in the form
- Add a handleSubmit method that passes the data to App.js
- Log the outcome of the updateApartment method and the apartment id in App.js
- Refactor static edit route to be dynamic
- Created a variable to hold the param of the apartment id
- Created a variable to hold the one apartment that matched the params of id
- Send the single apartment, current_user,  to the edit page
- WIP: No links to navigate to the edit page yet

### Protected Index
- $ git checkout -b my-apartments
- Updated mock data to include the foreign key
- Created a new page of just one user's apartments
- Created a protected route for the user's apartment index
- Passing the set of apartments to the component
- Using code from the regular index page
- Added a link in the nav for my apartments that only shows up when a user is logged in


# Todo
- Where do the links for edit and delete live?
- How do I see just my apartments?
