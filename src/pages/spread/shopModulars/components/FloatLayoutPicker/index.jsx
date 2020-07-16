import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { AtFloatLayout } from "taro-ui";

export default class extends Component {
  static options = {
    addGlobalClass: true
  };

  state = { selectLevel: "" };
  handleOk = () => {
    const { onOkClick } = this.props;
    onOkClick(this.state.selectLevel);
  };
  handleCancel = () => {
    const { onOkClick } = this.props;
    onOkClick();
  };
  render() {
    const { isOpened, range = [] } = this.props;
    const { selectLevel } = this.state;
    return (
      <AtFloatLayout className="FloatLayout-box" isOpened={isOpened}>
        <View className="floatlayout-container">
          <View className="at-row top">
            <View className="at-col at-col-2" onClick={this.handleCancel}>
              取消
            </View>
            <View className="at-col at-col-8 color-black ">请选择</View>
            <View className="at-col at-col-2" onClick={this.handleOk}>
              确定
            </View>
          </View>
          <View className="content">
            {range.map(item => (
              <View
                key={item.id}
                className={item == selectLevel ? "bold" : ""}
                onClick={() => {
                  this.setState({ selectLevel: item });
                }}
              >
                {item.name}
              </View>
            ))}
          </View>
        </View>
      </AtFloatLayout>
    );
  }
}
