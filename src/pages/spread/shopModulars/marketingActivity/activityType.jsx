import Taro, { Component } from "@tarojs/taro";
import { View, Text, Block } from "@tarojs/components";
import { AtButton, AtTabs, AtTabsPane } from "taro-ui";
import IconFont from "@/components/iconfont";
import Root from "@/components/Root";
import NavBar from "@/components/NavBar";

import "./activityType.scss";
const costomerData = [
  {
    id: 1,
    name: "增加顾客",
    desc:
      "针对新老会员及门店消费场景进行优惠返利活动\n活跃门店气氛，在提升店铺曝光率的同时，获取\n会员的数量及提高下单率",
    children: [
      {
        id: "11",
        icon: "zu1772",
        name: "会员激活礼",
        desc: "吸引顾客成为会员",
        operation: "设置",
        url: "/pages/spread/shopModulars/marketingActivity/createActivity"
      },
      {
        id: "12",
        icon: "lujing5202",
        name: "推荐有礼",
        desc: "拉新促活",
        operation: "创建",
        url: "/pages/spread/shopModulars/marketingActivity/createRemonmend"
      }
    ]
  },
  {
    id: 2,
    name: "促进销售",
    desc:
      "丰富的营销工具，带来更多的销售方式，可有效\n的刺激顾客消费热情，带来更多的销售额",
    children: [
      {
        id: "21",
        icon: "lujing1877",
        name: "单比消费送礼",
        desc: "刺激顾客多消费",
        operation: "创建",
        url: "/pages/spread/shopModulars/marketingActivity/createSingleConsumer"
      },
      {
        id: "22",
        icon: "mulit-people",
        name: "拼团活动",
        desc: "老带新强营销",
        operation: "创建",
        url: ""
      }
    ]
  },
  {
    id: 3,
    name: "直接发券",
    desc: "多种券的类型和使用场景直接发券，优惠券的发\n放和领取更简单",
    children: [
      {
        id: "31",
        icon: "zu1770",
        name: "直接发券",
        desc: "提升复购率",
        operation: "创建",
        url: "/pages/spread/shopModulars/marketingActivity/sendCouponCreate"
      }
    ]
  }
];

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      tabList: [
        { title: "顾客互动" },
        { title: "激励消费" },
        { title: "直接发券" }
      ]
    };
  }

  handleClick = value => {
    this.setState({
      current: value
    });
  };

  render() {
    const { current, tabList } = this.state;
    return (
      <Root background={{ background: "linear-gradient(top,#ffffff,#f5f5f5)" }}>
        <View className="common-wrapper createAct-wrapper">
          <NavBar title="活动类型" iconType="zujian471" iconSize={60} />
          <View className="createAct-main">
            <AtTabs
              className="tab-container createAct-tab"
              scroll
              current={current}
              tabList={tabList}
              onClick={this.handleClick}
            >
              <AtTabsPane current={current} index={0}>
                <View className="customer">
                  {costomerData.map(item => (
                    <View className="customer-list" key={item.id}>
                      <View className="customer_title">{item.name}</View>
                      <View className="customer_desc">
                        ●<Text>{item.desc}</Text>
                      </View>
                      <View className="costomer-content">
                        {item.children.map(child => (
                          <View
                            className="item"
                            key={child.id}
                            onClick={() => {
                              if (child.url) {
                                Taro.navigateTo({ url: child.url });
                              }
                            }}
                          >
                            <View>
                              <View className="icon">
                                <IconFont
                                  name={child.icon}
                                  color="#A0A0A0"
                                  size={58}
                                />
                              </View>
                              <View className="title">{child.name}</View>
                              <View className="desc">{child.desc}</View>
                              <AtButton className="btn" size="small">
                                {child.operation}
                              </AtButton>
                            </View>
                          </View>
                        ))}
                      </View>
                    </View>
                  ))}
                </View>
              </AtTabsPane>
              <AtTabsPane current={current} index={1}></AtTabsPane>
              <AtTabsPane current={current} index={2}></AtTabsPane>
            </AtTabs>
          </View>
        </View>
      </Root>
    );
  }
}
