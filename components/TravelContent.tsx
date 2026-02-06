"use client";

import { useState } from "react";
import Image from "next/image";
import { getTravelGuide, generateDefaultGuide, TravelGuide } from "@/lib/travelData";

interface TravelContentProps {
  fromCity: string;
  toCity: string;
  days: number;
}

export default function TravelContent({ fromCity, toCity, days }: TravelContentProps) {
  const [activeTab, setActiveTab] = useState<"spots" | "food" | "tips">("spots");

  const guide: TravelGuide = getTravelGuide(toCity) || generateDefaultGuide(toCity);

  const tabs = [
    { key: "spots" as const, label: "必去景点", icon: "🏛️" },
    { key: "food" as const, label: "美食推荐", icon: "🍜" },
    { key: "tips" as const, label: "实用攻略", icon: "📋" },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto mt-12">
      {/* Hero Section */}
      <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden mb-8 group">
        <Image
          src={guide.heroImage}
          alt={guide.city}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-white text-sm font-medium">
              {fromCity} → {toCity}
            </span>
            <span className="px-4 py-1.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full text-white text-sm font-medium">
              {days}天行程
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            {guide.city}
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-3xl leading-relaxed">
            {guide.description}
          </p>
        </div>
      </div>

      {/* Quick Info Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="backdrop-blur-xl bg-white/70 rounded-2xl p-5 border border-white/20 shadow-lg">
          <div className="text-3xl mb-2">📅</div>
          <div className="text-sm text-gray-500">最佳时间</div>
          <div className="font-bold text-gray-800">{guide.bestTime}</div>
        </div>
        <div className="backdrop-blur-xl bg-white/70 rounded-2xl p-5 border border-white/20 shadow-lg">
          <div className="text-3xl mb-2">💰</div>
          <div className="text-sm text-gray-500">日均预算</div>
          <div className="font-bold text-gray-800">{guide.avgBudget}</div>
        </div>
        <div className="backdrop-blur-xl bg-white/70 rounded-2xl p-5 border border-white/20 shadow-lg">
          <div className="text-3xl mb-2">🎯</div>
          <div className="text-sm text-gray-500">推荐景点</div>
          <div className="font-bold text-gray-800">{guide.spots.length}个</div>
        </div>
        <div className="backdrop-blur-xl bg-white/70 rounded-2xl p-5 border border-white/20 shadow-lg">
          <div className="text-3xl mb-2">🍽️</div>
          <div className="text-sm text-gray-500">特色美食</div>
          <div className="font-bold text-gray-800">{guide.foods.length}种</div>
        </div>
      </div>

      {/* Video Section */}
      {guide.videoUrl && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
            <span className="w-10 h-10 rounded-xl bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center text-white">▶️</span>
            视频攻略
          </h2>
          <div className="backdrop-blur-xl bg-white/70 rounded-2xl p-6 border border-white/20 shadow-lg">
            <a
              href={guide.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group"
            >
              <div className="w-20 h-20 rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center text-white text-3xl group-hover:scale-110 transition-transform">
                🎬
              </div>
              <div>
                <div className="font-bold text-gray-800 text-lg group-hover:text-pink-600 transition-colors">
                  观看{guide.city}旅行Vlog
                </div>
                <div className="text-gray-500">点击跳转到B站观看精彩视频攻略</div>
              </div>
              <div className="ml-auto">
                <svg className="w-6 h-6 text-gray-400 group-hover:text-pink-500 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      )}

      {/* Tab Navigation */}
      <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold whitespace-nowrap transition-all ${
              activeTab === tab.key
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-purple-500/30"
                : "bg-white/70 text-gray-600 hover:bg-white hover:shadow-md"
            }`}
          >
            <span className="text-xl">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Sections */}
      {activeTab === "spots" && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
            <span className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white">🏛️</span>
            必去景点推荐
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guide.spots.map((spot, index) => (
              <div
                key={spot.name}
                className="group backdrop-blur-xl bg-white/70 rounded-2xl overflow-hidden border border-white/20 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={spot.image}
                    alt={spot.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-bold text-gray-700">
                    NO.{index + 1}
                  </div>
                  <div className="absolute top-3 right-3 px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full text-sm font-bold text-white flex items-center gap-1">
                    ⭐ {spot.rating}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{spot.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{spot.description}</p>
                  <div className="space-y-2">
                    <div className="text-sm font-semibold text-gray-700">游玩贴士：</div>
                    {spot.tips.map((tip, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-green-500 mt-0.5">✓</span>
                        {tip}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "food" && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
            <span className="w-10 h-10 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center text-white">🍜</span>
            特色美食推荐
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {guide.foods.map((food) => (
              <div
                key={food.name}
                className="group backdrop-blur-xl bg-white/70 rounded-2xl overflow-hidden border border-white/20 shadow-lg hover:shadow-2xl transition-all flex"
              >
                <div className="relative w-40 md:w-48 flex-shrink-0">
                  <Image
                    src={food.image}
                    alt={food.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-5 flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{food.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{food.description}</p>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 rounded-full text-sm font-medium">
                      💰 {food.price}
                    </span>
                  </div>
                  <div className="text-sm text-gray-500">
                    <span className="font-semibold text-gray-700">推荐店铺：</span>
                    {food.recommendation}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "tips" && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
            <span className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white">📋</span>
            实用攻略
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 交通攻略 */}
            <div className="backdrop-blur-xl bg-white/70 rounded-2xl p-6 border border-white/20 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-2xl">🚄</span>
                <h3 className="text-xl font-bold text-gray-800">交通指南</h3>
              </div>
              <ul className="space-y-3">
                {guide.transportation.map((tip, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {i + 1}
                    </span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            {/* 住宿攻略 */}
            <div className="backdrop-blur-xl bg-white/70 rounded-2xl p-6 border border-white/20 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-2xl">🏨</span>
                <h3 className="text-xl font-bold text-gray-800">住宿推荐</h3>
              </div>
              <ul className="space-y-3">
                {guide.accommodation.map((tip, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600">
                    <span className="w-6 h-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {i + 1}
                    </span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 行程建议 */}
          <div className="backdrop-blur-xl bg-white/70 rounded-2xl p-6 border border-white/20 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-12 h-12 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center text-2xl">📅</span>
              <h3 className="text-xl font-bold text-gray-800">{days}天行程建议</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Array.from({ length: days }, (_, i) => (
                <div key={i} className="p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-100">
                  <div className="font-bold text-amber-600 mb-2">第{i + 1}天</div>
                  <div className="text-gray-600 text-sm">
                    {i < guide.spots.length ? (
                      <>游览 {guide.spots[i].name}</>
                    ) : (
                      <>自由活动或周边游览</>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Footer CTA */}
      <div className="mt-12 backdrop-blur-xl bg-gradient-to-r from-blue-600/90 to-purple-600/90 rounded-3xl p-8 md:p-12 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">准备好开始你的{guide.city}之旅了吗？</h2>
        <p className="text-white/80 mb-6 max-w-2xl mx-auto">
          {fromCity}出发，{days}天{days - 1}晚的精彩行程等你来探索
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={`https://www.ctrip.com/hotels/${encodeURIComponent(toCity)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white text-purple-600 font-bold rounded-xl hover:bg-gray-100 transition-all shadow-lg"
          >
            预订酒店
          </a>
          <a
            href={`https://www.12306.cn/`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-bold rounded-xl hover:bg-white/30 transition-all border border-white/30"
          >
            查看车票
          </a>
        </div>
      </div>
    </div>
  );
}
