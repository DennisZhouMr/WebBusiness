import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { AtButton, AtTabs, AtTabsPane } from "taro-ui";
import IconFont from "@/components/iconfont";
import Root from "@/components/Root";
import Caption from "@/components/Caption";
import ActiveCard from "../components/marketingActivity/ActiveCard";
import "./index.scss";

const tabList = [
  {
    title: "进行中",
    list: [
      {
        id: 1,
        title: "邀约好友Ta去领取专属权益卡",
        desc: "邀约人或被邀约人\n到店打卡/1次获得打赏",
        time: "2020/02/05-2020/03/05 23:59前",
        tag: "会员激活礼"
      },
      {
        id: 2,
        title: "邀约好友Ta去领取专属权益卡",
        desc: "邀约人或被邀约人\n到店打卡/1次获得打赏",
        time: "2020/02/05-2020/03/05 23:59前",
        tag: "推荐有礼"
      }
    ]
  },
  {
    title: "未开始",
    list: [
      {
        id: 1,
        title: "邀约好友Ta去领取专属权益卡",
        desc: "邀约人或被邀约人\n到店打卡/1次获得打赏",
        time: "2020/02/05-2020/03/05 23:59前",
        tag: "会员激活礼"
      }
    ]
  },
  {
    title: "已结束",
    list: [
      {
        id: 3,
        title: "邀约好友Ta去领取专属权益卡",
        desc: "邀约人或被邀约人\n到店打卡/1次获得打赏",
        time: "2020/02/05-2020/03/05 23:59前"
      }
    ]
  }
];

export default class extends Component {
  config = {
    navigationBarTitleText: "营销活动"
  };
  state = {
    current: 0
  };
  handleTabClick = value => {
    this.setState({
      current: value
    });
  };

  render() {
    const { current } = this.state;
    return (
      <Root
        background={{
          background: `linear-gradient(#fff, #f5f5f5)`
        }}
      >
        <View className="common-wrapper activity-wrapper">
          <Caption text="营销活动" iconType="zu1701" />
          <View className="activity-main">
            <View className="top">
              <View className="left">
                <View className="icon">
                  <IconFont name="gantanhao" size={28} />
                </View>
                营销管理
              </View>
              <View
                className="right"
                onClick={() => {
                  Taro.navigateTo({ url: "/pages/spread/shopModulars/index" });
                }}
              >
                返回
              </View>
            </View>
            <View className="activity-content">
              <AtTabs
                className="tab-container activity-tab"
                scroll
                current={current}
                tabList={tabList}
                onClick={this.handleTabClick}
              >
                {tabList.map((item, index) => (
                  <AtTabsPane current={current} index={index}>
                    {item.list.map(list => (
                      <ActiveCard
                        onSkipUrl={() =>
                          Taro.navigateTo({
                            url:
                              "/pages/spread/shopModulars/marketingActivity/detail"
                          })
                        }
                        key={list.id}
                        item={list}
                      />
                    ))}
                  </AtTabsPane>
                ))}
              </AtTabs>
            </View>
          </View>
          <View className="button-position">
            <AtButton
              type="secondary"
              className="default-button primary-button"
              onClick={() => {
                Taro.navigateTo({ url: "/pages/spread/shopModulars/marketingActivity/activityType" });
              }}
            >
              添加活动
            </AtButton>
          </View>
        </View>
      </Root>
    );
  }
}
