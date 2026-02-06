// 旅行攻略数据
export interface TravelSpot {
  name: string;
  description: string;
  image: string;
  rating: number;
  tips: string[];
}

export interface TravelFood {
  name: string;
  description: string;
  image: string;
  price: string;
  recommendation: string;
}

export interface TravelGuide {
  city: string;
  description: string;
  heroImage: string;
  bestTime: string;
  avgBudget: string;
  spots: TravelSpot[];
  foods: TravelFood[];
  transportation: string[];
  accommodation: string[];
  videoUrl?: string;
}

// 城市旅游数据
export const travelGuides: Record<string, TravelGuide> = {
  北京: {
    city: "北京",
    description: "中国的首都，拥有三千多年的历史，是世界著名的古都和现代化国际城市。故宫、长城、颐和园等世界文化遗产让这座城市充满魅力。",
    heroImage: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1200",
    bestTime: "4-5月、9-10月",
    avgBudget: "300-500元/天",
    spots: [
      {
        name: "故宫博物院",
        description: "世界上现存规模最大、保存最为完整的木质结构古建筑之一，中国明清两代的皇家宫殿。",
        image: "https://images.unsplash.com/photo-1584952296092-bf7e0dad56a4?w=600",
        rating: 4.9,
        tips: ["建议提前网上预约", "游览时间约3-4小时", "周一闭馆"]
      },
      {
        name: "长城（八达岭）",
        description: "世界七大奇迹之一，蜿蜒于崇山峻岭之间，是中国古代的军事防御工程。",
        image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=600",
        rating: 4.8,
        tips: ["建议早上出发避开人流", "穿舒适的鞋子", "带足饮用水"]
      },
      {
        name: "颐和园",
        description: "中国清朝时期皇家园林，被誉为「皇家园林博物馆」，是保存最完整的皇家行宫御苑。",
        image: "https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?w=600",
        rating: 4.7,
        tips: ["可以乘船游览昆明湖", "春季赏花最佳", "建议游览半天"]
      }
    ],
    foods: [
      {
        name: "北京烤鸭",
        description: "北京最著名的美食，外皮酥脆，肉质鲜嫩，配以葱丝、黄瓜和甜面酱。",
        image: "https://images.unsplash.com/photo-1518492104633-130d0cc84637?w=600",
        price: "人均150-300元",
        recommendation: "全聚德、大董、四季民福"
      },
      {
        name: "老北京炸酱面",
        description: "传统北京小吃，面条筋道，炸酱香浓，配以黄瓜丝、豆芽等菜码。",
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600",
        price: "人均20-40元",
        recommendation: "海碗居、老北京炸酱面大王"
      }
    ],
    transportation: ["地铁覆盖主要景点，推荐办理一卡通", "出租车起步价13元", "建议避开早晚高峰"],
    accommodation: ["王府井、前门地区交通便利", "五道口、三里屯适合年轻人", "预算充足可选故宫周边酒店"],
    videoUrl: "https://www.bilibili.com/video/BV1xx411c7XW"
  },
  上海: {
    city: "上海",
    description: "中国最大的经济中心城市，东西方文化交融的国际大都市。外滩的万国建筑博览群、现代化的陆家嘴天际线，展现着这座城市的独特魅力。",
    heroImage: "https://images.unsplash.com/photo-1474181487882-5abf3f0ba6c2?w=1200",
    bestTime: "3-5月、9-11月",
    avgBudget: "400-600元/天",
    spots: [
      {
        name: "外滩",
        description: "上海的标志性景观，沿黄浦江西岸的万国建筑博览群，夜景尤为壮观。",
        image: "https://images.unsplash.com/photo-1474181487882-5abf3f0ba6c2?w=600",
        rating: 4.8,
        tips: ["夜景最美", "建议傍晚前往", "可乘坐黄浦江游船"]
      },
      {
        name: "迪士尼乐园",
        description: "中国大陆首座迪士尼主题乐园，拥有全球最高最大的奇幻童话城堡。",
        image: "https://images.unsplash.com/photo-1597466599360-3b9775841aec?w=600",
        rating: 4.7,
        tips: ["工作日人少", "提前下载APP预约项目", "建议游玩一整天"]
      },
      {
        name: "田子坊",
        description: "由上海特有的石库门建筑群改建而成的创意园区，充满文艺气息。",
        image: "https://images.unsplash.com/photo-1548919973-5cef591cdbc9?w=600",
        rating: 4.5,
        tips: ["适合拍照打卡", "有很多特色小店", "下午茶时光最佳"]
      }
    ],
    foods: [
      {
        name: "小笼包",
        description: "上海特色点心，皮薄汁多，鲜香可口，是来上海必尝的美食。",
        image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=600",
        price: "人均30-60元",
        recommendation: "南翔馒头店、佳家汤包、鼎泰丰"
      },
      {
        name: "生煎包",
        description: "底部金黄酥脆，上部柔软，汤汁丰富，是上海的传统小吃。",
        image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600",
        price: "人均15-30元",
        recommendation: "小杨生煎、大壶春"
      }
    ],
    transportation: ["地铁网络发达，覆盖全市", "可使用支付宝/微信乘车码", "浦东机场到市区约1小时"],
    accommodation: ["南京路、人民广场购物方便", "陆家嘴看夜景绝佳", "法租界区域文艺氛围浓厚"],
    videoUrl: "https://www.bilibili.com/video/BV1Wp4y1W7rV"
  },
  成都: {
    city: "成都",
    description: "天府之国的省会，以悠闲的生活节奏和丰富的美食文化闻名。大熊猫、川菜、茶馆构成了这座城市的独特符号。",
    heroImage: "https://images.unsplash.com/photo-1590103514966-5e2a11c13e21?w=1200",
    bestTime: "3-6月、9-11月",
    avgBudget: "250-400元/天",
    spots: [
      {
        name: "大熊猫繁育研究基地",
        description: "世界上最大的大熊猫人工繁育基地，可以近距离观看国宝大熊猫。",
        image: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=600",
        rating: 4.9,
        tips: ["建议早上8点前到达", "上午熊猫最活跃", "可以看熊猫幼崽"]
      },
      {
        name: "宽窄巷子",
        description: "成都的历史文化街区，由宽巷子、窄巷子和井巷子组成，展现老成都的生活。",
        image: "https://images.unsplash.com/photo-1590103514966-5e2a11c13e21?w=600",
        rating: 4.6,
        tips: ["下午人少", "有很多特色小吃", "可以体验掏耳朵"]
      },
      {
        name: "都江堰",
        description: "世界文化遗产，两千多年前的水利工程至今仍在发挥作用，被誉为世界水利文化的鼻祖。",
        image: "https://images.unsplash.com/photo-1528164344705-47542687000d?w=600",
        rating: 4.7,
        tips: ["可以和青城山一起游览", "建议请导游讲解", "感受古人智慧"]
      }
    ],
    foods: [
      {
        name: "火锅",
        description: "成都火锅麻辣鲜香，食材丰富，是成都人社交聚会的首选美食。",
        image: "https://images.unsplash.com/photo-1555126634-323283e090fa?w=600",
        price: "人均80-150元",
        recommendation: "小龙坎、大龙燚、蜀大侠"
      },
      {
        name: "担担面",
        description: "成都传统小吃，面条细薄，卤汁酥香，咸鲜微辣，香气扑鼻。",
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600",
        price: "人均15-25元",
        recommendation: "洞子口张老二、陈麻婆豆腐"
      }
    ],
    transportation: ["地铁覆盖主要景点", "打车便宜，起步价8元", "去熊猫基地可坐景区直通车"],
    accommodation: ["春熙路、太古里最繁华", "宽窄巷子附近有特色民宿", "天府广场交通最便利"],
    videoUrl: "https://www.bilibili.com/video/BV1nt411Y7S6"
  },
  西安: {
    city: "西安",
    description: "十三朝古都，丝绸之路的起点，拥有兵马俑、大雁塔、古城墙等众多历史遗迹。这里是感受中华文明厚重历史的最佳去处。",
    heroImage: "https://images.unsplash.com/photo-1624344653076-8f9e23ec0ad9?w=1200",
    bestTime: "3-5月、9-11月",
    avgBudget: "250-400元/天",
    spots: [
      {
        name: "秦始皇兵马俑",
        description: "世界第八大奇迹，展现了秦朝军队的宏伟阵容，是中国古代辉煌文明的见证。",
        image: "https://images.unsplash.com/photo-1624344653076-8f9e23ec0ad9?w=600",
        rating: 4.9,
        tips: ["建议请讲解员", "游览约3-4小时", "可以和华清宫一起游览"]
      },
      {
        name: "西安古城墙",
        description: "中国现存规模最大、保存最完整的古代城垣，可以骑行或步行环绕一周。",
        image: "https://images.unsplash.com/photo-1545893835-abaa50cbe628?w=600",
        rating: 4.7,
        tips: ["可以租自行车骑行", "傍晚上城墙看日落", "全长约14公里"]
      },
      {
        name: "回民街",
        description: "西安著名的美食文化街区，汇集了各种西安特色小吃和清真美食。",
        image: "https://images.unsplash.com/photo-1555126634-323283e090fa?w=600",
        rating: 4.5,
        tips: ["晚上最热闹", "可以边走边吃", "注意分辨老字号"]
      }
    ],
    foods: [
      {
        name: "肉夹馍",
        description: "西安最具代表性的小吃，外酥里嫩的白吉馍夹上酥烂的腊汁肉。",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600",
        price: "人均8-15元",
        recommendation: "子午路张记、樊记"
      },
      {
        name: "羊肉泡馍",
        description: "西安传统名吃，需要自己掰馍，汤浓肉烂，回味无穷。",
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600",
        price: "人均30-50元",
        recommendation: "老孙家、同盛祥"
      }
    ],
    transportation: ["地铁覆盖市区主要景点", "去兵马俑可坐游5路公交", "古城内可以租自行车"],
    accommodation: ["钟鼓楼附近位置最佳", "回民街附近美食方便", "大雁塔附近环境清静"],
    videoUrl: "https://www.bilibili.com/video/BV1J4411W7VA"
  },
  杭州: {
    city: "杭州",
    description: "上有天堂下有苏杭，西湖美景、龙井茶香、历史古迹与现代科技在这里完美融合，是中国最宜居的城市之一。",
    heroImage: "https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?w=1200",
    bestTime: "3-5月、9-11月",
    avgBudget: "300-500元/天",
    spots: [
      {
        name: "西湖",
        description: "世界文化遗产，中国十大风景名胜之一，苏堤春晓、断桥残雪等西湖十景闻名天下。",
        image: "https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?w=600",
        rating: 4.9,
        tips: ["可以租船游湖", "骑行环湖约3小时", "雷峰塔看日落绝佳"]
      },
      {
        name: "灵隐寺",
        description: "中国著名的佛教寺院，始建于东晋，是杭州最早的名刹。",
        image: "https://images.unsplash.com/photo-1548919973-5cef591cdbc9?w=600",
        rating: 4.7,
        tips: ["可以品尝素斋", "飞来峰石刻值得一看", "建议早上前往"]
      },
      {
        name: "千岛湖",
        description: "国家5A级景区，湖中散布着1078个岛屿，碧水青山，风景如画。",
        image: "https://images.unsplash.com/photo-1559628376-f3fe5f782a2e?w=600",
        rating: 4.6,
        tips: ["建议住一晚", "可以乘船游览", "鱼头是必吃美食"]
      }
    ],
    foods: [
      {
        name: "西湖醋鱼",
        description: "杭州传统名菜，选用西湖草鱼，肉质鲜嫩，酸甜可口。",
        image: "https://images.unsplash.com/photo-1534766555764-ce878a5add9b?w=600",
        price: "人均60-100元",
        recommendation: "楼外楼、知味观"
      },
      {
        name: "东坡肉",
        description: "以苏东坡命名的杭州名菜，肥而不腻，酥烂香浓。",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600",
        price: "人均50-80元",
        recommendation: "楼外楼、外婆家"
      }
    ],
    transportation: ["地铁可达西湖、灵隐寺等景点", "西湖边有公共自行车", "去千岛湖可乘高铁"],
    accommodation: ["西湖边酒店风景最佳", "河坊街附近体验老杭州", "西溪湿地附近安静舒适"],
    videoUrl: "https://www.bilibili.com/video/BV1sb411H7FR"
  },
  邯郸: {
    city: "邯郸",
    description: "国家历史文化名城，成语典故之都，战国时期赵国都城。邯郸学步、完璧归赵、负荆请罪等成语均出自这里，文化底蕴深厚。",
    heroImage: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=1200",
    bestTime: "4-5月、9-10月",
    avgBudget: "200-300元/天",
    spots: [
      {
        name: "娲皇宫",
        description: "全国规模最大、建筑时间最早的祀奉女娲的古建筑群，被誉为华夏祖庙。",
        image: "https://images.unsplash.com/photo-1548919973-5cef591cdbc9?w=600",
        rating: 4.7,
        tips: ["山路较陡注意安全", "可以参观吊庙", "感受女娲文化"]
      },
      {
        name: "广府古城",
        description: "中国北方唯一的旱地水城，太极拳发源地，城墙保存完好，护城河环绕。",
        image: "https://images.unsplash.com/photo-1545893835-abaa50cbe628?w=600",
        rating: 4.6,
        tips: ["可以骑行城墙", "品尝广府酥鱼", "体验太极文化"]
      },
      {
        name: "丛台公园",
        description: "以赵国丛台为核心的园林，武灵丛台是赵武灵王检阅军队的地方，是邯郸的象征。",
        image: "https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?w=600",
        rating: 4.4,
        tips: ["了解赵国历史", "公园免费开放", "适合休闲散步"]
      },
      {
        name: "响堂山石窟",
        description: "北齐时期开凿的佛教石窟，与龙门石窟、云冈石窟齐名，石刻艺术精美。",
        image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=600",
        rating: 4.5,
        tips: ["分南北两处石窟", "建议请导游讲解", "摄影爱好者必去"]
      }
    ],
    foods: [
      {
        name: "驴肉火烧",
        description: "邯郸特色小吃，外酥里嫩的火烧夹上卤制驴肉，香而不腻。",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600",
        price: "人均10-20元",
        recommendation: "老字号驴肉火烧店"
      },
      {
        name: "广府酥鱼",
        description: "广府古城特色美食，鱼肉酥烂，骨刺皆酥，入口即化。",
        image: "https://images.unsplash.com/photo-1534766555764-ce878a5add9b?w=600",
        price: "人均40-60元",
        recommendation: "广府古城内餐馆"
      },
      {
        name: "大名五百居香肠",
        description: "邯郸大名县特产，有300多年历史，色泽鲜艳，香味浓郁。",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600",
        price: "人均20-40元",
        recommendation: "五百居老店"
      }
    ],
    transportation: ["市内公交覆盖主要景点", "高铁可达北京、郑州等城市", "自驾游览更方便"],
    accommodation: ["市中心丛台区交通便利", "广府古城可住民宿体验", "火车站附近出行方便"],
    videoUrl: "https://www.bilibili.com/video/BV1hE411T7Aa"
  }
};

// 获取城市攻略数据
export function getTravelGuide(city: string): TravelGuide | null {
  return travelGuides[city] || null;
}

// 生成默认攻略（用于没有预设数据的城市）
export function generateDefaultGuide(city: string): TravelGuide {
  return {
    city,
    description: `${city}是一座美丽的城市，欢迎您来探索这里的风土人情和特色美食。`,
    heroImage: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=1200",
    bestTime: "春秋季节",
    avgBudget: "200-400元/天",
    spots: [
      {
        name: `${city}市中心`,
        description: `探索${city}的城市风貌，感受当地的生活气息。`,
        image: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=600",
        rating: 4.5,
        tips: ["可以在当地询问推荐景点", "尝试当地特色美食", "感受城市文化"]
      }
    ],
    foods: [
      {
        name: "当地特色美食",
        description: `品尝${city}的地方特色小吃，体验当地饮食文化。`,
        image: "https://images.unsplash.com/photo-1555126634-323283e090fa?w=600",
        price: "人均30-80元",
        recommendation: "询问当地人推荐"
      }
    ],
    transportation: ["建议提前查询当地交通信息", "可以使用地图APP导航", "出租车或网约车较方便"],
    accommodation: ["市中心交通便利", "可以在携程等平台预订", "根据预算选择合适住所"]
  };
}
