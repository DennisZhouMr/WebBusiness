import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import IconFont from "@/components/iconfont";
import "./index.scss";

class CardItem extends Component {
  static options = {
    addGlobalClass: true
  }

  componentWillReact() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  handleClick = () => {
    if (this.props.onItemClick) this.props.onItemClick();
  }

  render() {
    const { data = {} } = this.props;
    return (
      <View className="card-item" onClick={this.handleClick}>
        <View className="img-box item">
          <IconFont name={data.icon} size={52} />
        </View>
        <View className="text-box item">
          <View className="title">{data.title}</View>
          <View className="desc">{data.desc}</View>
          <View className="detail">{data.detail}</View>
        </View>
        <View className={`btn-box item ${data.btnType}`}>{data.btnText}</View>
      </View>
    );
  }
}

export default CardItem;
