
import React from 'react';
import { Instagram } from 'lucide-react';

const SocialLinks = () => {
  return (
    <div className="flex justify-center space-x-6 mt-8">
      <a
        href="https://www.instagram.com/adamgajli.exe/profilecard/?igsh=MXczNXpydTF6NmlkZw=="
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center w-12 h-12 bg-gradient-to-br from-moroccan-blue to-moroccan-gold rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg animate-pulse-glow"
      >
        <Instagram className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
      </a>
    </div>
  );
};

export default SocialLinks;
