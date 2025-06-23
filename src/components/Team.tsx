import React from 'react';
import { Linkedin, Github, Twitter } from 'lucide-react';
// Import your image
import GiapAvatar from '../assets/img/TanGiap.png';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: 'Mai Tấn Giáp',
      position: 'Chuyên ngành Công nghệ Tri Thức',
      university: 'Đại học Khoa học Tự Nhiên TP.HCM',
      expertise: 'Công Nghệ Blockchain & Chiến Lược Kinh Doanh',
      image: GiapAvatar,
      bio: 'Sáng lập-Chủ nhiệm Câu lạc bộ về Thiền - Chữa lành đầu tiên của các trường Đại học tại Việt Nam-	AI Developer tại TheWann-	Intern Blockchain developer tại Apps Cyclone ',
      social: {
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'Nguyễn Ngọc Giang',
      position: 'Chuyên ngành Kỹ thuật phần mềm',
      university: 'Đại học Khoa học Tự Nhiên TP.HCM',
      expertise: 'Phát Triển Ứng dụng Blockchain & Kết hợp AI',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: '',
      social: {
        linkedin: '#',
        github: '#'
      }
    },
    {
      name: 'Ngô Thị Anh Minh',
      position: 'Chuyên ngành Marketing & Truyền thông',
      university: 'Đại học Kinh tế - Luật TP.HCM',
      expertise: 'Phát triển Thương Hiệu & Chiến Lược Tiếp Thị',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'abcdefghijklmnopqrstuvwxyz',
      social: {
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'Phạm Thanh Duy',
      position: 'Chuyên ngành Logistics & Supply Chain',
      university: 'Trường đại học Công Nghiệp TP.HCM',
      expertise: 'Quản Lý Chuỗi Cung Ứng & Vận Hành',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'abcdefghijklmnopqrstuvwxyz',
      social: {
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'Thái Sơn',
      position: 'Chuyên ngành Công nghệ thông tin',
      university: 'Trường đại học Tôn Đức Thắng',
      expertise: 'Phát Triển Phần mềm',
      image: 'https://images.pexels.com/photos/2182975/pexels-photo-2182975.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'abcdefghijklmnopqrstuvwxyz',
      social: {
        linkedin: '#',
        twitter: '#'
      }
    }
  ];

  return (
    <section id="team" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Đội Ngũ Của Chúng Tôi
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Đội ngũ nhân lực đa dạng kết hợp kiến thức về chuỗi cung ứng cùng với 
            chuyên môn công nghệ để cách mạng hóa ngành nông nghiệp.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-center mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-green-600 font-semibold mb-2">{member.position}</p>
                <p className="text-sm text-gray-600 mb-1">{member.university}</p>
                <p className="text-sm font-medium text-blue-600">{member.expertise}</p>
              </div>
              
              <p className="text-gray-600 text-sm text-center mb-6 leading-relaxed">
                {member.bio}
              </p>
              
              <div className="flex justify-center space-x-4">
                {member.social.linkedin && (
                  <a
                    href={member.social.linkedin}
                    className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center hover:bg-blue-200 transition-colors duration-300"
                  >
                    <Linkedin className="w-5 h-5 text-blue-600" />
                  </a>
                )}
                {member.social.github && (
                  <a
                    href={member.social.github}
                    className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors duration-300"
                  >
                    <Github className="w-5 h-5 text-gray-600" />
                  </a>
                )}
                {member.social.twitter && (
                  <a
                    href={member.social.twitter}
                    className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center hover:bg-blue-200 transition-colors duration-300"
                  >
                    <Twitter className="w-5 h-5 text-blue-600" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Advisory Board */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-12">
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            Hội Đồng Cố Vấn
          </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center mx-auto col-span-1 md:col-span-3 max-w-md">
                <h4 className="text-xl font-bold text-white mb-2">ThS. Nguyễn Thị Hoài Thu</h4>
                <p className="text-green-200 mb-1">abcdefghijklmnopqrstuvwxyz</p>
                <p className="text-green-100 text-sm">abcdefghijklmnopqrstuvwxyz</p>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Team;