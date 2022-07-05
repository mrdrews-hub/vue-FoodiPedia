const STORE_NAME = 'FAVORITED'

export function checkStore () {
    return Boolean(localStorage.getItem(STORE_NAME))
}

export function getItem () {
    if (!checkStore()) {
        return []
    } else {
        return JSON.parse(localStorage.getItem(STORE_NAME))
    }
}

export function setItem (data) {
    if (typeof data !== 'object') throw new TypeError('Data must be an object')
    if (!checkStore()) {
        localStorage.setItem(STORE_NAME, JSON.stringify([data]))
    } else {
        const storage = getItem()
        storage.push(data)

        localStorage.setItem(STORE_NAME, JSON.stringify(storage))
    }
}