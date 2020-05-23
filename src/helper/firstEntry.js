import AsyncStorage from '@react-native-community/async-storage';

export const isFirstEntry = async () => {
    const stringified = await AsyncStorage.getItem('firstEntry')
    const parsed = JSON.parse(stringified)

    if(parsed){
        return true
    } else {
        await AsyncStorage.setItem('firstEntry', 'true')
        return false
    }
} 