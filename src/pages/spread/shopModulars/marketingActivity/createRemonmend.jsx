import Taro, { Component } from "@tarojs/taro";
import { View, Text, Picker, Block } from "@tarojs/components";
import { AtButton, AtInput, AtTag, AtTextarea, AtImagePicker } from "taro-ui";
import IconFont from "@/components/iconfont";
import Root from "@/components/Root";
import NavBar from "@/components/NavBar";
import SmallSwitch from "@/components/SmallSwitch";

import "./activite.scss";

export default class extends Component {
  state = {
    name: "激活有礼首单消费送双倍积分",
    beginDate: "",
    endDate: "",
    ticketType: "",
    ticketRule: 0,
    giftCount: "", //礼品数量
    referrerCoupon: "", //推荐人礼券
    coupon: "", //被推荐人礼券
    imageFiles: [],
    activiteDesc: "激活即享优惠折扣，活动期间赠双倍积分，并有礼券赠送",
    activiteRule: `
    1、推荐成功条件：被推荐人通过推荐人的推荐海报或链接领券到店消费
    2、达到活动条件后自动发礼券及积分到你的账户，凭券到店使用
    3、本次活动数量有限，先到先得
    4、活动以平台展示结果为准
    5、此次活动由店铺发起，有服务问题可以在线咨询或投诉，活动解释权归本店铺所有`,
    mobileSwitch: false,
    switchIsOpen: false,
    ticketRuleList: [
      { id: 0, name: "不限数量" },
      { id: 1, name: "固定数量" }
    ]
  };
  handleTagClick = item => {
    this.setState({ ticketRule: item.id });
  };
  handleImageChange = files => {
    this.setState({
      imageFiles: files
    });
  };
  handleSubmit = () => {
    if (this.validate()) {
      Taro.navigateTo({
        url: "/pages/spread/shopModulars/marketingActivity/remonmend"
      });
    }
  };
  validate = () => {
    const { name, beginDate, endDate, giftCount, activiteDesc } = this.state;
    if (!name) {
      Taro.showToast({ title: "请输入活动名称", icon: "none" });
      return false;
    }
    if (!beginDate) {
      Taro.showToast({ title: "请选择起始日期", icon: "none" });
      return false;
    }
    if (!endDate) {
      Taro.showToast({ title: "请选择结束日期", icon: "none" });
      return false;
    } else if (new Date(beginDate).getTime() > new Date(endDate).getTime()) {
      Taro.showToast({ title: "起始日期不能大于结束日期", icon: "none" });
      return false;
    }
    if (!giftCount) {
      Taro.showToast({ title: "请输入礼品总数量", icon: "none" });
      return false;
    }
    if (!activiteDesc) {
      Taro.showToast({ title: "请输入活动描述", icon: "none" });
      return false;
    }
    return true;
  };
  render() {
    const {
      name,
      beginDate,
      endDate,
      ticketType,
      ticketRule,
      giftCount,
      referrerCoupon,
      coupon,
      imageFiles,
      activiteDesc,
      ticketRuleList,
      activiteRule,
      switchIsOpen,
      mobileSwitch
    } = this.state;
    return (
      <Root
        background={{
          background: `linear-gradient(#fff, #f5f5f5)`
        }}
      >
        <View className="common-wrapper activity-wrapper">
          <NavBar title="创建活动" iconType="zujian471" iconSize={60} />
          <View className="activity-main">
            <View className="default-list-container activity-info">
              <View className="header">
                <View className="content create-content">
                  <View className="title">
                    <Text className="left">推荐有礼设置参数</Text>
                    <View className="right">
                      <Text>开启保存后即为激活</Text>
                      <SmallSwitch
                        isOpen={switchIsOpen}
                        onChange={() =>
                          this.setState({ switchIsOpen: !switchIsOpen })
                        }
                      />
                    </View>
                  </View>
                  <View>
                    让顾客和好友推荐顾客到店消费，用最低的获客成本实现拉新促活
                  </View>
                </View>
              </View>
              <View className="caption">活动规则</View>
              <View className="list-item">
                <View className="list-item-container">
                  <View className="list-item-content">
                    <View className="list-item-content_title">活动名称*</View>
                  </View>
                  <View className="list-item-extra">
                    <View className="list-item-extra_info">
                      <AtInput
                        className="input-content"
                        type="text"
                        placeholder="不超过30个字"
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
                <Picker
                  mode="date"
                  onChange={({ detail: { value } }) => {
                    this.setState({ beginDate: value });
                  }}
                >
                  <View className="list-item-container">
                    <View className="list-item-content">
                      <View className="list-item-content_title">起始日期*</View>
                    </View>
                    <View className="list-item-extra">
                      <View className="list-item-extra_info">
                        <AtInput
                          className="input-content"
                          type="text"
                          placeholder="请选择"
                          placeholderClass="placeholder"
                          editable={false}
                          value={beginDate}
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
                <Picker
                  mode="date"
                  onChange={({ detail: { value } }) => {
                    this.setState({ endDate: value });
                  }}
                >
                  <View className="list-item-container">
                    <View className="list-item-content">
                      <View className="list-item-content_title">结束日期*</View>
                    </View>
                    <View className="list-item-extra">
                      <View className="list-item-extra_info">
                        <AtInput
                          className="input-content"
                          type="text"
                          placeholder="请选择"
                          placeholderClass="placeholder"
                          editable={false}
                          value={endDate}
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
                <Picker
                  mode="date"
                  onChange={({ detail: { value } }) => {
                    this.setState({ beginDate: value });
                  }}
                >
                  <View className="list-item-container flex-start">
                    <View className="list-item-content">
                      <View className="list-item-content_title">参与必填</View>
                      <View className="list-item-content_desc">
                        打开后，需要获取推荐人和被推荐人手机
                      </View>
                    </View>
                    <View className="list-item-extra">
                      <View className="list-item-extra_info">手机号码</View>
                      <View className="list-item-extra_icon">
                        <SmallSwitch
                          isOpen={mobileSwitch}
                          onChange={() =>
                            this.setState({ mobileSwitch: !mobileSwitch })
                          }
                        />
                      </View>
                    </View>
                  </View>
                </Picker>
              </View>
              <View className="caption">活动消费券</View>
              <View className="list-item">
                <View className="list-item-container flex-start">
                  <View className="list-item-content">
                    <View className="list-item-content_title">
                      推荐有礼活动券
                    </View>
                  </View>
                  <View className="list-item-extra">
                    <View className="list-item-extra_info">
                      <AtInput
                        className="input-content"
                        type="text"
                        editable={false}
                        placeholder="选择添加"
                        placeholderClass="placeholder"
                        value={ticketType}
                      />
                    </View>
                    <View className="list-item-extra_icon">
                      <IconFont name="right" size={25} />
                    </View>
                  </View>
                </View>
              </View>
              <View className="list-item">
                <View className="list-item-container">
                  <View className="list-item-content">
                    <View className="list-item-content_title">发券规则*</View>
                  </View>
                  <View className="list-item-extra">
                    <View className="list-item-extra_info">
                      <View className="flex">
                        {ticketRuleList.map(item => (
                          <AtTag
                            key={`tag-${item.id}`}
                            name={item.name}
                            className="tag"
                            active={item.id === ticketRule}
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
              <View className="caption">推荐人礼品</View>
              <View className="list-item">
                <View className="list-item-container">
                  <View className="list-item-content">
                    <View className="list-item-content_title">积分</View>
                  </View>
                  <View className="list-item-extra">
                    <View className="list-item-extra_info">奖励 0 积分</View>
                  </View>
                </View>
              </View>
              <View className="list-item">
                <View className="list-item-container flex-start">
                  <View className="list-item-content">
                    <View className="list-item-content_title">礼券</View>
                  </View>
                  <View className="list-item-extra">
                    <View className="list-item-extra_info">
                      <AtInput
                        className="input-content"
                        type="text"
                        editable={false}
                        placeholder="选择添加"
                        placeholderClass="placeholder"
                        value={referrerCoupon}
                      />
                    </View>
                    <View className="list-item-extra_icon">
                      <IconFont name="right" size={25} />
                    </View>
                  </View>
                </View>
              </View>
              <View className="list-item">
                <View className="list-item-container flex-start">
                  <View className="list-item-content">
                    <View className="list-item-content_title">礼品总数量*</View>
                    <View className="list-item-content_desc">
                      填写被推荐人发放的总礼品数
                    </View>
                  </View>
                  <View className="list-item-extra">
                    <View className="list-item-extra_info">
                      <AtInput
                        className="input-content"
                        type="text"
                        placeholder="请输入礼品发放数量"
                        placeholderClass="placeholder"
                        value={giftCount}
                      />
                    </View>
                  </View>
                </View>
              </View>
              <View className="caption tips">
                说明：被推荐人到店核销券后自动发放礼品给推荐人。礼品总
                数量发放完后，不再给被推荐人和被推荐人发放礼品。
              </View>
              <View className="caption">被推荐人礼品</View>
              <View className="list-item">
                <View className="list-item-container">
                  <View className="list-item-content">
                    <View className="list-item-content_title">新客专享</View>
                    <View className="list-item-content_desc">
                      打开后，被推荐人是从未下过单的客户才能领取
                    </View>
                  </View>
                  <View className="list-item-extra">
                    <View className="list-item-extra_icon">
                      <SmallSwitch
                        isOpen={switchIsOpen}
                        onChange={() =>
                          this.setState({ switchIsOpen: !switchIsOpen })
                        }
                      />
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
                    <View className="list-item-extra_info">奖励 0 积分</View>
                  </View>
                </View>
              </View>
              <View className="list-item">
                <View className="list-item-container flex-start">
                  <View className="list-item-content">
                    <View className="list-item-content_title">礼券</View>
                  </View>
                  <View className="list-item-extra">
                    <View className="list-item-extra_info">
                      <AtInput
                        className="input-content"
                        type="text"
                        editable={false}
                        placeholder="选择添加"
                        placeholderClass="placeholder"
                        value={coupon}
                      />
                    </View>
                    <View className="list-item-extra_icon">
                      <IconFont name="right" size={25} />
                    </View>
                  </View>
                </View>
              </View>
              <View className="list-item">
                <View className="list-item-container">
                  <View className="list-item-content">
                    <View className="list-item-content_title">活动描述*</View>
                  </View>
                </View>
                <AtTextarea
                  value={activiteDesc}
                  className="textarea-content"
                  onChange={value => {
                    this.setState({ activiteDesc: value });
                  }}
                  maxLength={1000}
                  placeholder="如：推荐送好礼，升级消费权益等级！"
                />
                <View className="uploadImg">
                  <AtImagePicker
                    multiple={false}
                    count={5}
                    length={5}
                    files={imageFiles}
                    showAddBtn={imageFiles.length > 5 ? false : true}
                    onChange={this.handleImageChange}
                  />
                  <View className="tips">
                    <Text>1、添加活动图片，图片将会显示活动页中</Text>
                    <Text>2、活动缩略图为200*200，点击图片查看自适应</Text>
                    <Text>3、最多可上传5张</Text>
                  </View>
                </View>
                <View className="list-item-container">
                  <View className="list-item-content">
                    <View className="list-item-content_title">活动规则</View>
                  </View>
                </View>
                <AtTextarea
                  value={activiteRule}
                  className="textarea-content"
                  onChange={value => {
                    this.setState({ activiteRule: value });
                  }}
                  maxLength={1000}
                  placeholder="活动规则是..."
                />
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
