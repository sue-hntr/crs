import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import ApptDataAxios from "../../utils/ApptDataAxios";
import { withFirebase } from '../Firebase';
import { Input} from "../Form";
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';

import { AuthUserContext} from '../Session';
import { withAuthorization } from '../Session';

//if you have state or INITIAL_STATE you need to create
//a class

const AppointmentPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div>
        <h1>Appointments for {authUser.uid}</h1>
        <p>The Appointments Page is accessible by Admin.</p>
        <AppointmentForm />
      </div>
      )}
      </AuthUserContext.Consumer>
    );

const INITIAL_STATE = {
      id: '',
      apptfirstname: '',
      apptlastname:''
      // apptphone:'',
      // apptemail: '',
      // apptaddress1: '',
      // apptaddress2: '',
      // apptcity: '',
      // apptstate: '',
      // apptzip: '',
    };


// class AppointmentFormBase extends Component{
//     state = {
//       apptfirstname: '',
//       apptlastname:'',
//       apptphone:'',
//       apptemail: '',
//       apptaddress1: '',
//       apptaddress2: '',
//       apptcity: '',
//       apptstate: '',
//       apptzip: '',
//     };

class AppointmentFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  // onSubmit = event => {
  //   const {
  //     apptfirstname,
  //     apptlastname,
  //     apptphone,
  //     apptemail,
  //     apptaddress1,
  //     apptaddress2,
  //     apptcity,
  //     apptstate,
  //     apptzip
  //   } = this.state;
    // const roles = {};

    // if (isAdmin) {
    //   roles[ROLES.ADMIN] = ROLES.ADMIN;
    // }



    componentDidMount(){
      this.loadAppointments();
    }
  
    loadAppointments = () => {
      ApptDataAxios.getAppointments()
        .then(res =>
          this.setState({
            id: '', 
            apptfirstname: '',
            apptlastname: ''
            // apptphone:'',
            // apptemail: '',
            // apptaddress1: '',
            // apptaddress2: '',
            // apptcity: '',
            // apptstate: '',
            // apptzip: ''
          })
        )
        .catch(err => console.log(err));
    };
  
    deleteAppointment = id => {
      ApptDataAxios.deleteAppointment(id)
        .then(res => this.loadAppointments())
        .catch(err => console.log(err));
    };

    onChange = event => {
      this.setState({ [event.target.name]: event.target.value });
    };

    handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    };
  
    saveAppointment = appointment => {
      // event.preventDefault();
      // if (this.state.apptfirstname && this.state.apptlastname) {
        ApptDataAxios.saveAppointment(appointment)
        console.log(appointment);
      console.log(`I've been clicked`);
      
      

          // {
          // key: this.state.id,
          // apptfirstname: this.state.apptfirstname,
          // apptlastname: this.state.apptlastname
          // apptphone: this.state.apptphone,
          // apptemail: this.state.apptemail,
          // apptaddress1: this.state.apptaddress1,
          // apptaddress2: this.state.apptaddress2,
          // apptcity: this.state.apptcity,
          // apptstate: this.state.apptstate,
          // apptzip: this.state.apptzip,
        }
    //       .then(res => this.loadAppointments())
    //       .catch(err => console.log(err));
    //   }
    // };
  
    render() {

      // const {
      //   apptfirstname,
      //   apptlastname
      //   // apptphone,
      //   // apptemail,
      //   // apptaddress1,
      //   // apptaddress2,
      //   // apptcity,
      //   // apptstate,
      //   // apptzip
      // } = this.state;
      // console.log(authUser.uid);
      return (
        <div>
          <form >
            <label>
              First Name:
              <Input
                name="apptfirstname"
                value={this.state.apptfirstname}
                onChange={this.onChange}
                type="text"
                placeholder="First Name"
              />
            </label>
            <label>
              Last Name:
              <Input
                name="apptlastname"
                value={this.state.apptlastname}
                onChange={this.onChange}
                type="text"
                placeholder="Last Name"
              />
            </label>
            {/* Ternary:
            If !auth.uid {
              render : ''

            } else {
              render button
                onclick
                  id
                  name
                  other name
            }
            */}
            <a href="#" onClick={() => {
                  // console.log(`in form ${this.state.id}`);
                  // console.log(`in form props ${this.props.apptfirstname}`);
                  this.saveAppointment({
                    key: this.uid,
                    apptfirstname: this.state.apptfirstname,
                    apptlastname: this.state.apptlastname
                  })
        }} className="btn btn-primary">Save to database</a>
                {/* <FormBtn
                  disabled={!(this.state.apptfirstname && this.state.apptlastname)}
                  onClick={this.handleFormSubmit}
                > */}
                  {/* Submit Book */}
                {/* </FormBtn> */}
              </form>
              </div>
            );
        }
      }
  
const condition = authUser => !!authUser;

// export default withAuthorization(condition)(AppointmentPage);
// export default withAuthorization(condition)(AppointmentPage);
const AppointmentForm = compose(
  withRouter,
  withFirebase,
)(AppointmentFormBase);
export default withAuthorization(condition)(AppointmentForm);


// export default withAuthentication(AppointmentForm);
// export { AppointmentForm};


