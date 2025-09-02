import { AlertTriangle, TrendingUp, Gift, Camera } from "lucide-react";

export default function ShopOpportunities() {
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
      icon: Gift,
      iconColor: "text-green-500",
      bgColor: "bg-green-50 border-green-200",
      title: "Ви ще не використовуєте Промокоди",
      description: "Пройдіть короткий туторіал та залучіть більше покупців за допомогою знижок.",
      action: "Налаштувати промокоди",
      actionColor: "bg-green-500 hover:bg-green-600"
    }
  ];

  return (
    <section>
      <h2 className="text-xl font-semibold text-foreground mb-4">Можливості для вашого магазину</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {opportunities.map((opportunity, index) => {
          const IconComponent = opportunity.icon;
          return (
            <div 
              key={index}
              className={`${opportunity.bgColor} rounded-lg border p-4 card-hover`}
              data-testid={`shop-opportunity-${index}`}
            >
              <div className="flex items-start space-x-3">
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