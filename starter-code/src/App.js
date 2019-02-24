import React, { Fragment } from 'react';
import Navbar from './components/Navbar';
import FormField from './components/FormField';
import CoolButton from './components/CoolButton';

const App = () => {
  return (
    <div className="App">
      <Fragment>
        <Navbar />
        <div className="columns is-centered" style={{ marginTop: '10px' }}>
          <div className="column is-half">
            <form action="">
              <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
              <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
              <div className="field">
                <p className="control">
                  <CoolButton isSmall isSuccess>Register</CoolButton>
                </p>
              </div>
            </form>
          </div>
        </div>
      </Fragment>
    </div>
  );
}

export default App;