export default function Sidebar() {
  const menuItems = [
    { icon: "📊", title: "Панель управління", active: false },
    { icon: "📦", title: "Замовлення", active: false },
    { icon: "🏪", title: "Продавець з ROZETKA", active: false },
    { icon: "🛒", title: "Вигода", active: false },
    { icon: "📈", title: "Товари", active: false },
    { icon: "💰", title: "Управління продажами", active: false },
    { icon: "📱", title: "Мобі бонус", active: false },
    { icon: "🎯", title: "Управління операціями", active: false },
    { icon: "📊", title: "Аналітика", active: false },
    { icon: "🏪", title: "Підпроюючи", active: false },
    { icon: "📞", title: "Модуль", active: false },
    { icon: "💳", title: "Конфігурація", active: false },
    { icon: "💬", title: "Контакти", active: false },
    { icon: "📄", title: "Документооборот", active: false },
    { icon: "🎓", title: "Seller Hub", active: true },
  ];

  return (
    <aside className="sidebar-bg w-60 flex-shrink-0">
      <div className="p-4 border-b border-gray-600">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-[#00A046] rounded flex items-center justify-center">
            <span className="text-white font-bold text-lg">R</span>
          </div>
          <span className="text-white font-semibold">ROZETKA</span>
          <span className="text-xs text-gray-400">Маркетплейс</span>
        </div>
      </div>
      
      <nav className="py-4">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className={`sidebar-item ${item.active ? 'active' : ''}`}
            data-testid={`sidebar-item-${item.title.toLowerCase().replace(/\s+/g, '-')}`}
          >
            <span className="mr-3">{item.icon}</span>
            <span>{item.title}</span>
          </a>
        ))}
      </nav>
    </aside>
  );
}
