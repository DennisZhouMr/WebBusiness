import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import IconFont from '@/components/iconfont';

export default class extends Component {
    static options = {
        addGlobalClass: true
    }

    handleClick = url => {
        if (url) Taro.navigateTo({ url })
    }

    render() {
        const { item = {}, onDel } = this.props;
        if (item.listType) {
            return <View className='fl-item fl-pic-item'>
                <View className='pic-box'>
                    {item.pic ?
                        <Image src={item.pic} mode='aspectFill' />
                        :
                        <IconFont name='picture' size='24' />
                    }
                </View>
                <View className='fl-size'>
                    <View className='flp-name'>{item.name}</View>
                    <View className='flp-desc'>{item.desc}</View>
                    <View className='flp-price'>
                        <Text>价值</Text>
                        <Text className='flp-num'>{item.price}</Text>
                        <Text className='flp-tip' decode>1件</Text>
                    </View>
                </View>
                <View className='fl-icon' onClick={onDel}>
                    <IconFont name='zu1852' size='24' />
                </View>
            </View >
        }
        return <View className='fl-item'>
            <View className='fl-name'>{item.name}</View>
            <View className='fl-size'>{item.norms}</View>
            <View className='fl-icon' onClick={onDel}>
                <IconFont name='zu1852' size='24' />
            </View>
        </View>
    }
}
