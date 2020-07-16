import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { AtButton, AtSwitch, AtTextarea } from 'taro-ui';
import Root from '@/components/Root';
import NavBar from '@/components/NavBar'
import IconFont from "@/components/iconfont";
import SmallSwitch from '@/components/SmallSwitch';

import './index.scss'

const mockData = [
    '#FDD000', '#8B5E3C', '#FB8618', '#C3C3C3', '#E31C2C', '#FB5427', '#FF3F81',
    '#7243B3', '#AE6BCF', '#229E8E', '#2BAF51', '#1C75BC', '#27AAE1', '#434343'
]

export default class extends Component {
    static options = {
        addGlobalClass: true
    }

    constructor(props) {
        super(props);
        this.state = {
            cardColor: '#FDD000',
            value: '1、买单消费即赠积分，买多少就送多少，不限次数\n2、积分可用来抵扣也可免费兑换好物满足你不同需求\n3、会员权益解释权归商家所有',
            switchIsOpen: false
        }
    }

    handleChange(value) {
        this.setState({
            value
        })
    }

    setColor = (val) => {
        this.setState({
            cardColor: val
        })
    }

    render() {
        const { value, cardColor, switchIsOpen } = this.state;
        return <Root background={{ background: '#ffffff' }}>
            <View className='rebate-set_container'>
                <View className='rebate-set_caption_wrap'>
                    <NavBar title='设置消费权益' iconType='zujian471' iconSize='60' iconColor='#ffffff' isCustom>
                        <IconFont name='zujian471' size='60' />
                    </NavBar>
                </View>
                <View className='rebate-set_main_wrap'>
                    <View className='rebate-set_main_box'>
                        <View className='font-4 tit'>积分返利</View>
                        <View className='li border-bottom flex rule-box'>
                            <View>
                                <View className='font-3'>积分返利规则<Text className='font-1'>(系统默认)</Text></View>
                                <View className='font-1'>赠送积分值等于买单实付金额</View>
                            </View>
                            <View className='flex-shrink font-3'>消费 1 元 赠送 1 积分</View>
                        </View>
                        <View className={`li flex ${(!switchIsOpen) && 'border-bottom'}`}>
                            <View className='flex1 font-3'>自定义卡片颜色</View>
                            <View className='flex-shrink'>
                                <SmallSwitch isOpen={switchIsOpen} onChange={() => this.setState({ switchIsOpen: !switchIsOpen })} />
                            </View>
                        </View>
                        {switchIsOpen &&
                            <View className='set-card-style-box'>
                                <View className='rebate-card'>
                                    <View className='rebate-card_caption' style={{ backgroundColor: cardColor }}></View>
                                    <View className='rebate-card_main'></View>
                                </View>
                                <View>纯色系</View>
                                <View className='color-box'>
                                    {mockData.map(item => <View className='circle-color-box'>
                                        <View className='circle-color' onClick={() => this.setColor(item)} style={{ backgroundColor: item }}></View>
                                        {/* <view className='circle-color'></view> */}
                                    </View>)}
                                    {/* {mockData.map(item => )} */}
                                </View>
                            </View>
                        }
                        <View className='rebate-set-textarea_box'>
                            <View className='t-tit font-4'>消费权益说明</View>
                            <AtTextarea value={value} onChange={this.handleChange.bind(this)} maxLength={1000} />
                        </View>
                    </View>
                </View>
                <View className='rebate-set_footer_wrap'>
                    <View className='button-position'>
                        <AtButton type='secondary' className='default-button primary-button' > 保存 </AtButton>
                    </View>
                </View>
            </View>
        </Root>
    }
}