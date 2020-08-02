import Taro, { Component } from '@tarojs/taro';
import { View, Text, ScrollView, Picker, Image } from '@tarojs/components';
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

const initialList = [
    { id: 1, name: 'POLOT恤', norms: '¥200.00/m码', listType: '' },
    { id: 2, name: '潘多拉', price: '1299', desc: '海洋之心醉人月夜猫眼手链', pic: require('@/assets/images/user.png'), listType: 'pic' }
]

export default class extends Component {
    static options = {
        addGlobalClass: true
    }

    constructor(props) {
        super(props);
        this.state = {
            timePickerVal: '永久有效',
            startTime: '2019-06-19',
            endTime: '2019-06-20',
            joinList: [],
            giveList: [],
            fullReduceList: [],
            buySwtich: true,
            fullSwitch: false
        }
    }

    componentDidMount() {
        this.setState({
            joinList: initialList,
            giveList: initialList,
            fullReduceList: initialList
        })
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

    handleDelete = (stateKey, item) => {
        const list = this.state[stateKey];
        const newList = list.filter(i => i.id !== item.id);
        this.setState({
            [stateKey]: newList
        })
    }

    switchChange = () => {
        this.setState((state) => ({
            buySwtich: !state.buySwtich,
            fullSwitch: !state.fullSwitch
        }))
    }

    render() {
        const { timePickerVal, startTime, endTime, joinList, giveList, fullReduceList, buySwtich, fullSwitch } = this.state;
        return <Root background={{ background: 'linear-gradient(0deg,#f5f5f5,#ffffff)' }}>
            <View className='second-page_container'>
                <View className='second-page_caption_wrap'>
                    <NavBar title='创建优惠' isCustom>
                        <IconFont name='zujian471' size='52' />
                    </NavBar>
                </View>
                <View className='second-page_main_wrap'>
                    <ScrollView className='second-page_main_box form-container' scrollY>
                        <View className='form-tit'>买赠</View>
                        <View className='form-desc'>例：买二赠三</View>
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
                                <View className='form-item-sb'>
                                    <View className='form-label'>购买 1 份  赠送 1 份</View>
                                    <View className='form-add'>
                                        <SmallSwitch isOpen={buySwtich} onChange={this.switchChange} />
                                    </View>
                                </View>
                                <View className='form-item-sb no-mb'>
                                    <View className='form-label'>参与活动的商品</View>
                                    <View className={`form-add ${(!buySwtich) && 'form-add-disabled'}`}>+ 添加</View>
                                </View>
                                <View className='form-list'>
                                    {joinList.map(item => <FormList key={item.id} item={item} onDel={() => this.handleDelete('joinList', item)} />)}
                                </View>
                                <View className='form-item-sb no-mb'>
                                    <View className='form-label'>赠送商品</View>
                                    <View className={`form-add ${(!buySwtich) && 'form-add-disabled'}`}>+ 添加</View>
                                </View>
                                <View className='form-list'>
                                    {giveList.map(item => <FormList key={item.id} item={item} onDel={() => this.handleDelete('giveList', item)} />)}
                                </View>
                            </View>
                            <View className='form-item no-flex last'>
                                <View className='form-item-sb'>
                                    <View className='form-label'>
                                        <View>满 0 元  赠送 1 份</View>
                                        <View className='form-label-desc no-mb'>0则无门槛</View>
                                    </View>
                                    <View className='form-add'>
                                        <SmallSwitch isOpen={fullSwitch} onChange={this.switchChange} />
                                    </View>
                                </View>
                                <View className='form-item-sb no-mb'>
                                    <View className='form-label'>赠送商品</View>
                                    <View className={`form-add ${(!fullSwitch) && 'form-add-disabled'}`}>+ 添加</View>
                                </View>
                                <View className='form-list'>
                                    {fullReduceList.map(item => <FormList key={item.id} item={item} onDel={() => this.handleDelete('fullReduceList', item)} />)}
                                </View>
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