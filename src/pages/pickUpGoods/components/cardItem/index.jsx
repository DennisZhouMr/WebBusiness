import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';

import './index.scss'

export default class extends Component {
    static options = {
        addGlobalClass: true
    }

    render() {
        const { item = {} } = this.props;
        return <View className='coupon-card_item'>
            <View>
                <View className='card-tit'>{item.title}</View>
                <View className='card-desc'>{item.desc}</View>
                <View className='card-time'>{item.time}</View>
            </View>
            <View className='card-num_box'>
                <Text className='card-num'>{item.num}</Text>
                <Text className='card-text'>折</Text>
            </View>
        </View>
    }
}