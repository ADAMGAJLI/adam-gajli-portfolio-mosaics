
import React, { useEffect, useState } from 'react';
import MoroccanPattern from '../components/MoroccanPattern';
import SocialLinks from '../components/SocialLinks';
import ControlPanel from '../components/ControlPanel';
import { Code, Heart, Sparkles, Globe, BookOpen, Target } from 'lucide-react';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [language, setLanguage] = useState<'ar' | 'en'>('ar');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const content = {
    ar: {
      name: 'آدم قاجلي',
      title: 'مبرمج مبتدئ',
      whoAmI: 'من أنا؟',
      description: 'مبرمج مبتدئ مهتم بتطوير المواقع وتعلم لغات البرمجة، أسعى لبناء مشاريع مميزة وتطوير مهاراتي بشكل مستمر.',
      skills: {
        title: 'تطوير المواقع',
        subtitle: 'HTML, CSS, JavaScript'
      },
      passion: {
        title: 'الشغف',
        subtitle: 'التعلم المستمر والإبداع'
      },
      goal: {
        title: 'الهدف',
        subtitle: 'بناء مشاريع مميزة'
      },
      contact: {
        title: 'تواصل معي',
        subtitle: "Let's connect and build something amazing together!"
      }
    },
    en: {
      name: 'Adam Gajli',
      title: 'Beginner Programmer',
      whoAmI: 'Who Am I?',
      description: 'A beginner programmer interested in web development and learning programming languages, striving to build outstanding projects and continuously develop my skills.',
      skills: {
        title: 'Web Development',
        subtitle: 'HTML, CSS, JavaScript'
      },
      passion: {
        title: 'Passion',
        subtitle: 'Continuous Learning & Creativity'
      },
      goal: {
        title: 'Goal',
        subtitle: 'Building Outstanding Projects'
      },
      contact: {
        title: 'Contact Me',
        subtitle: 'دعنا نتواصل ونبني شيئًا رائعًا معًا!'
      }
    }
  };

  const currentContent = content[language];

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      darkMode 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-moroccan-blue/20' 
        : 'bg-gradient-to-br from-moroccan-cream via-white to-moroccan-cream'
    } moroccan-pattern relative overflow-hidden`}>
      <MoroccanPattern />
      
      <ControlPanel
        language={language}
        onLanguageChange={setLanguage}
        darkMode={darkMode}
        onDarkModeChange={setDarkMode}
      />
      
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            {/* القسم الرئيسي المحسّن */}
            <div className="mb-12">
              <div className="relative">
                <h1 className={`text-6xl md:text-8xl font-amiri font-bold text-gradient mb-6 ${
                  language === 'ar' ? 'tracking-wide' : 'tracking-tight'
                }`}>
                  {currentContent.name}
                </h1>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-moroccan-gold/20 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-2 -left-6 w-6 h-6 bg-moroccan-blue/20 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              </div>
              
              <div className="flex items-center justify-center space-x-3 mb-8">
                <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-moroccan-gold to-transparent"></div>
                <div className="flex items-center space-x-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-moroccan-gold/30">
                  <Code className="w-5 h-5 text-moroccan-blue" />
                  <span className={`text-lg md:text-xl font-inter ${darkMode ? 'text-white' : 'text-moroccan-blue'} font-semibold`}>
                    {currentContent.title}
                  </span>
                  <Code className="w-5 h-5 text-moroccan-blue" />
                </div>
                <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-moroccan-gold to-transparent"></div>
              </div>
            </div>

            {/* بطاقة الوصف المحسّنة */}
            <div className={`${
              darkMode 
                ? 'bg-gray-800/90 border-moroccan-gold/30' 
                : 'bg-white/90 border-moroccan-gold/20'
            } backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border mb-12 hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1`}>
              <div className="flex items-center justify-center mb-8">
                <Sparkles className="w-8 h-8 text-moroccan-gold mr-3 animate-pulse" />
                <h2 className={`text-3xl md:text-4xl font-amiri font-bold ${
                  darkMode ? 'text-white' : 'text-moroccan-blue'
                }`}>
                  {currentContent.whoAmI}
                </h2>
                <Sparkles className="w-8 h-8 text-moroccan-gold ml-3 animate-pulse" />
              </div>
              
              <p className={`text-xl md:text-2xl font-inter ${
                darkMode ? 'text-gray-200' : 'text-gray-700'
              } leading-relaxed max-w-4xl mx-auto mb-10 ${
                language === 'ar' ? 'text-right' : 'text-left'
              }`}>
                {currentContent.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className={`${
                  darkMode 
                    ? 'bg-moroccan-blue/20 hover:bg-moroccan-blue/30' 
                    : 'bg-moroccan-blue/10 hover:bg-moroccan-blue/20'
                } rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl group`}>
                  <div className="relative">
                    <Code className="w-12 h-12 text-moroccan-blue mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-moroccan-gold/30 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                  </div>
                  <h3 className={`font-amiri font-bold ${
                    darkMode ? 'text-white' : 'text-moroccan-blue'
                  } mb-3 text-lg`}>
                    {currentContent.skills.title}
                  </h3>
                  <p className={`text-sm ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  } font-inter`}>
                    {currentContent.skills.subtitle}
                  </p>
                </div>
                
                <div className={`${
                  darkMode 
                    ? 'bg-moroccan-gold/20 hover:bg-moroccan-gold/30' 
                    : 'bg-moroccan-gold/10 hover:bg-moroccan-gold/20'
                } rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl group`}>
                  <div className="relative">
                    <Heart className="w-12 h-12 text-moroccan-gold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-moroccan-blue/30 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                  </div>
                  <h3 className={`font-amiri font-bold ${
                    darkMode ? 'text-white' : 'text-moroccan-blue'
                  } mb-3 text-lg`}>
                    {currentContent.passion.title}
                  </h3>
                  <p className={`text-sm ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  } font-inter`}>
                    {currentContent.passion.subtitle}
                  </p>
                </div>
                
                <div className={`${
                  darkMode 
                    ? 'bg-moroccan-blue/20 hover:bg-moroccan-blue/30' 
                    : 'bg-moroccan-blue/10 hover:bg-moroccan-blue/20'
                } rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl group`}>
                  <div className="relative">
                    <Target className="w-12 h-12 text-moroccan-blue mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-moroccan-gold/30 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                  </div>
                  <h3 className={`font-amiri font-bold ${
                    darkMode ? 'text-white' : 'text-moroccan-blue'
                  } mb-3 text-lg`}>
                    {currentContent.goal.title}
                  </h3>
                  <p className={`text-sm ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  } font-inter`}>
                    {currentContent.goal.subtitle}
                  </p>
                </div>
              </div>
            </div>

            {/* قسم التواصل المحسّن */}
            <div className="bg-gradient-to-r from-moroccan-blue via-moroccan-blue to-moroccan-gold rounded-3xl p-10 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative">
                <h3 className="text-3xl md:text-4xl font-amiri font-bold mb-6">
                  {currentContent.contact.title}
                </h3>
                <p className="text-xl font-inter mb-8 opacity-90">
                  {currentContent.contact.subtitle}
                </p>
                <SocialLinks />
                
                {/* تأثيرات زخرفية */}
                <div className="absolute -top-4 -left-4 w-6 h-6 border-2 border-white/30 rounded-full animate-ping"></div>
                <div className="absolute -bottom-4 -right-4 w-8 h-8 border-2 border-moroccan-gold/50 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* تأثيرات الخلفية المحسّنة */}
      <div className={`absolute bottom-0 left-0 right-0 h-40 ${
        darkMode 
          ? 'bg-gradient-to-t from-gray-900/50 to-transparent' 
          : 'bg-gradient-to-t from-moroccan-blue/10 to-transparent'
      } pointer-events-none`}></div>
      
      {/* تأثيرات جانبية */}
      <div className="absolute top-1/4 left-0 w-1 h-32 bg-gradient-to-b from-moroccan-gold to-transparent opacity-30"></div>
      <div className="absolute top-1/2 right-0 w-1 h-24 bg-gradient-to-b from-moroccan-blue to-transparent opacity-30"></div>
    </div>
  );
};

export default Index;
