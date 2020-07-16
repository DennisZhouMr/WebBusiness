import Taro, { Component } from "@tarojs/taro";
import { View, Image, Text } from "@tarojs/components";
import "./index.scss";

import Root from "@/components/Root";
import Caption from "@/components/Caption";

export default class extends Component {
  constructor(props) {
    super(props);
  }
  config = {
    navigationBarTitleText: "安全中心"
  };

  render() {
    return (
      <Root
        background={{
          background: `linear-gradient(#fff, #f5f5f5)`
        }}
      >
        <View className="common-wrapper account-wrapper">
          <Caption text="安全中心" />
          <View className="account-main">
            <View className="safe-message">
              <View className="safe-title">以下信息将被清空且无法找回：</View>
              <Text>1、身份、账户信息</Text>
              <Text>2、该账号的门店员工信息</Text>
            </View>
          </View>
          <View className="button-position">
            <View className="button-group">
              <Text
                onClick={() => {
                  Taro.navigateTo({ url: "/pages/me/account/index" });
                }}
              >
                返回
              </Text>
              <Text
                onClick={() => {
                  Taro.navigateTo({ url: "/pages/me/account/safeCenterCheck" });
                }}
              >
                下一步
              </Text>
            </View>
          </View>
        </View>
      </Root>
    );
  }
}
