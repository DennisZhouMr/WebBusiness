import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import { AtAvatar, AtIcon } from 'taro-ui';
import Root from "@/components/Root";
import IconFont from "@/components/iconfont";
import './index.scss';

export default class extends Component {
  static options = {
      addGlobalClass: true
  }
  config = {
    navigationBarTitleText: '海报邀请'
  };
  render() {
    const { isOpened } = this.state;
    return (
      <Root background={{ backgroundColor: '#229e8e' }}>
        <View className='posterInvite-container'>

          <View className='store-caption'>
            <AtAvatar image={require('@/assets/images/user.png')} />
            <View>
              <View className='text1'>门店名称</View>
              <View className='text2'>店铺描述</View>
              <View className='caption-info'>
                <View className='text1'>莲湖区西门里南马道巷22号</View>
                <View className='text1 flex'>
                  <IconFont name='integral-fill' size='24' color='#fff' />
                  <Text className='pl-14'>小吃/快餐</Text>
              </View>
              </View>
            </View>
          </View>

          <View className='posterInvite-main'>

            <View className='box'>
              <View className='tips'>
                <Image src={require('@/assets/images/bj_01.png')} />
                <View>
                  <Text>领取您的专属权益卡</Text>
                  <Text>激活有惊喜</Text>
                </View>
              </View>
              <View className='title'>
                <View>您即刻享有的权益</View>
                <View className='subTitle'>我是能自成长升等级的权益卡哦～</View>
              </View>
              <View className='at-row at-row--wrap content'>
                <View className='at-col at-col-6'>
                  <AtIcon
                    prefixClass='icon'
                    value='polygon-one'
                    size='55'
                    color='#000'
                  />
                  <View className='caption'>每日优惠</View>
                  <View>整单9.5折</View>
                  <View>不参与优惠活动商品除外</View>
                </View>
                <View className='at-col at-col-6'>
                  <AtIcon
                    prefixClass='icon'
                    value='polygon-one'
                    size='55'
                    color='#000'
                  />
                  <View className='caption'>买单必赠</View>
                  <View>单单赠送</View>
                  <View>活动期间首单赠送双倍积分</View>
                </View>
                <View className='at-col at-col-6'>
                  <AtIcon
                    prefixClass='icon'
                    value='polygon-one'
                    size='55'
                    color='#000'
                  />
                  <View className='caption'>打赏活动</View>
                  <View>你、我、Ta之间的相互约定</View>
                  <View>有趣、有料，在互动中去体验</View>
                  <View>完成获得到商家打赏礼包</View>
                </View>
                <View className='at-col at-col-6'>
                  <AtIcon
                    prefixClass='icon'
                    value='polygon-one'
                    size='55'
                    color='#000'
                  />
                  <View className='caption'>积分兑换</View>
                  <View>积分可以用来抵扣</View>
                  <View>也可以免费兑换好物</View>
                  <View>满足你不同需求</View>
                </View>
              </View>
            </View>
            <View className='qrCode'>
              <Image src={require('@/assets/images/QRcodeP.png')} />
              <Text>扫码或长按二维码</Text>
            </View>
          </View>
        </View>
      </Root>
    );
  }
}
