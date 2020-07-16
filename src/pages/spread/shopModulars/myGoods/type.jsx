import Taro, { Component } from "@tarojs/taro";
import { View, ScrollView, Text } from "@tarojs/components";
import Root from "@/components/Root";
import NavBar from "@/components/NavBar";
import IconFont from "@/components/iconfont";
import CustomCheckbox from '@/components/Checkbox';
import CardItem from "../components/CardItem";

import "./type.scss";

const couponList = [
  {
    id: 1,
    type: '团购商品',
    title: "组合商品及引流款",
    desc: "建议发布套餐商品及引流款，此板块会在\n平台服务端及自家线上商城首页展现。",
    icon: "zu1772",
    backColor: "#FDD000",
    url: "/pages/spread/shopModulars/myGoods/edit2"
  },
  {
    id: 2,
    type: '分类商品',
    title: "常规商品",
    desc: "线上门店商品分类列表板块展现",
    icon: "zu1872",
    backColor: "#FF3F81",
    url: "/pages/spread/shopModulars/myGoods/edit2"
  },
  {
    id: 3,
    type: '虚拟商品',
    title: "代金券",
    desc: "销售电子代金券",
    icon: "zu1873",
    backColor: "#229E8E",
    url: "/pages/spread/shopModulars/myGoods/addPackage"
  }
];
export default class extends Component {
  static options = {
    addGlobalClass: true
  };
  state = {
    isAgree: false
  };
  checkSingleClick = () => {
    this.setState(state => {
      return { isAgree: !state.isAgree };
    })
  }
  render() {
    const { isAgree } = this.state;
    return (
      <Root background={{ background: `linear-gradient(0deg,#f5f5f5, #fff)` }}>
        <View className='second-page_container common-wrapper type-wrapper'>
          <View className='second-page_caption_wrap'>
            <NavBar title='多规格设置' iconType='zujian471' iconSize='60' iconColor='#ffffff' isCustom>
              <IconFont name='close' size='60' />
            </NavBar>
          </View>
          <View className='second-page_main_wrap '>
            <ScrollView className='type-main' scrollY>
              {couponList.map(item => (
                <View key={item.id}>
                  <View className='type-tit'>{item.type}</View>
                  <CardItem key={item.id} item={item} />
                </View>
              ))}
            </ScrollView>
          </View>

          <View className='second-page_footer_wrap'>
            <CustomCheckbox isCustom checked={isAgree} onChange={() => this.checkSingleClick()}>
              <View>我已阅读并同意<Text className='rule'>《商品发布协议》</Text></View>
            </CustomCheckbox>
          </View>
        </View>
      </Root >
    );
  }
}
