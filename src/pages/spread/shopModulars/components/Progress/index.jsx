import Taro, { Component } from "@tarojs/taro";
import { View, Canvas, Text } from "@tarojs/components";
import "./index.scss";

export default class extends Component {
  componentDidMount() {
    this.drawProgressbg(this.props.progress);
    this.drawCircle();
  }

  //绘制背景
  drawProgressbg() {
    const { size, strokeWidth, bgColor } = this.props;
    // 使用 .createContext 获取绘图上下文 context
    const ctx = Taro.createCanvasContext("canvasProgressbg", this);
    ctx.setLineWidth(strokeWidth / 3); // 设置圆环的宽度
    ctx.setStrokeStyle(bgColor); // 设置圆环的颜色
    ctx.setLineCap("butt"); // 设置圆环端点的形状
    ctx.beginPath(); //开始一个新的路径
    ctx.arc(
      size / 4,
      size / 4,
      size / 4 - strokeWidth / 3,
      0,
      2 * Math.PI,
      false
    ); //x,y,半径,开始,结束
    ctx.stroke(); //对当前路径进行描边
    ctx.draw();
  }
  drawCircle() {
    const { size, strokeWidth, color, progress } = this.props;
    // 使用 wx.createContext 获取绘图上下文 context  绘制彩色进度条圆环
    var context = Taro.createCanvasContext("canvasProgress", this);
    context.setLineWidth(strokeWidth / 3);
    context.setStrokeStyle(color);
    context.setLineCap("round");
    context.beginPath(); //开始一个新的路径
    // step 从0到2为一周
    context.arc(
      size / 4,
      size / 4,
      size / 4 - strokeWidth / 3,
      -Math.PI / 2,
      progress * 2 * Math.PI - Math.PI / 2,
      false
    );
    // context.arc(50, 50, 50 - 8, -Math.PI / 2, 2 * Math.PI - Math.PI / 2, false);
    context.stroke(); //对当前路径进行描边
    context.draw();
  }
  render() {
    const { size, progress } = this.props;
    return (
      <View
        className="progress_box"
        style={{ width: `${size}rpx`, height: `${size}rpx` }}
      >
        <Canvas
          className="progress_bg"
          canvasId="canvasProgressbg"
          style={{ width: `${size}rpx`, height: `${size}rpx` }}
        ></Canvas>
        <Canvas
          className="progress_canvas"
          canvasId="canvasProgress"
          style={{ width: `${size}rrpx`, height: `${size}rpx` }}
        ></Canvas>
        <View class="circle_info">
          <Text class="circle_txt">{progress * 100}%</Text>
        </View>
      </View>
    );
  }
}
