import React from 'react';
import { Target, Users, Globe, Award } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: Target,
      title: 'Tạo Tài Sản Số',
      description: 'Chuyển đổi mỗi sản phẩm nông nghiệp thành tài sản số có xác thực với mã QR độc đáo và công nghệ blockchain.'
    },
    {
      icon: Users,
      title: 'Trao Quyền Cho Nông Dân',
      description: 'Cung cấp cho nông dân tiếp cận thị trường trực tiếp, giá cả công bằng và phân tích thông minh từ AI để tối đa hóa tiềm năng và thu nhập.'
    },
    {
      icon: Globe,
      title: 'Chuỗi Cung Ứng Minh Bạch',
      description: 'Tạo khả năng truy xuất nguồn gốc hoàn chỉnh từ trang trại đến bàn ăn, đảm bảo an toàn thực phẩm và xây dựng niềm tin cho người tiêu dùng.'
    },
    {
      icon: Award,
      title: 'Đảm Bảo Chất Lượng',
      description: 'Triển khai xác minh dựa trên blockchain và chứng chỉ NFT để đảm bảo tính xác thực và tiêu chuẩn chất lượng sản phẩm.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Giới Thiệu Về QRFarm
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            QRFarm đang tiên phong trong tương lai của nông nghiệp bằng cách tích hợp công nghệ mã QR, 
            trí tuệ nhân tạo, xác minh blockchain và xác thực sản phẩm dựa trên NFT 
            để tạo ra một hệ sinh thái số toàn diện cho chuỗi cung ứng thực phẩm trong nước nói riêng và toàn cầu nói chúng.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Xây Dựng Tương Lai Của Nền Kinh Tế Nông Nghiệp
          </h3>
          <p className="text-xl text-green-100 mb-8 max-w-4xl mx-auto">
            Nền tảng đổi mới của chúng tôi kết hợp công nghệ mã QR, thuật toán học máy, 
            mạng blockchain phi tập trung và chứng chỉ số độc đáo để tạo ra 
            mức độ minh bạch và hiệu quả chưa từng có trong sản xuất nông nghiệp.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">Mã QR</div>
              <div className="text-green-200">Theo Dõi Sản Phẩm</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">AI</div>
              <div className="text-green-200">Phân tích</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">Blockchain</div>
              <div className="text-green-200">Xác Minh</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">NFT</div>
              <div className="text-green-200">Chứng Chỉ</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;