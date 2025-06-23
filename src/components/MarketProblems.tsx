import React from 'react';
import { AlertTriangle, Eye, TrendingDown, Users, FileX, DollarSign } from 'lucide-react';

const MarketProblems: React.FC = () => {
  const problems = [
    {
      icon: Eye,
      title: 'Thiếu Minh Bạch',
      description: 'Người tiêu dùng không thể nhìn thấy nguồn gốc, chất lượng và hành trình của sản phẩm thực phẩm.',
      impact: '73% người tiêu dùng muốn biết rõ hơn về nguồn gốc thực phẩm'
    },
    {
      icon: FileX,
      title: 'Nhập Liệu Thủ Công',
      description: 'Hoạt động kho hàng dựa vào hệ thống nhập liệu thủ công dễ sai sót, dẫn đến theo dõi hàng tồn kho không chính xác.',
      impact: '30% sai lệch hàng tồn kho do lỗi nhập liệu thủ công'
    },
    {
      icon: DollarSign,
      title: 'Bất Bình Đẳng Giá Cả',
      description: 'Nông dân nhận giá không công bằng do bất đối xứng thông tin và sự can thiệp của trung gian.',
      impact: 'Nông dân chỉ nhận được 15-20% giá bán lẻ cuối cùng'
    },
    {
      icon: TrendingDown,
      title: 'Dự Báo Thị Trường Kém',
      description: 'Thiếu dữ liệu thời gian thực và phân tích dự đoán dẫn đến sản xuất dư thừa và lãng phí.',
      impact: '40% nông sản bị lãng phí do lập kế hoạch kém'
    },
    {
      icon: Users,
      title: 'Chuỗi Cung Ứng Phân Mảnh',
      description: 'Nhiều trung gian tạo ra sự không hiệu quả và giảm lợi nhuận của nông dân.',
      impact: '5-7 trung gian giữa nông trại và người tiêu dùng'
    },
    {
      icon: AlertTriangle,
      title: 'Vấn Đề An Toàn Thực Phẩm',
      description: 'Khó khăn trong việc truy xuất nguồn gốc sản phẩm bị nhiễm bẩn dẫn đến nguy cơ sức khỏe trên diện rộng.',
      impact: '600 triệu người bị ảnh hưởng bởi bệnh từ thực phẩm hằng năm'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-red-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Các Vấn Đề Thị Trường Chúng Tôi Giải Quyết
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Chuỗi cung ứng nông nghiệp hiện tại đang đối mặt với những thách thức quan trọng 
            mà QRFarm giải quyết thông qua các giải pháp công nghệ đổi mới.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-red-500"
            >
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mr-4">
                  <problem.icon className="w-7 h-7 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{problem.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-4 leading-relaxed">{problem.description}</p>
              
              <div className="bg-red-50 p-3 rounded-lg">
                <p className="text-sm font-semibold text-red-700">{problem.impact}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Solution Preview */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            QRFarm: Giải Pháp Toàn Diện
          </h3>
          <p className="text-xl text-green-100 mb-8 max-w-4xl mx-auto">
            Nền tảng tích hợp của chúng tôi giải quyết mọi thách thức trong chuỗi cung ứng nông nghiệp, 
            từ nông trại đến bàn ăn, bằng cách sử dụng công nghệ tiên tiến và đổi mới blockchain.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">100%</div>
              <div className="text-green-200">Minh Bạch</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">90%</div>
              <div className="text-green-200">Giảm Chi Phí</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">Zero</div>
              <div className="text-green-200">Lỗi Thủ Công</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketProblems;