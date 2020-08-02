import Taro, { Component } from "@tarojs/taro";
import { View, Text, Switch } from "@tarojs/components";
import { AtButton } from "taro-ui";
import Root from "@/components/Root";
import Caption from "@/components/Caption";
import ModalProp from "@/components/Modal";

import "./index.scss";

export default class extends Component {
  config = {
    navigationBarTitleText: "收款账户"
  };
  state = {
    switchCheck: false
  };
  handleChange = value => {
    this.setState({ switchCheck: value });
  };
  handleConfirm = () => {
    Taro.navigateTo({ url: "/pages/spread/shopModulars/index" });
  };
  render() {
    const { switchCheck } = this.state;
    return (
      <Root
        background={{
          background: `linear-gradient(#fff, #f5f5f5)`
        }}
      >
        <View className="common-wrapper account-wrapper">
          <Caption text="收款账户" iconType="zu1673" />
          <View className="account-main">
            <View className="group-container">
              <View className="group-top">
                <Text>使用微信提现不收手续费</Text>
              </View>
            </View>
            <View className="account-content">
              <View className="content">
                <View className="title bold">开通微信自动提现</View>
                <View className="desc">
                  开通自动提现，余额自动提现至微信钱包
                </View>
              </View>
              <Switch
                className="switch"
                color="#000"
                border={false}
                checked={switchCheck}
                onChange={this.handleChange}
              />
            </View>
            <View className="account-content">
              <View className="content">
                <View className="title bold">绑定收款账户</View>
                <View className="desc bold color-848484">多种收款方式</View>
                <View className="desc color-848484">
                  支持二维码、扫码枪、收款盒等多种方式
                </View>
                <View className="desc bold color-848484 margin">
                  到账准时安全
                </View>
                <View className="desc color-848484">
                  无需手动提现，自动打款至银行卡
                </View>
              </View>
              <AtButton type="primary" size="small" circle className="btn">
                未开通
              </AtButton>
            </View>
          </View>
          <View className="button-position">
            <AtButton
              type="secondary"
              className="default-button"
              onClick={() => {
                Taro.navigateTo({ url: "/pages/spread/shopModulars/index" });
              }}
            >
              返回
            </AtButton>
          </View>
        </View>
        <ModalProp
          isOpened={switchCheck}
          title="已开通"
          okText="我知道了"
          contentText="将提现至店主绑定的微信账户"
          onConfirm={this.handleConfirm}
        />
      </Root>
    );
  }
}
