import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { AtButton, AtTabs, AtTabsPane } from 'taro-ui';
import IconFont from "@/components/iconfont";
import Root from "@/components/Root";
import NavBar from '@/components/NavBar';

import './detail.scss'

const tabList = [
    { title: '活动效果' },
    { title: '活动详情' }
]

const activeEffect = [{
    id: 1, title: '今日数据', child: [
        { id: 11, title: '发邀数(人)', num: 0 },
        { id: 12, title: '被邀人数(人)', num: 0 },
        { id: 13, title: '约定数(人)', num: 0 },
        { id: 14, title: '到店打卡(人)', num: 0 },
        { id: 15, title: '奖励礼券(张)', num: 0 },
        { id: 16, title: '奖励积分(分)', num: 0 },
    ]
},
{
    id: 2, title: '历史数据', child: [
        { id: 21, title: '总发邀数(人)', num: 0 },
        { id: 22, title: '总被邀人数(人)', num: 0 },
        { id: 23, title: '总约定数(人)', num: 0 },
        { id: 24, title: '总到店打卡(人)', num: 0 },
        { id: 25, title: '总奖励礼券(张)', num: 0 },
        { id: 26, title: '总奖励积分(分)', num: 0 },
    ]
}]

const activeDetail = [
    {
        id: 3, title: '活动规则', child: [
            { id: 31, title: '约定主题', desc: '激活有礼首单消费送双倍积分' },
            { id: 32, title: '邀约方式', desc: '分享邀约' },
            { id: 33, title: '活动周期', desc: '2020/03/04 - 2020/09/03' },
            { id: 34, title: '活动描述', desc: 'hello!活动期间，邀约好友免费领取权益卡攒积分，积分可兑换成商品，线上包邮、线下自提，激活买单打折赠积分，消费多少送多少，还能领取激活礼，快约ta加入吧！' }
        ]
    },
    {
        id: 4, title: '激励规则', child: [
            { id: 41, title: '邀约人', desc: '奖励10积分' },
            { id: 42, title: '被邀约人', desc: '奖励10积分' }
        ]
    },
    {
        id: 5, title: '打赏设置', child: [
            { id: 51, title: '打赏礼包', desc: '奖励10积分/全场8.5折券 ' },
            { id: 52, title: '获得条件', desc: '邀约人或被邀约人/到店打卡/1次获得打赏' }
        ]
    }
]

export default class extends Component {
    static options = {
        addGlobalClass: true
    }

    constructor(props) {
        super(props);
        this.state = { current: 0 }
    }

    handleClick(value) {
        this.setState({
            current: value
        })
    }

    render() {
        const { current } = this.state;
        return <Root background={{ background: 'linear-gradient(top,#ffffff,#f5f5f5)' }}>
            <View className='second-page_container interact-detail_container'>
                <View className='second-page_caption_wrap'>
                    <NavBar title='约定活动' isCustom>
                        <IconFont name='zujian471' size='60' onClick={()=>Taro.navigateBack()} />
                    </NavBar>
                </View>
                <View className='second-page_main_wrap'>
                    <View className='second-page_main_box'>
                        <View className='interact-detail_title'>活动进行中</View>
                        <View className='interact-detail_desc'>活动为期 180 天，当前第 1 天</View>
                        <AtTabs current={current} tabList={tabList} onClick={this.handleClick.bind(this)}>
                            <AtTabsPane current={current} index={0} >
                                {activeEffect.map(item => <View className='effect-dl' key={item.id}>
                                    <View className='dt'>{item.title}</View>
                                    <View className='at-row dd-box'>
                                        {item.child.map(sItem => <View className='dd' key={sItem.id}>
                                            <View className='num'>{sItem.num}</View>
                                            <View className='text'>{sItem.title}</View>
                                        </View>)}
                                    </View>
                                </View>)}
                            </AtTabsPane>
                            <AtTabsPane current={current} index={1}>
                                {activeDetail.map(item => <View className='detail-dl' key={item.id}>
                                    <View className='dt'>{item.title}</View>
                                    <View className='dd-box'>
                                        {item.child.map(sItem => <View className='dd' key={sItem.id}>
                                            <View className='tit'>{sItem.title}</View>
                                            <View className='desc'>{sItem.desc}</View>
                                        </View>)}
                                    </View>
                                </View>)}
                            </AtTabsPane>
                        </AtTabs>
                    </View>
                </View>
                <View className='second-page_footer_wrap'>
                    <View className='button-position'>
                        {/* <AtButton type='secondary' className='default-button primary-button'>预览活动</AtButton> */}
                        <AtButton type='secondary' className='default-button end-button'>结束</AtButton>
                    </View>
                </View>
            </View>
        </Root>
    }
}