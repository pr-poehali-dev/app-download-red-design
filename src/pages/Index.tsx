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
    icon: 'https://cdn.poehali.dev/projects/75746f5f-7f16-4c80-b8e3-8aabd38dbf2f/files/8efa8597-3cb1-4b4c-a548-7041b34de88f.jpg',
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
    icon: 'https://cdn.poehali.dev/projects/75746f5f-7f16-4c80-b8e3-8aabd38dbf2f/files/2845c0df-15e6-43f5-95f4-be007a6816c7.jpg',
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
    icon: 'https://cdn.poehali.dev/projects/75746f5f-7f16-4c80-b8e3-8aabd38dbf2f/files/c41b65b0-d000-48e3-a5cc-5af6a76926da.jpg',
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
    icon: 'https://cdn.poehali.dev/projects/75746f5f-7f16-4c80-b8e3-8aabd38dbf2f/files/571da422-82e4-4f51-8360-048247851442.jpg',
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
    icon: 'https://cdn.poehali.dev/projects/75746f5f-7f16-4c80-b8e3-8aabd38dbf2f/files/8d9c130d-0264-43c3-8dd9-ce2d7d3fce24.jpg',
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
    icon: 'https://cdn.poehali.dev/projects/75746f5f-7f16-4c80-b8e3-8aabd38dbf2f/files/9992e054-c891-4371-9228-69ff6e79852c.jpg',
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
    icon: 'https://cdn.poehali.dev/projects/75746f5f-7f16-4c80-b8e3-8aabd38dbf2f/files/299c9d35-cfcc-4567-b072-1e7085dd89d9.jpg',
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
    icon: 'https://cdn.poehali.dev/projects/75746f5f-7f16-4c80-b8e3-8aabd38dbf2f/files/bb42ba47-d909-4651-a6cc-52f1fd61913b.jpg',
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
    icon: 'https://cdn.poehali.dev/projects/75746f5f-7f16-4c80-b8e3-8aabd38dbf2f/files/121d2cbe-9245-4d8a-bd87-10b80724e56a.jpg',
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
    icon: 'https://cdn.poehali.dev/projects/75746f5f-7f16-4c80-b8e3-8aabd38dbf2f/files/1bde3e04-b92f-4a63-a80b-69eae36f8067.jpg',
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
    icon: 'https://cdn.poehali.dev/projects/75746f5f-7f16-4c80-b8e3-8aabd38dbf2f/files/5b6859b5-85a1-44b8-b633-0630030f322b.jpg',
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
    icon: 'https://cdn.poehali.dev/projects/75746f5f-7f16-4c80-b8e3-8aabd38dbf2f/files/fbfc671f-0fa0-48ea-a2d5-ed76529c37d2.jpg',
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
                  <div className="rounded-2xl w-16 h-16 flex items-center justify-center shadow-sm overflow-hidden">
                    <img src={app.icon} alt={app.name} className="w-full h-full object-cover" />
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