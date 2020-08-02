import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import IconFont from "@/components/iconfont";
import ModularItem from "../../../../components/ModularItem";

import "./UsageContainer.scss";

const modularArr = [
  { icon: "shangpinshangjia", title: "商品上架", desc: "发布编辑产品" },
  { icon: "dianpumokuai", title: "店铺模块", desc: "互联店铺设置" }
];
class UsageContainer extends Component {
  static options = {
    addGlobalClass: true
  };
  handleClick = (item, index) => {
    if (index == 0) {
      Taro.navigateTo({ url: "/pages/goodsSystem/index" });
    } else if (index == 1)
      Taro.navigateTo({ url: "/pages/spread/shopModulars/index" });
  };
  render() {
    return (
      <View className="usage-container">
        <View className="usage-wrap">
          <View className="tips-wrap">
            <IconFont name="dianpugonggao" size={26} color="#000" />
            <View className="title">店铺未开通获客共享引流系统</View>
            <View className="open-text">点击开通</View>
          </View>
          <View className="modular-wrap">
            {modularArr.map((item, index) => (
              <View
                key=""
                className="modular-item-wrap"
                onClick={() => {
                  this.handleClick(item, index);
                }}
              >
                <ModularItem
                  icon={item.icon}
                  title={item.title}
                  desc={item.desc}
                  isRight={index % 2 === 1}
                />
              </View>
            ))}
          </View>
        </View>
      </View>
    );
  }
}

export default UsageContainer;
