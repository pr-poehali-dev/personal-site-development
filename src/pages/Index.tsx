import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'skills', 'contact'];
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
        "Разработка и поддержка веб-сайтов и интернет-магазинов",
        "Настройка контекстной рекламы (Google Ads, Яндекс.Директ)",
        "SEO-оптимизация и SMM",
        "Консультации по цифровой трансформации",
        "Внедрение CRM и систем аналитики"
      ],
      results: [
        "Рост онлайн-продаж клиентов на 30–70%",
        "Снижение стоимости привлечения клиента на 25–40%",
        "Увеличение органического трафика за счёт SEO"
      ]
    },
    {
      title: "Музыкальная индустрия",
      icon: "Music",
      description: "Студия звукозаписи, продвижение артистов",
      details: [
        "Профессиональная запись, сведение и мастеринг аудио",
        "Создание аранжировок в DAW (Ableton Live, Logic Pro, Cubase)",
        "Продвижение музыкальных проектов",
        "Обучение основам звукозаписи",
        "Поддержка начинающих артистов"
      ],
      results: [
        "Ведение двух собственных музыкальных проектов",
        "Поддержка артистов на всех этапах производства",
        "Профессиональное оборудование и опыт"
      ]
    },
    {
      title: "Event-менеджмент",
      icon: "Calendar",
      description: "Организация мероприятий и техническое обеспечение",
      details: [
        "Организация и планирование мероприятий",
        "Техническое обеспечение концертных площадок",
        "Прокат звукового и светового оборудования",
        "Полный цикл event-менеджмента",
        "Работа с частными и корпоративными клиентами"
      ],
      results: [
        "Опыт работы от частных вечеринок до крупных концертов",
        "Собственная материально-техническая база",
        "Многолетний опыт в сфере развлечений"
      ]
    },
    {
      title: "Образование и молодёжная политика",
      icon: "GraduationCap",
      description: "Преподавание и работа с молодёжью",
      details: [
        "Преподавание музыкальных дисциплин",
        "Руководство творческими коллективами",
        "Разработка молодёжных программ",
        "Организация образовательных мероприятий",
        "Координация молодёжных клубов"
      ],
      results: [
        "Опыт работы в образовательных учреждениях",
        "Системный подход к развитию молодёжи",
        "Навыки проектного управления"
      ]
    }
  ];

  const experience = [
    {
      company: "ООО \"НикаДжаз\"",
      role: "Основатель, руководитель",
      period: "2020 — настоящее время",
      type: "IT и маркетинговые услуги",
      achievements: [
        "Рост онлайн-продаж клиентов на 30–70%",
        "Снижение стоимости привлечения клиента на 25–40%",
        "Увеличение органического трафика за счёт SEO"
      ]
    },
    {
      company: "ООО \"НикаДжаз\"",
      role: "Основатель, звукорежиссёр, продюсер",
      period: "2023 — настоящее время",
      type: "Студия звукозаписи",
      achievements: [
        "Ведение двух собственных музыкальных проектов",
        "Поддержка начинающих артистов",
        "Профессиональная запись и продвижение"
      ]
    },
    {
      company: "Собственный бизнес",
      role: "Основатель, руководитель",
      period: "2005 — 2018",
      type: "Многопрофильная деятельность",
      achievements: [
        "Магазин музыкальных инструментов",
        "Прокат звукового оборудования",
        "Швейное производство чехлов"
      ]
    }
  ];

  const skills = [
    { category: "Веб-разработка", items: ["HTML/CSS", "PHP", "MySQL", "CMS (WordPress, OpenCart)"] },
    { category: "Маркетинг", items: ["Google Ads", "Яндекс.Директ", "SEO", "SMM", "Аналитика"] },
    { category: "Музыка", items: ["Ableton Live", "Logic Pro", "Cubase", "Звукозапись", "Мастеринг"] },
    { category: "Управление", items: ["Проектный менеджмент", "CRM", "Автоматизация", "Бизнес-процессы"] }
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                <DialogContent className="max-w-2xl">
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
                      <h4 className="font-semibold mb-3">Услуги:</h4>
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
                      <h4 className="font-semibold mb-3">Результаты:</h4>
                      <ul className="space-y-2">
                        {service.results.map((result, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Icon name="TrendingUp" size={16} className="text-blue-500 mt-1 flex-shrink-0" />
                            <span className="text-slate-600">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
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
              <Card key={index} className="animate-fade-in hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{exp.company}</h3>
                      <p className="text-blue-600 font-medium mb-1">{exp.role}</p>
                      <p className="text-slate-500">{exp.period}</p>
                      <Badge variant="outline" className="mt-2">{exp.type}</Badge>
                    </div>
                    <div className="md:col-span-2">
                      <h4 className="font-semibold mb-3">Ключевые достижения:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Icon name="Award" size={16} className="text-blue-500 mt-1 flex-shrink-0" />
                            <span className="text-slate-600">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
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
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Готов к сотрудничеству</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto">
            Открыт к участию в проектах по управлению бизнесом, цифровому маркетингу, 
            организации мероприятий и поддержке творческой молодёжи.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="animate-fade-in">
              <Icon name="Phone" size={32} className="mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Телефон</h3>
              <p>+7 (961) 494-71-75</p>
            </div>
            <div className="animate-fade-in">
              <Icon name="Mail" size={32} className="mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p>nikajazz@yandex.ru</p>
            </div>
            <div className="animate-fade-in">
              <Icon name="MapPin" size={32} className="mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Локация</h3>
              <p>Георгиевск, Ставропольский край</p>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-lg mb-6">Готов к удалённой, частичной или полной занятости, а также к проектному взаимодействию и партнёрству.</p>
            <blockquote className="text-xl italic border-l-4 border-white/30 pl-6 max-w-2xl mx-auto">
              "Идеи, которые работают сегодня, завтра могут устареть. Главное — уметь адаптироваться, учиться и действовать."
            </blockquote>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;