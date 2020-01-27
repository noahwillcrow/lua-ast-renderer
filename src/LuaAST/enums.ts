// expressions
export enum SyntaxKind {
	NilLiteral = 0,
	FalseLiteral,
	TrueLiteral,
	NumberLiteral,
	StringLiteral,
	VarArgsLiteral,
	FunctionExpression,
	Identifier,
	ComputedIndexExpression,
	PropertyAccessExpression,
	CallExpression,
	MethodCallExpression,
	ParenthesizedExpression,
	TableLiteral,
	BinaryExpression,
	UnaryExpression,
}

// statements
export enum SyntaxKind {
	Assignment = 100,
	CallStatement,
	DoStatement,
	WhileStatement,
	RepeatStatement,
	IfStatement,
	NumericForStatement,
	ForStatement,
	FunctionDeclaration,
	MethodDeclaration,
	VariableDeclaration,
	ReturnStatement,
	Comment,
}

// fields
export enum SyntaxKind {
	TableField = 200,
	ComputedTableField,
}

export enum BinaryOperator {
	Plus,
	Minus,
	Caret,
	Asterisk,
	Slash,
}

export enum UnaryOperator {
	Plus,
	Minus,
	Not,
}
