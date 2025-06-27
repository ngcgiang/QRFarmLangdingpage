import React from 'react';
import { CreditCard, Wifi, Coins, BarChart3, ArrowRight } from 'lucide-react';

const BusinessModel: React.FC = () => {
  const revenueStreams = [
    {
      icon: CreditCard,
      title: 'Đăng Ký Dịch Vụ SaaS',
      description: 'Gói đăng ký hàng tháng/năm cho nông dân và doanh nghiệp nông nghiệp',
      percentage: '40%',
      details: ['Cơ bản: 779.000vnđ/tháng', 'Chuyên nghiệp: 2.599.000vnđ/tháng', 'Doanh nghiệp: Tùy chỉnh']
    },
    {
      icon: Wifi,
      title: 'Tích Hợp IoT',
      description: 'Bán thiết bị và dịch vụ dữ liệu cho các thiết bị nông nghiệp thông minh',
      percentage: '25%',
      details: ['Gói cảm biến', 'Dịch vụ lắp đặt', 'Phân tích dữ liệu']
    },
    {
      icon: BarChart3,
      title: 'Phân Tích AI',
      description: 'Báo cáo phân tích cao cấp và dịch vụ thông tin thị trường',
      percentage: '15%',
      details: ['Dự báo thị trường', 'Dự đoán năng suất', 'Báo cáo tùy chỉnh']
    },    
    {
      icon: Coins,
      title: 'Phí Blockchain',
      description: 'Phí giao dịch từ QRChain và hoạt động thị trường NFT',
      percentage: '20%',
      details: ['Giao dịch token', 'Tạo NFT', 'Giao dịch trên sàn']
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Mô Hình Kinh Doanh
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mô hình doanh thu đa dạng đảm bảo tăng trưởng bền vững và tạo giá trị 
            cho tất cả các bên liên quan trong hệ sinh thái nông nghiệp.
          </p>
        </div>

        {/* Revenue Streams */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {revenueStreams.map((stream, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stream.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-green-600 mb-2">{stream.percentage}</div>
                <h3 className="text-xl font-bold text-gray-900">{stream.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-6 text-center">{stream.description}</p>
              
              <div className="space-y-2">
                {stream.details.map((detail, detailIndex) => (
                  <div key={detailIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    {detail}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Business Flow Diagram */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-12">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
                      Quy trình Hoạt Động
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
                          <h4 className="text-lg font-bold text-white mb-2">Thu thập dữ liệu IoT tại kho</h4>
                          <p className="text-green-100 text-sm">Cảm biến và thiết bị IoT ghi nhận thông tin nhiệt độ, độ ẩm, vị trí,… từ nông sản tại kho.</p>
            </div>
            
            <ArrowRight className="w-8 h-8 text-white mx-auto hidden md:block" />
            
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
                          <h4 className="text-lg font-bold text-white mb-2">Tạo mã QR</h4>
                          <p className="text-green-100 text-sm">Mỗi sản phẩm được gắn một mã QR chứa thông tin nhận dạng duy nhất.</p>
            </div>
            
            <ArrowRight className="w-8 h-8 text-white mx-auto hidden md:block" />
            
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
                          <h4 className="text-lg font-bold text-white mb-2">Ghi nhận dữ liệu lên Blockchain</h4>
                          <p className="text-green-100 text-sm">Thông tin sản phẩm được ghi lại minh bạch, không thể chỉnh sửa.</p>
            </div>
            
            <ArrowRight className="w-8 h-8 text-white mx-auto hidden md:block" />
            
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
                          <h4 className="text-lg font-bold text-white mb-2">Người dùng quét QR và tra cứu</h4>
                          <p className="text-green-100 text-sm">Người tiêu dùng quét mã QR để xem thông tin truy xuất nguồn gốc sản phẩm.</p>
                      </div>
            <ArrowRight className="w-8 h-8 text-white mx-auto hidden md:block" />

            <div className="text-center">
                <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">5</span>
                </div>
                          <h4 className="text-lg font-bold text-white mb-2">AI phân tích dữ liệu và xu hướng</h4>
                          <p className="text-green-100 text-sm">Hệ thống AI phân tích dữ liệu chuỗi cung ứng, giúp dự báo nhu cầu và tối ưu sản xuất.</p>
            </div>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessModel;
