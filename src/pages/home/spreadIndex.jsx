import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import InfoContainer from './components/spread/InfoContainer'
import IntegralContainer from './components/spread/IntegralContainer'
import UsageContainer from './components/spread/UsageContainer'
import AdvertContainer from './components/spread/AdvertContainer'
import BannerContainer from './components/spread/BannerContainer'
import ActivityContainer from './components/spread/ActivityContainer'
import AccountInfo from '@/components/AccountInfo'


import './spreadIndex.scss'

@inject('counterStore')
@observer
class SpreadIndex extends Component {
  static options = {
    addGlobalClass: true
  }

  config = {
    navigationBarTitleText: '推广'
  }

  componentWillMount() { }

  componentWillReact() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='spread-index'>
        <View className='spread-header'>
          <AccountInfo src={null} text1='西安' text2='烤什么名堂' />
        </View>
        <View className='spread-main'>
          <InfoContainer />
          <IntegralContainer />
          <UsageContainer />
          <AdvertContainer />
          <BannerContainer />
          <ActivityContainer />
        </View>
      </View>
    )
  }
}

export default SpreadIndex 
