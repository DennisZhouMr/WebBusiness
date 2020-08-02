import Taro, { Component } from "@tarojs/taro";
import { View, Picker, Text } from "@tarojs/components";
import { AtButton, AtTextarea, AtInput } from "taro-ui";
import IconFont from "@/components/iconfont";
import Root from "@/components/Root";
import Caption from "@/components/Caption";

import "./edit.scss";

export default class extends Component {
  config = {
    navigationBarTitleText: "编辑门店"
  };
  state = {
    No: "SX313972",
    storeName: "注册时候的名称",
    desc: "",
    adress: "莲湖区西门里南马道巷22号",
    telphone: "13772005503",
    weekSelector: [
      "星期一",
      "星期二",
      "星期三",
      "星期四",
      "星期五",
      "星期六",
      "星期日"
    ],
    weekChecked: "星期一",
    timeSel: "12:01",
    area: "陕西省-西安市-莲湖区"
  };
  onTimeChange = ({ detail: { value } }) => {
    this.setState({
      timeSel: value
    });
  };
  handleWeekChange = ({ detail: { value } }) => {
    this.setState({
      weekChecked: this.state.weekSelector[value]
    });
  };
  handlePickerChange = ({ detail: { value, code, postcode } }) => {
    console.log(value, code, postcode);
    this.setState({ area: value.join("-") });
  };
  render() {
    const {
      No,
      storeName,
      desc,
      adress,
      telphone,
      timeSel,
      weekSelector,
      weekChecked,
      area
    } = this.state;
    return (
      <Root
        background={{
          background: `#f5f5f5`
        }}
      >
        <View className="common-wrapper storeInfo-edit-wrapper">
          <Caption text="编辑门店" iconType="zu1673" />
          <View className="shopkeeper-main">
            <View className="group-container">
              <View className="group-top shopkeeper-group">
                <Text>温馨提示：请正确填写门店地址及联系电话等信息</Text>
              </View>
            </View>
            <View className="default-list-container">
              <View className="list-item">
                <View className="list-item-container">
                  <View className="list-item-content">
                    <View className="list-item-content_title">商户编号</View>
                  </View>
                  <View className="list-item-extra">
                    <View className="list-item-extra_info">
                      <AtInput
                        className="input-content"
                        required
                        type="number"
                        placeholder="请输入用户编号"
                        value={No}
                        onChange={value => {
                          this.setState({ No: value });
                        }}
                      />
                    </View>
                  </View>
                </View>
              </View>
              <View className="list-item">
                <View className="list-item-container">
                  <View className="list-item-content">
                    <View className="list-item-content_title">门店名称</View>
                  </View>
                  <View className="list-item-extra">
                    <View className="list-item-extra_info">
                      <AtInput
                        className="input-content"
                        required
                        type="number"
                        placeholder="注册时候的名称（在此可以修改）"
                        value={storeName}
                        onChange={() => {
                          this.setState({ storeName: value });
                        }}
                      />
                    </View>
                  </View>
                </View>
              </View>
              <View className="list-item">
                <View className="list-item-container">
                  <View className="list-item-content">
                    <View className="list-item-content_title">经营业态</View>
                  </View>
                  <View className="list-item-extra">
                    <View className="list-item-extra_info">小吃/快餐</View>
                  </View>
                </View>
              </View>
              <View className="list-item">
                <View className="list-item-container">
                  <View className="list-item-content">
                    <View className="list-item-content_title">商铺描述</View>
                  </View>
                  <View className="list-item-extra">
                    <View className="list-item-extra_info">
                      <AtTextarea
                        className="textarea-content"
                        value={desc}
                        onChange={value => {
                          this.setState({ desc: value });
                        }}
                        maxLength={30}
                        placeholder="例：经营特点"
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>

            <View className="default-list-container store-edit-list">
              <View className="list-item">
                <Picker mode="region" onChange={this.handlePickerChange}>
                  <View className="list-item-container">
                    <View className="list-item-content">
                      <View className="list-item-content_title">所在区域</View>
                    </View>
                    <View className="list-item-extra">
                      <View className="list-item-extra_info">
                        <AtInput
                          className="input-content"
                          type="text"
                          placeholder="请选择所在区域"
                          value={area}
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
                    <View className="list-item-content_title">门店地址</View>
                  </View>
                  <View className="list-item-extra">
                    <View className="list-item-extra_info">
                      <AtInput
                        className="input-content"
                        required
                        type="text"
                        placeholder="请输入门店地址"
                        value={adress}
                        onChange={value => {
                          this.setState({ adress: value });
                        }}
                      />
                    </View>
                  </View>
                </View>
              </View>
              <View className="list-item list-item-time">
                <View className="list-item-container">
                  <View className="list-item-content">
                    <View className="list-item-content_title">营业时间</View>
                  </View>
                </View>
              </View>
              <View className="list-item list-item-time">
                <Picker
                  mode="selector"
                  range={weekSelector}
                  onChange={this.handleWeekChange}
                >
                  <View className="list-item-container">
                    <View className="list-item-content">
                      <View className="list-item-content_title">星期</View>
                    </View>
                    <View className="list-item-extra">
                      <View className="list-item-extra_info">
                        <AtInput
                          className="input-content"
                          type="text"
                          placeholder="请选择星期"
                          value={weekChecked}
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
              <View className="list-item list-item-time border">
                <Picker mode="time" onChange={this.onTimeChange}>
                  <View className="list-item-container">
                    <View className="list-item-content">
                      <View className="list-item-content_title">时段</View>
                    </View>
                    <View className="list-item-extra">
                      <View className="list-item-extra_info">
                        <AtInput
                          className="input-content"
                          type="text"
                          placeholder="请选择时段"
                          value={timeSel}
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
                    <View className="list-item-content_title">客服电话</View>
                  </View>
                  <View className="list-item-extra">
                    <View className="list-item-extra_info">
                      <AtInput
                        className="input-content"
                        required
                        type="number"
                        placeholder="请输入客服电话"
                        value={telphone}
                        onChange={() => {
                          this.setState({ telphone: value });
                        }}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View className="default-list-container">
              <View className="list-item">
                <View className="list-item-container">
                  <View className="list-item-content">
                    <View className="list-item-content_title">人均客单价</View>
                  </View>
                  <View className="list-item-extra">
                    <View className="list-item-extra_info place">
                      <AtInput
                        className="input-content"
                        required
                        type="number"
                        placeholder="请输入客服电话"
                        value={telphone}
                        onChange={() => {
                          this.setState({ telphone: value });
                        }}
                      />
                      元
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View className="default-list-container">
              <View className="list-item">
                <View className="list-item-container">
                  <View className="list-item-content">
                    <View className="list-item-content_title">门店logo</View>
                  </View>
                  <View className="list-item-extra">
                    <View className="list-item-extra_info">品牌logo</View>
                    <View className="list-item-extra_icon">
                      <IconFont name="right" size={25} />
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
              onClick={() => {
                Taro.navigateBack({ delta: 1 });
              }}
            >
              保存
            </AtButton>
          </View>
        </View>
      </Root>
    );
  }
}
