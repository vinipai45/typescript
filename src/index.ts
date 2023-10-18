//http://hostname/users - Users
//http://hostname/products - Products

interface APIResponse<T> {
	data: T | null;
	error: string | null;
}

interface Users {
	username: string;
	id: number;
}

interface Products {
	productName: string;
	id: number;
}

const fetchAPI = <T>(url: string): APIResponse<T> => {
	return {
		data: null,
		error: null,
	};
};

let usersRes = fetchAPI<Users>("url");
let productsRes = fetchAPI<Products>("url");

console.log(usersRes.data?.username);
console.log(productsRes.data?.productName);
