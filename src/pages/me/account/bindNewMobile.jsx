import Taro, { Component } from "@tarojs/taro";
import { View, Image, Text } from "@tarojs/components";
import { AtIcon, AtButton, AtInput, AtForm } from "taro-ui";
import { isMobile } from "@/utils/format.js";
import "./index.scss";

import Modal from "@/components/Modal";
import Root from "@/components/Root";
import Caption from "@/components/Caption";

export default class extends Component {
  constructor(props) {
    super(props);
  }
  config = {
    navigationBarTitleText: "换绑定手机号"
  };
  state = {
    mobile: "",
    code: "",
    isShowButton: false,
    show_btn: true,
    count: 60,
    code_ts: "获取验证码",
    isOpened: false
  };

  handlePhoneChange = value => {
    this.setState({ mobile: value });
  };
  handleCodeChange = value => {
    this.setState({ code: value });
  };
  handleGetCode = () => {
    const { mobile, count } = this.state;
    if (!isMobile(mobile)) {
      Taro.showToast({
        title: "手机号输入有误",
        icon: "none",
        duration: 2000
      });
      return false;
    }
    this.countDown();
  };
  //倒计时
  countDown() {
    const { count } = this.state;
    if (count === 1) {
      this.setState({
        show_btn: true,
        count: 60,
        code_ts: "获取验证码"
      });
    } else {
      this.setState({
        count: count - 1,
        show_btn: false,
        code_ts: count + "S重发"
      });
      setTimeout(() => this.countDown(), 1000); //每一秒调用一次
    }
  }
  handleSubmit = () => {
    this.setState({ isOpened: true });
  };
  handleConfirm = () => {
    this.setState({ isOpened: false });
    Taro.redirectTo({ url: "/pages/me/account/index" });
  };
  render() {
    const {
      mobile,
      code,
      isShowButton,
      isOpened,
      show_btn,
      code_ts
    } = this.state;
    return (
      <Root
        background={{
          background: `linear-gradient(#fff, #f5f5f5)`
        }}
      >
        <View className="common-wrapper account-wrapper">
          <Caption text="换绑定手机号" />
          <View className="account-main">
            <View className="mobile-group bindMobile-group">
              <View className="group-item left">
                <Text>验证原手机号</Text>
                <View className="at-timeline">
                  <View className="timeline-tail"></View>
                  <View className="timeline-head">1</View>
                </View>
              </View>
              <View className="group-item right">
                <View className="at-timeline">
                  <View className="timeline-tail"></View>
                  <View className="timeline-head">2</View>
                </View>
                <Text>绑定新手机号</Text>
              </View>
            </View>
            <AtForm className="common-form verifyMobile-form">
              <View className="form-item">
                <AtIcon
                  prefixClass="icon"
                  value="telephone"
                  size="14"
                  color="#848484"
                ></AtIcon>
                <View className="form-item-content">
                  <Text className="caption">+86</Text>
                  <View>
                    <AtInput
                      className="code-input"
                      name="mobile"
                      title=""
                      type="phone"
                      placeholder="请输入手机号"
                      value={mobile}
                      onChange={this.handleMobileChange}
                    >
                      <AtButton
                        type="primary"
                        size="small"
                        disabled={!show_btn}
                        className={`code-button ${
                          show_btn ? "code-primary" : "code-secondary"
                        }`}
                        onClick={this.handleGetCode}
                      >
                        {code_ts}
                      </AtButton>
                    </AtInput>
                  </View>
                </View>
              </View>
              <View className="form-item">
                <AtIcon
                  prefixClass="icon"
                  value="security"
                  size="14"
                  color="#848484"
                ></AtIcon>
                <View className="form-item-content">
                  <AtInput
                    clear
                    name="code"
                    type="number"
                    placeholder="短信验证码"
                    value={code}
                    onChange={this.handleCodeChange}
                  ></AtInput>
                </View>
              </View>
            </AtForm>
          </View>
          <View className="button-position">
            {isShowButton ? (
              <AtButton
                className="default-button primary-button"
                onClick={this.handleSubmit}
              >
                完成
              </AtButton>
            ) : (
              <AtButton
                type="secondary"
                className="default-button"
                onClick={() => {
                  Taro.navigateTo({ url: "/pages/me/account/index" });
                }}
              >
                返回
              </AtButton>
            )}
          </View>
          <Modal
            isOpened={isOpened}
            title="操作完成"
            contentText="请将修改后的密码告知所有使用者"
            okText="我知道了"
            onConfirm={this.handleConfirm}
          />
        </View>
      </Root>
    );
  }
}
