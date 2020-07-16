import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import IconFont from "@/components/iconfont";
import { AtButton } from 'taro-ui'

import './index.scss'

class AdvertItem extends Component {
    static options = {
        addGlobalClass: true
    }
    render() {
        const { data = {} } = this.props;
        return (
            <View className='advert-item'>
                <View className='number'><View className={`text ${data.btnType}`}>{data.num}</View></View>
                <View className='advert-main'>
                    <View className='img'>
                        <IconFont name={data.icon} size={data.size} />
                    </View>
                    <View className='title ellipsis'>{data.title}</View>
                    <View className='desc ellipsis'>{data.desc}</View>
                    <View className={`special ellipsis color-${data.btnType}`}>{data.special}</View>
                    <View className='btn'>
                        <AtButton className={`${data.btnType}`} type='primary' circle size='small'>未解锁</AtButton>
                    </View>
                </View>
            </View>
        );
    }
}

export default AdvertItem;
