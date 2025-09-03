import { Award, Star } from "lucide-react";
import { useState } from "react";
import Achievements from "./achievements";

export default function TopBar() {
  const [showAchievements, setShowAchievements] = useState(false);

  return (
    <>
      <header className="bg-white border-b border-border px-6 py-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-semibold text-foreground" data-testid="page-title">
              Seller Hub
            </h1>
            <p className="text-sm text-muted-foreground">
              Ваш центр знань для зростання бізнесу на Rozetka
            </p>
          </div>
          <div className="flex items-center space-x-4">
            {/* Experience Points */}
            <div className="flex items-center space-x-3">
              <div className="experience-points">
                <Star className="w-4 h-4 mr-1 inline" />
                1,250 XP
              </div>
              <div className="text-xs text-gray-500">Рівень 5</div>
            </div>
            
            <span className="text-sm text-muted-foreground" data-testid="balance-amount">
              ₴ 19 900,56 грн
            </span>
            <button
              onClick={() => setShowAchievements(!showAchievements)}
              className="p-2 rounded-lg hover:bg-muted transition-colors duration-200"
              data-testid="achievements-button"
            >
              <Award className="w-5 h-5 text-[#00A046]" />
            </button>
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-medium">А</span>
            </div>
          </div>
        </div>
      </header>
      
      {showAchievements && (
        <div className="bg-muted px-6 py-4 border-b border-border">
          <Achievements />
        </div>
      )}
    </>
  );
}
