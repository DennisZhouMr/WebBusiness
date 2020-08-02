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
    navigationBarTitleText: "编辑员工"
  };
  state = {
    name: "Polo 衫",
    type: "默认分类",
    price: 200,
    icon: "默认图标",
    unit: "份",
    switchIsOpen: false
  };
  componentDidMount() {
    this.setState({
      unit: this.$router.params.unit,
      type: this.$router.params.type
    });
  }
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
    const { name, type, price, icon, unit, switchIsOpen } = this.state;
    return (
      <Root
        background={{
          background: `linear-gradient(#fff, #f5f5f5)`
        }}
      >
        <View className="common-wrapper addActivity-add-wrapper">
          <NavBar title="添加商品" iconType="zujian471" iconSize={60} />
          <View className="addActivity-add-main">
            <View className="default-list-container addActivity-add-info">
              <View className="list-item">
                <View className="list-item-container">
                  <View className="list-item-content">
                    <View className="list-item-content_title">商品名称*</View>
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
                    <View className="list-item-content_title">商品分类*</View>
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
                    <View className="list-item-content_title">多规格</View>
                  </View>
                  <View
                    className="list-item-extra color-FF3F81"
                    onClick={() => {
                      Taro.navigateTo({
                        url:
                          "/pages/spread/shopModulars/myGoods/multiSpecification"
                      });
                    }}
                  >
                    多规格
                  </View>
                </View>
              </View>
              <View className="list-item">
                <View className="list-item-container">
                  <View className="list-item-content">
                    <View className="list-item-content_title">称重计价</View>
                    <View className="list-item-content_desc">
                      不可跟多规格共用
                    </View>
                  </View>
                  <View className="list-item-extra">
                    <SmallSwitch
                      isOpen={switchIsOpen}
                      onChange={() => {
                        if (!switchIsOpen)
                          Taro.navigateTo({
                            url: "/pages/spread/shopModulars/myGoods/addWeigh"
                          });
                        this.setState({ switchIsOpen: !switchIsOpen });
                      }}
                    />
                  </View>
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
            </View>
          </View>
          <View className="button-position botton-footer">
            <AtButton
              type="secondary"
              className="default-button space"
              onClick={this.handleSubmit}
            >
              保存
            </AtButton>
            <AtButton
              type="secondary"
              className="default-button primary-button"
              onClick={this.handleSubmit}
            >
              保存并继续添加
            </AtButton>
          </View>
        </View>
      </Root>
    );
  }
}
