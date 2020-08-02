import Taro, { Component } from "@tarojs/taro";
import { View, Image, Text } from "@tarojs/components";
import { AtIcon, AtButton, AtInput, AtForm } from "taro-ui";
import { validatePwd } from "@/utils/format.js";
import "./index.scss";
import Root from "@/components/Root";
import Modal from "@/components/Modal";
import Caption from "@/components/Caption";

export default class extends Component {
  constructor(props) {
    super(props);
  }
  config = {
    navigationBarTitleText: "修改密码"
  };
  state = {
    password: "",
    isVisiblePwd: true,
    newPassword: "",
    isVisibleNewPwd: false,
    isShowButton: false,
    isOpened: false
  };

  handlePwdChange = value => {
    this.setState({ password: value, isShowButton: true });
  };
  handleNewPwdChange = value => {
    this.setState({ newPassword: value });
  };
  handleSubmit = () => {
    const { password, newPassword, isOpened } = this.state;
    if (!validatePwd(password)) {
      Taro.showToast({ title: "密码输入有误", icon: "none" });
      return false;
    }
    if (!validatePwd(newPassword)) {
      Taro.showToast({ title: "新密码格式有误", icon: "none" });
      return false;
    }
    Taro.navigateTo({ url: "/pages/me/account/index" });
  };
  handleConfirm = () => {
    Taro.navigateTo({ url: "/pages/me/account/index" });
  };
  render() {
    const {
      password,
      newPassword,
      isShowButton,
      isVisiblePwd,
      isVisibleNewPwd,
      isOpened
    } = this.state;
    return (
      <Root
        background={{
          background: `linear-gradient(#fff, #f5f5f5)`
        }}
      >
        <View className="common-wrapper account-wrapper">
          <Caption text="修改密码" />
          <View className="account-main">
            <AtForm className="common-form updatePwd-form">
              <AtInput
                name="password"
                title="原密码"
                type={isVisiblePwd ? "text" : "password"}
                placeholder="请输入原密码"
                value={password}
                onChange={this.handlePwdChange}
              >
                <AtIcon
                  prefixClass="icon"
                  value={isVisiblePwd ? "eyesight" : "eye"}
                  size="22"
                  color="#848484"
                  onClick={() => {
                    this.setState({ isVisiblePwd: !this.state.isVisiblePwd });
                  }}
                ></AtIcon>
              </AtInput>
              <AtInput
                name="newPassword"
                title="新密码"
                type={isVisibleNewPwd ? "text" : "password"}
                placeholder="6-16位，必须包含数字和字母"
                value={newPassword}
                onChange={this.handleNewPwdChange}
              >
                <AtIcon
                  prefixClass="icon"
                  value={isVisibleNewPwd ? "eyesight" : "eye"}
                  size="22"
                  color="#848484"
                  onClick={() => {
                    this.setState({
                      isVisibleNewPwd: !this.state.isVisibleNewPwd
                    });
                  }}
                ></AtIcon>
              </AtInput>
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
                  // Taro.navigateTo({ url: "/pages/me/account/index" });
                  Taro.navigateBack();
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
