import { Mail, MessageSquare, QrCode } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">部门介绍</h1>

        {/* 组织架构图 */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">组织架构</h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8 border border-gray-200 dark:border-gray-700 overflow-x-auto">
            <svg viewBox="0 0 800 400" className="w-full h-auto">
              {/* 部门总监 */}
              <g>
                <rect
                  x="325"
                  y="20"
                  width="150"
                  height="60"
                  rx="8"
                  className="fill-blue-500 dark:fill-blue-600"
                />
                <text x="400" y="45" textAnchor="middle" className="fill-white font-semibold text-sm">
                  部门总监
                </text>
                <text x="400" y="65" textAnchor="middle" className="fill-blue-100 text-xs">
                  张明
                </text>
              </g>

              {/* 连接线 */}
              <line x1="400" y1="80" x2="400" y2="120" className="stroke-gray-400 dark:stroke-gray-600" strokeWidth="2" />
              <line x1="150" y1="120" x2="650" y2="120" className="stroke-gray-400 dark:stroke-gray-600" strokeWidth="2" />
              <line x1="150" y1="120" x2="150" y2="140" className="stroke-gray-400 dark:stroke-gray-600" strokeWidth="2" />
              <line x1="325" y1="120" x2="325" y2="140" className="stroke-gray-400 dark:stroke-gray-600" strokeWidth="2" />
              <line x1="475" y1="120" x2="475" y2="140" className="stroke-gray-400 dark:stroke-gray-600" strokeWidth="2" />
              <line x1="650" y1="120" x2="650" y2="140" className="stroke-gray-400 dark:stroke-gray-600" strokeWidth="2" />

              {/* 合同管理组 */}
              <g>
                <rect
                  x="75"
                  y="140"
                  width="150"
                  height="60"
                  rx="8"
                  className="fill-green-500 dark:fill-green-600"
                />
                <text x="150" y="165" textAnchor="middle" className="fill-white font-semibold text-sm">
                  合同管理组
                </text>
                <text x="150" y="185" textAnchor="middle" className="fill-green-100 text-xs">
                  李华（组长）
                </text>
              </g>

              {/* 法务支持组 */}
              <g>
                <rect
                  x="250"
                  y="140"
                  width="150"
                  height="60"
                  rx="8"
                  className="fill-purple-500 dark:fill-purple-600"
                />
                <text x="325" y="165" textAnchor="middle" className="fill-white font-semibold text-sm">
                  法务支持组
                </text>
                <text x="325" y="185" textAnchor="middle" className="fill-purple-100 text-xs">
                  王芳（组长）
                </text>
              </g>

              {/* 风险控制组 */}
              <g>
                <rect
                  x="425"
                  y="140"
                  width="150"
                  height="60"
                  rx="8"
                  className="fill-red-500 dark:fill-red-600"
                />
                <text x="500" y="165" textAnchor="middle" className="fill-white font-semibold text-sm">
                  风险控制组
                </text>
                <text x="500" y="185" textAnchor="middle" className="fill-red-100 text-xs">
                  刘强（组长）
                </text>
              </g>

              {/* 商务分析组 */}
              <g>
                <rect
                  x="575"
                  y="140"
                  width="150"
                  height="60"
                  rx="8"
                  className="fill-orange-500 dark:fill-orange-600"
                />
                <text x="650" y="165" textAnchor="middle" className="fill-white font-semibold text-sm">
                  商务分析组
                </text>
                <text x="650" y="185" textAnchor="middle" className="fill-orange-100 text-xs">
                  陈洁（组长）
                </text>
              </g>

              {/* 团队成员 */}
              <line x1="150" y1="200" x2="150" y2="220" className="stroke-gray-400 dark:stroke-gray-600" strokeWidth="2" />
              <line x1="100" y1="220" x2="200" y2="220" className="stroke-gray-400 dark:stroke-gray-600" strokeWidth="2" />
              <line x1="100" y1="220" x2="100" y2="240" className="stroke-gray-400 dark:stroke-gray-600" strokeWidth="2" />
              <line x1="200" y1="220" x2="200" y2="240" className="stroke-gray-400 dark:stroke-gray-600" strokeWidth="2" />

              {/* 成员节点 */}
              <rect x="50" y="240" width="100" height="40" rx="6" className="fill-gray-300 dark:fill-gray-700" />
              <text x="100" y="265" textAnchor="middle" className="fill-gray-800 dark:fill-gray-200 text-xs">
                专员 2人
              </text>

              <rect x="150" y="240" width="100" height="40" rx="6" className="fill-gray-300 dark:fill-gray-700" />
              <text x="200" y="265" textAnchor="middle" className="fill-gray-800 dark:fill-gray-200 text-xs">
                助理 2人
              </text>

              {/* 其他组的成员连线（简化） */}
              <line x1="325" y1="200" x2="325" y2="240" className="stroke-gray-400 dark:stroke-gray-600" strokeWidth="2" />
              <rect x="275" y="240" width="100" height="40" rx="6" className="fill-gray-300 dark:fill-gray-700" />
              <text x="325" y="265" textAnchor="middle" className="fill-gray-800 dark:fill-gray-200 text-xs">
                专员 3人
              </text>

              <line x1="500" y1="200" x2="500" y2="240" className="stroke-gray-400 dark:stroke-gray-600" strokeWidth="2" />
              <rect x="450" y="240" width="100" height="40" rx="6" className="fill-gray-300 dark:fill-gray-700" />
              <text x="500" y="265" textAnchor="middle" className="fill-gray-800 dark:fill-gray-200 text-xs">
                专员 2人
              </text>

              <line x1="650" y1="200" x2="650" y2="240" className="stroke-gray-400 dark:stroke-gray-600" strokeWidth="2" />
              <rect x="600" y="240" width="100" height="40" rx="6" className="fill-gray-300 dark:fill-gray-700" />
              <text x="650" y="265" textAnchor="middle" className="fill-gray-800 dark:fill-gray-200 text-xs">
                分析师 2人
              </text>
            </svg>
          </div>
        </section>

        {/* 各组职责 */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">各组职责</h2>
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border-l-4 border-green-500">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">合同管理组</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• 负责各类合同的起草、审核和修订工作</li>
                <li>• 建立和维护合同模板库、条款库</li>
                <li>• 合同归档管理和电子化系统维护</li>
                <li>• 合同执行跟踪和提醒服务</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border-l-4 border-purple-500">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">法务支持组</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• 提供日常法律咨询和合规建议</li>
                <li>• 参与重大项目的法律尽职调查</li>
                <li>• 处理合同纠纷和争议解决</li>
                <li>• 协调外部律师资源</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border-l-4 border-red-500">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">风险控制组</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• 识别和评估合同中的法律风险</li>
                <li>• 建立风险防控规则和审核标准</li>
                <li>• 开展风险培训和案例分享</li>
                <li>• 风险事件应急响应和处理</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border-l-4 border-orange-500">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">商务分析组</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• 参与商务谈判和条款磋商</li>
                <li>• 分析合同条款的商业影响</li>
                <li>• 行业合同条款对标研究</li>
                <li>• 合同数据统计分析和报告</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 联系方式 */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">联系我们</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">邮箱</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-2">部门邮箱：</p>
              <p className="text-blue-600 dark:text-blue-400 break-all">contract@company.com</p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <MessageSquare className="w-6 h-6 text-green-600 dark:text-green-400 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">企业微信</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-2">企微群号：</p>
              <p className="text-gray-900 dark:text-white font-mono">ContractDept2025</p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <QrCode className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">钉钉群</h3>
              </div>
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 text-center">
                <div className="text-6xl mb-2">📱</div>
                <p className="text-sm text-gray-600 dark:text-gray-400">扫码加入钉钉群</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
