import Taro, { Component } from "@tarojs/taro";
import { View, Text, Picker } from "@tarojs/components";
import { AtButton, AtInput, AtTag } from "taro-ui";
import IconFont from "@/components/iconfont";
import Root from "@/components/Root";
import NavBar from "@/components/NavBar";
import { validatePwd, isMobile, isID } from "@/utils/format.js";

import "./add.scss";

export default class extends Component {
  config = {
    navigationBarTitleText: "新增员工"
  };
  state = {
    sexList: [
      { id: 0, name: "男" },
      { id: 1, name: "女" }
    ],
    name: "",
    mobile: "",
    password: "",
    confirmPwd: "",
    position: "",
    positionSelector: ["店长", "收银员"],
    sex: 0,
    idNumber: ""
  };
  handleConfirmPwd = value => {
    this.setState({ confirmPwd: value });
  };
  handlePositionChange = ({ detail: { value } }) => {
    this.setState({ position: this.state.positionSelector[value] });
  };
  handleTagClick = item => {
    this.setState({ sex: item.id });
  };
  handleSubmit = () => {
    if (this.validate()) {
      Taro.navigateTo({ url: "/pages/spread/shopModulars/index" });
    }
  };
  validate = () => {
    const {
      name,
      mobile,
      password,
      confirmPwd,
      position,
      idNumber
    } = this.state;
    if (name == "") {
      Taro.showToast({ title: "请输入员工姓名", icon: "none" });
      return false;
    }
    if (!isMobile(mobile)) {
      Taro.showToast({ title: "手机号输入有误", icon: "none" });
      return false;
    }
    if (!validatePwd(password)) {
      Taro.showToast({ title: "密码格式输入有误", icon: "none" });
      return false;
    }
    if (password !== confirmPwd) {
      Taro.showToast({ title: "两次密码输入不一致", icon: "none" });
      return false;
    }
    if (position == "") {
      Taro.showToast({ title: "请选择职位", icon: "none" });
      return false;
    }
    if (!isID(idNumber)) {
      Taro.showToast({ title: "身份证号输入有误", icon: "none" });
      return false;
    }
    return true;
  };
  render() {
    const {
      sexList,
      name,
      mobile,
      password,
      confirmPwd,
      position,
      positionSelector,
      sex,
      idNumber
    } = this.state;
    return (
      <Root
        background={{
          background: `linear-gradient(#fff, #f5f5f5)`
        }}
      >
        <View className="common-wrapper employee-add-wrapper">
          <NavBar title="新增员工" iconType="zujian471" iconSize={60} />
          <View className="employee-add-main">
            <View className="default-list-container employee-add-info">
              <View className="title">
                <Text className="left">账号信息</Text>
              </View>
              <View className="list-item">
                <View className="list-item-container">
                  <View className="list-item-content">
                    <View className="list-item-content_title">员工姓名*</View>
                  </View>
                  <View className="list-item-extra">
                    <View className="list-item-extra_info">
                      <AtInput
                        className="input-content"
                        type="text"
                        placeholder="请输入"
                        placeholderClass="placeholder"
                        value={name}
                        onChange={value => {
                          this.setState({ name: value });
                        }}
                      />
                    </View>
                  </View>
                </View>
              </View>
              <View className="list-item">
                <View className="list-item-container">
                  <View className="list-item-content">
                    <View className="list-item-content_title">登录手机号*</View>
                  </View>
                  <View className="list-item-extra">
                    <View className="list-item-extra_info">
                      <AtInput
                        className="input-content"
                        type="number"
                        placeholder="请输入手机号"
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
              <View className="list-item">
                <View className="list-item-container">
                  <View className="list-item-content">
                    <View className="list-item-content_title">密码*</View>
                  </View>
                  <View className="list-item-extra">
                    <View className="list-item-extra_info">
                      <AtInput
                        className="input-content"
                        type="password"
                        placeholder="6-16位字母和数字组成"
                        placeholderClass="placeholder"
                        value={password}
                        onChange={value => {
                          this.setState({ password: value });
                        }}
                      />
                    </View>
                  </View>
                </View>
              </View>
              <View className="list-item">
                <View className="list-item-container">
                  <View className="list-item-content">
                    <View className="list-item-content_title">确认密码*</View>
                  </View>
                  <View className="list-item-extra">
                    <View className="list-item-extra_info">
                      <AtInput
                        className="input-content"
                        type="password"
                        placeholder="请再次输入密码"
                        placeholderClass="placeholder"
                        value={confirmPwd}
                        onChange={this.handleConfirmPwd}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View className="default-list-container employee-add-info">
              <View className="title">基本信息</View>
              <View className="list-item list-item-time">
                <Picker
                  mode="selector"
                  range={positionSelector}
                  onChange={this.handlePositionChange}
                >
                  <View className="list-item-container">
                    <View className="list-item-content">
                      <View className="list-item-content_title">职位*</View>
                    </View>
                    <View className="list-item-extra">
                      <View className="list-item-extra_info">
                        <AtInput
                          className="input-content"
                          type="text"
                          placeholder="请选择"
                          placeholderClass="placeholder"
                          value={position}
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
                    <View className="list-item-content_title">性别*</View>
                  </View>
                  <View className="list-item-extra">
                    <View className="list-item-extra_info">
                      <View className="flex">
                        {sexList.map(item => (
                          <AtTag
                            key={`tag-${item.id}`}
                            name={item.name}
                            className="tag"
                            active={item.id === sex}
                            onClick={() => {
                              this.handleTagClick(item);
                            }}
                          >
                            {item.name}
                          </AtTag>
                        ))}
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View className="list-item">
                <View className="list-item-container">
                  <View className="list-item-content">
                    <View className="list-item-content_title">身份证号</View>
                  </View>
                  <View className="list-item-extra">
                    <View className="list-item-extra_info">
                      <AtInput
                        className="input-content"
                        type="text"
                        placeholder="请输入"
                        placeholderClass="placeholder"
                        value={idNumber}
                        onChange={value => {
                          this.setState({ idNumber: value });
                        }}
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
              className="default-button"
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
