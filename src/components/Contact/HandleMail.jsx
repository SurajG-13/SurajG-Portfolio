import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const HandleMail = () => {
  const serviceID = import.meta.env.VITE_SERVICE_ID;
  const templateID = import.meta.env.VITE_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    services: [],
    project: "",
    message: "",
  });

  const [modal, setModal] = useState({
    isOpen: false,
    message: "",
    isError: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleServiceSelect = (service) => {
    setFormData((prevData) => {
      const services = prevData.services.includes(service)
        ? prevData.services.filter((s) => s !== service)
        : [...prevData.services, service];
      return { ...prevData, services };
    });
  };

  const handleProjectSelect = (project) => {
    setFormData({ ...formData, project });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      formData.services.length === 0 ||
      !formData.project
    ) {
      setModal({
        isOpen: true,
        message: "Please fill in all required fields.",
        isError: true,
      });
      return;
    }

    const templateParams = {
      from_name: formData.name,
      from_mailID: formData.email,
      from_website: formData.website || "Not provided",
      from_subject: "New Inquiry",
      from_service: formData.services.join(", "),
      from_project: formData.project,
      message: formData.message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
        setModal({
          isOpen: true,
          message: "Form submitted successfully!",
          isError: false,
        });
        resetForm();
      })
      .catch((error) => {
        console.error("Failed to send email. Error:", error);
        setModal({
          isOpen: true,
          message: "Error sending email. Please try again.",
          isError: true,
        });
      });
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      website: "",
      services: [],
      project: "",
      message: "",
    });
  };

  const closeModal = () => {
    setModal({ isOpen: false, message: "", isError: false });
  };

  return (
    <main className="overflow-hidden bg-darkBackground font-sans mt-20">
      <div className="flex items-center p-6">
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="p-8 rounded-lg shadow-lg max-w-lg w-full"
          onSubmit={handleSubmit}
        >
          <div className="mb-6">
            <label className="block text-primaryWhite font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-inherit border text-primaryWhite py-3 px-4 rounded-3xl outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-primaryWhite font-semibold mb-2">
              E-mail Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="you@xyz.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-inherit border text-primaryWhite py-3 px-4 rounded-3xl outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-primaryWhite font-semibold mb-2">
              Company Website (optional)
            </label>
            <input
              type="url"
              name="website"
              placeholder="https://www.company.com"
              value={formData.website}
              onChange={handleChange}
              className="w-full bg-inherit border text-primaryWhite py-3 px-4 rounded-3xl outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label className="block text-primaryWhite font-semibold mb-2">
              Preferred Service
            </label>
            <div className="flex flex-wrap gap-2">
              {[
                "Front-End",
                "Back-End",
                "Deploy/DevOps",
                "Full Stack",
                "Other",
              ].map((service) => (
                <button
                  type="button"
                  key={service}
                  className={`bg-[#303030] text-primaryWhite py-2 px-4 rounded-full hover:bg-blue-400 ${formData.services.includes(service) ? "bg-blue-500" : ""}`}
                  onClick={() => handleServiceSelect(service)}
                >
                  {service}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-primaryWhite font-semibold mb-2">
              Project Type
            </label>
            <div className="flex gap-2">
              {["Existing", "Build from Scratch"].map((type) => (
                <button
                  type="button"
                  key={type}
                  className={`bg-[#303030] text-primaryWhite py-2 px-4 rounded-full hover:bg-blue-400 ${formData.project === type ? "bg-blue-500" : ""} `}
                  onClick={() => handleProjectSelect(type)}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-primaryWhite font-semibold mb-2">
              Write Your Message
            </label>
            <textarea
              rows="4"
              name="message"
              placeholder="What is on your mind?"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-inherit border text-primaryWhite py-3 px-4 rounded-3xl outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white py-3 px-6 rounded-3xl hover:bg-blue-500 transition"
              type="submit"
            >
              Submit
            </motion.button>
          </div>
        </motion.form>

        {/* Modal */}
        {modal.isOpen && (
          <div
            className={`fixed inset-0 flex items-center justify-center z-50 ${modal.isError ? "bg-red-500" : "bg-green-500"} bg-opacity-75`}
          >
            <div className="bg-white rounded-lg p-6 max-w-sm mx-auto">
              <h2 className="text-lg font-semibold">
                {modal.isError ? "Error" : "Success"}
              </h2>
              <p className="mt-4">{modal.message}</p>
              <div className="mt-6">
                <button
                  className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-500"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default HandleMail;
