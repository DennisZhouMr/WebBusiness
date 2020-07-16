import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import Statistic from '@/components/Statistic'

import './InfoContainer.scss'

class InfoContainer extends Component {
  static options = {
      addGlobalClass: true
  }
  render() {
    return (
      <View className='info-container'>
        <View className='data-wrap'>
          <Statistic icon='xiaofeirenshu' num='287345' desc='今日消费人数' />
          <Statistic icon='xiaoshoujine' num='287345' desc='今日销售金额' />
        </View>
        <View className='today-wrap'>
          <View className='order-number'>当日订单数（线上）<Text>0</Text></View>
          <View><AtIcon prefixClass='icon' value='zu1706' size='22' color='#A0A0A0' /></View>
        </View>
      </View>
    )
  }
}

export default InfoContainer 
