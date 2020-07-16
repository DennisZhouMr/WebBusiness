import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtButton, AtAvatar, AtFloatLayout, AtInput } from "taro-ui";
import IconFont from "@/components/iconfont";
import Root from "@/components/Root";
import Caption from "@/components/Caption";
import FloatLayoutPicker from "../components/FloatLayoutPicker";

import "./index.scss";

export default class extends Component {
  config = {
    navigationBarTitleText: "会员管理"
  };
  state = {
    isOpened: false,
    memberList: [
      { id: 1, name: "全部会员" },
      { id: 2, name: "激活已消费" },
      { id: 3, name: "激活未使用" },
      { id: 4, name: "未激活" }
    ],
    memberType: ""
  };
  handleOk = value => {
    this.setState({
      isOpened: false,
      memberType: value
    });
  };
  render() {
    const { isOpened, memberList, memberType } = this.state;
    return (
      <Root
        background={{
          background: `linear-gradient(#fff, #f5f5f5)`
        }}
      >
        <View className="common-wrapper member-wrapper">
          <Caption text="会员管理" iconType="zu4458" />
          <View className="member-main">
            <View className="top">
              <View className="left">
                <View className="icon">
                  <IconFont name="gantanhao" size={28} />
                </View>
                累计会员 0 人
              </View>
              <View
                className="right"
                onClick={() => {
                  Taro.navigateTo({ url: "/pages/spread/shopModulars/index" });
                }}
              >
                <IconFont name="plus" size={30} color="#fff" />
              </View>
            </View>
            <View className="at-row member-content">
              <View className="at-col at-col-12">
                <Text>今日新增</Text>
                <Text className="number">0</Text>
              </View>
            </View>
            <View className="member-container">
              <View className="at-row operation">
                <View
                  className="at-col at-col-4 all"
                  onClick={() => {
                    this.setState({ isOpened: true });
                  }}
                >
                  {memberType ? (
                    <Text>{memberType.name}</Text>
                  ) : (
                    <Text>全部会员</Text>
                  )}
                  <IconFont name="bottom" size={25} />
                </View>
                <View className="at-col at-col-4 total">
                  <Text>消费金额</Text>
                  <IconFont name="down" size={25} />
                </View>
                <View className="at-col at-col-4 icon">
                  <View>
                    <IconFont name="search" size={40} />
                  </View>
                  <View>
                    <IconFont name="scan" size={40} />
                  </View>
                </View>
              </View>
              <View className="member-list">
                <View className="member-list-item">
                  <View className="content">
                    <Text>会员名称</Text>
                    <Text>手机号</Text>
                  </View>
                  <View className="extra">
                    <Text>消费 0元 0积分</Text>
                    <Text>V1</Text>
                  </View>
                </View>
                <View className="member-list-item">
                  <View className="content">
                    <Text>会员名称</Text>
                    <Text>手机号</Text>
                  </View>
                  <View className="extra">
                    <View>
                      {memberType && memberType.id == 3 && (
                        <Text>消费 0元</Text>
                      )}{" "}
                      0积分
                    </View>
                    <Text>V1</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View className="button-position">
            <AtButton
              type="secondary"
              className="default-button"
              onClick={() => {
                Taro.navigateTo({ url: "/pages/spread/shopModulars/index" });
              }}
            >
              返回
            </AtButton>
          </View>
          <FloatLayoutPicker
            isOpened={isOpened}
            range={memberList}
            onOkClick={this.handleOk}
          />
        </View>
      </Root>
    );
  }
}
