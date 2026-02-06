"use client";

import { useState, useMemo } from "react";
import { cities } from "@/lib/cities";

interface CityFormProps {
  onSearch: (from: string, to: string, days: number) => void;
}

export default function CityForm({ onSearch }: CityFormProps) {
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [days, setDays] = useState(3);
  const [fromInput, setFromInput] = useState("");
  const [toInput, setToInput] = useState("");
  const [showFromDropdown, setShowFromDropdown] = useState(false);
  const [showToDropdown, setShowToDropdown] = useState(false);

  const filteredFromCities = useMemo(() => {
    if (!fromInput) return cities.slice(0, 8);
    return cities.filter((city) => city.includes(fromInput)).slice(0, 8);
  }, [fromInput]);

  const filteredToCities = useMemo(() => {
    if (!toInput) return cities.slice(0, 8);
    return cities.filter((city) => city.includes(toInput)).slice(0, 8);
  }, [toInput]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (fromCity && toCity) {
      onSearch(fromCity, toCity, days);
    }
  };

  const selectFromCity = (city: string) => {
    setFromCity(city);
    setFromInput(city);
    setShowFromDropdown(false);
  };

  const selectToCity = (city: string) => {
    setToCity(city);
    setToInput(city);
    setShowToDropdown(false);
  };

  // 热门目的地
  const hotDestinations = ["成都", "西安", "杭州", "北京", "上海", "邯郸"];

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-4xl mx-auto">
      <div className="backdrop-blur-xl bg-white/70 rounded-3xl shadow-2xl p-8 md:p-10 border border-white/20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* 出发城市 */}
          <div className="relative group">
            <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white text-sm">出</span>
              出发城市
            </label>
            <input
              type="text"
              value={fromInput}
              onChange={(e) => {
                setFromInput(e.target.value);
                setFromCity(e.target.value);
                setShowFromDropdown(true);
              }}
              onFocus={() => setShowFromDropdown(true)}
              onBlur={() => setTimeout(() => setShowFromDropdown(false), 200)}
              placeholder="请输入出发城市"
              className="w-full px-5 py-4 bg-white/80 border-2 border-gray-100 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-gray-800 placeholder-gray-400 text-lg font-medium"
            />
            {showFromDropdown && filteredFromCities.length > 0 && (
              <div className="absolute z-20 w-full mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 max-h-64 overflow-y-auto">
                {filteredFromCities.map((city) => (
                  <button
                    key={city}
                    type="button"
                    onClick={() => selectFromCity(city)}
                    className="w-full px-5 py-3 text-left hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 text-gray-700 transition-all first:rounded-t-2xl last:rounded-b-2xl font-medium"
                  >
                    {city}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* 目的地城市 */}
          <div className="relative group">
            <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-sm">到</span>
              目的地城市
            </label>
            <input
              type="text"
              value={toInput}
              onChange={(e) => {
                setToInput(e.target.value);
                setToCity(e.target.value);
                setShowToDropdown(true);
              }}
              onFocus={() => setShowToDropdown(true)}
              onBlur={() => setTimeout(() => setShowToDropdown(false), 200)}
              placeholder="请输入目的地城市"
              className="w-full px-5 py-4 bg-white/80 border-2 border-gray-100 rounded-2xl focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 transition-all text-gray-800 placeholder-gray-400 text-lg font-medium"
            />
            {showToDropdown && filteredToCities.length > 0 && (
              <div className="absolute z-20 w-full mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 max-h-64 overflow-y-auto">
                {filteredToCities.map((city) => (
                  <button
                    key={city}
                    type="button"
                    onClick={() => selectToCity(city)}
                    className="w-full px-5 py-3 text-left hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 text-gray-700 transition-all first:rounded-t-2xl last:rounded-b-2xl font-medium"
                  >
                    {city}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* 出行天数 */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm">天</span>
              出行天数
            </label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5, 6, 7].map((d) => (
                <button
                  key={d}
                  type="button"
                  onClick={() => setDays(d)}
                  className={`flex-1 py-4 rounded-xl font-bold transition-all text-lg ${
                    days === d
                      ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-orange-500/30 scale-105"
                      : "bg-white/80 text-gray-500 hover:bg-gray-50 border-2 border-gray-100"
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 热门目的地 */}
        <div className="mb-8">
          <p className="text-sm text-gray-500 mb-3">热门目的地：</p>
          <div className="flex flex-wrap gap-2">
            {hotDestinations.map((city) => (
              <button
                key={city}
                type="button"
                onClick={() => {
                  setToCity(city);
                  setToInput(city);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  toCity === city
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md"
                    : "bg-white/60 text-gray-600 hover:bg-white hover:shadow-md border border-gray-200"
                }`}
              >
                {city}
              </button>
            ))}
          </div>
        </div>

        {/* 搜索按钮 */}
        <button
          type="submit"
          disabled={!fromCity || !toCity}
          className="w-full py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 text-xl relative overflow-hidden group"
        >
          <span className="relative z-10 flex items-center justify-center gap-3">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            开始探索旅程
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity" />
        </button>
      </div>
    </form>
  );
}
