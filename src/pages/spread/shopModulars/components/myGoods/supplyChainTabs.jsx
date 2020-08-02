import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { AtTag } from "taro-ui";
import IconFont from "@/components/iconfont";
import GoodsItems from "../GoodsItem";
const mock = [];
export default class extends Component {
  static options = {
    addGlobalClass: true
  };
  state = {
    menuActive: 0
  };
  handleMenuClick = (item, index) => {
    this.setState({ menuActive: index });
  };
  render() {
    const { menuActive } = this.state;
    return (
      <View className="goods-container">
        <View className="menu-wrapper">
          <View className="menu-list">
            {mock && mock.length > 0 ? (
              <View>
                {mock.map((item, index) => (
                  <View
                    className={`menu-list-item ${
                      menuActive == index ? "item--active" : ""
                    }`}
                    onClick={() => this.handleMenuClick(item, index)}
                  >
                    {item.name}
                  </View>
                ))}
              </View>
            ) : (
              <View className="menu-list-item item--active">预选产品</View>
            )}
            <View
              className="menu-list-item"
              onClick={() => {
                Taro.navigateTo({
                  url: "/pages/spread/shopModulars/myGoods/addType"
                });
              }}
            >
              + 分类
            </View>
          </View>
        </View>
        <View className="goods-wrapper">
          {mock && mock.length > 0 ? (
            <View>
              {mock.map(item => (
                <View key={""}>
                  <View className="title">
                    <Text>●</Text>
                    {item.name}（1个）
                  </View>
                  <View className="goods-content">
                    <View className="goods-list">
                      {item.goods.map(goods => (
                        <GoodsItems dateSouce={goods} />
                      ))}
                    </View>
                  </View>
                </View>
              ))}
            </View>
          ) : (
            <View>
              <View className="title">
                <Text>●</Text>
                默认分类（0个）
              </View>
              <View className="goods-content">
                <View className="empty">目前没有预选的商品</View>
              </View>
            </View>
          )}
        </View>
      </View>
    );
  }
}
