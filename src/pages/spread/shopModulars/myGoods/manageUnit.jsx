import Taro, { Component } from "@tarojs/taro";
import { View, Text, Picker } from "@tarojs/components";
import { AtButton, AtInput, AtTag } from "taro-ui";
import IconFont from "@/components/iconfont";
import Root from "@/components/Root";
import NavBar from "@/components/NavBar";
import Modal from "@/components/Modal";

import "./add.scss";

export default class extends Component {
  config = {
    navigationBarTitleText: "管理单位"
  };
  state = {
    isOpened: false,
    goodsUnit: [
      { id: 1, name: "份" },
      { id: 2, name: "件" },
      { id: 3, name: "例" },
      { id: 4, name: "斤" },
      { id: 5, name: "瓶" },
      { id: 6, name: "杯" },
      { id: 7, name: "扎" },
      { id: 8, name: "听" },
      { id: 9, name: "套" },
      { id: 10, name: "双" }
    ],
    delUnitId: ""
  };
  handleDelete = item => {
    this.setState({ isOpened: true, delUnitId: item.id });
  };
  handleConfirm = () => {
    const { delUnitId, goodsUnit } = this.state;
    //删除选中行
    let newGoodsUnit = goodsUnit.filter(item => item.id !== delUnitId);
    this.setState({ isOpened: false, goodsUnit: newGoodsUnit });
  };
  handleCancel = () => {
    this.setState({ isOpened: false });
  };
  handleSubmit = () => {
    Taro.navigateTo({ url: "/pages/spread/shopModulars/myGoods/unit" });
  };
  render() {
    const { isOpened, goodsUnit } = this.state;
    return (
      <Root
        background={{
          background: `linear-gradient(#fff, #f5f5f5)`
        }}
      >
        <View className="common-wrapper addActivity-add-wrapper">
          <NavBar title="管理单位" iconType="zujian471" iconSize={60} />
          <View className="addActivity-add-main">
            <View className="default-list-container addActivity-add-info">
              {goodsUnit.map(item => (
                <View className="list-item" key={item.id}>
                  <View className="list-item-container">
                    <View className="list-item-content">
                      <View className="list-item-content_title">
                        {item.name}
                      </View>
                    </View>
                    <View className="list-item-extra">
                      <View
                        className="list-item-extra_icon"
                        onClick={() => this.handleDelete(item)}
                      >
                        <IconFont name="zu1852" size={26} />
                      </View>
                    </View>
                  </View>
                </View>
              ))}
              <View className="list-item">
                <View className="list-item-container">
                  <View className="list-item-content"></View>
                  <View
                    className="list-item-extra color-FF3F81"
                    onClick={() => {
                      Taro.navigateTo({
                        url: "/pages/spread/shopModulars/myGoods/addUnit"
                      });
                    }}
                  >
                    + 添加单位
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View className="button-position">
            <AtButton
              type="secondary"
              className="default-button primary-button"
              onClick={this.handleSubmit}
            >
              完成
            </AtButton>
          </View>
        </View>
        <Modal
          isOpened={isOpened}
          iconTyle="gantanhao"
          iconColor="#FF3F81"
          iconSize={110}
          isGroup={true}
          groupContent={["取消", "删除"]}
          title="提示"
          contentText="确认删除吗？"
          onConfirm={this.handleConfirm}
          onCancel={this.handleCancel}
        />
      </Root>
    );
  }
}
