import Taro, { Component } from "@tarojs/taro";
import { View, Image, Text, Input } from "@tarojs/components";
import { AtIcon, AtButton } from "taro-ui";
import "./writePrice.scss";

export default class extends Component {
  config = {
    navigationBarTitleText: "注册"
  };
  state = {};
  render() {
    return (
      <View className="writePrice-wrapper">
        <View className="header">
          <View className="content">
            <View className="title">您的人均消费客单价估算是多少？</View>
            <View className="desc">
              填写客单价，能更好的获取及推送进准客户群体
            </View>
          </View>
        </View>
        <View className="writePrice-container">
          <View className="title">填写客单价</View>
          <View className="content-box">
            <Input class="number-input" type="digit" placeholder="例如：58" />
            <Text className="extra">元</Text>
          </View>
        </View>
        <View className="button-position">
          <AtButton className="gray-button" circle>
            太棒了，马上完成注册
          </AtButton>
        </View>
      </View>
    );
  }
}
