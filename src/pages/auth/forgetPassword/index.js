import React from "react";
import styled from "styled-components";
import Button from "../../../components/Button";
import FormInputComponent from "../../../components/InputComponent";
// import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import forgotPassword from "../../../redux/actions/auth/forgotPassword.action";
import SubmitSuccess from "../../../components/SubmitSuccess";
import Layout from "../../../components/NavigationBar/Layout";


function ForgotPassword() {
  
  const forgotPasswordValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Please enter valid email")
      .required("Email Address is Required"),
  });

  const { loading, isSubmitSuccessful } = useSelector((state) => state.forgotPassword);
  
  const dispatch = useDispatch();

  return (
    <Layout>
    <StyledHome>
      {/* <LogoComponent /> */}
      {!isSubmitSuccessful ? (
        <Formik
          validationSchema={forgotPasswordValidationSchema}
          initialValues={{
            email: "",
          }}
          onSubmit={(values) => {
            // console.log(values);
            dispatch(forgotPassword(values));
          }}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            isValid,
          }) => (
            <div className="form__container">
              <p className="header">Forgot Password</p>

              <div className="form__wrapper">
                <FormInputComponent
                  placeholder="Enter your email"
                  label="Email"
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  error={errors.email}
                />
              </div>

              <div className="form__wrapper padding">
                <Button
                  type="submit"
                  disabled={!isValid}
                  loading={loading}
                  onClick={handleSubmit}
                >
                  Reset Password
                </Button>
              </div>
              <div>
                <p className="text">
                  Already have an account?
                  <Link to="/login" className="link">
                    {" "}
                    Login
                  </Link>
                </p>
              </div>
            </div>
          )}
        </Formik>
      ) : (
        <div className="success-div">
          <SubmitSuccess message={
            "An email with a link to reset your password has been sent to your email."
          } />
        </div>
      )}
    </StyledHome>
    </Layout>
  );
}

export default ForgotPassword;

const StyledHome = styled.div`
  font-family: "Inter";
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  overflow: auto;
  padding: 20px;

  .form__container {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    align-items: center;
    justify-content: center;
    width: 500px;
    border: 1px solid #e6e6e6;
    
    @media (max-width: 768px) {
      width: 100%;
      padding: 20px;
      /* border:none; */
      margin-top: 70px;
    }
  }
  
  .header {
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 39px;
    color: #21334f;
  }

  .form__wrapper {
    width: 90%;
  }
  .bottom__text {
    font-family: "Sofia Pro";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #21334f;
  }
  .padding {
    margin-bottom: 20px;
    margin-top: 20px;
  }
  .text-center {
    text-align: center;
    color: rgba(0, 156, 244, 1);
  }
  .to-register {
    color: rgba(20, 168, 0, 1);
  }
  .remember-me {
    display: flex;
    align-self: flex-start;
    margin-left: 90px;
    align-items: center;
    @media (max-width: 768px) {
      margin-left: 0px;
      justify-content: center;
      align-items: center;
      align-self: center;
    }
  }
  .remember-me input {
    width: 30px;
    height: 50px;
  }
  .success-div{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 70vh;
  }
`;
