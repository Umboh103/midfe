const Background = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100"></div>

      <div className="absolute top-10 left-10 w-20 h-20 bg-pink-300 rounded-full blur-2xl opacity-30 animate-pulse"></div>
      <div className="absolute top-20 right-20 w-32 h-32 bg-purple-300 rounded-full blur-2xl opacity-30 animate-bounce"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-blue-300 rounded-full blur-2xl opacity-25 animate-ping"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-green-300 rounded-full blur-2xl opacity-20 animate-pulse"></div>
    </div>
  );
};

export default Background;
