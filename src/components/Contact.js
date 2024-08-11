import React, { useRef ,useState} from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import contactImg from "../assets/img/contact-img.svg";

export const Contact = () => {
  const form = useRef();
const [messageSent,setMessageSent]=useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_f0wxk5r",
        "template_tthepen",
        form.current,
        "zcz7okdgigZnVudEj"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          setMessageSent(true);
        },
        (error) => {
          console.log(error.text);
setMessageSent(false);
        }
      );
      form.current.reset();
  };

  return (
    
    <StyledContactContainer>
      <StyledContactForm>
        <h3>Contact Me</h3>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" required/>
          <label>Email</label>
          <input type="email" name="user_email" required/>
          <label>Message</label>
          <StyledTextarea name="message" required/>
          <StyledSubmit type="submit" value="Send" />
          
        </form>
        {messageSent && <SuccessMessage>Message sent successfully!</SuccessMessage>} {/* Success message */}
      </StyledContactForm>
      <StyledContactImage src={contactImg} alt="Contact Us" />
    </StyledContactContainer>
  );
};

// Styles
const StyledContactContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
`;

const StyledContactForm = styled.div`
  width: 48%;

  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;
    background: linear-gradient(to right, violet, blue);
    padding: 20px;
    border-radius: 10px;

    label {
      margin-top: 1rem;
      color: white;
    }

    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      margin-top: 0.5rem;
      background-color: white;

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
  }
`;

const StyledTextarea = styled.textarea`
  max-width: 100%;
  min-width: 100%;
  width: 100%;
  max-height: 100px;
  min-height: 100px;
  padding: 7px;
  outline: none;
  border-radius: 5px;
  border: 1px solid rgb(220, 220, 220);
  margin-top: 0.5rem;
  background-color: white;

  &:focus {
    border: 2px solid rgba(0, 206, 158, 1);
  }
`;

const StyledSubmit = styled.input`
  margin-top: 2rem;
  cursor: pointer;
  background: blue;
  color: blue;
  border: none;
  padding: 10px;
  border-radius: 5px;
`;

const StyledContactImage = styled.img`
  width: 48%;
  border-radius: 10px;
`;
const SuccessMessage=styled.p`
margin-top:1rem;
color:green;
font-weight:bold;
`;
