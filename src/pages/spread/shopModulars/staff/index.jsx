import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtButton, AtAvatar, AtFloatLayout } from "taro-ui";
import IconFont from "@/components/iconfont";
import Root from "@/components/Root";
import Caption from "@/components/Caption";
import TabBarBottom from "@/components/TabBarBottom";

import "./index.scss";

export default class extends Component {
  config = {
    navigationBarTitleText: "员工管理"
  };
  handleTabBarClick = index => {
    switch (index) {
      case 0:
        Taro.navigateTo({ url: "/pages/spread/shopModulars/staff/rank" });
        break;
      case "center":
        Taro.navigateTo({ url: "/pages/spread/shopModulars/staff/add" });
        break;
      default:
        Taro.navigateTo({ url: "/pages/spread/shopModulars/index" });
        break;
    }
  };
  render() {
    const AtTabBarList = [
      {
        title: "职级管理",
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
    return (
      <Root
        background={{
          background: `#f5f5f5`
        }}
      >
        <View className="common-wrapper staff-wrapper">
          <Caption text="员工管理" iconType="zu2095" />
          <View className="staff-main">
            <View className="group">
              <View className="title">超级管理员</View>
              <View className="list">
                <View className="content bold">管理员</View>
              </View>
            </View>
            <View className="group">
              <View className="title subTitle">收银员(系统默认）</View>
              <View className="list" onClick={()=>{
                Taro.navigateTo({url:'/pages/spread/shopModulars/staff/edit'})
              }}>
                <View className="content">周凯</View>
                <View className="extra">
                  <IconFont name="right" size={25} />
                </View>
              </View>
            </View>
          </View>
          <TabBarBottom
            iconSize={21}
            fontSize={14}
            centerText="新赠员工"
            centerIcon="plus"
            tabList={AtTabBarList}
            onTabBarClick={this.handleTabBarClick}
          />
        </View>
      </Root>
    );
  }
}
