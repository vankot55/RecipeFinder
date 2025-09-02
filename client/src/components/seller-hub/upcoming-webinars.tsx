export default function UpcomingWebinars() {
  const webinars = [
    {
      date: "25 Вересня",
      title: "Ефективна реклама на Rozetka: нові інструменти та стратегії",
      description: "Дізнайтесь про останні оновлення рекламних інструментів та як їх використовувати для збільшення продажів.",
      icon: "🎯",
      status: "live",
      statusText: "LIVE"
    },
    {
      date: "30 Вересня",
      title: "Підготовка до осінньо-зимового сезону: тренди та стратегії",
      description: "Як підготувати ваш асортимент до найактивнішого períоду року та максимізувати прибуток.",
      icon: "🍂",
      status: "upcoming",
      statusText: ""
    },
    {
      date: "20 Вересня",
      title: "Аналітика продажів: як читати звіти та приймати рішення",
      description: "Навчіться аналізувати дані про продажі та використовувати їх для розвитку бізнесу.",
      icon: "📊",
      status: "recorded",
      statusText: "Запис"
    }
  ];

  const getButtonContent = (webinar: any) => {
    switch (webinar.status) {
      case "live":
        return { text: "Приєднатися до ефіру", color: "bg-red-500 hover:bg-red-600" };
      case "recorded":
        return { text: "Переглянути запис", color: "bg-gray-500 hover:bg-gray-600" };
      default:
        return { text: "Зареєструватися", color: "bg-secondary text-secondary-foreground border border-border hover:bg-accent" };
    }
  };

  return (
    <section>
      <h2 className="text-xl font-semibold text-foreground mb-4">Найближчі вебінари</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {webinars.map((webinar, index) => {
          const buttonContent = getButtonContent(webinar);
          return (
            <div 
              key={index}
              className="bg-white rounded-lg border border-border p-6 card-hover"
              data-testid={`webinar-${index}`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <div className="text-sm text-primary font-medium">{webinar.date}</div>
                    {webinar.statusText && (
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                        webinar.status === "live" 
                          ? "bg-red-100 text-red-600" 
                          : "bg-gray-100 text-gray-600"
                      }`}>
                        {webinar.statusText}
                      </span>
                    )}
                  </div>
                  <h3 className="font-medium text-foreground mb-2">{webinar.title}</h3>
                  <p className="text-sm text-muted-foreground">{webinar.description}</p>
                </div>
                <div className="ml-4 text-xl">{webinar.icon}</div>
              </div>
              <button 
                className={`w-full px-4 py-2 rounded-lg font-medium transition-colors duration-200 text-white ${buttonContent.color}`}
                data-testid={`webinar-action-${index}`}
              >
                {buttonContent.text}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
