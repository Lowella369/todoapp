import React from "react";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact</h1>
      <div className="contact">
        <form action="https://formspree.io/email@domain.tld" method="POST">
          <input
            type="text"
            name="fname"
            id="fname"
            placeholder="First Name"
            required
          />
          <input
            type="text"
            name="lname"
            id="lname"
            placeholder="Last Name"
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email"
            required
          />
          <textarea
            name="message"
            id="message"
            placeholder="message"
            required
          />
          <input type="submit" name="send" id="submit" value="send" />
        </form>
      </div>
    </div>
  );
}

export default Contact;
