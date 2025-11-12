const Profile = ({ profile }) => {
  return (
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
  );
};

export default Profile;