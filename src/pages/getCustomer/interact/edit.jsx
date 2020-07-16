import Taro, { Component } from '@tarojs/taro';
import { View, Input, Picker, ScrollView } from '@tarojs/components';
import { AtButton, AtTextarea, AtImagePicker, AtTag } from 'taro-ui';
import Root from '@/components/Root';
import NavBar from '@/components/NavBar'
import IconFont from '@/components/iconfont';
import SmallSwitch from '@/components/SmallSwitch';

import './edit.scss'

const mockData = {
    wayList: [{ id: 1, name: '分享邀约' }, { id: 2, name: '店铺邀请' }],
    doneWayList: ['到店打卡', '上传凭证'],
    wayPersonal: ['任意一人', '邀约人', '被邀约人', '各自打卡']
}

export default class extends Component {
    static options = {
        addGlobalClass: true
    }

    constructor(props) {
        super(props);
        this.state = {
            activeVal: '',
            files: [],
            wayId: 1,
            switchIsOpen: false,
            doneWay: mockData.doneWayList[0],
            donePersonal: mockData.wayPersonal[0],
        }
    }

    handleChange(value) {
        this.setState({
            activeVal: value
        })
    }

    onChange(files) {
        this.setState({
            files
        })
    }

    handleTagClick = (item) => {
        this.setState({ wayId: item.id });
    };


    onDoneWayChange = e => {
        this.setState({
            doneWay: mockData.doneWayLiat[e.detail.value]
        })
    }
    onWayPersonalChange = e => {
        this.setState({
            donePersonal: mockData.wayPersonal[e.detail.value]
        })
    }


    render() {
        const { activeVal, files, wayId, switchIsOpen, doneWay, donePersonal } = this.state;
        return <Root background={{ background: '#ffffff' }}>
            <View className='interact-edit_container'>
                <View className='interact-edit_caption_wrap'>
                    <NavBar title='' iconType='zujian471' iconSize='60' iconColor='#ffffff' isCustom>
                        <IconFont name='zujian471' size='60' />
                    </NavBar>
                </View>
                <View className='interact-edit_main_wrap'>
                    <ScrollView className='interact-edit_main_box' scrollY>
                        <View className='interact-edit_main_tit'>约定活动</View>
                        <View className='interact-edit_main_desc'>分享邀约：好友之间相互分享加入活动，每个约定编号都由两个人构成，突显黏性。</View>


                        <View className='mb-6 font-4'>约定设置</View>

                        <View className='li flex border-bottom'>
                            <View className='flex1 font-3'>约定主题*</View>
                            <View className='flex-shrink font-3'>
                                <Input className='input' placeholder='请输入活动主题' />
                            </View>
                        </View>

                        <View className='li flex border-bottom'>
                            <View className='flex1 font-3'>邀约方式*</View>
                            <View className='flex-shrink'>
                                <View className='flex'>
                                    {mockData.wayList.map(item => <AtTag key={`tag-${item.id}`} name={item.name} className='tag' active={item.id === wayId} onClick={() => { this.handleTagClick(item) }}>
                                        {item.name}
                                    </AtTag>)}
                                </View>
                            </View>
                        </View>

                        <View className='li'>
                            <View>活动描述*</View>
                            <AtTextarea placeholder='请输入活动描述' value={activeVal} onChange={this.handleChange.bind(this)} maxLength={241} />
                            <AtImagePicker multiple={false} count={1} length={1} files={files} onChange={this.onChange.bind(this)} />
                            <View className='font-5 mb-34'>
                                <View>1、添加活动图片，图片将会显示在活动描述下方</View>
                                <View>2、活动缩略图为200*200，点击图片查看自适应</View>
                                <View>3、最多可上传1张</View>
                            </View>
                            <View className='flex border-bottom at'>
                                <View className='flex1 font-3'>
                                    <View>活动周期*</View>
                                    <View className='font-1'>参与人完成活动的时效</View>
                                </View>
                                <View className='flex-shrink'>
                                    <View className='flex'>
                                        <View className='font-3 pr-20'>2020/03/15-2020/04/14</View>
                                        <View className='flex-shrink'>
                                            <IconFont name='right' size='20' color='#434343' />
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View className='li'>
                            <View className='font-4'>激励规则</View>
                            <View className='font-1'>活动激活即邀约成功时双方的奖励</View>
                        </View>

                        <View className='flex at'>
                            <View className='flex1 font-3'>
                                <View className='font-8'>邀约人激励*</View>
                                <View className='font-1'>关闭后邀约人不发奖励</View>
                            </View>
                            <View className='flex-shrink'>
                                <SmallSwitch isOpen={switchIsOpen} onChange={() => this.setState({ switchIsOpen: !switchIsOpen })} />
                            </View>
                        </View>

                        <View className='li flex border-bottom font-3'>
                            <View className='flex1'>积分</View>
                            <View className='flex-shrink'>奖励    0    积分 </View>
                        </View>

                        <View className='li flex border-bottom'>
                            <View className='flex1 font-3'>礼券</View>
                            <View className='flex-shrink'>
                                <View className='flex'>
                                    <View className='font-3 pr-20'>选择添加</View>
                                    <View className='flex-shrink'>
                                        <IconFont name='right' size='20' color='#434343' />
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View className='li'>
                            <View className='font-4'>打赏设置</View>
                            <View className='font-1'>活动参与者完成后领取打赏奖励的规则</View>
                        </View>

                        <View className='font-8'>打赏礼包</View>

                        <View className='li flex border-bottom font-3'>
                            <View className='flex1'>积分</View>
                            <View className='flex-shrink'>奖励    0    积分 </View>
                        </View>
                        <View className='li flex border-bottom mb-34'>
                            <View className='flex1 font-3'>礼券</View>
                            <View className='flex-shrink'>
                                <View className='flex'>
                                    <View className='font-3 pr-20'>选择添加</View>
                                    <View className='flex-shrink'>
                                        <IconFont name='right' size='20' color='#434343' />
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View>
                            <View className='font-8'>获得条件</View>
                            <View className='font-1'>获得礼包奖励的条件</View>
                        </View>
                        <View className='li flex border-bottom'>
                            <View className='flex1 font-3'>完成方式</View>
                            <View className='flex-shrink'>
                                <Picker mode='selector' range={mockData.doneWayList} onChange={this.onDoneWayChange}>
                                    <View className='flex'>
                                        <View className='font-3 pr-20'>{doneWay}</View>
                                        <View className='flex-shrink'>
                                            <IconFont name='right' size='20' color='#434343' />
                                        </View>
                                    </View>
                                </Picker>
                            </View>
                        </View>
                        {wayId === 1 && <View className='li flex border-bottom'>
                            <View className='flex1 font-3'>打卡人</View>
                            <View className='flex-shrink'>
                                <Picker mode='selector' range={mockData.wayPersonal} onChange={this.onWayPersonalChange}>
                                    <View className='flex'>
                                        <View className='font-3 pr-20'>{donePersonal}</View>
                                        <View className='flex-shrink'>
                                            <IconFont name='right' size='20' color='#434343' />
                                        </View>
                                    </View>
                                </Picker>
                            </View>
                        </View>}
                        {wayId === 2 &&
                            <View className='li flex border-bottom font-3'>
                                <View className='flex1'>打卡人</View>
                                <View className='flex-shrink'>被邀约人</View>
                            </View>}
                        <View className='li flex border-bottom font-3'>
                            <View className='flex1'>打卡完成次数</View>
                            <View className='flex-shrink'> 1    次</View>
                        </View>

                        {wayId === 1 && <View className='font-5 rule-box'>
                            <View className='font-6'>到店打卡说明：</View>
                            <View>1、选择“邀约人或被邀约人”时，任意一人打卡完成活动，同一约定编号的参与人都可自动获取打赏礼包</View>
                            <View>2、选择“邀约人”时，邀约人打卡完成活动，同一约定编号的参与人都可自动获取打赏礼包</View>
                            <View>3、选择“被邀约人”时，被邀约人打卡完成活动，同一约定编号的参与人都可自动获取打赏礼包</View>
                            <View>4、选择“各自打卡”时，同一约定编号的参与人各自完成打卡完成才能自动获取打赏礼包</View>
                        </View>}


                    </ScrollView>
                </View>
                <View className='interact-edit_footer_wrap'>
                    <View className='button-position'>
                        <AtButton type='secondary' className='default-button primary-button'> 保存 </AtButton>
                    </View>
                </View>
            </View>
        </Root>
    }
}