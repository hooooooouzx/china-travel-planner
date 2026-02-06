"use client";

import { searchPlatforms, quickKeywords } from "@/lib/cities";

interface SearchResultsProps {
  fromCity: string;
  toCity: string;
  days: number;
}

export default function SearchResults({
  fromCity,
  toCity,
  days,
}: SearchResultsProps) {
  const openLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const getKeywordUrl = (platform: (typeof searchPlatforms)[0], keyword: string) => {
    // 为快捷关键词生成特定搜索URL
    const keywordQuery = `${toCity} ${keyword}`;
    switch (platform.name) {
      case "小红书":
        return `https://www.xiaohongshu.com/search_result?keyword=${encodeURIComponent(keywordQuery)}`;
      case "马蜂窝":
        return `https://www.mafengwo.cn/search/q.html?q=${encodeURIComponent(keywordQuery)}`;
      case "携程攻略":
        return `https://you.ctrip.com/searchsite/search?query=${encodeURIComponent(keywordQuery)}`;
      case "抖音":
        return `https://www.douyin.com/search/${encodeURIComponent(keywordQuery)}`;
      case "百度搜索":
        return `https://www.baidu.com/s?wd=${encodeURIComponent(keywordQuery)}`;
      case "知乎":
        return `https://www.zhihu.com/search?type=content&q=${encodeURIComponent(keywordQuery)}`;
      default:
        return "#";
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-8">
      {/* 搜索信息摘要 */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          {fromCity} → {toCity}
        </h2>
        <p className="text-gray-600 mt-1">{days}天旅行攻略</p>
      </div>

      {/* 快捷关键词 */}
      <div className="mb-6">
        <p className="text-sm text-gray-500 mb-3 text-center">快捷搜索：</p>
        <div className="flex flex-wrap justify-center gap-2">
          {quickKeywords.map((item) => (
            <button
              key={item.keyword}
              onClick={() =>
                openLink(
                  `https://www.baidu.com/s?wd=${encodeURIComponent(
                    `${toCity} ${item.keyword}`
                  )}`
                )
              }
              className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition-all"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* 平台搜索卡片 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {searchPlatforms.map((platform) => (
          <div
            key={platform.name}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-5"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">{platform.icon}</span>
              <h3 className="font-semibold text-gray-800">{platform.name}</h3>
            </div>
            <p className="text-sm text-gray-500 mb-4">{platform.description}</p>

            {/* 主搜索按钮 */}
            <button
              onClick={() => openLink(platform.getUrl(fromCity, toCity, days))}
              className={`w-full py-2.5 text-white font-medium rounded-lg transition-all ${platform.color}`}
            >
              搜索攻略
            </button>

            {/* 快捷关键词按钮 */}
            <div className="flex flex-wrap gap-1.5 mt-3">
              {quickKeywords.slice(0, 4).map((item) => (
                <button
                  key={item.keyword}
                  onClick={() => openLink(getKeywordUrl(platform, item.keyword))}
                  className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded hover:bg-gray-200 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* 提示信息 */}
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-400">
          点击按钮将在新标签页打开对应平台的搜索结果
        </p>
      </div>
    </div>
  );
}
