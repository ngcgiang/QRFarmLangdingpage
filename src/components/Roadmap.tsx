import React from 'react';
import { Calendar, CheckCircle, Clock, Star } from 'lucide-react';

const Roadmap: React.FC = () => {
  const milestones = [
    {
      year: '2025',
      quarter: 'Q3',
      title: 'Hoàn thiện MVP và tích hợp IoT',
      status: 'in-progress',
      items: [
        'Phát triển nền tảng cốt lõi',
        'Hệ thống tạo mã QR',
        'Bảng điều khiển phân tích cơ bản',
        'Hệ thống IoT cơ bản',
      ]
    },
    {
      year: '2025',
      quarter: 'Q4',
      title: 'Thử nghiệm thực tế',
      status: 'upcoming',
      items: [
        'Đào tạo & hướng dẫn nông dân',
        'Tích hợp cảm biến IoT',
        'Phát hành ứng dụng di động',
        'Thử nghiệm với 100 trang trại tại Tây Nguyên'
      ]
    },
    {
      year: '2026',
      quarter: 'Q1',
      title: 'Ra Mắt QRChain Testnet & Mở rộng',
      status: 'upcoming',
      items: [
        'Vận hành hệ thống Tokenomics',
        'Thử nghiệm giao dịch trên Testnet',
        'Phát triển hệ thống ví & dashboard QRChain',
        'Đặt nền móng cho việc ra mắt Mainet'
      ]
    },
    {
      year: '2026',
      quarter: 'Q2',
      title: 'Đánh giá - Hoàn thiện - Nhân rộng',
      status: 'upcoming',
      items: [
        'Đánh giá kết quả giai đoạn thử nghiệm',
        'Cải tiến và hoàn thiện sản phẩm',
        'Mở rộng quy mô người dùng',
        'Chuẩn bị cho bước scale lớn hơn (Toàn quốc)'
      ]
    },
    {
      year: '2026-2033',
      quarter: 'Đa năm',
      title: 'Mở Rộng toàn quốc',
      status: 'planned',
      items: [
        'Triển khai tại các tỉnh có thế mạnh nông sản',
        'Hợp tác với hệ thống siêu thị và kênh phân phối nội địa',
        'Chuẩn hóa hệ thống theo tiêu chuẩn quốc gia',
        'Tăng trưởng mạnh về người dùng & hợp tác xã'
      ]
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-6 h-6 text-green-500" />;
      case 'in-progress':
        return <Clock className="w-6 h-6 text-blue-500" />;
      case 'upcoming':
        return <Calendar className="w-6 h-6 text-orange-500" />;
      case 'planned':
        return <Star className="w-6 h-6 text-purple-500" />;
      default:
        return <Calendar className="w-6 h-6 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'border-green-500 bg-green-50';
      case 'in-progress':
        return 'border-blue-500 bg-blue-50';
      case 'upcoming':
        return 'border-orange-500 bg-orange-50';
      case 'planned':
        return 'border-purple-500 bg-purple-50';
      default:
        return 'border-gray-500 bg-gray-50';
    }
  };

  return (
    <section id="roadmap" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Lộ Trình Dự Án
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hành trình chiến lược của chúng tôi từ sản phẩm MVP đến chuyển đổi nông nghiệp toàn cầu, 
            kéo dài trong thập kỷ tới với nhiều đổi mới và phát triển.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-500 via-blue-500 to-purple-500 hidden lg:block"></div>
          
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div 
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                }`}
              >
                <div className="flex-1">
                  <div className={`p-8 rounded-2xl border-2 ${getStatusColor(milestone.status)} hover:shadow-lg transition-all duration-300`}>
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-sm font-semibold text-gray-600 mb-1">
                          {milestone.year} • {milestone.quarter}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">{milestone.title}</h3>
                      </div>
                      {getStatusIcon(milestone.status)}
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {milestone.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-gray-400 rounded-full mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Timeline node */}
                <div className="relative flex items-center justify-center h-40">
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 z-0"></div>

                    <div className="z-10 bg-white w-16 h-16 rounded-full border-4 border-green-500 flex items-center justify-center shadow-lg">
                      <span className="text-lg font-bold text-green-600">{index + 1}</span>
                    </div>
                </div>
                <div className="flex-1 lg:block hidden"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Metrics */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-12">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Mục Tiêu Tầm Nhìn 2040
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">7M+</div>
              <div className="text-green-200">Hộ nông nghiệp Kết Nối</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">$150B+</div>
              <div className="text-green-200">Giá Trị Nông Nghiệp</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">34</div>
              <div className="text-green-200">Tỉnh được triển khai</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">Zero</div>
              <div className="text-green-200">Lãng Phí Thực Phẩm</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
