import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import IconFont from "@/components/iconfont";

import "./index.scss";

export default class extends Component {
  static options = {
      addGlobalClass: true
  }
  
  navBack = () => {
    Taro.navigateBack();
  }

  render() {
    const { isCustom, title, iconType, iconSize, iconColor, onClickLeft, textAlign } = this.props;
    return (
      <View className="nav-bar-container">
        <View className="nav-bar-left">
          <View className="icon" onClick={this.navBack}>
            {isCustom ?
              this.props.children
              :
              <IconFont
                name={iconType}
                size={iconSize}
                // color={iconColor || "rgba(0, 0, 0, 0.5)"}
                onClick={onClickLeft}
              />
            }
          </View>
        </View>
        <View className="nav-bar-title" style={{textAlign: textAlign || 'center'}}>{title}</View>
        <View className="nav-bar-right"></View>
      </View>
    );
  }
}
