class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if(!this.keyStore.has(key)) {
            this.keyStore.set(key, []);
        }
        this.keyStore.get(key).push([value, timestamp]);
        console.log(this.keyStore);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if(this.keyStore.has(key) == false){
            console.log("does not have key: ", key, this.keyStore);
            return '';
        }
        // console.log(this.keyStore.has(key), key, this.keyStore);
        let l = 0;
        let r = this.keyStore.get(key).length - 1;
        const array = this.keyStore.get(key);
        let ans = '';
        // let i =0
        while(l <= r) {
            const mid = Math.floor((r + l)/2);
            // console.log(l, r, mid);
            if(array[mid][1] == timestamp) {
                ans = array[mid][0];
                break;
            } else if(array[mid][1] < timestamp) {
                l = mid + 1;
                ans = array[mid][0];
            } else {
                r = mid - 1;
            }
        }
        return ans;
    }
}
