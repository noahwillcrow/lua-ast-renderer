import * as lua from ".";

// base types
export interface Node<T extends lua.SyntaxKind = lua.SyntaxKind> {
	kind: T;
	parent?: lua.Node;
}

export interface IndexableExpression<
	T extends keyof lua.IndexableExpressionByKind = keyof lua.IndexableExpressionByKind
> extends lua.Node<T> {}

export interface Expression<T extends keyof lua.ExpressionByKind = keyof lua.ExpressionByKind> extends lua.Node<T> {}

export interface Statement<T extends keyof lua.StatementByKind = keyof lua.StatementByKind> extends lua.Node<T> {}

export interface Field<T extends keyof lua.FieldByKind = keyof lua.FieldByKind> extends lua.Node<T> {}

export interface HasArguments {
	args: lua.List<lua.Identifier>;
	hasVarArgs: boolean;
}

// expressions
export interface NilLiteral extends lua.Expression<lua.SyntaxKind.NilLiteral> {}

export interface FalseLiteral extends lua.Expression<lua.SyntaxKind.FalseLiteral> {}

export interface TrueLiteral extends lua.Expression<lua.SyntaxKind.TrueLiteral> {}

export interface NumberLiteral extends lua.Expression<lua.SyntaxKind.NumberLiteral> {
	value: number;
}

export interface StringLiteral extends lua.Expression<lua.SyntaxKind.StringLiteral> {
	value: string;
}

export interface VarArgsLiteral extends lua.Expression<lua.SyntaxKind.VarArgsLiteral> {}

export interface FunctionExpression extends lua.Expression<lua.SyntaxKind.FunctionExpression>, HasArguments {
	statements: lua.List<lua.Statement>;
}

export interface Identifier extends lua.Expression<lua.SyntaxKind.Identifier> {
	name: string;
}

export interface ComputedIndexExpression extends lua.Expression<lua.SyntaxKind.ComputedIndexExpression> {
	expression: lua.IndexableExpression;
	index: lua.Expression;
}

export interface PropertyAccessExpression extends lua.Expression<lua.SyntaxKind.PropertyAccessExpression> {
	expression: lua.IndexableExpression;
	name: lua.Identifier;
}

export interface CallExpression extends lua.Expression<lua.SyntaxKind.CallExpression> {
	expression: lua.IndexableExpression;
	params: lua.List<lua.Expression>;
}

export interface MethodCallExpression extends lua.Expression<lua.SyntaxKind.MethodCallExpression> {
	name: lua.Identifier;
	expression: lua.IndexableExpression;
	params: lua.List<lua.Expression>;
}

export interface ParenthesizedExpression extends lua.Expression<lua.SyntaxKind.ParenthesizedExpression> {
	expression: lua.Expression;
}

export interface TableLiteral extends lua.Expression<lua.SyntaxKind.TableLiteral> {
	fields: lua.List<lua.Expression | lua.Field>;
}

export interface BinaryExpression extends lua.Expression<lua.SyntaxKind.BinaryExpression> {
	left: lua.Node;
	operator: lua.BinaryOperator;
	right: lua.Node;
}

export interface UnaryExpression extends lua.Expression<lua.SyntaxKind.UnaryExpression> {
	operator: lua.UnaryOperator;
	expression: lua.Expression;
}

// statements
export interface Assignment extends lua.Statement<lua.SyntaxKind.Assignment> {
	left: lua.Identifier | lua.PropertyAccessExpression | lua.ComputedIndexExpression;
	right: lua.Expression;
}

export interface CallStatement extends lua.Statement<lua.SyntaxKind.CallStatement> {
	expression: lua.CallExpression | lua.MethodCallExpression;
}

export interface DoStatement extends lua.Statement<lua.SyntaxKind.DoStatement> {
	statements: lua.List<lua.Statement>;
}

export interface WhileStatement extends lua.Statement<lua.SyntaxKind.WhileStatement> {
	condition: lua.Expression;
	statements: lua.List<lua.Statement>;
}

export interface RepeatStatement extends lua.Statement<lua.SyntaxKind.RepeatStatement> {
	condition: lua.Expression;
	statements: lua.List<lua.Statement>;
}

export interface IfStatement extends lua.Statement<lua.SyntaxKind.IfStatement> {
	condition: lua.Expression;
	statements: lua.List<lua.Statement>;
	elseBody: lua.IfStatement | lua.List<lua.Statement>;
}

export interface NumericForStatement extends lua.Statement<lua.SyntaxKind.NumericForStatement> {}

export interface ForStatement extends lua.Statement<lua.SyntaxKind.ForStatement> {}

export interface FunctionDeclaration extends lua.Statement<lua.SyntaxKind.FunctionDeclaration>, HasArguments {
	name: lua.Identifier;
	statements: lua.List<lua.Statement>;
}

export interface MethodDeclaration extends lua.Statement<lua.SyntaxKind.MethodDeclaration>, HasArguments {
	expression: lua.IndexableExpression;
	name: lua.Identifier;
	statements: lua.List<lua.Statement>;
}

export interface VariableDeclaration extends lua.Statement<lua.SyntaxKind.VariableDeclaration> {
	id: lua.Identifier;
	value: lua.Expression;
}

export interface ReturnStatement extends lua.Statement<lua.SyntaxKind.ReturnStatement> {
	expression: lua.Expression;
}

export interface Comment extends lua.Statement<lua.SyntaxKind.Comment> {
	text: string;
}

// fields
export interface TableField extends lua.Field<lua.SyntaxKind.TableField> {
	name: lua.Identifier;
	value: lua.Expression;
}

export interface ComputedTableField extends lua.Field<lua.SyntaxKind.ComputedTableField> {
	index: lua.Expression;
	value: lua.Expression;
}
