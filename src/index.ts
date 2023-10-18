class ArrayUtils {
	static wrapperInArray<T>(value: T) {
		return [value];
	}
}

const main = () => {
	//type of members are generic based on value passed
	const kv1 = ArrayUtils.wrapperInArray(1);

	console.log(kv1);
};

main();
