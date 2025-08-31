export default function RecommendedCourses() {
  const courses = [
    {
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=180",
      tag: "Робота з товарами",
      title: "Як фотографувати одяг для максимальних продажів",
      description: "Професійні секрети створення привабливих фото товарів модної категорії."
    },
    {
      image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=180",
      tag: "Клієнтський сервіс",
      title: "Робота з розмірними сітками: як уникнути повернень",
      description: "Правильне оформлення розмірів для зменшення кількості повернень товарів."
    },
    {
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=180",
      tag: "Маркетинг",
      title: "Сезонний маркетинг для категорії 'Мода'",
      description: "Стратегії просування модних товарів залежно від сезону та трендів."
    },
    {
      image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=180",
      tag: "Доставка",
      title: "Оптимізація логістики для невеликих товарів",
      description: "Ефективні способи упаковки та доставки одягу та аксесуарів."
    }
  ];

  return (
    <section>
      <h2 className="text-xl font-semibold text-foreground mb-2">Рекомендовані курси</h2>
      <p className="text-sm text-muted-foreground mb-4">
        Підібрано для вас на основі продажів у категорії "Одяг та взуття"
      </p>
      
      <div className="carousel-container">
        {courses.map((course, index) => (
          <div 
            key={index}
            className="bg-white rounded-lg border border-border p-4 min-w-80 card-hover cursor-pointer"
            data-testid={`recommended-course-${index}`}
          >
            <img 
              src={course.image}
              alt={course.title}
              className="w-full h-32 object-cover rounded-lg mb-3" 
            />
            <div className="mb-2">
              <span className="inline-block bg-accent text-accent-foreground text-xs px-2 py-1 rounded">
                {course.tag}
              </span>
            </div>
            <h3 className="font-medium text-foreground mb-2">{course.title}</h3>
            <p className="text-sm text-muted-foreground">{course.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
