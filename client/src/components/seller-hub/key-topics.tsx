import { useState } from "react";
import TopicPage from "./topic-page";

export default function KeyTopics() {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  const topics = [
    { icon: "📦", title: "Робота з товарами" },
    { icon: "📈", title: "Маркетинг та Просування" },
    { icon: "📊", title: "Аналітика та Звіти" },
    { icon: "🚚", title: "Логістика та Доставка" },
    { icon: "👥", title: "Робота з клієнтами" },
    { icon: "⚖️", title: "Юридичні питання" }
  ];

  if (selectedTopic) {
    return (
      <section>
        <TopicPage 
          topicTitle={selectedTopic} 
          onBack={() => setSelectedTopic(null)} 
        />
      </section>
    );
  }

  return (
    <section>
      <h2 className="text-xl font-semibold text-foreground mb-4">Ключові теми</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {topics.map((topic, index) => (
          <div 
            key={index}
            onClick={() => setSelectedTopic(topic.title)}
            className="bg-white rounded-lg border border-border p-6 text-center card-hover cursor-pointer transition-all duration-200 hover:border-primary"
            data-testid={`key-topic-${index}`}
          >
            <div className="text-2xl mb-3">{topic.icon}</div>
            <h3 className="font-medium text-foreground">{topic.title}</h3>
            <p className="text-sm text-muted-foreground mt-2">Переглянути матеріали →</p>
          </div>
        ))}
      </div>
    </section>
  );
}
