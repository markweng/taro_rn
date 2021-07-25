import { Component } from 'react'
import { View, Text ,Swiper} from '@tarojs/components'
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
        <Swiper className='swiper' autoplay circular>
          <View className='item'/>
          <View className='item1'/>
          <View className='item2'/>
          <View className='item3'/>
        </Swiper>
      </View>
    )
  }
}
