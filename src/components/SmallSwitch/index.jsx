import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {
    static options = {
        addGlobalClass: true
    }
    config = {
        // navigationBarTitleText: '电动自行车管理平台'
    };
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { isOpen } = this.props;
        return (
            <View className={`small-switch ${isOpen ? 'active' : ''}`} onClick={this.props.onChange}>
                <View className='circle'></View>
            </View>
        )
    }
}