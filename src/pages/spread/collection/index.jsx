import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { AtButton, AtIcon, AtSwitch } from 'taro-ui';
import SmallSwitch from '@/components/SmallSwitch';

import './index.scss'

class Collection extends Component {
  static options = {
    addGlobalClass: true
  }

  state = {
    switchIsOpen: false
  };

  config = {
    navigationBarTitleText: '收款账户'
  }

  componentWillMount() { }

  componentWillReact() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    const { switchIsOpen } = this.state;
    return (
      <View className='collection-container'>

        <View className=''>
          <View className='caption'>
            <View className='img-icon'>
              {/* <Image src={imgIcon} mode='aspectFit' className='image' /> */}
            </View>
            <View className='text'>收款账户</View>
          </View>
          <View className='open-wrap'>
            <View className='open-caption black ellipsis'>使用微信提现不收手续费</View>
            <View className='open-box advantage'>
              <View className='title'>
                <View className='text'>开通微信自动提现</View>
                <AtIcon value='alert-circle' color='#29CCA8' size={16}></AtIcon>
              </View>
              <View className='desc'>开通自动提现，余额自动提现至微信钱包</View>
              <View className='switch-box'>
                <SmallSwitch isOpen={switchIsOpen} onChange={() => this.setState({ switchIsOpen: !switchIsOpen })} />
              </View>
            </View>
          </View>
          <View className='bind-wrap'>
            <View className='advantage'>
              <View className='title'>
                <View className='text'>开通微信自动提现 </View>
                <AtIcon value='alert-circle' color='#29CCA8' size={16}></AtIcon>
              </View>
              <View>
                <View className='s-title'>多种收款方式</View>
                <View className='desc'>支持二维码、扫码枪、收款盒等多种方式</View>
              </View>
              <View>
                <View className='s-title mt-40'>到账准时安全</View>
                <View className='desc'>无需手动提现，自动打款至银行卡</View>
              </View>
              <AtButton type='primary' className='gray2' circle>未开通</AtButton>
            </View>
          </View>
        </View>

        <View className='btn-bottom'>
          <AtButton>返回</AtButton>
        </View>
      </View>
    )
  }
}

export default Collection 
