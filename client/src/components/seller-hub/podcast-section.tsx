import { Play, Pause, SkipBack, SkipForward } from "lucide-react";
import { useState } from "react";

export default function PodcastSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(8); // minutes
  const totalTime = 32; // minutes
  const progress = (currentTime / totalTime) * 100;

  const currentEpisode = {
    title: "Як збільшити продажі в низький сезон: стратегії для fashion-ретейлерів",
    duration: "32 хв",
    description: "Розбираємо ефективні методи підтримки продажів в період спаду попиту",
    coverImage: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=120&h=120"
  };

  return (
    <section>
      <h2 className="text-xl font-semibold text-foreground mb-4">Seller Hub Подкаст</h2>
      <div className="bg-white rounded-lg border border-border p-6">
        <div className="flex items-center space-x-4">
          {/* Cover Image */}
          <img 
            src={currentEpisode.coverImage}
            alt="Podcast cover"
            className="w-16 h-16 rounded-lg object-cover flex-shrink-0" 
          />
          
          {/* Episode Info and Controls */}
          <div className="flex-1 min-w-0">
            <h3 className="font-medium text-foreground mb-1 line-clamp-2">{currentEpisode.title}</h3>
            <p className="text-sm text-muted-foreground mb-3">{currentEpisode.description}</p>
            
            {/* Player Controls */}
            <div className="flex items-center space-x-3">
              <button className="p-1 hover:bg-muted rounded transition-colors duration-200">
                <SkipBack className="w-4 h-4 text-muted-foreground" />
              </button>
              
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-2 bg-[#00A046] hover:bg-[#00864a] rounded-full transition-colors duration-200"
                data-testid="podcast-play-button"
              >
                {isPlaying ? (
                  <Pause className="w-4 h-4 text-white" />
                ) : (
                  <Play className="w-4 h-4 text-white ml-0.5" />
                )}
              </button>
              
              <button className="p-1 hover:bg-muted rounded transition-colors duration-200">
                <SkipForward className="w-4 h-4 text-muted-foreground" />
              </button>
              
              {/* Progress Bar */}
              <div className="flex-1 mx-4">
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
                  <span>{currentTime} хв</span>
                  <span>{totalTime} хв</span>
                </div>
                <div className="w-full bg-muted rounded-full h-1">
                  <div 
                    className="bg-[#00A046] h-1 rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-border">
          <button 
            className="text-primary hover:text-primary/80 text-sm font-medium"
            data-testid="all-episodes-link"
          >
            Всі випуски →
          </button>
        </div>
      </div>
    </section>
  );
}