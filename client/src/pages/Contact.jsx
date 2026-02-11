import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main>
      <section id="contact">
        <h1>Contact Us</h1>
        <p>
          If you have any questions about Vibora UK, our products, your order or anything else,
          send us a message below with your order number if you have one.
        </p>

        <form id="contact-form" onSubmit={onSubmit}>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Full Name"
            value={form.name}
            onChange={onChange}
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
            required
            value={form.email}
            onChange={onChange}
          />
          <textarea
            name="message"
            id="message"
            rows="6"
            placeholder="Your Message"
            required
            value={form.message}
            onChange={onChange}
          />
          <button type="submit" id="contact-submit">
            Submit
          </button>
        </form>
      </section>
    </main>
  );
}
