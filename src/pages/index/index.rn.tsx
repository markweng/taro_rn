import { Component } from 'react'
import { View, Text ,Swiper,SwiperItem} from '@tarojs/components'
import './index.scss'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>this is rn conponent</Text>
        <Swiper className='swiper' autoplay circular >
          <SwiperItem >
          <View className='item'>1</View>
          </SwiperItem>
          <SwiperItem >
          <View className='item1'>2</View>
          </SwiperItem>
          <SwiperItem >
          <View className='item2'>3</View>
          </SwiperItem>
        </Swiper>
        <View className='view1'/>
        <Text className='text1'>xxxxx</Text>
        <View className='view2'>
          {
            [0,0,0,0].map((item, index)=>{
              return <View className='hitem' key={index + item}>{index}</View>
            })
          }
        </View>
      </View>
    )
  }
}
