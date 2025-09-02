import { Search, BookOpen, FileText, Play, Download } from "lucide-react";
import { useState } from "react";

export default function WelcomeSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showResults, setShowResults] = useState(false);

  const searchResults = [
    { type: "course", icon: BookOpen, title: "Курс: Робота з поверненнями товарів", category: "[Курс]" },
    { type: "article", icon: FileText, title: "Стаття: Як обробити повернення в особистому кабінеті", category: "[Стаття з бази знань]" },
    { type: "video", icon: Play, title: "Відео: Швидке оформлення повернення", category: "[Відео]" },
    { type: "template", icon: Download, title: "Шаблон заяви на повернення коштів", category: "[Шаблон]" }
  ];

  const handleSearchFocus = () => {
    if (searchQuery.toLowerCase().includes("повернення")) {
      setShowResults(true);
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    setShowResults(value.toLowerCase().includes("повернення"));
  };

  return (
    <section className="bg-white rounded-lg border border-border p-6">
      <h1 className="text-3xl font-semibold text-foreground mb-2" data-testid="welcome-title">
        Ласкаво просимо до Rozetka Seller Hub
      </h1>
      <p className="text-muted-foreground mb-6">
        Ваш центр знань для зростання бізнесу на Rozetka.
      </p>
      
      <div className="relative max-w-lg">
        <input 
          type="text" 
          placeholder="Знайти відповідь, курс або статтю..."
          value={searchQuery}
          onChange={handleSearchChange}
          onFocus={handleSearchFocus}
          onBlur={() => setTimeout(() => setShowResults(false), 200)}
          className="w-full px-4 py-3 pl-10 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          data-testid="search-input"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
        
        {showResults && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-border rounded-lg shadow-lg z-10">
            {searchResults.map((result, index) => {
              const IconComponent = result.icon;
              return (
                <div 
                  key={index}
                  className="flex items-center px-4 py-3 hover:bg-muted cursor-pointer border-b border-border last:border-b-0"
                  data-testid={`search-result-${index}`}
                >
                  <IconComponent className="w-4 h-4 text-muted-foreground mr-3" />
                  <div className="flex-1">
                    <span className="text-sm text-primary font-medium mr-2">{result.category}</span>
                    <span className="text-sm text-foreground">{result.title}</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
