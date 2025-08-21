import React, { useState } from 'react'
import Login_svg from '../../assets/Login-amico.svg';
import blog_svg from '../../assets/blobanimation.svg';
import { NavLink } from 'react-router-dom';
import { useFormik } from 'formik';
import { registerSchema } from './schema';
import {useNavigate} from 'react-router-dom'
import { toast } from 'react-hot-toast'

function Register() { 

    const history1 = useNavigate();

    //for storing the data to sent in backend.
    const [user,setUser] = useState({
        username:"",
        email:"",
        password:"",
        cpassword:"",
        role:"",
    });

    let name,value;
    const handleChange = (e)=>{
        name = e.target.name;
        value = e.target.value;
        setUser({...user,[name]:value})
    }

    const formik = useFormik({
        initialValues: user,
        enableReinitialize: true,
        validationSchema: registerSchema,
        onSubmit: async (values) => {
            const {username,email,password,cpassword,role} = values;
            const  res = await fetch("http://localhost:5000/register",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({ username,email,password,cpassword,role })
            });
            const data = await res.json();

            if(res.status === 422 || !data){
                toast.error("Please Fill The Details.");
            }
            else if(res.status === 421){
                toast.error("Email is Already Registered");
            }
            else if(res.status === 420){
                toast.error('Password is not Matching');
            }
            else{
                toast.success('Register Successfuly');
                history1("/login");
            }
        }
    });

     const width2 = window.outerWidth;
  return (
    <>
    <div className="smallScreen">
      <mark>The Screen is Visible with width more than 250px <br/><br/><hr/><br/>Screen Size: {width2}px</mark>
    </div>
        <div className="registerMainComponent">
        <img className='blob_svg blob_a' src={blog_svg} alt="backgound-svg" />  
            <img className='blob_svg2 blob_a' src={blog_svg} alt="backgound-svg" />
            <h1 className='registerTitle title'>Registration</h1><br/>
            <div className="registerSection">
                <div className="registerForm"> 
                    <form onSubmit={formik.handleSubmit}>
                        <div className="RegisterInputField">
                            <div className="Registername">
                                <label className='registerLabels' htmlFor="username"> Username:</label><br />
                                <input 
                                type="text" 
                                name="username" 
                                id="username" 
                                placeholder='codebybit'
                                value={formik.values.username}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                /><br />
                                {formik.touched.username && formik.errors.username ? (<p className='errorlabelinput'>{formik.errors.username}</p>) : null}
                            </div>
                            <div className="Registeremail">
                                <label className='registerLabels' htmlFor="email">Email:</label><br />
                                <input 
                                type="text" 
                                name="email" 
                                id="email" 
                                placeholder='CodeByBit@gmail.com' 
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                /><br />
                                {formik.touched.email && formik.errors.email ? (<p className='errorlabelinput'>{formik.errors.email}</p>) : null}
                            </div>
                            <div className="Registerpassword">
                                <label className='registerLabels' htmlFor="pass">Password:</label><br />
                                <input 
                                type="password" 
                                name="password" 
                                id="password" 
                                placeholder='123456' 
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                /><br />
                                {formik.touched.password && formik.errors.password ? (<p className='errorlabelinput'>{formik.errors.password}</p>) : null}
                            </div>
                            <div className="Registercpassword">
                                <label className='registerLabels' htmlFor="cpass">Confirm Password:</label><br />
                                <input 
                                type="password" 
                                name="cpassword" 
                                id="cpassword" 
                                placeholder='123456'  
                                value={formik.values.cpassword}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                /><br />
                                {formik.touched.cpassword && formik.errors.cpassword ? (<p className='errorlabelinput'>{formik.errors.cpassword}</p>) : null}
                            </div>
                            <div className="Registerdomain">
                                <label className='registerLabels' htmlFor="work">Profession:</label>
                                <input 
                                type="text" 
                                name="role" 
                                id="role" 
                                placeholder='Web Developer' 
                                value={formik.values.role}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                />
                                {formik.touched.role && formik.errors.role ? (<p className='errorlabelinput'>{formik.errors.role}</p>) : null}
                            </div>
                        </div>
                        <input type="submit" className='btn registerbtn' value="Register" />
                    </form>
                </div>
                <div className="registerSVG">
                    <img src={Login_svg} alt="" />
                    <p>Already have an Account?  <NavLink to="/login"><span className="registerSwitch">Login Now</span></NavLink></p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Register
