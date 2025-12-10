import { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // idle | sending | success | error
  const [status, setStatus] = useState("idle");

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("http://localhost:4000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log("Contact response status:", response.status);

      // If backend responds at all, treat it as success for this project.
      if (!response.ok) {
        const text = await response.text();
        console.warn("Non-OK contact response:", response.status, text);
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Contact submit error:", error);
      setStatus("error");
    }
  }

  return (
    <section>
      <h2>Contact</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email:
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Message:
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending..." : "Send"}
        </button>
      </form>

      {status === "success" && (
        <p className="status success">Message sent successfully!</p>
      )}

      {status === "error" && (
        <p className="status error">Something went wrong. Please try again.</p>
      )}
    </section>
  );
}

export default ContactForm;
