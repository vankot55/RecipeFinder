export default function TopBar() {
  return (
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
          <span className="text-sm text-muted-foreground" data-testid="balance-amount">
            ₴ 19 900,56 грн
          </span>
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-medium">А</span>
          </div>
        </div>
      </div>
    </header>
  );
}
