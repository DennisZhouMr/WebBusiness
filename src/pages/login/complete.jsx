import Taro, { Component } from "@tarojs/taro";
import { View, Image, Text, Input } from "@tarojs/components";
import { AtIcon, AtButton } from "taro-ui";
import "./complete.scss";

export default class extends Component {
  config = {
    navigationBarTitleText: "注册"
  };
  state = {};
  render() {
    return (
      <View className="complete-wrapper">
        <View className="header">
          <View className="content">
            <View className="title">
              <AtIcon
                prefixClass="icon"
                value="lock"
                size="20"
                color="#229E8E"
              />
              <Text className="space">恭喜您注册成功！</Text>
            </View>
            <View className="desc">请妥善保存账户信息</View>
          </View>
        </View>
        <View className="complete-container">
          <View className="title">商户编号： SX3139732</View>
          <View className="content-box">
            <Text className="extra">
              首次注册开通使用商家免一年营销推广服务费
            </Text>
          </View>
        </View>
        <View className="button-position">
          <AtButton className="gray-button primary-button" circle>
            开启互联营销
          </AtButton>
        </View>
      </View>
    );
  }
}
