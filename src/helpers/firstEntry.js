import AsyncStorage from '@react-native-community/async-storage';

export const isFirstEntry = async () => {
    const stringified = await AsyncStorage.getItem('alreadyEntry')
    const parsed = JSON.parse(stringified)

    if(parsed){
        return true
    } else {
        await AsyncStorage.setItem('alreadyEntry', 'true')
        return false
    }
} 