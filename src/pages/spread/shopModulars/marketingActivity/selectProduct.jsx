import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtInput, AtTabs, AtTabsPane, AtButton } from "taro-ui";
import IconFont from "@/components/iconfont";
import Root from "@/components/Root";
import NavBar from "@/components/NavBar";
import SelectProduct from "../components/marketingActivity/SelectProduct";

import "./selectProduct.scss";

export default class extends Component {
  state = {
    search: "",
    curren: 0,
    tabList: [{ title: "自营商品" }]
  };
  render() {
    const { tabList, current, search } = this.state;
    return (
      <Root
        background={{
          background: "linear-gradient(top,#ffffff,#f5f5f5)"
        }}
      >
        <View className="common-wrapper select-product-wrapper">
          <NavBar
            title="选取参加活动的商品"
            iconType="zujian471"
            iconSize={60}
          />
          <View className="select-product-main">
            <View className="search-bar">
              <View className="extra">
                <IconFont name="gantanhao" size={28} color="#229e8e" />
              </View>
              <View className="content">
                <IconFont name="search" size={36} />
                <AtInput
                  className="input-content"
                  type="text"
                  placeholder="搜索本地商品名称"
                  value={search}
                  onChange={value => {
                    this.setState({ search: value });
                  }}
                />
              </View>
            </View>
            <AtTabs
              className="tab-container select-product-tab"
              scroll
              current={current}
              tabList={tabList}
            >
              <AtTabsPane current={current} index={0}>
                <SelectProduct />
              </AtTabsPane>
            </AtTabs>
          </View>
          <View className="button-position">
            <AtButton
              type="secondary"
              className="default-button primary-button"
              onClick={this.handleSubmit}
            >
              完成
            </AtButton>
          </View>
        </View>
      </Root>
    );
  }
}
