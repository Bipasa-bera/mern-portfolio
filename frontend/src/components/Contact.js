import React, { useState } from 'react';
import axios from 'axios';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/contact', form);
      alert('Message sent successfully!');
      setForm({ name: '', email: '', message: '' });
    } catch {
      alert('Error sending message.');
    }
  };

  return (
    <div className="container mt-5 mb-5">
      <h2 className="text-center mb-4">Contact Me</h2>
      <form className="col-md-6 mx-auto" onSubmit={handleSubmit}>
        <input className="form-control mb-3" name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
        <input className="form-control mb-3" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <textarea className="form-control mb-3" name="message" placeholder="Message" rows="4" value={form.message} onChange={handleChange} required />
        <button className="btn btn-primary w-100">Send</button>
      </form>
    </div>
  );
}

export default Contact;