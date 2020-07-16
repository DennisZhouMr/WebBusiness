import Taro, { Component } from "@tarojs/taro";
import { View, Text, ScrollView, Image, Swiper, SwiperItem, Picker } from "@tarojs/components";
import { AtForm, AtButton, AtInput, AtTag, AtList, AtListItem } from 'taro-ui';
import Root from "@/components/Root";
import NavBar from '@/components/NavBar';
import ListTextItem from '@/components/ListTextItem';
import IconFont from "@/components/iconfont";
import SmallSwitch from '@/components/SmallSwitch';
import CustomCheckbox from '@/components/Checkbox';

import './edit2.scss';

const pickerNorms = ['多规格设置', '多规格设置2'];

class Index extends Component {
  static options = {
    addGlobalClass: true
  };
  state = {
    img: '',
    switchStatus: {
      sale: false,
      compose: false,
      set: false
    },
    checkList: [
      { label: '自提', checked: true },
      { label: '配送', checked: true },
    ],
    stockCheck: false,
    classArr: ['彩妆', '视频'],
    activeClass: '彩妆',
    cycleList: [{ id: 1, name: '永久有效' }, { id: 2, name: '固定时间' }, { id: 3, name: '相对时间' }],
    normsList: [{ id: 1, name: '单规格商品' }, { id: 2, name: '多规格商品' }],
    cycleId: 1,
    normsId: 1,
    startDate: '2020/04/10',
    endDate: '2020/05/09',
  };

  handleSubmit = (e) => {
    console.log(e);
  }

  switchChange = (key) => {
    this.setState(state => ({ switchStatus: { ...state.switchStatus, [key]: !state.switchStatus[key] } }))
  }

  checkClick = (index) => {
    this.setState(state => {
      const checkList = state.checkList;
      checkList[index].checked = !checkList[index].checked;
      return { checkList };
    })
  }

  checkSingleClick = (key) => {
    this.setState(state => {
      return { [key]: !state[key] };
    })
  }

  pickerChange = (e) => {
    this.setState({
      activeClass: this.state.classArr[e.detail.value]
    })
  }

  pickerDate = (key, e) => {
    this.setState({
      [key]: e.detail.value
    })
  }

  pickerChangeSkip = (e) => {
    switch (pickerNorms[e.detail.value]) {
      case '多规格设置':
        Taro.navigateTo({ url: '/pages/spread/shopModulars/myGoods/multiNorms' });
        break;
      case '多规格设置2':
        Taro.navigateTo({ url: '/pages/spread/shopModulars/myGoods/multiNorms2' });
        break;
      default:
        Taro.navigateTo({ url: '/pages/spread/shopModulars/myGoods/multiNorms' });
    }
  }

  handleTagClick = (item, key) => {
    this.setState({ [key + 'Id']: item.id });
  };

  render() {
    const { startDate, endDate, stockCheck, normsList, normsId, cycleList, cycleId, activeClass, classArr, checkList, img, switchStatus } = this.state;
    return (<Root background={{ background: `linear-gradient(0deg,#f5f5f5, #fff)` }}>
      <View className='second-page_container goods-edit'>
        <View className='second-page_caption_wrap'>
          <NavBar title='编辑商品' iconType='zujian471' iconSize='60' iconColor='#ffffff' isCustom>
            <IconFont name='zujian471' size='60' />
          </NavBar>
        </View>
        <View className='second-page_main_wrap '>
          <ScrollView className='goods-edit_wrap' scrollY>
            <View className='cover-box'>
              <Swiper className='swiper-box' indicatorColor='#999' indicatorActiveColor='#333' indicatorDots>
                <SwiperItem>
                  {img && <Image className='img' src={img} mode='aspectFill' />}
                </SwiperItem>
              </Swiper>
              <View className='icon-box flex hc vc'><IconFont name='zujian471' size='60' /></View>
            </View>
            <View>
              <View className='input-box-item'>
                <View className='ibi-caption'>
                  基本信息
                </View>
                <View className='input-wrap'>
                  <AtForm onSubmit={this.handleSubmit.bind(this)}>
                    <View>
                      <AtInput name='name' title='*商品标题' type='text' placeholder='请输入商品标题' />
                    </View>
                    <View className='input-box'>
                      <ListTextItem label='商品标签'>
                        <View className='input-item tag inline-block vc'>+选择标签</View>
                      </ListTextItem>
                    </View>
                    <View>
                      <AtInput name='name' title='*商品编号' type='text' placeholder='请输入商品编号' />
                    </View>
                  </AtForm>
                </View>
              </View>
              <View className='input-box-item'>
                <View className='ibi-caption flex vc'>
                  <View className='flex1'>
                    <View>销量显示</View>
                    <View className='tag'>打开后，显示销售数量。关闭后，不显示销售数量</View>
                  </View>
                  <View>
                    <SmallSwitch isOpen={switchStatus.sale} onChange={() => this.switchChange('sale')} />
                  </View>
                </View>
              </View>
              <View className='input-box-item'>
                <View className='ibi-caption'>
                  商品参数
                </View>
                <View className='h-line'></View>
                <View className='ibi-caption flex vc'>
                  <View className='flex1'>
                    <View>组合商品</View>
                    <View className='tag'>
                      <Text>打开后，可以设置多个商品，以套餐的方式出售\n关闭后，只能设置单款多规格商品</Text></View>
                  </View>
                  <View>
                    <SmallSwitch isOpen={switchStatus.compose} onChange={() => this.switchChange('compose')} />
                  </View>
                </View>
                <View className='h-line'></View>
                <View className='input-box label-w-auto pt-34'>
                  <ListTextItem label='*规格类型'>
                    <View className='flex1 flex he vc'>
                      {normsList.map(item => <AtTag key={`tag-${item.id}`} name={item.name} className='input-tag size2' active={item.id === normsId} onClick={() => { this.handleTagClick(item, 'norms') }}>
                        {item.name === '多规格商品' ? <Picker range={pickerNorms} onChange={this.pickerChangeSkip}>{item.name}
                        </Picker> : item.name}
                      </AtTag>)}
                    </View>
                  </ListTextItem>
                </View>
                <View className='h-line'></View>
                <View className='input-wrap'>
                  <AtForm onSubmit={this.handleSubmit.bind(this)}>
                    <View>
                      <AtInput name='number' title='*市场售价' type='text' >
                        <Text>元</Text>
                      </AtInput>
                    </View>
                    <View className='flex vc'>
                      <View className='sale-price-box'>
                        <AtInput name='number' title='*销售价格' type='text' >
                          <Text>元</Text>
                        </AtInput>
                      </View>
                      <View className='unit-box'>
                        <AtInput name='text' title='单位' type='text' value='份' />
                      </View>
                    </View>
                    <View className='flex vc'>
                      <View className='stock-box'>
                        <AtInput name='number' title='*库存设置' type='text' >
                          <Text>件</Text>
                        </AtInput>
                      </View>
                      <View className='zero-box'>
                        <CustomCheckbox checked={stockCheck} label='零库存销售' onChange={() => this.checkSingleClick('stockCheck')} />
                      </View>
                    </View>
                  </AtForm>
                </View>
              </View>
              <View className='input-box-item'>
                <View className='ibi-caption'>
                  售卖设置
                </View>
                <View className='h-line'></View>
                <View className='ibi-caption flex vc'>
                  <View className='flex1'>
                    <View>上架商品销售</View>
                    <View className='tag'>
                      <Text>打开为商品上架销售，关闭为下架停止销售</Text></View>
                  </View>
                  <View>
                    <SmallSwitch isOpen={switchStatus.set} onChange={() => this.switchChange('set')} />
                  </View>
                </View>
              </View>
              <View className='input-box-item'>
                <View className='ibi-caption flex vc'>
                  <View>*配送方式<Text style={{ fontWeight: 'normal' }}>(可多选)</Text></View>
                  <View className='flex1 flex he vc'>
                    {checkList.map((item, index) => <View className='checkbox-box'>
                      <CustomCheckbox checked={item.checked} label={item.label} onChange={(val) => this.checkClick(index, val)} />
                    </View>)}
                  </View>
                </View>
              </View>
              <View className='input-box-item'>
                <View className='ibi-caption flex vc'>
                  <View>*自提周期</View>
                  <View className='flex1 flex he vc'>
                    {cycleList.map(item => <AtTag key={`tag-${item.id}`} name={item.name} className='input-tag' active={item.id === cycleId} onClick={() => { this.handleTagClick(item, 'cycle') }}>
                      {item.name}
                    </AtTag>)}
                  </View>
                </View>
                {cycleId === 2 && <View>
                  <View className='h-line'></View>
                  <View className='input-box' style={{ marginTop: '35rpx' }}>
                    <ListTextItem label='起始日期'>
                      <View className='flex he'><Picker mode='date' onChange={(e) => this.pickerDate('startDate', e)}>{startDate}</Picker></View>
                    </ListTextItem>
                  </View>
                  <View className='h-line'></View>
                  <View className='input-box' style={{ marginTop: '35rpx' }}>
                    <ListTextItem label='结束日期'>
                      <View className='flex he'><Picker mode='date' onChange={(e) => this.pickerDate('endDate', e)}>{endDate}</Picker></View>
                    </ListTextItem>
                  </View>
                </View>}
              </View>
              <View className='input-box-item'>
                <View className='ibi-caption flex hb vc'>
                  <View>*商品详情</View>
                  <View>
                    <IconFont name='right' size='20' />
                  </View>
                </View>
              </View>
              <View className='input-box-item'>
                <View className='ibi-caption flex hb vc'>
                  <View>*商品分类</View>
                  <View>
                    <Picker range={classArr} onChange={e => this.pickerChange(e)}>
                      <Text className='inline-block vc' style={{ marginRight: '24rpx' }}>{activeClass}</Text>
                      <View className='inline-block vc'><IconFont name='right' size='20' /></View></Picker>
                  </View>
                </View>
              </View>
              <View className='input-box-item'>
                <View className='ibi-caption flex vc'>
                  <View className='flex1'>
                    <View>*分销设置</View>
                    <View className='tag'>
                      <Text>打开后，本商品支持分销返积分\n关闭后，客户购买本商品分享好友无法获得佣金</Text></View>
                  </View>
                  <View>
                    <SmallSwitch isOpen={switchStatus.compose} onChange={() => this.switchChange('compose')} />
                  </View>
                </View>
                <View className='h-line'></View>
                <View className='input-box label-w-auto pt-34'>
                  <ListTextItem label='分销奖励积分比例'>
                    <View className='flex he vc '>
                      <View style={{ marginRight: '20rpx' }}><Text>50%</Text></View>
                      <AtButton type='primary' className='btn-yellow size3' circle>修改</AtButton>
                    </View>
                  </ListTextItem>
                </View>
              </View>
              <View className='input-box-item'>
                <View className='ibi-caption flex vc'>
                  <View className='flex1'>
                    <View>营销设置</View>
                    <View className='tag'>
                      <Text>一个商品只允许使用一种营销方式</Text></View>
                  </View>
                </View>
                <View className='h-line'></View>
                <View className='ibi-caption flex vc'>
                  <View className='flex1'>
                    <View style={{ fontWeight: 'normal' }}>设为热销单品</View>
                    <View className='tag'>
                      <Text>打开后，商品将会在推荐单品板块展示</Text></View>
                  </View>
                  <View>
                    <SmallSwitch isOpen={switchStatus.compose} onChange={() => this.switchChange('compose')} />
                  </View>
                </View>
              </View>
              <View className='input-box-item'>
                <View className='ibi-caption flex hb vc'>
                  <View style={{ fontWeight: 'normal' }}>购买须知</View>
                  <View>
                    <Text className='inline-block vc' style={{ marginRight: '24rpx', color: '#000000', fontWeight: 'normal' }}>去修改</Text>
                    <View className='inline-block vc'><IconFont name='right' size='20' />
                    </View>
                  </View>
                </View>
              </View>
              <View className='input-box-item'>
                <View className='ibi-caption flex vc'>
                  <View className='flex1'>
                    <View style={{ fontWeight: 'normal' }}>设为隐藏商品</View>
                    <View className='tag'>
                      <Text>设置后，不展示在线上门店商品目录中，可通过直\n接分享给客户购买</Text></View>
                  </View>
                  <View>
                    <SmallSwitch isOpen={switchStatus.compose} onChange={() => this.switchChange('compose')} />
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>

        <View className='second-page_footer_wrap'>
          <AtButton type='primary' className='btn-yellow size2 inline-block'>保存</AtButton>
        </View>
      </View>
    </Root >)
  }
}

export default Index;