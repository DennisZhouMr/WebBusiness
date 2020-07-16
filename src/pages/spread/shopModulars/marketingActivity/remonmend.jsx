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
      { id: 11, title: "浏览数(人)", num: 0 },
      { id: 12, title: "新赠会员(人)", num: 0 },
      { id: 13, title: "领券数(张)", num: 0 },
      { id: 14, title: "用券数(张)", num: 0 },
      { id: 15, title: "赠送积分(分)", num: 0 },
      { id: 16, title: "拉动消费(元)", num: 0 }
    ]
  }
];
export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      showMore: false,
      remmonmentList: [
        {
          title: "2020.03.05",
          children: [
            { name: "昵称", date: "2020.03.05 14:00" },
            { name: "昵称", date: "2020.03.05 14:00" },
            { name: "昵称", date: "2020.03.05 14:00" }
          ]
        }
      ]
    };
  }

  handleTabClick = value => {
    this.setState({
      current: value
    });
  };
  handleMoreClick = () => {
    this.setState({ showMore: true });
  };
  render() {
    const { current, remmonmentList, showMore } = this.state;
    return (
      <Root background={{ background: "linear-gradient(top,#ffffff,#f5f5f5)" }}>
        <View className="common-wrapper detail-wrapper">
          <NavBar title="推荐有礼" iconType="zujian471" iconSize={60} />
          <View className="detail-main">
            <View className="header_title">
              <View className="title">活动进行中</View>
              <View className="desc">活动为期 30 天，当前第 1 天</View>
            </View>
            <AtTabs
              className="tab-container activity-tab"
              scroll
              current={current}
              tabList={tabList}
              onClick={this.handleTabClick}
            >
              <AtTabsPane current={current} index={0}>
                <Block>
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
                  <View className="remonmend-card">
                    <View className="title">
                      <View className="content">推荐记录</View>
                      <View className="extra">
                        <View className="info">所有人数</View>
                        <View className="icon">
                          <IconFont name="right" size={25} />
                        </View>
                      </View>
                    </View>
                    <View className="remonment-list">
                      {remmonmentList.length <= 0 && (
                      <View className="empty">还没有推荐记录，赶紧去推荐</View>
                      )}
                      {remmonmentList.map(item => (
                        <RemonmendCard datesource={item} showMore={showMore} />
                      ))}
                    </View>
                    {!showMore && remmonmentList.length > 0 && (
                      <View className="down" onClick={this.handleMoreClick}>
                        <IconFont name="down" size={20} />
                      </View>
                    )}
                  </View>
                </Block>
              </AtTabsPane>
              <AtTabsPane current={current} index={1}>
                <View className="detail-container">
                  <View className="detail-list">
                    <View className="title">活动规则</View>
                    <View className="detail-list-item">
                      <View className="content">活动名称</View>
                      <View className="extra">读取名称参数</View>
                    </View>
                    <View className="detail-list-item">
                      <View className="content">活动周期</View>
                      <View className="extra">读取活动周期参数</View>
                    </View>
                  </View>
                  <View className="detail-list">
                    <View className="title">活动消费券</View>
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
                  </View>
                  <View className="detail-list">
                    <View className="title">活动礼品</View>
                    <View className="detail-list-item">
                      <View className="content">推荐人礼品</View>
                      <View className="extra">0积分/礼券名/0份(数量)</View>
                    </View>
                    <View className="detail-list-item">
                      <View className="content">被推荐人礼品</View>
                      <View className="extra">0积分/礼券名</View>
                    </View>
                    <View className="detail-list-item">
                      <View className="content">新客专享</View>
                      <View className="extra">是或否</View>
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
