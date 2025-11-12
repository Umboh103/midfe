const Background = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Animated Background Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-300 rounded-full blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute top-20 right-20 w-32 h-32 bg-purple-300 rounded-full blur-xl opacity-30 animate-bounce"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-pink-300 rounded-full blur-xl opacity-20 animate-ping"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-green-300 rounded-full blur-xl opacity-25 animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 left-1/4 w-28 h-28 bg-yellow-300 rounded-full blur-xl opacity-15 animate-bounce delay-500"></div>
      
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 -z-10"></div>
      
      {/* Additional Floating Elements */}
      <div className="absolute top-40 left-1/3 w-8 h-8 bg-blue-400 rounded-full opacity-40 animate-bounce delay-300"></div>
      <div className="absolute bottom-40 right-1/3 w-6 h-6 bg-purple-400 rounded-full opacity-50 animate-bounce delay-700"></div>
      <div className="absolute top-1/2 left-20 w-10 h-10 bg-pink-400 rounded-full opacity-30 animate-pulse delay-1200"></div>
    </div>
  );
};

export default Background;