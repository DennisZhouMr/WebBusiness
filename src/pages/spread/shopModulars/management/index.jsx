import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { AtButton } from "taro-ui";
import IconFont from "@/components/iconfont";
import Root from "@/components/Root";
import Caption from "@/components/Caption";

import "./index.scss";

export default class extends Component {
  config = {
    navigationBarTitleText: "经营管理"
  };
  state = {
    type: "小吃/快餐"
  };
  componentWillMount() {
    if (this.$router.params.type) {
      this.setState({ type: this.$router.params.type });
    }
  }
  handleClick = () => {
    Taro.navigateTo({ url: "/pages/spread/shopModulars/management/status" });
  };
  render() {
    return (
      <Root
        background={{
          background: `linear-gradient(#fff, #f5f5f5)`
        }}
      >
        <View className="common-wrapper management-wrapper">
          <Caption text="经营管理" iconType="zu1673" />
          <View className="management-main">
            <View className="default-list-container">
              <View className="list-item" onClick={this.handleClick}>
                <View className="list-item-container">
                  <View className="list-item-content">
                    <View className="list-item-content_title">经营业态</View>
                  </View>
                  <View className="list-item-extra">
                    <View className="list-item-extra_info">
                      {this.state.type}
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
              className="default-button"
              onClick={() => {
                Taro.navigateBack();;
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
