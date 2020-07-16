import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { AtButton, AtAvatar, AtFloatLayout } from 'taro-ui';
import IconFont from '@/components/iconfont';
import Root from '@/components/Root';
import Caption from '@/components/Caption';
import TabBarBottom from '@/components/TabBarBottom';
import SmallSwitch from '@/components/SmallSwitch';

import './index.scss';

export default class extends Component {
  config = {
    navigationBarTitleText: '分类管理'
  };

  state = {
    list: [
      { typeId: 1, type: '商品', title: '默认分类' },
      { typeId: 2, type: '套餐', title: '饮料' }
    ],
    buySwtich: true
  };
  handleTabBarClick = index => {
    switch (index) {
      case 0:
        Taro.navigateTo({ url: '/pages/spread/shopModulars/classify/sort' });
        break;
      case 'center':
        Taro.navigateTo({ url: '/pages/spread/shopModulars/classify/add' });
        break;
      default:
        Taro.navigateTo({ url: '/pages/spread/shopModulars/index' });
        break;
    }
  };

  switchChange = () => {
    this.setState((state) => ({
      buySwtich: !state.buySwtich,
    }))
  }
  render() {
    const AtTabBarList = [
      {
        title: '排序',
        iconPrefixClass: 'icon',
        iconType: 'zu1714'
      },
      { title: '', special: true },
      {
        title: '退出',
        iconPrefixClass: 'icon',
        iconType: 'zu1856'
      }
    ];
    const { list, buySwtich } = this.state;
    return (
      <Root
        background={{
          background: `#f5f5f5`
        }}
      >
        <View className='common-wrapper classify-wrapper'>
          <Caption text='分类管理' iconType='zu2095' />
          <View className='classify-main'>
            <View className='switch-wrap'>
              <View className='flex hb vc'>
                <View>到店自提</View>
                <View><SmallSwitch isOpen={buySwtich} onChange={this.switchChange} /></View>
              </View>
              <View className='tag'>打开后，可为商品的店铺设置分类，方便顾客筛选查找</View>
            </View>
            <View className='h-line'></View>
            <View className='cl-caption'>分类列表</View>
            <View className='h-line'></View>
            <View className='classify-list'>
              {list.map(item => (
                <View
                  className='classify-list-item flex hb vc'
                  onClick={() => {
                    Taro.navigateTo({
                      url: `/pages/spread/shopModulars/classify/edit?name=${item.title}`
                    });
                  }}
                >
                  <View className='content'>{item.title}</View>
                  <View>
                    <IconFont name='right' size={28} color='#434343' />
                  </View>
                </View>
              ))}
            </View>
          </View>
          <TabBarBottom
            iconSize={21}
            fontSize={14}
            centerText='添加分类'
            centerIcon='plus'
            tabList={AtTabBarList}
            onTabBarClick={this.handleTabBarClick}
          />
        </View>
      </Root>
    );
  }
}
