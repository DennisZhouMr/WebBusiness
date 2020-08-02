import Taro, { Component } from "@tarojs/taro";
import { View, ScrollView } from "@tarojs/components";
import { AtTextarea, AtButton } from 'taro-ui';
import Root from "@/components/Root";
import NavBar from '@/components/NavBar';
import IconFont from "@/components/iconfont";

import './index.scss';

const list = []

class Index extends Component {
  static options = {
    addGlobalClass: true
  };
  state = {};
  render() {
    return (<Root background={{ background: '#f5f5f5' }}>
      <View className='second-page_container system-record'>
        <View className='second-page_caption_wrap'>
          <NavBar title='核销记录' iconType='zujian471' iconSize='60' iconColor='#ffffff' isCustom>
            <IconFont name='zujian471' size='60' />
          </NavBar>
        </View>
        <View className='second-page_main_wrap'>
          <ScrollView className='system-record_wrap' scrollY>
            {
              (list.length !== 0)
                ?
                <View></View>
                :
                <View className='no-data'>
                  <View className='icon-box inline-block'>
                    <IconFont name='zu1548' size='100' color='#E4E4E4' />
                  </View>
                  <View className='text1'>您还没有核销记录</View>
                  <View className='text2'>当你使用核销后，会记录你的核销信息</View>
                </View>
            }
          </ScrollView>
        </View>

        <View className='second-page_footer_wrap at-row at-row__align--center'>

        </View>
      </View>
    </Root >)
  }
}

export default Index;