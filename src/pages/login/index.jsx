import Taro, { Component } from "@tarojs/taro";
import { View, Image, Text } from "@tarojs/components";
import { AtAvatar, AtIcon, AtButton, AtInput, AtForm } from "taro-ui";
import "./index.scss";

export default class extends Component {
  config = {
    navigationBarTitleText: "登录"
  };
  state = {
    isVisiblePwd: false,
    storeNumber: "",
    account: "",
    password: ""
  };
  handleLoginClick = () => {
    const { password, account, storeNumber } = this.state;
    if (!storeNumber) {
      Taro.showToast({ title: "输入你的商户编号", icon: "none" });
      return false;
    }
    if (!account) {
      Taro.showToast({ title: "请输入手机号", icon: "none" });
      return false;
    }
    if (!password) {
      Taro.showToast({ title: "请输入密码", icon: "none" });
      return false;
    }
  };
  render() {
    const { isVisiblePwd, storeNumber, account, password } = this.state;
    return (
      <View className="login-wrapper">
        <View className="header">
          <View className="top">关闭</View>
          <View className="content">
            <View className="title">密码登录</View>
            <View className="desc">HI！用户名，欢迎就来</View>
          </View>
        </View>
        <View className="avatar">
          <View>
            <AtAvatar image={require("@/assets/images/user.png")} />
          </View>
        </View>
        <View className="login-container">
          <AtForm className="login-form">
            <AtInput
              name="storeNumber"
              title="商户编号"
              type="text"
              placeholder="输入你的商户编号"
              value={storeNumber}
              onChange={value => {
                this.setState({ storeNumber: value });
              }}
            ></AtInput>
            <AtInput
              name="account"
              title="账号"
              type="text"
              placeholder="请输入手机号"
              value={account}
              onChange={value => {
                this.setState({ account: value });
              }}
            ></AtInput>
            <AtInput
              name="password"
              title="密码"
              type={isVisiblePwd ? "text" : "password"}
              placeholder="请输入密码"
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
                  this.setState({ isVisiblePwd: !this.state.isVisiblePwd });
                }}
              />
            </AtInput>
          </AtForm>
          <View className="at-row forget-box">
            <View className="at-col at-col-6 left">忘记商户编码</View>
            <View className="at-col at-col-6 right">忘记账号密码</View>
          </View>
        </View>
        <View className="button-position">
          <View
            className="now-register"
            onClick={() => {
              Taro.redirectTo({ url: "/pages/login/register" });
            }}
          >
            <Text>还没有账号？马上注册</Text>
          </View>
          <AtButton
            className="gray-button"
            circle
            onClick={this.handleLoginClick}
          >
            立即登录
          </AtButton>
        </View>
      </View>
    );
  }
}
