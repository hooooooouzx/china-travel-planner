"use client";

import { useState } from "react";
import CityForm from "@/components/CityForm";
import SearchResults from "@/components/SearchResults";

export default function Home() {
  const [searchParams, setSearchParams] = useState<{
    from: string;
    to: string;
    days: number;
  } | null>(null);

  const handleSearch = (from: string, to: string, days: number) => {
    setSearchParams({ from, to, days });
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* 头部 */}
      <div className="pt-12 pb-8 px-4">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            中国旅行攻略
          </h1>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            输入出发城市和目的地，一键搜索各大平台的旅行攻略
          </p>
        </div>
      </div>

      {/* 表单区域 */}
      <div className="px-4 pb-8">
        <CityForm onSearch={handleSearch} />
      </div>

      {/* 搜索结果 */}
      {searchParams && (
        <div className="px-4 pb-12">
          <SearchResults
            fromCity={searchParams.from}
            toCity={searchParams.to}
            days={searchParams.days}
          />
        </div>
      )}

      {/* 底部 */}
      <footer className="py-6 text-center text-gray-400 text-sm">
        <p>中国旅行攻略聚合搜索</p>
      </footer>
    </main>
  );
}
