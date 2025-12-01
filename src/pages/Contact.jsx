import { useState } from "react";
import { db, collection, addDoc, Timestamp } from "../firebase/firebaseConfig.js";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "messages"), {
        name: form.name,
        email: form.email,
        message: form.message,
        createdAt: Timestamp.now()
      });
      setSuccess("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Error sending message:", err);
      setSuccess("Failed to send message. Try again.");
    }
  };

  return (
    <section className="min-h-screen px-6 pt-32 pb-16 bg-navy text-grayLight animate-fade-in">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-cyan">Contact Me</h2>
        <p className="text-grayLight/80 text-lg mb-4">
          I’m always open to new opportunities or collaborations. Send me a message!
        </p>

        {success && <p className="text-green-400 mb-4">{success}</p>}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            className="px-4 py-2 rounded border border-cyan bg-navy text-grayLight focus:outline-none focus:ring-2 focus:ring-cyan"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="px-4 py-2 rounded border border-cyan bg-navy text-grayLight focus:outline-none focus:ring-2 focus:ring-cyan"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            className="px-4 py-2 rounded border border-cyan bg-navy text-grayLight focus:outline-none focus:ring-2 focus:ring-cyan"
            required
          />
          <button
            type="submit"
            className="px-6 py-3 mt-2 bg-cyan text-navy font-bold rounded hover:shadow-[0_0_20px_#00f5ff80] transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
export default Contact;