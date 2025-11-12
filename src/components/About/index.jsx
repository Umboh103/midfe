const About = ({ about }) => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center md:text-left">Tentang Saya</h2>
      <div className="bg-gray-50 rounded-2xl p-6 shadow-inner">
        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
          {about}
        </p>
      </div>
    </section>
  );
};

export default About;