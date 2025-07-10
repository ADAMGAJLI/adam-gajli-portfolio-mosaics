import React, { useEffect, useState } from 'react';
import MoroccanPattern from '../components/MoroccanPattern';
import SocialLinks from '../components/SocialLinks';
import ControlPanel from '../components/ControlPanel';
import { Code, Heart, Sparkles, Globe, BookOpen, Target, Star, Zap } from 'lucide-react';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [language, setLanguage] = useState<'ar' | 'en' | 'fr'>('ar');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    document.documentElement.setAttribute('dir', language === 'ar' ? 'rtl' : 'ltr');
  }, [darkMode, language]);

  const content = {
    ar: {
      name: 'آدم كجلي',
      title: 'مبرمج مبتدئ',
      whoAmI: 'من أنا؟',
      description: 'مبرمج مبتدئ مهتم بتطوير المواقع وتعلم لغات البرمجة، أسعى لبناء مشاريع مميزة وتطوير مهاراتي بشكل مستمر في عالم التكنولوجيا.',
      skills: {
        title: 'تطوير المواقع',
        subtitle: 'HTML, CSS, JavaScript, React'
      },
      passion: {
        title: 'الشغف',
        subtitle: 'التعلم المستمر والإبداع'
      },
      goal: {
        title: 'الهدف',
        subtitle: 'بناء مشاريع مميزة ومبتكرة'
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
      description: 'A passionate beginner programmer interested in web development and learning programming languages, striving to build outstanding projects and continuously develop my skills in the technology world.',
      skills: {
        title: 'Web Development',
        subtitle: 'HTML, CSS, JavaScript, React'
      },
      passion: {
        title: 'Passion',
        subtitle: 'Continuous Learning & Creativity'
      },
      goal: {
        title: 'Goal',
        subtitle: 'Building Outstanding & Innovative Projects'
      },
      contact: {
        title: 'Contact Me',
        subtitle: 'دعنا نتواصل ونبني شيئًا رائعًا معًا!'
      }
    },
    fr: {
      name: 'Adam Gajli',
      title: 'Programmeur Débutant',
      whoAmI: 'Qui Suis-Je?',
      description: 'Un programmeur débutant passionné, intéressé par le développement web et l\'apprentissage des langages de programmation, aspirant à créer des projets exceptionnels et à développer continuellement mes compétences dans le monde de la technologie.',
      skills: {
        title: 'Développement Web',
        subtitle: 'HTML, CSS, JavaScript, React'
      },
      passion: {
        title: 'Passion',
        subtitle: 'Apprentissage Continu & Créativité'
      },
      goal: {
        title: 'Objectif',
        subtitle: 'Créer des Projets Exceptionnels & Innovants'
      },
      contact: {
        title: 'Contactez-Moi',
        subtitle: 'Connectons-nous et créons quelque chose d\'incroyable ensemble!'
      }
    }
  };

  const currentContent = content[language];

  return (
    <div className={`min-h-screen transition-all duration-700 ${
      darkMode 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-moroccan-blue/20' 
        : 'bg-gradient-to-br from-moroccan-cream via-white to-moroccan-cream'
    } moroccan-pattern relative overflow-hidden`}>
      <MoroccanPattern />
      
      {/* نجوم متحركة في الخلفية */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-moroccan-gold rounded-full animate-twinkle"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-moroccan-blue rounded-full animate-twinkle" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-32 w-1.5 h-1.5 bg-moroccan-gold rounded-full animate-twinkle" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-10 w-1 h-1 bg-moroccan-blue rounded-full animate-twinkle" style={{ animationDelay: '0.5s' }}></div>
      </div>
      
      <ControlPanel
        language={language}
        onLanguageChange={setLanguage}
        darkMode={darkMode}
        onDarkModeChange={setDarkMode}
      />
      
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            
            {/* الصورة الشخصية */}
            <div className="mb-12">
              <div className="relative inline-block">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 border-4 border-moroccan-gold/50">
                  <img 
                    src="/lovable-uploads/3ca87504-278d-4432-85db-9999d1a4d402.png" 
                    alt="Adam Gajli"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* تأثيرات زخرفية حول الصورة */}
                <div className="absolute -top-4 -right-4 w-8 h-8 border-2 border-moroccan-gold/40 rounded-full animate-spin-slow"></div>
                <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-moroccan-blue/20 rounded-full animate-pulse"></div>
                <Sparkles className="absolute top-0 left-1/4 w-6 h-6 text-moroccan-gold animate-twinkle" />
                <Star className="absolute bottom-0 right-1/4 w-5 h-5 text-moroccan-blue animate-twinkle" style={{ animationDelay: '1s' }} />
              </div>
            </div>

            {/* القسم الرئيسي المحسّن مع تأثيرات جديدة */}
            <div className="mb-16 relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-moroccan-gold/20 via-transparent to-moroccan-blue/20 blur-3xl animate-pulse-glow"></div>
              <div className="relative">
                <h1 className={`text-6xl md:text-8xl lg:text-9xl font-amiri font-bold text-gradient mb-8 ${
                  language === 'ar' ? 'tracking-wide' : 'tracking-tight'
                } hover:scale-105 transition-transform duration-500 cursor-default`}>
                  {currentContent.name}
                </h1>
                
                {/* تأثيرات زخرفية متحركة حول الاسم */}
                <div className="absolute -top-6 -right-6 w-12 h-12 border-2 border-moroccan-gold/30 rounded-full animate-spin-slow"></div>
                <div className="absolute -bottom-4 -left-8 w-8 h-8 bg-moroccan-blue/20 rounded-full animate-float"></div>
                <Sparkles className="absolute top-2 left-1/4 w-6 h-6 text-moroccan-gold animate-twinkle" />
                <Star className="absolute bottom-2 right-1/4 w-5 h-5 text-moroccan-blue animate-twinkle" style={{ animationDelay: '1s' }} />
              </div>
              
              <div className="flex items-center justify-center space-x-4 mb-12">
                <div className="w-20 h-1 bg-gradient-to-r from-transparent via-moroccan-gold to-transparent animate-shimmer"></div>
                <div className="flex items-center space-x-3 px-8 py-4 bg-white/20 backdrop-blur-md rounded-full border border-moroccan-gold/40 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
                  <Code className="w-6 h-6 text-moroccan-blue group-hover:rotate-12 transition-transform duration-300" />
                  <span className={`text-xl md:text-2xl font-inter ${darkMode ? 'text-white' : 'text-moroccan-blue'} font-semibold`}>
                    {currentContent.title}
                  </span>
                  <Zap className="w-6 h-6 text-moroccan-gold group-hover:scale-125 transition-transform duration-300" />
                </div>
                <div className="w-20 h-1 bg-gradient-to-r from-transparent via-moroccan-gold to-transparent animate-shimmer" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>

            {/* بطاقة الوصف المحسّنة مع تأثيرات جديدة */}
            <div className={`${
              darkMode 
                ? 'bg-gray-800/95 border-moroccan-gold/30' 
                : 'bg-white/95 border-moroccan-gold/20'
            } backdrop-blur-md rounded-3xl p-10 md:p-16 shadow-2xl border mb-16 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 group relative overflow-hidden`}>
              
              {/* تأثير الخلفية المتحركة */}
              <div className="absolute inset-0 bg-gradient-to-r from-moroccan-gold/5 via-transparent to-moroccan-blue/5 transform -skew-x-12 translate-x-full group-hover:translate-x-[-100%] transition-transform duration-700"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-10">
                  <Globe className="w-10 h-10 text-moroccan-gold mr-4 animate-float" />
                  <h2 className={`text-4xl md:text-5xl font-amiri font-bold ${
                    darkMode ? 'text-white' : 'text-moroccan-blue'
                  } hover:text-gradient transition-all duration-300`}>
                    {currentContent.whoAmI}
                  </h2>
                  <BookOpen className="w-10 h-10 text-moroccan-gold ml-4 animate-float" style={{ animationDelay: '0.5s' }} />
                </div>
                
                <p className={`text-xl md:text-2xl lg:text-3xl font-inter ${
                  darkMode ? 'text-gray-200' : 'text-gray-700'
                } leading-relaxed max-w-5xl mx-auto mb-12 ${
                  language === 'ar' ? 'text-right' : language === 'fr' ? 'text-left' : 'text-left'
                } hover:scale-105 transition-transform duration-300`}>
                  {currentContent.description}
                </p>
                
                {/* الشبكة المحسّنة للمهارات */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                  <div className={`${
                    darkMode 
                      ? 'bg-moroccan-blue/30 hover:bg-moroccan-blue/40 border-moroccan-blue/20' 
                      : 'bg-moroccan-blue/15 hover:bg-moroccan-blue/25 border-moroccan-blue/10'
                  } rounded-3xl p-8 lg:p-10 transition-all duration-500 hover:scale-110 hover:shadow-2xl group border backdrop-blur-sm hover:-translate-y-4`}>
                    <div className="relative mb-6">
                      <Code className="w-16 h-16 text-moroccan-blue mx-auto group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" />
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-moroccan-gold/40 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                    </div>
                    <h3 className={`font-amiri font-bold ${
                      darkMode ? 'text-white' : 'text-moroccan-blue'
                    } mb-4 text-xl lg:text-2xl group-hover:text-gradient transition-all duration-300`}>
                      {currentContent.skills.title}
                    </h3>
                    <p className={`text-base lg:text-lg ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    } font-inter leading-relaxed`}>
                      {currentContent.skills.subtitle}
                    </p>
                  </div>
                  
                  <div className={`${
                    darkMode 
                      ? 'bg-moroccan-gold/30 hover:bg-moroccan-gold/40 border-moroccan-gold/20' 
                      : 'bg-moroccan-gold/15 hover:bg-moroccan-gold/25 border-moroccan-gold/10'
                  } rounded-3xl p-8 lg:p-10 transition-all duration-500 hover:scale-110 hover:shadow-2xl group border backdrop-blur-sm hover:-translate-y-4`} style={{ animationDelay: '0.2s' }}>
                    <div className="relative mb-6">
                      <Heart className="w-16 h-16 text-moroccan-gold mx-auto group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" />
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-moroccan-blue/40 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                    </div>
                    <h3 className={`font-amiri font-bold ${
                      darkMode ? 'text-white' : 'text-moroccan-blue'
                    } mb-4 text-xl lg:text-2xl group-hover:text-gradient transition-all duration-300`}>
                      {currentContent.passion.title}
                    </h3>
                    <p className={`text-base lg:text-lg ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    } font-inter leading-relaxed`}>
                      {currentContent.passion.subtitle}
                    </p>
                  </div>
                  
                  <div className={`${
                    darkMode 
                      ? 'bg-moroccan-blue/30 hover:bg-moroccan-blue/40 border-moroccan-blue/20' 
                      : 'bg-moroccan-blue/15 hover:bg-moroccan-blue/25 border-moroccan-blue/10'
                  } rounded-3xl p-8 lg:p-10 transition-all duration-500 hover:scale-110 hover:shadow-2xl group border backdrop-blur-sm hover:-translate-y-4`} style={{ animationDelay: '0.4s' }}>
                    <div className="relative mb-6">
                      <Target className="w-16 h-16 text-moroccan-blue mx-auto group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" />
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-moroccan-gold/40 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                    </div>
                    <h3 className={`font-amiri font-bold ${
                      darkMode ? 'text-white' : 'text-moroccan-blue'
                    } mb-4 text-xl lg:text-2xl group-hover:text-gradient transition-all duration-300`}>
                      {currentContent.goal.title}
                    </h3>
                    <p className={`text-base lg:text-lg ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    } font-inter leading-relaxed`}>
                      {currentContent.goal.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* قسم التواصل المحسّن مع تأثيرات جديدة */}
            <div className="bg-gradient-to-r from-moroccan-blue via-moroccan-blue to-moroccan-gold rounded-3xl p-12 lg:p-16 text-white shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden group">
              {/* تأثير الخلفية المتحركة */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              <div className="relative z-10">
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-amiri font-bold mb-8 hover:scale-105 transition-transform duration-300">
                  {currentContent.contact.title}
                </h3>
                <p className="text-xl md:text-2xl lg:text-3xl font-inter mb-10 opacity-90 hover:opacity-100 transition-opacity duration-300">
                  {currentContent.contact.subtitle}
                </p>
                <div className="transform hover:scale-105 transition-transform duration-300">
                  <SocialLinks />
                </div>
                
                {/* تأثيرات زخرفية محسّنة */}
                <div className="absolute -top-6 -left-6 w-8 h-8 border-2 border-white/30 rounded-full animate-ping"></div>
                <div className="absolute -bottom-6 -right-6 w-10 h-10 border-2 border-moroccan-gold/50 rounded-full animate-pulse"></div>
                <Sparkles className="absolute top-4 right-4 w-8 h-8 text-white/60 animate-twinkle" />
                <Star className="absolute bottom-4 left-4 w-6 h-6 text-moroccan-gold/80 animate-twinkle" style={{ animationDelay: '1.5s' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* تأثيرات الخلفية المحسّنة */}
      <div className={`absolute bottom-0 left-0 right-0 h-48 ${
        darkMode 
          ? 'bg-gradient-to-t from-gray-900/60 to-transparent' 
          : 'bg-gradient-to-t from-moroccan-blue/15 to-transparent'
      } pointer-events-none`}></div>
      
      {/* خطوط جانبية متحركة */}
      <div className="absolute top-1/4 left-0 w-2 h-40 bg-gradient-to-b from-moroccan-gold to-transparent opacity-40 animate-pulse"></div>
      <div className="absolute top-1/2 right-0 w-2 h-32 bg-gradient-to-b from-moroccan-blue to-transparent opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
    </div>
  );
};

export default Index;
