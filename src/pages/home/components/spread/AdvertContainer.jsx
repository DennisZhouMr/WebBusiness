import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components'
import AdvertItem from '@/components/AdvertItem'

import './AdvertContainer.scss'

const advertArr = [
    { icon: 'huiyuanliebian', size: 68, title: '会员裂变', desc: '准会员裂变转化', special: '会员营销裂变模式', btnType: 'green', url: '/pages/getCustomer/vip/index' },
    { icon: 'xiaofeifanli', size: 64, title: '消费返利', desc: '满足不同需求', special: '有效减低成本', btnType: 'purple', url: '/pages/getCustomer/rebate/index' },
    { icon: 'hudongyueding', size: 66, title: '互动约定', desc: '发挥你的想象力', special: '获取多场景私域流量', btnType: 'yellow', url: '/pages/getCustomer/interact/index' },
]
class AdvertContainer extends Component {
    static options = {
        addGlobalClass: true
    }

    skipUrl = (url) => {
        Taro.navigateTo({
            url: url
        })
    }
    render() {
        return (
            <View className='advert-container'>
                <View className='caption'>获客引流</View>
                <View className='advert-wrap'>
                    {advertArr.map((item, index) => <View key='' className='advert-item-box' onClick={() => this.skipUrl(item.url)}><AdvertItem data={{ ...item, num: '0' + (index + 1) }} /></View>)}
                </View>
            </View>
        );
    }
}

export default AdvertContainer;
