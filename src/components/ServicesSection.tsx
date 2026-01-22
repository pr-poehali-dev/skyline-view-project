import { Zap, Home, Lightbulb, Settings, Shield, Plug } from 'lucide-react';

const services = [
  {
    icon: Zap,
    title: 'Монтаж проводки',
    description: 'Прокладка электропроводки в квартирах, домах и офисах. Скрытая и открытая проводка по всем стандартам безопасности.'
  },
  {
    icon: Home,
    title: 'Установка щитков',
    description: 'Монтаж и замена электрощитов, автоматических выключателей, УЗО. Правильная схема защиты вашего дома.'
  },
  {
    icon: Lightbulb,
    title: 'Освещение',
    description: 'Установка люстр, бра, светильников. Монтаж светодиодной подсветки и систем умного освещения.'
  },
  {
    icon: Settings,
    title: 'Ремонт и обслуживание',
    description: 'Диагностика и устранение неисправностей. Замена розеток, выключателей, ремонт электропроводки.'
  },
  {
    icon: Shield,
    title: 'Заземление',
    description: 'Монтаж систем заземления и молниезащиты. Обеспечение безопасности электросети вашего объекта.'
  },
  {
    icon: Plug,
    title: 'Подключение техники',
    description: 'Профессиональное подключение бытовой техники, электроплит, водонагревателей, кондиционеров.'
  }
];

export default function ServicesSection() {
  return (
    <section className="bg-zinc-50 py-24">
      <div className="container mx-auto px-8 md:px-16">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-light text-zinc-900 md:text-5xl">
            Наши услуги
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-zinc-600">
            Выполняем полный спектр электромонтажных работ для квартир, домов и коммерческих объектов
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.title}
                className="group rounded-2xl bg-white p-8 shadow-sm transition-all hover:shadow-xl"
              >
                <div className="mb-6 inline-flex rounded-xl bg-zinc-900 p-4 transition-transform group-hover:scale-110">
                  <IconComponent className="text-white" size={32} />
                </div>
                <h3 className="mb-3 text-2xl font-light text-zinc-900">
                  {service.title}
                </h3>
                <p className="text-zinc-600">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <button className="rounded-full bg-zinc-900 px-8 py-4 text-lg font-light text-white transition-all hover:bg-zinc-800 hover:shadow-lg">
            Заказать консультацию
          </button>
        </div>
      </div>
    </section>
  );
}