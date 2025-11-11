import { useEffect, useState } from "react";
import axios from "axios";

const RestAPI = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3000/profile")
      .then((res) => setProfile(res.data))
      .catch((error) => console.error("Error fetching profile:", error));
  }, []);

  if (!profile) return <p className="text-center mt-20 text-gray-500">Loading...</p>;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="bg-white shadow-xl rounded-3xl p-8 max-w-4xl w-full">

        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <img
            src={profile.image ? `/${profile.image}` : "https://via.placeholder.com/200"}
            alt={profile.name}
            className="w-48 h-48 rounded-full border-4 border-blue-500 object-cover shadow-lg"
          />
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">{profile.name}</h1>
            <p className="text-xl text-gray-600 mb-4">{profile.programStudi} Student</p>
            <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full inline-block">
              <p className="font-semibold">{profile.nim}</p>
            </div>
          </div>
        </div>

      
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center md:text-left">Tentang Saya</h2>
          <div className="bg-gray-50 rounded-2xl p-6 shadow-inner">
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {profile.about}
            </p>
          </div>
        </section>

  
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center md:text-left">Informasi Akademik</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Universitas</h3>
              <p className="text-gray-600">{profile.universitas}</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Program Studi</h3>
              <p className="text-gray-600">{profile.programStudi}</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Kelas</h3>
              <p className="text-gray-600">{profile.kelas}</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Tahun Akademik</h3>
              <p className="text-gray-600">{profile.tahun}</p>
            </div>
          </div>
        </section>


        <footer className="border-t border-gray-200 pt-6 mt-8">
          <p className="text-center text-gray-500 text-sm">
            © {profile.tahun} {profile.name}. All rights reserved.
          </p>
          <p className="text-center text-gray-400 text-xs mt-2">
            Built with React & Tailwind CSS
          </p>
        </footer>
      </div>
    </div>
  );
};

export default RestAPI;