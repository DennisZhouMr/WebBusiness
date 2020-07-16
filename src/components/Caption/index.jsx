import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import IconFont from "@/components/iconfont";

import "./index.scss";

export default class extends Component {
  render() {
    const { text, iconType, iconSize, onClick } = this.props;
    return (
      <View className="header-title">
        <IconFont
          name={iconType || "zu1603"}
          size={iconSize || 52}
          onClick={onClick}
        />
        <Text>{text}</Text>
      </View>
    );
  }
}
