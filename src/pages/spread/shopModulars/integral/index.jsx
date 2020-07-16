import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtButton, AtAvatar, AtFloatLayout, AtInput } from "taro-ui";
import IconFont from "@/components/iconfont";
import Root from "@/components/Root";
import Caption from "@/components/Caption";

import "./index.scss";

export default class extends Component {
  config = {
    navigationBarTitleText: "积分充值"
  };
  state = {
    money: ""
  };
  render() {
    const { money } = this.state;
    return (
      <Root
        background={{
          background: `#f5f5f5`
        }}
      >
        <View className="common-wrapper integral-wrapper">
          <Caption text="积分充值" iconType="zu4462" />
          <View className="integral-main">
            <View className="top">
              <View className="left">
                <View className="icon">
                  <IconFont name="gantanhao" size={28} />
                </View>
                商户编号:SX313972
              </View>
              <View
                className="right"
                onClick={() => {
                  Taro.navigateTo({ url: "/pages/spread/shopModulars/index" });
                }}
              >
                返回
              </View>
            </View>
            <View className="at-row integral-content">
              <View className="at-col at-col-6">
                <Text>当前可用积分</Text>
                <Text>0</Text>
              </View>
              <View className="at-col at-col-6">
                <Text>当前冻结积分</Text>
                <Text>0</Text>
              </View>
            </View>
            <View className="integral-container">
              <View className="money">
                <View>
                  充值金额<Text>¥</Text>
                </View>
                <AtInput
                  type="number"
                  className="input"
                  placeholder="仅限充值10-9999元"
                  value={money}
                  onChange={value => {
                    this.setState({ money: value });
                  }}
                />
              </View>
              <View className="integral-list">
                <View className="integral-list-item">
                  <View className="content">
                    <IconFont name="integral" size={25} color="#229E8E" />
                    <Text className="space">积分数量：</Text>
                  </View>
                  {money !== "" ? (
                    <View className="extra number bold">{money}</View>
                  ) : (
                    <View className="extra number">自动生成</View>
                  )}
                </View>
                <View className="integral-list-item">
                  <View className="content">支付方式</View>
                  <View className="extra">
                    <IconFont name="zu4154" size={29} />
                    <Text className="space">微信</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View className="button-position">
            <View className="tips">
              我已阅读并同意 <Text>《积分充值协议》</Text>
            </View>
            <AtButton
              type="secondary"
              className={`default-button ${
                money >= 10 && money <= 9999 ? "primary-button" : ""
              }`}
              onClick={() => {
                if (money >= 10 && money <= 9999)
                  Taro.navigateTo({ url: "/pages/spread/shopModulars/index" });
              }}
            >
              确定充值
            </AtButton>
          </View>
        </View>
      </Root>
    );
  }
}
