import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtButton, AtInput } from "taro-ui";
import IconFont from "@/components/iconfont";
import Root from "@/components/Root";
import NavBar from "@/components/NavBar";
import SmallSwitch from "@/components/SmallSwitch";

import "./add.scss";

export default class extends Component {
  config = {
    navigationBarTitleText: "添加分类"
  };
  state = {
    classifyName: "",
    switchIsOpen: false
  };
  handleSubmit = () => {
    const { classifyName } = this.state;
    if (!classifyName) {
      Taro.showToast({ title: "请输入分类名称", icon: "none" });
      return false;
    }
    Taro.navigateTo({ url: "/pages/spread/shopModulars/classify/index" });
  };
  render() {
    const { classifyName, switchIsOpen } = this.state;
    return (
      <Root
        background={{
          background: `linear-gradient(#fff, #f5f5f5)`
        }}
      >
        <View className="common-wrapper classify-add-wrapper">
          <NavBar title="添加分类" iconType="close" iconSize={60} />
          <View className="classify-add-main">
            <View className="default-list-container classify-add-info">
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
              <View className="list-item">
                <View className="list-item-container">
                  <View className="list-item-content">
                    <View className="list-item-content_title">
                      设置为套餐分类
                    </View>
                  </View>
                  <View className="list-item-extra">
                    <SmallSwitch
                      isOpen={switchIsOpen}
                      onChange={() =>
                        this.setState({ switchIsOpen: !switchIsOpen })
                      }
                    />
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
              保存
            </AtButton>
          </View>
        </View>
      </Root>
    );
  }
}
