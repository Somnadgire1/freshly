import React from 'react';
import './styles/Desktop.css';

export default function Desktop() {
  return (
    <div className='container desktop'>
        <div className='stroke'></div>
         <div class="card-body">
            <h1>Let’s get you started</h1>
        <div class="mb-3 col form mt-5">
    <label class="col-sm-2 col-form-label">Full name</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" placeholder="Ade Tiger"/>
    </div>
  </div>
  <div class="mb-3 col form">
    <label class="col-sm-2 col-form-label">Email address</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" placeholder='yourname@email.com'/>
    </div>
  </div>
  <div class="mb-3 col form phone">
  <label class="col-sm-2 col-form-label">Phone number</label>
  <div class="input-group">
  <span class="input-group-text bg-light" >+91</span>
  <input type="text" class="form-control" placeholder="9876543210"/>
</div>
</div>
  <div class="mb-3 col form">
    <label class="col-sm-2 col-form-label">College Name</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" placeholder=''/>
    </div>
  </div>
    </div>
    <button className='button'>Submit</button>
    </div>
  )
}
