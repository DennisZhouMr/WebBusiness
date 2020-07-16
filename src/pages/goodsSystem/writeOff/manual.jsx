import Taro, { Component } from "@tarojs/taro";
import { View, Image } from "@tarojs/components";
import { AtInput, AtButton } from 'taro-ui';
import Root from "@/components/Root";
import NavBar from '@/components/NavBar';
import IconFont from "@/components/iconfont";

import './index.scss';

class Index extends Component {
  static options = {
    addGlobalClass: true
  };
  state = { numberVal: '', btnDisabled: true };

  handleChange = value => {
    const stateObj = { numberVal: value };
    if (value) {
      stateObj.btnDisabled = false;
    } else {
      stateObj.btnDisabled = true
    }
    this.setState(stateObj);
  }

  render() {
    const { numberVal, btnDisabled } = this.state;
    return (<Root background={{ background: '#434343' }}>
      <View className='second-page_container write-off-index'>
        <View className='second-page_caption_wrap'>
          <NavBar title='' iconType='zujian471' iconSize='60' iconColor='#ffffff' isCustom>
            <IconFont name='zujian471' size='60' />
          </NavBar>
        </View>
        <View className='second-page_main_wrap'>
          <View className='write-off-index_wrap'>
            <View className='want-container'>
              <View className='flex he'><IconFont name='zu1770' size='60' /></View>
              <View className='input-box'>
                <AtInput
                  name='value2' type='number'
                  placeholder='请输入核销串码' placeholderClass='input-placeholder'
                  value={numberVal}
                  onChange={this.handleChange.bind(this)}
                />
              </View>
            </View>
            <View className='record-icon-box'>
              <View className='inline-block'>
                <View className='icon-box flex hc vc'><IconFont name='zu1770' size='60' /></View>
                <View>核销记录</View>
              </View>
            </View>
            <View>
              <AtButton type='primary' disabled={btnDisabled} className='btn-yellow size4'>验证</AtButton>
            </View>
          </View>
        </View>
      </View>
    </Root>)
  }
}

export default Index;