import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtButton, AtTabs, AtTabsPane } from "taro-ui";
import IconFont from "@/components/iconfont";
import Root from "@/components/Root";
import Caption from "@/components/Caption";
import { discountCoupon } from "../mock";
import UnderwayTab from "../components/Privilege/underwayTab";

import "./index.scss";

export default class extends Component {
  config = {
    navigationBarTitleText: "优惠管理"
  };
  state = {
    current: 0,
    tabList: [{ title: "进行中" }, { title: "未开始" }, { title: "已结束" }]
  };
  handleTabClick = value => {
    this.setState({
      current: value
    });
  };
  render() {
    const { tabList, current } = this.state;
    return (
      <Root
        background={{
          background: `linear-gradient(#fff, #f5f5f5)`
        }}
      >
        <View className="common-wrapper privilege-wrapper">
          <Caption text="优惠管理" iconType="zu4675" />
          <View className="privilege-main">
            <View className="top">
              <View className="icon">
                <IconFont name="gantanhao" size={28} />
              </View>
              优惠券信息
            </View>
            <View className="privilege-content">
              <AtTabs
                className="tab-container privilege-tab"
                scroll
                current={current}
                tabList={tabList}
                onClick={this.handleTabClick}
              >
                <AtTabsPane current={current} index={0}>
                  {discountCoupon && discountCoupon.length > 0 ? (
                    <UnderwayTab datasouce={discountCoupon} />
                  ) : (
                      <View className="empty">暂无优惠活动</View>
                    )}
                </AtTabsPane>
                <AtTabsPane current={current} index={1}>
                  <View className="empty">暂无优惠活动</View>
                </AtTabsPane>
                <AtTabsPane current={current} index={2}>
                  <View className="empty">暂无优惠活动</View>
                </AtTabsPane>
              </AtTabs>
            </View>
          </View>
          <View className="button-position">
            <AtButton
              type="secondary"
              className="default-button"
              onClick={() => {
                Taro.navigateBack();
              }}
            >
              返回
            </AtButton>
          </View>
        </View>
      </Root>
    );
  }
}
