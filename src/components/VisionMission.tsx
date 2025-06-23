import React from 'react';
import { Eye, Target, Lightbulb, Globe } from 'lucide-react';

const VisionMission: React.FC = () => {
  return (
    <section id="vision" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Tầm Nhìn & Sứ Mệnh
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Chuyển đổi nông nghiệp thông qua đổi mới số và công nghệ blockchain
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Vision */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-3xl">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mr-4">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Tầm Nhìn</h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Xây dựng một thế giới nơi mỗi sản phẩm nông nghiệp là tài sản số được xác thực, 
              tạo nên một nền kinh tế nông nghiệp minh bạch, thông minh và vận hành bằng blockchain, 
              mang lại lợi ích cho nông dân, người tiêu dùng và môi trường.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-3xl">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mr-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Sứ Mệnh</h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Chuyển đổi sản phẩm nông nghiệp thành tài sản số thông qua công nghệ blockchain, 
              phân tích dữ liệu bằng trí tuệ nhân tạo và xác minh blockchain, tạo ra sự minh bạch 
              và giá trị chưa từng có trong chuỗi cung ứng thực phẩm trong nước.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Lightbulb,
              title: 'Đổi Mới',
              description: 'Tiên phong trong các giải pháp công nghệ tiên tiến cho các thách thức nông nghiệp'
            },
            {
              icon: Globe,
              title: 'Minh Bạch',
              description: 'Tạo ra khả năng nhìn thấu suốt trong chuỗi cung ứng thực phẩm'
            },
            {
              icon: Target,
              title: 'Bền Vững',
              description: 'Thúc đẩy các phương pháp canh tác có trách nhiệm với môi trường'
            },
            {
              icon: Eye,
              title: 'Tin Cậy',
              description: 'Xây dựng niềm tin giữa nông dân và người tiêu dùng'
            }
          ].map((value, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h4>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionMission;