import { useState } from "react";
import { ArrowLeft, CheckCircle, Circle } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import Sidebar from "@/components/seller-hub/sidebar";
import TopBar from "@/components/seller-hub/top-bar";

interface Task {
  id: string;
  title: string;
  action: string;
  completed: boolean;
}

interface Module {
  id: string;
  title: string;
  description: string;
  tasks: Task[];
}

export default function LearningPlan() {
  const [modules, setModules] = useState<Module[]>([
    {
      id: "module-1",
      title: "Модуль 1: Базові налаштування та операції",
      description: "Налаштуйте свій магазин та підготуйте його до роботи",
      tasks: [
        { id: "task-1-1", title: "Налаштувати перевізників (НП, УП та ін.)", action: "Перейти до налаштувань", completed: true },
        { id: "task-1-2", title: "Підключити безпечні оплати Rozetka Pay", action: "Активувати", completed: true },
        { id: "task-1-3", title: "Встановити мобільний додаток Seller", action: "Завантажити", completed: false },
        { id: "task-1-4", title: "Керувати цінами та наявністю товарів", action: "Дізнатись більше", completed: false }
      ]
    },
    {
      id: "module-2", 
      title: "Модуль 2: Реклама, Продажі, Контент",
      description: "Залучіть перших покупців та навчіться якісно обробляти замовлення",
      tasks: [
        { id: "task-2-1", title: "Вивчити інструменти Реклами", action: "Читати інструкцію", completed: true },
        { id: "task-2-2", title: "Організувати роботу над замовленнями та пакуванням", action: "Вимоги перевізників", completed: true },
        { id: "task-2-3", title: "Налаштувати ефективне спілкування з покупцями", action: "Створити шаблони", completed: false },
        { id: "task-2-4", title: "Створити якісний контент для карток товарів", action: "Переглянути поради", completed: false }
      ]
    },
    {
      id: "module-3",
      title: "Модуль 3: Масштабування",
      description: "Розвивайте свій бізнес та збільшуйте прибуток на Rozetka",
      tasks: [
        { id: "task-3-1", title: "Розглянути переваги Фулфілменту (FBR)", action: "Дізнатись про FBR", completed: false },
        { id: "task-3-2", title: "Проаналізувати можливості для збільшення асортименту", action: "Переглянути аналітику", completed: false },
        { id: "task-3-3", title: "Покращити контент (Rich-контент, відеоогляди)", action: "Завантажити інструкцію", completed: false },
        { id: "task-3-4", title: "Підготуватися до участі в промоактивностях", action: "Календар акцій", completed: false }
      ]
    }
  ]);

  const totalTasks = modules.reduce((total, module) => total + module.tasks.length, 0);
  const completedTasks = modules.reduce((total, module) => 
    total + module.tasks.filter(task => task.completed).length, 0
  );
  const progressPercentage = Math.round((completedTasks / totalTasks) * 100);

  const toggleTask = (moduleId: string, taskId: string) => {
    setModules(prevModules => 
      prevModules.map(module => 
        module.id === moduleId 
          ? {
              ...module,
              tasks: module.tasks.map(task => 
                task.id === taskId 
                  ? { ...task, completed: !task.completed }
                  : task
              )
            }
          : module
      )
    );
  };

  const getModuleProgress = (module: Module) => {
    const completed = module.tasks.filter(task => task.completed).length;
    return Math.round((completed / module.tasks.length) * 100);
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 bg-background">
        <TopBar />
        <div className="p-6">
          {/* Header */}
          <div className="mb-6">
            <button 
              onClick={() => window.history.back()}
              className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors duration-200 mb-4"
              data-testid="back-to-hub"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Назад до Seller Hub</span>
            </button>
            
            <h1 className="text-2xl font-semibold text-foreground mb-2">
              Навчальний план: Старт на Rozetka: від реєстрації до першого продажу
            </h1>
            
            {/* Overall Progress */}
            <div className="bg-white rounded-lg border border-border p-6 mb-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-medium text-foreground">Загальний прогрес</h2>
                <span className="text-sm text-muted-foreground" data-testid="progress-text">
                  Виконано {completedTasks} з {totalTasks} завдань
                </span>
              </div>
              <Progress value={progressPercentage} className="h-3" />
              <div className="text-right mt-2">
                <span className="text-sm font-medium text-foreground">{progressPercentage}%</span>
              </div>
            </div>
          </div>

          {/* Modules */}
          <div className="space-y-8">
            {modules.map((module) => {
              const moduleProgress = getModuleProgress(module);
              return (
                <div key={module.id} className="bg-white rounded-lg border border-border p-6">
                  <div className="mb-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold text-foreground">{module.title}</h3>
                      <span className="text-sm text-muted-foreground">{moduleProgress}%</span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4">{module.description}</p>
                    <Progress value={moduleProgress} className="h-2" />
                  </div>

                  <div className="space-y-3">
                    {module.tasks.map((task) => (
                      <div 
                        key={task.id}
                        className={`flex items-center justify-between p-4 border border-border rounded-lg transition-all duration-200 ${
                          task.completed 
                            ? 'bg-muted/50 opacity-75' 
                            : 'bg-white hover:bg-muted/30'
                        }`}
                        data-testid={`task-${task.id}`}
                      >
                        <div className="flex items-center space-x-3 flex-1">
                          <button
                            onClick={() => toggleTask(module.id, task.id)}
                            className="flex-shrink-0"
                            data-testid={`checkbox-${task.id}`}
                          >
                            {task.completed ? (
                              <CheckCircle className="w-5 h-5 text-[#00A046]" />
                            ) : (
                              <Circle className="w-5 h-5 text-muted-foreground hover:text-foreground" />
                            )}
                          </button>
                          <span 
                            className={`font-medium ${
                              task.completed 
                                ? 'text-muted-foreground line-through' 
                                : 'text-foreground'
                            }`}
                          >
                            {task.title}
                          </span>
                        </div>
                        <button 
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                            task.completed
                              ? 'bg-muted text-muted-foreground cursor-not-allowed'
                              : 'bg-[#00A046] hover:bg-[#00864a] text-white'
                          }`}
                          disabled={task.completed}
                          data-testid={`action-${task.id}`}
                        >
                          {task.action}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Completion Message */}
          {completedTasks === totalTasks && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center mt-8">
              <h3 className="text-lg font-semibold text-green-800 mb-2">🎉 Вітаємо з завершенням курсу!</h3>
              <p className="text-green-700 mb-4">
                Ви успішно завершили всі завдання базового курсу "Старт на Rozetka". 
                Тепер ви готові до активних продажів на платформі.
              </p>
              <button className="bg-[#00A046] hover:bg-[#00864a] text-white px-6 py-3 rounded-lg font-medium">
                Перейти до розширених курсів
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}