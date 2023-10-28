import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
  };

  return (
    <>
      <section className="contact w-screen h-screen flex flex-col items-center justify-evenly">
        <h2 className="text-5xl oro">CONTACT US</h2>
      </section>

      <section className="skin w-full flex flex-col items-center gap-1 md:flex-row">
        <div className="w-full h-full p-2 flex flex-col items-center justify-center">
          <p className="mb-5 w-96">Feel free to contact us and we will get back to you as soon as we can</p>
          <form onSubmit={handleSubmit}>
            <input
              className="w-72 oro"
              type="text"
              placeholder="Name"
              value={name}
              onChange={handleNameChange}
            />
            <input
              className="w-72 oro"
              type="text"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />
            <textarea
              className="oro"
              name="message"
              id="message"
              cols="33"
              rows="5"
              placeholder="Message"
              value={message}
              onChange={handleMessageChange}
            ></textarea>
            <input className="oro text-slate-500 text-black w-20 text-center p-2" type="submit" value="SEND" />
          </form>
        </div>

        <ul className="w-full h-full flex flex-col items-center gap-5 oro p-3">
          <li>
            <pre className="text-gray-400 w-full text-center">OPENING HOURS</pre>
            <p className="text-xl w-full text-center">Monday-Friday</p>
            <p>8:00 AM - 6:00 PM</p>
            <p className="text-xl w-full text-center">Saturday</p>
            <p>8:00 AM - 3:00 PM</p>
          </li>

          <li>
            <pre className="text-gray-400 w-full text-center">ADDRESS</pre>
            <p className="w-40">New York, Manhattan St, Sherleton Ave</p>
          </li>

          <li>
            <pre className="text-gray-400 w-full text-center">SUPPORT</pre>
            <p className="w-40">beltjerwrl@gmail.com</p>
            <p className="w-40">51+495-3845</p>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Contact;
