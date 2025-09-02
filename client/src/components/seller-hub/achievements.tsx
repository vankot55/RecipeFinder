import { Award, Star, Trophy, Target } from "lucide-react";

export default function Achievements() {
  const badges = [
    {
      id: "seo-master",
      title: "Майстер SEO",
      description: "Завершено курс з оптимізації товарних карток",
      icon: Target,
      color: "bg-purple-100 text-purple-600 border-purple-200",
      earned: true
    },
    {
      id: "photo-expert",
      title: "Експерт з фотоконтенту",
      description: "Пройдено навчання з професійної фотографії товарів",
      icon: Star,
      color: "bg-blue-100 text-blue-600 border-blue-200",
      earned: true
    },
    {
      id: "customer-guru",
      title: "Гуру роботи з клієнтами",
      description: "Отримано високий рейтинг клієнтського сервісу",
      icon: Trophy,
      color: "bg-yellow-100 text-yellow-600 border-yellow-200",
      earned: false
    },
    {
      id: "sales-champion",
      title: "Чемпіон продажів",
      description: "Досягнуто цілей по продажам за місяць",
      icon: Award,
      color: "bg-green-100 text-green-600 border-green-200",
      earned: false
    }
  ];

  return (
    <div className="bg-white rounded-lg border border-border p-6">
      <h3 className="text-lg font-semibold text-foreground mb-4">Мої досягнення</h3>
      <div className="grid grid-cols-2 gap-4">
        {badges.map((badge) => {
          const IconComponent = badge.icon;
          return (
            <div 
              key={badge.id}
              className={`${badge.color} rounded-lg border p-4 text-center ${badge.earned ? '' : 'opacity-50'}`}
              data-testid={`badge-${badge.id}`}
            >
              <div className="flex justify-center mb-2">
                <IconComponent className="w-6 h-6" />
              </div>
              <h4 className="font-medium text-sm mb-1">{badge.title}</h4>
              <p className="text-xs opacity-80">{badge.description}</p>
              {badge.earned && (
                <div className="mt-2">
                  <span className="text-xs bg-white bg-opacity-50 px-2 py-1 rounded">Отримано</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}