import Taro, { Component } from "@tarojs/taro";
import { View, Text, Block } from "@tarojs/components";
import { AtButton, AtInput } from "taro-ui";
import IconFont from "@/components/iconfont";
import Root from "@/components/Root";
import NavBar from "@/components/NavBar";

import "./add.scss";

export default class extends Component {
  config = {
    navigationBarTitleText: "编辑商品"
  };
  state = {
    name: "Polo 衫",
    type: "默认分类",
    icon: "默认图标",
    switchIsOpen: false,
    selectPack: [
      {
        name: "M码",
        price: "200"
      },
      {
        name: "S码",
        price: "200.00"
      }
    ]
  };
  handleSubmit = () => {
    if (this.validate()) {
      Taro.navigateTo({ url: "/pages/spread/shopModulars/myGoods/type" });
    }
  };
  validate = () => {
    const { name, type, price } = this.state;
    if (!name) {
      Taro.showToast({ title: "请输入商品名称", icon: "none" });
      return false;
    }
    if (!type) {
      Taro.showToast({ title: "请选择商品分类", icon: "none" });
      return false;
    }
    return true;
  };
  render() {
    const { name, type, icon, selectPack } = this.state;
    return (
      <Root
        background={{
          background: `linear-gradient(#fff, #f5f5f5)`
        }}
      >
        <View className="common-wrapper addActivity-add-wrapper">
          <NavBar title="编辑商品" iconType="zujian471" iconSize={60} />
          <View className="addActivity-add-main">
            <View className="default-list-container addActivity-add-info">
              <View className="list-item">
                <View className="list-item-container">
                  <View className="list-item-content">
                    <View className="list-item-content_title">套餐名称*</View>
                  </View>
                  <View className="list-item-extra">
                    <View className="list-item-extra_info">
                      <AtInput
                        className="input-content"
                        type="text"
                        placeholder="请输入"
                        placeholderClass="placeholder"
                        value={name}
                        onChange={value => {
                          this.setState({ name: value });
                        }}
                      />
                    </View>
                  </View>
                </View>
              </View>
              <View
                className="list-item"
                onClick={() => {
                  Taro.navigateTo({
                    url: "/pages/spread/shopModulars/myGoods/selectType"
                  });
                }}
              >
                <View className="list-item-container">
                  <View className="list-item-content">
                    <View className="list-item-content_title">套餐分类*</View>
                  </View>
                  <View className="list-item-extra">
                    <View className="list-item-extra_info">{type}</View>
                    <View className="list-item-extra_icon">
                      <IconFont name="right" size={25} />
                    </View>
                  </View>
                </View>
              </View>
              <View className="list-item">
                <View className="list-item-container">
                  <View className="list-item-content">
                    <View className="list-item-content_title">多规格</View>
                  </View>
                  <View className="list-item-extra">
                    <View className="list-item-extra_info color-FF3F81 ">
                      编辑详情
                    </View>
                  </View>
                </View>
                <View className="at-row at-row--wrap packageGoods">
                  <View className="at-col at-col-4">规格名称</View>
                  <View className="at-col at-col-4 center">售卖价</View>
                  <View className="at-col at-col-4"></View>
                  {selectPack.map(item => (
                    <Block>
                      <View className="at-col at-col-4">{item.name}</View>
                      <View className="at-col at-col-4 center">
                        {item.price}
                      </View>
                      <View className="at-col at-col-4"></View>
                    </Block>
                  ))}
                </View>
              </View>
              <View className="list-item">
                <View className="list-item-container">
                  <View className="list-item-content">
                    <View className="list-item-content_title">商品图标</View>
                  </View>
                  <View className="list-item-extra">
                    <View className="list-item-extra_info">{icon}</View>
                    <View className="list-item-extra_icon">
                      <IconFont name="right" size={25} />
                    </View>
                  </View>
                </View>
              </View>
              <View
                className="list-item"
                onClick={() => {
                  Taro.navigateTo({
                    url: "/pages/spread/shopModulars/myGoods/unit"
                  });
                }}
              >
                <View className="list-item-container">
                  <View className="list-item-content">
                    <View className="list-item-content_title">单位</View>
                  </View>
                  <View className="list-item-extra">
                    <View className="list-item-extra_info">{unit}</View>
                    <View className="list-item-extra_icon">
                      <IconFont name="right" size={25} />
                    </View>
                  </View>
                </View>
              </View>
              <View className="list-item">
                <View className="list-item-container">
                  <View className="list-item-extra">
                    <View className="list-item-extra_info color-FF3F81 ">
                      删除
                    </View>
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
