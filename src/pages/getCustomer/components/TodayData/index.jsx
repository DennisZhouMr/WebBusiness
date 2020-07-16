import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import IconFont from "@/components/iconfont";

export default class extends Component {
    static options = {
        addGlobalClass: true
    }
    render() {
        const { list = [] } = this.props;
        return <View className='getCustomer-todayData_container'>
            <View className='caption'>
                <View className='icon-box'>
                    <IconFont
                        name='gantanhao'
                        size='24'
                        color='#FDD000'
                    />
                </View>
                <Text>今日数据</Text>
            </View>
            <View className='getCustomer-todayData_main'>
                {list.map(item => <View className='item'>
                    <View className='tit'>{item.title}</View>
                    <View className='num'>{item.num}</View>
                </View>)}
            </View>
        </View>
    }
}