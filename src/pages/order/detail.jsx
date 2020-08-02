import Taro, { Component } from "@tarojs/taro";
import { View, ScrollView } from "@tarojs/components";
import { AtTextarea, AtButton } from 'taro-ui';
import Root from "@/components/Root";
import NavBar from '@/components/NavBar';
import IconFont from "@/components/iconfont";

import './detail.scss';

class Index extends Component {
  static options = {
    addGlobalClass: true
  };
  state = {};
  render() {
    return (<Root background={{ background: '#f5f5f5' }}>
      <View className='second-page_container order-detail'>
        <View className='second-page_caption_wrap'>
          <NavBar title='订单详情' iconType='zujian471' iconSize='60' iconColor='#ffffff' isCustom>
            <IconFont name='zujian471' size='60' />
          </NavBar>
        </View>
        <View className='second-page_main_wrap'>
          <ScrollView className='order-detail_wrap' scrollY>
            <View className='dt item'>订单基本信息</View>
            <View className='dd item'>
              <View className='label'>订单编号：</View>
              <View className='text'>KSX(DSX)+商户业态编码+6位随机数商户业态编码+6位随机数</View></View>
            <View className='dt2 item'>
              <View className='label'>订单状态：</View>
              <View className='text'>KSX(DSX)+待到店</View>
            </View>
            <View className='dd item'>
              <View className='label'>下单时间：</View>
              <View className='text'>2020-08-15 00:00:01</View>
            </View>
            <View className='dd item pink'><View className='label'>发货方式：</View>
              <View className='text'>到店自提</View></View>
            <View className='dd item'><View className='label'>应付金额：</View>
              <View className='text'>0.00元</View></View>
            <View className='dd item'><View className='label'>快递金额：</View>
              <View className='text'>0.00元</View></View>
            <View className='dd item hb vc'>
              <View>优惠金额：0.00元</View>
              <View>
                <AtButton type='primary' circle className='btn-yellow size3'>详情</AtButton>
              </View>
            </View>
            <View className='dd item'><View className='label'>实付金额：</View>
              <View className='text bold'>0.00元</View></View>
            <View className='dd item'><View className='label'>抵扣积分：</View>
              <View className='text'>0</View></View>
            <View className='dd item'><View className='label'>赠送积分：</View>
              <View className='text'>0</View></View>
            <View className='dd item'><View className='label'>用户昵称：</View>
              <View className='text'>名称</View></View>
            <View className='dd item'><View className='label'>支付方式：</View>
              <View className='text'>微信支付</View></View>
            <View className='dd item hb'>
              <View className='label'>分销信息：</View>
              <View>
                <View className='inline-block vm'>查看详情</View>
                <View className='inline-block vm icon-box'><IconFont name='right' size='24' /></View>
              </View>
            </View>
            <View className='dd item hb'>
              <View className='label'>核销记录：</View>
              <View>
                <View className='inline-block vm'>查看记录</View>
                <View className='inline-block vm icon-box'><IconFont name='right' size='24' /></View>
              </View>
            </View>
            <View className='dd item'><View className='label'>终端来源：</View>
              <View className='text'>微信／门店扫码（两种来源方式）</View></View>
            <View className='dt item'>收货信息</View>
            <View className='dd item'><View className='label'>提货人姓名：</View>
              <View className='text'></View></View>
            <View className='dd item'><View className='label'>提货地址：</View>
              <View className='text'></View></View>
            <View className='dd item'><View className='label'>联系电话：</View>
              <View className='text'></View></View>
            <View className='dd item'><View className='label'>用户备注：</View>
              <View className='text'></View></View>
            <View className='dt item'>商品列表</View>
            <View className='dd item'><View className='label'>商品名称：</View>
              <View className='text'>商品名称：</View></View>
            <View className='dd item'><View className='label'>商品规格：</View>
              <View className='text'></View></View>
            <View className='dd item'><View className='label'>商品价格：</View>
              <View className='text'></View></View>
            <View className='dd item'><View className='label'>下单数量：</View>
              <View className='text'></View></View>
            <View className='dd item'><View className='label'>商品编号：</View>
              <View className='text'></View></View>
            <View className='dt item'>其他操作</View>
            <View className='textarea-box'>
              <View className='label'>订单商家备注：</View>
              <View>
                <AtTextarea className='edit-level-card_main font-6' placeholder='请输入活动描述' />
              </View>
            </View>
            <View className='textarea-btn'>
              <AtButton type='primary' className='btn-yellow size1 inline-block'>保存备注</AtButton>
            </View>
          </ScrollView>
        </View>

        <View className='second-page_footer_wrap at-row at-row__align--center'>
          {/* 到店自提 */}
          <View className='item'>
            <View className='inline-block icon-box'><IconFont name='right' size='40' /></View>
            <View>取消订单</View>
          </View>
          <View className='item'>
            <AtButton type='primary' className='btn-yellow size2 inline-block' circle>扫码核销</AtButton>
            {/* <AtButton type='primary' disabled className='btn-yellow size2 inline-block' circle>扫码核销</AtButton> */}
          </View>
          {/* 快递配送 */}
          {/* <View className='item'>
            <View className='inline-block icon-box'><IconFont name='right' size='40' /></View>
            <View>取消订单</View>
          </View>
          <View className='item'>
            <AtButton onClick={()=>Taro.navigateTo({ url: '/pages/order/sendOut' })} type='primary' className='btn-yellow size2 inline-block' circle>即刻发货</AtButton>
          </View> */}

          {/* 已发货 快递配送 */}
          {/* <View className='item'>
            <View className='inline-block icon-box'><IconFont name='right' size='40' /></View>
            <View>操作日志</View>
          </View>
          <View className='item'>
            <AtButton type='primary' className='btn-yellow size2 inline-block' circle>扫码核销</AtButton>
          </View> */}
          {/* 已完成 到店自提 */}
          {/* <View className='item'>
            <View className='inline-block icon-box'><IconFont name='right' size='40' /></View>
            <View>删除订单</View>
          </View>
          <View className='item'>
            <View className='inline-block icon-box'><IconFont name='right' size='40' /></View>
            <View>操作日志</View>
          </View> */}
        </View>
      </View>
    </Root >)
  }
}

export default Index;