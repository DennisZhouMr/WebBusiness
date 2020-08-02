import Taro, { Component } from '@tarojs/taro';
import { View, Text, ScrollView, Picker } from '@tarojs/components';
import { AtTag } from 'taro-ui';
import IconFont from '@/components/iconfont';
import GoodsItems from '../GoodsItem';

const pickerList = {
  menu: ['全部', '售卖中', '已售空', '已下架'],
  apply: ['审核中', '审核失败'],
  class: ['分类1', '分类2']
};

const mock = [
  {
    goods_id: '51',
    name: '商品名称',
    desc: '商品描述',
    price: '10.00',
    sales: 10,
    count: 0,
    time: '2020-06-13 19:30:58',
    showPrompt: false
  },
  {
    goods_id: '52',
    name: '饼',
    desc: '商品描述',
    price: '10.00',
    sales: 10,
    count: 0,
    time: '2020-06-13 19:30:58'
  },
  {
    goods_id: '53',
    name: '饼',
    desc: '商品描述',
    price: '10.00',
    sales: 10,
    count: 0,
    time: '2020-06-13 19:30:58'
  },
  {
    goods_id: '54',
    name: '饼',
    desc: '商品描述',
    price: '10.00',
    sales: 10,
    count: 0,
    time: '2020-06-13 19:30:58'
  },
  {
    goods_id: '55',
    name: '饼',
    desc: '商品描述',
    price: '10.00',
    sales: 10,
    count: 0,
    time: '2020-06-13 19:30:58'
  }
];
export default class extends Component {
  static options = {
    addGlobalClass: true
  };
  state = {
    listHeight: [],
    scrollTop: 0,
    goodsList: mock,
    pickerActive: {
      menu: '全部',
      apply: '审核状态',
      class: '选择分类'
    }
  };
  componentDidMount() {
    this.calculateHeight();
  }
  calculateHeight = () => {
    let { listHeight } = this.state;
    let height = 0;
    const query = Taro.createSelectorQuery().in(this.$scope);
    query
      .selectAll('.goods-list-hook')
      .boundingClientRect(res => {
        console.log(res);
        listHeight.push(height);
        for (let i = 0; i < res.length; i++) {
          height += res[i].height;
          listHeight.push(height);
        }
        this.setState({
          listHeight
        });
      })
      .exec();
  };

  pickerChange = (key, e) => {
    this.setState((state) => ({
      pickerActive: { ...state.pickerActive, [key]: pickerList[key][e.detail.value] }
    }))
  }

  handleShowPrompt = (index) => {
    console.log(index);
    this.setState((state) => {
      const goodsList = state.goodsList;
      goodsList[index].showPrompt = !goodsList[index].showPrompt;

      return { goodsList };
    })
  }

  render() {
    const { pickerActive, goodsList, scrollTop } = this.state;
    return (
      <View className='goods-container'>
        <ScrollView
          scrollY
          scrollWithAnimation
          scrollTop={scrollTop}
          className='goods-wrapper'
        >
          <View className='picker-box content-wrap'>
            <Picker mode='selector' range={pickerList.menu} onChange={(e) => this.pickerChange('menu', e)}>
              <View className='picker-text'>{pickerActive.menu}</View>
            </Picker>
          </View>
          <View className='flex content-wrap'>
            <View className='tag-item'>
              <Picker mode='selector' range={pickerList.apply} onChange={(e) => this.pickerChange('apply', e)}>
                <AtTag>{pickerActive.apply}</AtTag>
              </Picker>
            </View>
            <View className='tag-item'>
              <Picker mode='selector' range={pickerList.class} onChange={(e) => this.pickerChange('class', e)}>
                <AtTag>{pickerActive.class}</AtTag>
              </Picker>
            </View>
          </View>

          <View className='flex hb vc sort-box content-wrap'>
            <View className='item'>销量<View className='down'></View><View className='up'></View></View>
            <View className='item'>价格<View className='down'></View><View className='up'></View></View>
            <View className='item'>库存<View className='down'></View><View className='up'></View></View>
            <View className='item'>创建时间<View className='down'></View><View className='up'></View></View>
          </View>


          {goodsList && goodsList.length > 0
            ? <View className='goods-list-hook'>
              <View className='goods-content'>
                <View className='goods-list'>
                  {goodsList.map((goods, index) => (
                    <GoodsItems onShowPrompt={() => this.handleShowPrompt(index)} key={goods.goods_id} dateSouce={goods} />
                  ))}
                </View>
              </View>
            </View>
            : <View>
              <View className='goods-content'>
                <View className='empty'>目前没有预选的商品</View>
              </View>
            </View>}
        </ScrollView>
      </View>
    );
  }
}
