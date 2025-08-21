import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Login_svg from '../../assets/Back-to-work-pana.png';
import blog_svg from '../../assets/blobanimation.svg';
import { toast } from 'react-hot-toast';
import { useFormik } from 'formik';
import { loginSchema } from './schema';

import {UsedContext} from '../App'

function Login() {

  const {state,dispatch} = useContext(UsedContext);

  const history2 = useNavigate();

  const width2 = window.outerWidth;

  const [username,setUsername] = useState('');
  const [password,setpassword] = useState('');

  const formik = useFormik({
    initialValues: { username:'', password:'' },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      const res = await fetch('http://localhost:5000/login',{
        method:'POST',
        headers:{
          "Content-Type":"application/json"
          },
          body:JSON.stringify(values)
      })

      const data = await res.json();
  
      if(res.status === 400 || !data){
        toast.error('Please Enter Valid Inputs');
      }
      else if(res.status === 401){
        toast.error("First Register Yourself");
      }
      else if(res.status === 402 ){
        toast.error("Wrong Password.");
      }
      else if(res.status === 403){
        toast.error("Please Fill The Details");
      }
      else{
        dispatch({type:'USER',payload:true});
        toast.success("Login Successfully");
        history2('/');
      }
    }
  })

  return (
    <> 
    <div className="smallScreen">
      <mark>The Screen is Visible with width more than 250px <br/><br/><hr/><br/>Screen Size: {width2}px</mark>
    </div>
      <div className="loginContainer">
        <img className='blob_svg blob_a' src={blog_svg} alt="backgound-svg" />
        <img className='blob_svg2 blob_a' src={blog_svg} alt="backgound-svg" />
        <div className="registerSVG loginimage">
                    <img src={Login_svg} alt="" />
                    <p>Don't have an Account? <NavLink to="/register"><span className='registerSwitch'>Create Account</span></NavLink></p>
        </div>
        <div className="loginDetails"> 
          <h1 className='title logintitle'>Login</h1>
          <form className='LoginForm' onSubmit={formik.handleSubmit}>
            <div className="Loginname">
              <label htmlFor="username"> Username:</label><br />
              <input type="text" name="username" id="username" autoComplete='off'
               placeholder='codebybit' 
               value={formik.values.username}
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
               /><br />
              {formik.touched.username && formik.errors.username ? (<p className='errorlabelinput'>{formik.errors.username}</p>) : null}

            </div>
            <div className="Loginname">
              <label htmlFor="pass"> Password:</label><br />
              <input type="password" name="password" id="pass" autoComplete='off'
               placeholder='codebybit' 
               value={formik.values.password}
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
                /><br />
              {formik.touched.password && formik.errors.password ? (<p className='errorlabelinput'>{formik.errors.password}</p>) : null}

            </div> 
            <input type="submit" name="submit" id="submit" className='btn' value="Login" />
          </form>
        </div>
      </div>
    </>
  )
}

export default Login