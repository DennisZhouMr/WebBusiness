import Taro, { Component } from "@tarojs/taro";
import { View, ScrollView, Text, Picker } from "@tarojs/components";
import { AtIcon, AtInput, AtButton, AtCheckbox } from 'taro-ui';
import Root from "@/components/Root";
import NavBar from '@/components/NavBar';
import IconFont from "@/components/iconfont";
import ListTextItem from '@/components/ListTextItem';
import CustomCheckbox from '@/components/Checkbox';
import ModalProp from '@/components/Modal';
import GoodsItem from './components/GoodsItem';

import './sendOut.scss';

const pcikerArr = {
  sendType: ['自己联系', '用户联系'],
  sendCompany: ['UU跑腿', '顺丰']
};

const orderList = [
  {
    label: '订单编号：',
    value: 'KSL0000013',
    orderNo: 'KSL0000013',
    child: [{
      id: '1',
      img: '',
      name: '商品名称',
      num: 1,
      price: '0.00'
    }, {
      id: '2',
      img: '',
      name: '商品名称',
      num: 1,
      price: '0.00'
    }, {
      id: '3',
      img: '',
      name: '商品名称',
      num: 1,
      price: '0.00'
    }]
  }, {
    label: '订单编号：',
    value: 'KSL0000014',
    orderNo: 'KSL0000014',
    child: [{
      id: '1',
      img: '',
      name: '商品名称',
      num: 1,
      price: '0.00'
    }, {
      id: '2',
      img: '',
      name: '商品名称',
      num: 1,
      price: '0.00'
    }, {
      id: '3',
      img: '',
      name: '商品名称',
      num: 1,
      price: '0.00'
    }]
  }
];

class Index extends Component {
  static options = {
    addGlobalClass: true
  };
  state = {
    sendTypeActive: pcikerArr.sendType[0],
    sendCompanyActive: pcikerArr.sendCompany[0],
    orderNo: '',
    firstActiveIndex: 0,
    stateOrderList: [],
    isOpened: false
  };

  componentDidMount() {
    this.getPageOrderList(orderList);
  }

  getPageOrderList = (list) => {
    const { firstActiveIndex } = this.state;
    list.map((item, index) => {
      if (item.child && item.child.length > 0) {
        item.child.map(sItem => {
          if (index === firstActiveIndex) {
            return sItem.checked = true;
          } else {
            return sItem.checked = false;
          }
        })
      }
      if (index === firstActiveIndex) {
        return item.checked = true;
      } else {
        return item.checked = false;
      }
    })

    this.setState({
      stateOrderList: list
    })
    console.log(list);
  }

  inputChange = value => {
    this.setState({
      orderNo: value
    })
  }

  pickerChange = (key, e) => {
    this.setState({
      [key]: pcikerArr[key][e.detail.value]
    })
  }

  checkClick = (activeIndex, val) => {
    const { stateOrderList, firstActiveIndex } = this.state;
    stateOrderList[firstActiveIndex].checked = false;
    stateOrderList[firstActiveIndex].child.map(item => item.checked = false);
    if (val) {
      stateOrderList[activeIndex].checked = true;
      stateOrderList[activeIndex].child.map(item => item.checked = true);
    }
    console.log(stateOrderList);
    this.setState({
      firstActiveIndex: activeIndex,
      stateOrderList
    })
  }

  goodsCheckChange = (pIndex, cIndex, val) => {
    const { stateOrderList, firstActiveIndex } = this.state;
    if (pIndex !== firstActiveIndex) {
      stateOrderList[firstActiveIndex].checked = false;
      stateOrderList[firstActiveIndex].child.map(item => item.checked = false);
      stateOrderList[pIndex]['child'][cIndex].checked = Boolean(val);
    } else {
      stateOrderList[pIndex]['child'][cIndex].checked = Boolean(val);
    }

    this.setState({
      firstActiveIndex: pIndex,
      stateOrderList
    })
  }

  handleConfirm = () => {

  }

  render() {
    const { isOpened, stateOrderList, sendTypeActive, sendCompanyActive, orderNo } = this.state;
    return (<Root background={{ background: 'linear-gradient(top, #ffffff, #f5f5f5)' }}>
      <View className='second-page_container order-sendOut'>
        <View className='second-page_caption_wrap'>
          <NavBar title='发货' iconType='zujian471' iconSize='60' iconColor='#ffffff' isCustom>
            <IconFont name='zujian471' size='60' />
          </NavBar>
        </View>
        <View className='second-page_main_wrap'>
          <ScrollView className='order-sendOut_wrap' scrollY>
            <View className='title'>共一个包裹：1个待发货</View>
            <View className='opera-box flex hb'>
              <View className='prev'>
                <View className='inline-block vm'>
                  <AtIcon value='chevron-left' size='15' color='#848484'></AtIcon>
                </View>
                <Text className='inline-block vm'>上一单</Text>
              </View>
              <View className='next'>
                <Text className='inline-block vm'>下一单</Text>
                <View className='inline-block vm'>
                  <AtIcon value='chevron-right' size='15' color='#848484'></AtIcon>
                </View>
              </View>
            </View>
            {/* 收货人信息 */}
            <View className='card-box'>
              <View className='flex hb vc'>
                <Text className='c-tit'>收货人信息</Text>
                <Text className='c-r-text'>用户昵称</Text>
              </View>
              <View className='h-line line'></View>
              <View className='c-content flex'>
                <View className='tag'>收</View>
                <View className='cc-r-text flex1'>
                  <View className='cc-rt-item'><ListTextItem label='收货人姓名：' val='张三' /></View>
                  <View className='cc-rt-item'><ListTextItem label='收货地址：' val='北京' /></View>
                  <View className='cc-rt-item'><ListTextItem label='联系电话：' val='13514853548' /></View>
                </View>
              </View>
            </View>
            {/* 发货面板 */}
            <View className='card-box'>
              <View className='flex hb vc'>
                <Text className='c-tit'>发货面板</Text>
              </View>
              <View className='h-line line'></View>
              <View className='c-content flex hb'>
                <View className='cc-item'>
                  <View className='cc-i-tit'>发货方式</View>
                  <View className='cc-i-picker'>
                    <Picker range={pcikerArr.sendType} onChange={e => this.pickerChange('sendType', e)}>
                      <View className='flex hb vc'>
                        <Text>{sendTypeActive}</Text>
                        <View><AtIcon value='chevron-right' size='15' color='#848484'></AtIcon></View>
                      </View>
                    </Picker>
                  </View>
                </View>
                <View className='v-line'></View>
                <View className='cc-item'>
                  <View className='cc-i-tit'>物流公司</View>
                  <View className='cc-i-picker'>
                    <Picker range={pcikerArr.sendCompany} onChange={e => this.pickerChange('sendCompany', e)}>
                      <View className='flex hb vc'>
                        <Text>{sendCompanyActive}</Text>
                        <View><AtIcon value='chevron-right' size='15' color='#848484'></AtIcon></View>
                      </View>
                    </Picker>
                  </View>
                </View>
              </View>
              <View className='line'></View>
              <View className='orderNo'>
                <ListTextItem label='物流单号：' >
                  <AtInput
                    name='value'
                    type='text'
                    placeholder='输入物流单号'
                    value={orderNo}
                    onChange={this.inputChange.bind(this)}
                  />
                </ListTextItem>
              </View>
            </View>
            {/* 订单编号： */}
            {
              stateOrderList.map((item, index) => <View className='card-box' key={item.value}>
                <View className='og-tit'>
                  <CustomCheckbox checked={item.checked} label={item.label} val={item.orderNo} onChange={(val) => this.checkClick(index, val)}></CustomCheckbox>
                </View>
                <View className='h-line line'></View>
                <View>
                  {item.child.map((sItem, sIndex) => (<GoodsItem key={sItem.id} item={sItem}>
                    <CustomCheckbox checked={sItem.checked} val={sItem.id} isCustom onChange={(val) => this.goodsCheckChange(index, sIndex, val)} />
                  </GoodsItem>))}
                </View>
              </View>)
            }
          </ScrollView>
        </View>
        <View className='second-page_footer_wrap at-row at-row__justify--center'>
          <View className='item'>
            <AtButton type='primary' onClick={() => this.setState({ isOpened: true })} className='btn-yellow size4 inline-block'>立即发货</AtButton>
          </View>
        </View>
        <ModalProp isOpened={isOpened} iconTyle='gantanhao' iconColor='#FF3F81' iconSize={110} isGroup groupContent={['取消', '确定']} title='信息确认' onConfirm={this.handleConfirm} onCancel={() => this.setState({ isOpened: false })}>
          <View className='vip-modal-main_box'>
            <View>物流公司：顺丰快递</View>
            <View>物流单号：1234567890</View>
          </View>
        </ModalProp>
      </View>
    </Root >)
  }
}

export default Index;