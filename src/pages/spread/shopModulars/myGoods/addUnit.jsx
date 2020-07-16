import Taro, { Component } from "@tarojs/taro";
import { View, Text, Picker } from "@tarojs/components";
import { AtButton, AtInput, AtTag } from "taro-ui";
import IconFont from "@/components/iconfont";
import Root from "@/components/Root";
import NavBar from "@/components/NavBar";
import SmallSwitch from "@/components/SmallSwitch";

import "./add.scss";

export default class extends Component {
  config = {
    navigationBarTitleText: "添加单位"
  };
  state = {
    unitName: ""
  };
  handleSubmit = () => {
    const { unitName } = this.state;
    if (!unitName) {
      Taro.showToast({ title: "请输入单位名称", icon: "none" });
      return false;
    }
    Taro.navigateTo({ url: "/pages/spread/shopModulars/myGoods/unit" });
  };
  render() {
    const { unitName } = this.state;
    return (
      <Root
        background={{
          background: `linear-gradient(#fff, #f5f5f5)`
        }}
      >
        <View className="common-wrapper addActivity-add-wrapper">
          <NavBar title="添加单位" iconType="zujian471" iconSize={60} />
          <View className="addActivity-add-main">
            <View className="default-list-container addActivity-add-info show-last-border">
              <View className="list-item">
                <View className="list-item-container">
                  <View className="list-item-content">
                    <View className="list-item-content_title">单位名称</View>
                  </View>
                  <View className="list-item-extra">
                    <View className="list-item-extra_info">
                      <AtInput
                        className="input-content"
                        type="text"
                        placeholder="请输入"
                        placeholderClass="placeholder"
                        value={unitName}
                        onChange={value => {
                          this.setState({ unitName: value });
                        }}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View className="button-position">
            {unitName ? (
              <AtButton
                type="secondary"
                className="default-button primary-button"
                onClick={this.handleSubmit}
              >
                保存
              </AtButton>
            ) : (
              <AtButton type="secondary" className="default-button">
                保存
              </AtButton>
            )}
          </View>
        </View>
      </Root>
    );
  }
}
