var man = {
    weibo: '@wingsico',
    $age: null,
    get age() {
        if (this.$age == undefined) {
            return new Date().getFullYear() - 1998;
        } else {
            return this.$age;
        }
    },
    set age(val) {
        val = +val; // 把val变成一个数字
        if (!isNaN(val) && val > 0 && val < 150) {
            this.$age = +val;
        } else {
            try {
                throw new Error('Incorrect val = ' + val)
            } catch (error) {
                console.log(error)
            }
        }
    },

}