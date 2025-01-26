import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import authAction from '../redux/auth/actions';
import { useDispatch } from 'react-redux';

const { login } = authAction;


const Signin = () => {
    const dispatch = useDispatch()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

    const onSubmit = (data) => {
        console.log("Form data", data);
        dispatch(login(data))
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h3>Sign In</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">Username</label>
                                    <input
                                        type="text"
                                        id="username"
                                        className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                                        {...register('username', {
                                            required: "Username is required",
                                            minLength: {
                                                value: 3,
                                                message: "Username must be at least 3 characters"
                                            }
                                        })}
                                    />
                                    {errors.username && <div className="invalid-feedback">{errors.username.message}</div>}
                                </div>

                                <div className="mb-3 position-relative">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        id="password"
                                        className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                        {...register('password', {
                                            required: "Password is required",
                                            minLength: {
                                                value: 6,
                                                message: "Password must be at least 6 characters"
                                            }
                                        })}
                                    />
                                    <div
                                        onClick={togglePasswordVisibility}
                                        className="position-absolute top-50 end-0 me-3 translate-middle-y passwordIcon"
                                        style={{ cursor: 'pointer' }}
                                    >
                                        {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                                    </div>
                                    {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
                                </div>

                                <div className="d-flex justify-content-end">
                                    <button type="submit" className="btn btn-primary">Sign In</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signin
