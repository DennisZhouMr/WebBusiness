import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtButton, AtAvatar, AtFloatLayout } from "taro-ui";
import IconFont from "@/components/iconfont";
import Root from "@/components/Root";
import Caption from "@/components/Caption";

import "./index.scss";

export default class extends Component {
  config = {
    navigationBarTitleText: "店主人"
  };
  state = {
    isOpened: false
  };
  handleClose = () => {
    this.setState({ isOpened: false });
  };
  render() {
    const { isOpened } = this.state;
    return (
      <Root
        background={{
          background: `#f5f5f5`
        }}
      >
        <View className="common-wrapper shopkeeper-wrapper">
          <Caption text="店主人" iconType="zu1701" />
          <View className="shopkeeper-main">
            <View className="group-container">
              <View className="group-top shopkeeper-group">
                <Text>同步微信头像，昵称方便粉丝好友辨别联系</Text>
                <AtButton size="small" type="primary" circle>
                  同步
                </AtButton>
              </View>
              <View className="group-content shopkeeper-list">
                <View className="shopkeeper-list-item">
                  <View className="shopkeeper-list-content">
                    <Text>微信头像</Text>
                  </View>
                  <View className="shopkeeper-list-extra">
                    <AtAvatar
                      className="avatar"
                      image={require("@/assets/images/user.png")}
                    />
                  </View>
                </View>
                <View className="shopkeeper-list-item">
                  <View className="shopkeeper-list-content">
                    <Text>绑定ID</Text>
                  </View>
                  <View className="shopkeeper-list-extra">
                    <Text>显示微信号</Text>
                  </View>
                </View>
                <View className="shopkeeper-list-item">
                  <View className="shopkeeper-list-content">
                    <Text>昵称</Text>
                  </View>
                  <View className="shopkeeper-list-extra">
                    <Text>B型</Text>
                  </View>
                </View>
              </View>
            </View>
            <View className="group-content shopkeeper-list shopkeeper-list--two">
              <View
                className="shopkeeper-list-item"
                onClick={() => {
                  this.setState({ isOpened: true });
                }}
              >
                <View className="shopkeeper-list-content">
                  <Text>咨询专属策划师</Text>
                </View>
                <View className="shopkeeper-list-extra">
                  <IconFont name="right" size={25} />
                </View>
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
          <AtFloatLayout className="FloatLayout-box" isOpened={isOpened}>
            <View className="floatlayout-container">
              <View className="content-top">
                <View className="avatar">
                  <View className="icon">
                    <IconFont name="nifty" size={50} />
                  </View>
                  <Text>策划师@一</Text>
                </View>
                <View className="content">
                  您好～昵称，我是你的专属策划师，加一下我
                  的微信，使用过程中有任何问题都可以咨询联
                  系，将为您提供更便捷的服务～
                </View>
              </View>
              <View className="qrcode">
                <Image src={require("@/assets/images/qrcode.png")} />
                <Text className="title">微信号：xdgh2022</Text>
                <Text className="desc">长按二维码添加</Text>
                <View
                  className="close"
                  onClick={() => {
                    this.setState({ isOpened: false });
                  }}
                >
                  <IconFont name="close" size={60} color="rgba(0,0,0,0.5)" />
                </View>
              </View>
            </View>
          </AtFloatLayout>
        </View>
      </Root>
    );
  }
}
