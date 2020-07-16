const shopData = [
  {
    title: "开店",
    children: [
      {
        icon: "zu1701",
        title: "店主人",
        desc: "邀请发起人",
        btnText: "已捆绑",
        btnType: "done",
        btnUrl: "/pages/spread/shopModulars/shopkeeper/index"
      },
      {
        icon: "zu1673",
        title: "门店信息",
        desc: "网络上相关信息",
        btnText: "去更改",
        btnType: "done",
        btnUrl: "/pages/spread/shopModulars/storeInformation/index"
      },
      {
        icon: "zu1707",
        title: "经营管理",
        desc: "店铺相关业态",
        btnText: "去更改",
        btnType: "done",
        btnUrl: "/pages/spread/shopModulars/management/index"
      },
      {
        icon: "zu1707",
        title: "收款账户",
        desc: "结算方式",
        btnText: "去设置",
        btnType: "edit",
        btnUrl: "/pages/spread/shopModulars/accountCredited/index"
      },
      {
        icon: "zu1706",
        title: "收款码",
        desc: "扫码加粉优惠买单",
        btnText: "已生成",
        btnType: "done",
        btnUrl: "/pages/spread/shopModulars/creditedCode/nonactivated"
      }
    ]
  },
  {
    title: "商品管理",
    children: [
      {
        icon: "zu2090",
        title: "我的商品",
        desc: "发布产品前编辑",
        btnText: "去编辑",
        btnType: "edit",
        btnUrl: "/pages/spread/shopModulars/myGoods/index"
      },
      {
        icon: "zu1714",
        title: "分类管理",
        desc: "快速筛选商品",
        btnText: "去编辑",
        btnType: "edit",
        btnUrl: "/pages/spread/shopModulars/classify/index"
      }
    ]
  },
  {
    title: "运营",
    children: [
      {
        icon: "zu2095",
        title: "员工管理",
        desc: "职级分工",
        btnText: "去添加",
        btnType: "edit",
        btnUrl: "/pages/spread/shopModulars/staff/index"
      },
      {
        icon: "zu2896",
        title: "营销活动",
        desc: "多类型的营销方式",
        btnText: "去创建",
        btnType: "edit",
        btnUrl: "/pages/spread/shopModulars/marketingActivity/index"
      },
      {
        icon: "zu1726",
        title: "用户评价",
        desc: "收集服务数据",
        btnText: "未开通",
        btnType: "disabled",
        btnUrl: ""
      }
    ]
  },
  {
    title: "会员",
    children: [
      {
        icon: "zu1725",
        title: "添加会员",
        desc: "直接邀请为会员",
        btnText: "去添加",
        btnType: "done",
        btnUrl: "/pages/spread/shopModulars/addMember/index"
      },
      {
        icon: "zu4458",
        title: "会员管理",
        desc: "会员概况数据",
        btnText: "去查看",
        btnType: "done",
        btnUrl: "/pages/spread/shopModulars/staff/index"
      },
      {
        icon: "zu1731",
        title: "短信/验密",
        desc: "营销短信",
        btnText: "未开通",
        btnType: "disabled",
        btnUrl: ""
      }
    ]
  },
  {
    title: "优惠买单",
    children: [
      {
        icon: "zu4675",
        title: "优惠管理",
        desc: "优惠券信息",
        btnText: "去核销",
        btnType: "done",
        btnUrl: "/pages/spread/shopModulars/privilege/index"
      },
      {
        icon: "zu4462",
        title: "积分充值",
        desc: "充值通道",
        btnText: "去充值",
        btnType: "done",
        btnUrl: "/pages/spread/shopModulars/integral/index"
      }
    ]
  },
  {
    title: "其他",
    children: [
      {
        icon: "zu1746",
        title: "微信授权",
        desc: "授权发布平台关联",
        btnText: "去设置",
        btnType: "edit",
        btnUrl: ""
      }
    ]
  }
];

const manageData = [
  {
    id: 1,
    name: "餐饮",
    children: [
      { parentId: 1, name: "中餐", active: false },
      { parentId: 1, name: "甜点饮品", active: false },
      { parentId: 1, name: "小吃快餐", active: false },
      { parentId: 1, name: "西餐", active: false },
      { parentId: 1, name: "日韩料理", active: false },
      { parentId: 1, name: "烧烤烤肉", active: false },
      { parentId: 1, name: "火锅", active: false },
      { parentId: 1, name: "面食快餐", active: false },
      { parentId: 1, name: "香锅/烤鱼", active: false },
      { parentId: 1, name: "美食广场(档口)", active: false },
      { parentId: 1, name: "咖啡厅", active: false },
      { parentId: 1, name: "自助餐", active: false },
      { parentId: 1, name: "海鲜", active: false },
      { parentId: 1, name: "团餐", active: false },
      { parentId: 1, name: "宴会餐", active: false },
      { parentId: 1, name: "其他", active: false }
    ]
  },
  {
    id: 2,
    name: "酒店旅游",
    children: [
      { parentId: 2, name: "酒店旅游", active: false },
      { parentId: 2, name: "民俗/公寓", active: false },
      { parentId: 2, name: "景点/门票", active: false },
      { parentId: 2, name: "周边游/旅游", active: false },
      { parentId: 2, name: "其他", active: false }
    ]
  },
  {
    id: 3,
    name: "美业健身",
    children: [
      { parentId: 3, name: "医学美容", active: false },
      { parentId: 3, name: "美发造型", active: false },
      { parentId: 3, name: "美容美体", active: false },
      { parentId: 3, name: "瘦身塑形", active: false },
      { parentId: 3, name: "瑜伽舞蹈", active: false },
      { parentId: 3, name: "美甲美睫", active: false },
      { parentId: 3, name: "韩式定妆", active: false },
      { parentId: 3, name: "祛痘", active: false },
      { parentId: 3, name: "健身锻炼", active: false },
      { parentId: 3, name: "健身锻炼", active: false },
      { parentId: 3, name: "球类运动", active: false },
      { parentId: 3, name: "武术格斗", active: false },
      { parentId: 3, name: "休闲运动", active: false },
      { parentId: 3, name: "其他", active: false }
    ]
  },
  {
    id: 4,
    name: "零售",
    children: [
      { parentId: 4, name: "服饰/鞋帽/箱包", active: false },
      { parentId: 4, name: "零食/酒/水", active: false },
      { parentId: 4, name: "百货家纺", active: false },
      { parentId: 4, name: "美妆个护", active: false },
      { parentId: 4, name: "水果生鲜", active: false },
      { parentId: 4, name: "便利店", active: false },
      { parentId: 4, name: "母婴玩具", active: false },
      { parentId: 4, name: "药品", active: false },
      { parentId: 4, name: "鲜花/绿植", active: false },
      { parentId: 4, name: "数码家电", active: false },
      { parentId: 4, name: "家居/建材", active: false },
      { parentId: 4, name: "熟食", active: false },
      { parentId: 4, name: "茶叶", active: false },
      { parentId: 4, name: "其他", active: false }
    ]
  },
  {
    id: 5,
    name: "亲子乐园",
    children: [
      { parentId: 5, name: "亲子游乐", active: false },
      { parentId: 5, name: "幼儿教育", active: false },
      { parentId: 5, name: "亲子摄影", active: false },
      { parentId: 5, name: "孕产护理", active: false },
      { parentId: 5, name: "其他", active: false }
    ]
  },
  {
    id: 6,
    name: "休闲娱乐",
    children: [
      { parentId: 6, name: "按摩/足疗", active: false },
      { parentId: 6, name: "洗浴/桑拿", active: false },
      { parentId: 6, name: "KTV", active: false },
      { parentId: 6, name: "网咖/电竞", active: false },
      { parentId: 6, name: "团建拓展", active: false },
      { parentId: 6, name: "酒吧", active: false },
      { parentId: 6, name: "茶馆", active: false },
      { parentId: 6, name: "棋牌室", active: false },
      { parentId: 6, name: "咖啡馆", active: false },
      { parentId: 6, name: "采摘/农家乐", active: false },
      { parentId: 6, name: "轰趴馆", active: false },
      { parentId: 6, name: "私人影院", active: false },
      { parentId: 6, name: "新奇体验", active: false },
      { parentId: 6, name: "养生馆", active: false },
      { parentId: 6, name: "其他", active: false }
    ]
  },
  {
    id: 7,
    name: "生活",
    children: [
      { parentId: 7, name: "学习培训", active: false },
      { parentId: 7, name: "结婚/摄影", active: false },
      { parentId: 7, name: "生活服务", active: false },
      { parentId: 7, name: "医疗/牙科", active: false },
      { parentId: 7, name: "家居/装修", active: false },
      { parentId: 7, name: "其他", active: false }
    ]
  }
];

const discountCoupon = [
  {
    name: "券名称",
    desc: "整单折扣率 95%",
    expiryData: "永久有效",
    type: "整单折扣",
    url: "/pages/spread/shopModulars/privilege/sale"
  },
  {
    name: "券名称",
    desc: "满0元减0元",
    expiryData: "永久有效",
    type: "满减",
    url: ""
  },
  {
    name: "券名称",
    desc: "商品名称折扣率 60%",
    expiryData: "永久有效",
    type: "特价商品",
    url: ""
  },
  {
    name: "券名称",
    desc: "商品名称折扣率 60%",
    expiryData: "永久有效",
    type: "第二份优惠",
    url: ""
  },
  {
    name: "券名称",
    desc: "商品名称减免金额 0元",
    expiryData: "永久有效",
    type: "第二份减免",
    url: ""
  },
  { name: "券名称", desc: "", expiryData: "永久有效", type: "买赠", url: "" },
  { name: "券名称", desc: "", expiryData: "永久有效", type: "礼券", url: "" }
];

export { shopData, manageData, discountCoupon };
