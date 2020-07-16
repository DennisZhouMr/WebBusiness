import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtButton, AtInput } from "taro-ui";
import IconFont from "@/components/iconfont";
import Root from "@/components/Root";
import NavBar from "@/components/NavBar";
import Modal from "@/components/Modal";
import SmallSwitch from '@/components/SmallSwitch'

import "./add.scss";

export default class extends Component {
  config = {
    navigationBarTitleText: "编辑分类"
  };
  state = {
    classifyName: this.$router.params.name,
    isOpened: false,
    isConfirmOpend: false,
    status: false
  };
  handleDelete = () => {
    this.setState({ isOpened: true });
  };
  handleCancel = () => {
    this.setState({ isOpened: false });
  };
  handleCompleteConfirm = () => {
    this.setState({ isConfirmOpend: false });
  };
  handleConfirm = () => {
    this.setState({
      isOpened: false,
      isConfirmOpend: true
    });
  };
  handleSubmit = () => {
    const { classifyName } = this.state;
    if (!classifyName) {
      Taro.showToast({ title: "请输入分类名称", icon: "none" });
      return false;
    }
    Taro.navigateTo({ url: "/pages/spread/shopModulars/classify/index" });
  };
  switchChange = () => {
    this.setState((state) => ({
      status: !state.status
    }))
  }
  render() {
    const { classifyName, isOpened, isConfirmOpend, status } = this.state;
    return (
      <Root
        background={{
          background: `linear-gradient(#fff, #f5f5f5)`
        }}
      >
        <View className="common-wrapper classify-add-wrapper">
          <NavBar
            title="编辑分类"
            iconType="zujian471"
            iconSize={60}
          />
          <View className="classify-add-main">
            <View className="default-list-container classify-add-info">
              <View className="list-item">
                <View className="list-item-container">
                  <View className="list-item-content">
                    <View className="list-item-content_title">分类名称*</View>
                  </View>
                  <View className="list-item-extra">
                    <View className="list-item-extra_info">
                      <AtInput
                        className="input-content"
                        type="text"
                        placeholder="默认分类"
                        placeholderClass="placeholder"
                        value={classifyName}
                        onChange={value => {
                          this.setState({ classifyName: value });
                        }}
                      />
                    </View>
                  </View>
                </View>
              </View>
              <View className="list-item">
                <View className="list-item-container">
                  <View className="list-item-content">
                    <View className="list-item-content_title">分类状态</View>
                  </View>
                  <View className="list-item-extra">
                    <SmallSwitch isOpen={status} onChange={this.switchChange} />
                  </View>
                </View>
                <View className='tags'>
                  <View>打开后，分类即可展示出来。</View>
                  <View>关闭后，改分类选项会被隐藏</View>
                </View>
              </View>
              <View className="list-item">
                <View className="list-item-container">
                  <View className="list-item-content"></View>
                  <View className="list-item-extra" onClick={this.handleDelete}>
                    <View className="list-item-extra_info empty">删除</View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View className="button-position">
            <AtButton
              type="secondary"
              className="default-button primary-button"
              onClick={this.handleSubmit}
            >
              保存
            </AtButton>
          </View>
        </View>
        <Modal isOpened={isOpened} onConfirm={this.handleConfirm} onCancel={this.handleCancel} iconTyle="gantanhao" iconColor="#FF3F81" iconSize={110} isGroup groupContent={["取消", "删除"]} title="提示" >
          <View style={{ textAlign: 'center' }}>确认要删除该分类吗？</View>
          <View style={{ textAlign: 'center' }}>删除该分类，对应类别下的商品</View>
          <View style={{ textAlign: 'center' }}>不会被删除，请注意重新设置类别</View>
        </Modal>
        <Modal
          isOpened={isConfirmOpend}
          title="提示"
          okText="确定"
          contentText="该分类下有商品，无法删除哦"
          onConfirm={this.handleCompleteConfirm}
        />
      </Root>
    );
  }
}
