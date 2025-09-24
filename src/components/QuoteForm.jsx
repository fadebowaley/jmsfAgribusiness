import { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import ReCAPTCHA from 'react-google-recaptcha';

const QuoteForm = () => {
  const [recaptchaToken, setRecaptchaToken] = useState('');

  const handleRecaptcha = (value) => {
    setRecaptchaToken(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      recaptchaToken,
      // Add form field values here if needed
    };
    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      console.log(result);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="w-full mx-auto bg-gray-50 p-8 rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Request a Quote</h2>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          className="w-full px-4 py-2 bg-[#F2F2F2] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full bg-[#F2F2F2] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="text"
          placeholder="Subject"
          className="w-full bg-[#F2F2F2] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <textarea
          placeholder="Message"
          rows="4"
          className="w-full bg-[#F2F2F2] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        ></textarea>

        <ReCAPTCHA
          sitekey="6LeX1ZQrAAAAAKH8l6nP2OSN-GdEynMcPt38RMSQ"
          onChange={handleRecaptcha}
        />

        <div className="flex justify-center pt-4">
          <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md transition-colors">
            <FaPaperPlane />
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default QuoteForm;
