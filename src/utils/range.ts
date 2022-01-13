
export const range = (start: number, end?: number, step?: number) => {
    if(start >= 0 && !end && !step) {
        return [...new Array(start).keys()]
    } else {
        const out = []

        if(start >= 0 && end && end > start && step === 0) {
            for(let i=start; i<end; i++) {
                out.push(1)
            }
            return [...out]
        }

        if(start >= 0 && end && end > start && (!step || Math.abs(step) === 1)) {
            for(let i=start; i<end; i++) {
                out.push(i)
            }
            return [...out]
        }

        if(start <= 0 && end && end < start && (!step || Math.abs(step) === 1)) {
            for(let i=end+1; i<=start; ++i) {
                out.push(i)
            }
            return [...out.reverse()]
        }

        if(start >= 0 && end && end > start && step > 0) {
            for(let i=start; i<end; i=i+step) {
                out.push(i)
            }
            return [...out]
        }

        if(start <= 0 && end && end < start && step < 0) {
            for(let i=end+1; i<=start; i=i+step) {
                out.push(i)
            }
            return [...out.reverse()]
        }

        for (let i=start+1; i<=0; ++i) {
            out.push(i)
        }
        return [...out.reverse()]
    }

}