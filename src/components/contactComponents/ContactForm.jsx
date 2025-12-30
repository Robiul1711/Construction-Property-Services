import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail, Phone, MapPin } from 'lucide-react';

// 1. Define the Validation Schema
const contactSchema = z.object({
  name: z.string().min(2, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().min(10, { message: "Phone number must be at least 10 digits" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data) => {
    // Simulate API Call
    console.log("Form Data:", data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    alert("Message sent successfully!");
    reset();
  };

  return (

      <div className="section-padding-x section-padding-y w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Contact Info */}
        <div className="space-y-8">
          <h1 className="text-4xl font-bold text-gray-900">Contact Us</h1>
          <p className="text-gray-500 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Nunc ipsum tincidunt dictum donec dui in cursus risus. 
            Nunc lacus egestas ipsum dictumst volutpat est sed diam tincidunt.
          </p>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="bg-theme-primary p-3 rounded-full text-white">
                <Mail size={24} />
              </div>
              <span className="text-gray-600">kejtamanna21@gmail.com</span>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-theme-primary p-3 rounded-full text-white">
                <Phone size={24} />
              </div>
              <span className="text-gray-600 text-sm">4074 Ebert summit suite 375 lake leonardchester</span>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-theme-primary p-3 rounded-full text-white">
                <MapPin size={24} />
              </div>
              <span className="text-gray-600 text-sm">4074 Ebert summit suite 375 lake leonardchester</span>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Name Field */}
          <div>
            <label className="block text-sm font-bold mb-1">Name<span className="text-red-500">*</span></label>
            <input
              {...register("name")}
              placeholder="Enter your name..."
              className={`w-full p-4 bg-gray-100 rounded-lg outline-none border-2 transition-colors ${errors.name ? 'border-red-400' : 'border-transparent focus:border-blue-400'}`}
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-bold mb-1">Email Address <span className="text-red-500">*</span></label>
            <input
              {...register("email")}
              placeholder="Enter your email..."
              className={`w-full p-4 bg-gray-100 rounded-lg outline-none border-2 transition-colors ${errors.email ? 'border-red-400' : 'border-transparent focus:border-blue-400'}`}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>

          {/* Phone Field */}
          <div>
            <label className="block text-sm font-bold mb-1">Phone Number<span className="text-red-500">*</span></label>
            <input
              {...register("phone")}
              placeholder="Enter your Number"
              className={`w-full p-4 bg-gray-100 rounded-lg outline-none border-2 transition-colors ${errors.phone ? 'border-red-400' : 'border-transparent focus:border-blue-400'}`}
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
          </div>

          {/* Message Field (Misspelled 'Massage' in image, corrected to 'Message') */}
          <div>
            <label className="block text-sm font-bold mb-1">Message<span className="text-red-500">*</span></label>
            <textarea
              {...register("message")}
              rows="4"
              placeholder="Enter your Message..."
              className={`w-full p-4 bg-gray-100 rounded-lg outline-none border-2 transition-colors resize-none ${errors.message ? 'border-red-400' : 'border-transparent focus:border-blue-400'}`}
            />
            {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-theme-primary hover:bg-blue-600/90 text-white font-bold py-4 rounded-lg transition-all "
          >
            {isSubmitting ? "Sending..." : "Submit Message"}
          </button>
        </form>
      </div>
   
  );
};

export default ContactForm;