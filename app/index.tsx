import { View, Text } from 'react-native'
import React from 'react'
import { animationMenuRoutes } from '@/constants/Routes'
import { Href, Link } from 'expo-router'
import ThemedView from '@/presentation/shared/ThemedView'

const ComponentsApp = () => {
  return (
    <ThemedView margin>
      {
        animationMenuRoutes.map((route, index) => (
            <Link href={route.name.split('/')[0] as Href}>{route.title}</Link>
        ))
      }
    </ThemedView>
  )
}

export default ComponentsApp