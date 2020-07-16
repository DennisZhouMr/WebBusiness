import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import './index.scss'

export default class Index extends Component {
    config = {
        // navigationBarTitleText: '电动自行车管理平台'
    };
    constructor(props) {
        super(props);
        this.state = {
            rootHeight: '',
            statusBarHeight: 0
        }
    }
    componentWillMount() {
    }
    componentDidMount() {
        let systemInfo = Taro.getSystemInfoSync();
        console.log(systemInfo);
        this.setState({
            rootHeight: systemInfo.screenHeight,
            statusBarHeight: systemInfo.statusBarHeight
        })
    }
    componentWillUnmount() {
    }
    componentDidShow() {
    }
    componentDidHide() {
    }
    render() {
        const { statusBarHeight, rootHeight } = this.state;
        const { background = {} } = this.props;
        const rootMainStyle = {
            paddingTop: (statusBarHeight + 6) + 'px',
            ...background
        }
        return (
            <View className='root' style={{ height: rootHeight + 'px' }}>
                <View className='root-main' style={rootMainStyle}>
                    {this.props.children}
                </View>
            </View>
        )
    }
}