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
import AddLevel from '../components/AddLevel'
import ModalProp from '@/components/Modal'

import './index.scss'

const tadayMockData = [
    { title: '发邀人数', num: 0 },
    { title: '约定人数', num: 0 },
    { title: '到店人数', num: 0 },
]

export default class extends Component {
    static options = {
        addGlobalClass: true
    }

    constructor(props) {
        super(props);
        this.state = {
            ModalPropStatus: false
        }
    }

    handleConfirm = () => {
        this.setState({ ModalPropStatus: false });
    }

    render() {
        const contentProps = {
            title: '互动体验引流',
            desc: '不同节点之间获取权益，增强体验互动、消费增值建立信任机制的商圈系统\n特点：去中心化、共享、自治性',
            step: '03',
            btnText: '营销活动',
            btnUrl: '/pages/getCustomer/interact/active',
            smallTit: '互动约定发布',
            smallIcon: 'zu1673',
            specialTit: '约定活动*',
            specialDesc: '提升黏性'
        }
        const { ModalPropStatus } = this.state;
        return <Root background={{ background: `url(${require('@/assets/images/back.png')}) #f5f5f5 no-repeat 0 0` }}>
            <View className='interact_container'>
                <View className='interact_caption_wrap'>
                    <Caption title='互动活动' icon='hudongyueding' iconSize='36' iconColor='#000000' backColor='#FB8618' borderColor='#F7CB02' />
                </View>
                <View className='interact_main_wrap'>
                    <TodayData list={tadayMockData} />
                    <LinkCard icon='zu4772' title='浏览人数' rightText='所有人数' />
                    <ContentCard {...contentProps}>
                        <View className='interact-card'>
                            <View className='interact-card_caption'>
                                <View>邀约方式：邀约好友</View>
                                <View className='edit-text' onClick={() => Taro.navigateTo({ url: '/pages/getCustomer/interact/edit' })}>编辑模版</View>
                            </View>
                            <View className='interact-card_main'>
                                <View className='mb-20'>
                                    <View className='tit'>约定事宜</View>
                                    <View className='s-tit'>邀约好友Ta去领取专属权益卡</View>
                                    <View className='desc'>hello!活动期间，邀约好友免费领取权益卡攒积分，积分可兑换成商品，线上包邮、线下自提，激活买单打折赠积分，消费多少送多少，还能领取激活礼，快约ta加入吧！</View>
                                </View>
                                <View className='mb-20'>
                                    <View className='tit'>活动周期</View>
                                    <View className='desc'>2020/02/05-2020/03/05 23:59前</View>
                                </View>
                            </View>
                            <View className='interact-card_foot'>
                                <View className='btn-box'><AtButton type='primary' onClick={()=>Taro.navigateTo({url: '/pages/getCustomer/interact/resend'})}>预览活动</AtButton></View>
                                <View className='btn-box btn-box-right'><AtButton type='primary' onClick={() => this.setState({ ModalPropStatus: true })} >提交发布</AtButton></View>
                            </View>
                        </View>
                        <AddLevel url='/pages/getCustomer/interact/edit' text='添加约定' />
                        <View className='text-item'>
                            <Text className='label'>约定活动：</Text>
                            <Text className='desc'>约定活动发布，相当于商家信誉，需要商家严格守约，活动分帮我约、邀约Ni、一起约三种约定方式，可以分到店打卡或上传凭证两种模式来执行约定事项，通过三种约定方式和两种执行模式组合使用，可以涵盖多种线上及线下应用场景，结合您经营的行业属性，可以充分发挥您的想象力来调动粉丝的互动，</Text>
                            <Text className='font-bold'>设置参数后先预览再发布，发布后不能修改</Text>
                        </View>
                        <View className='text-item'>
                            <Text className='label'>约定事宜：</Text>
                            <Text className='desc'>精简表达约定的内容，活动描述体现出你的营销约定所达成的目的</Text>
                        </View>
                        <View className='text-item'>
                            <Text className='label'>活动周期：</Text>
                            <Text className='desc'>在活动周期内停止活动，在停止前已约定成功的约定活动未到活动截止日期的继续有效。</Text>
                        </View>
                    </ContentCard>
                    <Footer />
                </View>
                <View className='interact_footer_wrap'>
                    <View className='btn-box'><AtButton type='primary'>约定管理</AtButton></View>
                </View>
                <ModalProp isOpened={ModalPropStatus} iconTyle='gantanhao' iconColor='#FF3F81' iconSize={110} isGroup groupContent={['取消', '确定']} title='确定发布' onConfirm={this.handleConfirm} onCancel={() => this.setState({ ModalPropStatus: false })}>
                    <View className='vip-modal-main_box'>
                        <View>建议先预览活动再发布</View>
                        <View>发布后不能修改</View>
                    </View>
                </ModalProp>
            </View>
        </Root>
    }
}