import { useEffect, useState } from "react";
import axios from "axios";
import Profile from "./components/Profile";
import AboutS from "./components/About";
import Academic from "./components/Academic";
import Footer from "./components/Footer";
import Background from "./components/Background";

const RestAPI = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3000/profile")
      .then((res) => setProfile(res.data))
      .catch((error) => console.error("Error fetching profile:", error));
  }, []);

  if (!profile) return <p className="text-center mt-20 text-gray-500">Loading...</p>;

  return (
    <div className="min-h-screen relative">
      {/* Background Component */}
      <Background />
      
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-6">
        <div className="bg-white shadow-xl rounded-3xl p-8 max-w-4xl w-full">
          
          <Profile profile={profile} />
          
          <AboutS about={profile.about} />
          
          <Academic profile={profile} />
          
          <Footer profile={profile} />
          
        </div>
      </div>
    </div>
  );
};

export default RestAPI;