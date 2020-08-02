import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components'
import { AtButton, AtIcon } from 'taro-ui'

class IntegralContainer extends Component {
    static options = {
        addGlobalClass: true
    }

    render() {
        const { usable = 2000 } = this.props;
        return (
            <View className='integral-container'>
                <View className='integral-wrap'>
                    <AtIcon prefixClass='icon' value='jifen' size='18' color='#000' />
                    <View className='progress-wrap'>
                        <View className='progress-box'>
                            <View className='progress'>
                                <View className='circle'></View>
                                <View className='line'></View>
                                <View className='circle'></View>
                                <View className='progress' style={{ width: ((usable / 8000) * 100) + '%', overflow: 'hidden' }}>
                                    <View className='circle'></View>
                                    <View className='line'></View>
                                    <View className='circle2'></View>
                                </View>
                            </View>
                        </View>
                        <View className='progress-text'>
                            <View className='text1'>可用积分：2000</View>
                            <View>冻结积分：0</View>
                        </View>
                    </View>
                    <View className='btn-wrap item'>
                        <AtButton type='primary' circle size='small' className='black progress-btn'>查看</AtButton>
                    </View>
                </View>
            </View>
        );
    }
}

export default IntegralContainer;
