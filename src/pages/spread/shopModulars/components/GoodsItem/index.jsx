import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { AtTag } from 'taro-ui';
import IconFont from '@/components/iconfont';
import Modal from "@/components/Modal";
import CartControl from '../Cartcontrol';
import './index.scss';

export default class extends Component {
  static options = {
    addGlobalClass: true
  };
  state = {
    isOpened: false
  };
  handleConfirm = () => {
    this.setState({
      isOpened: false
    });
  };
  handleCancel = () => {
    this.setState({ isOpened: false });
  };

  handleDelete = (e) => {
    e.stopPropagation();
    this.setState({ isOpened: true });
  };
  skipUrl = () => {
    Taro.navigateTo({ url: '/pages/spread/shopModulars/myGoods/edit2' })
  }
  render() {
    const {
      dateSouce = {},
      extra = true,
      cartControl = false,
      onCartUpdate
    } = this.props;
    const { isOpened } = this.state;
    return (
      <View className='goods-item-container'>
        <View className='goods-item'>
          <View className='content' onClick={this.skipUrl}>
            <View className='picture'>
              <IconFont name='picture' size={40} />
            </View>
            <View className='detail'>
              <View className='gid-tit ellipsis'>{dateSouce.name}商品名称商品名称商品名称商品名称商品名称商品名称商品名称</View>
              <View className='gid-desc'>{dateSouce.desc}</View>
              <View className='gid-norms flex vc'>
                <View><Text>销量</Text>{dateSouce.sales}</View>
                <View className='v-line'></View>
                <View><Text>库存</Text>{dateSouce.count}</View>
              </View>
              <View className='gid-price flex vc'>
                <View>¥{dateSouce.price}</View>
                <View className='tag'>码</View>
              </View>
              <View className='gid-time ellipsis'>
                <Text>创建时间：</Text>{dateSouce.time}
              </View>
            </View>
          </View>
          {extra && (
            <View className='gi-extra flex hb '>
              <View onClick={this.skipUrl}><IconFont name='right' size={25} /></View>
              <View onClick={this.props.onShowPrompt}><IconFont name='more' size={40} /></View>
            </View>
          )}
          <View className='h-line'></View>
        </View>
        {dateSouce.showPrompt && <View className='gi-prompt flex vc' onClick={this.props.onShowPrompt}>
          <View className='gip-item flex hc vc'>
            <View className='icon-box'><IconFont name='zu1852' size={38} /></View>
            <View>预览</View>
          </View>
          <View className='gip-item flex hc vc'>
            <View className='icon-box'><IconFont name='zu1852' size={38} /></View>
            <View>分享</View>
          </View>
          <View className='gip-item flex hc vc' onClick={this.handleDelete}>
            <View className='icon-box'><IconFont name='zu1852' size={38} /></View>
            <View>删除</View>
          </View>
        </View>}
        <Modal isOpened={isOpened} onConfirm={this.handleConfirm} onCancel={this.handleCancel} iconTyle="gantanhao" iconColor="#FF3F81" iconSize={110} isGroup groupContent={["取消", "删除"]} title="提示" >
          <View style={{ textAlign: 'center' }}>被删除的商品，你和客户将无法看到</View>
          <View style={{ textAlign: 'center' }}>确定删除这个商品吗？</View>
        </Modal>
      </View>
    );
  }
}
