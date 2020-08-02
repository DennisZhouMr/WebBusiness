import Taro, { Component } from "@tarojs/taro";
import { View, Text, Picker, Block } from "@tarojs/components";
import { AtButton, AtInput, AtTag, AtTextarea, AtImagePicker } from "taro-ui";
import IconFont from "@/components/iconfont";
import Root from "@/components/Root";
import NavBar from "@/components/NavBar";

import "./activite.scss";

export default class extends Component {
  state = {
    name: "激活有礼首单消费送双倍积分", //活动名称
    beginDate: "", //起始日期
    endDate: "", //结束日期
    counterPrice: "", //门市价
    activityCount: "", //活动价
    saleCount: "", //限售
    ticketRule: 0, //发券规则
    productDesc: "", //商品介绍
    condition: "单笔购买(活动价商品)0元", //获得条件
    integral: "赠送   0   积分", //积分
    couponCount: "", //发券数
    activiteDesc: "", //活动描述
    couponType: "", //券类型
    activityModeList: ["线上下单", "门店消费"],
    activityMode: "线上下单", //活动方式
    activityModeId: 0,
    imageFiles: [], //上传图片
    productShow: false,
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
      Taro.navigateTo({ url: "/pages/spread/shopModulars/marketingActivity/singleConsumer" });
    }
  };
  validate = () => {
    return true;
  };
  render() {
    const {
      name,
      beginDate,
      endDate,
      counterPrice,
      activityCount,
      saleCount,
      ticketRule,
      productDesc,
      condition,
      integral,
      couponType,
      couponCount,
      activiteDesc,
      activityModeList,
      activityMode,
      activityModeId,
      imageFiles,
      ticketRuleList,
      productShow
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
                  <View className="title">单笔消费送礼</View>
                  <View>
                    针对未在本店消费的新客人或吸纳现金流设置的专项优惠，在激活
                    会员权益卡后赠送礼券。如消费满1000元，赠送价值1200元原装
                    进口扫地机一台，赠品可以配合券类型里的礼品券去使用，无需提
                    前采购，有效节省营销成本。
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
              <View className="list-item">
                <Picker
                  mode="selector"
                  range={activityModeList}
                  onChange={({ detail: { value } }) => {
                    this.setState({
                      activityMode: activityModeList[value],
                      activityModeId: value
                    });
                  }}
                >
                  <View className="list-item-container flex-start">
                    <View className="list-item-content">
                      <View className="list-item-content_title">活动方式*</View>
                      <View className="list-item-content_desc">
                        为了迎合多种消费场景，可以选择
                      </View>
                      <View className="list-item-content_desc">
                        线上下单及到店消费
                      </View>
                    </View>
                    <View className="list-item-extra">
                      <View className="list-item-extra_info">
                        <AtInput
                          className="input-content"
                          type="text"
                          editable={false}
                          placeholder="选择"
                          placeholderClass="placeholder"
                          value={activityMode}
                        />
                      </View>
                      <View className="list-item-extra_icon">
                        <IconFont name="right" size={25} />
                      </View>
                    </View>
                  </View>
                </Picker>
              </View>
              {activityModeId == "0" && (
                <Block>
                  <View className="list-item">
                    <View className="list-item-container">
                      <View className="list-item-content">
                        <View className="list-item-content_title">
                          消费送礼必买的商品*
                        </View>
                      </View>
                      {!productShow && (
                        <View className="list-item-extra">
                          <View className="list-item-extra_icon">
                            <IconFont name="right" size={25} />
                          </View>
                        </View>
                      )}
                    </View>
                    {productShow && (
                      <View className="product-list">
                        <View className="at-row at-row--wrap product-table">
                          <View className="at-col at-col-4 title">商品</View>
                          <View className="at-col at-col-4 title center">
                            价格
                          </View>
                          <View className="at-col at-col-3 title center">
                            份数
                          </View>
                          <View className="at-col at-col-1"></View>
                          <View className="at-col at-col-4">选取的商品名</View>
                          <View className="at-col at-col-4 center">¥28</View>
                          <View className="at-col at-col-3 center">1</View>
                          <View className="at-col at-col-1 center">
                            <IconFont name="delete" size={25} />
                          </View>
                        </View>
                        <View className="uploadImg uploadImg_two">
                          <AtImagePicker
                            multiple={false}
                            count={1}
                            length={1}
                            files={imageFiles}
                            showAddBtn={imageFiles.length >= 1 ? false : true}
                            onChange={this.handleImageChange}
                          />
                          <View className="tips tips-position">
                            <Text>1、单款商品限上传1张主图</Text>
                          </View>
                        </View>
                        <View className="add">+ 添加商品</View>
                      </View>
                    )}
                  </View>
                  <View className="list-item">
                    <View className="list-item-container">
                      <View className="list-item-content">
                        <View className="list-item-content_title">门市价*</View>
                      </View>
                      <View className="list-item-extra">
                        <View className="list-item-extra_info">
                          <AtInput
                            className="input-content"
                            type="number"
                            placeholder="请输入"
                            placeholderClass="placeholder"
                            value={counterPrice}
                            onChange={value => {
                              this.setState({ counterPrice: value });
                            }}
                          />
                        </View>
                        <View className="list-item-extra_icon">元</View>
                      </View>
                    </View>
                  </View>
                  <View className="list-item">
                    <View className="list-item-container">
                      <View className="list-item-content">
                        <View className="list-item-content_title">活动价*</View>
                      </View>
                      <View className="list-item-extra">
                        <View className="list-item-extra_info">
                          <AtInput
                            className="input-content"
                            type="number"
                            placeholder="请输入"
                            placeholderClass="placeholder"
                            value={activityCount}
                            onChange={value => {
                              this.setState({ activityCount: value });
                            }}
                          />
                        </View>
                        <View className="list-item-extra_icon">元</View>
                      </View>
                    </View>
                  </View>
                  <View className="list-item">
                    <View className="list-item-container">
                      <View className="list-item-content">
                        <View className="list-item-content_title">限售*</View>
                      </View>
                      <View className="list-item-extra">
                        <View className="list-item-extra_info">
                          <AtInput
                            className="input-content"
                            type="number"
                            placeholder="请输入"
                            placeholderClass="placeholder"
                            value={saleCount}
                            onChange={value => {
                              this.setState({ saleCount: value });
                            }}
                          />
                        </View>
                        <View className="list-item-extra_icon">元</View>
                      </View>
                    </View>
                  </View>
                  <View className="list-item">
                    <View className="list-item-container">
                      <View className="list-item-content">
                        <View className="list-item-content_title">
                          商品介绍*
                        </View>
                      </View>
                    </View>
                    <AtTextarea
                      value={productDesc}
                      className="textarea-content"
                      onChange={value => {
                        this.setState({ productDesc: value });
                      }}
                      maxLength={1000}
                      placeholder="请输入商品介绍内容"
                    />
                  </View>
                </Block>
              )}
              <View className="caption">单笔消费赠送</View>
              <View className="list-item">
                <View className="list-item-container">
                  <View className="list-item-content">
                    <View className="list-item-content_title">
                      {activityModeId == "0" ? (
                        <Text>获得条件</Text>
                      ) : (
                        <Text>赠送条件</Text>
                      )}
                      *
                    </View>
                  </View>
                  <View className="list-item-extra">
                    <View className="list-item-extra_info">
                      <AtInput
                        className="input-content"
                        type="number"
                        placeholder="请输入"
                        placeholderClass="placeholder"
                        value={condition}
                        onChange={value => {
                          this.setState({ condition: value });
                        }}
                      />
                    </View>
                  </View>
                </View>
              </View>
              <View className="caption color-229E8E">赠品设置</View>
              <View className="list-item">
                <View className="list-item-container">
                  <View className="list-item-content">
                    <View className="list-item-content_title">积分</View>
                  </View>
                  <View className="list-item-extra">
                    <View className="list-item-extra_info">
                      <AtInput
                        className="input-content"
                        type="number"
                        placeholder="请输入"
                        placeholderClass="placeholder"
                        value={integral}
                        onChange={value => {
                          this.setState({ integral: value });
                        }}
                      />
                    </View>
                  </View>
                </View>
              </View>
              <View className="list-item">
                <View className="list-item-container flex-start">
                  <View className="list-item-content">
                    <View className="list-item-content_title">券类型</View>
                  </View>
                  <View className="list-item-extra">
                    <View className="list-item-extra_info">
                      <AtInput
                        className="input-content"
                        type="text"
                        editable={false}
                        placeholder="选择添加"
                        placeholderClass="placeholder"
                        value={couponType}
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
              <View className="list-item">
                <View className="list-item-container flex-start">
                  <View className="list-item-content">
                    <View className="list-item-content_title">发券数</View>
                    <View className="list-item-content_desc">
                      券完就不再发放，先到先得
                    </View>
                  </View>
                  <View className="list-item-extra">
                    <View className="list-item-extra_info">
                      <AtInput
                        className="input-content"
                        type="text"
                        placeholder="请输入数量"
                        placeholderClass="placeholder"
                        value={couponCount}
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
                  placeholder="如：赠品数量有限，先到先得"
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
              创建
            </AtButton>
          </View>
        </View>
      </Root>
    );
  }
}
