import Taro, { Component } from "@tarojs/taro";
import { View, Image } from "@tarojs/components";
import IconFont from "@/components/iconfont";
import { AtTabBar } from "taro-ui";

/*
 *  底部导航栏组件
 *  @param {arrayObject} tabList  底部导航栏列表
 *  @param {string} src  中间图标地址
 *  如：  home/index
 */

class TabBarBottom extends Component {
  static options = {
    addGlobalClass: true
  };

  state = {
    current: 0
  };

  render() {
    const { current } = this.state;
    const {
      tabList = [],
      src = "",
      iconSize,
      fontSize,
      onTabBarClick,
      centerText = "",
      centerIcon = "saoma"
    } = this.props;

    const AtTabBarProps = {
      current,
      tabList,
      iconSize,
      fontSize,
      className: "tab-bar-bottom",
      fixed: true,
      onClick: index => {
        this.setState({ current: index });
        onTabBarClick(index);
      }
    };

    return (
      <View className="tabBar-wrap">
        <View className="special">
          <View
            className="box-container"
            onClick={() => {
              onTabBarClick('center');
            }}
          >
            <View className="circle">
              <View className="icon">
                <IconFont name={centerIcon} size={42} />
              </View>
            </View>
            <Text>{centerText}</Text>
          </View>
        </View>

        <AtTabBar {...AtTabBarProps} />
      </View>
    );
  }
}

export default TabBarBottom;
