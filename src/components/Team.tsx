import React from 'react';
import { Linkedin, Github, Twitter } from 'lucide-react';
// Import your image
import GiapAvatar from '../assets/img/TanGiap.png';
import mrsThuAvatar from '../assets/img/mrsThu.png';
import GiangAva from '../assets/img/GiangAva1.png';
import MinhAva from '../assets/img/MinhAva.png';
import tsonAva from '../assets/img/tsonAva.png';
import duyAva from '../assets/img/duyAva.png';
import Duong from '../assets/img/Duong.jpg';
import Hoang from '../assets/img/Hoang.jpg';
import Thien from '../assets/img/Thien.jpg';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: 'Ngô Thị Anh Minh',
      position: 'Chuyên ngành Marketing & Truyền thông',
          university: 'Trường Đại học Kinh tế Luật, ĐHQG-HCM.',
      expertise: 'Phát triển Thương Hiệu & Chiến Lược Tiếp Thị',
      image: MinhAva,
      bio: 'Strategic Planner và Vice President tại Marketing UEL Club - Câu lạc bộ học thuật Top 1 UEL <br/> Account Intern tại iSocial Vietnam <br/> Research Collaborator tại Pencil Group',
      social: {
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'Mai Tấn Giáp',
      position: 'Chuyên ngành Công nghệ Tri Thức',
        university: 'Trường Đại học Khoa học tự nhiên, ĐHQG-HCM.',
      expertise: 'Công Nghệ Blockchain & Chiến Lược Kinh Doanh',
      image: GiapAvatar,
        bio: `Founder - President tại CLB Healing IHC - Câu lạc bộ về Thiền Chữa lành đầu tiên của các trường Đại học tại Việt Nam.<br/>AI Developer tại TheWann<br/>Intern Blockchain developer tại Apps Cyclone`,
      social: {
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'Nguyễn Ngọc Giang',
      position: 'Chuyên ngành Kỹ thuật phần mềm',
        university: 'Trường Đại học Khoa học tự nhiên, ĐHQG-HCM.',
      expertise: 'Phát Triển Ứng dụng Blockchain & Tích hợp AI',
      image: GiangAva,
      bio: 'Tư duy logic, phân tích vấn đề từ trải nghiệm người dùng và định hướng ứng dụng Blockchain thực tiễn. Luôn tìm cách kết nối, chia sẻ và lan tỏa giá trị công nghệ đến cộng đồng.',
      social: {
        linkedin: '#',
        github: '#'
      }
    },
    {
      name: 'Phạm Thanh Duy',
      position: 'Chuyên ngành Logistics & Supply Chain',
        university: 'Trường Đại học Công nghiệp TP.HCM.',
      expertise: 'Quản Lý Chuỗi Cung Ứng & Vận Hành',
        image: duyAva,
        bio: 'Giữ vai trò Quản Lý Chuỗi Cung Ứng & Vận Hành với kinh nghiệm là sinh viên năm 3 chuyên ngành Logictics và Quản lý chuỗi cung ứng.<br/>Ban Chấp hành Hội Sinh viên Khóa VIII trường Đại học Công nghiệp Thành phố Hồ Chí Minh.<br/>Đội trưởng Đội Công tác xã hội Nhiệm kỳ XXI.',
      social: {
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'Đoàn Thái Sơn',
      position: 'Chuyên ngành Công nghệ thông tin',
        university: 'Trường Đại học Nguyễn Tất Thành.',
      expertise: 'Phát Triển Phần mềm & Ứng dụng',
      image: tsonAva,
        bio: 'Lập trình viên web và ứng dụng với tư duy sản phẩm, tập trung vào việc xây dựng trải nghiệm người dùng tinh gọn và hiệu quả. Luôn hướng đến các giải pháp có tính ứng dụng cao, dễ mở rộng và phù hợp với thực tế kinh doanh.',
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

        <div className="flex flex-wrap justify-center -mx-4">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="w-full px-4 mb-8 sm:w-full md:w-1/2 lg:w-1/3"
            >
              <div className="h-full bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
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
          
          <div
            className="text-gray-600 text-sm text-center mb-6 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: member.bio }}
          />
          
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
                          <img
                              src={mrsThuAvatar}
                              alt="ThS. Nguyễn Thị Hoài Thu"
                              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                          />
                          <h4 className="text-xl font-bold text-white mb-2">ThS. Nguyễn Thị Hoài Thu</h4>
                          <p className="text-green-200 mb-1">Giảng viên giàu kinh nghiệm với hơn 15 năm giảng dạy tại các trường đại học lớn, chuyên sâu về hệ thống thông tin, công nghệ số và blockchain. Đồng thời là nhà nghiên cứu ứng dụng, đã chủ nhiệm và tham gia nhiều đề tài khoa học thực tiễn. Có năng lực xuất bản học liệu chuyên ngành và kết hợp tốt giữa lý thuyết – thực tiễn.</p>

                      </div>
                  </div>
              </div>
          </div>
          {/* Support Team */}
          <div className="mt-16">
              <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                      Đội Ngũ Hỗ Trợ
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                      Đội ngũ hỗ trợ tận tâm, luôn sẵn sàng đồng hành và giải đáp mọi thắc mắc của khách hàng, góp phần tạo nên thành công cho dự án.
                  </p>
              </div>
              <div className="flex flex-wrap justify-center -mx-4">
                  {[
                      {
                          name: 'Lê Thanh Thiện',
                          position: 'Chuyên nghành Công nghệ thông tin',
                          university: 'Trường đại học Nguyễn Tất Thành.',
                          expertise: 'Kiểm thử phần mềm',
                          image: Thien,
                          bio: 'Kỹ sư kiểm thử phần mềm với kinh nghiệm xây dựng test case, kiểm thử thủ công và tự động.<br />Thành thạo Python, Selenium, và quy trình kiểm thử trong môi trường Agile.<br />Kỹ năng phân tích tốt, cẩn thận và có tinh thần học hỏi cao.',
                          social: {
                              linkedin: '#',
                              twitter: '#',
                          }
                      },
                      {
                          name: 'Trần Phạm Hải Dương',
                          position: 'Nghiên cứu sinh',
                          university: ' Trường Đại học Bách Khoa TP.HCM.',
                          expertise: 'Xử lý tín hiệu cảm biến, Làm việc với cảm biến nhiệt, phân tích dữ liệu thực nghiệm',
                          image: Duong,
                          bio: 'Nghiên cứu sinh tại ĐH Bách Khoa TP.HCM với kinh nghiệm thực hành và nghiên cứu trong lĩnh vực điều khiển và tự động hóa.<br />Thành thạo lập trình hệ thống điều khiển robot, xử lý dữ liệu cảm biến, và xây dựng giao diện điều khiển.<br />Đã trình bày nghiên cứu tại các hội nghị học thuật uy tín như AETA 2022 và BK 2024.',
                          social: {
                              linkedin: '#',
                              github: '#',
                          }
                      },
                      {
                          name: 'Bùi Khánh Hoàng',
                          position: 'Kỹ sư IoT',
                          university: 'Trường Đại học Bách Khoa TP.HCM.',
                          expertise: 'Kiểm thử hệ thống nhúng, phát triển ứng dụng IoT, xử lý ảnh thời gian thực và lập trình đa nền tảng trên môi trường Linux.',
                          image: Hoang,
                          bio: 'Kỹ sư phần mềm nhúng với kinh nghiệm thực tập tại Ampere Computing, chuyên về kiểm thử hệ thống, benchmark phần cứng và phát triển script tự động hóa.<br />Đã triển khai nhiều dự án IoT ứng dụng thực tế, kết hợp xử lý ảnh và học máy với các nền tảng như ESP32, Jetson Nano, và Raspberry Pi.<br />Thành thạo Python, C/C++, Linux, FreeRTOS và backend Flask API.',
                          social: {
                              linkedin: '#',
                              github: '#',
                          }
                      }
                  ].map((member, index) => (
                      <div
                          key={index}
                          className="w-full px-4 mb-8 sm:w-full md:w-1/2 lg:w-1/3"
                      >
                          <div className="h-full bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
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
                              <div
                                  className="text-gray-600 text-sm text-center mb-6 leading-relaxed"
                                  dangerouslySetInnerHTML={{ __html: member.bio }}
                              />
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
                      </div>
                  ))}
              </div>
          </div>

      
    </section>
  );
};

export default Team;
