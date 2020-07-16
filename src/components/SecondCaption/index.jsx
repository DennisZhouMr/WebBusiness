import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import IconFont from "@/components/iconfont";

export default class extends Component {
    static options = {
        addGlobalClass: true
    }

    handleBack = () => {
        Taro.navigateBack();
    }

    render() {
        const { title, icon, iconSize, iconColor, backColor, borderColor = '' } = this.props;
        return <View className='getCustomer-caption_container'>
            <View className='left-wrap'>
                <View className='circle-wrap' onClick={this.handleBack} style={{ borderColor: borderColor }}>
                    <View className='circle-box'>
                        <IconFont
                            name='huiyuanliebiansuoxiaodeng'
                            size='28'
                            color={backColor || "rgba(0, 0, 0, 0.5)"}
                        />
                    </View>
                </View>
                <View>
                    <IconFont
                        name={icon}
                        size={iconSize}
                        color={iconColor || "rgba(0, 0, 0, 0.5)"}
                    />
                </View>
                <View className='tit'>{title}</View>
            </View>
        </View>
    }
}