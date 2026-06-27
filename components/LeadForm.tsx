'use client';

import { useState } from 'react';

type FormData = {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};

type FormErrors = Partial<FormData>;

const initialFormData: FormData = {
  name: '',
  phone: '',
  email: '',
  service: 'Turnkey Interiors',
  message: '',
};

export default function LeadForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const validateForm = () => {
    const newErrors: FormErrors = {};
    const phoneRegex = /^[6-9]\d{9}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 3) {
      newErrors.name = 'Name must be at least 3 characters';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone.trim())) {
      newErrors.phone = 'Enter a valid 10-digit Indian mobile number';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Enter a valid email address';
    }

    if (!formData.service.trim()) {
      newErrors.service = 'Please select a service';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: '',
    }));

    setSuccess(false);
    setSubmitError(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      setLoading(true);
      setSuccess(false);
      setSubmitError(false);

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        setSubmitError(true);
        return;
      }

      setSuccess(true);
      setFormData(initialFormData);
      setErrors({});
    } catch {
      setSubmitError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="lux-card p-4" onSubmit={handleSubmit} noValidate>
      <div className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} className={`form-control ${errors.name ? 'is-invalid' : ''}`} placeholder="Your name" />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>

        <div className="col-md-6">
          <label className="form-label">Phone</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className={`form-control ${errors.phone ? 'is-invalid' : ''}`} placeholder="Mobile number" maxLength={10} />
          {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
        </div>

        <div className="col-md-6">
          <label className="form-label">Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} className={`form-control ${errors.email ? 'is-invalid' : ''}`} placeholder="Email address" />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>

        <div className="col-md-6">
          <label className="form-label">Service Requirement</label>
          <select name="service" value={formData.service} onChange={handleChange} className={`form-select ${errors.service ? 'is-invalid' : ''}`}>
            <option value="Turnkey Interiors">Turnkey Interiors</option>
            <option value="Modular Kitchen">Modular Kitchen</option>
            <option value="Wardrobe">Wardrobe</option>
            <option value="TV Unit">TV Unit</option>
            <option value="Bedroom Interiors">Bedroom Interiors</option>
            <option value="Office Interiors">Office Interiors</option>
            <option value="False Ceiling">False Ceiling</option>
            <option value="Lighting">Lighting</option>
            <option value="Wooden Flooring">Wooden Flooring</option>
            <option value="Bathroom Design">Bathroom Design</option>
            <option value="Renovation">Renovation</option>
          </select>
          {errors.service && <div className="invalid-feedback">{errors.service}</div>}
        </div>

        <div className="col-12">
          <label className="form-label">Message</label>
          <textarea name="message" value={formData.message} onChange={handleChange} className={`form-control ${errors.message ? 'is-invalid' : ''}`} rows={5} placeholder="Tell us about your flat size, location and requirement" />
          {errors.message && <div className="invalid-feedback">{errors.message}</div>}
        </div>

        {success && (
          <div className="col-12">
            <div className="alert alert-success mb-0">Thank you for contacting DBuild Interiors. Our team will contact you shortly.</div>
          </div>
        )}

        {submitError && (
          <div className="col-12">
            <div className="alert alert-danger mb-0">Unable to submit your enquiry. Please try again later.</div>
          </div>
        )}

        <div className="col-12">
          <button type="submit" className="btn btn-primary w-100" disabled={loading}>
            {loading ? 'Submitting...' : 'Get Free Quote'}
          </button>
        </div>
      </div>
    </form>
  );
}
