import { useState } from "react";
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const [isSending, setIsSending] = useState(false);

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.includes("@")) {
      newErrors.email = "Enter a valid email";
    }

    if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validation = validate();

    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }

    setIsSending(true);

    // Replace this timeout with EmailJS or your backend API
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setSuccess(true);

    setFormData({
      name: "",
      email: "",
      message: "",
    });

    setIsSending(false);

    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Get In Touch</h2>

      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <label>Name</label>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />

          {errors.name && (
            <small className="error">{errors.name}</small>
          )}
        </div>

        <div className="form-group">
          <label>Email</label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />

          {errors.email && (
            <small className="error">{errors.email}</small>
          )}
        </div>

        <div className="form-group">
          <label>Message</label>

          <textarea
            rows="6"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message..."
          />

          {errors.message && (
            <small className="error">{errors.message}</small>
          )}
        </div>

        <button
          className="contact-btn"
          disabled={isSending}
        >
          {isSending ? "Sending..." : "Send Message"}
        </button>

        {success && (
          <p className="success">
            ✅ Message sent successfully!
          </p>
        )}

      </form>
    </section>
  );
};

export default Contact;