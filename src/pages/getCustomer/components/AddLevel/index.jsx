import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import IconFont from "@/components/iconfont";

export default class extends Component {
    static options = {
        addGlobalClass: true
    }

    skipUrl = () => {
        if (!this.props.url) return;
        Taro.navigateTo({
            url: this.props.url
        })
    }
    render() {
        const { text = '添加等级' } = this.props;
        return <View className='getCustomer-addLevel_container' onClick={this.skipUrl}>
            <IconFont name='plus' size='24' color='#FF3F81' />
            <View className='text'>{text}</View>
        </View>
    }
}