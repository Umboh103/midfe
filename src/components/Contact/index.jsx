// ...existing code...
import React, { useState } from "react";

export default function Contact({ contact }) {
  const data = contact ?? {};
  const heading = data.heading ?? "Contact";
  const description = data.description ?? "";
  const fields = Array.isArray(data.fields)
    ? data.fields
    : [
        data.email ? { label: "Email", value: data.email, href: `mailto:${data.email}`, icon: "mail" } : null,
        data.phone ? { label: "Phone", value: data.phone, href: `tel:${data.phone}`, icon: "phone" } : null,
        data.location ? { label: "Location", value: data.location, icon: "map" } : null,
        data.github ? { label: "GitHub", value: data.github.replace(/^https?:\/\//, ""), href: data.github, icon: "github" } : null,
      ].filter(Boolean);

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    // placeholder behaviour — replace with real submit if needed
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", message: "" });
  }

  const Icon = ({ name }) => {
    if (name === "mail")
      return (
        <svg className="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M3 8l7 5 7-5M21 8v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8" />
        </svg>
      );
    if (name === "phone")
      return (
        <svg className="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 0 1 2-2h2.2c.5 0 .9.3 1 .8l.7 3.1a1 1 0 0 1-.3.9L7.2 10.8a11 11 0 0 0 5 5l1.9-1.4a1 1 0 0 1 .9-.3l3.1.7c.5.1.8.5.8 1V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5z" />
        </svg>
      );
    if (name === "map")
      return (
        <svg className="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A2 2 0 0 1 3 15.382V5.618a2 2 0 0 1 2.553-1.894L11 6l6.447-2.276A2 2 0 0 1 20 5.618v9.764a2 2 0 0 1-1.553 1.894L15 20l-6-2z" />
        </svg>
      );
    if (name === "github")
      return (
        <svg className="w-5 h-5 text-teal-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.5-1.3-1.2-1.7-1.2-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1 1.6-.7 1.9-1.1-.9-.1-1.8-.5-1.8-2 0-.4.1-.7.4-1-1.3-.1-2.6-.6-2.6-2.9 0-.6.2-1 .5-1.4 0-.1-.2-.5.1-1.1 0 0 .9-.3 3 .9.9-.2 1.9-.4 2.9-.4 1 0 2 .1 2.9.4 2.1-1.2 3-.9 3-.9.3.6.1 1 .1 1.1.3.4.5.9.5 1.4 0 2.3-1.3 2.8-2.6 2.9.3.2.6.6.6 1.2v1.8c0 .3.2.7.8.6A12 12 0 0 0 12 .5" />
        </svg>
      );
    return null;
  };

  return (
    <section className="mt-8">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-2xl font-bold text-gray-800">{heading}</h2>
        {description && <p className="text-sm text-gray-500 hidden sm:block">{description}</p>}
      </div>

      <div className="grid gap-6 md:grid-cols-2 items-start">
      
        <div className="bg-gradient-to-br from-white/80 to-teal-50 border border-teal-100 rounded-2xl p-6 shadow-lg">
          <div className="flex items-center mb-4">
            <div className="p-3 bg-white rounded-xl shadow-sm mr-3">
             
            </div>
           
          </div>

          <ul className="space-y-3">
            {fields.map((f, i) => (
              <li key={i} className="flex items-center gap-3 bg-white/60 border border-white/50 rounded-lg p-3">
                <div className="w-9 h-9 flex items-center justify-center bg-white rounded-lg shadow-sm">
                  <Icon name={f.icon} />
                </div>
                <div>
                  <div className="text-sm text-gray-600">{f.label}</div>
                  {f.href ? (
                    <a className="text-teal-600 font-medium break-words" href={f.href} target="_blank" rel="noreferrer">
                      {f.value}
                    </a>
                  ) : (
                    <div className="text-gray-700 font-medium">{f.value}</div>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex gap-3">
            {(data.socials ?? []).map((s, idx) => (
              <a key={idx} href={s.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 bg-white/90 rounded-full text-sm font-medium shadow-sm hover:scale-[1.02] transition">
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* right form */}
        <form className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100" onSubmit={handleSubmit}>
          {data.formHeading && <h3 className="text-lg font-semibold text-gray-800 mb-2">{data.formHeading}</h3>}
          <p className="text-sm text-gray-500 mb-4">{data.formSubtext ?? "Kirim pesan singkat dan saya akan membalas secepatnya."}</p>

          <label className="block mb-3">
            <span className="text-sm text-gray-600">Nama</span>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="mt-1 block w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-200 focus:border-teal-400"
              placeholder={data.formNamePlaceholder ?? "Nama Anda"}
              required
            />
          </label>

          <label className="block mb-3">
            <span className="text-sm text-gray-600">Email</span>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="mt-1 block w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-200 focus:border-teal-400"
              placeholder={data.formEmailPlaceholder ?? "Email"}
              required
            />
          </label>

          <label className="block mb-4">
            <span className="text-sm text-gray-600">Pesan</span>
            <textarea
              name="message"
              rows="4"
              value={form.message}
              onChange={handleChange}
              className="mt-1 block w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-200 focus:border-teal-400"
              placeholder={data.formMessagePlaceholder ?? "Pesan"}
              required
            />
          </label>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-500 to-indigo-500 text-white rounded-lg shadow hover:opacity-95 transition"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M22 2L11 13" />
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
              {data.formButtonText ?? "Kirim"}
            </button>

            {sent && <div className="text-sm text-green-600 font-medium">Pesan terkirim ✅</div>}
          </div>
        </form>
      </div>
    </section>
  );
}
// ...existing code...