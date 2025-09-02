import { AlertTriangle, TrendingUp, Megaphone, Camera, X, Sparkles } from "lucide-react";
import { useState } from "react";

export default function ShopOpportunities() {
  const [dismissedCards, setDismissedCards] = useState<number[]>([]);

  const opportunities = [
    {
      type: "warning",
      icon: AlertTriangle,
      iconColor: "text-orange-500",
      bgColor: "bg-orange-50 border-orange-200",
      title: "Ми помітили, що ваші відправки затримуються",
      description: "Перегляньте курс по оптимізації логістики, щоб покращити свій рейтинг.",
      action: "Переглянути курс",
      actionColor: "bg-orange-500 hover:bg-orange-600"
    },
    {
      type: "tip",
      icon: Camera,
      iconColor: "text-blue-500",
      bgColor: "bg-blue-50 border-blue-200",
      title: "Конверсія товару \"Сукня літня бавовняна\" нижча за середню",
      description: "Дізнайтеся, як створити продаючі фотографії для підвищення конверсії.",
      action: "Покращити фото",
      actionColor: "bg-blue-500 hover:bg-blue-600"
    },
    {
      type: "opportunity",
      icon: Megaphone,
      iconColor: "text-green-500",
      bgColor: "bg-green-50 border-green-200",
      title: "Ви ще не використовуєте Рекламу на Rozetka",
      description: "Пройдіть короткий туторіал та залучіть більше покупців за допомогою реклами.",
      action: "Запустити кампанію",
      actionColor: "bg-green-500 hover:bg-green-600"
    },
    {
      type: "achievement",
      icon: Sparkles,
      iconColor: "text-purple-500",
      bgColor: "bg-purple-50 border-purple-200",
      title: "🎉 Вітаємо! Ваші продажі в категорії \"Сукні\" зросли на 30%",
      description: "За останній місяць ви показали відмінні результати. Дізнайтесь, як масштабувати успіх.",
      action: "Масштабувати успіх",
      actionColor: "bg-purple-500 hover:bg-purple-600"
    }
  ];

  const handleDismiss = (index: number) => {
    setDismissedCards([...dismissedCards, index]);
  };

  const visibleOpportunities = opportunities.filter((_, index) => !dismissedCards.includes(index));

  return (
    <section>
      <h2 className="text-xl font-semibold text-foreground mb-4">Можливості для вашого магазину</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {visibleOpportunities.map((opportunity, originalIndex) => {
          const IconComponent = opportunity.icon;
          const index = opportunities.indexOf(opportunity);
          return (
            <div 
              key={index}
              className={`${opportunity.bgColor} rounded-lg border p-4 card-hover relative`}
              data-testid={`shop-opportunity-${index}`}
            >
              <button
                onClick={() => handleDismiss(index)}
                className="absolute top-2 right-2 p-1 rounded-full hover:bg-white/50 transition-colors duration-200"
                data-testid={`dismiss-opportunity-${index}`}
              >
                <X className="w-4 h-4 text-muted-foreground" />
              </button>
              <div className="flex items-start space-x-3 pr-6">
                <div className={`p-2 rounded-lg bg-white`}>
                  <IconComponent className={`w-5 h-5 ${opportunity.iconColor}`} />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-foreground mb-2">{opportunity.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{opportunity.description}</p>
                  <button 
                    className={`${opportunity.actionColor} text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200`}
                    data-testid={`opportunity-action-${index}`}
                  >
                    {opportunity.action}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}