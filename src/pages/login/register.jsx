import Taro, { Component } from "@tarojs/taro";
import { View, Image, Text } from "@tarojs/components";
import { AtIcon, AtButton, AtInput, AtForm } from "taro-ui";
import { isMobile, validatePwd } from "@/utils/format.js";
import "./index.scss";

export default class extends Component {
  config = {
    navigationBarTitleText: "注册"
  };
  state = {
    mobile: "",
    code: "",
    password: "",
    isVisiblePwd: true,
    show_btn: true,
    count: 60,
    code_ts: "获取验证码"
  };

  handleMobileChange = value => {
    this.setState({ mobile: value });
  };
  handleCodeChange = value => {
    this.setState({ code: value });
  };
  handleGetCode = () => {
    const { mobile } = this.state;
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
  handleRegisterClick = () => {
    const { mobile, code, password } = this.state;
    if (!isMobile(mobile)) {
      Taro.showToast({ title: "手机号输入有误", icon: "none" });
      return false;
    }
    if (!code) {
      Taro.showToast({ title: "请输入短信验证码", icon: "none" });
      return false;
    }
    if (!validatePwd(password)) {
      Taro.showToast({ title: "密码输入有误", icon: "none" });
      return false;
    }
    Taro.redirectTo({ url: "/pages/me/account/bindNewMobile" });
  };
  render() {
    const {
      mobile,
      code,
      password,
      show_btn,
      code_ts,
      isVisiblePwd
    } = this.state;
    return (
      <View className="login-wrapper register-wrapper">
        <View className="header">
          <View className="top">关闭</View>
          <View className="content">
            <View className="title">商户注册</View>
            <View className="desc">HI！老板，欢迎来到兑集</View>
          </View>
        </View>
        <View className="login-container">
          <AtForm className="login-form register-form">
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
                <View>
                  <AtInput
                    clear
                    name="code"
                    type="number"
                    placeholder="短信验证码"
                    value={code}
                    onChange={this.handleCodeChange}
                  />
                </View>
              </View>
            </View>
            <View className="form-item">
              <AtIcon
                prefixClass="icon"
                value="security"
                size="14"
                color="#848484"
              />
              <View className="form-item-content">
                <View>
                  <AtInput
                    name="password"
                    type={isVisiblePwd ? "text" : "password"}
                    placeholder="密码（6-16位包含数字和字母）"
                    value={password}
                    onChange={value => {
                      this.setState({ password: value });
                    }}
                  >
                    <AtIcon
                      prefixClass="icon"
                      value={isVisiblePwd ? "eyesight" : "eye"}
                      size="18"
                      color="#848484"
                      onClick={() => {
                        this.setState({
                          isVisiblePwd: !this.state.isVisiblePwd
                        });
                      }}
                    />
                  </AtInput>
                </View>
              </View>
            </View>
          </AtForm>
        </View>
        <View className="button-position">
          <View className="now-register user-agreement">
            <Text>我已阅读并同意</Text>
            <Text className="color-229E8E">
              《软件服务协议》《支付协议》《隐私政策》
            </Text>
          </View>
          <AtButton
            className="gray-button primary-button"
            circle
            onClick={this.handleRegisterClick}
          >
            同意协议并注册
          </AtButton>
        </View>
      </View>
    );
  }
}
