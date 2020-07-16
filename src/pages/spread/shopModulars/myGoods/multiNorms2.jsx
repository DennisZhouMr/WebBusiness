import Taro, { Component } from "@tarojs/taro";
import { View, ScrollView, Text } from "@tarojs/components";
import { AtButton, AtInput, AtImagePicker } from 'taro-ui';
import Root from "@/components/Root";
import NavBar from '@/components/NavBar';
import IconFont from "@/components/iconfont";
import SmallSwitch from '@/components/SmallSwitch';
import ListTextItem from '@/components/ListTextItem';

import './multiNorms.scss';

class Index extends Component {
  static options = {
    addGlobalClass: true
  };
  state = {
    switchStatus: {
      price: false,
      stock: false
    },
    list: [
      {
        id: 1,
        options: [
          { id: 11, name: '颜色', option: '白色' },
          { id: 12, name: '尺码', option: 'M' },
        ],
        price: '',
        stock: '',
        img: [],
        showAddBtn: true
      }, {
        id: 2,
        options: [
          { id: 11, name: '颜色', option: '红色' },
          { id: 12, name: '尺码', option: 'M' },
        ],
        price: '',
        stock: '',
        img: [],
        showAddBtn: true
      }
    ]
  };

  switchChange = (key) => {
    this.setState(state => ({ switchStatus: { ...state.switchStatus, [key]: !state.switchStatus[key] } }))
  }

  imgPickerChange = (files, index) => {
    const { list } = this.state;
    list[index].img = files;
    if (files.length === 0) {
      list[index].showAddBtn = true;
    } else {
      list[index].showAddBtn = false;
    }
    this.setState({
      list
    })
  }

  render() {
    const { switchStatus, list = [] } = this.state;
    return (<Root background={{ background: `linear-gradient(0deg,#f5f5f5, #fff)` }}>
      <View className='second-page_container multi-norms2'>
        <View className='second-page_caption_wrap'>
          <NavBar title='多规格设置' iconType='zujian471' iconSize='60' iconColor='#ffffff' isCustom>
            <IconFont name='zujian471' size='60' />
          </NavBar>
        </View>
        <View className='second-page_main_wrap '>
          <ScrollView className='multi-norms_wrap' scrollY>
            <View className='content-wrap'>
              <View className='mnw-tit flex hb vc'>
                <View className='flex1'>
                  所有规格统一价格
              </View>
                <View>
                  <SmallSwitch isOpen={switchStatus.price} onChange={() => this.switchChange('price')} />
                </View>
              </View>
              <View className='h-line'></View>
              <View className='mnw-tit flex hb vc'>
                <View className='flex1'>
                  所有规格统一库存
              </View>
                <View>
                  <SmallSwitch isOpen={switchStatus.stock} onChange={() => this.switchChange('stock')} />
                </View>
              </View>
            </View>
            <View className='list-wrap'>
              {list.map((item, index) => <View key={item.id} className='mnw-item'>
                {item.options && item.options.map((sItem, sIndex) => <View key={sItem.id}>
                  {sIndex !== 0 && <View className='h-line'></View>}
                  <ListTextItem className='pv-30 option-lti' label={sItem.name} val={sItem.option}></ListTextItem>
                </View>)}
                <AtInput title='*价格' placeholder='请输入价格'></AtInput>
                <AtInput title='*库存' placeholder='请输入库存'></AtInput>
                <ListTextItem className='pv-30 cover-box' label='图片' isCustom>
                  <View className='flex ve'>
                    <View><AtImagePicker
                      files={item.img}
                      onChange={(files) => this.imgPickerChange(files, index)} multiple={false} count={1} showAddBtn={item.showAddBtn}
                    /></View>
                    <View className='text'>不上传则显示商品主图</View>
                  </View>

                </ListTextItem>
              </View>)}

            </View>
          </ScrollView>
        </View>

        <View className='second-page_footer_wrap flex '>
          <View className='item'>
            <AtButton className='btn-gray size4 inline-block'>上一步</AtButton>
          </View>
          <View className='item'>
            <AtButton type='primary' className='btn-yellow size4 inline-block'>完成</AtButton>
          </View>
        </View>
      </View>
    </Root >)
  }
}

export default Index;