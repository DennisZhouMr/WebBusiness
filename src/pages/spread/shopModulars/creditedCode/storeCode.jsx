import Taro, { Component } from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";
import { AtButton, AtAvatar } from "taro-ui";
import IconFont from "@/components/iconfont";
import Root from "@/components/Root";
import Caption from "@/components/Caption";

import "./storeCode.scss";

export default class extends Component {
  config = {
    navigationBarTitleText: "收款码"
  };
  render() {
    return (
      <Root
        background={{
          background: `linear-gradient(#fff, #f5f5f5)`
        }}
      >
        <View className="common-wrapper storeCode-wrapper">
          <Caption text="收款码" iconType="zu1706" />
          <View className="storeCode-main">
            <View className="group-container">
              <View className="group-top storeCode-group">
                <Text className="left">扫码加粉转换会员</Text>
                <Text className="right">商户编号： SX313972</Text>
              </View>
            </View>
            <View className="storeCode-container">
              <View className="logo-content">
                <Image src={require("@/assets/images/logo-tag.png")} />
              </View>
              <View className="content">
                <View className="avatar">
                  <AtAvatar image={""} />
                </View>
                <View className="font-24 ">门店名称</View>
                <View className="font-20 ">店铺描述</View>
                <View className="qrcode">
                  <View className="pic">
                    <View className="logo"></View>
                    <Image src={require("@/assets/images/qrcode.png")} />
                  </View>
                  <Text className="font-24">微信扫码</Text>
                </View>
                <View className="font-24 ">买单扫码可享优惠</View>
                <View className="font-24 ">并赠积分</View>
                <View className="at-row pay-type">
                  <View className="at-col at-col-6">
                    <IconFont name="zu4154" size={49} />
                    <Text className="font-24 ">微信支付</Text>
                  </View>
                  <View className="at-col at-col-6">
                    <IconFont name="zu4157" size={49} />
                    <Text className="font-24 ">信用卡支付</Text>
                  </View>
                </View>
                <View className="no">NO：SX3139732</View>
              </View>
              <View className="tips-size">
                分辨率：1024×768 尺寸：10.16×15.24 厘米
              </View>
              <View className="button-position">
                <AtButton
                  type="secondary"
                  className="default-button point-button"
                >
                  保存自行打印
                </AtButton>
              </View>
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
      </Root>
    );
  }
}
