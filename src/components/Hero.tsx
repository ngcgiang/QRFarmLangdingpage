import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-green-500 to-emerald-600">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
      </div>

      <div className="relative z-10 mt-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Chuyển đổi Nông nghiệp cùng
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
              QRFarm
            </span>
            Đột phá Công nghệ Số
          </h1>
          
          <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Blockchain mở ra cuộc cách mạng chuyển đổi nông sản thành tài sản số, mang lại minh bạch, khả năng truy xuất nguồn gốc và giá trị công bằng cho người nông dân.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">2 triệu +</div>
              <div className="text-green-200">Hộ & hợp tác xã được kết nối</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">10 triệu+</div>
              <div className="text-green-200">Lô nông sản truy xuất mỗi năm</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">98-99%</div>
              <div className="text-green-200">Tỷ lệ xác thực dữ liệu mục tiêu</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Animation Elements */}
      <div className="absolute top-40 right-20 w-16 h-16 bg-yellow-300/20 rounded-full animate-bounce"></div>
      <div className="absolute bottom-20 left-20 w-12 h-12 bg-orange-400/20 rounded-full animate-pulse delay-1000"></div>
    </section>
  );
};

export default Hero;