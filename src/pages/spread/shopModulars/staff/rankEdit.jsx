import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtButton, AtAvatar, AtFloatLayout } from "taro-ui";
import IconFont from "@/components/iconfont";
import NavBar from "@/components/NavBar";
import Root from "@/components/Root";

import "./rank.scss";

export default class extends Component {
  config = {
    navigationBarTitleText: "编辑职位"
  };
  render() {
    const { name = "" } = this.$router.params;
    return (
      <Root
        background={{
          background: `linear-gradient(#fff, #f5f5f5)-`
        }}
      >
        <View className="common-wrapper rank-wrapper">
          <NavBar title="编辑职位" iconType="zujian471" iconSize={60} />
          <View className="rank-main">
            <View className="rank-list">
              <View className="rank-list-item">
                <View className="content">职位</View>
                <View className="extra">{name}</View>
              </View>
              <View className="rank-list-item">
                <View className="content">最大折扣率</View>
                <View className="extra">80%</View>
              </View>
              <View className="rank-list-item">
                <View className="content">减免金额上限</View>
                <View className="extra">99元</View>
              </View>
            </View>
          </View>
          <View className="button-position">
            <AtButton
              type="secondary"
              className="default-button primary-button"
              onClick={() => {
                Taro.navigateTo({
                  url: "/pages/spread/shopModulars/staff/rank"
                });
              }}
            >
              保存
            </AtButton>
          </View>
        </View>
      </Root>
    );
  }
}
