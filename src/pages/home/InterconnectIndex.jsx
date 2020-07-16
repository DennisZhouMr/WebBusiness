import Taro, { Component } from "@tarojs/taro";
import { View, ScrollView, Text } from "@tarojs/components";
import { AtTabs, AtTabsPane } from "taro-ui";
import SwiperProp from "@/components/Swiper";
import IconFont from "@/components/iconfont";
// import TabBar from '@/components/TabBar'
import Item from "./components/interconnect/Item";
import Caption from "@/components/Caption";
import { listData } from "./mock";

class interconnectIndex extends Component {
  static options = {
    addGlobalClass: true
  };

  state = {
    current: 0,
    tabList: [
      { title: "资源配置" },
      { title: "提升效率" },
      { title: "商业服务" }
    ],
    imgList: [{ url: "" }, { url: "" }, { url: "" }]
  };
  handleTabClick = value => {
    this.setState({ current: value });
  };
  render() {
    const { current, tabList, imgList } = this.state;
    return (
      <View className="common-wrapper interconnect-index">
        <Caption text="信息" iconType="message" icon />
        <View className="interconnect-main">
          <SwiperProp imgList={imgList} indicatorDots={false} />
          <AtTabs
            className="tab-container interconnect-tab"
            scroll
            current={current}
            tabList={tabList}
            onClick={this.handleTabClick}
          >
            {listData.length > 0 &&
              listData.map((item, index) => (
                <AtTabsPane current={current} index={index}>
                  <ScrollView>
                    <Item key="" desc={item.desc} data={item.data} />
                  </ScrollView>
                </AtTabsPane>
              ))}
          </AtTabs>
        </View>
      </View>
    );
  }
}

export default interconnectIndex;
