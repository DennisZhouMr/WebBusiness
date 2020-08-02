import Taro, { Component } from '@tarojs/taro';
import { View, Input, Text, ScrollView } from '@tarojs/components';
import { AtButton, AtTextarea, AtActionSheet, AtActionSheetItem } from 'taro-ui';
import Root from '@/components/Root';
import NavBar from '@/components/NavBar'
import IconFont from '@/components/iconfont';
import ModalProp from '@/components/Modal'
import SmallSwitch from '@/components/SmallSwitch';

import './index.scss'

const mockSelectList = [
    { val: '1月' },
    { val: '3月' },
    { val: '6月' },
    { val: '1年' },
    { val: '2年' },
    { val: '3年' },
]

export default class extends Component {
    static options = {
        addGlobalClass: true
    }

    constructor(props) {
        super(props);
        this.state = {
            isTimeSelect: false,
            time: '1年',
            isOpened: false,
            switchIsOpen: false,
            switchIsOpenCardStyle: false,
            activeVal: '本店推出了消费多少送多少活动（送积分，积分可以免费兑换商品）\n1、到店激活可享优惠权益，活动期间赠送激活礼\n2、会员权益解释权归商家所有'
        }
    }

    showChoiceTime = () => {
        this.setState({ isTimeSelect: true })
    }

    hideChoiceTime = () => {
        this.setState({ isTimeSelect: false })
    }

    selectClick = (val) => {
        this.setState({
            isTimeSelect: false,
            time: val
        })
    }

    handleConfirm = () => {
        this.setState({ isOpened: false });
    }

    handleChange(value) {
        this.setState({
            activeVal: value
        })
    }

    render() {
        const { isTimeSelect, time, isOpened, switchIsOpen, switchIsOpenCardStyle, activeVal } = this.state;
        return <Root background={{ background: '#ffffff' }}>
            <View className='editLevel_container'>
                <View className='editLevel_caption_wrap'>
                    <NavBar title='添加会员等级' iconType='zujian471' iconSize='60' iconColor='#ffffff' isCustom>
                        <IconFont name='zujian471' size='60' />
                    </NavBar>
                </View>
                <View className='editLevel_main_wrap'>
                    <ScrollView className='editLevel_main_box' scrollY>
                        <View className='flex'>
                            <View className='font-1 flex1'>*该等级有0个会员</View>
                            <View className='font-2' onClick={() => this.setState({ isOpened: true })}>删除</View>
                        </View>
                        <View className='ul'>
                            <View className='li flex font-3 border-bottom'>
                                <View className='flex1'>等级名称</View>
                                <View className='flex-shrink font-3'>V3权益卡</View>
                            </View>
                            <View className='font-4 pt-32'>自动升级条件</View>
                            <View className='font-1'>满足以下任意一种条件</View>
                            <View className='li flex border-bottom'>
                                <View className='flex1 font-3'>累积邀请消费人数</View>
                                <View className='flex-shrink font-3'>
                                    <Input className='input' placeholder='请输入邀请人数' />
                                </View>
                            </View>
                            <View className='li flex border-bottom'>
                                <View className='flex1 font-3'>自消费金额达到</View>
                                <View className='flex-shrink font-3'>
                                    <View className='flex'>
                                        <Input placeholder='请输入金额' className='input' />
                                        <Text className='font-3'>元</Text>
                                    </View>
                                </View>
                            </View>
                            <View className='li border-bottom'>
                                <View className='flex mb-20'>
                                    <View className='flex1 font-3'>可享优惠</View>
                                    <View className='flex-shrink font-3'>整单折扣</View>
                                </View>
                                <View className='flex'>
                                    <View className='flex1 font-3'>折扣</View>
                                    <View className='flex-shrink font-4'>0.0  折</View>
                                </View>
                            </View>
                            <View className='li edit-level-time_box border-bottom'>
                                <View className='edit-level-time_left'>
                                    <View className='font-3'>设置会员卡有效期</View>
                                    <View className='font-1'>会员卡自领卡之日开始有效时间，过期后会员等级重置需店主手动延期激活会员</View>
                                </View>
                                <View className='edit-level-time_right' onClick={this.showChoiceTime}>
                                    <View className='flex-shrink font-3'>{time}</View>
                                    <View className='flex-shrink'>
                                        <IconFont name='right' size='20' color='#434343' />
                                    </View>
                                </View>
                            </View>
                            <View className='li flex border-bottom'>
                                <View className='flex1'>
                                    <View className='font-3'>激活必填手机号</View>
                                    <View className='font-7'>打开后，会员买单享折扣需要填写手机号码</View>
                                </View>
                                <View className='flex-shrink'>
                                    <SmallSwitch isOpen={switchIsOpen} onChange={() => this.setState({ switchIsOpen: !switchIsOpen })} />
                                </View>
                            </View>
                            <View className='li flex border-bottom'>
                                <View className='flex1 font-3'>自定义卡片样式</View>
                                <View className='flex-shrink'>
                                    <SmallSwitch isOpen={switchIsOpenCardStyle} onChange={() => this.setState({ switchIsOpenCardStyle: !switchIsOpenCardStyle })} />
                                </View>
                            </View>
                            <View className='edit-level-card_box'>
                                <View className='edit-level-card_caption'>
                                    <Text className='font-4'>温馨提示</Text>
                                    <Text className='font-3'>（在店铺详情页展现）</Text>
                                </View>
                                <AtTextarea className='edit-level-card_main font-6' placeholder='请输入活动描述' value={activeVal} onChange={this.handleChange.bind(this)} maxLength={1000} />
                            </View>
                        </View>
                    </ScrollView>
                </View>
                <View className='editLevel_footer_wrap'>
                    <View className='button-position'>
                        <AtButton type='secondary' className='default-button primary-button' > 保存 </AtButton>
                    </View>
                </View>
                <AtActionSheet isOpened={isTimeSelect} title='请选择' onCancel={this.hideChoiceTime} >
                    {mockSelectList.map(item => <AtActionSheetItem onClick={() => this.selectClick(item.val)}>
                        <Text className={(item.val === time) ? 'active' : ''}>{item.val}</Text>
                    </AtActionSheetItem>)}
                </AtActionSheet>
                <ModalProp isOpened={isOpened} iconTyle='gantanhao' iconColor='#FF3F81' iconSize={110} isGroup groupContent={['取消', '确定']} title='删除权益等级' onConfirm={this.handleConfirm} onCancel={() => this.setState({ isOpened: false })}>
                    <View className='vip-modal-main_box'>
                        <View>确定删除进阶等级</View>
                        <View>会员权益将无法进阶</View>
                        <View>请谨慎操作！</View>
                    </View>
                </ModalProp>
            </View>
        </Root>
    }
}