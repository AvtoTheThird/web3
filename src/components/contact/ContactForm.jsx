import React from "react";
import {
  Form,
  Inputfield,
  Label,
  TextareInput,
  Contact,
} from "./contact-form-styles";
function ContactForm() {
  return (
    <Form>
      <div>
        <h1>Get in touch</h1>
        <h3>Our friendly team would love to hear from you.</h3>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <Label id="username" htmlFor="username">
            first name
          </Label>
          <Inputfield type="text" placeholder="Name" />
        </div>
        <div>
          <Label id="username" htmlFor="username">
            email
          </Label>
          <Inputfield type="text" placeholder="email" />
        </div>
      </div>
      <div>
        <Label id="username" htmlFor="username">
          Subject
        </Label>
        <Inputfield type="text" placeholder="Subject" />
      </div>
      <div>
        <Label id="username" htmlFor="username">
          Your message
        </Label>
        <TextareInput type="textarea" placeholder="Your message" />
      </div>
      <div>
        {" "}
        <Contact>Send Message</Contact>
      </div>
    </Form>
  );
}

export default ContactForm;
