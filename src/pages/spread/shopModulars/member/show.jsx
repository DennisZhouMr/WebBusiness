import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtButton,AtInput } from "taro-ui";
import IconFont from "@/components/iconfont";
import Root from "@/components/Root";
import NavBar from "@/components/NavBar";
import VipCard from "@/components/VipCard";
import { isMobile } from "@/utils/format.js";

import "./edit.scss";

export default class extends Component {
  config = {
    navigationBarTitleText: "店主人"
  };
  state = {
    memberName: "",
    mobile: "",
    sexSelector: ["男", "女"],
    createCard: "2018-04-22",
  };
  //选择开卡时间
  handleCreateCard = ({ detail: { value } }) => {
    this.setState({ createCard: value });
  };
  //保存
  handleSubmit = () => {
    const { memberName, mobile, createCard } = this.state;
    if (!isMobile(mobile)) {
      Taro.showToast({
        title: "手机号输入有误",
        icon: "none",
        duration: 2000
      });
      return false;
    }
    Taro.navigateTo({ url: "/pages/spread/shopModulars/member/index" });
  };
  //跳转编辑
  handleJump=()=>{
    Taro.navigateTo({ url: "/pages/spread/shopModulars/member/edit" });
  }
  render() {
    const { memberName, mobile, createCard } = this.state;
    return (
      <Root
        background={{
          background: `linear-gradient(#fff, #f5f5f5)`
        }}
      >
        <View className="common-wrapper edit-wrapper">
          <NavBar title="查看会员" iconType="zujian471" iconSize={60} />
          <View className="edit-main">
            <View className="edit-operate" onClick={this.handleJump}>编辑</View>
            <VipCard
              level="默认等级"
              extra={false}
              url=""
              face={require("@/assets/images/user.png")}
            />
            <View className="empty"></View>
            <View className="default-list-container member-info">
              <View className="title">消费信息</View>
              <View className="list-item list-item-time">
                <Picker
                  mode="selector"
                  range={sexSelector}
                  onChange={this.handleSexChange}
                >
                  <View className="list-item-container">
                    <View className="list-item-content">
                      <View className="list-item-content_title">
                        累积消费金额
                      </View>
                    </View>
                    <View className="list-item-extra">
                      <View className="list-item-extra_info">
                        <AtInput
                          className="input-content"
                          type="text"
                          placeholder="请选择"
                          value="0 元"
                          editable={false}
                        />
                      </View>
                      <View className="list-item-extra_icon">
                        <IconFont name="right" size={25} />
                      </View>
                    </View>
                  </View>
                </Picker>
              </View>
              <View className="list-item">
                <View className="list-item-container">
                  <View className="list-item-content">
                    <View className="list-item-content_title">
                      距更高一级还需
                    </View>
                  </View>
                  <View className="list-item-extra">
                    <View className="list-item-extra_info">
                      邀约0人或消费0元
                    </View>
                  </View>
                </View>
              </View>
              <View className="list-item">
                <View className="list-item-container">
                  <View className="list-item-content">
                    <View className="list-item-content_title">积分</View>
                  </View>
                  <View className="list-item-extra">
                    <View className="list-item-extra_info">0 分</View>
                  </View>
                </View>
              </View>
            </View>
            <View className="default-list-container member-info">
              <View className="title">会员信息</View>
              <View className="list-item">
                <View className="list-item-container">
                  <View className="list-item-content">
                    <View className="list-item-content_title">会员名称</View>
                  </View>
                  <View className="list-item-extra">
                    <View className="list-item-extra_info">
                      <AtInput
                        className="input-content"
                        type="text"
                        placeholder="个人微信昵称"
                        placeholderClass="placeholder"
                        value={memberName}
                        onChange={value => {
                          this.setState({ memberName: value });
                        }}
                      />
                    </View>
                  </View>
                </View>
              </View>
              <View className="list-item">
                <View className="list-item-container">
                  <View className="list-item-content">
                    <View className="list-item-content_title">手机号</View>
                  </View>
                  <View className="list-item-extra">
                    <View className="list-item-extra_info">
                      <AtInput
                        className="input-content"
                        type="number"
                        placeholder="请输入"
                        placeholderClass="placeholder"
                        value={mobile}
                        onChange={value => {
                          this.setState({ mobile: value });
                        }}
                      />
                    </View>
                  </View>
                </View>
              </View>
              <View className="list-item list-item-time">
                <Picker mode="date" onChange={this.handleCreateCard}>
                  <View className="list-item-container">
                    <View className="list-item-content">
                      <View className="list-item-content_title">开卡时间</View>
                    </View>
                    <View className="list-item-extra">
                      <View className="list-item-extra_info">
                        <AtInput
                          className="input-content"
                          type="text"
                          placeholder="请选择"
                          placeholderClass="placeholder"
                          value={createCard}
                          editable={false}
                        />
                      </View>
                      <View className="list-item-extra_icon">
                        <IconFont name="right" size={25} />
                      </View>
                    </View>
                  </View>
                </Picker>
              </View>
            </View>
          </View>
          <View className="button-position">
            <AtButton
              type="secondary"
              className="default-button primary-button"
              onClick={this.handleSubmit}
            >
              冻结
            </AtButton>
          </View>
        </View>
      </Root>
    );
  }
}
