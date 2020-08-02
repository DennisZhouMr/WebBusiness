import Taro, { Component } from "@tarojs/taro";
import { View, Text, Picker, Block } from "@tarojs/components";
import { AtButton, AtInput, AtTag } from "taro-ui";
import IconFont from "@/components/iconfont";
import Root from "@/components/Root";
import NavBar from "@/components/NavBar";
import SmallSwitch from "@/components/SmallSwitch";

import "./add.scss";

export default class extends Component {
  config = {
    navigationBarTitleText: "添加套餐"
  };
  state = {
    name: "Polo 衫",
    type: "默认分类",
    price: 200,
    icon: "默认图标",
    switchIsOpen: false,
    selectPackShow: false,
    selectPack: [
      {
        name: "选择后的商品名",
        price: "28",
        number: "1"
      },
      {
        name: "选择后的商品名",
        price: "55",
        number: "5"
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
    if (price === "") {
      Taro.showToast({ title: "请输入售卖价", icon: "none" });
      return false;
    }
    return true;
  };
  render() {
    const { name, type, price, icon, selectPackShow, selectPack } = this.state;
    return (
      <Root
        background={{
          background: `linear-gradient(#fff, #f5f5f5)`
        }}
      >
        <View className="common-wrapper addActivity-add-wrapper">
          <NavBar title="添加套餐" iconType="zujian471" iconSize={60} />
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
                    <View className="list-item-content_title">售卖价*</View>
                  </View>
                  <View className="list-item-extra">
                    <View className="list-item-extra_info">
                      <AtInput
                        className="input-content"
                        type="number"
                        placeholder="请输入"
                        placeholderClass="placeholder"
                        value={price}
                        onChange={value => {
                          this.setState({ price: value });
                        }}
                      />
                    </View>
                    <View className="list-item-extra_icon">元</View>
                  </View>
                </View>
              </View>
              <View className="list-item">
                <View className="list-item-container">
                  <View className="list-item-content">
                    <View className="list-item-content_title">称重计价</View>
                    <View className="list-item-content_title">
                      本套餐必选的商品
                    </View>
                  </View>
                  {!selectPackShow && (
                    <View className="list-item-extra">
                      <View
                        className="list-item-extra_icon"
                        onClick={() => {
                          this.setState({ selectPackShow: true });
                        }}
                      >
                        <IconFont name="right" size={25} />
                      </View>
                    </View>
                  )}
                </View>
                {selectPackShow && (
                  <View className="at-row at-row--wrap packageGoods">
                    <View className="at-col at-col-4 bold">商品</View>
                    <View className="at-col at-col-3 bold center">价格</View>
                    <View className="at-col at-col-4 bold center">份数</View>
                    <View className="at-col at-col-1 bold"></View>
                    {selectPack.map(item => (
                      <Block>
                        <View className="at-col at-col-4">{item.name}</View>
                        <View className="at-col at-col-3 center">
                          {item.price}
                        </View>
                        <View className="at-col at-col-4 center">
                          {item.number}
                        </View>
                        <View className="at-col at-col-1">
                          <IconFont name="zu1852" size={26} />
                        </View>
                      </Block>
                    ))}
                    <View
                      className="at-col at-col-12 add"
                      onClick={() => {
                        Taro.navigateTo({
                          url: "/pages/spread/shopModulars/myGoods/package"
                        });
                      }}
                    >
                      + 添加商品
                    </View>
                  </View>
                )}
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
