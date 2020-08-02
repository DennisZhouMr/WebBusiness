import Taro, { Component } from "@tarojs/taro";
import { View, Image, Text } from "@tarojs/components";
import { AtIcon, AtButton, AtInput } from "taro-ui";
import "./store.scss";

export default class extends Component {
  config = {
    navigationBarTitleText: "注册"
  };
  state = {
    name: "",
    location: "陕西省／西安市／莲湖区",
    address: "",
    type: 1
  };
  render() {
    const { name, location, address, type } = this.state;
    return (
      <View className="register-store-wrapper">
        <View className="header">
          <View className="content">
            <View className="title">您的店铺叫什么？在哪里？</View>
            <View className="desc">填写准确的信息，将为您提供更多的服务</View>
          </View>
        </View>
        <View className="register-store-container">
          <View className="custom-list">
            <View className="list-item">
              <View className="list-item-container">
                <View className="list-item-content">
                  <View className="list-item-content_title bold">门店名称</View>
                </View>
                <View className="list-item-extra">
                  <View className="list-item-extra_info">
                    <AtInput
                      className="store-input"
                      required
                      type="text"
                      placeholder="例如：小美的商店（钟楼店）"
                      value={name}
                      onChange={value => {
                        this.setState({ name: value });
                      }}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View className="list-item">
              <View className="list-item-container">
                <View className="list-item-content">
                  <View className="list-item-content_title bold">所属地区</View>
                </View>
                <View className="list-item-extra">
                  <View className="list-item-extra_info">{location}</View>
                  <View className="list-item-extra_icon">
                    <View className="icon-box">
                      <AtIcon
                        prefixClass="icon"
                        value="security"
                        size="14"
                        color="#434343"
                      />
                    </View>
                    定位
                  </View>
                </View>
              </View>
            </View>
            <View className="list-item">
              <View className="list-item-container">
                <View className="list-item-content">
                  <View className="list-item-content_title bold">详细地址</View>
                </View>
                <View className="list-item-extra">
                  <View className="list-item-extra_info">
                    <AtInput
                      className="store-input"
                      required
                      type="text"
                      placeholder="街道、楼牌号"
                      value={address}
                      onChange={value => {
                        this.setState({ name: value });
                      }}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View className="button-position">
          {type == 1 && (
            <AtButton className="gray-button" circle>
              同意协议并注册
            </AtButton>
          )}
          {type == 2 && (
            <AtButton className="gray-button primary-button" circle>
              下一步，选择经营品类
            </AtButton>
          )}
        </View>
      </View>
    );
  }
}
