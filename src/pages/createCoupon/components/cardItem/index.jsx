import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { AtButton } from 'taro-ui';
import IconFont from '@/components/iconfont';

export default class extends Component {
    static options = {
        addGlobalClass: true
    }

    handleClick = url => {
        if (url) Taro.navigateTo({ url })
    }

    render() {
        const { item = {} } = this.props;
        return <View className='coupon-create-card_item' onClick={() => this.handleClick(item.url)}>
            <View className='icon-box' style={{ backgroundColor: item.backColor }}>
                <IconFont name={item.icon} size='60' color='#ffffff' />
            </View>
            <View className='text-box'>
                <View className='card-tit'>{item.title}</View>
                <View className='card-desc'>{item.desc}</View>
            </View>
            <View className='btn'>
                <AtButton className='default-button gray-button' onClick={() => this.handleClick(item.url)}>去创建</AtButton>
            </View>
        </View>
    }
}