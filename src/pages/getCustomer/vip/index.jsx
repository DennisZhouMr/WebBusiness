import Taro, { Component } from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";
import { AtButton } from 'taro-ui';
import Root from "@/components/Root";
import Caption from '../components/Caption'
import TodayData from '../components/TodayData'
import LinkCard from '../components/LinkCard'
import ContentCard from '../components/ContentCard'
import Footer from '../components/Footer'
import VipCard from '@/components/VipCard'
import FloatLayout from '../components/FloatLayout';
import AddLevel from '../components/AddLevel'
import IconFont from "@/components/iconfont";
import SmallSwitch from '@/components/SmallSwitch';

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
    state = {
        isOpened: false,
        switchIsOpen: false,
        adSrc: ''
    };
    handleClose = () => {
        this.setState({ isOpened: false });
    };

    render() {
        const contentProps = {
            title: '获客共享引流',
            desc: '不同节点之间获取权益，增强体验互动、消费增值建立信任机制的商圈系统特点：去中心化、共享、自治性',
            step: '01',
            btnText: '预览方案',
            smallTit: '权益卡设置',
            smallIcon: 'zu1673',
            specialTit: '自成长等级设定*',
            specialDesc: 'V1等级获得条件：邀请领取'
        }

        const { isOpened, adSrc, switchIsOpen } = this.state;
        return <Root background={{ background: `url(${require('@/assets/images/back.png')}) #f5f5f5 no-repeat 0 0` }}>
            <View className='vip_container'>
                <View className='vip_caption_wrap'>
                    <Caption title='会员裂变' icon='huiyuanliebian' iconSize='38' iconColor='#000000' backColor='#406965' />
                </View>
                <View className='vip_main_wrap'>
                    <TodayData list={tadayMockData} />
                    <LinkCard icon='zu4772' title='会员名单' rightText='所有会员' />
                    <ContentCard {...contentProps}>
                        <VipCard url='/pages/getCustomer/levelOpera/edit' face={require('@/assets/images/user.png')} />
                        <View className='v2-tit'>升V2等级条件：累积邀2位好友消费或自消费金额达到0元</View>
                        <VipCard url='/pages/getCustomer/levelOpera/edit' face={require('@/assets/images/user.png')} />
                        <AddLevel url='/pages/getCustomer/levelOpera/add' />
                        <View className='text-item'>
                            <View className='label'>权益卡激活：</View>
                            <View className='desc'>到店买单消费激活，激活后只能享受门店优惠</View>
                        </View>
                        <View className='text-item'>
                            <View className='label'>等级优惠：</View>
                            <View className='desc'>等级优惠规则修改后，已领取的等级规则不变</View>
                        </View>
                        <View className='receive-box'>
                            <View>
                                <View className='tit'>同步店铺主页领取</View>
                                <View className='desc'>关闭后只能通过分享链接领取</View>
                            </View>
                            <View>
                                <SmallSwitch isOpen={switchIsOpen} onChange={() => this.setState({ switchIsOpen: !switchIsOpen })} />
                            </View>
                        </View>
                    </ContentCard>
                    <Footer />
                </View>
                <View className='vip_footer_wrap'>
                    <View className='btn-box'><AtButton type='primary'>生成门店展示海报</AtButton></View>
                    <View className='btn-box btn-box-right'>
                        <AtButton type='primary' onClick={() => { this.setState({ isOpened: true }); }}>送权益卡激活会员</AtButton>
                    </View>
                </View>
            </View>
            {/* 浮动弹层 */}
            <FloatLayout isOpened={isOpened} onClose={this.handleClose} renderContent={
                <View onClick={() => { Taro.navigateTo({ url: '/pages/getCustomer/posterInvite/index' }) }}>
                    <IconFont name='poster' size='100' />
                    <Text>生成海报</Text>
                </View>
            }
            >
                <View className='float-layout-ad_box'>
                    <View className='ad'>
                        {adSrc ? <Image className='image' src='' mode='aspectFill' /> : <IconFont name='picture' size='48' />}
                    </View>
                </View>
            </FloatLayout>
        </Root>
    }
}