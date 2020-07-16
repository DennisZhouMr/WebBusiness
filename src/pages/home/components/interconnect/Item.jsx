import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import CardItem from '@/components/CardItem'

import './Item.scss'

class interconnectIndex extends Component {
    static options = {
        addGlobalClass: true
    }

    componentWillMount() { }

    componentWillReact() {
        console.log('componentWillReact')
    }

    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }

    handleClick = (url) => {
        if (url) Taro.navigateTo({ url })
    }

    render() {
        const { desc = [], data = [] } = this.props;
        return (
            <View className='item'>
                <View className='caption'>
                    {desc.length > 0 && desc.map(item => <View key=''>{item}</View>)}
                </View>
                <View>
                    {data.length > 0 && data.map(item => <CardItem key='' data={item} onItemClick={() => this.handleClick(item.url)} />)}
                </View>
            </View>
        )
    }
}

export default interconnectIndex 
