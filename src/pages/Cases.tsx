import { useState, useMemo } from 'react';
import { AlertTriangle, X } from 'lucide-react';
import { cases, riskTypes, Case } from '../data/cases';

export default function Cases() {
  const [selectedCase, setSelectedCase] = useState<Case | null>(null);
  const [filterType, setFilterType] = useState('all');

  // 筛选案例
  const filteredCases = useMemo(() => {
    if (filterType === 'all') return cases;
    return cases.filter((c) => c.riskType === filterType);
  }, [filterType]);

  const getColorClasses = (colorName: string) => {
    const colors: Record<string, string> = {
      blue: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
      red: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400',
      purple: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400',
      green: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
      orange: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400',
      pink: 'bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-400',
    };
    return colors[colorName] || colors.blue;
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">风险案例库</h1>
          <p className="text-gray-600 dark:text-gray-400">
            从真实案例中学习，避免重蹈覆辙
          </p>
        </div>

        {/* 筛选器 */}
        <div className="mb-8 flex flex-wrap gap-2">
          {riskTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setFilterType(type.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                filterType === type.id
                  ? 'bg-blue-600 text-white dark:bg-blue-500'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              {type.name}
              {type.id === 'all' && ` (${cases.length})`}
              {type.id !== 'all' &&
                ` (${cases.filter((c) => c.riskType === type.id).length})`}
            </button>
          ))}
        </div>

        {/* 案例卡片列表 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCases.map((caseItem) => {
            const riskType = riskTypes.find((t) => t.id === caseItem.riskType);
            return (
              <div
                key={caseItem.id}
                onClick={() => setSelectedCase(caseItem)}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 cursor-pointer hover:shadow-md hover:border-blue-300 dark:hover:border-blue-600 transition-all"
              >
                {/* 案号 */}
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  {caseItem.caseNumber}
                </div>

                {/* 标题 */}
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                  {caseItem.title}
                </h3>

                {/* 风险类型标签 */}
                <div className="mb-3">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getColorClasses(
                      riskType?.color || 'blue'
                    )}`}
                  >
                    {riskType?.name}
                  </span>
                </div>

                {/* 损失金额 */}
                <div className="flex items-center mb-3 text-red-600 dark:text-red-400 font-semibold">
                  <AlertTriangle className="w-4 h-4 mr-1" />
                  损失: {caseItem.loss}
                </div>

                {/* 简要描述 */}
                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
                  {caseItem.summary}
                </p>

                {/* 查看详情提示 */}
                <div className="mt-4 text-sm text-blue-600 dark:text-blue-400 font-medium">
                  点击查看详情 →
                </div>
              </div>
            );
          })}
        </div>

        {filteredCases.length === 0 && (
          <div className="text-center py-12 text-gray-500 dark:text-gray-400">
            暂无该类型的案例
          </div>
        )}
      </div>

      {/* Modal 弹窗 */}
      {selectedCase && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedCase(null)}
        >
          <div
            className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4 flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                  {selectedCase.caseNumber}
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {selectedCase.title}
                </h2>
              </div>
              <button
                onClick={() => setSelectedCase(null)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="px-6 py-6 space-y-6">
              {/* 风险类型和损失 */}
              <div className="flex flex-wrap gap-4 items-center pb-4 border-b border-gray-200 dark:border-gray-700">
                <div>
                  <span className="text-sm text-gray-500 dark:text-gray-400 mr-2">
                    风险类型:
                  </span>
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getColorClasses(
                      riskTypes.find((t) => t.id === selectedCase.riskType)?.color || 'blue'
                    )}`}
                  >
                    {riskTypes.find((t) => t.id === selectedCase.riskType)?.name}
                  </span>
                </div>
                <div className="text-red-600 dark:text-red-400 font-semibold flex items-center">
                  <AlertTriangle className="w-4 h-4 mr-1" />
                  经济损失: {selectedCase.loss}
                </div>
              </div>

              {/* 案例简述 */}
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  案例简述
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {selectedCase.summary}
                </p>
              </div>

              {/* 案件背景 */}
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  案件背景
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {selectedCase.background}
                </p>
              </div>

              {/* 问题条款 */}
              <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4 border-l-4 border-red-500">
                <h3 className="text-lg font-semibold mb-2 text-red-900 dark:text-red-300 flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  问题条款
                </h3>
                <p className="text-red-800 dark:text-red-200 leading-relaxed">
                  {selectedCase.problemClause}
                </p>
              </div>

              {/* 后果 */}
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  后果与损失
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {selectedCase.consequence}
                </p>
              </div>

              {/* 教训 */}
              <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 border-l-4 border-yellow-500">
                <h3 className="text-lg font-semibold mb-2 text-yellow-900 dark:text-yellow-300">
                  经验教训
                </h3>
                <div
                  className="text-yellow-800 dark:text-yellow-200 leading-relaxed whitespace-pre-line"
                  dangerouslySetInnerHTML={{ __html: selectedCase.lesson.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}
                />
              </div>

              {/* 改进措施 */}
              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border-l-4 border-green-500">
                <h3 className="text-lg font-semibold mb-2 text-green-900 dark:text-green-300">
                  改进措施
                </h3>
                <div
                  className="text-green-800 dark:text-green-200 leading-relaxed whitespace-pre-line"
                  dangerouslySetInnerHTML={{ __html: selectedCase.improvement.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}
                />
              </div>
            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 bg-gray-50 dark:bg-gray-700 px-6 py-4 border-t border-gray-200 dark:border-gray-600">
              <button
                onClick={() => setSelectedCase(null)}
                className="w-full md:w-auto px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors font-medium"
              >
                关闭
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
