import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtInput, AtTabs, AtTabsPane } from "taro-ui";
import IconFont from "@/components/iconfont";
import Root from "@/components/Root";
import Caption from "@/components/Caption";
import TabBarBottom from "@/components/TabBarBottom";
import GoodsTab from "../components/myGoods/goodsTab";
import SupplyChainTabs from "../components/myGoods/supplyChainTabs";

import "./index.scss";

export default class extends Component {
  config = {
    navigationBarTitleText: "我的商品"
  };
  state = {
    search: "",
    current: 0,
    tabList: [{ title: "自营商品" }, { title: "兑集供应链" }]
  };
  handleTabClick = value => {
    this.setState({
      current: value
    });
  };
  handleTabBarClick = index => {
    switch (index) {
      case 0:
        Taro.navigateTo({ url: "/pages/spread/shopModulars/classify/index" });
        break;
      case "center":
        Taro.navigateTo({ url: "/pages/spread/shopModulars/myGoods/type" });
        break;
      default:
        Taro.navigateBack();;
        break;
    }
  };
  render() {
    const AtTabBarList = [
      {
        title: "分类管理",
        iconPrefixClass: "icon",
        iconType: "zu1714"
      },
      { title: "", special: true },
      {
        title: "退出",
        iconPrefixClass: "icon",
        iconType: "zu1856"
      }
    ];
    const { tabList, current, search } = this.state;
    return (
      <Root background={{ background: 'linear-gradient(0deg, #ffffff, #f5f5f5)' }} >
        <View className="common-wrapper myGoods-wrapper">
          <Caption text="我的商品" iconType="zu2095" />
          <View className="myGoods-main">
            {/* <View className="search-bar">
              <View className="extra">
                <IconFont name="gantanhao" size={28} color="#229e8e" />
              </View>
              <View className="content">
                <IconFont name="search" size={36} />
                <AtInput
                  className="input-content"
                  type="text"
                  placeholder="搜索本地商品名称"
                  value={search}
                  onChange={value => {
                    this.setState({ search: value });
                  }}
                />
              </View>
            </View> */}
            <AtTabs
              className="tab-container myGoods-tab"
              scroll
              current={current}
              tabList={tabList}
              onClick={this.handleTabClick}
            >
              <AtTabsPane current={current} index={0}>
                <GoodsTab />
              </AtTabsPane>
              <AtTabsPane current={current} index={1}>
                <SupplyChainTabs />
              </AtTabsPane>
            </AtTabs>
          </View>
          <TabBarBottom
            iconSize={21}
            fontSize={14}
            centerText="添加商品"
            centerIcon="plus"
            tabList={AtTabBarList}
            onTabBarClick={this.handleTabBarClick}
          />
        </View>
      </Root>
    );
  }
}
