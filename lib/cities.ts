// 中国主要城市列表
export const cities = [
  // 直辖市
  "北京",
  "上海",
  "天津",
  "重庆",
  // 省会城市及热门旅游城市
  "成都",
  "杭州",
  "西安",
  "南京",
  "广州",
  "深圳",
  "武汉",
  "长沙",
  "厦门",
  "青岛",
  "大连",
  "苏州",
  "三亚",
  "丽江",
  "桂林",
  "昆明",
  "拉萨",
  "哈尔滨",
  "沈阳",
  "济南",
  "郑州",
  "合肥",
  "福州",
  "南昌",
  "贵阳",
  "兰州",
  "西宁",
  "银川",
  "呼和浩特",
  "乌鲁木齐",
  "海口",
  "南宁",
  "太原",
  "石家庄",
  "长春",
  // 热门旅游城市
  "黄山",
  "张家界",
  "九寨沟",
  "敦煌",
  "大理",
  "香格里拉",
  "北海",
  "珠海",
  "威海",
  "秦皇岛",
  "洛阳",
  "开封",
  "无锡",
  "扬州",
  "绍兴",
  "宁波",
  "泉州",
  "漳州",
  "潮州",
  "汕头",
  "佛山",
  "东莞",
  "中山",
  "惠州",
  "湛江",
  "襄阳",
  "宜昌",
  "荆州",
  "常州",
  "镇江",
  "泰州",
  "盐城",
  "连云港",
  "徐州",
  "淮安",
  "宿迁",
  "南通",
  "嘉兴",
  "湖州",
  "金华",
  "台州",
  "温州",
  "丽水",
  "衢州",
  "舟山",
  "芜湖",
  "蚌埠",
  "安庆",
  "马鞍山",
  "铜陵",
  "池州",
  "宣城",
  "滁州",
  "阜阳",
  "亳州",
  "淮南",
  "淮北",
  "六安",
];

// 搜索平台配置
export interface SearchPlatform {
  name: string;
  icon: string;
  color: string;
  getUrl: (from: string, to: string, days: number) => string;
  description: string;
}

export const searchPlatforms: SearchPlatform[] = [
  {
    name: "小红书",
    icon: "📕",
    color: "bg-red-500 hover:bg-red-600",
    getUrl: (from, to, days) =>
      `https://www.xiaohongshu.com/search_result?keyword=${encodeURIComponent(
        `${from}到${to} ${days}天 旅行攻略`
      )}`,
    description: "真实用户分享的旅行笔记和攻略",
  },
  {
    name: "马蜂窝",
    icon: "🐝",
    color: "bg-yellow-500 hover:bg-yellow-600",
    getUrl: (from, to, days) =>
      `https://www.mafengwo.cn/search/q.html?q=${encodeURIComponent(
        `${to}${days}天攻略`
      )}`,
    description: "专业旅行社区的详细攻略",
  },
  {
    name: "携程攻略",
    icon: "✈️",
    color: "bg-blue-500 hover:bg-blue-600",
    getUrl: (from, to) =>
      `https://you.ctrip.com/searchsite/search?query=${encodeURIComponent(
        `${to}旅游攻略`
      )}`,
    description: "携程旅行攻略社区",
  },
  {
    name: "抖音",
    icon: "🎵",
    color: "bg-black hover:bg-gray-800",
    getUrl: (from, to, days) =>
      `https://www.douyin.com/search/${encodeURIComponent(
        `${to}旅行vlog ${days}天`
      )}`,
    description: "视频形式的旅行攻略和vlog",
  },
  {
    name: "百度搜索",
    icon: "🔍",
    color: "bg-blue-600 hover:bg-blue-700",
    getUrl: (from, to, days) =>
      `https://www.baidu.com/s?wd=${encodeURIComponent(
        `${from}到${to} ${days}天旅游攻略`
      )}`,
    description: "综合搜索引擎聚合内容",
  },
  {
    name: "知乎",
    icon: "💡",
    color: "bg-blue-400 hover:bg-blue-500",
    getUrl: (from, to, days) =>
      `https://www.zhihu.com/search?type=content&q=${encodeURIComponent(
        `${to}旅游攻略 ${days}天`
      )}`,
    description: "深度旅行经验分享和问答",
  },
];

// 快捷关键词
export const quickKeywords = [
  { label: "美食推荐", keyword: "美食" },
  { label: "必去景点", keyword: "景点" },
  { label: "住宿攻略", keyword: "酒店住宿" },
  { label: "交通指南", keyword: "交通" },
  { label: "行程安排", keyword: "行程" },
  { label: "省钱攻略", keyword: "省钱" },
];
