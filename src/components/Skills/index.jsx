import React from "react";

export default function Skills({ skills }) {
  // skills expected shape (from db.json):
  // { heading, description, items: [{ name, level, color, caption }] }
  const data = skills ?? {};
  const heading = data.heading ?? "Skills";
  const description = data.description ?? "";
  const items = Array.isArray(data.items) ? data.items : [];

  return (
    <section className="mt-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{heading}</h2>
      {description && <p className="text-sm text-gray-500 mb-4">{description}</p>}
      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((s, i) => (
          <div key={i} className="bg-gray-50 rounded-xl p-4 shadow-inner">
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium text-gray-700">{s.name}</span>
              <span className="text-sm text-gray-500">{s.level ?? ""}{s.level ? "%" : ""}</span>
            </div>
            {s.caption && <p className="text-xs text-gray-400 mb-2">{s.caption}</p>}
            <div className="h-3 w-full bg-gray-200 rounded-full overflow-hidden">
              <div
                className={`${s.color ?? "bg-sky-400"} h-full rounded-full`}
                style={{ width: `${s.level ?? 0}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}