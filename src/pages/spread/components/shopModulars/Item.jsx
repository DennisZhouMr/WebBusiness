import Taro, { Component } from "@tarojs/taro";
import { View, Image } from "@tarojs/components";
import { AtTag } from "taro-ui";
import IconFont from "@/components/iconfont";

import "./item.scss";

/*
 * 店铺模块单个组件
 */

class ShopModularsItem extends Component {
  static options = {
    addGlobalClass: true
  };

  render() {
    const { data = {} } = this.props;
    return (
      <View className="shop-modulars-item">
        <View className="icon-box">
          {data.icon && <IconFont name={data.icon} size={60} />}
        </View>
        <View className="title ellipsis">{data.title}</View>
        <View className="desc ellipsis">{data.desc}</View>
        <View className="tag">
          {data.btnType === "edit" && (
            <AtTag
              type="primary"
              circle
              size="small"
              className="gray font-color-229E8E"
            >
              {data.btnText}
            </AtTag>
          )}
          {data.btnType === "done" && (
            <AtTag
              type="primary"
              circle
              size="small"
              className="gray font-color-A0A0A0"
            >
              {data.btnText}
            </AtTag>
          )}
          {data.btnType === "disabled" && (
            <AtTag
              type="primary"
              circle
              size="small"
              disabled
              className="gray2 font-color-FFFFFF"
            >
              {data.btnText}
            </AtTag>
          )}
        </View>
      </View>
    );
  }
}

export default ShopModularsItem;
