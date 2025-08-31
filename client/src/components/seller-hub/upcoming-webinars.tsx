export default function UpcomingWebinars() {
  const webinars = [
    {
      date: "25 Вересня",
      title: "Ефективна реклама на Rozetka: нові інструменти та стратегії",
      description: "Дізнайтесь про останні оновлення рекламних інструментів та як їх використовувати для збільшення продажів.",
      icon: "🎯"
    },
    {
      date: "30 Вересня",
      title: "Підготовка до осінньо-зимового сезону: тренди та стратегії",
      description: "Як підготувати ваш асортимент до найактивнішого періоду року та максимізувати прибуток.",
      icon: "🍂"
    }
  ];

  return (
    <section>
      <h2 className="text-xl font-semibold text-foreground mb-4">Найближчі вебінари</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {webinars.map((webinar, index) => (
          <div 
            key={index}
            className="bg-white rounded-lg border border-border p-6 card-hover"
            data-testid={`webinar-${index}`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="text-sm text-primary font-medium mb-1">{webinar.date}</div>
                <h3 className="font-medium text-foreground mb-2">{webinar.title}</h3>
                <p className="text-sm text-muted-foreground">{webinar.description}</p>
              </div>
              <div className="ml-4 text-xl">{webinar.icon}</div>
            </div>
            <button 
              className="w-full bg-secondary text-secondary-foreground border border-border px-4 py-2 rounded-lg font-medium hover:bg-accent transition-colors duration-200"
              data-testid={`register-webinar-${index}`}
            >
              Зареєструватися
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
