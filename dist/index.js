"use strict";
class ArrayUtils {
    static wrapperInArray(value) {
        return [value];
    }
}
const main = () => {
    //type of members are generic based on value passed
    const kv1 = ArrayUtils.wrapperInArray(1);
    console.log(kv1);
};
main();
//# sourceMappingURL=index.js.map