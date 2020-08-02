import Taro, { Component } from "@tarojs/taro";
import { View, Image, Text } from "@tarojs/components";
import { AtIcon, AtButton, AtList, AtListItem } from "taro-ui";
import Root from "@/components/Root";
import Caption from "@/components/Caption";

import "./index.scss";

export default class extends Component {
  constructor(props) {
    super(props);
  }
  config = {
    navigationBarTitleText: "账户管理"
  };
  render() {
    return (
      <Root
        background={{
          background: `linear-gradient(#fff, #f5f5f5)`
        }}
      >
        <View className="common-wrapper account-wrapper">
          <Caption text="账户管理" />
          <View className="account-main">
            <View className="group-container">
              <View className="group-top shop-group">
                <Text className="left">商家注册的名称</Text>
                <Text className="right">商户编号： SX313972</Text>
              </View>
              <AtList className="group-content common-list operation-list">
                <AtListItem
                  title="账户"
                  extraText="13765453123"
                  onClick={this.handleClick}
                />
                <AtListItem
                  title="修改密码"
                  arrow="right"
                  onClick={() => {
                    Taro.navigateTo({ url: "/pages/me/account/updatePwd" });
                  }}
                />
                <AtListItem
                  title="换绑定手机号"
                  arrow="right"
                  onClick={() => {
                    Taro.navigateTo({ url: "/pages/me/account/verifyMobile" });
                  }}
                />
              </AtList>
            </View>
            <AtList className="common-list operation-list safe-list">
              <AtListItem
                title="安全中心"
                arrow="right"
                onClick={() => {
                  Taro.navigateTo({ url: "/pages/me/account/safeCenter" });
                }}
              />
            </AtList>
            <View className="common-button">
              <AtButton>退出登录</AtButton>
            </View>
          </View>
          <View className="button-position">
            <AtButton
              type="secondary"
              className="default-button"
              onClick={() => {
                Taro.navigateBack({ delta: 1 });
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
