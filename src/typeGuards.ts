import lua from "./main";

export function isNilLiteralExpression(node: lua.Node): node is lua.NilLiteralExpression {
	return node.kind === lua.SyntaxKind.NilLiteralExpression;
}

export function isFalseLiteralExpression(node: lua.Node): node is lua.FalseLiteralExpression {
	return node.kind === lua.SyntaxKind.FalseLiteralExpression;
}

export function isTrueLiteralExpression(node: lua.Node): node is lua.TrueLiteralExpression {
	return node.kind === lua.SyntaxKind.TrueLiteralExpression;
}

export function isNumberLiteralExpression(node: lua.Node): node is lua.NumberLiteralExpression {
	return node.kind === lua.SyntaxKind.NumberLiteralExpression;
}

export function isStringLiteralExpression(node: lua.Node): node is lua.StringLiteralExpression {
	return node.kind === lua.SyntaxKind.StringLiteralExpression;
}

export function isVarArgsExpression(node: lua.Node): node is lua.VarArgsExpression {
	return node.kind === lua.SyntaxKind.VarArgsExpression;
}

export function isFunctionExpression(node: lua.Node): node is lua.FunctionExpression {
	return node.kind === lua.SyntaxKind.FunctionExpression;
}

export function isTableLiteralExpression(node: lua.Node): node is lua.TableLiteralExpression {
	return node.kind === lua.SyntaxKind.TableLiteralExpression;
}

export function isBinaryExpression(node: lua.Node): node is lua.BinaryExpression {
	return node.kind === lua.SyntaxKind.BinaryExpression;
}

export function isUnaryExpression(node: lua.Node): node is lua.UnaryExpression {
	return node.kind === lua.SyntaxKind.UnaryExpression;
}

export function isCallExpression(node: lua.Node): node is lua.CallExpression {
	return node.kind === lua.SyntaxKind.CallExpression;
}

export function isAssignmentStatement(node: lua.Node): node is lua.AssignmentStatement {
	return node.kind === lua.SyntaxKind.AssignmentStatement;
}

export function isDoStatement(node: lua.Node): node is lua.DoStatement {
	return node.kind === lua.SyntaxKind.DoStatement;
}

export function isExpressionStatement(node: lua.Node): node is lua.ExpressionStatement {
	return node.kind === lua.SyntaxKind.ExpressionStatement;
}

export function isForStatement(node: lua.Node): node is lua.ForStatement {
	return node.kind === lua.SyntaxKind.ForStatement;
}

export function isFunctionStatement(node: lua.Node): node is lua.FunctionStatement {
	return node.kind === lua.SyntaxKind.FunctionStatement;
}

export function isIfStatement(node: lua.Node): node is lua.IfStatement {
	return node.kind === lua.SyntaxKind.IfStatement;
}

export function isNumericForStatement(node: lua.Node): node is lua.NumericForStatement {
	return node.kind === lua.SyntaxKind.NumericForStatement;
}

export function isReturnStatement(node: lua.Node): node is lua.ReturnStatement {
	return node.kind === lua.SyntaxKind.ReturnStatement;
}

export function isWhileStatement(node: lua.Node): node is lua.WhileStatement {
	return node.kind === lua.SyntaxKind.WhileStatement;
}
