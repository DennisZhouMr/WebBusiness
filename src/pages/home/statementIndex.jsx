import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import IconFont from "@/components/iconfont";
import { statementData } from "./mock";
import "./statementIndex.scss";

export default class extends Component {
  static options = {
    addGlobalClass: true
  };
  config = {
    navigationBarTitleText: '报表'
  }
  state = {};
  render() {
    return (
      <View className="statement-index">
        <View className="statement-main">
          {statementData.map(item => (
            <View className="statement-group" key={""}>
              <Text className="title">{item.title}</Text>
              <View className="at-row at-row--wrap content">
                {item.children.map(child => (
                  <View className="at-col at-col-4 item" key={""}>
                    <View>
                      <View className="circle">
                        <IconFont name={child.icon} size={65} />
                      </View>
                      <Text className="caption">{child.name}</Text>
                    </View>
                  </View>
                ))}
              </View>
            </View>
          ))}
        </View>
      </View>
    );
  }
}
