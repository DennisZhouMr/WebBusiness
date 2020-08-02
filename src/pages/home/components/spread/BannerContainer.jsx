import Taro, { Component } from '@tarojs/taro';
import IconFont from "@/components/iconfont";
import { View, Swiper, SwiperItem } from '@tarojs/components'

import './BannerContainer.scss'

class BannerContainer extends Component {
    render() {
        return (
            <View className='banner-container'>
                <Swiper className='swiper-box' indicatorDots indicatorColor='#AAAAAA'>
                    <SwiperItem>
                        <View className='swiper-item'>
                        <IconFont name='picture' size={48} color='#848484' />
                        </View>
                    </SwiperItem>
                    <SwiperItem>
                        <View className='swiper-item'>
                        <IconFont name='picture' size={48} color='#848484' />
                        </View>
                    </SwiperItem>
                    <SwiperItem>
                        <View className='swiper-item'>
                        <IconFont name='picture' size={48} color='#848484' />
                        </View>
                    </SwiperItem>
                </Swiper>
            </View>
        );
    }
}

export default BannerContainer;
