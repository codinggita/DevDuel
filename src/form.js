import React from 'react';
import "./Form.css";


class BookingForm extends React.Component {
  handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    
    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
      });
      
      if (response.ok) {
        alert("Successfully Booked");
      } else {
        console.error('Booking failed:', response.statusText);
      }
    } catch (error) {
      console.error('An error occurred while submitting the form:', error);
    }
  };

  render() {
    return (
      <>
        <div className="container-outer">
      <div className="form-outer">  
         <form
          action="https://sheetdb.io/api/v1/gat8bnsz7s5m6"
          method="post"
          id="sheetdb-form"
          onSubmit={this.handleSubmit}>
          
          <div className="container">
            <h1 align="center">Game Form</h1>
            <hr/>

            <label htmlFor="name"><b>Name</b></label>
            <input type="text" placeholder="Enter Name" name="data[name]" required />

            <label htmlFor="email"><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="data[email]" required />

            <div className="dates">
              <label htmlFor="sdate"><b>Birthday Date :</b></label>
              <input type="date" placeholder="Enter Birthday Date" name="data[sdate]" required />
            </div>

            <br />

            <label>
              <input type="checkbox" defaultChecked name="remember" style={{ marginBottom: '15px' }} /> Remember me
            </label>

            <p>By filling your information, you agree to our <a href="#" style={{ color: 'dodgerblue' }}>Terms & Privacy</a>.</p>

            <div className="clearfix">
              <button type="submit" className="btn-submit">Submit</button>
            </div>
          </div>
        </form>

        </div>  
        </div> 
      </>
    );
  }
}

export default BookingForm;
