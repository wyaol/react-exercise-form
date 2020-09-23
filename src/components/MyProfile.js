import React, {Component} from 'react';
import './myProfile.less';

class MyProfile extends Component {
  state = {
    name: '',
    gender: 'Male',
    description: '',
    haveRead: false
  }

  onChange = (field, event, checked=false) => {
    const value = checked === false ? event.target.value : event.target.checked;
    this.setState({
      [field]: value
    })
  }

  onSubmit = (e) => {
    console.log(this.state);
    
  }

  render() {
    return (
      <form target="test">
        <div className="content">
          <h2>My Profile</h2>
          
          <div className='form-item'>
            <span>Name</span>
            <input type="text" placeholder='Your name' onChange={(e) => this.onChange('name', e)} />
          </div>

          <div className='form-item'>
            <span>Gender</span>
            <select onChange={(e) => this.onChange('gender', e)}>
              <option value="Male" defaultValue>Male</option>
              <option value="Male">Female</option>
            </select>
          </div>

          <div className='form-item'>
            <span>Description</span>
            <textarea placeholder='Description about your self' rows="10" onChange={(e) => this.onChange('description', e)}></textarea>
          </div>

          <div className='checked-item'>
            <input type="checkbox" name="" id="" onChange={(e) => this.onChange('haveRead', e, true)} />
            I have read the terms of conduct
          </div>

          <div align='center'>
            <input onClick={this.onSubmit} type="submit" value="Submit" disabled={
              this.state.name === '' ||
              this.state.gender === '' || 
              this.state.description === '' || 
              this.state.haveRead === false
            } />
          </div>
        </div>
      </form>
    );
  }
}

export default MyProfile;


