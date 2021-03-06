Component({
  properties: {
    // gantanhao | huiyuanliebiansuoxiaodeng | zu4772 | lujing5007 | lujing5202 | lujing1016 | lujing1877 | zu1621 | zu1707 | zu1622 | zu1673 | zu1548 | zu1731 | zu1706 | zu1725 | zu1772 | zu1856 | zu2090 | zu1770 | zu1701 | zu1726 | zu1746 | zu1714 | zu1771 | zu1852 | zu2817 | zu2095 | zu4154 | zu1872 | zu2896 | zu4458 | zu4675 | zujian471 | zu1873 | zu4157 | zu4462 | zu1598 | zu1599 | zu4845 | zu1603 | zu1604 | zu4846 | zu1607 | zu1609 | lianhe102 | lianhe99 | lianhe98 | lianhe105 | lianhe104 | lianhe106 | lianhe101 | lianhe103 | zu1535 | zu1537 | zu2967 | lujing1425 | zu1529 | zu1540 | zu1527 | zu4702 | lujing1361 | huodongmoban | baobiaoweixuanze | hudongyueding | jifen | dianpugonggao | xiaofeifanli | hulianweixuanze | saoma | xiaoshoujine | huiyuanliebian | wodeweixuanzhong | shangpinshangjia | xiaofeirenshu | dianpumokuai | tuiguangmoren | avatar2 | avatar | mutual | lianhe120 | logo | exp-fill | more-row | user-circle | punch-clock | store | poster | juxing | wechat | plus-circle | interact | order | zu4409 | purse | user-circle | polygon-five | more | triangle | bottom | export-circle | appoint | form | shop-fill | chat | lock-fill | remind | tags | qrcode | down | alarm-clock | clock | gift-fill | tags-color | export | flag | calendar | share | clause | smile-circle | mulit-people-circle | polygon-one | polygon-two | polygon-three | polygon-four | pay-circle | friends | nifty | right | tag | integral-fill | money | delete | integral | scan | phone-two | shop | exp | location | fly | interact-fill | search | multi-user | mulit-people | qrcode-circle | shouye-lanse | exclamation-circle | user | me | home | phone | exclamation | notice | close | list | check-circle | bullseye | plus | eye | security | lock | telephone | eyesight | check | message | picture
    name: {
      type: String,
    },
    // string | string[]
    color: {
      type: null,
      observer: function(color) {
        this.setData({
          colors: this.fixColor(),
          isStr: typeof color === 'string',
        });
      }
    },
    size: {
      type: Number,
      value: 18,
      observer: function(size) {
        this.setData({
          svgSize: size / 750 * wx.getSystemInfoSync().windowWidth,
        });
      },
    },
  },
  data: {
    colors: '',
    svgSize: 18 / 750 * wx.getSystemInfoSync().windowWidth,
    quot: '"',
    isStr: true,
  },
  methods: {
    fixColor: function() {
      var color = this.data.color;
      var hex2rgb = this.hex2rgb;

      if (typeof color === 'string') {
        return color.indexOf('#') === 0 ? hex2rgb(color) : color;
      }

      return color.map(function (item) {
        return item.indexOf('#') === 0 ? hex2rgb(item) : item;
      });
    },
    hex2rgb: function(hex) {
      var rgb = [];

      hex = hex.substr(1);

      if (hex.length === 3) {
        hex = hex.replace(/(.)/g, '$1$1');
      }

      hex.replace(/../g, function(color) {
        rgb.push(parseInt(color, 0x10));
        return color;
      });

      return 'rgb(' + rgb.join(',') + ')';
    }
  }
});
