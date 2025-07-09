
import React, { useState, useEffect } from 'react';
import { Moon, Sun, Languages, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';

interface ControlPanelProps {
  language: 'ar' | 'en';
  onLanguageChange: (lang: 'ar' | 'en') => void;
  darkMode: boolean;
  onDarkModeChange: (dark: boolean) => void;
}

const ControlPanel = ({ language, onLanguageChange, darkMode, onDarkModeChange }: ControlPanelProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-4 right-4 z-50">
      {/* زر الإعدادات */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        variant="outline"
        size="icon"
        className="bg-white/90 backdrop-blur-sm border-moroccan-gold/30 hover:bg-moroccan-gold/10 shadow-lg"
      >
        <Settings className="h-4 w-4 text-moroccan-blue" />
      </Button>

      {/* لوحة التحكم */}
      {isOpen && (
        <div className="absolute top-12 right-0 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-2xl border border-moroccan-gold/20 min-w-[200px]">
          {/* تبديل اللغة */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <Languages className="h-4 w-4 text-moroccan-blue" />
              <span className="text-sm font-inter text-moroccan-blue">
                {language === 'ar' ? 'اللغة' : 'Language'}
              </span>
            </div>
            <Button
              onClick={() => onLanguageChange(language === 'ar' ? 'en' : 'ar')}
              variant="outline"
              size="sm"
              className="text-xs"
            >
              {language === 'ar' ? 'EN' : 'عربي'}
            </Button>
          </div>

          {/* تبديل الوضع الداكن */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              {darkMode ? (
                <Moon className="h-4 w-4 text-moroccan-blue" />
              ) : (
                <Sun className="h-4 w-4 text-moroccan-gold" />
              )}
              <span className="text-sm font-inter text-moroccan-blue">
                {language === 'ar' ? 'الوضع الداكن' : 'Dark Mode'}
              </span>
            </div>
            <Switch
              checked={darkMode}
              onCheckedChange={onDarkModeChange}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ControlPanel;
