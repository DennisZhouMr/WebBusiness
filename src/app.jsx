import Taro, { Component } from "@tarojs/taro";
import { Provider } from "@tarojs/mobx";
import Index from "./pages/index";

import counterStore from "./store/counter";

import "./app.scss";
import "@/assets/fonts/iconfont.css";

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = {
  counterStore
};

class App extends Component {
  config = {
    pages: ["pages/home/index"],
    subPackages: [
      {
        root: "pages/spread",
        pages: [
          "shopModulars/index", // 首页 - 推广 - 店铺模块
          "shopModulars/shopkeeper/index", // 首页 - 推广 - 店铺模块 --店主人
          "shopModulars/storeInformation/index", // 首页 - 推广 - 店铺模块 -- 门店信息
          "shopModulars/storeInformation/edit", // 首页 - 推广 - 店铺模块 -- 门店信息 -- 编辑
          "shopModulars/management/index", //首页 - 推广 - 店铺模块 -- 经营管理
          "shopModulars/management/status", //首页 - 推广 - 店铺模块 -- 经营管理 --选择经验业态
          "shopModulars/accountCredited/index", //首页 - 推广 - 店铺模块 -- 收款账户
          "shopModulars/creditedCode/storeCode", //首页 - 推广 - 店铺模块 -- 收款码 -- 店铺码
          "shopModulars/creditedCode/nonactivated", //首页 - 推广 - 店铺模块 -- 收款码 -- 微信扫店铺码
          "shopModulars/creditedCode/activite", //首页 - 推广 - 店铺模块 -- 收款码 -- 微信扫店铺码2
          "shopModulars/privilege/index", //首页 - 推广 - 店铺模块 -- 优惠管理
          "shopModulars/privilege/sale", //首页 - 推广 - 店铺模块 -- 优惠管理 -- 整单折扣
          "shopModulars/member/index", //首页 - 推广 - 店铺模块 -- 会员管理
          "shopModulars/member/search", //首页 - 推广 - 店铺模块 -- 会员管理 -- 搜索
          "shopModulars/member/edit", //首页 - 推广 - 店铺模块 -- 会员管理 -- 编辑
          "shopModulars/member/show", //首页 - 推广 - 店铺模块 -- 会员管理 -- 查看
          "shopModulars/addMember/index", //首页 - 推广 - 店铺模块 -- 添加会员
          "shopModulars/integral/index", //首页 - 推广 - 店铺模块 -- 积分充值
          "shopModulars/staff/index", //首页 - 推广 - 店铺模块 -- 员工管理
          "shopModulars/staff/rank", //首页 - 推广 - 店铺模块 -- 员工管理 -- 职级管理
          "shopModulars/staff/rankEdit", //首页 - 推广 - 店铺模块 -- 员工管理 -- 职级管理 --编辑
          "shopModulars/staff/add", //首页 - 推广 - 店铺模块 -- 员工管理 -- 新增员工
          "shopModulars/staff/edit", //首页 - 推广 - 店铺模块 -- 员工管理 -- 编辑员工
          "shopModulars/classify/index", //首页 - 推广 - 店铺模块 -- 分类管理
          "shopModulars/classify/add", //首页 - 推广 - 店铺模块 -- 分类管理 --添加分类
          "shopModulars/classify/edit", //首页 - 推广 - 店铺模块 -- 分类管理 --编辑分类
          "shopModulars/classify/sort", //首页 - 推广 - 店铺模块 -- 分类管理 --排序
          "shopModulars/myGoods/index", //首页 - 推广 - 店铺模块 -- 我的商品
          "shopModulars/myGoods/type", //首页 - 推广 - 店铺模块 -- 我的商品 --选择商品类型
          "shopModulars/myGoods/edit", //首页 - 推广 - 店铺模块 -- 我的商品 --选择商品类型 -- 编辑商品
          "shopModulars/myGoods/edit2", //首页 - 推广 - 店铺模块 -- 我的商品 -- 商品列表点击
          "shopModulars/myGoods/multiNorms", //首页 - 推广 - 店铺模块 -- 我的商品 -- 编辑商品 -- 多规格设置
          "shopModulars/myGoods/multiNorms2", //首页 - 推广 - 店铺模块 -- 我的商品 -- 编辑商品 -- 多规格设置
          "shopModulars/myGoods/addActivity", //首页 - 推广 - 店铺模块 -- 我的商品 --选择商品类型 -- 添加活动商品
          "shopModulars/myGoods/addWeigh", //首页 - 推广 - 店铺模块 -- 我的商品 --选择商品类型 -- 添加称重商品
          "shopModulars/myGoods/addPackage", //首页 - 推广 - 店铺模块 -- 我的商品 --选择商品类型 -- 添加套餐
          "shopModulars/myGoods/package", //首页 - 推广 - 店铺模块 -- 我的商品 --选择商品类型 -- 添加套餐
          "shopModulars/myGoods/unit", //首页 - 推广 - 店铺模块 -- 我的商品 --选择商品类型 -- 商品单位
          "shopModulars/myGoods/manageUnit", //首页 - 推广 - 店铺模块 -- 我的商品 --选择商品类型 -- 商品单位 -管理单位
          "shopModulars/myGoods/addUnit", //首页 - 推广 - 店铺模块 -- 我的商品 --选择商品类型 -- 商品单位 -添加单位
          "shopModulars/myGoods/selectType", //首页 - 推广 - 店铺模块 -- 我的商品 --选择商品类型 -- 商品分类 -选择分类
          "shopModulars/myGoods/addType", //首页 - 推广 - 店铺模块 -- 我的商品 --选择商品类型 -- 商品分类 -添加分类
          "shopModulars/myGoods/multiSpecification", //首页 - 推广 - 店铺模块 -- 我的商品 --选择商品类型 --多规格设置
          "shopModulars/marketingActivity/index", //首页 - 推广 - 店铺模块 -- 营销活动
          "shopModulars/marketingActivity/detail", //首页 - 推广 - 店铺模块 -- 营销活动 --会员激活礼
          "shopModulars/marketingActivity/activityType", //首页 - 推广 - 店铺模块 -- 营销活动 --活动类型
          "shopModulars/marketingActivity/createActivity", //首页 - 推广 - 店铺模块 -- 营销活动 --创建活动 --会员激活礼
          "shopModulars/marketingActivity/createSingleConsumer", //首页 - 推广 - 店铺模块 -- 营销活动 --创建活动 --单笔消费送礼
          "shopModulars/marketingActivity/createRemonmend", //首页 - 推广 - 店铺模块 -- 营销活动 --创建活动 --推荐有礼
          "shopModulars/marketingActivity/singleConsumer", //首页 - 推广 - 店铺模块 -- 营销活动 --单笔消费送礼
          "shopModulars/marketingActivity/remonmend", //首页 - 推广 - 店铺模块 -- 营销活动 --推荐有礼
          "shopModulars/marketingActivity/record", //首页 - 推广 - 店铺模块 -- 营销活动 --推荐有礼记录
          "shopModulars/marketingActivity/type", //首页 - 推广 - 店铺模块 -- 营销活动 --优惠类型
          "shopModulars/marketingActivity/sendCoupon", //首页 - 推广 - 店铺模块 -- 营销活动 --直接发券
          "shopModulars/marketingActivity/sendCouponCreate", //首页 - 推广 - 店铺模块 -- 营销活动 --直接发券
          "shopModulars/marketingActivity/selectProduct", //首页 - 推广 - 店铺模块 -- 营销活动 --单笔消费选择商品
          "collection/index" // 首页 - 推广 - 收款账户
        ]
      },
      {
        root: "pages/me",
        pages: [
          "account/updatePwd", //账户管理 -- 修改密码
          "account/safeCenterCheck", //账户管理 -- 安全中心 -- 核对信息
          "account/safeCenterConfirm", //账户管理 -- 安全中心
          "account/safeCenter", //账户管理 -- 安全中心
          "account/verifyMobile", //账户管理 -- 换绑定手机号 -- 验证原手机号
          "account/bindNewMobile", //账户管理 -- 换绑定手机号 -- 绑定新手机号
          "account/index" //账户管理
        ]
      },
      {
        root: "pages/login",
        pages: [
          "index", //登录
          "register", //注册
          "store", //注册 -- 店铺相关
          "manageStatus", //注册 -- 店铺相关 -- 经营状态
          "writePrice", //注册 -- 店铺相关 -- 经营状态 -- 填写客价单
          "complete" //注册 -- 店铺相关 -- 经营状态 -- 填写客价单 -- 完成注册
        ]
      },
      {
        root: "pages/getCustomer",
        pages: [
          "vip/index", // 首页 - 推广 - 获客引流  - 会员裂变
          "posterInvite/index", // 首页 - 推广 - 获客引流  - 邀请海报
          "rebate/index", // 首页 - 推广 - 获客引流  - 消费返利
          "rebate/set", // 首页 - 推广 - 获客引流  - 消费返利 - 去设置
          "interact/index", // 首页 - 推广 - 获客引流  - 互动约定
          "interact/edit", // 首页 - 推广 - 获客引流  - 编辑模板
          "interact/resend", // 首页 - 推广 - 获客引流  - 预览活动
          "interact/active", // 首页 - 推广 - 获客引流  - 营销活动
          "interact/detail", // 首页 - 推广 - 获客引流  - 营销活动详情
          "levelOpera/add", // 首页 - 推广 - 获客引流  - 互动约定
          "levelOpera/edit" // 首页 - 推广 - 获客引流  - 互动约定
        ]
      },
      {
        root: "pages/pickUpGoods",
        pages: [
          "index", //提货点开通
          "set" //设置
        ]
      },
      {
        root: "pages/createCoupon",
        pages: [
          "index", // 创建优惠券 - 选择优惠券类型
          "discount", // 创建优惠券 - 整单折扣
          "fullReduce", // 创建优惠券 - 满减
          "giftCoupon", // 创建优惠券 - 礼券
          "buyGive", // 创建优惠券 - 买赠
          "specialOffer", // 创建优惠券 - 特价商品
          "secondDiscount", // 创建优惠券 - 相同商品第二份优惠
        ]
      },
      {
        root: "pages/goodsSystem",
        pages: [
          "index", // 商品上架 - 首页
          "writeOff/index", // 商品上架  - 核销 - 首页
          "writeOff/manual", // 商品上架  - 核销 - 首页 - 手工核销
          "record/index", // 商品上架  - 核销 - 首页 - 核销记录
        ]
      },
      {
        root: "pages/order",
        pages: [
          "detail", // 订单管理 - 订单详情
          "list", // 订单管理 - 订单列表
          "sendOut", // 订单管理 - 发货
        ]
      }
    ],
    window: {
      backgroundTextStyle: "light",
      navigationBarBackgroundColor: "#fff",
      navigationBarTitleText: "WeChat",
      navigationBarTextStyle: "black",
      navigationStyle: "custom"
    }
  };

  componentDidMount() { }

  componentDidShow() { }

  componentDidHide() { }

  componentDidCatchError() { }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    );
  }
}

Taro.render(<App />, document.getElementById("app"));
