import { Play } from "lucide-react";

export default function QuickTips() {
  const tips = [
    {
      title: "Як додати відео до картки товару",
      duration: "1:30",
      thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=120",
      views: "2.1K"
    },
    {
      title: "Налаштування автовідповідей",
      duration: "0:45",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=120",
      views: "1.8K"
    },
    {
      title: "Швидке оформлення знижки",
      duration: "2:15",
      thumbnail: "https://images.unsplash.com/photo-1556742111-a301076d9d18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=120",
      views: "3.2K"
    },
    {
      title: "Експорт звітності за день",
      duration: "1:00",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=120",
      views: "987"
    }
  ];

  return (
    <section>
      <h2 className="text-xl font-semibold text-foreground mb-4">Швидкі поради</h2>
      <div className="carousel-container">
        {tips.map((tip, index) => (
          <div 
            key={index}
            className="bg-white rounded-lg border border-border overflow-hidden min-w-64 card-hover cursor-pointer"
            data-testid={`quick-tip-${index}`}
          >
            <div className="relative">
              <img 
                src={tip.thumbnail}
                alt={tip.title}
                className="w-full h-32 object-cover" 
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                <div className="bg-white bg-opacity-90 rounded-full p-2">
                  <Play className="w-4 h-4 text-[#00A046]" />
                </div>
              </div>
              <div className="absolute bottom-2 right-2">
                <span className="bg-black bg-opacity-70 text-white text-xs px-1 py-0.5 rounded">
                  {tip.duration}
                </span>
              </div>
            </div>
            <div className="p-3">
              <h3 className="font-medium text-sm text-foreground mb-1">{tip.title}</h3>
              <p className="text-xs text-muted-foreground">{tip.views} переглядів</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}