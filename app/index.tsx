import { Button } from '@/components/ui/button'
import React from 'react'
import { Text, View } from 'react-native'

const index = () => {
  return (
    <View className='pt-10 px-4'>
        <Text className='text-red-500 mb-4'>Index Page</Text>
        <Button variant='secondary' className='mb-4'>
          <Text className='text-red-300'>Default Button</Text>
        </Button>
    </View>
  )
}

export default index