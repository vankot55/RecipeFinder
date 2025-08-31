import { Search } from "lucide-react";

export default function WelcomeSection() {
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
          className="w-full px-4 py-3 pl-10 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          data-testid="search-input"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
      </div>
    </section>
  );
}
