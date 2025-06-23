import React from 'react';
import { TrendingUp, Users, Leaf, Shield, DollarSign, Heart } from 'lucide-react';

const Impact: React.FC = () => {
  const economicImpacts = [
    {
      icon: TrendingUp,
      title: 'Tăng Thu Nhập Nông Dân',
      value: '+45%',
      description: 'Tăng thu nhập trung bình thông qua tiếp cận thị trường trực tiếp và giá bán cao cấp'
    },
    {
      icon: DollarSign,
      title: 'Giảm Chi Phí Vận Hành',
      value: '-35%',
      description: 'Tiết kiệm chi phí nhờ tự động hóa và tối ưu hóa quản lý tài nguyên'
    },
    {
      icon: Leaf,
      title: 'Giảm Lãng Phí',
      value: '-60%',
      description: 'Giảm lãng phí thực phẩm nhờ dự báo tốt hơn và tối ưu hóa chuỗi cung ứng'
    }
  ];

  const socialImpacts = [
    {
      icon: Users,
      title: 'Niềm Tin Người Tiêu Dùng',
      value: '95%',
      description: 'Người tiêu dùng báo cáo tăng niềm tin vào an toàn thực phẩm và chất lượng'
    },
    {
      icon: Shield,
      title: 'An Toàn Thực Phẩm',
      value: '99.9%',
      description: 'Độ chính xác truy xuất nguồn gốc để nhận diện nhanh nguồn nhiễm bẩn'
    },
    {
      icon: Heart,
      title: 'Phát Triển Bền Vững',
      value: '-40%',
      description: 'Minh bạch hệ thống thúc đẩy người dân sản xuất minh bạch, sạch và bền vững'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Tác Động Của Chúng Tôi
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            QRFarm tạo ra những tác động tích cực đo lường được trên các khía cạnh kinh tế và xã hội, 
            chuyển đổi cuộc sống và cộng đồng thông qua đổi mới nông nghiệp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Economic Impact */}
          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Tác Động Kinh Tế</h3>
              <p className="text-gray-600 mt-2">Thúc đẩy tăng trưởng tài chính và thịnh vượng</p>
            </div>
            
            <div className="space-y-6">
              {economicImpacts.map((impact, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-green-50 rounded-xl">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <impact.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-gray-900">{impact.title}</h4>
                      <span className="text-2xl font-bold text-green-600">{impact.value}</span>
                    </div>
                    <p className="text-gray-600 text-sm">{impact.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social Impact */}
          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Tác Động Xã Hội</h3>
              <p className="text-gray-600 mt-2">Xây dựng niềm tin và phát triển bền vững</p>
            </div>
            
            <div className="space-y-6">
              {socialImpacts.map((impact, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-blue-50 rounded-xl">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <impact.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-gray-900">{impact.title}</h4>
                      <span className="text-2xl font-bold text-blue-600">{impact.value}</span>
                    </div>
                    <p className="text-gray-600 text-sm">{impact.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Global Impact Stats */}
        <div className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Tác Động Toàn Cầu đến năm 2050
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">10M+</div>
              <div className="text-gray-300">Nông Dân Được Trao Quyền</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">50B+</div>
              <div className="text-gray-300">Sản Phẩm Được Truy Xuất</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">$100B+</div>
              <div className="text-gray-300">Giá Trị Được Tạo Ra</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">100+</div>
              <div className="text-gray-300">Quốc Gia Phục Vụ</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;