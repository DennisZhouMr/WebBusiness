import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components'
import ActivityCard from '@/components/ActivityCard'

import './ActivityContainer.scss'

const list = [
    {
        imgIcon: '',
        name: '活动模版名称',
        tips: '邀请会员',
        desc: '10917商家在使用',
        src: '',
        peopleNum: '6789',
        date: '2020-12-16'
    },
    {
        imgIcon: '',
        name: '活动模版名称',
        tips: '邀请会员',
        desc: '10917商家在使用',
        src: '',
        peopleNum: '6789',
        date: '2020-12-16'
    }
]
class ActivityContainer extends Component {
    static options = {
        addGlobalClass: true
    }
    render() {
        return (
            <View className='activity-container'>
                <View className='caption'>
                    <View className='tit'>活动模版</View>
                    <View className='more'>查看更多</View>
                </View>
                <View className='list'>
                    {list.map(item => <View key=''><ActivityCard data={item} /></View>)}
                </View>
            </View>
        );
    }
}

export default ActivityContainer;
