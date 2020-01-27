// helper creation
import * as lua from ".";

// creation
export function create<T extends keyof lua.NodeByKind>(
	kind: T,
	fields: {
		[K in Exclude<keyof lua.NodeByKind[T], keyof lua.Node>]: lua.NodeByKind[T][K];
	},
): lua.NodeByKind[T] {
	// super hack!
	const node = (Object.assign({ kind }, fields) as unknown) as lua.NodeByKind[T];

	// if value is node, value.Parent = node
	// if value is list, lua.list.forEach(value, subValue => subValue.Parent = node)
	for (const value of Object.values(fields)) {
		if (lua.isNode(value)) {
			value.parent = node;
		} else if (lua.list.isList(value)) {
			lua.list.forEach(value, subValue => (subValue.parent = node));
		}
	}

	return node;
}

export function number(value: number) {
	return lua.create(lua.SyntaxKind.NumberLiteral, { value });
}

export function string(value: string) {
	return lua.create(lua.SyntaxKind.StringLiteral, { value });
}

export function id(name: string) {
	return lua.create(lua.SyntaxKind.Identifier, { name });
}

export function parentheses(expression: lua.Expression) {
	return lua.create(lua.SyntaxKind.ParenthesizedExpression, { expression });
}

export function binary(left: lua.Expression, operator: lua.BinaryOperator, right: lua.Expression) {
	return lua.create(lua.SyntaxKind.BinaryExpression, { left, operator, right });
}

export function func(args: lua.List<lua.Identifier>, hasVarArgs: boolean, statements: lua.List<lua.Statement> = {}) {
	return lua.create(lua.SyntaxKind.FunctionExpression, { args, hasVarArgs, statements });
}

export function funcDec(
	name: string,
	args: lua.List<lua.Identifier> = {},
	hasVarArgs: boolean,
	statements: lua.List<lua.Statement> = {},
) {
	return lua.create(lua.SyntaxKind.FunctionDeclaration, {
		name: lua.create(lua.SyntaxKind.Identifier, { name }),
		args,
		hasVarArgs,
		statements,
	});
}

export function methodDec(
	expression: lua.IndexableExpression,
	name: string,
	args: lua.List<lua.Identifier> = {},
	hasVarArgs: boolean,
	statements: lua.List<lua.Statement> = {},
) {
	return lua.create(lua.SyntaxKind.MethodDeclaration, {
		expression,
		name: lua.create(lua.SyntaxKind.Identifier, { name }),
		args,
		hasVarArgs,
		statements,
	});
}

export function varDec(name: string, value: lua.Expression) {
	return lua.create(lua.SyntaxKind.VariableDeclaration, {
		id: lua.id(name),
		value,
	});
}

export function call(expression: lua.Expression, params: lua.Expression[]) {
	return lua.create(lua.SyntaxKind.CallStatement, {
		expression: lua.create(lua.SyntaxKind.CallExpression, { expression, params: lua.list.make(...params) }),
	});
}

export function methodCall(expression: lua.Expression, methodName: string, params: lua.Expression[]) {
	return lua.create(lua.SyntaxKind.MethodCallExpression, {
		expression: lua.isIndexableExpression(expression) ? expression : lua.parentheses(expression),
		name: lua.id(methodName),
		params: lua.list.make(...params),
	});
}

export function table(fields: lua.List<lua.Expression | lua.Field> = {}) {
	return lua.create(lua.SyntaxKind.TableLiteral, { fields });
}

export function bool(value: boolean) {
	if (value) {
		return lua.create(lua.SyntaxKind.TrueLiteral, {});
	} else {
		return lua.create(lua.SyntaxKind.FalseLiteral, {});
	}
}

export function field(name: string, value: lua.Expression) {
	return lua.create(lua.SyntaxKind.TableField, { name: lua.id(name), value });
}

export function array(expressions: lua.List<lua.Expression>) {
	return lua.create(lua.SyntaxKind.TableLiteral, { fields: expressions });
}

export function whileDo(condition: lua.Expression, statements: lua.List<lua.Statement> = {}) {
	return lua.create(lua.SyntaxKind.WhileStatement, {
		condition,
		statements,
	});
}

export function comment(text: string) {
	return lua.create(lua.SyntaxKind.Comment, { text });
}
