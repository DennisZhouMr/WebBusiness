import Taro, { Component } from '@tarojs/taro';
import { View, Button } from '@tarojs/components';
import { AtButton } from 'taro-ui';
import IconFont from '@/components/iconfont';
import './index.scss'

export default class extends Component {
    static options = {
        addGlobalClass: true
    }

    handleClick = url => {
        if (url) Taro.navigateTo({ url })
    }

    render() {
        const { item = {} } = this.props;
        return <View className='coupon-create-card_item'>
            <View className='icon-box' style={{ backgroundColor: item.backColor }}>
                <IconFont name={item.icon} size='60' color='#ffffff' />
            </View>
            <View className='text-box'>
                <View className='card-tit'>{item.title}</View>
                <View className='card-desc'>{item.desc}</View>
            </View>
            <View className='btn'>
                <Button className='default-button gray-button' onClick={() => this.handleClick(item.url)}>去添加</Button>
            </View>
        </View>
    }
}