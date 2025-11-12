const Footer = ({ profile }) => {
  return (
    <footer className="border-t border-gray-200 pt-6 mt-8">
      <p className="text-center text-gray-500 text-sm">
        © {profile.tahun} {profile.name}. All rights reserved.
      </p>
      <p className="text-center text-gray-400 text-xs mt-2">
        Built with React & Tailwind CSS
      </p>
    </footer>
  );
};

export default Footer;