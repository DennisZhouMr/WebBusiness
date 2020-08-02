import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

class TabBar extends Component {
  static options = {
    addGlobalClass: true
  }

  componentWillMount() { }

  componentWillReact() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    const { tabList = [], current = 0 } = this.props;
    return (
      <View className='tab-bar'>
        {tabList.length > 0 && tabList.map((item, index) => <View className={`item ${index === current ? 'active' : ''}`} key=''>{item.title}</View>)}
      </View>
    )
  }
}

export default TabBar 
