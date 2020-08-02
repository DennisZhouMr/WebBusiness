import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtAvatar, AtIcon } from 'taro-ui'

import userDefaultPic from '@/assets/images/userDefault.png'

import './index.scss'

class index extends Component {
    render() {
        const { src, text1, text2 } = this.props;
        return (
            <View className='account-info'>
                <View className='item'><AtAvatar className='account-info_avatar' image={src ? src : userDefaultPic} size='small'></AtAvatar></View>
                <View className='item'>
                    <View className='text1'>{text1 || '-'}</View>
                    <View className='text2'>
                        <Text>{text2} </Text>
                        <AtIcon value='chevron-down' size='16'></AtIcon>
                    </View>
                </View>
            </View>
        );
    }
}

export default index;
