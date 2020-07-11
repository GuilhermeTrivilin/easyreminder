export const maskDate = (value) => {
    if(value.length === 2 || value.length === 5){
        return value + '/'
    }

    return value
}