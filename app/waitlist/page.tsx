'use client';

import { useState, FormEvent } from 'react';
import { supabase, WaitlistEntry } from '../../lib/supabase';

export default function WaitlistPage() {
  const [formData, setFormData] = useState<WaitlistEntry>({
    name: '',
    email: '',
    phone: '',
    location: '',
    description: '',
    affiliation: '',
    source: '',
    platforms: [],
    event_interest: '',
    event_availability: '',
    early_access: '',
    inspiration: '',
    link: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (platform: string) => {
    setFormData((prev) => ({
      ...prev,
      platforms: prev.platforms.includes(platform)
        ? prev.platforms.filter((p) => p !== platform)
        : [...prev.platforms, platform],
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Basic validation
    if (!formData.name || !formData.email || !formData.location || 
        !formData.description || !formData.source || formData.platforms.length === 0 ||
        !formData.event_interest || !formData.event_availability || !formData.early_access) {
      setError('Please fill in all required fields');
      setIsSubmitting(false);
      return;
    }

    try {
      const { error: supabaseError } = await supabase.from('waitlist').insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone || null,
          location: formData.location,
          description: formData.description,
          affiliation: formData.affiliation || null,
          source: formData.source,
          platforms: formData.platforms,
          event_interest: formData.event_interest,
          event_availability: formData.event_availability,
          early_access: formData.early_access,
          inspiration: formData.inspiration || null,
          link: formData.link || null,
        },
      ]);

      if (supabaseError) throw supabaseError;

      setIsSuccess(true);
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyToClipboard = () => {
    const url = window.location.origin + '/waitlist';
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (isSuccess) {
    return (
      <main className="min-h-screen flex items-center justify-center px-6" style={{ backgroundColor: '#f1efe3' }}>
        <div className="max-w-2xl w-full text-center">
          <img
            src="/logo.png"
            alt="Asteri logo"
            className="mx-auto mb-8 animate-pulse"
            style={{ height: '24rem', width: 'auto' }}
          />
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black font-brand">
            Welcome to the Constellation
          </h1>
          
          <p className="text-lg text-gray-800 mb-8 font-ui">
            You're in! We're curating the first 100 people to experience Asteri — the new way to connect through what inspires you.
          </p>
          
          <div className="bg-white/90 backdrop-blur-sm border border-gray-300 rounded-xl p-6 shadow-lg">
            <p className="text-sm text-gray-600 mb-4 font-medium">Share your invite and rise up the constellation:</p>
            <div className="flex gap-2">
              <input
                type="text"
                value={typeof window !== 'undefined' ? window.location.origin + '/waitlist' : ''}
                readOnly
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-black"
              />
              <button
                onClick={copyToClipboard}
                className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-all text-sm font-semibold shadow-md hover:shadow-lg transform hover:scale-105"
              >
                {copied ? '✓ Copied!' : 'Copy'}
              </button>
            </div>
          </div>

          {/* Footer */}
          <footer className="site-footer mt-16">
            <a href="/privacy">Privacy</a>
            <span> · </span>
            <a href="/terms">Terms</a>
          </footer>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen py-12 px-6" style={{ backgroundColor: '#f1efe3' }}>
      <div className="max-w-3xl mx-auto">
        {/* Logo */}
        <div className="text-center mb-12">
          <img
            src="/logo.png"
            alt="Asteri logo"
            className="mx-auto mb-6 hover:scale-110 transition-transform duration-300"
            style={{ height: '24rem', width: 'auto' }}
          />
          <div className="origin-top" style={{ transform: 'scale(0.7)' }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black font-brand">
              Join the Constellation
            </h1>
            <p className="text-lg text-gray-800 font-ui max-w-2xl mx-auto">
              Asteri is where your digital inspiration becomes connection. We're inviting 100 people to join our first private experience — hosted at Google HQ.
            </p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="border-2 border-gray-400 rounded-2xl p-8 shadow-2xl backdrop-blur-sm origin-top" style={{ backgroundColor: '#f1efe3', transform: 'scale(0.7)' }}>
          {error && (
            <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded text-red-700 text-sm animate-shake">
              {error}
            </div>
          )}

          {/* 1. Contact Info */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-6 text-black">Contact Info</h2>
            
            <div className="space-y-5">
              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent bg-white transition-all duration-200 hover:border-gray-400"
                  placeholder="Your full name"
                />
              </div>

              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent bg-white transition-all duration-200 hover:border-gray-400"
                  placeholder="your@email.com"
                />
              </div>

              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number <span className="text-gray-500 text-xs">(optional — for event coordination)</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent bg-white transition-all duration-200 hover:border-gray-400"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
            </div>
          </section>

          {/* 2. Affiliation */}
          <section className="mb-8 pt-8 border-t-2 border-gray-300">
            <h2 className="text-2xl font-bold mb-6 text-black">Affiliation</h2>
            
            <div className="space-y-5">
              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Where are you currently based? <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent bg-white transition-all duration-200 hover:border-gray-400"
                  placeholder="City, State, or Country"
                />
              </div>

              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  What best describes you? <span className="text-red-600">*</span>
                </label>
                <select
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent bg-white transition-all duration-200 hover:border-gray-400 cursor-pointer"
                >
                  <option value="">Select one...</option>
                  <option value="Student">🧠 Student</option>
                  <option value="Professional">💼 Professional</option>
                  <option value="Creator / Designer">🧑‍🎨 Creator / Designer</option>
                  <option value="Engineer / Builder">🧑‍💻 Engineer / Builder</option>
                  <option value="Startup Founder">🌱 Startup Founder</option>
                  <option value="Other">✨ Other</option>
                </select>
              </div>

              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  If you're affiliated with a company or university, what is it?
                </label>
                <input
                  type="text"
                  name="affiliation"
                  value={formData.affiliation}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent bg-white transition-all duration-200 hover:border-gray-400"
                  placeholder="Company or University name"
                />
              </div>
            </div>
          </section>

          {/* 3. Connection */}
          <section className="mb-8 pt-8 border-t-2 border-gray-300">
            <h2 className="text-2xl font-bold mb-6 text-black">Connection</h2>
            
            <div className="space-y-5">
              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  How did you hear about Asteri? <span className="text-red-600">*</span>
                </label>
                <select
                  name="source"
                  value={formData.source}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent bg-white transition-all duration-200 hover:border-gray-400 cursor-pointer"
                >
                  <option value="">Select one...</option>
                  <option value="Through a friend">Through a friend</option>
                  <option value="At a hackathon / event">At a hackathon / event</option>
                  <option value="LinkedIn / social media">LinkedIn / social media</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  What platforms do you use most? <span className="text-red-600">*</span>
                  <span className="text-gray-500 text-xs ml-1">(Select up to 3)</span>
                </label>
                <div className="space-y-3 bg-white p-4 rounded-lg border-2 border-gray-300">
                  {['YouTube', 'Pinterest', 'TikTok', 'Reddit', 'Instagram', 'Other'].map((platform) => (
                    <label key={platform} className="flex items-center group cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors">
                      <input
                        type="checkbox"
                        checked={formData.platforms.includes(platform)}
                        onChange={() => handleCheckboxChange(platform)}
                        disabled={!formData.platforms.includes(platform) && formData.platforms.length >= 3}
                        className="mr-3 h-5 w-5 text-black focus:ring-2 focus:ring-black border-gray-300 rounded cursor-pointer disabled:opacity-50"
                      />
                      <span className="text-gray-800 font-medium">{platform}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 4. Event / Access */}
          <section className="mb-8 pt-8 border-t-2 border-gray-300">
            <h2 className="text-2xl font-bold mb-6 text-black">Event / Access</h2>
            
            <div className="space-y-6">
              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Are you interested in attending our private launch event at Google HQ in November? <span className="text-red-600">*</span>
                </label>
                <div className="space-y-3 bg-white p-4 rounded-lg border-2 border-gray-300">
                  {['Yes, absolutely', 'Maybe — depends on timing', 'No, I\'d prefer virtual access'].map((option) => (
                    <label key={option} className="flex items-center group cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors">
                      <input
                        type="radio"
                        name="event_interest"
                        value={option}
                        checked={formData.event_interest === option}
                        onChange={handleInputChange}
                        required
                        className="mr-3 h-5 w-5 text-black focus:ring-2 focus:ring-black border-gray-300 cursor-pointer"
                      />
                      <span className="text-gray-800">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Can you make it to the event date (TBD early/mid-November)? <span className="text-red-600">*</span>
                </label>
                <div className="space-y-3 bg-white p-4 rounded-lg border-2 border-gray-300">
                  {['Yes', 'No', 'Unsure'].map((option) => (
                    <label key={option} className="flex items-center group cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors">
                      <input
                        type="radio"
                        name="event_availability"
                        value={option}
                        checked={formData.event_availability === option}
                        onChange={handleInputChange}
                        required
                        className="mr-3 h-5 w-5 text-black focus:ring-2 focus:ring-black border-gray-300 cursor-pointer"
                      />
                      <span className="text-gray-800">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Would you like early product access before the event? <span className="text-red-600">*</span>
                </label>
                <div className="space-y-3 bg-white p-4 rounded-lg border-2 border-gray-300">
                  {['Yes, I want to test the app early', 'I\'ll wait for the event'].map((option) => (
                    <label key={option} className="flex items-center group cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors">
                      <input
                        type="radio"
                        name="early_access"
                        value={option}
                        checked={formData.early_access === option}
                        onChange={handleInputChange}
                        required
                        className="mr-3 h-5 w-5 text-black focus:ring-2 focus:ring-black border-gray-300 cursor-pointer"
                      />
                      <span className="text-gray-800">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 5. Optional Signal Questions */}
          <section className="mb-8 pt-8 border-t-2 border-gray-300">
            <h2 className="text-2xl font-bold mb-6 text-black">Tell Us More <span className="text-sm font-normal text-gray-600">(Optional)</span></h2>
            
            <div className="space-y-5">
              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  What inspires you right now?
                  <span className="text-gray-500 text-xs ml-1">(1–2 sentences)</span>
                </label>
                <textarea
                  name="inspiration"
                  value={formData.inspiration}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent bg-white transition-all duration-200 hover:border-gray-400 resize-none"
                  placeholder="Share what's inspiring you..."
                />
              </div>

              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Link something that represents your vibe
                  <span className="text-gray-500 text-xs ml-1">(Pinterest board, YouTube playlist, portfolio, etc.)</span>
                </label>
                <input
                  type="url"
                  name="link"
                  value={formData.link}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent bg-white transition-all duration-200 hover:border-gray-400"
                  placeholder="https://"
                />
              </div>
            </div>
          </section>

          {/* Submit Button */}
          <div className="pt-8 border-t-2 border-gray-300 space-y-6">
            <p className="text-gray-700 text-center italic font-medium">
              We're curating the first 100 people to experience Asteri — the new way to connect through what inspires you.
            </p>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 bg-black text-white rounded-xl hover:bg-gray-800 transition-all text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed shadow-xl hover:shadow-2xl transform hover:scale-[1.02] active:scale-[0.98]"
            >
              {isSubmitting ? 'Submitting...' : 'Join the Constellation'}
            </button>
          </div>
        </form>

        {/* Footer */}
        <footer className="site-footer mt-16 origin-top" style={{ transform: 'scale(0.7)' }}>
          <a href="/privacy">Privacy</a>
          <span> · </span>
          <a href="/terms">Terms</a>
        </footer>
      </div>
    </main>
  );
}
