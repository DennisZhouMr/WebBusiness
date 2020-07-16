import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtButton, AtAvatar, AtImagePicker } from "taro-ui";
import IconFont from "@/components/iconfont";
import Root from "@/components/Root";
import Caption from "@/components/Caption";

import "./index.scss";

export default class extends Component {
  config = {
    navigationBarTitleText: "门店信息"
  };
  state = {
    files: []
  };
  handleImageChange = (files, operationType) => {
    this.setState({
      files
    });
  };
  handleClick = () => {
    Taro.navigateTo({
      url: "/pages/spread/shopModulars/storeInformation/edit"
    });
  };
  render() {
    const { files } = this.state;
    return (
      <Root
        background={{
          background: `#f5f5f5`
        }}
      >
        <View className="common-wrapper storeinfo-wrapper">
          <Caption text="门店信息" iconType="zu1673" />
          <View className="storeinfo-main">
            <View className="group-container">
              <View className="group-top storeinfo-group">
                <Text className="left">商家注册的名称</Text>
                <Text className="right">商户编号： SX313972</Text>
              </View>
              <View
                className="group-content storeinfo-list"
                onClick={this.handleClick}
              >
                <View className="content">
                  <View className="title">
                    <IconFont name="integral-fill" size={20} />
                    <Text>小吃/快餐（注册引导页选择的品类）</Text>
                  </View>
                  <View className="content">
                    <IconFont name="bullseye" size={20} />
                    <Text>陕西省-西安市-莲湖区</Text>
                  </View>
                  <View className="content">
                    <IconFont name="location" size={20} />
                    <Text>莲湖区西门里南马道巷22号</Text>
                  </View>
                  <View className="content">
                    <IconFont name="money" size={20} />
                    <Text>人均客单价：58元/人</Text>
                  </View>
                  <View className="content">
                    <IconFont name="phone" size={20} />
                    <Text>13772005503（默认注册手机号）</Text>
                  </View>
                </View>
                <View className="extar">
                  <IconFont name="right" size={25} />
                </View>
              </View>
            </View>
            <View className="imagePicker-content">
              <View className="image-picker">
                <AtImagePicker
                  multiple
                  files={files}
                  count={5}
                  length={3}
                  showAddBtn={files.length > 0 ? false : true}
                  onChange={this.handleImageChange}
                />
              </View>
              {files.length <= 0 && (
                <View className="tips">
                  <Text>1、添加店铺图片，图片将会显示 在店铺详情页里</Text>
                  <Text>
                    2、可点击图片星号按钮设置为首图 最佳尺寸600*450像素
                  </Text>
                  <Text>3、最多可上传5张</Text>
                </View>
              )}
            </View>
          </View>
          <View className="button-position">
            <AtButton
              type="secondary"
              className="default-button"
              onClick={() => {
                Taro.navigateTo({ url: "/pages/spread/shopModulars/index" });
              }}
            >
              返回
            </AtButton>
          </View>
        </View>
      </Root>
    );
  }
}
