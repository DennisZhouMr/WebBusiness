import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import IconFont from "@/components/iconfont";
import Root from "@/components/Root";
import NavBar from "@/components/NavBar";

import "./add.scss";

export default class extends Component {
  config = {
    navigationBarTitleText: "商品单位"
  };
  state = {
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
    ]
  };
  handleCancel = () => {
    this.setState({ isOpened: false });
  };
  handleItemClick=(item)=>{
    Taro.navigateTo({ url: `/pages/spread/shopModulars/myGoods/addActivity?unit=${item.name}` });
  }
  handleEdit = () => {
    Taro.navigateTo({ url: "/pages/spread/shopModulars/myGoods/manageUnit" });
  };
  render() {
    const { goodsUnit } = this.state;
    return (
      <Root
        background={{
          background: `linear-gradient(#fff, #f5f5f5)`
        }}
      >
        <View className="common-wrapper addActivity-add-wrapper">
          <NavBar title="商品单位" iconType="zujian471" iconSize={60} />
          <View className="addActivity-add-main">
            <View className="default-list-container addActivity-add-info show-last-border">
              {goodsUnit.map(item => (
                <View className="list-item" key={item.id} onClick={()=>this.handleItemClick(item)}>
                  <View className="list-item-container">
                    <View className="list-item-content">
                      <View className="list-item-content_title">
                        {item.name}
                      </View>
                    </View>
                  </View>
                </View>
              ))}
            </View>
          </View>
          <View className="button-position">
            <View className="edit-unit" onClick={this.handleEdit}>
              <View className="circle">
                <IconFont name="zu1548" size={50} />
              </View>
              <Text>编辑</Text>
            </View>
          </View>
        </View>
      </Root>
    );
  }
}
