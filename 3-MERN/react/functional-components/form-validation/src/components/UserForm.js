import React, { useReducer } from 'react';

const initialState = {
  firstName: {
    value: '',
    error: null
  },
  lastName: {
    value: '',
    error: null
  },
  email: {
    value: '',
    error: null
  }
};

const reducer = (state, action) => {
  return (
    {
      ...state,
      [action.type]: {
        value: action.payload,
        error: action.error
      }
    }
  );
}

// const isRequired = value => value === '' ? false : true;
const validateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const changeHandler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    const actionObj = {
      type: name,
      payload: value,
      error: null
    }

    if (['firstName', 'lastName'].indexOf(name) !== -1) {
      // if (name === 'firstName' || name === 'lastName') {
      if (value.length <= 0) {
        dispatch({
          ...actionObj
        });
      }
      else if (value.length < 2) {
        dispatch({
          ...actionObj, error: "error"
        });
      }
      else {
        dispatch({
          ...actionObj
        });
      }
    }
    if ('email'.indexOf(name) !== -1) {
      value.length <= 0 || validateEmail(value) ?
        dispatch({ ...actionObj }) :
        dispatch({ ...actionObj, error: "error" });
    }
  }

  const errorMsg = (error) => {
    if (error === "firstName" && state.firstName.error != null) {
      return <p className="text-danger">First name must be longer than 2 characters.</p>
    }
    if (error === "lastName" && state.lastName.error != null) {
      return <p className="text-danger">Last name must be longer than 2 characters.</p>
    }
    if (error === "email" && state.email.error != null) {
      return <p className="text-danger">Invalid email.</p>
    }
  }

  return (
    <div>
      {/* {JSON.stringify(state)} */}
      <form className="" onSubmit={changeHandler}>
        <div class="row formField">
          <label class="col-sm-4 col-form-label">First Name{' '}</label>
          <div class="col-sm-8">
            <input
              name="firstName"
              value={state.firstName.value}
              onChange={changeHandler}
            />
          </div>
          <small>{errorMsg("firstName")}</small>
        </div>
        <div class="row mt-3 formField">
          <label class="col-sm-4 col-form-label">Last Name{' '}</label>
          <div class="col-sm-8">
            <input
              name="lastName"
              value={state.lastName.value}
              onChange={changeHandler}
            />
          </div>
          <small>{errorMsg("lastName")}</small>
        </div>
        <div class="row mt-3 formField">
          <label class="col-sm-4 col-form-label">Email{' '}</label>
          <div class="col-sm-8">
            <input
              name="email"
              value={state.email.value}
              onChange={changeHandler}
            />
          </div>
          <small>{errorMsg("email")}</small>
        </div>
        <div className="mt-4">
          <button type="submit" className="btn btn-info">Submit</button>
        </div>
      </form>
    </div>
  );
}
