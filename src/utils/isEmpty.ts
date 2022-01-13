
export const isEmpty = (value: any):boolean => {
    if(value) {
        if(typeof value === 'object') {
            if(Array.isArray(value)) {
                return value.length === 0 ? true : false
            }
            if(value.size > 0) {
                return false
            }
            return Object.values(value).length === 0 ? true : false
        }
        if(typeof value === 'string') {
            return value.length === 0 ? true : false
        }
        if(typeof value === 'number') {
            return  true
        }
        return value ? true : false
    } else {
        if(typeof value === 'string') {
            return value.length === 0 ? true : false
        }
        if(value === 0 || value === null || value === false|| value === undefined) {
            return true
        } else return false
    }
}