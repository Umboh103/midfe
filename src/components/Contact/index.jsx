import React from "react";

export default function Contact({ contact }) {
  const data = contact ?? {};
  const heading = data.heading ?? "Contact";
  const description = data.description ?? "";
  const fields = Array.isArray(data.fields)
    ? data.fields
    : 
      [
        data.email ? { label: "Email", value: data.email, href: `mailto:${data.email}` } : null,
        data.phone ? { label: "Phone", value: data.phone, href: `tel:${data.phone}` } : null,
        data.location ? { label: "Location", value: data.location } : null,
        data.github ? { label: "GitHub", value: data.github, href: data.github.startsWith("http") ? data.github : `https://${data.github}` } : null,
      ].filter(Boolean);

  return (
    <section className="mt-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{heading}</h2>
      {description && <p className="text-sm text-gray-500 mb-4">{description}</p>}

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="bg-white rounded-xl p-6 shadow-md">
          <ul className="space-y-2 text-sm text-gray-600">
            {fields.map((f, i) => (
              <li key={i}>
                <strong className="text-gray-700">{f.label}:</strong>{" "}
                {f.href ? (
                  <a className="text-teal-500" href={f.href} target="_blank" rel="noreferrer">
                    {f.value}
                  </a>
                ) : (
                  <span className="text-gray-600">{f.value}</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <form className="bg-gray-50 rounded-xl p-6 shadow-inner" onSubmit={(e) => e.preventDefault()}>
          {data.formHeading && <h3 className="font-semibold text-gray-700 mb-2">{data.formHeading}</h3>}
          <input className="w-full mb-2 px-3 py-2 rounded border border-gray-200" placeholder={data.formNamePlaceholder ?? "Your name"} />
          <input className="w-full mb-2 px-3 py-2 rounded border border-gray-200" placeholder={data.formEmailPlaceholder ?? "Email"} />
          <textarea className="w-full mb-3 px-3 py-2 rounded border border-gray-200" rows="3" placeholder={data.formMessagePlaceholder ?? "Message"} />
          <button className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600">{data.formButtonText ?? "Send"}</button>
        </form>
      </div>
    </section>
  );
}