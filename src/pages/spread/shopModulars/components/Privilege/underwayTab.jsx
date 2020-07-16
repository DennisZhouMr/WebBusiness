import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import "./underwayTab.scss";

export default class extends Component {
  render() {
    const { datasouce=[] } = this.props;
    return (
      <View className="underway-container">
        {datasouce.map(item => (
          <View
            className="coupon-list"
            key={item.type}
            onClick={() => {
              Taro.navigateTo({ url: item.url });
            }}
          >
            <View className="content">
              <Text className="title">{item.name}</Text>
              <Text className="desc">{item.desc}</Text>
              <Text className="expiry-date">{item.expiryData}</Text>
            </View>
            <View className="type">{item.type}</View>
          </View>
        ))}
      </View>
    );
  }
}
