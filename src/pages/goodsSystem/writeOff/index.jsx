import Taro, { Component } from "@tarojs/taro";
import { View, Image } from "@tarojs/components";
import Root from "@/components/Root";
import NavBar from '@/components/NavBar';
import IconFont from "@/components/iconfont";

import './index.scss';

class Index extends Component {
  static options = {
    addGlobalClass: true
  };
  state = {};
  render() {
    return (<Root background={{ background: '#434343' }}>
      <View className='second-page_container write-off-index'>
        <View className='second-page_caption_wrap'>
          <NavBar title='' iconType='zujian471' iconSize='60' iconColor='#ffffff' isCustom>
            <IconFont name='zujian471' size='60' />
          </NavBar>
        </View>
        <View className='second-page_main_wrap'>
          <View className='write-off-index_wrap'>

            <View className='store-info-box'>
              <View className='store-info at-row'>
                <View className='store-pic'>
                  <Image className='img' src={require('@/assets/images/userDefault.png')} mode='aspectFill' />
                </View>
                <View>
                  <View className='store-location'>西安</View>
                  <View>
                    <View className='store-name inline-block vm'>烤什么名堂</View>
                    <View className='store-icon inline-block vm'>
                      <IconFont name='bottom' size='24' />
                    </View>
                  </View>
                </View>
              </View>

              <View className='at-row logistics-menu'>
                <View className='lm-item'>
                  <View className='num'>0</View>
                  <View className='label'>待发货</View>
                </View>
                <View className='lm-item'>
                  <View className='num'>0</View>
                  <View className='label'>待到店</View>
                </View>
                <View className='lm-item'>
                  <View className='num'>0</View>
                  <View className='label'>已核销</View>
                </View>
              </View>
            </View>
            {/* 我要核销 */}
            <View className='want-container'>
              <View className='tit'>我要核销</View>
              <View className='at-row'>
                <View className='w-item'>
                  <View className='icon-box at-row at-row at-row__justify--center at-row__align--center'>
                    <IconFont name='saoma' size='42' color='#434343' />
                  </View>
                  <View className='ellipsis'>扫一扫核销</View>
                </View>
                <View className='w-item' onClick={() => Taro.navigateTo({ url: '/pages/goodsSystem/writeOff/manual' })}>
                  <View className='icon-box at-row at-row at-row__justify--center at-row__align--center'>
                    <IconFont name='saoma' size='42' color='#ffffff' />
                  </View>
                  <View className='ellipsis'>手工核销</View>
                </View>
                <View className='w-item'>
                  <View className='icon-box at-row at-row at-row__justify--center at-row__align--center'>
                    <IconFont name='saoma' size='42' color='#ffffff' /></View>
                  <View className='ellipsis'>核销记录</View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Root>)
  }
}

export default Index;