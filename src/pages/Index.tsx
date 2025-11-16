import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface App {
  id: number;
  name: string;
  description: string;
  category: string;
  icon: string;
  size: string;
  version: string;
  downloads: string;
  apkUrl: string;
}

const apps: App[] = [
  {
    id: 1,
    name: 'WhatsApp',
    description: 'Бесплатные звонки и сообщения по всему миру',
    category: 'Социальные',
    icon: '💬',
    size: '58 МБ',
    version: '2.23.24.8',
    downloads: '5+ млрд',
    apkUrl: '#'
  },
  {
    id: 2,
    name: 'Telegram',
    description: 'Быстрый и безопасный мессенджер',
    category: 'Социальные',
    icon: '✈️',
    size: '45 МБ',
    version: '10.2.5',
    downloads: '1+ млрд',
    apkUrl: '#'
  },
  {
    id: 3,
    name: 'VK',
    description: 'Социальная сеть для общения и развлечений',
    category: 'Социальные',
    icon: '🎵',
    size: '92 МБ',
    version: '7.56',
    downloads: '500+ млн',
    apkUrl: '#'
  },
  {
    id: 4,
    name: 'PUBG Mobile',
    description: 'Королевская битва на мобильных устройствах',
    category: 'Игры',
    icon: '🎮',
    size: '1.2 ГБ',
    version: '2.8.0',
    downloads: '1+ млрд',
    apkUrl: '#'
  },
  {
    id: 5,
    name: 'Brawl Stars',
    description: 'Быстрые 3v3 баталии от Supercell',
    category: 'Игры',
    icon: '⭐',
    size: '224 МБ',
    version: '50.179',
    downloads: '500+ млн',
    apkUrl: '#'
  },
  {
    id: 6,
    name: 'Subway Surfers',
    description: 'Бесконечный раннер по городским улицам',
    category: 'Игры',
    icon: '🏃',
    size: '156 МБ',
    version: '3.24.1',
    downloads: '1+ млрд',
    apkUrl: '#'
  },
  {
    id: 7,
    name: 'Google Chrome',
    description: 'Быстрый и безопасный браузер',
    category: 'Инструменты',
    icon: '🌐',
    size: '183 МБ',
    version: '119.0',
    downloads: '10+ млрд',
    apkUrl: '#'
  },
  {
    id: 8,
    name: 'Google Maps',
    description: 'Навигация и карты в реальном времени',
    category: 'Инструменты',
    icon: '🗺️',
    size: '145 МБ',
    version: '11.95.1',
    downloads: '10+ млрд',
    apkUrl: '#'
  },
  {
    id: 9,
    name: 'ES File Explorer',
    description: 'Мощный файловый менеджер',
    category: 'Инструменты',
    icon: '📁',
    size: '34 МБ',
    version: '4.2.9',
    downloads: '500+ млн',
    apkUrl: '#'
  },
  {
    id: 10,
    name: 'YouTube',
    description: 'Смотрите видео со всего мира',
    category: 'Медиа',
    icon: '📺',
    size: '128 МБ',
    version: '18.45.41',
    downloads: '10+ млрд',
    apkUrl: '#'
  },
  {
    id: 11,
    name: 'Spotify',
    description: 'Музыка и подкасты',
    category: 'Медиа',
    icon: '🎧',
    size: '89 МБ',
    version: '8.8.70',
    downloads: '1+ млрд',
    apkUrl: '#'
  },
  {
    id: 12,
    name: 'VLC',
    description: 'Универсальный медиаплеер',
    category: 'Медиа',
    icon: '🎬',
    size: '67 МБ',
    version: '3.5.4',
    downloads: '100+ млн',
    apkUrl: '#'
  }
];

const categories = ['Все', 'Социальные', 'Игры', 'Инструменты', 'Медиа'];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('Все');

  const filteredApps = selectedCategory === 'Все' 
    ? apps 
    : apps.filter(app => app.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-primary text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-3">
            <Icon name="Package" size={32} className="text-white" />
            <h1 className="text-3xl font-bold">Lawa Market</h1>
          </div>
          <p className="mt-2 text-white/90">Скачивайте проверенные Android-приложения</p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Категории</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map(category => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? 'default' : 'outline'}
                className={`transition-all duration-200 ${
                  selectedCategory === category 
                    ? 'shadow-lg scale-105' 
                    : 'hover:border-primary hover:text-primary hover:scale-105'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <Badge variant="outline" className="text-base py-1 px-3">
            <Icon name="AppWindow" size={16} className="mr-2" />
            {filteredApps.length} {filteredApps.length === 1 ? 'приложение' : 'приложений'}
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
          {filteredApps.map(app => (
            <Card 
              key={app.id} 
              className="hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0 shadow-md overflow-hidden"
            >
              <CardHeader className="pb-3">
                <div className="flex items-start gap-4">
                  <div className="text-5xl bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl w-16 h-16 flex items-center justify-center shadow-sm">
                    {app.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-xl mb-1 truncate">{app.name}</CardTitle>
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                      {app.category}
                    </Badge>
                  </div>
                </div>
                <CardDescription className="mt-3 line-clamp-2 text-base">
                  {app.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="grid grid-cols-3 gap-3 text-sm">
                  <div className="flex flex-col gap-1">
                    <span className="text-gray-500 text-xs">Размер</span>
                    <span className="font-semibold text-gray-800">{app.size}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-gray-500 text-xs">Версия</span>
                    <span className="font-semibold text-gray-800">{app.version}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-gray-500 text-xs">Загрузок</span>
                    <span className="font-semibold text-gray-800">{app.downloads}</span>
                  </div>
                </div>

                <Button 
                  className="w-full shadow-md hover:shadow-lg transition-all duration-200"
                  size="lg"
                >
                  <Icon name="Download" size={18} className="mr-2" />
                  Скачать APK
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <footer className="bg-white border-t mt-16 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600">
          <p className="flex items-center justify-center gap-2">
            <Icon name="Shield" size={18} />
            Все приложения проверены на безопасность
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;