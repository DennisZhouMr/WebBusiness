const listData = [
  {
    title: "资源配置",
    desc: [
      "资源整合-共享异业销售配套",
      "弥补自身劣势，降低成本、提升销售额及利润"
    ],
    data: [
      {
        title: "商圈联盟",
        desc: "整合业态捆绑销售",
        detail: "异业联动资源共享",
        btnType: "gray",
        btnText: "即将开通",
        icon: "lujing1361"
      },
      {
        title: "获取流量",
        desc: "平台提供接入私域流量有偿服务",
        detail: "花积分获取流量增销售",
        btnType: "gray",
        btnText: "即将开通",
        icon: "zu1537"
      },
      {
        title: "兑换礼品展区",
        desc: "免费提供促销商品",
        detail: "促进成交及回购率",
        btnType: "black",
        btnText: "去开通",
        icon: "zu1527"
      }
    ]
  },
  {
    title: "提升效率",
    desc: ["提升效率-多业务组合协同营销", "给客户提供消费增值服务，增强黏性"],
    data: [
      {
        title: "礼卡",
        desc: "随心搭配",
        detail: "满足客户的不同需求",
        btnType: "black",
        btnText: "即将开通",
        icon: "zu1529"
      },
      {
        title: "提货点礼品设定",
        desc: "线上货品线下提货",
        detail: "二次引流增强粘性",
        btnType: "black",
        btnText: "去开通",
        icon: "zu1535",
        url: '/pages/pickUpGoods/index'
      },
      {
        title: "赠品采购",
        desc: "轻松采购促销赠品",
        detail: "提前规划满足不同需求节省资金",
        btnType: "yellow",
        btnText: "去查看",
        icon: "lujing1425"
      }
    ]
  },
  {
    title: "商业服务",
    desc: ["商业服务-量身打造的增值服务", "解决供应链、资金、经营等系列问题"],
    data: [
      {
        title: "营销活动合作",
        desc: "线下体验性活动",
        detail: "针对线下行业活动我们出方案来引流",
        btnType: "yellow",
        btnText: "合作方式",
        icon: "zu2967"
      },
      {
        title: "兑集商学院",
        desc: "行业商业资讯、培训",
        detail: "营销运营管理技巧",
        btnType: "gray",
        btnText: "即将开通",
        icon: "zu4702"
      },
      {
        title: "广告策划",
        desc: "营销策划设计服务",
        detail: "提供策划设计解决方案",
        btnType: "yellow",
        btnText: "去查看",
        icon: "zu1540"
      }
    ]
  }
];

const statementData = [
  {
    title: "经营数据",
    children: [
      { name: "营收概况", icon: "lianhe104" },
      { name: "财务概览", icon: "lianhe105" },
      { name: "订单明细", icon: "lianhe106" },
      { name: "商品销量", icon: "lianhe102" },
      { name: "营销积分", icon: "lianhe103" }
    ]
  },
  {
    title: "扫码收款",
    children: [
      { name: "收款结算", icon: "lianhe99" },
      { name: "收款流水", icon: "lianhe98" }
    ]
  },
  {
    title: "客户数据",
    children: [{ name: "我的粉丝", icon: "lianhe101" }]
  }
];

export { listData, statementData };
