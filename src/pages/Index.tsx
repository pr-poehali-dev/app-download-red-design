import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
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
    icon: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg',
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
    icon: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg',
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
    icon: 'https://upload.wikimedia.org/wikipedia/commons/2/21/VK.com-logo.svg',
    size: '92 МБ',
    version: '7.56',
    downloads: '500+ млн',
    apkUrl: '#'
  },
  {
    id: 4,
    name: 'Instagram',
    description: 'Делитесь фото и видео с друзьями',
    category: 'Социальные',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg',
    size: '68 МБ',
    version: '308.0',
    downloads: '2+ млрд',
    apkUrl: '#'
  },
  {
    id: 5,
    name: 'TikTok',
    description: 'Короткие видео и развлечения',
    category: 'Социальные',
    icon: 'https://sf-tb-sg.ibytedtos.com/obj/eden-sg/uhtyvueh7nulogpoguhm/tiktok-icon2.png',
    size: '156 МБ',
    version: '32.5.4',
    downloads: '3+ млрд',
    apkUrl: '#'
  },
  {
    id: 6,
    name: 'Viber',
    description: 'Звонки и сообщения бесплатно',
    category: 'Социальные',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/7/74/Viber_2019_Logo.svg',
    size: '87 МБ',
    version: '20.3.1',
    downloads: '1+ млрд',
    apkUrl: '#'
  },
  {
    id: 7,
    name: 'PUBG Mobile',
    description: 'Королевская битва на мобильных устройствах',
    category: 'Игры',
    icon: 'https://play-lh.googleusercontent.com/JRd05pyBH41qjgsJuWduRJpDeZG0Hnb0yjf2nWqO7VaGKL10-G5UIygxED-WNOc3pg',
    size: '1.2 ГБ',
    version: '2.8.0',
    downloads: '1+ млрд',
    apkUrl: '#'
  },
  {
    id: 8,
    name: 'Brawl Stars',
    description: 'Быстрые 3v3 баталии от Supercell',
    category: 'Игры',
    icon: 'https://play-lh.googleusercontent.com/DoLOfFLfTwim91H9bHZaF0jY__anLGkW3PCos_4LbScKsyQ2dH2i9J7iwPobLxdmqyE',
    size: '224 МБ',
    version: '50.179',
    downloads: '500+ млн',
    apkUrl: '#'
  },
  {
    id: 9,
    name: 'Subway Surfers',
    description: 'Бесконечный раннер по городским улицам',
    category: 'Игры',
    icon: 'https://play-lh.googleusercontent.com/yZjnyyDkop8sAAbjKHSSpTiy8uXScMRP-ant1TY1tyXZlYnqfiNBBpOd5AWyn_px1Q',
    size: '156 МБ',
    version: '3.24.1',
    downloads: '1+ млрд',
    apkUrl: '#'
  },
  {
    id: 10,
    name: 'Clash of Clans',
    description: 'Стратегия строительства и сражений',
    category: 'Игры',
    icon: 'https://play-lh.googleusercontent.com/LByrur1wu1D4JflDa1ZPhlsSFqGBvPMGkfFdTN52b3zBHz3IAKf_hqNC1JuHTdQMRPCy',
    size: '289 МБ',
    version: '16.0.8',
    downloads: '500+ млн',
    apkUrl: '#'
  },
  {
    id: 11,
    name: 'Mobile Legends',
    description: '5v5 MOBA баталии',
    category: 'Игры',
    icon: 'https://play-lh.googleusercontent.com/dYJfiSaCPC1RvI98lClz0xyk-KDrJJdidEPl_CvN6cF9MBO4Y8_i3LL_lRLvK8hcMyU',
    size: '687 МБ',
    version: '1.8.42',
    downloads: '500+ млн',
    apkUrl: '#'
  },
  {
    id: 12,
    name: 'Minecraft',
    description: 'Строй и исследуй бесконечный мир',
    category: 'Игры',
    icon: 'https://play-lh.googleusercontent.com/VSwHQjcAttxsLE47RuS4PqpC4LT7lCoSjE7Hx5AW_yCxtDvcnsHHvm5CTuL5BPN-uRTP',
    size: '145 МБ',
    version: '1.20.50',
    downloads: '100+ млн',
    apkUrl: '#'
  },
  {
    id: 13,
    name: 'Google Chrome',
    description: 'Быстрый и безопасный браузер',
    category: 'Инструменты',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Google_Chrome_icon_%28February_2022%29.svg',
    size: '183 МБ',
    version: '119.0',
    downloads: '10+ млрд',
    apkUrl: '#'
  },
  {
    id: 14,
    name: 'Google Maps',
    description: 'Навигация и карты в реальном времени',
    category: 'Инструменты',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Google_Maps_Logo_2020.svg',
    size: '145 МБ',
    version: '11.95.1',
    downloads: '10+ млрд',
    apkUrl: '#'
  },
  {
    id: 15,
    name: 'WPS Office',
    description: 'Редактор документов, таблиц и презентаций',
    category: 'Инструменты',
    icon: 'https://play-lh.googleusercontent.com/EMobDJKabP1eY_63QHgPS_-TK3eRfxXaeOnERbcRaWZc8VF57vL18A0eT8zjz5QXOdk',
    size: '124 МБ',
    version: '17.9',
    downloads: '500+ млн',
    apkUrl: '#'
  },
  {
    id: 16,
    name: 'Adobe Acrobat Reader',
    description: 'Просмотр и редактирование PDF',
    category: 'Инструменты',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/8/87/PDF_file_icon.svg',
    size: '78 МБ',
    version: '23.10.1',
    downloads: '500+ млн',
    apkUrl: '#'
  },
  {
    id: 17,
    name: 'Clean Master',
    description: 'Очистка и ускорение Android',
    category: 'Инструменты',
    icon: 'https://play-lh.googleusercontent.com/WUrKiItS3n2cOYZi_ETaHgBXy58gsNmo4JLfiP-cGXdCKqgLjP1STGR3oMmjq93aSg',
    size: '42 МБ',
    version: '7.5.4',
    downloads: '1+ млрд',
    apkUrl: '#'
  },
  {
    id: 18,
    name: 'Yandex Browser',
    description: 'Браузер с Алисой и защитой',
    category: 'Инструменты',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/5/58/Yandex_icon.svg',
    size: '167 МБ',
    version: '23.11.1',
    downloads: '100+ млн',
    apkUrl: '#'
  },
  {
    id: 19,
    name: 'YouTube',
    description: 'Смотрите видео со всего мира',
    category: 'Медиа',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg',
    size: '128 МБ',
    version: '18.45.41',
    downloads: '10+ млрд',
    apkUrl: '#'
  },
  {
    id: 20,
    name: 'Spotify',
    description: 'Музыка и подкасты',
    category: 'Медиа',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg',
    size: '89 МБ',
    version: '8.8.70',
    downloads: '1+ млрд',
    apkUrl: '#'
  },
  {
    id: 21,
    name: 'VLC',
    description: 'Универсальный медиаплеер',
    category: 'Медиа',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/VLC_Icon.svg',
    size: '67 МБ',
    version: '3.5.4',
    downloads: '100+ млн',
    apkUrl: '#'
  },
  {
    id: 22,
    name: 'Netflix',
    description: 'Фильмы, сериалы и шоу',
    category: 'Медиа',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
    size: '98 МБ',
    version: '8.91.0',
    downloads: '1+ млрд',
    apkUrl: '#'
  },
  {
    id: 23,
    name: 'Яндекс Музыка',
    description: 'Музыка и подкасты от Яндекса',
    category: 'Медиа',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/5/58/Yandex_icon.svg',
    size: '76 МБ',
    version: '6.42',
    downloads: '100+ млн',
    apkUrl: '#'
  },
  {
    id: 24,
    name: 'MX Player',
    description: 'Мощный видеоплеер',
    category: 'Медиа',
    icon: 'https://play-lh.googleusercontent.com/jCQZWNobtiuGSFcVTG1Fr8GJQCvvw0RfvTMouLloOvzDm4eCJYj-RfjS7j8SJoTt6oA',
    size: '54 МБ',
    version: '1.78.9',
    downloads: '1+ млрд',
    apkUrl: '#'
  }
];

const categories = ['Все', 'Социальные', 'Игры', 'Инструменты', 'Медиа'];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredApps = apps
    .filter(app => selectedCategory === 'Все' || app.category === selectedCategory)
    .filter(app => 
      app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

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
          <div className="mb-6">
            <div className="relative max-w-md">
              <Icon name="Search" size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Поиск приложений..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 text-base"
              />
            </div>
          </div>
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