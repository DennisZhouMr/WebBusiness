import Taro, { Component } from "@tarojs/taro";
import { View, Text, RichText } from "@tarojs/components";
import { AtButton } from 'taro-ui';
import IconFont from "@/components/iconfont";

export default class extends Component {
    static options = {
        addGlobalClass: true
    }
    skipUrl = () => {
        if (!this.props.setUrl) return;
        Taro.navigateTo({
            url: this.props.setUrl
        })
    }

    skipBtnUrl = () => {
        if (!this.props.btnUrl) return;
        Taro.navigateTo({
            url: this.props.btnUrl
        })
    }
    render() {
        const {
            title = '',
            desc = '',
            step = '',
            btnText = '',
            smallTit = '',
            smallIcon = '',
            specialDesc = '',
            specialTit,
            isShowSpecialSet
        } = this.props;
        return <View className='getCustomer-contentCard_container'>
            <View className='caption'>
                <View className='item'>
                    <View className='tit'>{title}</View>
                    <View className='step'>
                        <Text className='pr-8'>STEP</Text>
                        <Text className='num'>{step}</Text>
                    </View>
                </View>
                <View className='item caption-content'>
                    <View className='desc'><Text>{desc}</Text></View>
                    <View className='btn'>
                        <AtButton circle onClick={this.skipBtnUrl}>{btnText}</AtButton>
                    </View>
                </View>
            </View>
            <View className='small-caption'>
                <IconFont
                    name={smallIcon}
                    size='28'
                />
                <RichText className='text' nodes={smallTit}></RichText>
            </View>
            <View className='small-special'>
                <View className='text-box'>
                    <View className='tit'>{specialTit}</View>
                    <View className='desc ellipsis'>{specialDesc}</View>
                </View>
                {isShowSpecialSet &&
                    <View className='set-btn' onClick={this.skipUrl}>
                        <AtButton circle>去设置</AtButton>
                    </View>
                }
            </View>
            <View>
                {this.props.children}
            </View>
        </View>
    }
}