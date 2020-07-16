import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtIcon } from 'taro-ui'

import './index.scss'

/* 
*  数据统计组件
*  @param {string} icon 数据展示图标
*  @param {number} num  数据
*  @param {string} desc 数据描述
*  如： spread/components/infoContainer/index
*/

class Statistic extends Component {
    render() {
        const { icon, num, desc } = this.props;
        return (
            <View className='Statistic'>
                <View className='text-box'>
                    <AtIcon prefixClass='icon' value={icon} size='16' color='#434343' />
                    <Text className='num'>{num}</Text>
                </View>
                <View className='desc'>{desc}</View>
            </View>
        );
    }
}

export default Statistic;
