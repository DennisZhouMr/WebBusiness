import Taro, { Component } from "@tarojs/taro";
import {
  Block,
  View,
  Text,
  Slider,
  MovableArea,
  MovableView
} from "@tarojs/components";
import { AtButton, AtAvatar, AtFloatLayout } from "taro-ui";
import IconFont from "@/components/iconfont";
import Root from "@/components/Root";
import NavBar from "@/components/NavBar";
import "./sort.scss";

export default class extends Component {
  config = {
    navigationBarTitleText: "排序"
  };
  handleSubmit = () => {
    Taro.navigateTo({ url: "/pages/spread/shopModulars/classify/index" });
  };
  render() {
    return (
      <Root
        background={{
          background: `linear-gradient(#fff, #f5f5f5)`
        }}
      >
        <View className="common-wrapper classify-sort-wrapper">
          <NavBar title="排序" iconType="close" iconSize={60} />
          <View className="classify-sort-main">
            <View className="drag-list">
              <View className="drag-list-item">
                <View className="content">已创建的分类名称</View>
                <View>
                  <IconFont name="list" size={44} color="#C3C3C3" />
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
