import React, { Component } from 'react';
import '../node_modules/uswds/dist/css/uswds.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="preview">
          <form>
            <div className="usa-grid">
              <h2>Textfields</h2>
              <div className="usa-width-one-half">
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" name="firstname" />
              </div>
              <div className="usa-width-one-half">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" name="lastname" />
              </div>
            </div>
            <div className="usa-grid">
              <h2>Select Menu</h2>
              <label htmlFor="options">Dropdown label</label>
              <select name="options" id="options">
                <option value="value1">Option A</option>
                <option value="value2">Option B</option>
                <option value="value3">Option C</option>
              </select>
              <div className="usa-width-one-half">
                <h2>Checkboxes</h2>
                <fieldset className="usa-fieldset-inputs usa-sans">
                <legend className="usa-sr-only">Historical figures 1</legend>
                  <ul className="usa-unstyled-list">
                    <li>
                      <input id="truth" type="checkbox" name="historical-figures-1" value="truth" />
                      <label htmlFor="truth">Sojourner Truth</label>
                    </li>
                    <li>
                      <input id="douglass" type="checkbox" name="historical-figures-1" value="douglass" />
                      <label htmlFor="douglass">Frederick Douglass</label>
                    </li>
                    <li>
                      <input id="washington" type="checkbox" name="historical-figures-1" value="washington" />
                      <label htmlFor="washington">Booker T. Washington</label>
                    </li>
                    <li>
                      <input id="carver" type="checkbox" name="historical-figures-1" disabled />
                      <label htmlFor="carver">George Washington Carver</label>
                    </li>
                  </ul>
                </fieldset>
              </div>
              <div className="usa-width-one-half">
                <h2>Radio Buttons</h2>
                <fieldset className="usa-fieldset-inputs usa-sans">
                  <legend className="usa-sr-only">Historical figures 2</legend>
                  <ul className="usa-unstyled-list">
                    <li>
                      <input id="stanton" type="radio" name="historical-figures-2" value="stanton" />
                      <label htmlFor="stanton">Elizabeth Cady Stanton</label>
                    </li>
                    <li>
                      <input id="anthony" type="radio" name="historical-figures-2" value="anthony" />
                      <label htmlFor="anthony">Susan B. Anthony</label>
                    </li>
                    <li>
                      <input id="tubman" type="radio" name="historical-figures-2" value="tubman" />
                      <label htmlFor="tubman">Harriet Tubman</label>
                    </li>
                  </ul>
                </fieldset>
              </div>
            </div>  
          </form>
        </div>
    );
  }
}

export default App;
