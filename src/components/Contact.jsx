import React, { useState } from "react";
import "./Contact.css";
import "animate.css";

const Contact = () => {
  const links = [
    {
      icon: "fa-brands fa-linkedin",
      title: "LinkedIn",
      name: "Tejavath Dindi Vinayak",
      url: "https://www.linkedin.com/in/tejavath-dindi-vinayak-ab26aa273/",
    },
    {
      icon: "fa-brands fa-github",
      title: "GitHub",
      name: "vinyakchinna95",
      url: "https://github.com/vinyakchinna95",
    },
    {
      icon: "fa-solid fa-envelope",
      title: "Email",
      name: "vinayaktejavath9@gmail.com",
      url: "mailto:vinayaktejavath9@gmail.com",
    },
  ];

  // State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Update form inputs on change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare mailto link
    const mailtoLink = `mailto:vinayaktejavath9@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    // Open mail client
    window.location.href = mailtoLink;
  };

  return (
    <div className="contact-container">
      <div className="container-info">
        <h2 className="container-title">Get in Touch</h2>
        <p className="container-disclaimer">
          Have a project in mind or want to collaborate? I'd love to hear from
          you!
        </p>
      </div>

      <div className="grid-one">
        {/* Left Side - Links */}
        <div className="lets-connect">
          <div className="lets-connect-box">
            <div className="lets-connect-heading">
              <div className="lets-connect-icon">
                <i className="fa-regular fa-message"></i>
              </div>
              <h3 className="lets-connect-title">Let's Connect</h3>
              <p className="lets-connect-disclaimer">
                I'm always open to discussing new opportunities and interesting
                projects.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {links.map((link, index) => (
              <div className="space-item" key={index}>
                <div className="icon">
                  <i className={link.icon}></i>
                </div>
                <div>
                  <p className="space-y-title">{link.title}</p>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="space-y-item-link"
                  >
                    {link.name}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="contact-form-page">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your.email@example.com"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="What's this about?"
                required
                value={formData.subject}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell me about your project or what you'd like to discuss..."
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              <i className="fa-solid fa-paper-plane"></i> Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
