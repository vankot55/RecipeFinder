import { AlertCircle, Clock } from "lucide-react";

export default function AssignedCourse() {
  return (
    <section>
      <h2 className="section-title">Вам призначили курс</h2>
      <div className="hub-card p-6 border-l-4 border-l-orange-500 bg-gradient-to-r from-orange-50 to-white">
        <div className="flex items-start space-x-4">
          <div className="p-2 bg-orange-100 rounded-lg">
            <AlertCircle className="w-5 h-5 text-orange-600" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Робота зі спірними замовленнями
            </h3>
            <div className="space-y-2 mb-4">
              <p className="text-sm text-gray-600">
                <span className="font-medium">Призначено:</span> Адміністрація Rozetka
              </p>
              <div className="flex items-center text-sm text-gray-600">
                <Clock className="w-4 h-4 mr-1" />
                <span className="font-medium">Пройти до:</span>
                <span className="text-red-600 font-medium ml-1">25.09.2025</span>
              </div>
            </div>
            <p className="text-sm text-gray-700 mb-4">
              Обов'язковий курс для всіх продавців щодо правильного вирішення конфліктних ситуацій 
              та роботи з проблемними замовленнями.
            </p>
            <button 
              className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              data-testid="start-assigned-course"
            >
              Почати курс
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}