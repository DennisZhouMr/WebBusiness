import Taro, { Component } from "@tarojs/taro";
import { View, Image, Text, Input } from "@tarojs/components";
import { AtIcon, AtButton, AtTabs, AtTabsPane, AtTag } from "taro-ui";
import { manageData } from "./mock";
import Root from "@/components/Root";
import "./manageStatus.scss";

export default class extends Component {
  config = {
    navigationBarTitleText: "注册"
  };
  state = {
    current: 0,
    tabList: [],
    tagData: manageData,
    selectedList: []
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
    const { tagData } = this.state;
    let selectedList = [];
    let data = tagData.map(item => {
      item.children.map(child => {
        if (current.parentId == item.id && child.name == value.name) {
          child.active = !value.active;
        }
        if (child.active) selectedList.push(child);
        return child;
      });
      return item;
    });
    this.setState({ tagData: data, selectedList });
  };
  handleSubmitClick = () => {
    const { selectedList } = this.state;
    console.log(selectedList);
  };
  render() {
    const { current, tabList, tagData, selectedList } = this.state;
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
                          active={child.active}
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
          <View className="button-position">
            <AtButton
              circle
              className={`gray-button ${
                selectedList.length > 0 ? "primary-button" : ""
              }`}
              disabled={selectedList.length > 0 ? false : true}
              onClick={this.handleSubmitClick}
            >
              最后一步，填写客单价
            </AtButton>
          </View>
        </View>
      </Root>
    );
  }
}
