import Taro, { Component } from "@tarojs/taro";
import { View, Image, Text, Input } from "@tarojs/components";
import { AtIcon, AtButton, AtTabs, AtTabsPane, AtTag } from "taro-ui";
import { manageData } from "../mock";
import Root from "@/components/Root";
import Modal from "@/components/Modal";
import "./status.scss";

export default class extends Component {
  config = {
    navigationBarTitleText: "经营管理"
  };
  state = {
    current: 0,
    tabList: [],
    tagData: manageData,
    selectedList: [],
    isOpened: true,
    isCompleteOpened: false
  };
  componentWillMount() {
    const { tagData } = this.state;
    const tabList = tagData.map(item => {
      return { title: item.name };
    });
    this.setState({ tabList });
  }
  handleTabClick = value => {
    this.setState({ current: value });
  };
  handleTagClick = (value, active, current) => {
    this.setState({ selectedList: current, isCompleteOpened: true });
  };
  handleCancel = () => {
    Taro.navigateTo({ url: "/pages/spread/shopModulars/management/index" });
  };
  handleConfirm = () => {
    this.setState({ isOpened: false });
  };
  handleCompleteConfirm = () => {
    const { selectedList } = this.state;
    Taro.navigateTo({
      url: `/pages/spread/shopModulars/management/index?type=${selectedList.name}`
    });
  };
  render() {
    const {
      current,
      tabList,
      tagData,
      isOpened,
      isCompleteOpened,
      selectedList
    } = this.state;
    return (
      <Root
        background={{
          background: `linear-gradient(#fff, #f5f5f5)`
        }}
      >
        <View className="common-wrapper manageStatus-wrapper">
          <View className="header">
            <View className="content">
              <View className="title">您的店铺经营业态是什么？</View>
              <View className="desc">根据您的选择，智能提供个性化服务</View>
            </View>
          </View>
          <View className="manageStatus-container">
            <AtTabs
              className="tab-container"
              current={current}
              scroll
              tabList={tabList}
              onClick={this.handleTabClick}
            >
              {tagData.map((item, index) => (
                <AtTabsPane current={current} index={index}>
                  <View className="at-row at-row--wrap manage-kind-box">
                    {item.children.map((child, childIndex) => (
                      <View className="at-col at-col-4 tag-item">
                        <AtTag
                          key={`tag-${childIndex}-${child.name}`}
                          name={child.name}
                          className="tag"
                          active={
                            selectedList.parentId == child.parentId &&
                            selectedList.name == child.name
                          }
                          onClick={(value, active) => {
                            this.handleTagClick(value, active, child);
                          }}
                        >
                          {child.name}
                        </AtTag>
                      </View>
                    ))}
                  </View>
                </AtTabsPane>
              ))}
            </AtTabs>
          </View>
        </View>
        <Modal
          isOpened={isOpened}
          iconTyle="gantanhao"
          iconColor="#FF3F81"
          iconSize={110}
          isGroup={true}
          groupContent={["不修改", "确认"]}
          title="继续操作"
          contentText="修改业态后，当前设置的营业模式设置会被清空覆盖，请谨慎确认是否修改"
          onConfirm={this.handleConfirm}
          onCancel={this.handleCancel}
        />
        <Modal
          isOpened={isCompleteOpened}
          title="操作完成"
          okText="我知道了"
          contentText="业态修改成功，请重新开店设置"
          onConfirm={this.handleCompleteConfirm}
        />
      </Root>
    );
  }
}
