import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import IconFont from '@/components/iconfont';
import Root from '@/components/Root';
import NavBar from '@/components/NavBar';
import CardItem from './components/cardItem';

import './index.scss'

const couponList = [
    {
        id: 1, title: '折扣券', child: [
            { id: 11, title: '整单折扣', desc: '例：全场9折，酒水除外', icon: 'zu1770', backColor: '#FDD000', url: '/pages/createCoupon/discount' }
        ]
    },
    {
        id: 2, title: '代金券', child: [
            { id: 21, title: '满减', desc: '例：满100减20元，满200减50元', icon: 'zu1771', backColor: '#229E8E', url: '/pages/createCoupon/fullReduce' }
        ]
    },
    {
        id: 3, title: '礼品券', child: [
            { id: 31, title: '礼券', desc: '例：促销赠品专用提货券', icon: 'lujing5202', backColor: '#E0004E', url: '/pages/createCoupon/giftCoupon' }
        ]
    },
    {
        id: 4, title: '商品券', child: [
            { id: 41, title: '特价商品', desc: '例：每日特价商品', icon: 'zu1772', backColor: '#FDD000', url: '/pages/createCoupon/specialOffer' },
            { id: 42, title: '相同商品第二份优惠', desc: '例：第二件半价', icon: 'lujing5007', backColor: '#FF3F81', url: '/pages/createCoupon/secondDiscount' },
            { id: 43, title: '买赠', desc: '例：买二赠三', icon: 'lujing1877', backColor: '#229E8E', url: '/pages/createCoupon/buyGive' },
        ]
    },
]

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
            <View className='second-page_container create-coupon_container'>
                <View className='second-page_caption_wrap'>
                    <NavBar title='优惠类型' isCustom>
                        <IconFont name='close' size='52' />
                    </NavBar>
                </View>
                <View className='second-page_main_wrap'>
                    <View className='second-page_main_box'>
                        {couponList.map(item => <View key={item.id}>
                            <View className='create-coupon_tit'>{item.title}</View>
                            <View>
                                {item.child.map(sItem => <CardItem key={sItem.id} item={sItem} />)}
                            </View>
                        </View>)}
                    </View>
                </View>
            </View>
        </Root>
    }
}