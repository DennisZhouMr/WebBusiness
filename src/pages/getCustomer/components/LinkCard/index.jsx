import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import IconFont from "@/components/iconfont";

export default class extends Component {
    static options = {
        addGlobalClass: true
    }
    render() {
        const { title = 0, icon = 0, rightText = 0 } = this.props;
        return <View className='getCustomer-linkCard_container'>
            <View className='icon-box'>
                <IconFont
                    name={icon}
                    size='80'
                />
            </View>
            <View className='tit ellipsis'>{title}</View>
            <View className='right-text'>{rightText}</View>
            <View className='arrow-right'>
                <IconFont
                    name='right'
                    size='18'
                    color='#434343'
                />
            </View>
        </View>
    }
}