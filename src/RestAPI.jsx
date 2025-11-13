import React, { useEffect, useState } from "react";
import axios from "axios";
import Profile from "./components/Profile";
import About from "./components/About";
import Academic from "./components/Academic";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Background from "./components/Background";

export default function RestAPI() {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/profile")
      .then((res) => setProfile(res.data))
      .catch((err) => {
        console.error("Error fetching profile:", err);
        setError("Gagal memuat data. Pastikan json-server berjalan di :3000");
      });
  }, []);

  if (error) return <p className="text-center mt-20 text-red-500">{error}</p>;
  if (!profile) return <p className="text-center mt-20 text-gray-500">Loading...</p>;

  return (
    <div className="min-h-screen relative">
      <Background />

      <div className="relative z-10 flex flex-col items-center min-h-screen py-10 px-6">
        <div className="bg-white shadow-2xl rounded-3xl p-8 max-w-4xl w-full">
          {/* pass multiple prop names to be compatible with different component shapes */}
          <Profile profile={profile} data={profile} />
          <About about={profile.about} text={profile.about} />
          <Academic profile={profile} list={profile.academic} />
          <Skills skills={profile.skills} />
          <Contact contact={profile.contact} />
          <Footer profile={profile} />
        </div>
      </div>
    </div>
  );
}