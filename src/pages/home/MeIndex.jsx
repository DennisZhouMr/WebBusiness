import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import IconFont from "@/components/iconfont";

import "./meIndex.scss";

export default class extends Component {
  constructor(props) {
    super(props);
  }
  config = {
    navigationBarTitleText: "我的"
  };
  state = {
    name: "烤什么名堂",
    userNumber: "SX313972",
    address: "莲湖区西门里南马道巷22号",
    list: [
      {
        id: 1,
        title: "门店信息",
        icon: "zu1598"
      },
      {
        id: 2,
        title: "收款账户",
        icon: "zu1599"
      },
      {
        id: 3,
        title: "账户管理",
        icon: "zu1603"
      },
      {
        id: 4,
        title: "在线客户 ",
        icon: "zu1604"
      },
      {
        id: 5,
        title: "我要反馈",
        icon: "zu1609"
      },
      {
        id: 6,
        title: "使用教程",
        icon: "zu4845"
      },
      {
        id: 7,
        title: "代理加盟",
        icon: "zu1607"
      },
      {
        id: 8,
        title: "关于",
        icon: "zu4846"
      }
    ]
  };
  handleClick = item => {
    if (item.id == 3) Taro.navigateTo({ url: "/pages/me/account/index" });
  };
  render() {
    const { name, userNumber, address, list } = this.state;
    return (
      <View className="me-content">
        <View className="account-content">
          <View className="account-info">
            <View className="account-info_name">{name}</View>
            <View className="account-info_p">用户编号：{userNumber}</View>
            <View className="account-info_p">{address} </View>
          </View>
          <View className="account-atavatar">
            <Image src={require("@/assets/images/user.png")} size="small" />
          </View>
        </View>
        <View className="me-list">
          {list.map(item => (
            <View
              className="me-list-item"
              key={item.id}
              onClick={() => {
                this.handleClick(item);
              }}
            >
              <View className="list-item-thumb">
                <IconFont name={item.icon} size={42} />
              </View>
              <View className="list-item-content">{item.title}</View>
            </View>
          ))}
        </View>
      </View>
    );
  }
}
