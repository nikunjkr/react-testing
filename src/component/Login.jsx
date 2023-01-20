import React from 'react';

function Login({onSubmit}) {
  return (
    <div>
      <form
        style={{ display: 'flex', margin: '20px auto', flexDirection: 'column', width: '200px'}}
        name='form'
        onSubmit={e => {
          e.preventDefault()
          const {username, password} = e.target.elements
          onSubmit({
            username: username.value,
            password: password.value,
          })
        }}
      >
        <label style={{justifySelf: 'right'}} htmlFor="username-input">
          Username
        </label>
        <input
          id="username-input"
          placeholder="Username..."
          name="username"
          style={{flex: 1}}
        />
        <label style={{justifySelf: 'right'}} id="password-input" htmlFor='password'>
          Password
        </label>
        <input
          placeholder="Password..."
          type="password"
          name="password"
          id="password"
        />
        <button
          name='login'
          style={{ marginTop: '20px', backgroundColor:"#199FD9" , height:"40px", color: "white"}}
          type='submit'
        >
          Login

        </button>
        {/* <Button name="login" text="Login" /> */}
      </form>
    </div>
  )
}

export default Login
