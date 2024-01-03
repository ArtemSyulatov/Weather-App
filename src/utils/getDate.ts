export function getCurrentDate(separator: string = '.'): string {
    const myCurrentDate = new Date()
    const date = myCurrentDate.getDate();
    const month = myCurrentDate.getMonth() + 1;
    const year = myCurrentDate.getFullYear();
    return `${date}${separator}${month < 10 ? `0${month}` : `${month}`}${separator}${year}`
}

export function showTime() {
    const date = new Date()
    const currentTime = date.toLocaleTimeString()
    setTimeout(showTime, 1000)
    return currentTime
}
