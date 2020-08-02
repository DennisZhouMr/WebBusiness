import Taro, { Component } from "@tarojs/taro";
import { View, Text, Button } from "@tarojs/components";
import "./index.scss";
export default class extends Component {
  static options = {
    addGlobalClass: true
  };

  render() {
    const { item = {} } = this.props;
    return (
      <View
        className="getCustomer-active_container"
        onClick={this.props.onSkipUrl}
      >
        <View className="content">
          <View className="tit">
            <View>{item.title}</View>
            <Button className="default-button">{item.tag}</Button>
          </View>
          <View className="desc">
            <View>
              <Text>{item.desc}</Text>
            </View>
          </View>
          <View className="time">{item.time}</View>
        </View>
        <View className="at-row group-bottom">
          <View className="at-col at-col-6">门店海报</View>
          <View className="at-col at-col-6">分享活动</View>
        </View>
        <View className="tip">系统创建</View>
      </View>
    );
  }
}
