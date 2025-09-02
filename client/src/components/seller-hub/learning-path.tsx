import { Progress } from "@/components/ui/progress";
import { Link } from "wouter";

export default function LearningPath() {
  // Calculate progress based on completed tasks (4 out of 12 tasks completed = 33%)
  const completedTasks = 4;
  const totalTasks = 12;
  const progressPercentage = Math.round((completedTasks / totalTasks) * 100);

  return (
    <section>
      <h2 className="text-xl font-semibold text-foreground mb-4">Мій шлях навчання</h2>
      <div className="bg-white rounded-lg border border-border p-6 card-hover">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-lg font-medium text-foreground mb-2" data-testid="course-title">
              Старт на Rozetka: від реєстрації до першого продажу
            </h3>
            <p className="text-muted-foreground text-sm mb-3">
              Комплексний курс для початківців, який допоможе вам розпочати успішні продажі на платформі Rozetka. 
              Ви дізнаєтесь про реєстрацію, створення товарних карток та основи маркетингу.
            </p>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <span>⏱️ Приблизно 2 години</span>
              <span>📚 {completedTasks} з {totalTasks} завдань завершено</span>
            </div>
          </div>
          <div className="ml-6">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=120" 
              alt="Курс з основ продажів на Rozetka" 
              className="w-32 h-20 object-cover rounded-lg" 
            />
          </div>
        </div>
        
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-foreground">Прогрес курсу</span>
            <span className="text-sm text-muted-foreground" data-testid="progress-percentage">{progressPercentage}%</span>
          </div>
          <Progress value={progressPercentage} className="h-2" />
        </div>
        
        <Link 
          href="/learning-plan"
          className="inline-block rozetka-green rozetka-green-hover text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
          data-testid="continue-learning-button"
        >
          Продовжити навчання
        </Link>
      </div>
    </section>
  );
}
