import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { HomeScreen, SearchScreen, AllAnimeTypeScreen } from '../screen/index'
import ShowGrid from '../component/showGrid';
import Tabs from './tabs'

const Stack = createNativeStackNavigator()

function AllNavigator() {
  return (
    <Stack.Navigator>
        <Stack.Group>
            <Stack.Screen name='HomePage' options={{ headerShown: false }} component={Tabs}/>
            <Stack.Screen name='SearchPage' component={SearchScreen} options={{ headerShown: true, headerTitle: 'Search' }}/>
        </Stack.Group>
        <Stack.Group>
            <Stack.Screen name='TypeGrid' options={{ headerShown: false }} component={ShowGrid}/>
            <Stack.Screen name='AnimeFromTypePage' options={{ headerShown: false }} component={AllAnimeTypeScreen}/>
        </Stack.Group>
    </Stack.Navigator>
  )
}

export default AllNavigator