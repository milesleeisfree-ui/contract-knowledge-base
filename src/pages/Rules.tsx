import { useState, useMemo } from 'react';
import { ChevronRight, ChevronDown, Search } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { rules, ruleCategories, Rule } from '../data/rules';

export default function Rules() {
  const [selectedRule, setSelectedRule] = useState<Rule>(rules[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set(ruleCategories.map((c) => c.id))
  );

  // 搜索过滤
  const filteredRules = useMemo(() => {
    if (!searchQuery) return rules;
    const query = searchQuery.toLowerCase();
    return rules.filter(
      (rule) =>
        rule.title.toLowerCase().includes(query) ||
        rule.content.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  // 按分类分组
  const rulesByCategory = useMemo(() => {
    const grouped: Record<string, Rule[]> = {};
    filteredRules.forEach((rule) => {
      if (!grouped[rule.category]) {
        grouped[rule.category] = [];
      }
      grouped[rule.category].push(rule);
    });
    return grouped;
  }, [filteredRules]);

  const toggleCategory = (categoryId: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(categoryId)) {
      newExpanded.delete(categoryId);
    } else {
      newExpanded.add(categoryId);
    }
    setExpandedCategories(newExpanded);
  };

  return (
    <div className="flex h-[calc(100vh-4rem)] bg-gray-50 dark:bg-gray-900">
      {/* 左侧目录树 */}
      <aside className="w-80 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 overflow-y-auto">
        {/* 搜索框 */}
        <div className="sticky top-0 bg-white dark:bg-gray-800 p-4 border-b border-gray-200 dark:border-gray-700 z-10">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="搜索规则..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* 目录树 */}
        <nav className="p-4">
          {ruleCategories.map((category) => {
            const categoryRules = rulesByCategory[category.id] || [];
            if (categoryRules.length === 0 && searchQuery) return null;

            const isExpanded = expandedCategories.has(category.id);

            return (
              <div key={category.id} className="mb-2">
                {/* 分类标题 */}
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="flex items-center w-full px-3 py-2 text-left font-semibold text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
                >
                  {isExpanded ? (
                    <ChevronDown className="w-4 h-4 mr-2" />
                  ) : (
                    <ChevronRight className="w-4 h-4 mr-2" />
                  )}
                  {category.name}
                  <span className="ml-auto text-xs text-gray-500 dark:text-gray-400">
                    {categoryRules.length}
                  </span>
                </button>

                {/* 规则列表 */}
                {isExpanded && (
                  <div className="ml-6 mt-1 space-y-1">
                    {categoryRules.map((rule) => (
                      <button
                        key={rule.id}
                        onClick={() => setSelectedRule(rule)}
                        className={`block w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                          selectedRule.id === rule.id
                            ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium'
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                        }`}
                      >
                        {rule.title}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          {filteredRules.length === 0 && searchQuery && (
            <div className="text-center py-8 text-gray-500 dark:text-gray-400">
              未找到匹配的规则
            </div>
          )}
        </nav>
      </aside>

      {/* 右侧内容区 */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto p-8">
          {/* Markdown 内容 */}
          <article className="prose prose-lg dark:prose-invert max-w-none bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8 border border-gray-200 dark:border-gray-700">
            <ReactMarkdown
              components={{
                h1: ({ children }) => (
                  <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white border-b-2 border-blue-500 pb-3">
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-900 dark:text-white">
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    {children}
                  </p>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700 dark:text-gray-300">
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol className="list-decimal list-inside space-y-2 mb-4 text-gray-700 dark:text-gray-300">
                    {children}
                  </ol>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-blue-500 pl-4 py-2 my-4 bg-blue-50 dark:bg-blue-900/20 rounded-r-lg">
                    {children}
                  </blockquote>
                ),
                strong: ({ children }) => (
                  <strong className="font-bold text-red-600 dark:text-red-400">
                    {children}
                  </strong>
                ),
              }}
            >
              {selectedRule.content}
            </ReactMarkdown>
          </article>
        </div>
      </main>
    </div>
  );
}
