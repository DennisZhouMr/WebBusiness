import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtButton, AtAvatar, AtFloatLayout } from "taro-ui";
import IconFont from "@/components/iconfont";
import NavBar from "@/components/NavBar";
import Root from "@/components/Root";

import "./rank.scss";

export default class extends Component {
  config = {
    navigationBarTitleText: "职级管理"
  };
  state = {
    rankList: [{ name: "店长(系统默认）" }, { name: "收银员(系统默认）" }]
  };
  handleClick = item => {
    Taro.navigateTo({
      url: `/pages/spread/shopModulars/staff/rankEdit?name=${item.name}`
    });
  };
  render() {
    const { rankList } = this.state;
    return (
      <Root
        background={{
          background: `linear-gradient(#fff, #f5f5f5)-`
        }}
      >
        <View className="common-wrapper rank-wrapper">
          <NavBar title="职级管理" iconType="zujian471" iconSize={60} />
          <View className="rank-main">
            <View className="rank-list">
              {rankList.map(item => (
                <View
                  className="rank-list-item"
                  onClick={() => this.handleClick(item)}
                >
                  <View className="content">{item.name}</View>
                  <View className="extra">
                    <IconFont name="right" size={25} />
                  </View>
                </View>
              ))}
            </View>
          </View>
        </View>
      </Root>
    );
  }
}
