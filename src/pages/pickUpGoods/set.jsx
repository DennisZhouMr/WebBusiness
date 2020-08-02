import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { AtCheckbox, AtButton } from 'taro-ui';
import IconFont from '@/components/iconfont';
import Root from '@/components/Root';
import NavBar from '@/components/NavBar';
import CardItem from './components/cardItem'

import './index.scss'

export default class extends Component {
    static options = {
        addGlobalClass: true
    }

    state = {
        checked: [],
        checkboxOption: [{ value: "1", label: "我已阅读并同意" }],
        couponList: []
    };

    handleCheckChange = value => {
        console.log(value);
        this.setState({ checked: value });
    };

    render() {
        const { checkboxOption, checked, couponList } = this.state;
        return <Root background={{ background: 'linear-gradient(top,#ffffff,#f5f5f5)' }}>
            <View className='second-page_container pick-up-goods-set_container'>
                <View className='second-page_caption_wrap'>
                    <NavBar title='提货点开通' textAlign='left' isCustom>
                        <IconFont name='zu1535' size='52' />
                    </NavBar>
                </View>
                <View className='second-page_main_wrap'>
                    <View className='second-page_main_box pick-up-goods-set_main_box'>
                        <View className='tit'>提货激励礼品</View>
                        <View className='desc'>为满足不同需求，礼品可以设置多个及多种类型，顾客在选择提货点时，可以查看到相应的赠品，顾客在选择相应提货点提货下单，到店取货核销完成后，赠品系统将自动派发</View>
                        <View className='tit2'>激励礼品</View>
                        <View className='dl'>
                            <View className='dt'>赠送积分</View>
                            <View className='dd'>10 积分</View>
                        </View>
                        <View className='dl no-border'>
                            <View className='dt'>券类型</View>
                            {couponList.length > 0
                                ?
                                <View className='dd'><IconFont name='zu1852' size='26' /></View>
                                :
                                <View className='select-box' onClick={()=>Taro.navigateTo({url: '/pages/createCoupon/index'})}>
                                    <View className='dd'>请选择添加</View>
                                    <View className='dd'><IconFont name='right' size='24' /></View>
                                </View>}

                        </View>

                        {couponList.length > 0 && <View>
                            {couponList.map(item => <CardItem key={item.id} item={item} />)}
                            <View className='go-on'><Text onClick={()=>Taro.navigateTo({url: '/pages/createCoupon/index'})}>+ 继续添加</Text></View>
                        </View>}

                    </View>
                </View>
                <View className='second-page_footer_wrap'>
                    <View className='button-position'>
                        <View className='check-box'>
                            <AtCheckbox options={checkboxOption} selectedList={checked} onChange={this.handleCheckChange} />
                            <Text>《用户开通线下提货点协议》</Text>
                        </View>
                        <View>
                            <AtButton type='secondary' className={`default-button ${checked[0] === '1' ? 'primary-button' : 'gray-button'}`}>开通并保存</AtButton>
                        </View>
                    </View>
                </View>
            </View>
        </Root>
    }
}