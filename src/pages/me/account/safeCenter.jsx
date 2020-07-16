import Taro, { Component } from "@tarojs/taro";
import { View, Image, Text } from "@tarojs/components";
import { AtIcon, AtButton, AtList, AtListItem } from "taro-ui";
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
            <AtList className="common-list operation-list safe-list">
              <AtListItem
                title="注销账户"
                arrow="right"
                extraText="注销后无法恢复"
                onClick={() => {
                  Taro.navigateTo({
                    url: "/pages/me/account/safeCenterConfirm"
                  });
                }}
              />
            </AtList>
          </View>
          <View className="button-position">
            <AtButton
              type="secondary"
              className="default-button"
              onClick={() => {
                Taro.navigateTo({ url: "/pages/me/account/index" });
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
