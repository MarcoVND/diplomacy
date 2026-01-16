import { Button } from '@/components/ui/button'
import React from 'react'
import { Text, View } from 'react-native'

const index = () => {
  return (
    <View className='pt-10 px-4'>
        <Text className='text-primary mb-4'>Index Page</Text>
        <Button variant='default' className='mb-4'>
          <Text className='text-primary-foreground'>Default Button</Text>
        </Button>
    </View>
  )
}

export default index