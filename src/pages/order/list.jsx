import Taro, { Component } from "@tarojs/taro";
import { Text, Image, View, ScrollView, Picker } from "@tarojs/components";
import { AtButton, AtTag, AtIcon } from 'taro-ui';
import Root from "@/components/Root";
import NavBar from '@/components/NavBar';
import IconFont from "@/components/iconfont";
import ListTextItem from '@/components/ListTextItem';

import './list.scss';

const menuList = ['全部', '待收货', '待到店', '待付款', '已发货', '已完成'];
const logisticsStatusArr = {
  '0': { status: '待发货', btnText: '即刻发货', url: '/pages/order/sendOut' },
  '1': { status: '待到店', btnText: '即刻核销', url: '/pages/order/sendOut' },
}
const typeArr = {
  '0': { text: '快递配送', colorType: 'green' },
  '1': { text: '到店自提', colorType: 'pink' },
};

const list = [
  {
    id: 1, date: '2020年6月', total: '0.00', integral: '0', child: [
      {
        id: 'KSX3136587201914',
        face: require('@/assets/images/userDefault2.png'),
        name: '用户昵称',
        level: '等级名称',
        logisticsStatus: '0',
        type: '0',
        date: '2019-03-13 19:30:58',
        price: '0.00',
        expressPrice: '0.00',
        deductionPoints: '0',
        givePoints: '0',
        reward: '0',
        goodsName: '商品名称：Armani阿玛尼时尚休闲多功能运动手表男官方正品男士石英表AR5905',
        getName: '张三', isOpen: false,
        getPhone: '15014758456'
      },
      {
        id: 'KSX3136587201915',
        face: require('@/assets/images/userDefault2.png'),
        name: '用户昵称',
        level: '等级名称',
        logisticsStatus: '1',
        type: '1',
        date: '2019-03-13 19:30:58',
        price: '0.00',
        expressPrice: '0.00',
        deductionPoints: '0',
        givePoints: '0',
        reward: '0',
        goodsName: '商品名称：Armani阿玛尼时尚休闲多功能运动手表男官方正品男士石英表AR5905',
        getName: '张三', isOpen: false,
        getPhone: '15014758456'
      }
    ]
  },
  {
    id: 2, date: '2020年6月', total: '0.00', integral: '0', child: [
      {
        id: 'KSX3136587201916',
        face: require('@/assets/images/userDefault2.png'),
        name: '用户昵称',
        level: '等级名称',
        logisticsStatus: '1',
        type: '1',
        date: '2019-03-13 19:30:58',
        price: '0.00',
        expressPrice: '0.00',
        deductionPoints: '0',
        givePoints: '0',
        reward: '0',
        goodsName: '商品名称：Armani阿玛尼时尚休闲多功能运动手表男官方正品男士石英表AR5905',
        getName: '张三', isOpen: false,
        getPhone: '15014758456'
      },
      {
        id: 'KSX3136587201917',
        face: require('@/assets/images/userDefault2.png'),
        name: '用户昵称',
        level: '等级名称',
        logisticsStatus: '0',
        type: '0',
        date: '2019-03-13 19:30:58',
        price: '0.00',
        expressPrice: '0.00',
        deductionPoints: '0',
        givePoints: '0',
        reward: '0',
        goodsName: '商品名称：Armani阿玛尼时尚休闲多功能运动手表男官方正品男士石英表AR5905',
        getName: '张三', isOpen: false,
        getPhone: '15014758456'
      }
    ]
  }
]

class Index extends Component {
  static options = {
    addGlobalClass: true
  };

  state = {
    activeMenu: menuList[0],
    stateList: list
  };

  menuChange = e => {
    this.setState({
      activeMenu: menuList[e.detail.value]
    })
  }

  showDetail = (pIndex, index) => {
    const { stateList } = this.state;
    stateList[pIndex]['child'][index].isOpen = !stateList[pIndex]['child'][index].isOpen;
    this.setState({
      stateList
    })
  }

  render() {
    const { activeMenu, stateList } = this.state;
    return (<Root background={{ background: 'linear-gradient(top, #ffffff, #f5f5f5)' }}>
      <View className='second-page_container order-list'>
        <View className='second-page_caption_wrap'>
          <NavBar title='订单管理' iconType='zujian471' iconSize='60' iconColor='#ffffff' isCustom>
            <IconFont name='zujian471' size='60' />
          </NavBar>
        </View>
        <View className='second-page_main_wrap'>
          <ScrollView className='order-list_wrap' scrollY>
            <View className='caption flex hb vc'>
              <View>
                <Picker mode='selector' range={menuList} onChange={this.menuChange}>
                  <View className='left'>{activeMenu}</View>
                </Picker>
              </View>
              <View className='right'>
                <View className='inline-block vm'>筛选</View>
              </View>
            </View>
            <View className='flex'>
              <AtTag className='inline-block vm'>共计订单：0</AtTag>
              <AtTag className='inline-block vm'>待发货：0</AtTag>
              <AtTag className='inline-block vm'>待到店：0</AtTag>
            </View>
            <View className='list-wrap'>
              {stateList.map((item, index) => (
                <View className='list-item' key={item.id}>
                  <View className='date-tit flex vc'>
                    <View>{item.date}</View>
                    <View className='icon-box'><IconFont name='bottom' size='20' color='#000000' /></View>
                  </View>
                  <View className='flex vc statistics'>
                    <View className='info'>
                      <Text className='inline-block mr-16'>订单总额  ¥{item.total}</Text>
                      <Text className='inline-block'>赠送积分  {item.integral}</Text>
                    </View>
                    <View className='line'></View>
                    <View className='right'>
                      <View className='inline-block vm'>统计</View>
                      <View className='inline-block vm'><IconFont name='right' size='20' color='#848484' /></View>
                    </View>
                  </View>
                  <View className='h-line'></View>
                  {item.child.map((sItem, sIndex) => (
                    <View key={sItem.id}>
                      <View className='ls-item flex'>
                        <View className='face flex vc hc'>
                          <Image className='img' src={sItem.face} mode='widthFix' /></View>
                        <View className='info-box'>
                          <View className='top flex hb'>
                            <View className='flex1 ellipsis'>
                              <View className='name'>{sItem.name}</View>
                              <View className='level'>会员等级：{sItem.level}</View>
                            </View>
                            <View>
                              <AtButton onClick={() => Taro.navigateTo({ url: logisticsStatusArr[sItem.logisticsStatus].url })} className='btn-gray size1' circle>{logisticsStatusArr[sItem.logisticsStatus].btnText}</AtButton>
                            </View>
                          </View>
                          <View><AtTag className={typeArr[sItem.type].colorType}>{typeArr[sItem.type].text}</AtTag></View>
                          <View className='flex ve'>
                            <View onClick={() => Taro.navigateTo({ url: '/pages/order/detail' })} className='text-box flex1' style={{ overflow: 'hidden' }}>
                              <ListTextItem label='订单编号：' val={sItem.id} />
                              <ListTextItem label='订单状态：' val={logisticsStatusArr[sItem.logisticsStatus].status} />
                              <ListTextItem label='下单时间：' val={sItem.date} />
                              <View>实付金额：<Text className='bold'>{sItem.price}</Text></View>
                              {sItem.isOpen && <View>
                                <View>快递金额：<Text className='bold'>{sItem.expressPrice}</Text></View>
                                <View>抵扣积分：<Text className='bold'>{sItem.deductionPoints}</Text></View>
                                <View>赠送积分：<Text className='bold'>{sItem.givePoints}</Text></View>
                                <View>分销奖励：<Text className='bold'>{sItem.reward}</Text></View>
                                <View>商品名称<Text className='bold'>{sItem.goodsName}</Text></View>
                                <View>收货人姓名：<Text className='bold'>{sItem.getName}</Text></View>
                                <View>收货人电话：<Text className='bold'>{sItem.getPhone}</Text></View>
                              </View>}
                            </View>
                            <View>
                              <View onClick={() => this.showDetail(index, sIndex)}>
                                <AtIcon value={sItem.isOpen ? 'chevron-up' : 'chevron-down'} size='18' color='#848484'></AtIcon>
                              </View>
                            </View>
                          </View>
                        </View>
                      </View>
                      <View className='h-line'></View>
                    </View>
                  ))}
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
      </View>
    </Root >)
  }
}

export default Index;