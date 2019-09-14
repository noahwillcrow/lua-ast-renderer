import lua from "./main";

function makeGuard<T extends keyof lua.NodeByKind>(kind: T) {
	return (node: lua.Node): node is lua.NodeByKind[T] => node.kind === kind;
}

// expressions
export const isBinaryExpression = makeGuard(lua.SyntaxKind.BinaryExpression);
export const isCallExpression = makeGuard(lua.SyntaxKind.CallExpression);
export const isComputedIndexExpression = makeGuard(lua.SyntaxKind.ComputedIndexExpression);
export const isFalseLiteralExpression = makeGuard(lua.SyntaxKind.FalseLiteral);
export const isFunctionExpression = makeGuard(lua.SyntaxKind.FunctionExpression);
export const isIdentifier = makeGuard(lua.SyntaxKind.Identifier);
export const isMethodCallExpression = makeGuard(lua.SyntaxKind.MethodCallExpression);
export const isNilLiteralExpression = makeGuard(lua.SyntaxKind.NilLiteral);
export const isNumberLiteralExpression = makeGuard(lua.SyntaxKind.NumberLiteral);
export const isParenthesizedExpression = makeGuard(lua.SyntaxKind.ParenthesizedExpression);
export const isPropertyAccessExpression = makeGuard(lua.SyntaxKind.PropertyAccessExpression);
export const isStringLiteralExpression = makeGuard(lua.SyntaxKind.StringLiteral);
export const isTableLiteralExpression = makeGuard(lua.SyntaxKind.TableLiteral);
export const isTrueLiteralExpression = makeGuard(lua.SyntaxKind.TrueLiteral);
export const isUnaryExpression = makeGuard(lua.SyntaxKind.UnaryExpression);
export const isVarArgsLiteral = makeGuard(lua.SyntaxKind.VarArgsLiteral);
export const isWhileStatement = makeGuard(lua.SyntaxKind.WhileStatement);

const EXPRESSION_KINDS = new Set([
	lua.SyntaxKind.BinaryExpression,
	lua.SyntaxKind.CallExpression,
	lua.SyntaxKind.ComputedIndexExpression,
	lua.SyntaxKind.FalseLiteral,
	lua.SyntaxKind.FunctionExpression,
	lua.SyntaxKind.Identifier,
	lua.SyntaxKind.MethodCallExpression,
	lua.SyntaxKind.NilLiteral,
	lua.SyntaxKind.NumberLiteral,
	lua.SyntaxKind.ParenthesizedExpression,
	lua.SyntaxKind.PropertyAccessExpression,
	lua.SyntaxKind.StringLiteral,
	lua.SyntaxKind.TableLiteral,
	lua.SyntaxKind.TrueLiteral,
	lua.SyntaxKind.UnaryExpression,
	lua.SyntaxKind.VarArgsLiteral,
]);

export function isExpression(node: lua.Node): node is lua.Expression {
	return EXPRESSION_KINDS.has(node.kind);
}

// statements
export const isBlock = makeGuard(lua.SyntaxKind.Block);
export const isCallStatement = makeGuard(lua.SyntaxKind.CallStatement);
export const isDo = makeGuard(lua.SyntaxKind.DoStatement);
export const isFor = makeGuard(lua.SyntaxKind.ForStatement);
export const isFunctionDeclaration = makeGuard(lua.SyntaxKind.FunctionDeclaration);
export const isIfStatement = makeGuard(lua.SyntaxKind.IfStatement);
export const isNumericFor = makeGuard(lua.SyntaxKind.NumericForStatement);
export const isReturn = makeGuard(lua.SyntaxKind.ReturnStatement);
export const isVariableDeclaration = makeGuard(lua.SyntaxKind.VariableDeclaration);
export const isWhile = makeGuard(lua.SyntaxKind.WhileStatement);

const STATEMENT_KINDS = new Set([
	lua.SyntaxKind.Block,
	lua.SyntaxKind.CallStatement,
	lua.SyntaxKind.DoStatement,
	lua.SyntaxKind.ForStatement,
	lua.SyntaxKind.FunctionDeclaration,
	lua.SyntaxKind.IfStatement,
	lua.SyntaxKind.NumericForStatement,
	lua.SyntaxKind.ReturnStatement,
	lua.SyntaxKind.VariableDeclaration,
	lua.SyntaxKind.WhileStatement,
]);

export function isStatement(node: lua.Node): node is lua.Statement {
	return STATEMENT_KINDS.has(node.kind);
}

// fields
export const isTableField = makeGuard(lua.SyntaxKind.TableField);
export const isComputedTableField = makeGuard(lua.SyntaxKind.ComputedTableField);

const FIELD_KINDS = new Set([lua.SyntaxKind.TableField, lua.SyntaxKind.ComputedTableField]);

export function isField(node: lua.Node): node is lua.Field {
	return FIELD_KINDS.has(node.kind);
}
