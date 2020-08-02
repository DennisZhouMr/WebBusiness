import Taro, { Component } from "@tarojs/taro";
import { View, Text, RadioGroup } from "@tarojs/components";
import { AtButton, AtInput } from "taro-ui";
import IconFont from "@/components/iconfont";
import Root from "@/components/Root";
import NavBar from "@/components/NavBar";
import VipCard from "@/components/VipCard";

import "./activite.scss";

export default class extends Component {
  config = {
    navigationBarTitleText: "微信扫店铺吗"
  };
  state = {};
  render() {
    return (
      <Root
        background={{
          background: `#FDD000`
        }}
      >
        <View className="common-wrapper activite-wrapper">
          <NavBar title="激活有礼首单消费送双倍积分" />
          <View className="activite-main">
            <VipCard
              type="normal"
              level="未激活"
              levelType="noActive"
              extra={false}
              url=""
              face={require("@/assets/images/user.png")}
            />
            <View className="box">
              <View className="title">
                <View>您即刻享有的权益</View>
                <View className="subTitle">我是能自成长升等级的权益卡哦～</View>
              </View>
              <View className="at-row at-row--wrap content">
                <View className="at-col at-col-6">
                  <IconFont name="polygon-one" size={111} />
                  <View className="caption">每日优惠</View>
                  <View>整单9.5折</View>
                  <View>不参与优惠活动商品除外</View>
                </View>
                <View className="at-col at-col-6">
                  <IconFont name="pay-circle" size={111} />
                  <View className="caption">买单必赠</View>
                  <View>单单赠送</View>
                  <View>活动期间首单赠送双倍积分</View>
                </View>
                <View className="at-col at-col-6">
                  <IconFont name="polygon-two" size={111} />
                  <View className="caption">打赏活动</View>
                  <View>你、我、Ta之间的相互约定</View>
                  <View>有趣、有料，在互动中去体验</View>
                  <View>完成获得到商家打赏礼包</View>
                </View>
                <View className="at-col at-col-6">
                  <IconFont name="polygon-five" size={111} />
                  <View className="caption">积分兑换</View>
                  <View>积分可以用来抵扣</View>
                  <View>也可以免费兑换好物</View>
                  <View>满足你不同需求</View>
                </View>
              </View>
              <View className="acitvite-bottom">
                <View className="caption">会员激活礼</View>
                <View>激活即享优惠折扣并赠双倍积分</View>
                <View>另赠礼券名 (剩余100张送完即止)</View>
                <View className="tip">优惠券不能与首次买单权益同享</View>
              </View>
            </View>
            <View className="footer-content">
              <AtButton
                type="primary"
                circle
                onClick={() => {
                  Taro.navigateTo({
                    url: "/pages/spread/shopModulars/creditedCode/storeCode"
                  });
                }}
              >
                确定
              </AtButton>
              <View
                onClick={() => {
                  Taro.navigateTo({
                    url: "/pages/spread/shopModulars/index"
                  });
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
