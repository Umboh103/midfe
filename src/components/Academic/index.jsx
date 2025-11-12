const Academic = ({ profile }) => {
  const academicData = [
    {
      title: "Universitas",
      value: profile.universitas,
      icon: "🏛️",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Program Studi",
      value: profile.programStudi,
      icon: "📚",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Kelas",
      value: profile.kelas,
      icon: "👨‍🎓",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Tahun Akademik",
      value: profile.tahun,
      icon: "📅",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="mb-12">
      <div className="flex items-center mb-6">
        <div className="h-8 w-1 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full mr-3"></div>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Informasi Akademik</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {academicData.map((item, index) => (
          <div 
            key={index}
            className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
          >
            <div className="flex items-center mb-4">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center text-white text-lg mr-4 shadow-lg`}>
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-700">{item.title}</h3>
            </div>
            <p className="text-gray-600 font-medium pl-16">{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Academic;