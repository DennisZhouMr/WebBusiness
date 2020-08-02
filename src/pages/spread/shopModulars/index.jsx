import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtButton } from "taro-ui";
import IconFont from "@/components/iconfont";
import Root from "@/components/Root";
import NavBar from "@/components/NavBar";
import ItemComponents from "../components/shopModulars/Item";
import { shopData } from "./mock";

import "./index.scss";

export default class extends Component {
  handleClick = sItem => {
    Taro.navigateTo({ url: sItem.btnUrl });
  };
  render() {
    return (
      <Root
        background={{
          background: `#f5f5f5`
        }}
      >
        <View className="common-wrapper shop-modulars-wrapper">
          <NavBar title="全部模块" iconType="close" iconSize="60" />
          <View className="shop-modulars-main">
            {shopData.map(item => (
              <View key="" className="list">
                <View className="caption">{item.title}</View>
                <View className="item-wrap">
                  {item.children &&
                    item.children.length > 0 &&
                    item.children.map(sItem => (
                      <View
                        className="item-box"
                        key=""
                        onClick={() => this.handleClick(sItem)}
                      >
                        <ItemComponents data={sItem} />
                      </View>
                    ))}
                </View>
              </View>
            ))}
          </View>
          <View className="btn-bottom">
            <AtButton type="primary" className="yellow2 yellow-btn">
              预览店铺首页
            </AtButton>
          </View>
        </View>
      </Root>
    );
  }
}
