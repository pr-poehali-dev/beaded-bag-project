import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const techniques = [
    {
      name: 'Плетение в одну нить',
      level: 'Начинающий',
      difficulty: 1,
      time: '30-45 мин',
      description: 'Основная техника для простых браслетов и колец',
      skills: ['Держание иглы', 'Базовые узлы', 'Равномерное натяжение'],
      icon: 'Circle'
    },
    {
      name: 'Плоское плетение',
      level: 'Начинающий',
      difficulty: 2,
      time: '1-2 часа',
      description: 'Создание плоских узоров и простых орнаментов',
      skills: ['Чтение схем', 'Работа с цветом', 'Геометрические узоры'],
      icon: 'Square'
    },
    {
      name: 'Объёмное плетение',
      level: 'Средний',
      difficulty: 3,
      time: '2-4 часа',
      description: 'Создание объёмных форм и декоративных элементов',
      skills: ['3D моделирование', 'Сложные схемы', 'Каркасные техники'],
      icon: 'Box'
    },
    {
      name: 'Плетение на станке',
      level: 'Продвинутый',
      difficulty: 4,
      time: '4-8 часов',
      description: 'Профессиональная техника для больших изделий',
      skills: ['Работа со станком', 'Сложные орнаменты', 'Художественное плетение'],
      icon: 'Settings'
    }
  ];

  const masterClasses = [
    {
      title: 'Простая сумка-мешочек',
      level: 'Начинающий',
      duration: '2 урока',
      materials: ['Бисер 2-3 цветов', 'Леска 0.3мм', 'Игла для бисера'],
      steps: [
        'Подготовка материалов и рабочего места',
        'Создание основы методом плоского плетения',
        'Формирование боковых стенок',
        'Плетение ручек и закрепление'
      ]
    },
    {
      title: 'Сумка с геометрическим узором',
      level: 'Средний',
      duration: '4 урока',
      materials: ['Бисер 4-5 цветов', 'Нить для бисера', 'Подкладочная ткань'],
      steps: [
        'Разработка схемы узора',
        'Плетение передней панели',
        'Создание задней панели и боковин',
        'Сборка и отделка изделия'
      ]
    },
    {
      title: 'Вечерняя сумочка-клатч',
      level: 'Продвинутый',
      duration: '6 уроков',
      materials: ['Бисер премиум-класса', 'Металлическая фурнитура', 'Замок-защёлка'],
      steps: [
        'Создание выкройки и расчёт материалов',
        'Плетение лицевой стороны с декором',
        'Изготовление внутренней части',
        'Установка фурнитуры и финальная сборка'
      ]
    }
  ];

  const sources = [
    {
      category: 'Книги и учебники',
      items: [
        'Татьяна Ткаченко "Плетение из бисера" - базовый учебник',
        'Елена Виноградова "Бисероплетение для начинающих"',
        'Наталья Кузьмина "Сумки и аксессуары из бисера"'
      ]
    },
    {
      category: 'Онлайн-ресурсы',
      items: [
        'YouTube канал "Бисероплетение с нуля"',
        'Сайт biserok.org - схемы и мастер-классы',
        'Форум рукодельниц needlework.ru'
      ]
    },
    {
      category: 'Материалы и инструменты',
      items: [
        'Магазин "Рукоделие" - качественный бисер',
        'Интернет-магазин beads.ru',
        'Швейные принадлежности в "Ткани и фурнитура"'
      ]
    }
  ];

  const getDifficultyColor = (level: number) => {
    switch (level) {
      case 1: return 'bg-green-100 text-green-800';
      case 2: return 'bg-yellow-100 text-yellow-800';
      case 3: return 'bg-orange-100 text-orange-800';
      case 4: return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Начинающий': return 'bg-primary/10 text-primary';
      case 'Средний': return 'bg-secondary/10 text-secondary';
      case 'Продвинутый': return 'bg-accent/10 text-accent';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-accent/5">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <Icon name="Sparkles" size={24} className="text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Сумки из бисера ручной работы</h1>
              <p className="text-gray-600">Образовательный проект для 9 класса</p>
            </div>
          </div>
          
          <nav className="flex gap-2">
            <Button 
              variant={activeSection === 'overview' ? 'default' : 'outline'}
              onClick={() => setActiveSection('overview')}
              className="flex items-center gap-2"
            >
              <Icon name="Home" size={16} />
              Обзор
            </Button>
            <Button 
              variant={activeSection === 'techniques' ? 'default' : 'outline'}
              onClick={() => setActiveSection('techniques')}
              className="flex items-center gap-2"
            >
              <Icon name="Zap" size={16} />
              Техники
            </Button>
            <Button 
              variant={activeSection === 'masterclass' ? 'default' : 'outline'}
              onClick={() => setActiveSection('masterclass')}
              className="flex items-center gap-2"
            >
              <Icon name="Play" size={16} />
              Мастер-классы
            </Button>
            <Button 
              variant={activeSection === 'sources' ? 'default' : 'outline'}
              onClick={() => setActiveSection('sources')}
              className="flex items-center gap-2"
            >
              <Icon name="BookOpen" size={16} />
              Источники
            </Button>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Overview Section */}
        {activeSection === 'overview' && (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center py-12">
              <img 
                src="/img/8ad1b68e-6c4d-4997-983b-bf03b8f76af1.jpg" 
                alt="Материалы для бисероплетения"
                className="w-full max-w-2xl mx-auto rounded-xl shadow-lg mb-8"
              />
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Искусство создания сумок из бисера
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Изучите древнее искусство бисероплетения и создайте уникальные сумки ручной работы. 
                От простых мешочков до элегантных вечерних клатчей - освойте все техники поэтапно.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Icon name="Target" size={32} className="text-primary mb-2" />
                  <CardTitle>Цели проекта</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Изучить основы бисероплетения</li>
                    <li>• Освоить различные техники</li>
                    <li>• Создать практичные изделия</li>
                    <li>• Развить творческие навыки</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Icon name="TrendingUp" size={32} className="text-secondary mb-2" />
                  <CardTitle>Уровни сложности</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm">Начинающий (1-2 урок)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <span className="text-sm">Средний (3-4 урока)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <span className="text-sm">Продвинутый (5+ уроков)</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Icon name="Clock" size={32} className="text-accent mb-2" />
                  <CardTitle>Временные затраты</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Простая сумка:</span>
                      <span className="font-medium">2-3 часа</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Средней сложности:</span>
                      <span className="font-medium">6-8 часов</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Сложный проект:</span>
                      <span className="font-medium">12+ часов</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Techniques Section */}
        {activeSection === 'techniques' && (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Техники бисероплетения</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Изучите основные техники от простых до сложных, следуя нашей системе уровней сложности
              </p>
            </div>

            <div className="grid gap-6">
              {techniques.map((technique, index) => (
                <Card key={index} className="hover:shadow-lg transition-all hover:scale-[1.02]">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                          <Icon name={technique.icon as any} size={20} className="text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{technique.name}</CardTitle>
                          <CardDescription className="mt-1">{technique.description}</CardDescription>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Badge className={getLevelColor(technique.level)}>
                          {technique.level}
                        </Badge>
                        <Badge className={getDifficultyColor(technique.difficulty)}>
                          Уровень {technique.difficulty}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                          <Icon name="Clock" size={16} />
                          Время изучения: {technique.time}
                        </h4>
                        <h4 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                          <Icon name="CheckCircle" size={16} />
                          Навыки для освоения:
                        </h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {technique.skills.map((skill, skillIndex) => (
                            <li key={skillIndex} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                              {skill}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex items-center justify-center">
                        <div className="w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                          <Icon name={technique.icon as any} size={40} className="text-gray-600" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Master Classes Section */}
        {activeSection === 'masterclass' && (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Мастер-классы</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Пошаговые уроки по созданию сумок различной сложности с подробными инструкциями
              </p>
            </div>

            <div className="space-y-6">
              {masterClasses.map((masterClass, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl flex items-center gap-2">
                          <Icon name="Play" size={20} />
                          {masterClass.title}
                        </CardTitle>
                        <CardDescription className="mt-2">
                          Продолжительность: {masterClass.duration}
                        </CardDescription>
                      </div>
                      <Badge className={getLevelColor(masterClass.level)}>
                        {masterClass.level}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Tabs defaultValue="materials" className="w-full">
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="materials">Материалы</TabsTrigger>
                        <TabsTrigger value="steps">Этапы работы</TabsTrigger>
                      </TabsList>
                      <TabsContent value="materials" className="mt-4">
                        <div className="space-y-2">
                          <h4 className="font-medium text-gray-900 flex items-center gap-2">
                            <Icon name="Package" size={16} />
                            Необходимые материалы:
                          </h4>
                          <ul className="space-y-1">
                            {masterClass.materials.map((material, materialIndex) => (
                              <li key={materialIndex} className="flex items-center gap-2 text-sm text-gray-600">
                                <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                                {material}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </TabsContent>
                      <TabsContent value="steps" className="mt-4">
                        <div className="space-y-3">
                          <h4 className="font-medium text-gray-900 flex items-center gap-2">
                            <Icon name="List" size={16} />
                            Пошаговый план:
                          </h4>
                          {masterClass.steps.map((step, stepIndex) => (
                            <div key={stepIndex} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                              <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-medium">
                                {stepIndex + 1}
                              </div>
                              <span className="text-sm text-gray-700">{step}</span>
                            </div>
                          ))}
                        </div>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Sources Section */}
        {activeSection === 'sources' && (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Источники и ресурсы</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Полезные материалы, книги, сайты и магазины для изучения бисероплетения
              </p>
            </div>

            <div className="space-y-6">
              {sources.map((source, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="BookOpen" size={20} />
                      {source.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible>
                      <AccordionItem value="items">
                        <AccordionTrigger className="text-left">
                          Показать ресурсы ({source.items.length})
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-3 pt-2">
                            {source.items.map((item, itemIndex) => (
                              <div key={itemIndex} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                                <Icon name="ExternalLink" size={16} className="text-primary mt-0.5" />
                                <span className="text-sm text-gray-700">{item}</span>
                              </div>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Lightbulb" size={20} />
                  Полезные советы для начинающих
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <p>• Начинайте с простых проектов и постепенно усложняйте задачи</p>
                  <p>• Покупайте качественный бисер - от этого зависит итоговый результат</p>
                  <p>• Обязательно делайте образцы перед началом основной работы</p>
                  <p>• Работайте при хорошем освещении, чтобы не портить зрение</p>
                  <p>• Ведите дневник проектов с фотографиями и заметками</p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;