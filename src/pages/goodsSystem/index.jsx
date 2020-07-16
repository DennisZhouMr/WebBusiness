import Taro, { Component } from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";
import { AtButton } from 'taro-ui';
import Root from "@/components/Root";
import SecondCaption from "@/components/SecondCaption";
import IconFont from "@/components/iconfont";

import './index.scss';

class Index extends Component {
  static options = {
    addGlobalClass: true
  };
  state = {
    isOpened: false,
    adSrc: ''
  };
  render() {
    const { isOpened, adSrc } = this.state;
    return (<Root background={{ background: `url(${require('@/assets/images/back.png')}) #f5f5f5 no-repeat 0 0` }}>
      <View className='second-page_container'>
        <View className='second-page_caption_wrap'>
          <SecondCaption title='商城系统' icon='shangpinshangjia' iconSize='38' iconColor='#000000' backColor='#fd0' borderColor='#fd0' />
        </View>
        <View className='second-page_main_wrap'>
          <View className='system-index-wrap'>
            {/* 商城设置 */}
            <View className='card-container'>
              <View className='card-caption at-row at-row__justify--between at-row__align--center'>
                <View>商城设置</View>
                <View><IconFont name='poster' size='36' color='#fd0' /></View>
              </View>
              <View className='card-main'>
                <View className='card-item'>
                  <View className='c-tit'>今日数据</View>
                  <View className='at-row'>
                    <View className='at-col'>
                      <View className='c-label'>访问数</View>
                      <View className='c-content'>0</View>
                    </View>
                    <View className='at-col'>
                      <View className='c-label'>订单数</View>
                      <View className='c-content'>0</View>
                    </View>
                    <View className='at-col'>
                      <View className='c-label'>订单金额</View>
                      <View className='c-content'>0</View>
                    </View>
                  </View>
                </View>
                <View className='card-item'>
                  <View className='c-tit'>总计数据</View>
                  <View className='at-row'>
                    <View className='at-col'>
                      <View className='c-content'>0</View>
                    </View>
                    <View className='at-col'>
                      <View className='c-content'>0</View>
                    </View>
                    <View className='at-col'>
                      <View className='c-content'>0</View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            {/* 菜单 */}
            <View className='at-row at-row__justify--between menu-wrap'>
              <View className='at-col' onClick={() => Taro.navigateTo({ url: '/pages/goodsSystem/writeOff/index' })}>
                <View className='icon-box at-row at-row__justify--center at-row__align--center'>
                  <IconFont name='poster' size='36' color='#fd0' />
                </View>
                <View>我要核销</View>
              </View>
              <View className='at-col' onClick={() => Taro.navigateTo({ url: '/pages/order/list' })}>
                <View className='icon-box at-row at-row__justify--center at-row__align--center'>
                  <IconFont name='poster' size='36' color='#fd0' />
                </View>
                <View>订单管理</View>
              </View>
              <View className='at-col' onClick={() => Taro.navigateTo({ url: '/pages/spread/shopModulars/myGoods/index' })}>
                <View className='icon-box at-row at-row__justify--center at-row__align--center'><IconFont name='poster' size='36' color='#fd0' /></View>
                <View>商品管理</View>
              </View>
              <View className='at-col'>
                <View className='icon-box at-row at-row__justify--center at-row__align--center'><IconFont name='poster' size='36' color='#fd0' /></View>
                <View>发布商品</View>
              </View>
            </View>
            {/* 线上订单 */}
            <View className='online-order'>
              <View className='at-row at-row__justify--between title-box'>
                <View className='tit ellipsis'>线上订单</View>
                <View>
                  <View className='span'>所有线上订单</View>
                  <View className='c-icon'><IconFont name='right' size='24' color='#434343' /></View>
                </View>
              </View>
              <View>
                <View className='no-data'>暂无商城订单</View>
              </View>
            </View>
          </View>
        </View>
        <View className='second-page_footer_wrap' style={{ height: 'auto' }}>
          <View className='btn-box'><AtButton type='primary'>生成门店海报</AtButton></View>
          <View className='btn-box btn-box-right'>
            <AtButton type='primary'>分享我的店铺</AtButton>
          </View>
        </View>
      </View>
    </Root>)
  }
}

export default Index;