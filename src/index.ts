interface Products {
	name: string;
	id: number;
}

class Store<T> {
	private _objects: T[] = [];

	addObjects(value: T): void {
		this._objects.push(value);
	}

	//T - Products
	//keyof T  - name | id
	findObject(property: keyof T, value: unknown): T | undefined {
		return this._objects.find((obj) => obj[property] == value);
	}
}

let store = new Store<Products>();
store.addObjects({ name: "book", id: 1 });
store.addObjects({ name: "pencil", id: 2 });

//not a key of Products
// store.findObject('price','book')

store.findObject("name", "book");
