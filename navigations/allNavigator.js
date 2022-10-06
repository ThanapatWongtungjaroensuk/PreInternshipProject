import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { HomeScreen, AllAnimeTypeScreen, AnimeDetails, ListMarkScreen, SearchScreen } from '../screen/index'
import ShowGrid from '../component/showGrid';
import ShowThumbnails from '../component/showThumb';
import Tabs from './tabs'

const Stack = createNativeStackNavigator()

function AllNavigator() {
  return (
    <Stack.Navigator>
        <Stack.Group>
            <Stack.Screen name='HomePage' options={{ headerShown: false }} component={Tabs}/>
            <Stack.Screen name='SearchPage' component={SearchScreen} options={{ headerShown: false}}/>
            <Stack.Screen name='MyList' component={ListMarkScreen} options={{ headerShown: true}}/>
        </Stack.Group>
        <Stack.Group>
            <Stack.Screen name='TypeGrid' options={{ headerShown: false }} component={ShowGrid}/>
            <Stack.Screen name='AnimeFromTypePage' options={{ headerShown: false }} component={AllAnimeTypeScreen}/>
        </Stack.Group>
        <Stack.Group>
            <Stack.Screen name='ThumbAnime' options={{ headerShown: false }} component={ShowThumbnails}/>
            <Stack.Screen name='SearchingAnime' options={{ headerShown: false}} component={SearchScreen}/>
            <Stack.Screen name='Details' options={{ headerShown: false }} component={AnimeDetails}/>
        </Stack.Group>
    </Stack.Navigator>
  )
}

export default AllNavigator