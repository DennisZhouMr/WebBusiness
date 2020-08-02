import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import IconFont from "@/components/iconfont";
import "./index.scss";

export default class extends Component {
  handleDecrease = () => {
    let { dateSouce, onCartUpdate } = this.props;
    dateSouce.count--;
    onCartUpdate(dateSouce);
  };
  handleAdd = () => {
    let { dateSouce, onCartUpdate } = this.props;
    dateSouce.count++;
    onCartUpdate(dateSouce);
  };
  render() {
    const { dateSouce = {}, maxCount = "" } = this.props;
    return (
      <View class="cartcontrol">
        {dateSouce.count > 0 && (
          <View class="decrease">
            <View onClick={this.handleDecrease}>-</View>
          </View>
        )}
        {dateSouce.count > 0 && <View class="count">{dateSouce.count}</View>}
        <View class="add">
          {maxCount && dateSouce.count < maxCount ? (
            <View onClick={this.handleAdd}>+</View>
          ) : (
            <View>+</View>
          )}
        </View>
      </View>
    );
  }
}
