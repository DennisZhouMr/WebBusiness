import Taro, { Component } from "@tarojs/taro";
import { View, Image } from "@tarojs/components";
import { AtButton, AtTabs, AtTabsPane, AtAvatar } from "taro-ui";

export default class extends Component {
  static options = {
    addGlobalClass: true
  };

  render() {
    const { datesource = {}, showMore = true } = this.props;
    return (
      <View className="remonmend-card-item">
        <View className="caption">
          {datesource.title}（{datesource.children.length}人）
        </View>
        {datesource.children.map((child, index) => {
          return (
            <Block key={""}>
              {!showMore && index < 2 && (
                <View className="remmonment-list-item">
                  <View className="content">
                    <View className="avatar">
                      <AtAvatar image="" />
                    </View>
                    <View className="info">
                      <View className="name">{child.name}</View>
                      {child.vip && (
                        <View className="grade">
                          <Image src={require("@/assets/images/vip.png")} />
                        </View>
                      )}
                    </View>
                  </View>
                  <View>{child.date}</View>
                  <View>{child.integral}</View>
                </View>
              )}
              {showMore && (
                <View className="remmonment-list-item">
                  <View className="content">
                    <View className="avatar">
                      <AtAvatar image="" />
                    </View>
                    <View className="info">
                      <View className="name">{child.name}</View>
                      {child.vip && (
                        <View className="grade">
                          <Image src={require("@/assets/images/vip.png")} />
                        </View>
                      )}
                    </View>
                  </View>
                  <View className="extra">
                    {child.date}
                    <View>{child.integral}</View>
                  </View>
                </View>
              )}
            </Block>
          );
        })}
      </View>
    );
  }
}
