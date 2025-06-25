import React from 'react';
import { TrendingUp, Leaf, Users, Shield, Clock, DollarSign } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Tăng Năng Suất',
      description: 'Phân tích AI giúp nông dân, doanh nghiệp tối ưu hóa hoạt động, dẫn đến tăng lợi nhuận.',
      color: 'text-blue-600'
    },
    {
      icon: Leaf,
      title: 'Canh Tác Bền Vững',
      description: 'Minh bạch giúp người dân nâng cao ý thức canh tác sạch, an toàn và thân thiện với môi trường.',
      color: 'text-green-600'
    },
    {
      icon: Users,
      title: 'Niềm Tin Người Tiêu Dùng',
      description: 'Tính minh bạch hoàn toàn trong chuỗi cung ứng xây dựng mối quan hệ bền chặt giữa nông dân và người tiêu dùng.',
      color: 'text-purple-600'
    },
    {
      icon: Shield,
      title: 'Ngăn Chặn Gian Lận',
      description: 'Xác minh blockchain loại bỏ sản phẩm giả mạo và đảm bảo thực phẩm chính hãng đến tay người tiêu dùng.',
      color: 'text-red-600'
    },
    {
      icon: Clock,
      title: 'Tiết Kiệm Thời Gian',
      description: 'Quy trình tự động hóa và hợp đồng thông minh giúp giảm thời gian quản lý hành chính.',
      color: 'text-orange-600'
    },
    {
      icon: DollarSign,
      title: 'Giảm Chi Phí',
      description: 'Tối ưu hóa việc sử dụng tài nguyên và giảm lãng phí dẫn đến tiết kiệm chi phí đáng kể cho nông dân.',
      color: 'text-emerald-600'
    }
  ];

  return (
    <section id="benefits" className="py-24 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Lợi Ích Đo Lường Được
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nền tảng của chúng tôi mang lại những cải tiến cụ thể, đo lường được trên 
            mọi khía cạnh của sản xuất nông nghiệp và quản lý chuỗi cung ứng.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="flex items-center justify-between mb-6">
                <div className={`w-16 h-16 ${benefit.color.replace('text-', 'bg-')}/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              
              <div className="mt-6 pt-4 border-t border-gray-100">
                <div className={`w-full bg-gray-200 rounded-full h-2`}>
                </div>
              </div>
            </div>
          ))}
        </div>
     </div>
    </section>
  );
};

export default Benefits;