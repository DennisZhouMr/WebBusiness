import Taro, { Component } from "@tarojs/taro";
import { View, Text, Block } from "@tarojs/components";
import { AtButton, AtTabs, AtTabsPane, AtInput } from "taro-ui";
import IconFont from "@/components/iconfont";
import Root from "@/components/Root";
import NavBar from "@/components/NavBar";
import RemonmendCard from "../components/marketingActivity/RemonmendCard";

import "./record.scss";

const tabList = [{ title: "推荐人记录" }, { title: "礼品发送记录" }];

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      showMore: false,
      search: "",
      remmonmentList: [
        {
          title: "2020.03.05",
          children: [
            { name: "昵称", vip: true, date: "2020.03.05 14:00" },
            { name: "昵称", date: "2020.03.05 14:00" },
            { name: "昵称", date: "2020.03.05 14:00" }
          ]
        },
        {
          title: "2020.03.04",
          children: [
            { name: "昵称", vip: true, date: "2020.03.04 14:00" },
            { name: "昵称", vip: true, date: "2020.03.04 14:00" }
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
  render() {
    const { current, remmonmentList, search } = this.state;
    return (
      <Root background={{ background: "linear-gradient(top,#ffffff,#f5f5f5)" }}>
        <View className="common-wrapper detail-wrapper">
          <NavBar title="推荐有礼记录" iconType="zujian471" iconSize={60} />
          <View className="detail-main">
            <AtTabs
              className="tab-container activity-tab"
              scroll
              current={current}
              tabList={tabList}
              onClick={this.handleTabClick}
            >
              <AtTabsPane current={current} index={0}>
                <View>
                  <View className="search-bar">
                    <View className="content">
                      <IconFont name="search" size={36} />
                      <AtInput
                        className="input-content"
                        type="text"
                        placeholder="手机号/微信昵称"
                        value={search}
                        onChange={value => {
                          this.setState({ search: value });
                        }}
                      />
                    </View>
                    <View className="extra">
                      <AtButton type="primary" size="small" className="btn">
                        查询
                      </AtButton>
                    </View>
                  </View>
                  <View className="remonment-list">
                    {remmonmentList.map(item => (
                      <RemonmendCard key={""} datesource={item} />
                    ))}
                  </View>
                </View>
              </AtTabsPane>
              <AtTabsPane current={current} index={1}>
                <View>
                  <View className="search-bar">
                    <View className="content">
                      <IconFont name="search" size={36} />
                      <AtInput
                        className="input-content"
                        type="text"
                        placeholder="手机号/微信昵称"
                        value={search}
                        onChange={value => {
                          this.setState({ search: value });
                        }}
                      />
                    </View>
                    <View className="extra">
                      <AtButton type="primary" size="small" className="btn">
                        查询
                      </AtButton>
                    </View>
                  </View>
                  <View className="remonment-list">
                    {remmonmentList.map(item => (
                      <RemonmendCard key={""} datesource={item} />
                    ))}
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
