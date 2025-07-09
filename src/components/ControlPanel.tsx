
import React, { useState, useEffect } from 'react';
import { Moon, Sun, Languages, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';

interface ControlPanelProps {
  language: 'ar' | 'en' | 'fr';
  onLanguageChange: (lang: 'ar' | 'en' | 'fr') => void;
  darkMode: boolean;
  onDarkModeChange: (dark: boolean) => void;
}

const ControlPanel = ({ language, onLanguageChange, darkMode, onDarkModeChange }: ControlPanelProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const getLanguageText = () => {
    switch (language) {
      case 'ar': return 'اللغة';
      case 'fr': return 'Langue';
      default: return 'Language';
    }
  };

  const getDarkModeText = () => {
    switch (language) {
      case 'ar': return 'الوضع الداكن';
      case 'fr': return 'Mode Sombre';
      default: return 'Dark Mode';
    }
  };

  const getNextLanguage = () => {
    if (language === 'ar') return 'en';
    if (language === 'en') return 'fr';
    return 'ar';
  };

  const getLanguageButtonText = () => {
    if (language === 'ar') return 'EN';
    if (language === 'en') return 'FR';
    return 'عربي';
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      {/* زر الإعدادات المحسّن */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        variant="outline"
        size="icon"
        className="bg-white/95 backdrop-blur-sm border-moroccan-gold/30 hover:bg-moroccan-gold/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-pulse-glow"
      >
        <Settings className={`h-4 w-4 text-moroccan-blue transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`} />
      </Button>

      {/* لوحة التحكم المحسّنة */}
      {isOpen && (
        <div className={`absolute top-12 right-0 ${
          darkMode 
            ? 'bg-gray-800/95 border-moroccan-gold/30' 
            : 'bg-white/95 border-moroccan-gold/20'
        } backdrop-blur-sm rounded-2xl p-6 shadow-2xl border min-w-[220px] animate-fade-in-up hover:shadow-3xl transition-all duration-300`}>
          
          {/* تبديل اللغة المحسّن */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <Languages className={`h-5 w-5 ${darkMode ? 'text-moroccan-gold' : 'text-moroccan-blue'} animate-float`} />
              <span className={`text-sm font-inter font-medium ${
                darkMode ? 'text-white' : 'text-moroccan-blue'
              }`}>
                {getLanguageText()}
              </span>
            </div>
            <Button
              onClick={() => onLanguageChange(getNextLanguage())}
              variant="outline"
              size="sm"
              className={`text-xs font-semibold px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105 ${
                darkMode 
                  ? 'border-moroccan-gold/40 hover:bg-moroccan-gold/20 text-moroccan-gold' 
                  : 'border-moroccan-blue/40 hover:bg-moroccan-blue/10 text-moroccan-blue'
              }`}
            >
              {getLanguageButtonText()}
            </Button>
          </div>

          {/* تبديل الوضع الداكن المحسّن */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {darkMode ? (
                <Moon className="h-5 w-5 text-moroccan-gold animate-float" />
              ) : (
                <Sun className="h-5 w-5 text-moroccan-gold animate-float" />
              )}
              <span className={`text-sm font-inter font-medium ${
                darkMode ? 'text-white' : 'text-moroccan-blue'
              }`}>
                {getDarkModeText()}
              </span>
            </div>
            <div className="relative">
              <Switch
                checked={darkMode}
                onCheckedChange={onDarkModeChange}
                className="data-[state=checked]:bg-moroccan-gold"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ControlPanel;
