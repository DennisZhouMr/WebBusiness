import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtButton, AtInput } from "taro-ui";
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
    sex: "",
    sexSelector: ["男", "女"],
    birthday: "",
    job: "",
    address: "",
    createCard: "",
    lastPay: ""
  };
  //选择性别
  handleSexChange = ({ detail: { value } }) => {
    this.setState({ sex: this.state.sexSelector[value] });
  };
  //选择生日
  handleDateChange = ({ detail: { value } }) => {
    this.setState({ birthday: value });
  };
  //选择开卡时间
  handleCreateCard = ({ detail: { value } }) => {
    this.setState({ createCard: value });
  };
  //保存
  handleSubmit = () => {
    const {
      memberName,
      mobile,
      sex,
      birthday,
      job,
      address,
      createCard,
      lastPay
    } = this.state;
    if (!isMobile(mobile)) {
      Taro.showToast({
        title: "手机号输入有误",
        icon: "none",
        duration: 2000
      });
      return false;
    }
    Taro.navigateTo({ url: "/pages/spread/shopModulars/member/show" });
  };
  render() {
    const {
      memberName,
      mobile,
      sex,
      sexSelector,
      birthday,
      job,
      address,
      createCard,
      lastPay
    } = this.state;
    return (
      <Root
        background={{
          background: `linear-gradient(#fff, #f5f5f5)`
        }}
      >
        <View className="common-wrapper edit-wrapper">
          <NavBar title="编辑会员" iconType="zujian471" iconSize={60} />
          <View className="edit-main">
            <VipCard
              level="默认等级"
              extra={false}
              url=""
              face={require("@/assets/images/user.png")}
            />
            <View className="empty">
              <Text>重新选择</Text>
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
                    <View className="list-item-content_title">手机号*</View>
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
                <Picker
                  mode="selector"
                  range={sexSelector}
                  onChange={this.handleSexChange}
                >
                  <View className="list-item-container">
                    <View className="list-item-content">
                      <View className="list-item-content_title">性别</View>
                    </View>
                    <View className="list-item-extra">
                      <View className="list-item-extra_info">
                        <AtInput
                          className="input-content"
                          type="text"
                          placeholder="请选择"
                          placeholderClass="placeholder"
                          value={sex}
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
              <View className="list-item list-item-time">
                <Picker mode="date" onChange={this.handleDateChange}>
                  <View className="list-item-container">
                    <View className="list-item-content">
                      <View className="list-item-content_title">生日</View>
                    </View>
                    <View className="list-item-extra">
                      <View className="list-item-extra_info">
                        <AtInput
                          className="input-content"
                          type="text"
                          placeholder="请选择"
                          placeholderClass="placeholder"
                          value={birthday}
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
                    <View className="list-item-content_title">职业</View>
                  </View>
                  <View className="list-item-extra">
                    <View className="list-item-extra_info">
                      <AtInput
                        className="input-content"
                        type="number"
                        placeholder="请输入"
                        placeholderClass="placeholder"
                        value={job}
                        onChange={value => {
                          this.setState({ job: value });
                        }}
                      />
                    </View>
                  </View>
                </View>
              </View>
              <View className="list-item">
                <View className="list-item-container">
                  <View className="list-item-content">
                    <View className="list-item-content_title">地址</View>
                  </View>
                  <View className="list-item-extra">
                    <View className="list-item-extra_info">
                      <AtInput
                        className="input-content"
                        type="number"
                        placeholder="请输入"
                        placeholderClass="placeholder"
                        value={address}
                        onChange={value => {
                          this.setState({ address: value });
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
              <View className="list-item list-item-time">
                <View className="list-item-container">
                  <View className="list-item-content">
                    <View className="list-item-content_title">
                      最后一次消费
                    </View>
                  </View>
                  <View className="list-item-extra">
                    <View className="list-item-extra_info">
                      <AtInput
                        className="input-content"
                        type="text"
                        placeholder="请输入"
                        placeholderClass="placeholder"
                        value={lastPay}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View className="button-position">
            <AtButton
              type="secondary"
              className="default-button primary-button"
              onClick={this.handleSubmit}
            >
              保存
            </AtButton>
          </View>
        </View>
      </Root>
    );
  }
}
