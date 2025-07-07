import { useRef, useState } from "react";

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    date: new Date().toLocaleString(),
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Let Netlify handle form submission naturally
    formRef.current.submit();

    // Reset form UI
    setTimeout(() => {
      setForm({
        name: "",
        email: "",
        message: "",
        date: new Date().toLocaleString(),
      });
      setLoading(false);
    }, 2000);
  };

  return (
    <section id="contact" className="pt-10 pb-30 flex-center">
      <div className="w-full max-w-xl mx-auto px-5">
        <h2 className="text-3xl font-bold text-white text-center mb-10">
          GET IN TOUCH WITH ME
        </h2>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          className="w-full flex flex-col gap-7 bg-white/5 p-8 rounded-xl border border-white/10 backdrop-blur-md"
        >
          {/* Required for Netlify */}
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="date" value={form.date} />

          <div hidden>
            <label>
              Don’t fill this out if you’re human:
              <input name="bot-field" />
            </label>
          </div>

          <div>
            <label htmlFor="name" className="text-white font-medium mb-2 block">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-md bg-white/10 text-white outline-none"
            />
          </div>

          <div>
            <label htmlFor="email" className="text-white font-medium mb-2 block">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-md bg-white/10 text-white outline-none"
            />
          </div>

          <div>
            <label htmlFor="message" className="text-white font-medium mb-2 block">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="5"
              required
              className="w-full p-3 rounded-md bg-white/10 text-white outline-none resize-none"
            />
          </div>

          <button
            type="submit"
            className="cta-button bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
