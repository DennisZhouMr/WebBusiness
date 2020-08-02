import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtButton, AtInput } from "taro-ui";
import IconFont from "@/components/iconfont";
import Root from "@/components/Root";
import NavBar from "@/components/NavBar";

import "./search.scss";

export default class extends Component {
  config = {
    navigationBarTitleText: "店主人"
  };
  state = {
    content: ""
  };
  handleCancel = () => {
    this.setState({ content: "" });
  };
  handleAdd = () => {
    Taro.navigateTo({ url: "/pages/spread/shopModulars/addMember/index" });
  };
  render() {
    const { content } = this.state;
    return (
      <Root
        background={{
          background: `#fff`
        }}
      >
        <View className="common-wrapper search-wrapper">
          <NavBar title="搜索会员" iconType="zujian471" iconSize={60} />
          <View className="search-main">
            <View className="search-bar">
              <View className="content">
                <IconFont name="search" size={36} />
                <AtInput
                  className="input-content"
                  type="text"
                  placeholder="手机后四位／卡号／会员名"
                  value={content}
                  onChange={value => {
                    this.setState({ content: value });
                  }}
                />
              </View>
              <View className="extra">
                {content ? (
                  <Text onClick={this.handleCancel}>取消</Text>
                ) : (
                  <IconFont name="plus" size={36} onClick={this.handleAdd} />
                )}
              </View>
            </View>
            <View className="member-list">
              <View className="member-list-item">
                <View className="content">
                  <Text>会员名称</Text>
                  <Text>手机号</Text>
                </View>
                <View className="extra">
                  <Text>获得 0积分</Text>
                  <Text>V1</Text>
                </View>
              </View>
            </View>
          </View>
          <View className="button-position">
            <AtButton
              type="secondary"
              className="default-button"
              onClick={() => {
                Taro.navigateBack();
              }}
            >
              取消
            </AtButton>
          </View>
        </View>
      </Root>
    );
  }
}
