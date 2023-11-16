import React from "react";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };
  return (
    <>
      <motion.div>
        <h1 className="text-7xl my-16">CONTACT ///</h1>
        <form onSubmit={""}>
          <label className="flex flex-col">
            <span className="text-white text-[2rem] mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-form-black py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium text-xl"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white text-[2rem] mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className="bg-form-black py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium text-xl"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white text-[2rem] mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="bg-form-black py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium text-xl"
            />
          </label>

          <button
            type="submit"
            className="bg-bt-white py-1 px-8 rounded-xl outline-none w-fit text-black my-6"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
    </>
  );
};

export default Contact;
