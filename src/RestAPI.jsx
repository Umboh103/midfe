import { useEffect, useState } from "react";
import axios from "axios";
import Profile from "./components/Profile";
import About from "./components/About";
import Academic from "./components/Academic";
import Footer from "./components/Footer";
import Background from "./components/Background";

const ProfilePage = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/profile")
      .then((res) => setProfile(res.data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  if (!profile)
    return <p className="text-center mt-20 text-gray-500">Loading...</p>;

  return (
    <div className="min-h-screen relative">
      <Background />

      <div className="relative z-10 flex flex-col items-center min-h-screen py-10 px-6">
        <div className="bg-white shadow-2xl rounded-3xl p-8 max-w-4xl w-full">
          <Profile profile={profile} />
          <About about={profile.about} />
          <Academic profile={profile} />
          <Footer profile={profile} />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;