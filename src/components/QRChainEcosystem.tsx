import React from 'react';
import { QrCode, Coins, Crown, Users, Zap, Gift } from 'lucide-react';

const QRChainEcosystem: React.FC = () => {
  const features = [
    {
      icon: QrCode,
      title: 'Quét & Nhận Thưởng',
      description: 'Người tiêu dùng có thể quét mã QR trên sản phẩm để xác minh nguồn gốc và nhận phần thưởng token từ hệ thống.',
      benefits: ['Xác minh ngay lập tức', 'Phần thưởng token', 'Lịch sử sản phẩm', 'Đảm bảo chất lượng']
    },
    {
      icon: Coins,
      title: ' Tích lũy Điểm & Đầu tư Cộng Đồng',
      description: 'Người tiêu dùng có thể tích lũy điểm khi tham gia vào hệ sinh thái và hỗ trợ nông dân thông qua việc đặt mua trước sản phẩm mùa vụ.',
      benefits: ['Thu nhập thụ động', 'Lợi ích từ cộng đồng']
    },
    {
      icon: Crown,
      title: 'Mô hình Đồng hành Mùa vụ (Hỗ trợ nông dân)',
      description: 'Mô hình này cho phép nông dân huy động vốn từ người tiêu dùng trước mùa vụ để hỗ trợ quy trình sản xuất mà không phải chờ đến khi thu hoạch.',
      benefits: ['Tài trợ trước mùa vụ', 'Quyền mua trước']
    },
    {
      icon: Users,
      title: 'Quản lý cộng đồng và phân quyền (Quản trị minh bạch)',
      description: 'Mô hình phân quyền cộng đồng sẽ giúp tất cả các bên tham gia có thể đóng góp và đưa ra quyết định trong hệ sinh thái, từ sản xuất đến tiêu thụ.',
      benefits: ['Quyết định minh bạch', 'Phát triển bền vững']
    }
  ];

  return (
    <section id="qrchain" className="py-24 bg-gradient-to-br from-purple-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Hệ Sinh Thái QRChain
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Một hệ sinh thái blockchain cách mạng khen thưởng cho tính minh bạch và 
            thúc đẩy đổi mới nông nghiệp dựa vào cộng đồng.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mr-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{feature.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
              
              <div className="grid grid-cols-2 gap-3">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <div 
                    key={benefitIndex}
                    className="flex items-center p-3 bg-purple-50 rounded-lg"
                  >
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    <span className="text-sm font-medium text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Token Economics */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Kinh Tế Token QRChain
            </h3>
            <p className="text-xl text-purple-100">
              Mô hình token bền vững mang lại phần thưởng cho mọi thành viên trong hệ sinh thái
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Token Tiện Ích</h4>
              <p className="text-purple-200">Dùng cho giao dịch nền tảng, staking và quản trị</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Gift className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Hệ Thống Phần Thưởng</h4>
              <p className="text-purple-200">Kiếm token thông qua quét mã, staking và tham gia đóng góp</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Dựa Vào Cộng Đồng</h4>
              <p className="text-purple-200">Quản trị phi tập trung bởi người nắm giữ token</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QRChainEcosystem;