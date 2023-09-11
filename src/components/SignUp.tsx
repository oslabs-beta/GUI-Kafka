import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TEInput, TERipple } from 'tw-elements-react';
import logo from '../assets/ClusterSense.png';

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    let navigate = useNavigate();
    const goLogin = () => {
      let path = "/login";
      navigate(path);
    };
    const toHome = () => {
      let path = "/home";
      navigate(path);
    };
  
    const handleClick = async () => {
    
      try{
        const body = {
          username: username,
          password: password
        }
          const data = await fetch(`http://localhost:4000/login/signupRequest`, {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        })
        if (data.ok) {
          toHome()
        }
      } catch(err){
        //render error in front end
        console.log(err);
      }
  
    }
    
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}className="h-screen bg-neutral-200 dark:bg-neutral-700">
        <div className="container flex items-center justify-center h-screen p-10">
          <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
            <div className="w-full">
              <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
                <div className="g-0 lg:flex lg:flex-wrap">
                  {/* //Left column container */}
                  <div className="px-4 md:px-0 lg:w-6/12">
                    <div className="md:mx-6 md:p-12">
                      <div className="text-center">
                        <img className="mx-auto w-48" src={logo} alt="" />
                        <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                          Welcome to ClusterSense
                        </h4>
                      </div>
                      <div className="signInContainer">
                        {/* <h2>Sign In:</h2> */}
                        <div className="signInBox mb-4 ">
                          <TEInput
                            // name="username"
                            // className="mb-4"
                            type="text"
                            label="username"
                            value={username}
                            // size = "lg"
                            onChange={(e) => setUsername(e.target.value)}
                          ></TEInput>
                          <br></br>
                          <TEInput
                            name="password"
                            // className="mb-4"
                            type="password"
                            label="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          ></TEInput>
                          <br></br>
                          <div className="mb-12 pb-1 pt-1 text-center">
                            <TERipple rippleColor="light" className="w-full">
                              <button
                                className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                                type="button"
                                style={{
                                  background:
                                    'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)',
                                }}
                                onClick={handleClick}
                              >
                                Register
                              </button>
                            </TERipple>
  
                            {/* //Forgot password link */}
                            {/* <a href="#!">Forgot password?</a> */}
                          </div>
                          {/* // Register button */}
                          <div className="flex items-center justify-between pb-6">
                            <p className="mb-0 mr-2">Have an account?</p>
                            <TERipple rippleColor="light">
                              <button
                                type="button"
                                onClick={goLogin}
                                className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                              >
                                Login
                              </button>
                            </TERipple>
                          </div>
  
                          {/* <button onClick={Submit}>Sign In</button> */}
                          {/* <p>Don't have an account?</p> */}
                          {/* <button onClick={toSignUp}>Sign Up</button>  */}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* // Right column container with background and description */}
                  <div
                    className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                    style={{
                      background:
                        'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)',
                    }}
                  >
                    <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                      {/* <img className="mx-auto w-48" src={logo} alt="" /> */}
                      <h4 className="mb-6 text-xl font-semibold">
                        Kafka Cluster Management Tool
                      </h4>
                      <p className="text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      // <div className="signInPage">
      //   <div className="signInContainer">
      //     <h2>Sign Up:</h2>
      //     <div className="signInBox">
      //         <input name="username" type="text" placeholder="username" value = {username} onChange={(e) => setUsername(e.target.value)}/>
      //         <input name="password" type="password" placeholder="password" value = {password} onChange={(e) => setPassword(e.target.value)}/>
      //         <button onClick={handleClick}>Sign Up</button>
      //         <button onClick={goLogin}>Back to Log In</button>
      //     </div>
      //   </div>
      // </div>
    );
  };
  
  export default SignUp;
  