import Taro, { Component } from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";
import { AtButton } from 'taro-ui';
import IconFont from "@/components/iconfont";
import Root from "@/components/Root";
import Caption from '../components/Caption'
import TodayData from '../components/TodayData'
import LinkCard from '../components/LinkCard'
import ContentCard from '../components/ContentCard'
import Footer from '../components/Footer'

import './index.scss'

const tadayMockData = [
    { title: '赠送积分', num: 0 },
    { title: '消费人数', num: 0 },
    { title: '买单金额', num: 0 },
]

export default class extends Component {
    static options = {
        addGlobalClass: true
    }

    render() {
        const contentProps = {
            title: '积分共享引流',
            desc: '不同节点之间获取权益，增强体验互动、消费增值建立信任机制的商圈系统\n特点：去中心化、共享、自治性',
            step: '02',
            btnText: '预览方案',
            smallTit: '积分返利设置<span style="color: #848484">(系统默认)</span>',
            smallIcon: 'zu1673',
            specialTit: '消费激励*',
            specialDesc: '消费馈赠返利，提升顾客消费附加值',
            isShowSpecialSet: true,
            setUrl: '/pages/getCustomer/rebate/set'
        }
        return <Root background={{ background: `url(${require('@/assets/images/back.png')}) #f5f5f5 no-repeat 0 0` }}>
            <View className='rebate_container'>
                <View className='rebate_caption_wrap'>
                    <Caption title='消费返利' icon='xiaofeifanli' iconSize='36' iconColor='#000000' backColor='#9E1F4A' borderColor='#FF3F81' />
                </View>
                <View className='rebate_main_wrap'>
                    <TodayData list={tadayMockData} />
                    <LinkCard icon='zu4772' title='会员名单' rightText='消费会员' />
                    <ContentCard {...contentProps}>
                        <View className='rebate-card'>
                            <View className='rebate-card_caption'>
                                <Text className='num'>01</Text>
                                <Text>积分赠送</Text>
                            </View>
                            <View className='rebate-card_main'>
                                <View className='rebate-card_circle'>
                                    <Image className='image' src={require('@/assets/images/circle.png')} mode='widthFix' />
                                    <View className='icon-box'><IconFont name='jifen' size='48' color='#A3A4A4' /></View>
                                </View>
                                <View>买单必赠，消费1元赠送1积分</View>
                            </View>
                        </View>
                        <View className='text-item'>
                            <Text className='label'>激励权益：</Text>
                            <Text className='desc'>买单消费增积分不限次数，积分可以免费在各线下兑礼点及平台换取商品，商品由平台提供，提升了顾客的消费附加值及满足多种需求，赠送积分以实付金额为准</Text>
                        </View>
                    </ContentCard>
                    <Footer />
                </View>
                <View className='rebate_footer_wrap'>
                    <View className='btn-box'><AtButton type='primary'>生成门店展示海报</AtButton></View>
                    <View className='btn-box btn-box-right'><AtButton type='primary'>邀请会员领取权益</AtButton></View>
                </View>
            </View>
        </Root>
    }
}