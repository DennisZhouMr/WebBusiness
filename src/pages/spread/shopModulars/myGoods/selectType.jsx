import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { AtButton, AtInput } from "taro-ui";
import IconFont from "@/components/iconfont";
import Root from "@/components/Root";
import NavBar from "@/components/NavBar";

import "./add.scss";

export default class extends Component {
  config = {
    navigationBarTitleText: "选择分类"
  };
  state = {
    goodsType: [
      { id: 1, name: "默认分类" },
      { id: 2, name: "体恤" }
    ]
  };
  handleCancel = () => {
    this.setState({ isOpened: false });
  };
  handleItemClick = item => {
    Taro.navigateTo({
      url: `/pages/spread/shopModulars/myGoods/addActivity?type=${item.name}`
    });
  };
  handleAdd = () => {
    Taro.navigateTo({ url: "/pages/spread/shopModulars/myGoods/addType" });
  };
  render() {
    const { goodsType } = this.state;
    return (
      <Root
        background={{
          background: `linear-gradient(#fff, #f5f5f5)`
        }}
      >
        <View className="common-wrapper addActivity-add-wrapper">
          <NavBar title="选择分类" iconType="zujian471" iconSize={60} />
          <View className="addActivity-add-main">
            <View className="default-list-container addActivity-add-info show-last-border">
              {goodsType.map((item, index) => (
                <View
                  className="list-item"
                  key={item.id}
                  onClick={() => this.handleItemClick(item)}
                >
                  <View className="list-item-container">
                    <View className="list-item-content">
                      <View className="list-item-content_title">
                        {item.name}
                        {/* <AtInput
                          className="input-content"
                          type="text"
                          placeholder="请输入"
                          placeholderClass="placeholder"
                          value={item.name}
                          onChange={value => {
                            goodsType[index].name = value;
                            this.setState({ goodsType });
                          }}
                        /> */}
                      </View>
                    </View>
                  </View>
                </View>
              ))}
            </View>
          </View>
          <View className="button-position">
            <View className="edit-unit" onClick={this.handleAdd}>
              <View className="circle">
                <IconFont name="plus" size={50} />
              </View>
              <Text>添加</Text>
            </View>
          </View>
        </View>
      </Root>
    );
  }
}
