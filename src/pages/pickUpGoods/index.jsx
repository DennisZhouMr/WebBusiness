import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { AtButton } from 'taro-ui';
import IconFont from '@/components/iconfont';
import Root from '@/components/Root';
import NavBar from '@/components/NavBar';

import './index.scss'

export default class extends Component {
    static options = {
        addGlobalClass: true
    }

    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return <Root background={{ background: 'linear-gradient(top,#ffffff,#f5f5f5)' }}>
            <View className='second-page_container pick-up-goods_container'>
                <View className='second-page_caption_wrap'>
                    <NavBar title='提货点开通' textAlign='left' isCustom>
                        <IconFont name='zu1535' size='52' />
                    </NavBar>
                </View>
                <View className='second-page_main_wrap'>
                    <View className='second-page_main_box pick-up-goods_main_box'>
                        <View className='tit'>提货点开通设置</View>
                        <View className='desc'>提货点的设置相当于约定活动的期中活动之一，顾客在线上兑换商品下单时，可以选择相应的线下提货点提货，当你开通时就会出现在提货点列表里，起到引流推广的作用，为了激励顾客到店提货，相对应需要设置激励规则。</View>
                        <View className='tit2'>规则</View>
                        <View className='desc2'>激励礼品：10积分  券名1张  券名1张</View>
                    </View>
                </View>
                <View className='second-page_footer_wrap'>
                    <View className='button-position'>
                        <View className='button-group'>
                            <Text onClick={() => { Taro.navigateBack(); }}>返回</Text>
                            <Text onClick={() => { Taro.navigateTo({ url: '/pages/pickUpGoods/set' }); }}>设置</Text>
                        </View>
                    </View>
                </View>
            </View>
        </Root>
    }
}