import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { observer, inject } from "@tarojs/mobx";
import SpreadIndex from "./spreadIndex";
import InterconnectIndex from "./interconnectIndex";
import StatementIndex from "./statementIndex";
import MeIndex from "./meIndex";
import TabBarBottom from "@/components/TabBarBottom";
import RootComponents from "@/components/Root";

import "./index.scss";

@inject("counterStore")
@observer
class Home extends Component {
  config = {
    navigationBarTitleText: "首页"
  };

  state = {
    current: 0
  };

  componentWillMount() {}

  componentWillReact() {
    console.log("componentWillReact");
  }

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  handleTabBarClick = index => {
    this.setState({ current: index });
  };

  render() {
    const { current } = this.state;

    const AtTabBarList = [
      {
        title: "推广",
        iconPrefixClass: "icon",
        iconType: "home"
      },
      {
        title: "互联",
        iconPrefixClass: "icon",
        iconType: "hulianweixuanze"
      },
      { title: "", special: true },
      {
        title: "报表",
        iconPrefixClass: "icon",
        iconType: "baobiaoweixuanze"
      },
      {
        title: "我的",
        iconPrefixClass: "icon",
        iconType: "wodeweixuanzhong"
      }
    ];

    return (
      <View className="home">
        <RootComponents background={{background: `url(${require('@/assets/images/back.png')}) #f5f5f5 no-repeat 0 0`}}>
          <View className="main">
            {current === 0 && <SpreadIndex />}
            {current === 1 && <InterconnectIndex />}
            {current === 3 && <StatementIndex />}
            {current === 4 && <MeIndex />}
          </View>
          <TabBarBottom
            iconSize={21}
            fontSize={14}
            tabList={AtTabBarList}
            onTabBarClick={this.handleTabBarClick}
          />
        </RootComponents>
      </View>
    );
  }
}

export default Home;
