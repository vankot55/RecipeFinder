import { BookOpen, Lightbulb, Calendar } from "lucide-react";

export default function StatusDashboard() {
  const stats = [
    {
      icon: BookOpen,
      label: "Завершено курсів",
      value: "5/12",
      color: "text-blue-600"
    },
    {
      icon: Lightbulb,
      label: "Нових порад для вас",
      value: "3",
      color: "text-orange-600"
    },
    {
      icon: Calendar,
      label: "Наступний вебінар",
      value: "3 вересня",
      color: "text-green-600"
    }
  ];

  return (
    <section className="mb-6">
      <div className="bg-white rounded-lg border border-border p-4">
        <h3 className="text-sm font-medium text-muted-foreground mb-3">Мій статус</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={index}
                className="flex items-center space-x-3"
                data-testid={`status-stat-${index}`}
              >
                <div className={`p-2 rounded-lg bg-muted`}>
                  <IconComponent className={`w-4 h-4 ${stat.color}`} />
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}