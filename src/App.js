import React, { Component } from 'react';
import { FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter, Table, Button } from 'reactstrap';
import axios from 'axios';


class App extends Component{
  
  state = {
    students :[], 

    newStudentData :    {
      first_name: "",
      last_name: "",
      gender: "",
      dob: "",
      grade: "",
      schoollastattend: "",
      address: "",
      father_name: "",
      mother_name: "",
      phone: "",
      email: "",
  },

    viewStudentData :    {
      first_name: "",
      last_name: "",
      gender: "",
      dob: "",
      grade: "",
      schoollastattend: "",
      address: "",
      father_name: "",
      mother_name: "",
      phone: "",
      email: "",
  },


    newStudentModal : false, 
    viewStudentModal : false
  }
  componentWillMount() { 
    axios.get('http://localhost:8000/api/studentlists/').then((response) => {
      this.setState({
        students : response.data
      })

    });

  }

  toggleNewStudentModal() {
    this.setState({
      newStudentModal : ! this.state.newStudentModal
    });
  }

  toggleviewStudentModal() {
    this.setState({
      viewStudentModal : ! this.state.viewStudentModal
    });
  }

  addNewStudent(){
    axios.post('http://localhost:8000/api/studentlists/', this.state.newStudentData).then((response) => {

    let { students } = this.state;
    students.push(response.data);
    this.setState({students, newStudentModal:false, 
      newStudentData :    {
        first_name: "",
        last_name: "",
        gender: "",
        dob: "",
        grade: "",
        schoollastattend: "",
        address: "",
        father_name: "",
        mother_name: "",
        phone: "",
        email: "",
    }
    });
    });
  }

  viewStudentDetails(id, first_name, last_name, gender, 
    dob, grade, schoollastattend, address, father_name, 
    mother_name, phone, email){

      
      this.setState({
        viewStudentData : {
          id, first_name, last_name, gender, 
          dob, grade, schoollastattend, address, father_name, 
          mother_name, phone, email
        }, viewStudentModal : ! this.state.viewStudentModal,
      
      })
      

    }


  render(){
    let students = this.state.students.map((student) => {
       return (
        <tr key={student.id}>
        <td>{student.id}</td>
        <td>{student.first_name}</td>
        <td>{student.last_name}</td>
        <td>{student.schoollastattend}</td>
        <td>
          <Button color="success" size="sm" onClick={this.viewStudentDetails.bind(this, student.id, student.first_name, student.last_name, student.gender, student.dob, student.grade, student.schoollastattend, student.address, student.father_name, student.mother_name, student.phone, student.email)} >View</Button>
        </td>
      </tr>

       )
    });
  return (
    <div className="App container">
      <h1>New Student Enrollment Form</h1>
      <Button className="my-3" color="primary" onClick={this.toggleNewStudentModal.bind(this)}>Apply for a New Student</Button>
      <Modal isOpen={this.state.newStudentModal} toggle={this.toggleNewStudentModal.bind(this)} >
        <ModalHeader toggle={this.toggleNewStudentModal.bind(this)}>New Student Application Form</ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label for="First Name">First Name</Label>
            <Input id = "firstname" value = {this.state.newStudentData.first_name} onChange={(e) => {
              let { newStudentData } = this.state;
              newStudentData.first_name = e.target.value;
              this.setState({ newStudentData });
            }} />
          </FormGroup>
          <FormGroup>
            <Label for="Last Name">Last Name</Label>
            <Input id = "lastname" value = {this.state.newStudentData.last_name} onChange={(e) => {
              let { newStudentData } = this.state;
              newStudentData.last_name = e.target.value;
              this.setState({ newStudentData });
            }} />
          </FormGroup>
          <FormGroup>
            <Label for="Gender">Gender</Label>
            <Input id = "gender" placeholder="Male/Female/Other" value = {this.state.newStudentData.gender} onChange={(e) => {
              let { newStudentData } = this.state;
              newStudentData.gender = e.target.value;
              this.setState({ newStudentData });
            }}/>
          </FormGroup>
          <FormGroup>
            <Label for="Date of Birth">Date of Birth</Label>
            <Input id = "DOB" placeholder="yyyy-mm-dd" value = {this.state.newStudentData.dob} onChange={(e) => {
              let { newStudentData } = this.state;
              newStudentData.dob = e.target.value;
              this.setState({ newStudentData });
            }}/>
          </FormGroup>
          <FormGroup>
            <Label for="Grade">Grade</Label>
            <Input id = "grade" value = {this.state.newStudentData.grade} onChange={(e) => {
              let { newStudentData } = this.state;
              newStudentData.grade = e.target.value;
              this.setState({ newStudentData });
            }}/>
          </FormGroup>
          <FormGroup>
            <Label for="School Last Attend">School Last Attend</Label>
            <Input id = "School Last Attend" value = {this.state.newStudentData.schoollastattend} onChange={(e) => {
              let { newStudentData } = this.state;
              newStudentData.schoollastattend = e.target.value;
              this.setState({ newStudentData });
            }}/>
          </FormGroup>
          <FormGroup>
            <Label for="Address">Address</Label>
            <Input id = "Address" value = {this.state.newStudentData.address} onChange={(e) => {
              let { newStudentData } = this.state;
              newStudentData.address = e.target.value;
              this.setState({ newStudentData });
            }} />
          </FormGroup>
          <FormGroup>
            <Label for="Father Name">Father Name</Label>
            <Input id = "Father Name" value = {this.state.newStudentData.father_name} onChange={(e) => {
              let { newStudentData } = this.state;
              newStudentData.father_name = e.target.value;
              this.setState({ newStudentData });
            }}/>
          </FormGroup>
          <FormGroup>
            <Label for="Mother Name">Mother Name</Label>
            <Input id = "Mother Name" value = {this.state.newStudentData.mother_name} onChange={(e) => {
              let { newStudentData } = this.state;
              newStudentData.mother_name = e.target.value;
              this.setState({ newStudentData });
            }}/>
          </FormGroup>
          <FormGroup>
            <Label for="Phone">Mobile No.</Label>
            <Input id = "Mobile_No" value = {this.state.newStudentData.phone} onChange={(e) => {
              let { newStudentData } = this.state;
              newStudentData.phone = e.target.value;
              this.setState({ newStudentData });
            }}/>
          </FormGroup>
          <FormGroup>
            <Label for="email">Email ID</Label>
            <Input id = "mailid"  placeholder="xyz@example.com" value = {this.state.newStudentData.email} onChange={(e) => {
              let { newStudentData } = this.state;
              newStudentData.email = e.target.value;
              this.setState({ newStudentData });
            }}/>
          </FormGroup>
          
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.addNewStudent.bind(this)}>Apply</Button>{' '}
          <Button color="secondary" onClick={this.toggleNewStudentModal.bind(this)}>Cancel</Button>
        </ModalFooter>
      </Modal>


      <Modal isOpen={this.state.viewStudentModal} toggle={this.toggleviewStudentModal.bind(this)} >
        <ModalHeader toggle={this.toggleviewStudentModal.bind(this)}>New Student Application Form</ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label for="First Name">First Name</Label>
            <Input id = "firstname" value = {this.state.viewStudentData.first_name} onChange={(e) => {
              let { viewStudentData } = this.state;
              viewStudentData.first_name = e.target.value;
              this.setState({ viewStudentData });
            }} />
          </FormGroup>
          <FormGroup>
            <Label for="Last Name">Last Name</Label>
            <Input id = "lastname" value = {this.state.viewStudentData.last_name} onChange={(e) => {
              let { viewStudentData } = this.state;
              viewStudentData.last_name = e.target.value;
              this.setState({ viewStudentData });
            }} />
          </FormGroup>
          <FormGroup>
            <Label for="Gender">Gender</Label>
            <Input id = "gender" placeholder="Male/Female/Other" value = {this.state.viewStudentData.gender} onChange={(e) => {
              let { viewStudentData } = this.state;
              viewStudentData.gender = e.target.value;
              this.setState({ viewStudentData });
            }}/>
          </FormGroup>
          <FormGroup>
            <Label for="Date of Birth">Date of Birth</Label>
            <Input id = "DOB" placeholder="yyyy-mm-dd" value = {this.state.viewStudentData.dob} onChange={(e) => {
              let { viewStudentData } = this.state;
              viewStudentData.dob = e.target.value;
              this.setState({ viewStudentData });
            }}/>
          </FormGroup>
          <FormGroup>
            <Label for="Grade">Grade</Label>
            <Input id = "grade" value = {this.state.viewStudentData.grade} onChange={(e) => {
              let { viewStudentData } = this.state;
              viewStudentData.grade = e.target.value;
              this.setState({ viewStudentData });
            }}/>
          </FormGroup>
          <FormGroup>
            <Label for="School Last Attend">School Last Attend</Label>
            <Input id = "School Last Attend" value = {this.state.viewStudentData.schoollastattend} onChange={(e) => {
              let { viewStudentData } = this.state;
              viewStudentData.schoollastattend = e.target.value;
              this.setState({ viewStudentData });
            }}/>
          </FormGroup>
          <FormGroup>
            <Label for="Address">Address</Label>
            <Input id = "Address" value = {this.state.viewStudentData.address} onChange={(e) => {
              let { viewStudentData } = this.state;
              viewStudentData.address = e.target.value;
              this.setState({ viewStudentData });
            }} />
          </FormGroup>
          <FormGroup>
            <Label for="Father Name">Father Name</Label>
            <Input id = "Father Name" value = {this.state.viewStudentData.father_name} onChange={(e) => {
              let { viewStudentData } = this.state;
              viewStudentData.father_name = e.target.value;
              this.setState({ viewStudentData });
            }}/>
          </FormGroup>
          <FormGroup>
            <Label for="Mother Name">Mother Name</Label>
            <Input id = "Mother Name" value = {this.state.viewStudentData.mother_name} onChange={(e) => {
              let { viewStudentData } = this.state;
              viewStudentData.mother_name = e.target.value;
              this.setState({ viewStudentData });
            }}/>
          </FormGroup>
          <FormGroup>
            <Label for="Phone">Mobile No.</Label>
            <Input id = "Mobile_No" value = {this.state.viewStudentData.phone} onChange={(e) => {
              let { viewStudentData } = this.state;
              viewStudentData.phone = e.target.value;
              this.setState({ viewStudentData });
            }}/>
          </FormGroup>
          <FormGroup>
            <Label for="email">Email ID</Label>
            <Input id = "mailid"  placeholder="xyz@example.com" value = {this.state.viewStudentData.email} onChange={(e) => {
              let { viewStudentData } = this.state;
              viewStudentData.email = e.target.value;
              this.setState({ viewStudentData });
            }}/>
          </FormGroup>
          
        </ModalBody>
      </Modal>

      






      <h2>List of Students who were enrolled with us</h2>
      <Table>
        <thead>
          <tr>
            <th>id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>School Last Attend</th>
            <th>view Details</th>
          </tr>
        </thead>
        <tbody>
          {students}
        </tbody>
      </Table>
     
    </div>
  );
  }
}



export default App;
