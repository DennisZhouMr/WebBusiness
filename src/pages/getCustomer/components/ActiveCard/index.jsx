import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { AtButton } from "taro-ui";

export default class extends Component {
    static options = {
        addGlobalClass: true
    }

    render() {
        const { item = {} } = this.props;
        return <View className='getCustomer-active_container' onClick={this.props.onSkipUrl}>
            <View className='tit'>
                <View>{item.title}</View>
                <AtButton className='default-button'>分享邀约</AtButton>
            </View>
            <View className='desc'>
                <View>
                    <Text>{item.desc}</Text>
                </View>
                <View>
                    <AtButton type='secondary'>分享活动</AtButton>
                </View>
            </View>
            <View className='time'>{item.time}</View>
            <View className='tip'>系统创建</View>
        </View>
    }
}