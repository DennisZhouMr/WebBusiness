import Taro, { Component } from "@tarojs/taro";
import { View, ScrollView, Text } from "@tarojs/components";
import { AtButton, AtInput, AtIcon } from 'taro-ui';
import Root from "@/components/Root";
import NavBar from '@/components/NavBar';
import IconFont from "@/components/iconfont";

import './multiNorms.scss';

let optionIdInit = 0;
let optionBoxIdInit = 0;

class Index extends Component {
  static options = {
    addGlobalClass: true
  };
  state = {
    list: [
      {
        id: 'b' + optionBoxIdInit,
        optionList: [
          { id: optionIdInit, val: '' }
        ]
      }
    ]
  };

  optionAdd = (bId) => {
    optionIdInit++;
    this.setState(state => {
      const { list } = state;
      const bIndex = list.findIndex(item => item.id === bId);
      list[bIndex].optionList = list[bIndex].optionList.concat([{ id: optionIdInit, val: '' }]);
      return { list };
    })
  }

  optionDel = (bId, id) => {
    optionIdInit++;
    this.setState(state => {
      const { list } = state;
      const bIndex = list.findIndex(item => item.id === bId);
      list[bIndex].optionList = list[bIndex].optionList.filter(item => item.id !== id);
      return { list };
    })
  }

  optionBoxAdd = () => {
    this.setState(state => {
      optionIdInit++;
      optionBoxIdInit++;
      let { list } = state;
      list = list.concat([{
        id: 'b' + (optionBoxIdInit),
        optionList: [
          { id: optionIdInit, val: '' }
        ]
      }])
      return { list };
    })
  }

  optionBoxDel = (bId) => {
    this.setState(state => {
      let { list } = state;
      list = list.filter(item => item.id !== bId);
      return { list };
    })
  }

  inputChange = (id, pId, val) => {
    this.setState(state => {
      const { list } = state;
      const bIndex = list.findIndex(item => item.id === pId);
      const oIndex = list[bIndex].optionList.findIndex(item => item.id === id);
      list[bIndex].optionList[oIndex].val = val;
      return { list };
    })
  }

  render() {
    const { list } = this.state;
    return (<Root background={{ background: `linear-gradient(0deg,#f5f5f5, #fff)` }}>
      <View className='second-page_container multi-norms'>
        <View className='second-page_caption_wrap'>
          <NavBar title='多规格设置' iconType='zujian471' iconSize='60' iconColor='#ffffff' isCustom>
            <IconFont name='zujian471' size='60' />
          </NavBar>
        </View>
        <View className='second-page_main_wrap '>
          <ScrollView className='multi-norms_wrap' scrollY>
            <View className='mnw-title'>规格项设置</View>
            {list.map((bItem) => <View key='' className='mnw-item'>
              <AtInput title='*规格名称' placeholder='例：颜色'></AtInput>
              {bItem.optionList.map((item) => <View key={item.id} className='mnwi-option flex vc'>
                <View className='icon-opera' onClick={() => this.optionDel(bItem.id, item.id)}>
                  <AtIcon value='subtract' size='12' color='#ffffff'></AtIcon>
                </View>
                <View>
                  <AtInput title='规格项' placeholder='例：白色' value={item.val} onChange={(e) => this.inputChange(item.id, bItem.id, e)} />
                </View>
              </View>)}
              <View className='mnwi-option flex vc'>
                <View className='mnwi-add-icon icon-opera' onClick={() => this.optionAdd(bItem.id)}>
                  <AtIcon value='add' size='12' color='#ffffff'></AtIcon>
                </View>
                <Text className='flex1' onClick={() => this.optionAdd(bItem.id)}>添加规格项</Text>
                <View onClick={() => this.optionBoxDel(bItem.id)}><IconFont name='delete' size='36' color='#848484' /></View>
              </View>
            </View>)}
            <View className='mnw-add flex vc' onClick={this.optionBoxAdd}>
              <View className='mnw-add-icon icon-opera'>
                <AtIcon value='add' size='12' color='#ffffff'></AtIcon>
              </View>
              <Text>添加规格</Text>
            </View>
          </ScrollView>
        </View>

        <View className='second-page_footer_wrap'>
          <AtButton type='primary' className='btn-yellow size4 inline-block'>下一步</AtButton>
        </View>
      </View>
    </Root >)
  }
}

export default Index;