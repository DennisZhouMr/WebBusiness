import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import IconFont from "@/components/iconfont";
import { AtButton } from 'taro-ui'

class ActivityCard extends Component {
    static options = {
        addGlobalClass: true
    }
    render() {
        const { data = {} } = this.props;
        return (
            <View className='activity-card'>
                <View className='caption'>
                    <View><View className='img-icon'>
                        <IconFont name='huodongmoban' size={60} />
                    </View></View>
                    <View className='text'>
                        <View className='title'>{data.name}</View>
                        <View className='tips'>{data.tips}</View>
                        <View className='desc'>{data.desc}</View>
                    </View>
                    <View className='btn'>
                        <AtButton className='green' type='primary' circle size='small' >使用同款活动</AtButton>
                    </View>
                </View>
                <View className='img-box'>
                    {data.src ? <Image className='image' src={data.src} mode='widthFix' /> : <IconFont name='picture' size={48} color='#848484' />}
                </View>
                <View className='info-box'>
                    <View>统计引流注册会员：6789人</View>
                </View>
            </View>
        );
    }
}

export default ActivityCard;
