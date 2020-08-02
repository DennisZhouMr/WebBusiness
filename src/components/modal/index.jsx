import Taro, { Component } from "@tarojs/taro";
import { View, Button } from "@tarojs/components";
import IconFont from "@/components/iconfont";

export default class extends Component {
  static options = {
    addGlobalClass: true
  };
  constructor(props) {
    super(props);
  }
  handleConfirm = e => {
    const { onConfirm } = this.props;
    e.stopPropagation();
    onConfirm();
  };
  handleClose = () => {
    const { onConfirm } = this.props;
    onConfirm();
  };
  render() {
    const {
      iconTyle,
      iconSize,
      iconColor,
      title,
      isOpened,
      contentText,
      okText,
      isGroup = false,
      groupContent = [],
      onCancel
    } = this.props;
    return (
      <View className={isOpened ? "mp-modal mp-modal--active" : "mp-modal"}>
        <View className="mp-modal__overlay" onClick={this.handleClose}></View>
        <View className="mp-modal__container">
          <View className="mp-modal__icon">
            <IconFont
              name={iconTyle || "lujing1016"}
              size={iconSize || 79}
              color={iconColor || ""}
            />
          </View>
          <View className="mp-modal__title">{title}</View>
          <View className="mp-modal__content">
            <View className="modal-content">
              {contentText ? contentText : this.props.children}
            </View>
          </View>
          <View className="mp-modal__footer">
            {isGroup ? (
              <View className="button-position">
                <View className="button-group">
                  <Text onClick={onCancel}>
                    {groupContent && groupContent[0]}
                  </Text>
                  <Text onClick={this.handleConfirm}>
                    {groupContent && groupContent[1]}
                  </Text>
                </View>
              </View>
            ) : (
                <Button className="btn-max-w" onClick={this.handleConfirm}>
                  {okText}
                </Button>
              )}
          </View>
        </View>
      </View>
    );
  }
}
