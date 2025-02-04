import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate email
    if (!validateEmail(formData.email)) {
      setErrors({ email: 'Please enter a valid email address' });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Replace this URL with your Google Apps Script web app URL
      const response = await fetch('YOUR_GOOGLE_APPS_SCRIPT_URL', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setShowSuccess(true);
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (showSuccess) {
    return (
      <div className="bg-gray-900/50 backdrop-blur-sm border border-green-500/50 rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold text-white mb-4">Thank You!</h3>
        <p className="text-gray-400">
          We appreciate your interest. Our team will reach out to you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-gray-400 mb-2">Name</label>
        <input
          type="text"
          id="name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full bg-gray-900/50 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500/50"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-gray-400 mb-2">Email</label>
        <input
          type="email"
          id="email"
          required
          value={formData.email}
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value });
            setErrors({ email: '' });
          }}
          className={`w-full bg-gray-900/50 border ${errors.email ? 'border-red-500' : 'border-gray-800'} rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500/50`}
          placeholder="your@email.com"
        />
        {errors.email && (
          <p className="mt-1 text-red-500 text-sm">{errors.email}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-gray-400 mb-2">Message</label>
        <textarea
          id="message"
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full bg-gray-900/50 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500/50 min-h-[150px]"
          placeholder="Tell us about your requirements"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gray-900/50 hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg border border-gray-700 transition duration-300 disabled:opacity-50"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
};

export default ContactForm; 