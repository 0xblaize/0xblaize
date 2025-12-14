// Contact.tsx (Your component file)

"use client"; // CRITICAL: For using useState and form submission handlers

import React, { useState } from 'react';
import { Github, Twitter, Mail, Send } from 'lucide-react';
// ADJUST THIS IMPORT PATH based on where you placed the contact.ts file
// Example if you placed contact.ts in the root of the /app directory:
import { sendContactMessage } from '../contact'; // Assuming Contact.tsx is in /components/

const Contact = () => {
    // 1. STATE MANAGEMENT
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    // 2. INPUT CHANGE HANDLER
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    // 3. SUBMISSION HANDLER
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        setStatus('loading');
        setMessage('');

        // Basic validation
        if (!formData.name || !formData.email || !formData.message) {
            setStatus('error');
            setMessage('Please fill in all fields.');
            setStatus('idle');
            return;
        }

        try {
            // Call the Server Action
            const result = await sendContactMessage(formData);

            if (result.success) {
                setStatus('success');
                setMessage(result.message);
                // Clear the form on success
                setFormData({ name: '', email: '', message: '' }); 
            } else {
                setStatus('error');
                setMessage(result.message);
            }
        } catch (error) {
            setStatus('error');
            setMessage('An unexpected error occurred during submission.');
            console.error(error);
        }
    };


    // 4. RENDER LOGIC
    const isSending = status === 'loading';
    
    return (
        <section className=" py-20 px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
                
                {/* Section Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-mono font-bold text-white mb-6 tracking-wide">
                        Let's Work Together
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto leading-relaxed">
                        Have a project in mind or just want to say hi? I'm always open to discussing new opportunities and ideas.
                    </p>
                </div>

                {/* Contact Form Card */}
                <div className="bg-[#111116] border border-gray-800 rounded-2xl p-6 md:p-10 max-w-2xl mx-auto">
                    
                    <div className="mb-8">
                        <h3 className="text-xl font-bold text-white mb-2">Send a Message</h3>
                        <p className="text-gray-400 text-sm">I'll get back to you within 24 hours.</p>
                    </div>

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        
                        {/* Status Message Display */}
                        {message && (
                            <div className={`p-3 rounded-lg text-sm font-semibold ${
                                status === 'success' ? 'bg-green-900/50 text-green-300' : 'bg-red-900/50 text-red-300'
                            }`}>
                                {message}
                            </div>
                        )}
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Name Input */}
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-gray-400">
                                    Name
                                </label>
                                <input 
                                    type="text" 
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                    className="w-full bg-[#050505] border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-gray-600 focus:ring-1 focus:ring-gray-600 transition-colors"
                                />
                            </div>

                            {/* Email Input */}
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-gray-400">
                                    Email
                                </label>
                                <input 
                                    type="email" 
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="example@gmail.com"
                                    className="w-full bg-[#050505] border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-gray-600 focus:ring-1 focus:ring-gray-600 transition-colors"
                                />
                            </div>
                        </div>

                        {/* Message Input */}
                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-gray-400">
                                Message
                            </label>
                            <textarea 
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={5}
                                placeholder="Tell me about your project..."
                                className="w-full bg-[#050505] border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-gray-600 focus:ring-1 focus:ring-gray-600 transition-colors resize-none"
                            />
                        </div>

                        {/* Footer: Socials & Submit */}
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-4">
                            
                            {/* Social Icons (Unchanged) */}
                            <div className="flex items-center gap-6">
                                <a href="https://x.com/0xblaize" className="text-gray-400 hover:text-white transition-colors">
                                    <Twitter size={20} />
                                </a>
                                <a href="https://github.com/0xblaize" className="text-gray-400 hover:text-white transition-colors">
                                    <Github size={20} />
                                </a>
                                <a href="mailto:0xblaize@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                                    <Mail size={20} />
                                </a>
                            </div>

                            {/* Submit Button */}
                            <button 
                                type="submit" 
                                disabled={isSending}
                                className="w-full md:w-auto flex items-center justify-center gap-2 bg-white text-black font-semibold px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSending ? 'Sending...' : 'Send Message'}
                                <Send size={16} />
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;