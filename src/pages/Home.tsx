import { Link } from 'react-router-dom';
import { BookOpen, Shield, HelpCircle, Users, Target, FileText } from 'lucide-react';

export default function Home() {
  const teamMembers = [
    { name: '张明', position: '部门总监', avatar: '👨‍💼' },
    { name: '李华', position: '高级法务专员', avatar: '👩‍💼' },
    { name: '王芳', position: '合同管理专员', avatar: '👨‍💼' },
    { name: '刘强', position: '商务分析师', avatar: '👩‍💼' },
    { name: '陈洁', position: '风险控制专员', avatar: '👨‍💼' },
    { name: '赵磊', position: '合规专员', avatar: '👩‍💼' },
  ];

  const quickLinks = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: '风险规则库',
      description: '查看合同审核规则、风险防控指南',
      path: '/rules',
      colorClass: 'text-blue-600 dark:text-blue-400',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: '典型案例',
      description: '学习真实风险案例与处理经验',
      path: '/cases',
      colorClass: 'text-red-600 dark:text-red-400',
    },
    {
      icon: <HelpCircle className="w-8 h-8" />,
      title: '常见问题',
      description: '快速找到合同相关问题的答案',
      path: '/faq',
      colorClass: 'text-green-600 dark:text-green-400',
    },
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      {/* 欢迎横幅 */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-800 dark:to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">欢迎访问合同商务部知识库</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            为公司提供专业的合同管理、风险防控和商务支持服务
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 部门简介 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">部门简介</h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8 border border-gray-200 dark:border-gray-700">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              合同商务部是公司重要的风险防控和商务支持部门，负责合同全生命周期管理、商务谈判支持、法律风险识别与防控等工作。
              我们致力于为各业务部门提供专业、高效的合同管理服务，保障公司商业利益。
            </p>
          </div>
        </section>

        {/* 核心职责 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">核心职责</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <FileText className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">合同管理</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                负责合同起草、审核、修订、归档及执行跟踪，确保合同条款合法合规、权责清晰。
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 text-red-600 dark:text-red-400 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">风险防控</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                识别合同中的法律风险点，建立风险预警机制，提供专业的风险评估和应对建议。
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <Target className="w-6 h-6 text-green-600 dark:text-green-400 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">商务支持</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                参与重大商务谈判，提供合同条款建议，协助解决合同争议，维护公司合法权益。
              </p>
            </div>
          </div>
        </section>

        {/* 快速入口 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">快速入口</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {quickLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow group"
              >
                <div className={`${link.colorClass} mb-4 group-hover:scale-110 transition-transform`}>
                  {link.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{link.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{link.description}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* 团队成员 */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
            <Users className="w-8 h-8 mr-3" />
            团队成员
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-700 text-center"
              >
                <div className="text-5xl mb-3">{member.avatar}</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{member.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{member.position}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
