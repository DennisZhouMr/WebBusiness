import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { AtButton, AtTabs, AtTabsPane } from 'taro-ui';
import IconFont from "@/components/iconfont";
import Root from "@/components/Root";
import NavBar from '@/components/NavBar';
import ActiveCard from '../components/ActiveCard'

import './active.scss'

const tabList = [
    {
        title: '进行中', list: [
            { id: 1, title: '邀约好友Ta去领取专属权益卡', desc: '邀约人或被邀约人\n到店打卡/1次获得打赏', time: '2020/02/05-2020/03/05 23:59前' },
            { id: 2, title: '邀约好友Ta去领取专属权益卡', desc: '邀约人或被邀约人\n到店打卡/1次获得打赏', time: '2020/02/05-2020/03/05 23:59前' }
        ]
    },
    {
        title: '已结束', list: [
            { id: 3, title: '邀约好友Ta去领取专属权益卡', desc: '邀约人或被邀约人\n到店打卡/1次获得打赏', time: '2020/02/05-2020/03/05 23:59前' }
        ]
    },
]

export default class extends Component {
    static options = {
        addGlobalClass: true
    }

    constructor(props) {
        super(props);
        this.state = {
            current: 0
        }
    }

    handleClick(value) {
        this.setState({
            current: value
        })
    }

    render() {
        const { current } = this.state;
        return <Root background={{ background: 'linear-gradient(top,#ffffff,#f5f5f5)' }}>
            <View className='second-page_container interact-active_container'>
                <View className='second-page_caption_wrap'>
                    <NavBar title='约定管理' textAlign='left' isCustom>
                        <IconFont name='zu2896' size='40' />
                    </NavBar>
                </View>
                <View className='second-page_main_wrap'>
                    <View className='second-page_main_box interact-active_main_box'>
                        <View className='interact-active_caption'>
                            <View className='icon-box'>
                                <IconFont
                                    name='gantanhao'
                                    size='24'
                                    color='#FDD000'
                                />
                            </View>
                            <Text>营销管理</Text>
                        </View>
                        <View>
                            <AtTabs current={current} tabList={tabList} onClick={this.handleClick.bind(this)}>
                                <AtTabsPane current={current} index={0} >
                                    {tabList[0].list.map(item => <ActiveCard onSkipUrl={() => Taro.navigateTo({ url: '/pages/getCustomer/interact/detail' })} key={item.id} item={item} />)}
                                </AtTabsPane>
                                <AtTabsPane current={current} index={1}>
                                    {tabList[1].list.map(item => <ActiveCard onSkipUrl={() => Taro.navigateTo({ url: '/pages/getCustomer/interact/detail' })} key={item.id} item={item} />)}
                                </AtTabsPane>
                            </AtTabs>
                        </View>
                    </View>
                </View>
                <View className='second-page_footer_wrap'>
                    <View className='resend-button-position button-position'>
                        <AtButton type='secondary' className='default-button'>返回 </AtButton>
                    </View>
                </View>
            </View>
        </Root>
    }
}