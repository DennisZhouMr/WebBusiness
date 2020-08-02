import Taro, { Component } from "@tarojs/taro";
import { View, Text, Picker } from "@tarojs/components";
import { AtButton, AtInput } from "taro-ui";
import IconFont from "@/components/iconfont";
import Root from "@/components/Root";
import NavBar from "@/components/NavBar";

import "./add.scss";

export default class extends Component {
  config = {
    navigationBarTitleText: "添加分类"
  };
  state = {
    classifyName: ""
  };
  handleSubmit = () => {
    const { classifyName } = this.state;
    if (!classifyName) {
      Taro.showToast({ title: "请输入单位名称", icon: "none" });
      return false;
    }
    Taro.navigateTo({ url: "/pages/spread/shopModulars/myGoods/selectType" });
  };
  render() {
    const { classifyName } = this.state;
    return (
      <Root
        background={{
          background: `linear-gradient(#fff, #f5f5f5)`
        }}
      >
        <View className="common-wrapper addActivity-add-wrapper">
          <NavBar title="添加分类" iconType="zujian471" iconSize={60} />
          <View className="addActivity-add-main">
            <View className="default-list-container addActivity-add-info show-last-border">
              <View className="list-item">
                <View className="list-item-container">
                  <View className="list-item-content">
                    <View className="list-item-content_title">分类名称*</View>
                  </View>
                  <View className="list-item-extra">
                    <View className="list-item-extra_info">
                      <AtInput
                        className="input-content"
                        type="text"
                        placeholder="例如：特价、服装、热菜、海鲜等"
                        placeholderClass="placeholder"
                        value={classifyName}
                        onChange={value => {
                          this.setState({ classifyName: value });
                        }}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View className="button-position">
            {classifyName ? (
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
