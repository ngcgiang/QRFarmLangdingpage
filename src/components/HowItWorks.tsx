import React from 'react';
import { Smartphone, Database, Cpu, Award, CheckCircle} from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: Smartphone,
      title: 'Thu Thập Dữ Liệu',
      description: 'Nông dân nhập dữ liệu cây trồng, điều kiện đất và phương pháp canh tác thông qua ứng dụng di động thân thiện của chúng tôi.',
      details: ['Giao diện ứng dụng di động', 'Tích hợp cảm biến IoT', 'Nhập liệu thủ công', 'Tài liệu hình ảnh']
    },
    {
      icon: Cpu,
      title: 'Phân Tích AI',
      description: 'Thuật toán học máy xử lý dữ liệu để cung cấp thông tin chi tiết, dự đoán và khuyến nghị.',
      details: [' Phân tích hành trình tiêu thụ', 'Dự báo nhu cầu thị trường', 'Cảnh báo hàng tồn kho', 'Hỗ trợ quyết định phân phối']
    },
    {
      icon: Database,
      title: 'Ghi Nhận Blockchain',
      description: 'Tất cả dữ liệu và giao dịch được ghi lại an toàn trên blockchain để truy xuất nguồn gốc bất biến.',
      details: ['Dữ liệu bất biến', 'Hợp đồng thông minh', 'Theo dõi chuỗi cung ứng', 'Lịch sử minh bạch']
    },
    {
      icon: Award,
      title: 'Chứng Nhận NFT',
      description: 'Sản phẩm nhận được chứng chỉ kỹ thuật số độc đáo xác minh tính xác thực và tiêu chuẩn chất lượng.',
      details: ['Chứng chỉ kỹ thuật số', 'Xác minh chất lượng', 'Xác thực nguồn gốc', 'Truy cập người tiêu dùng']
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Cách Thức Hoạt Động
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Quy trình hợp lý của chúng tôi kết hợp công nghệ tiên tiến với giao diện 
            thân thiện người dùng để tạo ra trải nghiệm liền mạch cho cả nông dân và người tiêu dùng.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          
          <div className="space-y-16 lg:space-y-24">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                }`}
              >
                <div className="flex-1">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-green-600 mb-2">BƯỚC {index + 1}</div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{step.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {step.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {step.details.map((detail, detailIndex) => (
                      <div 
                        key={detailIndex}
                        className="flex items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors duration-300"
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex-1">
                  <div className="relative">
                    <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-12 h-80">
                      <div className="flex items-center justify-center h-full">
                        <step.icon className="w-32 h-32 text-white/90" />
                      </div>
                      
                      {/* Step Number */}
                      <div className="absolute top-6 right-6 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="text-2xl font-bold text-white">{index + 1}</span>
                      </div>
                      
                      {/* Arrow for next step */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Implementation Timeline */}
        <div className="mt-24 bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Tiến Trình Triển Khai</h3>
            <p className="text-xl text-gray-300">Bắt đầu sử dụng nền tảng của chúng tôi chỉ với vài bước đơn giản</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { phase: 'Tuần 1', title: 'Thiết Lập & Đào Tạo', description: 'Tạo tài khoản và cấu hình ban đầu' },
              { phase: 'Tuần 2-3', title: 'Tích Hợp Dữ Liệu', description: 'Kết nối hệ thống và nguồn dữ liệu hiện có' },
              { phase: 'Tuần 4', title: 'Đào Tạo & Kiểm Thử', description: 'Đào tạo đội ngũ và xác nhận hệ thống' },
              { phase: 'Tuần 5+', title: 'Triển Khai Hoàn Chỉnh', description: 'Hoàn tất triển khai và hỗ trợ liên tục' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{index + 1}</span>
                </div>
                <div className="text-green-400 font-semibold mb-2">{item.phase}</div>
                <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;