
import React from 'react';
import { Instagram, ExternalLink, MessageCircle } from 'lucide-react';

const SocialLinks = () => {
  return (
    <div className="flex justify-center items-center mt-8 space-x-6">
      {/* رابط الإنستغرام */}
      <div className="relative group">
        <a
          href="https://www.instagram.com/adamgajli.exe/profilecard/?igsh=MXczNXpydTF6NmlkZw=="
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-500 via-purple-500 to-orange-500 rounded-2xl transition-all duration-300 hover:scale-110 hover:shadow-2xl transform hover:-translate-y-2 relative overflow-hidden"
        >
          {/* تأثير البريق */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          
          <Instagram className="w-8 h-8 text-white group-hover:scale-125 transition-all duration-300 relative z-10" />
          
          {/* أيقونة الرابط الخارجي */}
          <ExternalLink className="w-3 h-3 text-white/80 absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </a>
        
        {/* نص توضيحي */}
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
          <span className="text-sm font-inter text-white/90 bg-black/20 rounded-lg px-3 py-1 backdrop-blur-sm">
            Instagram
          </span>
        </div>
        
        {/* تأثيرات الخلفية */}
        <div className="absolute -inset-2 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-orange-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
      </div>

      {/* رابط الديسكورد */}
      <div className="relative group">
        <a
          href="https://discord.gg/your-discord-invite"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 via-purple-600 to-blue-600 rounded-2xl transition-all duration-300 hover:scale-110 hover:shadow-2xl transform hover:-translate-y-2 relative overflow-hidden"
        >
          {/* تأثير البريق */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          
          <MessageCircle className="w-8 h-8 text-white group-hover:scale-125 transition-all duration-300 relative z-10" />
          
          {/* أيقونة الرابط الخارجي */}
          <ExternalLink className="w-3 h-3 text-white/80 absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </a>
        
        {/* نص توضيحي */}
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
          <span className="text-sm font-inter text-white/90 bg-black/20 rounded-lg px-3 py-1 backdrop-blur-sm">
            Discord
          </span>
        </div>
        
        {/* تأثيرات الخلفية */}
        <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500/20 via-purple-600/20 to-blue-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
      </div>
    </div>
  );
};

export default SocialLinks;
