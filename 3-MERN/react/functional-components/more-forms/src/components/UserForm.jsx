import React, { useState } from "react";

const UserForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <>
      <form>
        <div class="input-group">
          <span class="input-group-text" id="basic-addon1">First Name:</span>
          <input onChange={(e) => { setFirstName(e.target.value) }} type="text" name="firstName" class="form-control" />
        </div>
        {
          firstName.length > 0 && firstName.length < 2 ?
            <p className="text-danger">First Name must be at least 2 characters.</p> : ""
        }

        <div className="input-group mt-3">
          <span class="input-group-text" id="basic-addon1">Last Name:</span>
          <input onChange={(e) => { setLastName(e.target.value) }} type="text" name="lastName" className="form-control" />
        </div>
        {
          lastName.length > 0 && lastName.length < 2 ?
            <p className="text-danger">Last Name must be at least 2 characters.</p> : ""
        }

        <div class="input-group mt-3">
          <span class="input-group-text" id="basic-addon1">Email:</span>
          <input onChange={(e) => { setEmail(e.target.value) }} type="text" name="email" class="form-control" />
        </div>
        {
          email.length > 0 && email.length < 5 ?
            <p className="text-danger">Email must be at least 5 characters.</p> : ""
        }

        <div class="input-group mt-3">
          <span class="input-group-text" id="basic-addon1">Password:</span>
          <input onChange={(e) => { setPassword(e.target.value) }} type="password" name="password" class="form-control" />
        </div>
        {
          password.length > 0 && password.length < 8 ?
            <p className="text-danger mt-0">Password must be at least 8 characters.</p> : ""
        }

        <div class="input-group mt-3">
          <span class="input-group-text" id="basic-addon1">Confirm Password:</span>
          <input onChange={(e) => { setConfirmPassword(e.target.value) }} type="password" name="confirmPassword" class="form-control" />
        </div>
        {
          confirmPassword.length > 0 && confirmPassword !== password ?
            <p className="text-danger">Passwords must match.</p> : ""
        }
      </form>
    </>
  );
}

export default UserForm;