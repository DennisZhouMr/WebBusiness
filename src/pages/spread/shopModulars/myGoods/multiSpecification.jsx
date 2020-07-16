import Taro, { Component } from "@tarojs/taro";
import { View, Text, Picker } from "@tarojs/components";
import { AtButton, AtInput } from "taro-ui";
import IconFont from "@/components/iconfont";
import Root from "@/components/Root";
import NavBar from "@/components/NavBar";

import "./add.scss";

export default class extends Component {
  config = {
    navigationBarTitleText: "多规格设置"
  };
  state = {
    specList: [{ specificationName: "", price: "" }]
  };
  handleAddClick = () => {
    let { specList } = this.state;
    let data = { specificationName: "", price: "" };
    specList.push(data);
    this.setState({ specList });
  };
  handleSubmit = () => {
    const { specList } = this.state;
    Taro.navigateTo({
      url: "/pages/spread/shopModulars/myGoods/addActivity"
    });
  };

  render() {
    const { specList } = this.state;
    return (
      <Root
        background={{
          background: `linear-gradient(#fff, #f5f5f5)`
        }}
      >
        <View className="common-wrapper addActivity-add-wrapper">
          <NavBar title="多规格设置" iconType="zujian471" iconSize={60} />
          <View className="addActivity-add-main">
            {specList.map((item, index) => (
              <View
                key={""}
                className="default-list-container addActivity-add-info show-last-border"
              >
                <View className="caption">
                  <View className="title">规格{index + 1}</View>
                  <View className="del">
                    <IconFont name="zu1852" size={26} />
                  </View>
                </View>
                <View className="list-item">
                  <View className="list-item-container">
                    <View className="list-item-content">
                      <View className="list-item-content_title">规格名称*</View>
                    </View>
                    <View className="list-item-extra">
                      <View className="list-item-extra_info">
                        <AtInput
                          className="input-content"
                          type="text"
                          placeholder="请输入规格名称"
                          placeholderClass="placeholder"
                          value={item.specificationName}
                          onChange={value => {
                            let { specList } = this.state;
                            specList[index].specificationName = value;
                            this.setState({ specList });
                          }}
                        />
                      </View>
                    </View>
                  </View>
                </View>
                <View className="list-item">
                  <View className="list-item-container">
                    <View className="list-item-content">
                      <View className="list-item-content_title">售卖价*</View>
                    </View>
                    <View className="list-item-extra">
                      <View className="list-item-extra_info">
                        <AtInput
                          className="input-content"
                          type="number"
                          placeholder="请输入"
                          placeholderClass="placeholder"
                          value={item.price}
                          onChange={value => {
                            let { specList } = this.state;
                            specList[index].price = value;
                            this.setState({ specList });
                          }}
                        />
                      </View>
                      <View className="list-item-extra_icon">元</View>
                    </View>
                  </View>
                </View>
              </View>
            ))}
            <View className="add" onClick={this.handleAddClick}>
              + 添加规格
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
