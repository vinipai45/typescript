class KeyValuePair<TKey, TValue> {
	constructor(public key: TKey, public value: TValue) {}
}

const main = () => {
	//type of members are generic based on value passed
	const kv1 = new KeyValuePair(1, 1);
};

main();
