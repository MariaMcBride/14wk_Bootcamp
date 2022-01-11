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
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">First Name:</span>
          <input onChange={(e) => { setFirstName(e.target.value) }} type="text" name="firstName" class="form-control" />
        </div>

        <div className="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">Last Name:</span>
          <input onChange={(e) => { setLastName(e.target.value) }} type="text" name="lastName" className="form-control" />
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">Email:</span>
          <input onChange={(e) => { setEmail(e.target.value) }} type="text" name="email" class="form-control" />
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">Password:</span>
          <input onChange={(e) => { setPassword(e.target.value) }} type="password" name="password" class="form-control" />
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">Confirm Password:</span>
          <input onChange={(e) => { setConfirmPassword(e.target.value) }} type="password" name="confirmPassword" class="form-control" />
        </div>
      </form>
      <div className="m-3">
        <p className="text-center">Your Form Data</p>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
        <p>Confirm Password: {confirmPassword}</p>
      </div>
    </>
  );
}

export default UserForm;