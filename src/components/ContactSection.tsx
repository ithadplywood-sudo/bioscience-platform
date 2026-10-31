import { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Mail, MapPin, Globe } from 'lucide-react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedStatus, setSubmittedStatus] = useState<boolean>(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = 'Full name is required.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email format (e.g. scientist@domain.org).';
    }
    if (!formData.subject.trim()) {
      errs.subject = 'Subject line is required.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Inquiry message cannot be empty.';
    } else if (formData.message.trim().length < 15) {
      errs.message = 'Please provide at least 15 characters describing your inquiry.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Simulate reliable client confirmation
    setSubmittedStatus(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#030712] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-800/50 text-cyan-300 text-xs font-mono mb-3">
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              <span>SCIENTIFIC INQUIRIES & ACADEMIC COLLABORATION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Connect with BioScience
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Have questions regarding our scientific divisions, curriculum content, or bioinformatics data sources? Send our editorial team a message.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Contact Details Card */}
            <div className="md:col-span-4 p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-6">
              <h3 className="text-lg font-bold text-white font-mono">
                Knowledge Office
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                BioScience welcomes feedback from university researchers, educators, biotechnology professionals, and science communicators.
              </p>

              <div className="space-y-4 pt-4 border-t border-slate-800 text-xs">
                <div className="flex items-start gap-3 text-slate-300">
                  <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Academic Inquiries</div>
                    <div className="text-slate-400 font-mono">contact@bioscience-platform.org</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-slate-300">
                  <Globe className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Open Access Protocol</div>
                    <div className="text-slate-400">CC-BY 4.0 Creative Commons</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Form */}
            <div className="md:col-span-8 p-6 sm:p-8 rounded-3xl bg-slate-900/40 border border-slate-800 shadow-xl">
              {submittedStatus ? (
                <div className="py-8 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-14 h-14 rounded-full bg-emerald-950/80 border border-emerald-500/50 flex items-center justify-center mx-auto text-emerald-400">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Inquiry Successfully Registered
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-cyan-300 font-semibold">{formData.name}</span>. Your scientific inquiry regarding "{formData.subject}" has been formatted and staged for editorial review.
                  </p>
                  <button
                    onClick={() => {
                      setSubmittedStatus(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="mt-4 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label htmlFor="name-input" className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        id="name-input"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Dr. Jane Doe"
                        className={`w-full px-4 py-2.5 rounded-xl bg-slate-950 border text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
                          errors.name ? 'border-red-500/80' : 'border-slate-800'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email-input" className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        id="email-input"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="jane.doe@university.edu"
                        className={`w-full px-4 py-2.5 rounded-xl bg-slate-950 border text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
                          errors.email ? 'border-red-500/80' : 'border-slate-800'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject-input" className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                      Subject / Topic *
                    </label>
                    <input
                      id="subject-input"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Molecular Biology curriculum collaboration or Data feedback"
                      className={`w-full px-4 py-2.5 rounded-xl bg-slate-950 border text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
                        errors.subject ? 'border-red-500/80' : 'border-slate-800'
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.subject}</span>
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message-input" className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                      Detailed Message *
                    </label>
                    <textarea
                      id="message-input"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please describe your question, proposed collaborative inquiry, or data citation inquiry..."
                      className={`w-full px-4 py-2.5 rounded-xl bg-slate-950 border text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
                        errors.message ? 'border-red-500/80' : 'border-slate-800'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-7 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold text-xs tracking-wider uppercase transition-all shadow-lg shadow-cyan-950/50 hover:shadow-cyan-500/30 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Submit Scientific Inquiry</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
