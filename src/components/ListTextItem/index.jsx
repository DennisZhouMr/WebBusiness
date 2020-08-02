import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";

import "./index.scss";

export default class extends Component {
  static options = {
    addGlobalClass: true
  };

  handleClick = () => {
    if (this.props.onHandleClick) {
      this.props.onHandleClick();
    }
  }

  render() {
    const { className = '', label = '', val = '' } = this.props;
    return (
      <View className={`list-text-item flex ` + className} onClick={this.handleClick}>
        <View className='lti-label'>{label}</View>
        <View className='lti-val flex1'>
          {val || this.props.children}
        </View>
      </View>
    );
  }
}