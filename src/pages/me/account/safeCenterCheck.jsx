import Taro, { Component } from "@tarojs/taro";
import { View, Image, Text } from "@tarojs/components";
import { AtIcon, AtCheckbox } from "taro-ui";
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
  state = {
    checked: [],
    checkboxOption: [{ value: "1", label: "我已阅读并同意" }]
  };
  handleCheckChange = value => {
    console.log(value);
    this.setState({ checked: value });
  };
  render() {
    const { checkboxOption, checked } = this.state;
    return (
      <Root
        background={{
          background: `linear-gradient(#fff, #f5f5f5)`
        }}
      >
        <View className="common-wrapper account-wrapper safecenter-check-box">
          <Caption text="安全中心" />
          <View className="account-main">
            <View className="checkInfo-title">
              <AtIcon
                prefixClass="icon"
                value="exclamation-circle"
                size="22"
                color="#229e8e"
              ></AtIcon>
              <Text className="checkInfo-title-text">核对信息</Text>
            </View>
            <View className="check-message">
              <View>
                商户编号：<Text>SX313932</Text>
              </View>
              <View>
                注销账号：<Text>13772005503</Text>
              </View>
              <View>
                门店名称：<Text></Text>
              </View>
            </View>
          </View>
          <View className="button-position">
            <View className="check-box">
              <AtCheckbox
                options={checkboxOption}
                selectedList={checked}
                onChange={this.handleCheckChange}
              />
              <Text>《用户注销协议》</Text>
            </View>
            <View className="button-group">
              <Text
                onClick={() => {
                  Taro.navigateTo({ url: "/pages/me/account/index" });
                }}
              >
                返回
              </Text>
              <Text>下一步</Text>
            </View>
          </View>
        </View>
      </Root>
    );
  }
}
