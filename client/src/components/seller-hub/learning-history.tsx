export default function LearningHistory() {
  const completedCourses = [
    {
      title: "Основи SEO для ваших товарів",
      completedDate: "15.08.2025"
    },
    {
      title: "Створення ефективних описів товарів",
      completedDate: "08.08.2025"
    },
    {
      title: "Основи роботи з замовленнями",
      completedDate: "02.08.2025"
    }
  ];

  return (
    <section>
      <h2 className="text-xl font-semibold text-foreground mb-4">Історія навчання</h2>
      <div className="bg-white rounded-lg border border-border">
        {completedCourses.map((course, index) => (
          <div 
            key={index}
            className="flex items-center justify-between p-4 border-b border-border last:border-b-0"
            data-testid={`completed-course-${index}`}
          >
            <div className="flex-1">
              <h3 className="font-medium text-foreground">{course.title}</h3>
              <p className="text-sm text-muted-foreground">Завершено: {course.completedDate}</p>
            </div>
            <button 
              className="text-primary hover:text-primary/80 text-sm font-medium"
              data-testid={`review-course-${index}`}
            >
              Переглянути знову
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
