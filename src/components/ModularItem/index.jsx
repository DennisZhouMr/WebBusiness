import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import IconFont from "@/components/iconfont";
import { AtIcon } from 'taro-ui'

import './index.scss'

class ModularItem extends Component {
    static options = {
      addGlobalClass: true
    }
    render() {
        const { icon, title = '', desc = '', isRight = false } = this.props;
        return (
            <View className='modular-item'>
                {isRight ?
                    <View className='right item'>
                        <View className='mr-16'>
                            <View className='title'>{title}</View>
                            <View className='desc'>{desc}</View>
                        </View>
                        <IconFont name={icon} size={48} color='#000' />
                    </View>
                    :
                    <View className='item'>
                        <IconFont name={icon} size={48} color='#000' />
                        <View className='ml-16'>
                            <View className='title'>{title}</View>
                            <View className='desc'>{desc}</View>
                        </View>
                    </View>
                }

            </View>
        );
    }
}

export default ModularItem;
