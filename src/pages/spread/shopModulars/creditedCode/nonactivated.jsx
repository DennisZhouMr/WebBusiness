import Taro, { Component } from "@tarojs/taro";
import { View, Text, RadioGroup } from "@tarojs/components";
import { AtButton, AtInput } from "taro-ui";
import IconFont from "@/components/iconfont";
import Root from "@/components/Root";
import NavBar from "@/components/NavBar";
import VipCard from "@/components/VipCard";

import "./nonactivated.scss";

export default class extends Component {
  config = {
    navigationBarTitleText: "微信扫店铺吗"
  };
  state = {
    telephone: "",
    six: [
      { value: 0, text: "男", checked: false },
      { value: 1, text: "女", checked: false }
    ]
  };
  render() {
    const { telephone, six } = this.state;
    return (
      <Root
        background={{
          background: `#FDD000`
        }}
      >
        <View className="common-wrapper nonactivated-wrapper">
          <NavBar title="输入手机号激活" />
          <View className="nonactivated-main">
            <VipCard
              type="normal"
              level="未激活"
              levelType="noActive"
              extra={false}
              url=""
              face={require("@/assets/images/user.png")}
            />
            <View className="information">
              <View className="input-group background">
                <View className="label">姓名*</View>
                <View className="content">微信昵称</View>
              </View>
              <View className="input-group border">
                <View className="label">捆绑手机号*</View>
                <View className="content">
                  <AtInput
                    placeholder="请输入手机号码"
                    placeholderClass="input-placeholder"
                    value={telephone}
                    onChange={value => {
                      this.setState({ telephone: value });
                    }}
                  />
                </View>
              </View>
              <View className="input-group">
                <View className="label">性别</View>
                <View className="content">
                  <RadioGroup>
                    {six.map(item => (
                      <Radio
                        className="radio-list__radio margin-right"
                        value={item.value}
                        checked={item.checked}
                      >
                        {item.text}
                      </Radio>
                    ))}
                  </RadioGroup>
                </View>
              </View>
            </View>
            <View className="footer-content">
              <AtButton
                type="primary"
                circle
                onClick={() => {
                  Taro.navigateTo({
                    url: "/pages/spread/shopModulars/creditedCode/activite"
                  });
                }}
              >
                确定
              </AtButton>
              <View
                onClick={() => {
                  Taro.navigateBack();
                }}
              >
                <IconFont name="close" size={60} color="rgba(0,0,0,0.5)" />
              </View>
            </View>
          </View>
        </View>
      </Root>
    );
  }
}
