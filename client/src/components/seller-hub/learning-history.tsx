import { TrendingUp, CheckCircle } from "lucide-react";

export default function LearningHistory() {
  const completedCourses = [
    {
      title: "Основи SEO для ваших товарів",
      completedDate: "15.08.2025",
      impact: { type: "metric", value: "+12% до переглядів товару", icon: TrendingUp }
    },
    {
      title: "Створення ефективних описів товарів",
      completedDate: "08.08.2025",
      impact: { type: "metric", value: "+8% до конверсії", icon: TrendingUp }
    },
    {
      title: "Основи роботи з замовленнями",
      completedDate: "02.08.2025",
      impact: { type: "test", value: null, icon: CheckCircle }
    }
  ];

  return (
    <section>
      <h2 className="text-xl font-semibold text-foreground mb-4">Історія навчання</h2>
      <div className="bg-white rounded-lg border border-border">
        {completedCourses.map((course, index) => {
          const IconComponent = course.impact.icon;
          return (
            <div 
              key={index}
              className="flex items-center justify-between p-4 border-b border-border last:border-b-0"
              data-testid={`completed-course-${index}`}
            >
              <div className="flex-1">
                <h3 className="font-medium text-foreground">{course.title}</h3>
                <div className="flex items-center space-x-4 mt-1">
                  <p className="text-sm text-muted-foreground">Завершено: {course.completedDate}</p>
                  {course.impact.type === "metric" && course.impact.value && (
                    <div className="flex items-center space-x-1 text-sm text-green-600">
                      <IconComponent className="w-3 h-3" />
                      <span>{course.impact.value}</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex items-center space-x-2">
                {course.impact.type === "test" ? (
                  <button 
                    className="bg-[#00A046] hover:bg-[#00864a] text-white px-3 py-1 rounded text-sm font-medium transition-colors duration-200"
                    data-testid={`test-knowledge-${index}`}
                  >
                    Перевірити знання
                  </button>
                ) : null}
                <button 
                  className="text-primary hover:text-primary/80 text-sm font-medium"
                  data-testid={`review-course-${index}`}
                >
                  Переглянути знову
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
