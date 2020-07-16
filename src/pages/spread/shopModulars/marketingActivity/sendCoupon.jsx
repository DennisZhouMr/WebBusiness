import Taro, { Component } from "@tarojs/taro";
import { View, Text, Block } from "@tarojs/components";
import { AtButton, AtTabs, AtTabsPane, AtAvatar } from "taro-ui";
import IconFont from "@/components/iconfont";
import Root from "@/components/Root";
import NavBar from "@/components/NavBar";
import RemonmendCard from "../components/marketingActivity/RemonmendCard";

import "./detail.scss";

const tabList = [{ title: "活动效果" }, { title: "活动详情" }];

const activeEffect = [
  {
    id: 1,
    title: "累计数据",
    child: [
      { id: 12, title: "新赠会员(人)", num: 0 },
      { id: 15, title: "消费会员(人)", num: 0 },
      { id: 13, title: "发券数(张)", num: 0 },
      { id: 14, title: "用券数(张)", num: 0 },
      { id: 16, title: "拉动消费(元)", num: 0 }
    ]
  }
];
export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0
    };
  }

  handleTabClick = value => {
    this.setState({
      current: value
    });
  };
  render() {
    const { current } = this.state;
    return (
      <Root background={{ background: "linear-gradient(top,#ffffff,#f5f5f5)" }}>
        <View className="common-wrapper detail-wrapper">
          <NavBar title="直接发券" iconType="zujian471" iconSize={60} />
          <View className="detail-main">
            <View className="header_title">
              <View className="title">活动进行中</View>
              <View>活动为期 30 天，当前第 1 天</View>
            </View>
            <AtTabs
              className="tab-container activity-tab"
              scroll
              current={current}
              tabList={tabList}
              onClick={this.handleTabClick}
            >
              <AtTabsPane current={current} index={0}>
                {activeEffect.map(item => (
                  <View className="effect-dl" key={item.id}>
                    <View className="dt">{item.title}</View>
                    <View className="at-row dd-box">
                      {item.child.map(sItem => (
                        <View className="at-col at-col-6 dd" key={sItem.id}>
                          <View className="num">{sItem.num}</View>
                          <View className="text">{sItem.title}</View>
                        </View>
                      ))}
                    </View>
                  </View>
                ))}
              </AtTabsPane>
              <AtTabsPane current={current} index={1}>
                <View>
                  <View className="detail-container">
                    <View className="detail-list">
                      <View className="title">活动规则</View>
                      <View className="detail-list-item">
                        <View className="content">活动名称</View>
                        <View className="extra">读取名称参数</View>
                      </View>
                    </View>
                    <View className="detail-list">
                      <View className="title">优惠券</View>
                      <View className="detail-list-item">
                        <View className="content">券类型</View>
                        <View className="extra">
                          折扣券／代金券／礼券／商品券
                        </View>
                      </View>
                      <View className="detail-list-item">
                        <View className="content">优惠名称</View>
                        <View className="extra">名称参数</View>
                      </View>
                      <View className="detail-list-item">
                        <View className="content">优惠类型</View>
                        <View className="extra">参数</View>
                      </View>
                      <View className="detail-list-item">
                        <View className="content">有效时间</View>
                        <View className="extra">参数</View>
                      </View>
                      <View className="detail-list-item">
                        <View className="content">使用条件</View>
                        <View className="extra">参数</View>
                      </View>
                    </View>
                  </View>
                  <View className="send-coupon-list">
                    <View className="send-coupon-list-item">
                      <View className="content">发券总数</View>
                      <View className="extra">
                        <View className="info">999999</View>
                        <View className="icon">
                          <IconFont name="right" size={25} />
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </AtTabsPane>
            </AtTabs>
          </View>
          <View className="button-position">
            <AtButton type="secondary" className="default-button end-button">
              终止活动
            </AtButton>
          </View>
        </View>
      </Root>
    );
  }
}
