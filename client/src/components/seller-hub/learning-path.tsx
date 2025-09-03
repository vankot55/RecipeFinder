import { Progress } from "@/components/ui/progress";
import { Link } from "wouter";
import { useState } from "react";
import { ChevronDown, ChevronUp, Trophy, RotateCcw } from "lucide-react";

export default function LearningPath() {
  const [isExpanded, setIsExpanded] = useState(false);
  // Calculate progress based on completed tasks (4 out of 12 tasks completed = 33%)
  const completedTasks = 4;
  const totalTasks = 12;
  const progressPercentage = Math.round((completedTasks / totalTasks) * 100);

  const modules = [
    {
      title: "Розділ 1: Базові налаштування",
      tasks: [
        { name: "Налаштувати перевізників", completed: true },
        { name: "Підключити Rozetka Pay", completed: true },
        { name: "Встановити мобільний додаток", completed: false },
        { name: "Керувати цінами та наявністю", completed: false }
      ]
    },
    {
      title: "Розділ 2: Реклама та продажі", 
      tasks: [
        { name: "Вивчити інструменти реклами", completed: true },
        { name: "Організувати роботу з замовленнями", completed: true },
        { name: "Налаштувати спілкування з покупцями", completed: false },
        { name: "Створити якісний контент", completed: false }
      ]
    },
    {
      title: "Розділ 3: Масштабування",
      tasks: [
        { name: "Розглянути переваги фулфілменту", completed: false },
        { name: "Проаналізувати можливості асортименту", completed: false },
        { name: "Покращити контент", completed: false },
        { name: "Підготуватися до промоакцій", completed: false }
      ]
    }
  ];

  return (
    <section>
      <h2 className="section-title">Ваш шлях навчання</h2>
      <div className="hub-card p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-foreground mb-2" data-testid="course-title">
              Старт на Rozetka: від реєстрації до першого продажу
            </h3>
            <p className="text-muted-foreground text-sm mb-3">
              Комплексний курс для початківців, який допоможе вам розпочати успішні продажі на платформі Rozetka.
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
            <div className="flex items-center">
              <span className="text-sm text-muted-foreground mr-2" data-testid="progress-percentage">{progressPercentage}%</span>
              <Trophy className="trophy-icon" />
            </div>
          </div>
          <Progress value={progressPercentage} className="h-3" />
        </div>

        <div className="flex gap-3 mb-4">
          <Link 
            href="/learning-plan"
            className="rozetka-green rozetka-green-hover text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
            data-testid="continue-learning-button"
          >
            Продовжити навчання
          </Link>
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            data-testid="show-details-button"
          >
            {isExpanded ? 'Сховати деталі' : 'Показати деталі'}
            {isExpanded ? <ChevronUp className="ml-2 w-4 h-4" /> : <ChevronDown className="ml-2 w-4 h-4" />}
          </button>
        </div>
        
        {/* Expandable Details */}
        <div className={`expandable-card ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="border-t pt-4 space-y-4">
            {modules.map((module, moduleIndex) => (
              <div key={moduleIndex} className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-3">{module.title}</h4>
                <div className="space-y-2">
                  {module.tasks.map((task, taskIndex) => (
                    <div key={taskIndex} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          task.completed 
                            ? 'bg-[#00A046] border-[#00A046]' 
                            : 'border-gray-300'
                        }`}>
                          {task.completed && (
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          )}
                        </div>
                        <span className={`text-sm ${
                          task.completed ? 'text-gray-900' : 'text-gray-700'
                        }`}>
                          {task.name}
                        </span>
                      </div>
                      {task.completed && (
                        <button className="text-gray-400 hover:text-gray-600 p-1 rounded transition-colors duration-200">
                          <RotateCcw className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
