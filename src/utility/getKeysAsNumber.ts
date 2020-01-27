export function getKeysAsNumber<T>(object: T): (keyof T)[] {
	const result = new Array<keyof T>();
	for (const key in object) {
		result.push(Number.parseInt(key)! as keyof T);
	}
	return result;
}
