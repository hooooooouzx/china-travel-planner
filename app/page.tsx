"use client";

import { useState, useRef } from "react";
import CityForm from "@/components/CityForm";
import TravelContent from "@/components/TravelContent";

export default function Home() {
  const [searchParams, setSearchParams] = useState<{
    from: string;
    to: string;
    days: number;
  } | null>(null);

  const contentRef = useRef<HTMLDivElement>(null);

  const handleSearch = (from: string, to: string, days: number) => {
    setSearchParams({ from, to, days });
    // 滚动到结果区域
    setTimeout(() => {
      contentRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <main className="min-h-screen bg-[#f8fafc] overflow-hidden">
      {/* 背景装饰 */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
      </div>

      {/* 导航栏 */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-xl">
                ✈
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                闫赛朋的旅游网站
              </span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">首页</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">热门目的地</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">旅行攻略</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-16 pb-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm font-medium text-purple-700 mb-8">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            发现中国之美
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              闫赛朋的旅游网站
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
            探索最美目的地，获取精选旅行攻略
            <br />
            让每一次出行都成为难忘的回忆
          </p>
        </div>

        {/* 表单区域 */}
        <div className="max-w-7xl mx-auto">
          <CityForm onSearch={handleSearch} />
        </div>
      </div>

      {/* 特色展示 */}
      {!searchParams && (
        <div className="px-4 md:px-8 pb-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">为什么选择我们</h2>
              <p className="text-gray-600 max-w-xl mx-auto">精心整理的旅行信息，让你的旅途更加轻松愉快</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="backdrop-blur-xl bg-white/70 rounded-3xl p-8 border border-white/20 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 group">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                  🎯
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">精选景点</h3>
                <p className="text-gray-600">每个目的地的必打卡景点，配有详细的游玩攻略和实用贴士</p>
              </div>
              <div className="backdrop-blur-xl bg-white/70 rounded-3xl p-8 border border-white/20 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 group">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                  🍜
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">地道美食</h3>
                <p className="text-gray-600">当地特色美食推荐，包含价格参考和口碑店铺推荐</p>
              </div>
              <div className="backdrop-blur-xl bg-white/70 rounded-3xl p-8 border border-white/20 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 group">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                  📋
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">实用攻略</h3>
                <p className="text-gray-600">交通、住宿、行程规划一站式解决，省心省力</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 热门目的地展示 */}
      {!searchParams && (
        <div className="px-4 md:px-8 pb-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">热门目的地</h2>
              <p className="text-gray-600">最受欢迎的旅行目的地等你探索</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { city: "北京", image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=400", tag: "历史古都" },
                { city: "成都", image: "https://images.unsplash.com/photo-1590103514966-5e2a11c13e21?w=400", tag: "美食天堂" },
                { city: "杭州", image: "https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?w=400", tag: "人间天堂" },
                { city: "西安", image: "https://images.unsplash.com/photo-1624344653076-8f9e23ec0ad9?w=400", tag: "十三朝古都" },
              ].map((item) => (
                <div
                  key={item.city}
                  className="relative h-48 md:h-64 rounded-2xl overflow-hidden group cursor-pointer"
                  onClick={() => handleSearch("北京", item.city, 3)}
                >
                  <img
                    src={item.image}
                    alt={item.city}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs mb-2 inline-block">
                      {item.tag}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-white">{item.city}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 搜索结果 */}
      {searchParams && (
        <div ref={contentRef} className="px-4 md:px-8 pb-20">
          <TravelContent
            fromCity={searchParams.from}
            toCity={searchParams.to}
            days={searchParams.days}
          />
        </div>
      )}

      {/* 底部 */}
      <footer className="backdrop-blur-xl bg-white/50 border-t border-white/20 py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-xl">
                ✈
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                闫赛朋的旅游网站
              </span>
            </div>
            <p className="text-gray-500 text-sm">
              让旅行更简单，让生活更精彩
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
