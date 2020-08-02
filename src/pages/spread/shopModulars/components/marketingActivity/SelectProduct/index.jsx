import Taro, { Component } from "@tarojs/taro";
import { View, Text, ScrollView } from "@tarojs/components";
import IconFont from "@/components/iconfont";
import CartControl from "../../Cartcontrol";
import "./index.scss";
const mock = [
  {
    id: 1,
    name: "默认分类",
    goods: [
      {
        goods_id: "51",
        name: "粥",
        price: 10,
        count: 0
      },
      {
        goods_id: "52",
        name: "饼",
        price: 5,
        count: 0
      },
      {
        goods_id: "53",
        name: "饼",
        price: 5,
        count: 0
      },
      {
        goods_id: "54",
        name: "饼",
        price: 5,
        count: 0
      },
      {
        goods_id: "55",
        name: "饼",
        price: 5,
        count: 0
      }
    ]
  },
  {
    id: 2,
    name: "分类名称",
    goods: [
      {
        goods_id: "73",
        name: "可乐",
        price: 5,
        count: 0
      },
      {
        goods_id: "54",
        name: "饼",
        price: 5,
        count: 0
      },
      {
        goods_id: "55",
        name: "饼",
        price: 5,
        count: 0
      },
      {
        goods_id: "56",
        name: "饼",
        price: 5,
        count: 0
      },
      {
        goods_id: "52",
        name: "饼",
        price: 5,
        count: 0
      },
      {
        goods_id: "74",
        name: "雪碧",
        price: 5,
        count: 0
      },
      {
        goods_id: "75",
        name: "饼",
        price: 5,
        count: 0
      },
      {
        goods_id: "76",
        name: "饼",
        price: 5,
        count: 0
      }
    ]
  }
];
export default class extends Component {
  static options = {
    addGlobalClass: true
  };
  state = {
    menuActive: 0,
    listHeight: [],
    scrollTop: 0,
    goodsList: mock
  };
  componentDidMount() {
    this.calculateHeight();
  }
  calculateHeight = () => {
    let { listHeight } = this.state;
    let height = 0;
    const query = Taro.createSelectorQuery().in(this.$scope);
    query
      .selectAll(".goods-list-hook")
      .boundingClientRect(res => {
        console.log(res);
        listHeight.push(height);
        for (let i = 0; i < res.length; i++) {
          height += res[i].height;
          listHeight.push(height);
        }
        this.setState({
          listHeight
        });
      })
      .exec();
  };
  handleMenuClick = (item, index) => {
    const { listHeight } = this.state;
    this.setState({ menuActive: index, scrollTop: listHeight[index] });
  };
  //数量加减
  handleCartUpdate = data => {
    let { goodsList } = this.state;
    goodsList.map(item => {
      item.goods.map(goods => {
        if (goods.goods_id == item.goods_id) {
          goods.count = data.count;
        }
        return goods;
      });
      return item;
    });
    this.setState({ goodsList });
  };
  render() {
    const { menuActive, goodsList, scrollTop } = this.state;
    return (
      <View className="select-product-container">
        <ScrollView
          scrollY
          scrollWithAnimation
          scrollTop={scrollTop}
          style={{ height: "550PX" }}
          className="menu-wrapper"
        >
          <View className="menu-list">
            {goodsList && goodsList.length > 0 ? (
              <View>
                {goodsList.map((item, index) => (
                  <View
                    key={item.id}
                    className={`menu-list-item ${
                      menuActive == index ? "item--active" : ""
                    }`}
                    onClick={() => this.handleMenuClick(item, index)}
                  >
                    <View className="text">{item.name}</View>
                  </View>
                ))}
              </View>
            ) : (
              <View className="menu-list-item item--active">默认分类</View>
            )}
            <View
              className="menu-list-item"
              onClick={() => {
                Taro.navigateTo({
                  url: "/pages/spread/shopModulars/myGoods/addType"
                });
              }}
            >
              + 分类
            </View>
          </View>
        </ScrollView>
        <ScrollView
          scrollY
          scrollWithAnimation
          scrollTop={scrollTop}
          style={{ height: "550PX" }}
          className="select-product-wrapper"
        >
          {goodsList && goodsList.length > 0 ? (
            <View>
              {goodsList.map((item, index) => (
                <View key={item.id} className="goods-list-hook">
                  <View className="title">
                    <Text>●</Text>
                    {item.name}（{item.goods.length}个）
                  </View>
                  <View className="goods-content">
                    <View className="goods-list">
                      {item.goods.map(goods => (
                        <View className="goods-item" key={goods.goods_id}>
                          <View className="content">
                            <View className="picture">
                              <IconFont name="picture" size={40} />
                            </View>
                            <View className="detail">
                              <View className="top">
                                <View className="goods-name">{goods.name}</View>
                              </View>
                              <View className="goods-price">
                                <View className="money">
                                  <Text>¥{goods.price}</Text>/份
                                </View>
                                <CartControl
                                  dateSouce={goods}
                                  onCartUpdate={this.handleCartUpdate}
                                  maxCount={100}
                                />
                              </View>
                            </View>
                          </View>
                        </View>
                      ))}
                    </View>
                  </View>
                </View>
              ))}
            </View>
          ) : (
            <View>
              <View className="title">
                <Text>●</Text>
                默认分类（0个）
              </View>
              <View className="goods-content">
                <View className="empty">目前没有预选的商品</View>
              </View>
            </View>
          )}
        </ScrollView>
      </View>
    );
  }
}
