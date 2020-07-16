import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtButton, AtTabs, AtTabsPane } from "taro-ui";
import IconFont from "@/components/iconfont";
import Root from "@/components/Root";
import NavBar from "@/components/NavBar";

import "./sale.scss";

export default class extends Component {
  config = {
    navigationBarTitleText: "整单折扣"
  };
  state = {
    current: 0,
    tabList: [{ title: "折扣券" }]
  };
  render() {
    const { current, tabList } = this.state;
    return (
      <Root
        background={{
          background: `linear-gradient(#fff, #f5f5f5)`
        }}
      >
        <View className="common-wrapper sale-wrapper">
          <NavBar iconType="zujian471" iconSize="60" />
          <View className="sale-main">
            <View className="header-title">
              <View className="title">券名称</View>
              <View>营销活动名称使用中</View>
            </View>
            <AtTabs
              className="tab-container sale-tab"
              scroll
              current={current}
              tabList={tabList}
            >
              <AtTabsPane current={current} index={0}>
                <View className="sale-container">
                  <View className="sale-list">
                    <View className="sale-list-item">
                      <View className="content">优惠名称</View>
                      <View className="extra">读取名称参数</View>
                    </View>
                    <View className="sale-list-item">
                      <View className="content">优惠类型</View>
                      <View className="extra">整单折扣</View>
                    </View>
                    <View className="sale-list-item">
                      <View className="content">有效时间</View>
                      <View className="extra">永久有效</View>
                    </View>
                    <View className="sale-list-item">
                      <View className="content">整单折扣率</View>
                      <View className="extra">0%</View>
                    </View>
                    <View className="sale-list-item">
                      <View className="content">不参与活动的商品(0)</View>
                    </View>
                    {/* <View className="sale-list-item">
                      <View className="content">POLOT恤</View>
                      <View className="extra">优惠价：¥200.00</View>
                    </View> */}
                  </View>
                  <View className="used">已领取 0 张，已使用 0 张 </View>
                </View>
              </AtTabsPane>
            </AtTabs>
          </View>
          <View className="button-position">
            <AtButton
              type="secondary"
              className="default-button"
              onClick={() => {
                Taro.navigateTo({ url: "/pages/spread/shopModulars/index" });
              }}
            >
              结束
            </AtButton>
            {/* <AtButton
              type="secondary"
              className="default-button"
              onClick={() => {
                Taro.navigateTo({ url: "/pages/spread/shopModulars/index" });
              }}
            >
              删除
            </AtButton> */}
          </View>
        </View>
      </Root>
    );
  }
}
