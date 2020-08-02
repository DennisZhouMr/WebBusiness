import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import IconFont from "@/components/iconfont";
import ListTextItem from "@/components/ListTextItem";

import "./index.scss";

export default class extends Component {
  static options = {
    addGlobalClass: true
  };

  state = {}

  componentDidMount() {
  }

  handleClick = val => {
    if (!this.props.checked) {
      this.props.onChange(val);
    } else {
      this.props.onChange();
    }
  }

  render() {
    const { checked, className = '', isCustom = false, label = '', val = '', iconColor = '#ffffff' } = this.props;
    return (
      <View className={`custom-checkbox flex vc ` + className}>
        <View className={`flex hc vc icon-box ${checked && 'checked'}`} onClick={() => this.handleClick(val)}>
          {checked && <IconFont name='check' size='40' color={iconColor} />}
        </View>
        {isCustom ? this.props.children : <ListTextItem onHandleClick={() => this.handleClick(val)} label={label} val={val}></ListTextItem>}
      </View>
    );
  }
}
