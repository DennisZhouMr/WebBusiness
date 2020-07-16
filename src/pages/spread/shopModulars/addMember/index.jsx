import Taro, { Component } from "@tarojs/taro";
import { View, Image, Text, Picker } from "@tarojs/components";
import { AtButton, AtInput, AtFloatLayout } from "taro-ui";
import IconFont from "@/components/iconfont";
import Root from "@/components/Root";
import Caption from "@/components/Caption";
import VipCard from "@/components/VipCard";
import FloatLayoutPicker from "../components/FloatLayoutPicker";

import "./index.scss";

export default class extends Component {
  config = {
    navigationBarTitleText: "添加会员"
  };
  state = {
    isOpened: false,
    qrcodeVisible: true,
    vipcardVisible: false,
    levelVisible: false,
    memberName: "",
    mobile: "",
    sex: "",
    sexSelector: ["男", "女"],
    birthday: "",
    job: "",
    address: "",
    selectLevel: "",
    levelSelector: [
      { id: 1, name: "默认等级名称" },
      { id: 2, name: "V2权益卡名称" },
      { id: 3, name: "是否商家在会员裂变还设置了其他等级" }
    ]
  };
  //选择性别
  handleSexChange = ({ detail: { value } }) => {
    this.setState({ sex: this.state.sexSelector[value] });
  };
  //选择生日
  handleDateChange = ({ detail: { value } }) => {
    this.setState({ birthday: value });
  };
  //查看更多
  handleMore = () => {
    this.setState({
      levelVisible: true,
      vipcardVisible: false,
      qrcodeVisible: false
    });
  };
  //选择会员等级
  handleLevelChange = () => {
    this.setState({
      isOpened: true
    });
  };
  handleOk = item => {
    console.log(item);
    this.setState({
      isOpened: false,
      vipcardVisible: true,
      qrcodeVisible: false,
      levelVisible: false,
      selectLevel: item.name
    });
  };
  //确认新建
  handleConfirm = () => {
    const { vipcardVisible } = this.state;
    vipcardVisible
      ? Taro.navigateTo({ url: "/pages/spread/shopModulars/index" })
      : Taro.navigateTo({
          url: "/pages/spread/shopModulars/index"
        });
  };
  render() {
    const {
      memberName,
      mobile,
      vipcardVisible,
      qrcodeVisible,
      levelVisible,
      sex,
      sexSelector,
      birthday,
      job,
      address,
      isOpened,
      levelSelector
    } = this.state;
    return (
      <Root
        background={{
          background: `linear-gradient(#fff, #f5f5f5)`
        }}
      >
        <View className="common-wrapper member-wrapper">
          <Caption text="添加会员" iconType="zu1725" />
          <View className="member-main">
            <View className="top">
              <View className="left">
                <View className="icon">
                  <IconFont name="gantanhao" size={28} />
                </View>
                目前暂未开放会员储值功能
              </View>
              <View
                className="right"
                onClick={() => {
                  Taro.navigateTo({ url: "/pages/spread/shopModulars/index" });
                }}
              >
                返回
              </View>
            </View>
            <View className="member-content">
              {vipcardVisible && (
                <VipCard
                  level="默认等级"
                  extra={false}
                  url=""
                  face={require("@/assets/images/user.png")}
                />
              )}
              {qrcodeVisible && (
                <View className="qrcode">
                  <Image src={require("@/assets/images/qrcode_01.png")} />
                  <Text>出示二维码获取会员ID</Text>
                </View>
              )}
              {levelVisible && (
                <View className="selectLevel" onClick={this.handleLevelChange}>
                  <View>
                    <IconFont name="plus" size={28} color="#FF3F81" />
                    <Text>请选择会员等级</Text>
                  </View>
                </View>
              )}
            </View>
            <View className="empty">
              {vipcardVisible && <Text>重新选择</Text>}
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
                        value={mobile}
                        onChange={value => {
                          this.setState({ mobile: value });
                        }}
                      />
                    </View>
                  </View>
                </View>
              </View>
              {levelVisible && (
                <View>
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
                            value={address}
                            onChange={value => {
                              this.setState({ address: value });
                            }}
                          />
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              )}
              {!levelVisible && (
                <View className="more" onClick={this.handleMore}>
                  更多信息
                </View>
              )}
            </View>
          </View>
          <View className="button-position">
            <AtButton
              type="secondary"
              className="default-button space"
              onClick={this.handleConfirm}
            >
              确认新建
            </AtButton>
            <AtButton
              type="secondary"
              className="default-button primary-button"
              onClick={() => {
                Taro.navigateTo({ url: "/pages/spread/shopModulars/index" });
              }}
            >
              确认并继续新建
            </AtButton>
          </View>
          <FloatLayoutPicker
            isOpened={isOpened}
            range={levelSelector}
            onOkClick={this.handleOk}
          />
        </View>
      </Root>
    );
  }
}
