import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'portfolio', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      title: "IT и маркетинговые услуги",
      icon: "Code",
      description: "Разработка сайтов, настройка рекламы, SEO-оптимизация",
      details: [
        "Разработка и поддержка веб-сайтов и интернет-магазинов для малого и среднего бизнеса",
        "Настройка контекстной рекламы (Google Ads, Яндекс.Директ)",
        "SEO-оптимизация, SMM, аналитика трафика",
        "Консультации по цифровой трансформации и автоматизации бизнес-процессов",
        "Внедрение CRM, аналитики и систем учёта",
        "Работа с HTML/CSS, PHP, MySQL, CMS (WordPress, OpenCart)",
        "Построение локальных сетей и настройка серверов",
        "Оптимизация сайтов под мобильные устройства"
      ],
      results: [
        "Рост онлайн-продаж клиентов на 30–70%",
        "Снижение стоимости привлечения клиента на 25–40%",
        "Увеличение органического трафика за счёт SEO",
        "Повышение узнаваемости брендов и лояльности аудитории",
        "Автоматизация бизнес-процессов клиентов"
      ],
      technologies: ["HTML/CSS", "PHP", "MySQL", "WordPress", "OpenCart", "Google Ads", "Яндекс.Директ", "CRM-системы"]
    },
    {
      title: "Музыкальная индустрия",
      icon: "Music",
      description: "Студия звукозаписи, продвижение артистов",
      details: [
        "Профессиональная запись, сведение и мастеринг аудио",
        "Создание аранжировок в DAW (Ableton Live, Logic Pro, Cubase)",
        "Продвижение музыкальных проектов: контент, дистрибуция, стратегия",
        "Обучение основам звукозаписи и работе с цифровыми аудиостанциями",
        "Поддержка начинающих артистов на всех этапах производства",
        "Работа с музыкальными инструментами и оборудованием",
        "Организация записи в студийных условиях",
        "Техническое сопровождение живых выступлений"
      ],
      results: [
        "Ведение двух собственных музыкальных проектов",
        "Поддержка начинающих артистов на всех этапах производства",
        "Профессиональное студийное оборудование",
        "Опыт работы с различными музыкальными жанрами",
        "Создание качественного звука для коммерческих проектов"
      ],
      technologies: ["Ableton Live", "Logic Pro", "Cubase", "Pro Tools", "Звукозапись", "Мастеринг", "MIDI"]
    },
    {
      title: "Event-менеджмент",
      icon: "Calendar",
      description: "Организация мероприятий и техническое обеспечение",
      details: [
        "Полный цикл организации мероприятий от планирования до реализации",
        "Техническое обеспечение мероприятий — от частных вечеринок до концертных площадок",
        "Прокат звукового и светового оборудования",
        "Координация работы технических служб",
        "Разработка технических райдеров",
        "Управление логистикой и тайм-менеджментом мероприятий",
        "Работа с артистами и техническими командами",
        "Обеспечение безопасности на мероприятиях"
      ],
      results: [
        "Опыт проведения мероприятий различного масштаба",
        "Собственная материально-техническая база",
        "Постоянная клиентская база в сфере развлечений",
        "Безаварийное проведение технически сложных мероприятий",
        "Положительные отзывы клиентов и партнёров"
      ],
      technologies: ["Звуковое оборудование", "Световые системы", "Проектное управление", "Логистика"]
    },
    {
      title: "Образование и молодёжная политика",
      icon: "GraduationCap",
      description: "Преподавание и работа с молодёжью",
      details: [
        "Преподавание музыкальных дисциплин: теория, инструмент, исполнительское мастерство",
        "Руководство творческими коллективами, постановка номеров, организация выступлений",
        "Планирование и проведение школьных и городских мероприятий",
        "Участие в разработке и реализации молодёжных программм и инициатив",
        "Организация культурных, образовательных и спортивных мероприятий",
        "Координация работы молодёжных клубов и творческих объединений",
        "Взаимодействие с образовательными учреждениями и общественными организациями",
        "Мотивация и развитие активной молодёжи"
      ],
      results: [
        "Системный подход к вовлечению и развитию молодёжи",
        "Укрепление навыков проектного управления и коммуникации",
        "Опыт работы в государственных структурах",
        "Реализация успешных молодёжных инициатив",
        "Развитие творческих способностей учащихся"
      ],
      technologies: ["Педагогические методики", "Проектное управление", "Работа с молодёжью", "Организация мероприятий"]
    },
    {
      title: "Малый и средний бизнес",
      icon: "Building2",
      description: "Предпринимательский опыт в различных сферах",
      details: [
        "Магазин музыкальных инструментов: полный цикл от поиска поставщиков до продаж",
        "Юридическое сопровождение сделок, ведение документации, работа с договорами",
        "Швейное производство чехлов для инструментов: от прототипов до серийного производства",
        "Разработка прототипов, проектирование лекал, подбор материалов и оборудования",
        "Оптимизация производственных процессов: раскрой, пошив, логистика",
        "Внедрение учёта затрат и повышение маржинальности за счёт автоматизации",
        "Придорожное кафе: опыт работы в различных ролях от уборщика до управляющего",
        "Внедрение систем контроля качества и учёта затрат в общепите"
      ],
      results: [
        "Успешное ведение многопрофильного бизнеса в течение многих лет",
        "Опыт в различных сферах: торговля, производство, общепит",
        "Навыки управления персоналом и процессами",
        "Понимание всех аспектов ведения малого бизнеса",
        "Опыт оптимизации бизнес-процессов"
      ],
      technologies: ["Управление бизнесом", "Логистика", "Закупки", "Учёт затрат", "Управление персоналом"]
    }
  ];

  const experience = [
    {
      company: "ООО \"НикаДжаз\"",
      role: "Основатель, руководитель",
      type: "IT и маркетинговые услуги",
      description: "Комплексные IT-решения для малого и среднего бизнеса",
      responsibilities: [
        "Разработка и поддержка веб-сайтов и интернет-магазинов для малого и среднего бизнеса",
        "Настройка контекстной рекламы (Google Ads, Яндекс.Директ), SEO-оптимизация, SMM",
        "Консультации по цифровой трансформации и автоматизации бизнес-процессов",
        "Внедрение CRM, аналитики и систем учёта",
        "Техническая поддержка и сопровождение проектов"
      ],
      achievements: [
        "Рост онлайн-продаж клиентов на 30–70%",
        "Снижение стоимости привлечения клиента на 25–40%",
        "Увеличение органического трафика за счёт SEO",
        "Повышение узнаваемости брендов и лояльности аудитории"
      ],
      technologies: ["HTML/CSS", "PHP", "MySQL", "WordPress", "Google Ads", "SEO"]
    },
    {
      company: "ООО \"НикаДжаз\"",
      role: "Основатель, звукорежиссёр, продюсер",
      type: "Студия звукозаписи и продвижения",
      description: "Профессиональная студия звукозаписи и продвижения музыкальных проектов",
      responsibilities: [
        "Профессиональная запись, сведение и мастеринг аудио",
        "Создание аранжировок в DAW (Ableton Live, Logic Pro, Cubase)",
        "Продвижение музыкальных проектов: контент, дистрибуция, стратегия",
        "Обучение основам звукозаписи и работе с цифровыми аудиостанциями",
        "Поддержка начинающих артистов на всех этапах производства"
      ],
      achievements: [
        "Ведение двух собственных музыкальных проектов",
        "Поддержка начинающих артистов на всех этапах производства",
        "Создание профессиональной студии с современным оборудованием",
        "Налаживание дистрибуции и продвижения музыкальных проектов"
      ],
      technologies: ["Ableton Live", "Logic Pro", "Cubase", "Звукозапись", "Мастеринг"]
    },
    {
      company: "ООО \"НикаДжаз\"",
      role: "Основатель, операционный менеджер",
      type: "Яндекс.Такси",
      description: "Организация и управление таксопарком на платформе Яндекс.Такси",
      responsibilities: [
        "Организация деятельности таксопарка на платформе Яндекс.Такси",
        "Управление командой водителей, контроль технического состояния автомобилей",
        "Решение операционных и логистических задач",
        "Оптимизация маршрутов и повышение эффективности работы",
        "Контроль качества обслуживания клиентов"
      ],
      achievements: [
        "Успешный запуск и организация работы таксопарка",
        "Эффективное управление автопарком и персоналом",
        "Оптимизация операционных процессов",
        "Высокие рейтинги качества обслуживания"
      ],
      technologies: ["Яндекс.Такси", "Логистика", "Управление персоналом"],
      note: "Проект приостановлен в связи с внешними обстоятельствами (пандемия)"
    },
    {
      company: "Собственный бизнес",
      role: "Основатель, руководитель",
      type: "Многопрофильная деятельность",
      description: "Комплексный опыт ведения различных направлений бизнеса",
      responsibilities: [
        "Магазин музыкальных инструментов: полный цикл запуска от поиска поставщиков до продаж и обслуживания клиентов",
        "Юридическое сопровождение сделок, ведение документации, работа с договорами",
        "Прокат звукового и светового оборудования: организация прокатной деятельности",
        "Техническое обеспечение мероприятий — от частных вечеринок до концертных площадок",
        "Швейное производство чехлов для инструментов: разработка прототипов, проектирование лекал",
        "Подбор материалов и оборудования, оптимизация производственных процессов"
      ],
      achievements: [
        "Успешное ведение многопрофильного бизнеса в течение 13 лет",
        "Создание устойчивой клиентской базы в музыкальной сфере",
        "Внедрение учёта затрат и повышение маржинальности за счёт автоматизации",
        "Развитие собственного производства с нуля"
      ],
      technologies: ["Торговля", "Производство", "Логистика", "Управление бизнесом"]
    },
    {
      company: "Профессиональный лицей №21, г. Георгиевск",
      role: "Преподаватель музыки и организатор мероприятий",
      type: "Образование",
      description: "Преподавательская деятельность и организация культурных мероприятий",
      responsibilities: [
        "Преподавание музыкальных дисциплин: теория, инструмент, исполнительское мастерство",
        "Руководство творческими коллективами, постановка номеров, организация выступлений",
        "Планирование и проведение школьных и городских мероприятий",
        "Развитие творческих способностей учащихся",
        "Подготовка к конкурсам и фестивалям"
      ],
      achievements: [
        "Успешная подготовка учащихся к конкурсам",
        "Организация масштабных культурных мероприятий",
        "Развитие музыкального образования в регионе",
        "Положительные отзывы от администрации и студентов"
      ],
      technologies: ["Педагогика", "Музыкальное образование", "Организация мероприятий"]
    },
    {
      company: "Комитет по делам молодёжи при администрации города Георгиевска",
      role: "Специалист по молодёжной политике",
      type: "Государственная служба",
      description: "Работа с молодёжью и реализация государственных программм",
      responsibilities: [
        "Участие в разработке и реализации молодёжных программм и инициатив",
        "Организация культурных, образовательных и спортивных мероприятий",
        "Координация работы молодёжных клубов и творческих объединений",
        "Взаимодействие с образовательными учреждениями и общественными организациями",
        "Мониторинг и анализ ситуации в молодёжной среде"
      ],
      achievements: [
        "Системный подход к вовлечению, мотивации и развитию активной молодёжи",
        "Укрепление навыков проектного управления и коммуникации",
        "Реализация успешных молодёжных инициатив",
        "Развитие партнёрских отношений с общественными организациями"
      ],
      technologies: ["Государственное управление", "Работа с молодёжью", "Проектное управление"]
    },
    {
      company: "Семейный бизнес",
      role: "Различные роли: от уборщика до управляющего",
      type: "Придорожное кафе",
      description: "Полное погружение в процессы общепита с различных позиций",
      responsibilities: [
        "Полное погружение в процессы общепита: от закупок до клиентского сервиса",
        "Внедрение систем контроля качества и учёта затрат",
        "Организация тематических мероприятий и вечеринок",
        "Разработка программм лояльности, работа с клиентской базой",
        "Проведение ремонтных работ, оптимизация внутренних процессов"
      ],
      achievements: [
        "Изучение бизнеса с различных позиций и уровней ответственности",
        "Повышение эффективности работы заведения",
        "Создание лояльной клиентской базы",
        "Опыт кризисного управления и адаптации к изменениям"
      ],
      technologies: ["Общепит", "Клиентский сервис", "Управление процессами"]
    }
  ];

  const skills = [
    { 
      category: "Технические навыки", 
      items: [
        "HTML/CSS, PHP, MySQL",
        "CMS (WordPress, OpenCart)", 
        "Построение локальных сетей",
        "Работа с DAW (Ableton, Logic Pro, Cubase)",
        "Звукозапись и мастеринг",
        "Пользователь ПК, офисные приложения"
      ]
    },
    { 
      category: "Маркетинг и продвижение", 
      items: [
        "Контекстная реклама (Google, Яндекс)",
        "SEO, SMM, веб-аналитика", 
        "Продвижение брендов",
        "Работа с маркетплейсами",
        "Бизнес-аналитика",
        "Разработка и продвижение сайтов"
      ]
    },
    { 
      category: "Управление и бизнес", 
      items: [
        "Управление проектами",
        "Оптимизация бизнес-процессов", 
        "Автоматизация процессов",
        "Управление клиентскими базами",
        "Логистика и закупки",
        "Переговоры, продажи, сервис"
      ]
    },
    { 
      category: "Творчество и образование", 
      items: [
        "Организация мероприятий",
        "Преподавание и наставничество",
        "Работа с молодёжью",
        "Музыкальное производство",
        "Event-менеджмент",
        "Координация творческих проектов"
      ]
    }
  ];

  const portfolio = [
    {
      title: "Веб-разработка и IT-решения",
      description: "Создание сайтов и интернет-магазинов для бизнеса",
      image: "/img/9dfc999b-1457-455c-9e7d-2e1c3c770f6b.jpg",
      category: "IT",
      technologies: ["WordPress", "PHP", "MySQL", "SEO"],
      results: "Рост продаж клиентов на 30-70%"
    },
    {
      title: "Музыкальные проекты",
      description: "Студия звукозаписи и продвижение артистов",
      image: "/img/9913c6a2-1ab1-4f5e-9e81-464e6ea284dd.jpg",
      category: "Музыка",
      technologies: ["Ableton Live", "Logic Pro", "Мастеринг"],
      results: "2 собственных проекта, поддержка начинающих артистов"
    },
    {
      title: "Event-менеджмент",
      description: "Организация и техническое обеспечение мероприятий",
      image: "/img/e235c8f3-849a-48cc-ba84-a7caae29efb5.jpg",
      category: "События",
      technologies: ["Звук", "Свет", "Организация"],
      results: "От частных вечеринок до крупных концертов"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-slate-900">Николай Пантелеев</h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {[
                  { id: 'home', label: 'Главная' },
                  { id: 'about', label: 'Обо мне' },
                  { id: 'experience', label: 'Опыт' },
                  { id: 'portfolio', label: 'Портфолио' },
                  { id: 'skills', label: 'Навыки' },
                  { id: 'contact', label: 'Контакты' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeSection === item.id
                        ? 'bg-blue-600 text-white'
                        : 'text-slate-700 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
                Николай
                <span className="block text-blue-600">Пантелеев</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Многопрофильный специалист с опытом в IT, музыкальной индустрии, 
                event-менеджменте и образовании. Готов к участию в проектах 
                развития бизнеса и поддержки творческой молодёжи.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-slate-600">
                  <Icon name="MapPin" size={16} />
                  <span>Георгиевск, Ставропольский край</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <Icon name="Phone" size={16} />
                  <span>+7 (961) 494-71-75</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <Icon name="Mail" size={16} />
                  <span>nikajazz@yandex.ru</span>
                </div>
              </div>
              <div className="flex gap-4">
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                >
                  Связаться со мной
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => scrollToSection('about')}
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3"
                >
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <div className="relative">
                <img 
                  src="/img/4b05b54d-d478-44e4-a798-604f2fec9d94.jpg" 
                  alt="Николай Пантелеев" 
                  className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
                />
                <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-4 rounded-xl shadow-lg">
                  <div className="text-2xl font-bold">15+</div>
                  <div className="text-sm">лет опыта</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Профессиональные сферы</h2>
            <p className="text-xl text-slate-600">Опыт работы в различных областях для комплексного подхода к задачам</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <Card className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in">
                    <CardHeader className="text-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon name={service.icon} size={32} className="text-blue-600" />
                      </div>
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="flex items-center gap-3">
                      <Icon name={service.icon} size={24} className="text-blue-600" />
                      {service.title}
                    </DialogTitle>
                    <DialogDescription className="text-base">
                      {service.description}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">Услуги и компетенции:</h4>
                      <ul className="space-y-2">
                        {service.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Icon name="Check" size={16} className="text-green-500 mt-1 flex-shrink-0" />
                            <span className="text-slate-600">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="font-semibold mb-3">Достижения и результаты:</h4>
                      <ul className="space-y-2">
                        {service.results.map((result, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Icon name="TrendingUp" size={16} className="text-blue-500 mt-1 flex-shrink-0" />
                            <span className="text-slate-600">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {service.technologies && (
                      <>
                        <Separator />
                        <div>
                          <h4 className="font-semibold mb-3">Технологии и инструменты:</h4>
                          <div className="flex flex-wrap gap-2">
                            {service.technologies.map((tech, idx) => (
                              <Badge key={idx} variant="secondary">{tech}</Badge>
                            ))}
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Опыт работы</h2>
            <p className="text-xl text-slate-600">Ключевые этапы профессионального развития</p>
          </div>
          
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <Card className="cursor-pointer animate-fade-in hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-8">
                      <div className="grid md:grid-cols-3 gap-6">
                        <div>
                          <h3 className="text-xl font-bold text-slate-900 mb-2">{exp.company}</h3>
                          <p className="text-blue-600 font-medium mb-1">{exp.role}</p>
                          <Badge variant="outline" className="mt-2">{exp.type}</Badge>
                        </div>
                        <div className="md:col-span-2">
                          <p className="text-slate-600 mb-4">{exp.description}</p>
                          <h4 className="font-semibold mb-3">Ключевые достижения:</h4>
                          <ul className="space-y-2">
                            {exp.achievements.slice(0, 3).map((achievement, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <Icon name="Award" size={16} className="text-blue-500 mt-1 flex-shrink-0" />
                                <span className="text-slate-600">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                          <p className="text-blue-600 mt-2 text-sm">Нажмите для подробностей →</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-xl">{exp.company}</DialogTitle>
                    <DialogDescription className="text-base">
                      <span className="font-medium text-blue-600">{exp.role}</span> • {exp.type}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-6">
                    <p className="text-slate-700">{exp.description}</p>
                    
                    <div>
                      <h4 className="font-semibold mb-3">Основные обязанности:</h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Icon name="CheckCircle" size={16} className="text-green-500 mt-1 flex-shrink-0" />
                            <span className="text-slate-600">{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-semibold mb-3">Достижения и результаты:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Icon name="TrendingUp" size={16} className="text-blue-500 mt-1 flex-shrink-0" />
                            <span className="text-slate-600">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {exp.technologies && (
                      <>
                        <Separator />
                        <div>
                          <h4 className="font-semibold mb-3">Технологии и инструменты:</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, idx) => (
                              <Badge key={idx} variant="secondary">{tech}</Badge>
                            ))}
                          </div>
                        </div>
                      </>
                    )}

                    {exp.note && (
                      <>
                        <Separator />
                        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                          <p className="text-yellow-800 font-medium">Примечание:</p>
                          <p className="text-yellow-700">{exp.note}</p>
                        </div>
                      </>
                    )}
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Портфолио проектов</h2>
            <p className="text-xl text-slate-600">Примеры реализованных проектов в разных сферах</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <Card key={index} className="overflow-hidden animate-fade-in hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-blue-600 text-white">{project.category}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                  <p className="text-slate-600 mb-4">{project.description}</p>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-sm text-slate-700 mb-2">Технологии:</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">{tech}</Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-sm text-slate-700 mb-1">Результат:</h4>
                      <p className="text-sm text-slate-600">{project.results}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Навыки и компетенции</h2>
            <p className="text-xl text-slate-600">Технические и управленческие навыки</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <Card key={index} className="animate-fade-in">
                <CardHeader>
                  <CardTitle className="text-lg text-center">{skillGroup.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {skillGroup.items.map((skill, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-slate-600">{skill}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Key Qualities */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Ключевые качества</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="text-center p-6">
                <Icon name="Brain" size={32} className="mx-auto mb-4 text-blue-600" />
                <h4 className="font-semibold mb-2">Аналитическое мышление</h4>
                <p className="text-slate-600 text-sm">Способность анализировать данные и прогнозировать риски</p>
              </Card>
              <Card className="text-center p-6">
                <Icon name="Target" size={32} className="mx-auto mb-4 text-blue-600" />
                <h4 className="font-semibold mb-2">Ориентация на результат</h4>
                <p className="text-slate-600 text-sm">Опыт реализации проектов "от идеи до запуска"</p>
              </Card>
              <Card className="text-center p-6">
                <Icon name="Zap" size={32} className="mx-auto mb-4 text-blue-600" />
                <h4 className="font-semibold mb-2">Гибкость и адаптивность</h4>
                <p className="text-slate-600 text-sm">Быстро осваиваю новые сферы и инструменты</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-8">Готов к сотрудничеству</h2>
            <p className="text-xl mb-12 max-w-3xl mx-auto">
              Открыт к участию в проектах по управлению бизнесом, цифровому маркетингу, 
              организации мероприятий и поддержке творческой молодёжи.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Контактная информация</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Icon name="Phone" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Телефон</h4>
                    <p>+7 (961) 494-71-75</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Icon name="Mail" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p>nikajazz@yandex.ru</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Icon name="MapPin" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Локация</h4>
                    <p>Георгиевск, Ставропольский край</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-white/10 rounded-lg">
                <h4 className="font-semibold mb-2">Готов к сотрудничеству</h4>
                <p className="text-sm">Удалённая, частичная или полная занятость, проектное взаимодействие и партнёрство</p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Отправить сообщение</h3>
              <Card className="bg-white/10 border-white/20">
                <CardContent className="p-6">
                  <form className="space-y-4">
                    <div>
                      <Label htmlFor="name" className="text-white">Имя</Label>
                      <Input id="name" placeholder="Ваше имя" className="bg-white/20 border-white/30 text-white placeholder:text-white/60" />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-white">Email</Label>
                      <Input id="email" type="email" placeholder="your@email.com" className="bg-white/20 border-white/30 text-white placeholder:text-white/60" />
                    </div>
                    <div>
                      <Label htmlFor="subject" className="text-white">Тема</Label>
                      <Input id="subject" placeholder="Тема сообщения" className="bg-white/20 border-white/30 text-white placeholder:text-white/60" />
                    </div>
                    <div>
                      <Label htmlFor="message" className="text-white">Сообщение</Label>
                      <Textarea id="message" placeholder="Расскажите о вашем проекте..." rows={4} className="bg-white/20 border-white/30 text-white placeholder:text-white/60" />
                    </div>
                    <Button className="w-full bg-white text-blue-600 hover:bg-white/90">
                      Отправить сообщение
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Quote */}
          <div className="text-center mt-16">
            <blockquote className="text-xl italic border-l-4 border-white/30 pl-6 max-w-2xl mx-auto">
              "Идеи, которые работают сегодня, завтра могут устареть. Главное — уметь адаптироваться, учиться и действовать."
            </blockquote>
            <p className="mt-4 text-white/80">— Николай Пантелеев</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;