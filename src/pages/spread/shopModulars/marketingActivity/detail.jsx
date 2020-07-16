import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { AtButton, AtTabs, AtTabsPane } from "taro-ui";
import IconFont from "@/components/iconfont";
import Root from "@/components/Root";
import NavBar from "@/components/NavBar";
import RoundProgress from "../components/Progress";

import "./detail.scss";

const tabList = [{ title: "活动效果" }, { title: "活动详情" }];

const activeEffect = [
  {
    id: 1,
    title: "今日数据",
    child: [
      { id: 11, title: "发邀数(人)", num: 0 },
      { id: 12, title: "被邀人数(人)", num: 0 },
      { id: 13, title: "约定数(人)", num: 0 },
      { id: 14, title: "到店打卡(人)", num: 0 },
      { id: 15, title: "奖励礼券(张)", num: 0 },
      { id: 16, title: "奖励积分(分)", num: 0 }
    ]
  }
];
const activeTotalDetail = [
  {
    id: 2,
    title: "历史累计数据",
    child: [
      { id: 21, title: "会员转化率", num: 0, type: "rate" },
      { id: 22, title: "新赠会员(人)", num: 0 },
      { id: 23, title: "激活会员(人)", num: 0 },
      { id: 24, title: "消费转化率", num: 0.2, type: "rate" },
      { id: 25, title: "激活会员(人)", num: 0 },
      { id: 26, title: "消费会员(人)", num: 0 },
      { id: 27, title: "积分撬动力(元)", num: 0.5, type: "rate" },
      { id: 28, title: "积分成本(元)", num: 0 },
      { id: 29, title: "拉动消费(元)", num: 0 }
    ]
  }
];

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = { current: 0 };
  }

  handleClick = value => {
    this.setState({
      current: value
    });
  };

  render() {
    const { current } = this.state;
    return (
      <Root background={{ background: "linear-gradient(top,#ffffff,#f5f5f5)" }}>
        <View className="common-wrapper detail-wrapper">
          <NavBar title="会员激活礼" iconType="zujian471" iconSize={60} />
          <View className="detail-main">
            <View className="header_title">
              <View className="content">
                <View className="title">活动进行中</View>
                <View>活动为期 180 天，当前第 1 天</View>
              </View>
            </View>
            <AtTabs
              className="tab-container activity-tab"
              scroll
              current={current}
              tabList={tabList}
              onClick={this.handleClick}
            >
              <AtTabsPane current={current} index={0}>
                {activeEffect.map(item => (
                  <View className="effect-dl" key={item.id}>
                    <View className="dt">{item.title}</View>
                    <View className="at-row dd-box">
                      {item.child.map(sItem => (
                        <View className="at-col at-col-6 dd" key={sItem.id}>
                          {sItem.type == "rate" ? (
                            <RoundProgress
                              className="progress"
                              data={item.status}
                              size={152}
                              strokeWidth={26}
                              progress={sItem.num}
                              bgColor="#ccc"
                              color="#E0004E"
                            />
                          ) : (
                            <View className="num">{sItem.num}</View>
                          )}
                          <View className="text">{sItem.title}</View>
                        </View>
                      ))}
                    </View>
                  </View>
                ))}
                {activeTotalDetail.map(item => (
                  <View className="effect-dl totalDetail-dl" key={item.id}>
                    <View className="dt">{item.title}</View>
                    <View className="at-row dd-box">
                      {item.child.map(sItem => (
                        <View className="at-col at-col-4 dd" key={sItem.id}>
                          {sItem.type == "rate" ? (
                            <RoundProgress
                              className="progress"
                              data={item.status}
                              size={152}
                              strokeWidth={26}
                              progress={sItem.num}
                              bgColor="#ccc"
                              color="#E0004E"
                            />
                          ) : (
                            <View className="num">{sItem.num}</View>
                          )}
                          <View
                            className={`text ${
                              sItem.type == "rate" ? "rateText" : ""
                            }`}
                          >
                            {sItem.title}
                          </View>
                        </View>
                      ))}
                    </View>
                  </View>
                ))}
              </AtTabsPane>
              <AtTabsPane current={current} index={1}>
                <View className="detail-container">
                  <View className="detail-list">
                    <View className="title">活动规则</View>
                    <View className="detail-list-item">
                      <View className="content">活动名称</View>
                      <View className="extra">激活有礼首单消费送双倍积分</View>
                    </View>
                    <View className="detail-list-item">
                      <View className="content">活动周期</View>
                      <View className="extra">2020/03/04 - 2020/09/03</View>
                    </View>
                    <View className="detail-list-item">
                      <View className="content">积分赠送规则*</View>
                      <View className="extra">支付 1 元 赠送 2 积分</View>
                    </View>
                  </View>
                  <View className="detail-list">
                    <View className="title">优惠礼券</View>
                    <View className="detail-list-item">
                      <View className="content">券类型</View>
                      <View className="extra">折扣券</View>
                    </View>
                    <View className="detail-list-item">
                      <View className="content">优惠名称</View>
                      <View className="extra">全场9.0折</View>
                    </View>
                    <View className="detail-list-item">
                      <View className="content">优惠类型</View>
                      <View className="extra">9.0折</View>
                    </View>
                    <View className="detail-list-item">
                      <View className="content">有效时间</View>
                      <View className="extra">2020/03/04 - 2020/09/03</View>
                    </View>
                    <View className="detail-list-item">
                      <View className="content">发券数</View>
                      <View className="extra">激活数量</View>
                    </View>
                  </View>
                </View>
              </AtTabsPane>
            </AtTabs>
          </View>
          {current == 1 && (
            <View className="button-position">
              <AtButton type="secondary" className="default-button end-button">
                设置参数
              </AtButton>
            </View>
          )}
        </View>
      </Root>
    );
  }
}
