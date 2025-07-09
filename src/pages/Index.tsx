
import React, { useEffect, useState } from 'react';
import MoroccanPattern from '../components/MoroccanPattern';
import SocialLinks from '../components/SocialLinks';
import { Code, Heart, Sparkles } from 'lucide-react';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-moroccan-cream via-white to-moroccan-cream moroccan-pattern relative overflow-hidden">
      <MoroccanPattern />
      
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* القسم الرئيسي */}
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-amiri font-bold text-gradient mb-4">
                Adam Gajli
              </h1>
              <div className="flex items-center justify-center space-x-2 mb-6">
                <Code className="w-6 h-6 text-moroccan-blue" />
                <span className="text-xl md:text-2xl font-inter text-moroccan-blue">مبرمج مبتدئ</span>
                <Code className="w-6 h-6 text-moroccan-blue" />
              </div>
            </div>

            {/* وصف شخصي */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl border border-moroccan-gold/20 mb-8">
              <div className="flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-moroccan-gold mr-3" />
                <h2 className="text-2xl md:text-3xl font-amiri font-bold text-moroccan-blue">من أنا؟</h2>
                <Sparkles className="w-8 h-8 text-moroccan-gold ml-3" />
              </div>
              
              <p className="text-lg md:text-xl font-inter text-gray-700 leading-relaxed max-w-3xl mx-auto">
                مبرمج مبتدئ مهتم بتطوير المواقع وتعلم لغات البرمجة، أسعى لبناء مشاريع مميزة وتطوير مهاراتي بشكل مستمر.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-moroccan-blue/10 rounded-xl p-6 hover:bg-moroccan-blue/20 transition-colors duration-300">
                  <Code className="w-10 h-10 text-moroccan-blue mx-auto mb-3" />
                  <h3 className="font-amiri font-bold text-moroccan-blue mb-2">تطوير المواقع</h3>
                  <p className="text-sm text-gray-600 font-inter">HTML, CSS, JavaScript</p>
                </div>
                
                <div className="bg-moroccan-gold/10 rounded-xl p-6 hover:bg-moroccan-gold/20 transition-colors duration-300">
                  <Heart className="w-10 h-10 text-moroccan-gold mx-auto mb-3" />
                  <h3 className="font-amiri font-bold text-moroccan-blue mb-2">الشغف</h3>
                  <p className="text-sm text-gray-600 font-inter">التعلم المستمر والإبداع</p>
                </div>
                
                <div className="bg-moroccan-blue/10 rounded-xl p-6 hover:bg-moroccan-blue/20 transition-colors duration-300">
                  <Sparkles className="w-10 h-10 text-moroccan-blue mx-auto mb-3" />
                  <h3 className="font-amiri font-bold text-moroccan-blue mb-2">الهدف</h3>
                  <p className="text-sm text-gray-600 font-inter">بناء مشاريع مميزة</p>
                </div>
              </div>
            </div>

            {/* قسم التواصل */}
            <div className="bg-gradient-to-r from-moroccan-blue to-moroccan-gold rounded-2xl p-8 text-white shadow-2xl">
              <h3 className="text-2xl md:text-3xl font-amiri font-bold mb-4">تواصل معي</h3>
              <p className="text-lg font-inter mb-6 opacity-90">
                Let's connect and build something amazing together!
              </p>
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>

      {/* تأثير الخلفية المتدرج */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-moroccan-blue/10 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default Index;
