import { ArrowLeft, BookOpen, FileText, Play, Filter } from "lucide-react";
import { useState } from "react";

interface TopicPageProps {
  topicTitle: string;
  onBack: () => void;
}

export default function TopicPage({ topicTitle, onBack }: TopicPageProps) {
  const [activeFilter, setActiveFilter] = useState("all");

  const materials = [
    { type: "course", icon: BookOpen, title: "Основи створення товарних карток", description: "Повний курс з оформлення товарів", duration: "2 години" },
    { type: "article", icon: FileText, title: "Чек-лист: що перевірити перед публікацією", description: "Короткий гайд для швидкої перевірки", duration: "5 хв" },
    { type: "video", icon: Play, title: "Секрети SEO-оптимізації назв товарів", description: "Відео-інструкція з практичними прикладами", duration: "15 хв" },
    { type: "course", icon: BookOpen, title: "Професійна фотографія товарів", description: "Як робити якісні фото без дорогого обладнання", duration: "1.5 години" },
    { type: "article", icon: FileText, title: "Як працювати з характеристиками товарів", description: "Детальний гайд з заповнення атрибутів", duration: "10 хв" }
  ];

  const filters = [
    { id: "all", label: "Усі матеріали" },
    { id: "course", label: "Курси" },
    { id: "article", label: "Статті" },
    { id: "video", label: "Відео" }
  ];

  const filteredMaterials = activeFilter === "all" 
    ? materials 
    : materials.filter(material => material.type === activeFilter);

  return (
    <div className="bg-white rounded-lg border border-border p-6">
      <div className="flex items-center mb-6">
        <button 
          onClick={onBack}
          className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
          data-testid="back-button"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Назад</span>
        </button>
      </div>

      <h1 className="text-2xl font-semibold text-foreground mb-2">{topicTitle}</h1>
      <p className="text-muted-foreground mb-6">
        Усі матеріали за темою "{topicTitle}" зібрані в одному місці для вашої зручності.
      </p>

      <div className="flex items-center space-x-4 mb-6">
        <Filter className="w-4 h-4 text-muted-foreground" />
        <div className="flex space-x-2">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors duration-200 ${
                activeFilter === filter.id
                  ? "bg-[#00A046] text-white"
                  : "bg-muted text-muted-foreground hover:bg-accent"
              }`}
              data-testid={`filter-${filter.id}`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {filteredMaterials.map((material, index) => {
          const IconComponent = material.icon;
          return (
            <div 
              key={index}
              className="flex items-center space-x-4 p-4 border border-border rounded-lg hover:bg-muted cursor-pointer transition-colors duration-200"
              data-testid={`material-${index}`}
            >
              <div className="p-2 bg-accent rounded-lg">
                <IconComponent className="w-5 h-5 text-accent-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-foreground mb-1">{material.title}</h3>
                <p className="text-sm text-muted-foreground mb-1">{material.description}</p>
                <span className="text-xs text-muted-foreground">{material.duration}</span>
              </div>
              <div className="text-sm text-primary font-medium">
                {material.type === "course" ? "Курс" : material.type === "article" ? "Стаття" : "Відео"}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}