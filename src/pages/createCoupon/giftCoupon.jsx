import Taro, { Component } from '@tarojs/taro';
import { View, Text, ScrollView, Picker } from '@tarojs/components';
import { AtForm, AtInput, AtButton } from 'taro-ui'
import IconFont from '@/components/iconfont';
import Root from '@/components/Root';
import NavBar from '@/components/NavBar';
import SmallSwitch from '@/components/SmallSwitch';
import FormList from './components/FormList';

import './index.scss'

const pickerObj = {
    timePicker: ['有效时间', '固定时间']
}

export default class extends Component {
    static options = {
        addGlobalClass: true
    }

    constructor(props) {
        super(props);
        this.state = {
            switchIsOpen: false,
            timePickerVal: '永久有效',
            startTime: '2019-06-19',
            endTime: '2019-06-20',
            goodsList: [
                { id: 1, name: 'POLOT恤', norms: '¥200.00/m码', listType: '' },
                { id: 2, name: '潘多拉', price: '1299', desc: '海洋之心醉人月夜猫眼手链', pic: require('@/assets/images/user.png'), listType: 'pic' }
            ]
        }
    }

    pickerChange = (stateKey, val) => {
        this.setState({
            [stateKey + 'Val']: pickerObj[stateKey][val]
        })
    }

    datePickerChange = (stateKey, val) => {
        this.setState({
            [stateKey]: val
        })
    }

    handleDelete = (item) => {
        const list = this.state.goodsList;
        const newList = list.filter(i => i.id !== item.id);
        this.setState({
            goodsList: newList
        })
    }

    render() {
        const { timePickerVal, startTime, endTime, switchIsOpen, goodsList } = this.state;
        return <Root background={{ background: 'linear-gradient(0deg,#f5f5f5,#ffffff)' }}>
            <View className='second-page_container'>
                <View className='second-page_caption_wrap'>
                    <NavBar title='创建优惠' isCustom>
                        <IconFont name='zujian471' size='52' />
                    </NavBar>
                </View>
                <View className='second-page_main_wrap'>
                    <ScrollView className='second-page_main_box form-container' scrollY>
                        <View className='form-tit'>礼券</View>
                        <View className='form-desc'>例：促销赠品专用提货券</View>
                        <AtForm>
                            <View className='form-item'>
                                <View className='form-label'>礼券名称</View>
                                <View className='form-input'>
                                    <AtInput name='name' placeholder='请输入' maxLength={20} />
                                </View>
                            </View>
                            <View className='form-item'>
                                <View className='form-label'>有效时间</View>
                                <Picker mode='selector' range={pickerObj.timePicker} onChange={(e) => this.pickerChange('timePicker', e.detail.value)}>
                                    <View className='form-select'>
                                        <View className='text'>{timePickerVal}</View>
                                        <View className='icon-box'><IconFont name='right' size='24' /></View>
                                    </View>
                                </Picker>
                            </View>
                            <View className='form-item'>
                                <View className='form-label'>起始日期</View>
                                <Picker mode='date' onChange={(e) => this.datePickerChange('startTime', e.detail.value)}>
                                    <View className='form-select'>
                                        <View className='text'>{startTime}</View>
                                        <View className='icon-box'><IconFont name='right' size='24' /></View>
                                    </View>
                                </Picker>
                            </View>
                            <View className='form-item'>
                                <View className='form-label'>结束日期</View>
                                <Picker mode='date' onChange={(e) => this.datePickerChange('endTime', e.detail.value)}>
                                    <View className='form-select'>
                                        <View className='text'>{endTime}</View>
                                        <View className='icon-box'><IconFont name='right' size='24' /></View>
                                    </View>
                                </Picker>
                            </View>
                            <View className='form-item no-flex'>
                                <View className='form-label'>使用规则</View>
                                <View className='form-label-desc'>满输入金额为“0”元时，为无门槛</View>
                                <View className='form-price'>
                                    <Text>满</Text>
                                    <AtInput className='no-auto-full' name='price' type='digit' value={0} />
                                    <Text>元可用</Text>
                                </View>
                            </View>
                            <View className='form-item'>
                                <View className='form-label'>赠送积分</View>
                                <View className='form-input fi-inline'>
                                    <AtInput className='no-auto-full' name='integral' type='digit' value={0} />
                                    <Text>分</Text>
                                </View>
                            </View>
                            <View className='form-item last'>
                                <View className='form-label'>赠送商品</View>
                                <View className='form-add'>+ 添加</View>
                            </View>
                            <View className='form-item last'>
                                <View className='form-label'>
                                    <View>TA人使用</View>
                                    <View className='form-label-desc no-mb'>开启后只能转赠好友使用</View>
                                    <View className='form-label-desc no-mb'>一位好友只限使用一次</View>
                                </View>
                                <View className='form-add'>
                                    <SmallSwitch isOpen={switchIsOpen} onChange={() => this.setState({ switchIsOpen: !switchIsOpen })} />
                                </View>
                            </View>
                            <View className='form-list'>
                                {goodsList.map(item => <FormList key={item.id} item={item} onDel={() => this.handleDelete(item)} />)}
                            </View>
                        </AtForm>
                    </ScrollView>
                </View>
                <View className='second-page_footer_wrap'>
                    <View className='button-position'>
                        <AtButton type='secondary' className='default-button primary-button' > 保存 </AtButton>
                    </View>
                </View>
            </View>
        </Root>
    }
}