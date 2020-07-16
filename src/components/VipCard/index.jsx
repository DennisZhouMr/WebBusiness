import Taro, { Component } from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";
import IconFont from "@/components/iconfont";
import "./index.scss";
export default class extends Component {
  static options = {
    addGlobalClass: true
  };

  skipUrl = () => {
    if (!this.props.url) return;
    Taro.navigateTo({
      url: this.props.url
    });
  };

  render() {
    const {
      type = "simple", //normal | simple
      face = "",
      level = "默认等级",
      levelVisible = true,
      levelType = "activite", //noActive | activite
      extra = true
    } = this.props;
    return (
      <View className="vipCard_container" onClick={this.skipUrl}>
        <View className="vipCard_wrap">
          {levelVisible && (
            <View
              className={`level-box ${
                levelType == "noActive" ? "level-box-type" : ""
              } `}
            >
              {level}
            </View>
          )}
          <View className="vipCard_caption">
            <View className="circle-wrap" onClick={this.handleBack}>
              <View className="circle-box">
                {face && (
                  <Image className="image" src={face} mode="aspectFill" />
                )}
              </View>
            </View>
            <View>
              <View>
                <Image
                  className="icon-star"
                  src={require("@/assets/images/star_01.png")}
                  mode="widthFix"
                />
              </View>
              <View className="user-info">
                <IconFont name="xiaofeirenshu" size="24" />
                <View className="name">昵称</View>
              </View>
            </View>
          </View>
          <View className="vipCard_main">
            <View className="coupon">
              {type == "simple" ? (
                <View>
                  <View>可享优惠：</View>
                  <View className="num">
                    <Text>9.5</Text> <Text className="text">折</Text>{" "}
                  </View>
                </View>
              ) : (
                <View className="detail">
                  <View className="info">
                    <View className="title">门店名称</View>
                    <View className="title size">可享优惠：9.5折</View>
                  </View>
                  <View className="no">313 9732 6643 8768</View>
                </View>
              )}
            </View>
            <View className="right-star">{/* <Image></Image> */}</View>
            {extra && (
              <View>
                <IconFont name="right" size="18" color="#ffffff" />
              </View>
            )}
          </View>
        </View>
      </View>
    );
  }
}
