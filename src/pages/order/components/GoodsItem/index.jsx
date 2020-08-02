import Taro, { Component } from "@tarojs/taro";
import { View, Image } from "@tarojs/components";
import IconFont from "@/components/iconfont";
import CustomCheckbox from '@/components/Checkbox';
import { AtIcon } from "taro-ui";

import "./index.scss";

export default class extends Component {
  static options = {
    addGlobalClass: true
  };
  render() {
    const {
      item
    } = this.props;
    return (
      <View className='order-goods-item flex vc' >
        <View>{this.props.children}</View>
        <View className='pic-box'>
          {item.img && <Image className='img' src={item.img} mode='aspectFill' />}
        </View>
        <View className='text-box'>
          <View className='name ellipsis'>{item.name}</View>
          <View className='num'>数量：{item.num}</View>
          <View className='price'>￥{item.price}</View>
        </View>
      </View>
    );
  }
}
