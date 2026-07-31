'use client';
import Image from 'next/image';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { companyInfo } from '@/lib/company-data';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const whatsappNumber = "918489992025";

  const whatsappMessage = `*New Website Enquiry*

*Name:* ${formState.name}
*Email:* ${formState.email}
*Phone:* ${formState.phone}
*Company:* ${formState.company || "N/A"}
*Subject:* ${formState.subject}

*Message:*
${formState.message}`;

  const whatsappUrl = `https://wa.me/918489992025?text=${encodeURIComponent(
  whatsappMessage
)}`;

window.open(whatsappUrl, "_blank");

  // Clear the form
  setFormState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  // Uncomment this only if you really want to show the success screen
  // setSubmitted(true);
};

  return (
    <div>
      {/* Hero Banner */}
<section className="relative overflow-hidden h-[320px] lg:h-[360px] flex items-center">

  {/* Background Image */}
  <Image
    src="/images/contact-banner.jpg"
    alt="Contact Noval Aeroethics"
    fill
    priority
    className="object-cover object-center"
  />

  {/* Overlay */}
<div className="absolute inset-0 bg-gradient-to-r from-[#081A3A]/95 via-[#0A1F44]/85 to-[#0A1F44]/45" />
  {/* Hero Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

    <p className="text-[#10B981] font-semibold tracking-[0.25em] uppercase text-sm mb-5">
      Contact Us
    </p>

    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl">
      Let's Build
      <br />
      Tomorrow Together
    </h1>

    <p className="mt-5 text-lg text-slate-200 max-w-2xl leading-relaxed">
      Whether you need precision CNC machining, aerospace components,
      or custom manufacturing solutions, our team is ready to discuss
      your requirements and deliver with confidence.
    </p>

  </div>

</section>

      {/* Contact Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-[#0A1F44] mb-8">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#F8FAFC] flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-[#1B5E9E]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#0A1F44] mb-1">Address</p>
                    <p className="text-sm text-slate-500 leading-relaxed">{companyInfo.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#F8FAFC] flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-[#1B5E9E]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#0A1F44] mb-1">Phone</p>
                    <p className="text-sm text-slate-500">{companyInfo.phone1}</p>
                    <p className="text-sm text-slate-500">{companyInfo.phone2}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#F8FAFC] flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-[#1B5E9E]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#0A1F44] mb-1">Email</p>
                    <p className="text-sm text-slate-500">{companyInfo.email}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#F8FAFC] flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-[#1B5E9E]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#0A1F44] mb-1">Business Hours</p>
                    <p className="text-sm text-slate-500">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                    <p className="text-sm text-slate-500">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Google Map Embed */}
              <div className="mt-8 rounded-xl overflow-hidden border border-slate-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0!2d77.5!3d12.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU3JzAwLjAiTiA3N8KwMzAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Noval Aeroethics Location"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-[#0A1F44] mb-8">Send Us a Message</h2>
              {submitted ? (
                <div className="bg-[#F8FAFC] rounded-xl p-8 text-center border border-slate-100">
                  <div className="w-16 h-16 rounded-full bg-[#10B981] flex items-center justify-center mx-auto mb-4">
                    <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#0A1F44] mb-2">Message Sent Successfully</h3>
                  <p className="text-slate-500">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                  <Button
                    onClick={() => { setSubmitted(false); setFormState({ name: '', email: '', phone: '', company: '', subject: '', message: '' }); }}
                    className="mt-6 bg-[#1B5E9E] hover:bg-[#0D2B5E] text-white px-6 py-2.5 rounded-lg text-sm font-semibold"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium text-[#0A1F44]">Full Name *</Label>
                      <Input
                        id="name"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="Your full name"
                        className="border-slate-200 focus:border-[#1B5E9E] rounded-lg"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium text-[#0A1F44]">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="your@email.com"
                        className="border-slate-200 focus:border-[#1B5E9E] rounded-lg"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-medium text-[#0A1F44]">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        placeholder="Your phone number"
                        className="border-slate-200 focus:border-[#1B5E9E] rounded-lg"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-sm font-medium text-[#0A1F44]">Company Name</Label>
                      <Input
                        id="company"
                        value={formState.company}
                        onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                        placeholder="Your company name"
                        className="border-slate-200 focus:border-[#1B5E9E] rounded-lg"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-sm font-medium text-[#0A1F44]">Subject *</Label>
                    <Input
                      id="subject"
                      required
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      placeholder="How can we help you?"
                      className="border-slate-200 focus:border-[#1B5E9E] rounded-lg"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium text-[#0A1F44]">Message *</Label>
                    <Textarea
                      id="message"
                      required
                      rows={6}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Tell us about your project requirements..."
                      className="border-slate-200 focus:border-[#1B5E9E] rounded-lg resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="bg-[#1B5E9E] hover:bg-[#0D2B5E] text-white px-8 py-3 rounded-lg text-base font-semibold"
                  >
                    <Send className="mr-2 h-4 w-4" /> Send Message
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
