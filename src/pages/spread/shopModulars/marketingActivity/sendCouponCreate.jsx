import Taro, { Component } from "@tarojs/taro";
import { View, Text, Picker, Block } from "@tarojs/components";
import { AtButton, AtInput, AtTag, AtTextarea } from "taro-ui";
import IconFont from "@/components/iconfont";
import Root from "@/components/Root";
import NavBar from "@/components/NavBar";

import "./activite.scss";

export default class extends Component {
  state = {
    name: "激活有礼首单消费送双倍积分",
    ticketType: "",
    ticketCount: ""
  };
  handleSubmit = () => {
    if (this.validate()) {
      Taro.navigateTo({
        url: "/pages/spread/shopModulars/marketingActivity/activityType"
      });
    }
  };
  validate = () => {
    const { name } = this.state;
    if (!name) {
      Taro.showToast({ title: "请输入活动名称", icon: "none" });
      return false;
    }
    return true;
  };
  render() {
    const { name, ticketType, ticketCount } = this.state;
    return (
      <Root
        background={{
          background: `linear-gradient(#fff, #f5f5f5)`
        }}
      >
        <View className="common-wrapper activity-wrapper">
          <NavBar title="" iconType="zujian471" iconSize={60} />
          <View className="activity-main">
            <View className="default-list-container activity-info show-last-border">
              <View className="header">
                <View className="content">
                  <View className="title">直接发券</View>
                  <View>
                    您可以通过微信分享发放优惠券，也可以让顾客去线上门店主页领
                    取或直接发送给门店以后的会员，扩大优惠券的发放范围，有效提
                    高复购率
                  </View>
                </View>
                <View></View>
              </View>
              <View className="caption">活动规则</View>
              <View className="list-item">
                <View className="list-item-container">
                  <View className="list-item-content">
                    <View className="list-item-content_title">活动名称*</View>
                  </View>
                  <View className="list-item-extra">
                    <View className="list-item-extra_info">
                      <AtInput
                        className="input-content"
                        type="text"
                        placeholder="请输入"
                        placeholderClass="placeholder"
                        value={name}
                        onChange={value => {
                          this.setState({ name: value });
                        }}
                      />
                    </View>
                  </View>
                </View>
              </View>
              <View className="list-item">
                <View className="list-item-container">
                  <View className="list-item-content">
                    <View className="list-item-content_title">发券总数</View>
                  </View>
                  <View className="list-item-extra">
                    <View className="list-item-extra_info">
                      <AtInput
                        className="input-content"
                        type="text"
                        placeholder="请输入"
                        placeholderClass="placeholder"
                        value={ticketCount}
                        onChange={value => {
                          this.setState({ ticketCount: value });
                        }}
                      />
                    </View>
                  </View>
                </View>
              </View>
              <View className="caption">优惠礼券</View>
              <View className="list-item">
                <View className="list-item-container">
                  <View className="list-item-content">
                    <View className="list-item-content_title">券类型</View>
                  </View>
                  <View className="list-item-extra">
                    <View className="list-item-extra_info">
                      <AtInput
                        className="input-content"
                        type="text"
                        editable={false}
                        placeholder="请选择"
                        placeholderClass="placeholder"
                        value={ticketType}
                      />
                    </View>
                    <View className="list-item-extra_icon">
                      <IconFont name="right" size={25} />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View className="button-position">
            <AtButton
              type="secondary"
              className="default-button primary-button"
              onClick={this.handleSubmit}
            >
              创建
            </AtButton>
          </View>
        </View>
      </Root>
    );
  }
}
