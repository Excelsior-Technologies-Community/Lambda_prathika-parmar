import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaRegClock } from 'react-icons/fa';

export default function ContactUs() {
    const [ formData, setFormData ] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [ status, setStats ] = useState({ type: '', message: ''});
    const [ isSubmitting, setIsSubmitting ] = useState(false);

    const handleSubmit = async(e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStats({type: '', message: ''});

        try {
            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: { 'Content-Type' : 'application/json'},
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) {
                setStats({type: 'Success', message: data.message});
                setFormData({name: '', email: '', subject: '', message: ''});
            } else {
                setStats({ type: 'error', message: 'Server connection failed. Ensure backend is running.'});
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    return(
        <div className='min-h-screen bg-white font-sans text-grey-700'>
            <div className='max-w-6xl mx-auto px-4 py-12 md:py-16'>

                {/* header section */}
                <div className='text-center md-16 space-y-4'>
                    <h3 className='text-[#f2b938] text-xl font-medium'>Contact Us</h3>
                    <h1 className='text-4xl font-light text-slate-800'>Get in touch with us</h1>
                    <p className='text-gray-500 max-w-4xl mx-auto text-lg font-light leading-relaxed'>This is an example of a Moodle page resource. It can be used for static content pages. The text editor allows the page to display many different kinds of content such as plain text, images, audio, video, embedded code or a combination of all these.</p>

                </div>

                {/* info cards section */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center mb-16 border-b border-grey-200 pb-16'>
                    <div className='flex flex-col items-center'>
                        <div className='w-16 h-16 rounded-full border-2 border-grey-100 flex items-center justify-center mb-4 text-grey-400'>
                            <FaMapMarkerAlt className='text-2xl'/>

                        </div>
                        <h4 className='text-lg font-medium text-slate-800 mb-2'>Our Address</h4>
                        <p className='text-grey-500 font-light'>221B Baker St, London</p>

                    </div>

                    <div className='flex flex-col items-center'>
                        <div className='w-16 h-16 rounded-full border-2 border-grey-100 flex items-center justify-center mb-4 text-grey-400'>
                            <FaPhoneAlt className='text-2xl'/>

                        </div>
                        <h4 className='text-lg font-medium text-slate-800 mb-2'>Contact</h4>
                        <p className='text-grey-500 font-light'>022 7224 3688</p>

                    </div>

                    <div className='flex flex-col items-center'>
                        <div className='w-16 h-16 rounded-full border-2 border-grey-100 flex items-center justify-center mb-4 text-grey-400'>
                            <FaEnvelope className='text-2xl'/>

                        </div>
                        <h4 className='text-lg font-medium text-slate-800 mb-2'>Email</h4>
                        <p className='text-grey-500 font-light'>contact@lambda.com</p>

                    </div>

                    <div className='flex flex-col items-center'>
                        <div className='w-16 h-16 rounded-full border-2 border-grey-100 flex items-center justify-center mb-4 text-grey-400'>
                            <FaRegClock className='text-2xl'/>

                        </div>
                        <h4 className='text-lg font-medium text-slate-800 mb-2'>Hours of Operation</h4>
                        <p className='text-grey-500 font-light'>( 8 AM - 7 PM, Monday - Friday)</p>

                    </div>



                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
                    {/* maps */}
                    <div className='w-full h-[500px] bg-grey-100 rounded border border-grey-200 overflow-hidden shadow-sm'>
                        <iframe
                            title= "Location Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.4348632612715!2d-0.16016148401314902!3d51.52358897963777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761acee09968a5%3A0xb1fc3c32e01dfbe1!2s221B%20Baker%20St%2C%20London%20NW1%206XE%2C%20UK!5e0!3m2!1sen!2sin!4v1689255018617!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style= {{border: 0}}
                            allowFullScreen=""
                            loading='lazy'
                            referrerPolicy='no-referrer-when-downgrade'
                        >
                            
                        </iframe>

                    </div>

                    {/* form */}
                    <div>
                        <p className="text-slate-800 font-medium mb-6">
              Reach out to us from our contact form and we will get back to you shortly.
            </p>

            {status.message && (
              <div className={`p-4 mb-6 rounded ${status.type === 'success' ? 'bg-green-50 text-green-700 border-l-4 border-green-500' : 'bg-red-50 text-red-700 border-l-4 border-red-500'}`}>
                {status.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-gray-700 mb-1">Your name (required)</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required 
                  className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:border-[#f2b938] transition" 
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-1">Email address (required)</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required 
                  className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:border-[#f2b938] transition" 
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-1">Subject (required)</label>
                <input 
                  type="text" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required 
                  className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:border-[#f2b938] transition" 
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-1">Message (required)</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required 
                  rows="5"
                  className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:border-[#f2b938] transition" 
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`bg-[#f2b938] text-white px-8 py-3 rounded shadow hover:bg-[#dfa728] transition font-medium ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Sending...' : 'Send'}
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}