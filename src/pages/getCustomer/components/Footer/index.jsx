import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";

export default class extends Component {
    static options = {
        addGlobalClass: true
    }
    render() {
        return <View className='getCustomer-footer_container'>
            <Text>活动设置疑问？</Text>
            <Text className='text2'>点这里获取帮助</Text>
        </View>
    }
}