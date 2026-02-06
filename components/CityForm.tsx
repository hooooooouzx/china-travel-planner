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
    if (!fromInput) return cities.slice(0, 10);
    return cities.filter((city) => city.includes(fromInput)).slice(0, 10);
  }, [fromInput]);

  const filteredToCities = useMemo(() => {
    if (!toInput) return cities.slice(0, 10);
    return cities.filter((city) => city.includes(toInput)).slice(0, 10);
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

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {/* 出发城市 */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">
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
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 placeholder-gray-400"
            />
            {showFromDropdown && filteredFromCities.length > 0 && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-48 overflow-y-auto">
                {filteredFromCities.map((city) => (
                  <button
                    key={city}
                    type="button"
                    onClick={() => selectFromCity(city)}
                    className="w-full px-4 py-2 text-left hover:bg-blue-50 text-gray-700 transition-colors"
                  >
                    {city}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* 目的地城市 */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">
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
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 placeholder-gray-400"
            />
            {showToDropdown && filteredToCities.length > 0 && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-48 overflow-y-auto">
                {filteredToCities.map((city) => (
                  <button
                    key={city}
                    type="button"
                    onClick={() => selectToCity(city)}
                    className="w-full px-4 py-2 text-left hover:bg-blue-50 text-gray-700 transition-colors"
                  >
                    {city}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* 出行天数 */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            出行天数
          </label>
          <div className="flex gap-2 flex-wrap">
            {[1, 2, 3, 4, 5, 6, 7].map((d) => (
              <button
                key={d}
                type="button"
                onClick={() => setDays(d)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  days === d
                    ? "bg-blue-500 text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {d}天
              </button>
            ))}
          </div>
        </div>

        {/* 搜索按钮 */}
        <button
          type="submit"
          disabled={!fromCity || !toCity}
          className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed text-lg"
        >
          搜索旅行攻略
        </button>
      </div>
    </form>
  );
}
