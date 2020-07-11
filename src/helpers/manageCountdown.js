import AsyncStorage from '@react-native-community/async-storage'

export const addCountdown = async (countdown) => {
    const currentCountdownList = await getAllCountdown()
    const newCountdownList = [...currentCountdownList, countdown]

    await AsyncStorage.setItem('countdown-list', JSON.stringify(newCountdownList))
}

export const getAllCountdown = async () => {

    const stringified = await AsyncStorage.getItem('countdown-list')
    const parsed = JSON.parse(stringified)

    return parsed || []

}

export const deleteCountdown = async (countdown) => {

    const currentCountdownList = await getAllCountdown()
    const newCountdownList = currentCountdownList.filter((item) => {
        if(item.start === countdown.start) return

        return item
    })

    await AsyncStorage.setItem('countdown-list', JSON.stringify(newCountdownList))

}