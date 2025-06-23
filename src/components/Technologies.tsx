import React from 'react';
import { Brain, Shield, Award, BarChart3, Zap, Lock } from 'lucide-react';

const Technologies: React.FC = () => {
  const technologies = [
    {
      icon: Brain,
      title: 'Trí Tuệ Nhân Tạo & Học Máy',
      description: 'AI và mạng nơ-ron đồ thị (GNN) phân tích dữ liệu hành trình và xu hướng tiêu thụ để dự báo nhu cầu thị trường, cảnh báo hàng tồn kho và hỗ trợ doanh nghiệp nông sản ra quyết định chính xác, hiệu quả.',
      features: [
        'Dự báo nhu cầu thị trường',
        'Phân tích xu hướng tiêu thụ',
        'Cảnh báo hàng tồn kho',
        'Hỗ trợ quyết định phân phối'
      ],
    color: 'from-blue-500 to-purple-600'
    },
    {
      icon: Shield,
      title: 'Công Nghệ Blockchain',
      description: 'Công nghệ sổ cái bất biến đảm bảo tính minh bạch và khả năng truy xuất hoàn toàn trong toàn bộ chuỗi cung ứng nông nghiệp.',
      features: ['Theo dõi chuỗi cung ứng', 'Dữ liệu bất biến', 'Hợp đồng thông minh', 'Lưu trữ phi tập trung'],
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Award,
      title: 'Xác Thực Sản Phẩm NFT',
      description: 'Chứng chỉ kỹ thuật số độc đáo xác minh tính xác thực, nguồn gốc và chất lượng sản phẩm, xây dựng niềm tin với người tiêu dùng và ngăn chặn gian lận.',
      features: ['Chứng chỉ kỹ thuật số', 'Xác minh nguồn gốc', 'Đảm bảo chất lượng', 'Chống hàng giả'],
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="technology" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Công Nghệ Tiên Tiến
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nền tảng của chúng tôi tận dụng những công nghệ tiên tiến nhất để cách mạng hóa nông nghiệp 
            và tạo ra một hệ sinh thái thực phẩm minh bạch, hiệu quả và bền vững.
          </p>
        </div>

        <div className="space-y-16">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
            >
              <div className="flex-1">
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${tech.color} rounded-2xl flex items-center justify-center mr-4`}>
                    <tech.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">{tech.title}</h3>
                </div>
                
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {tech.description}
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {tech.features.map((feature, featureIndex) => (
                    <div 
                      key={featureIndex}
                      className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                    >
                      <div className={`w-3 h-3 bg-gradient-to-r ${tech.color} rounded-full mr-3`}></div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex-1">
                <div className={`relative bg-gradient-to-r ${tech.color} rounded-3xl p-8 h-80`}>
                  <div className="absolute inset-0 bg-black/10 rounded-3xl"></div>
                  <div className="relative z-10 flex items-center justify-center h-full">
                    <tech.icon className="w-32 h-32 text-white/90" />
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full"></div>
                  <div className="absolute bottom-6 left-6 w-6 h-6 bg-white/20 rounded-full"></div>
                  <div className="absolute top-1/2 left-4 w-4 h-4 bg-white/20 rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Integration Section */}
        <div className="mt-24 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Tích Hợp Liền Mạch</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="group">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-6 mb-4 group-hover:scale-105 transition-transform duration-300">
                <BarChart3 className="w-12 h-12 text-white mx-auto" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Phân Tích Thời Gian Thực</h4>
              <p className="text-gray-600">Theo dõi và phân tích tất cả luồng dữ liệu theo thời gian thực để có thông tin chi tiết tức thì.</p>
            </div>
            
            <div className="group">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-6 mb-4 group-hover:scale-105 transition-transform duration-300">
                <Zap className="w-12 h-12 text-white mx-auto" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Xử Lý Tức Thời</h4>
              <p className="text-gray-600">Xử lý siêu nhanh đảm bảo phản hồi và hành động ngay lập tức.</p>
            </div>
            
            <div className="group">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-6 mb-4 group-hover:scale-105 transition-transform duration-300">
                <Lock className="w-12 h-12 text-white mx-auto" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Bảo Mật Doanh Nghiệp</h4>
              <p className="text-gray-600">Giao thức bảo mật cấp ngân hàng bảo vệ mọi dữ liệu và giao dịch.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;