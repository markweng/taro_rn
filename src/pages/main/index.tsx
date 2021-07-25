import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class Main extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='main'>
        <Text>Hello world!</Text>
      </View>
    )
  }
}
