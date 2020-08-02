import Taro, { Component } from "@tarojs/taro";
import { View, Text, Picker, Block } from "@tarojs/components";
import { AtButton, AtInput, AtTag, AtTextarea } from "taro-ui";
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
    ticketCount: "",
    activiteDesc: "激活即享优惠折扣，活动期间赠双倍积分，并有礼券赠送",
    switchIsOpen: false,
    ShowTicketType: false,
    ticketRuleList: [
      { id: 0, name: "会员数量" },
      { id: 1, name: "固定数量" }
    ],
    ticketList: [
      { title: "全场8.5折", desc: "整单折扣", period: "永久有效", sale: 8.0 }
    ]
  };
  handleTagClick = item => {
    this.setState({ ticketRule: item.id, ShowTicketType: item.id !== 0 });
  };
  handleSubmit = () => {
    Taro.navigateTo({
      url: "/pages/spread/shopModulars/marketingActivity/activityType"
    });
  };
  render() {
    const {
      name,
      beginDate,
      endDate,
      ticketType,
      ticketRule,
      ticketCount,
      activiteDesc,
      switchIsOpen,
      ticketRuleList,
      ticketList,
      ShowTicketType
    } = this.state;
    return (
      <Root
        background={{
          background: `linear-gradient(#fff, #f5f5f5)`
        }}
      >
        <View className="common-wrapper activity-wrapper">
          <NavBar title="" iconType="zujian471" iconSize={60} />
          <View className="activity-main">
            <View className="default-list-container activity-info">
              <View className="header">
                <View className="content">
                  <View className="title">会员激活礼</View>
                  <View>
                    针对在本店领卡会员消费激活设置的专享优惠，激活后赠送奖励项，此项为系统默认创建项，配合会员裂变使用，系统默认活动周期为半年时间，建议长期使用。
                  </View>
                </View>
                <View>
                  <SmallSwitch
                    isOpen={switchIsOpen}
                    onChange={() =>
                      this.setState({ switchIsOpen: !switchIsOpen })
                    }
                  />
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
              <View className="caption">激活奖励</View>
              <View className="list-item">
                <View className="list-item-container flex-start">
                  <View className="list-item-content">
                    <View className="list-item-content_title">积分返利*</View>
                    <View className="list-item-content_desc">
                      激活后首次用权益卡买单
                    </View>
                    <View className="list-item-content_desc">
                      按实付金额双倍赠送积分
                    </View>
                  </View>
                  <View className="list-item-extra">
                    <View className="list-item-extra_info">
                      消费 1 元 赠送 2 积分
                    </View>
                  </View>
                </View>
              </View>
              <View className="caption">
                优惠礼券
                <View className="desc">激活礼赠送的礼券不能在首次买单使用</View>
              </View>
              <View className="list-item">
                <View className="list-item-container">
                  <View className="list-item-content">
                    <View className="list-item-content_title">券类型</View>
                  </View>
                  {!ShowTicketType && (
                    <View
                      className="list-item-extra"
                      onClick={() => {
                        Taro.navigateTo({
                          url:
                            "/pages/spread/shopModulars/marketingActivity/type"
                        });
                      }}
                    >
                      <View className="list-item-extra_info">
                        <AtInput
                          className="input-content"
                          type="text"
                          editable={false}
                          placeholder="请选择添加"
                          placeholderClass="placeholder"
                          value={ticketType}
                        />
                      </View>
                      <View className="list-item-extra_icon">
                        <IconFont name="right" size={25} />
                      </View>
                    </View>
                  )}
                </View>
                {ShowTicketType && (
                  <Block>
                    <View className="ticket-content">
                      {ticketList.map(item => (
                        <View className="ticket-item" key={""}>
                          <View className="content">
                            <Text className="title">{item.title}</Text>
                            <Text className="desc">{item.desc}</Text>
                            <Text className="period">{item.period}</Text>
                          </View>
                          <View className="sale">
                            <Text>{item.sale}</Text>折
                          </View>
                        </View>
                      ))}
                    </View>
                    <View className="add">+ 继续添加</View>
                  </Block>
                )}
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
              <View className="list-item">
                <View className="list-item-container">
                  <View className="list-item-content">
                    <View className="list-item-content_title">发券数</View>
                  </View>
                  <View className="list-item-extra">
                    <View className="list-item-extra_info">
                      <AtInput
                        className="input-content"
                        type="number"
                        placeholder="请输入数量"
                        placeholderClass="placeholder"
                        value={ticketCount}
                      />
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
                  placeholder="你的问题是..."
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
