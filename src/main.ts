// enums
namespace lua {
	// expressions
	export enum SyntaxKind {
		BinaryExpression,
		CallExpression,
		ComputedIndexExpression,
		FalseLiteral,
		FunctionExpression,
		Identifier,
		MethodCallExpression,
		NilLiteral,
		NumberLiteral,
		ParenthesizedExpression,
		PropertyAccessExpression,
		StringLiteral,
		TableLiteral,
		TrueLiteral,
		UnaryExpression,
		VarArgsLiteral,
	}

	// statements
	export enum SyntaxKind {
		Assignment = 100,
		Block,
		DoStatement,
		CallStatement,
		ForStatement,
		FunctionDeclaration,
		IfStatement,
		NumericForStatement,
		ReturnStatement,
		VariableDeclaration,
		WhileStatement,
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
}

// base types
namespace lua {
	export interface Node<T extends lua.SyntaxKind = lua.SyntaxKind> {
		kind: T;
		parent?: lua.Node;
		nextSibling?: lua.Node;
		prevSibling?: lua.Node;
		firstChild?: lua.Node;
		lastChild?: lua.Node;
	}

	export interface Expression<T extends keyof lua.ExpressionByKind = keyof lua.ExpressionByKind>
		extends lua.Node<T> {}

	export interface Statement<T extends keyof StatementByKind = keyof StatementByKind> extends lua.Node<T> {}
	export interface Field<T extends keyof FieldByKind = keyof FieldByKind> extends lua.Node<T> {}

	export type Arguments = Array<lua.Identifier | lua.VarArgsLiteral>;
	export type Expressions = Array<lua.Expression>;
	export type Statements = Array<lua.Statement>;
}

// expressions
namespace lua {
	export interface Identifier extends lua.Expression<lua.SyntaxKind.Identifier> {
		name: string;
	}

	export interface BinaryExpression extends lua.Expression<lua.SyntaxKind.BinaryExpression> {
		left: lua.Node;
		operator: lua.BinaryOperator;
		right: lua.Node;
	}

	export interface CallExpression extends lua.Expression<lua.SyntaxKind.CallExpression> {
		expression: lua.Expression;
		params: lua.Expressions;
	}

	export interface FalseLiteral extends lua.Expression<lua.SyntaxKind.FalseLiteral> {}
	export interface TrueLiteral extends lua.Expression<lua.SyntaxKind.TrueLiteral> {}
	export interface NilLiteral extends lua.Expression<lua.SyntaxKind.NilLiteral> {}

	export interface MethodCallExpression extends lua.Expression<lua.SyntaxKind.MethodCallExpression> {
		methodName: string;
		expression: lua.Expression;
		params: lua.Expressions;
	}

	export interface PropertyAccessExpression extends lua.Expression<lua.SyntaxKind.PropertyAccessExpression> {
		expression: lua.Expression;
		name: string;
	}

	export interface StringLiteral extends lua.Expression<lua.SyntaxKind.StringLiteral> {
		value: string;
	}

	export interface NumberLiteral extends lua.Expression<lua.SyntaxKind.NumberLiteral> {
		value: number;
	}

	export interface FunctionExpression extends lua.Expression<lua.SyntaxKind.FunctionExpression> {
		args: lua.Arguments;
		body: lua.Block;
	}

	export interface TableLiteral extends lua.Expression<lua.SyntaxKind.TableLiteral> {
		fields: Array<lua.Expression | lua.Field>;
	}

	export interface UnaryExpression extends lua.Expression<lua.SyntaxKind.UnaryExpression> {
		operator: lua.UnaryOperator;
		expression: lua.Expression;
	}

	export interface VarArgsLiteral extends lua.Expression<lua.SyntaxKind.VarArgsLiteral> {}

	export interface ParenthesizedExpression extends lua.Expression<lua.SyntaxKind.ParenthesizedExpression> {
		expression: lua.Expression;
	}

	export interface ComputedIndexExpression extends lua.Expression<lua.SyntaxKind.ComputedIndexExpression> {
		expression: lua.Expression;
		index: lua.Expression;
	}
}

// statements
namespace lua {
	export interface Assignment extends lua.Statement<lua.SyntaxKind.Assignment> {
		left: lua.Identifier | lua.PropertyAccessExpression | lua.ComputedIndexExpression;
		right: lua.Expression;
	}

	export interface Block extends lua.Statement<lua.SyntaxKind.Block> {
		statements: lua.Statements;
	}

	export interface CallStatement extends lua.Statement<lua.SyntaxKind.CallStatement> {
		expression: lua.CallExpression;
	}

	export interface DoStatement extends lua.Statement<lua.SyntaxKind.DoStatement> {}
	export interface ForStatement extends lua.Statement<lua.SyntaxKind.ForStatement> {}

	export interface FunctionDeclaration extends lua.Statement<lua.SyntaxKind.FunctionDeclaration> {
		name: lua.Identifier;
		args: lua.Arguments;
		body: lua.Block;
	}

	export interface IfStatement extends lua.Statement<lua.SyntaxKind.IfStatement> {
		condition: lua.Expression;
		body?: lua.Block;
		elseIfs?: Array<{
			condition: lua.Expression;
			body: lua.Block;
		}>;
		elseBody?: lua.Block;
	}

	export interface NumericForStatement extends lua.Statement<lua.SyntaxKind.NumericForStatement> {}
	export interface ReturnStatement extends lua.Statement<lua.SyntaxKind.ReturnStatement> {
		expression: lua.Expression;
	}
	export interface VariableDeclaration extends lua.Statement<lua.SyntaxKind.VariableDeclaration> {
		id: lua.Identifier;
		value: lua.Expression;
	}
	export interface WhileStatement extends lua.Statement<lua.SyntaxKind.WhileStatement> {
		condition: lua.Expression;
		body: lua.Block;
	}
}

namespace lua {
	export interface TableField extends lua.Field<lua.SyntaxKind.TableField> {
		name: string;
		value: lua.Expression;
	}

	export interface ComputedTableField extends lua.Field<lua.SyntaxKind.ComputedTableField> {
		index: lua.Expression;
		value: lua.Expression;
	}
}

// creation
namespace lua {
	export interface ExpressionByKind {
		[lua.SyntaxKind.BinaryExpression]: lua.BinaryExpression;
		[lua.SyntaxKind.CallExpression]: lua.CallExpression;
		[lua.SyntaxKind.ComputedIndexExpression]: lua.ComputedIndexExpression;
		[lua.SyntaxKind.FalseLiteral]: lua.FalseLiteral;
		[lua.SyntaxKind.FunctionExpression]: lua.FunctionExpression;
		[lua.SyntaxKind.Identifier]: lua.Identifier;
		[lua.SyntaxKind.MethodCallExpression]: lua.MethodCallExpression;
		[lua.SyntaxKind.NilLiteral]: lua.NilLiteral;
		[lua.SyntaxKind.NumberLiteral]: lua.NumberLiteral;
		[lua.SyntaxKind.ParenthesizedExpression]: lua.ParenthesizedExpression;
		[lua.SyntaxKind.PropertyAccessExpression]: lua.PropertyAccessExpression;
		[lua.SyntaxKind.StringLiteral]: lua.StringLiteral;
		[lua.SyntaxKind.TableLiteral]: lua.TableLiteral;
		[lua.SyntaxKind.TrueLiteral]: lua.TrueLiteral;
		[lua.SyntaxKind.UnaryExpression]: lua.UnaryExpression;
		[lua.SyntaxKind.VarArgsLiteral]: lua.VarArgsLiteral;
	}

	export interface StatementByKind {
		[lua.SyntaxKind.Assignment]: lua.Assignment;
		[lua.SyntaxKind.Block]: lua.Block;
		[lua.SyntaxKind.CallStatement]: lua.CallStatement;
		[lua.SyntaxKind.DoStatement]: lua.DoStatement;
		[lua.SyntaxKind.ForStatement]: lua.ForStatement;
		[lua.SyntaxKind.FunctionDeclaration]: lua.FunctionDeclaration;
		[lua.SyntaxKind.IfStatement]: lua.IfStatement;
		[lua.SyntaxKind.NumericForStatement]: lua.NumericForStatement;
		[lua.SyntaxKind.ReturnStatement]: lua.ReturnStatement;
		[lua.SyntaxKind.VariableDeclaration]: lua.VariableDeclaration;
		[lua.SyntaxKind.WhileStatement]: lua.WhileStatement;
	}

	export interface FieldByKind {
		[lua.SyntaxKind.TableField]: lua.TableField;
		[lua.SyntaxKind.ComputedTableField]: lua.ComputedTableField;
	}

	export interface NodeByKind extends lua.ExpressionByKind, lua.StatementByKind, lua.FieldByKind {}

	// super hack!
	export function create<T extends keyof NodeByKind>(
		kind: T,
		fields: {
			[K in Exclude<keyof NodeByKind[T], keyof lua.Node>]: NodeByKind[T][K];
		},
	): NodeByKind[T] {
		return (Object.assign({ kind }, fields) as unknown) as NodeByKind[T];
	}
}

// helper creation
namespace lua {
	export function block(statements: lua.Statements) {
		return lua.create(lua.SyntaxKind.Block, { statements });
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

	export function func(args: lua.Arguments, statements: lua.Statements = []) {
		return lua.create(lua.SyntaxKind.FunctionExpression, { args, body: lua.block(statements) });
	}

	export function funcDec(name: string, args: lua.Arguments = [], statements: lua.Statements = []) {
		return lua.create(lua.SyntaxKind.FunctionDeclaration, {
			name: lua.create(lua.SyntaxKind.Identifier, { name }),
			args,
			body: lua.block(statements),
		});
	}

	export function varDec(name: string, value: lua.Expression) {
		return lua.create(lua.SyntaxKind.VariableDeclaration, {
			id: lua.id(name),
			value,
		});
	}

	export function call(expression: lua.Expression, params: lua.Expressions) {
		return lua.create(lua.SyntaxKind.CallStatement, {
			expression: lua.create(lua.SyntaxKind.CallExpression, { expression, params }),
		});
	}

	export function method(expression: lua.Expression, methodName: string, params: lua.Expressions) {
		return lua.create(lua.SyntaxKind.MethodCallExpression, { expression, methodName, params });
	}

	export function table(fields: Array<lua.Expression | lua.Field> = []) {
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
		return lua.create(lua.SyntaxKind.TableField, { name, value });
	}

	export function array(expressions: lua.Expressions) {
		return lua.create(lua.SyntaxKind.TableLiteral, { fields: expressions });
	}

	export function whileDo(condition: lua.Expression, statements: lua.Statements = []) {
		return lua.create(lua.SyntaxKind.WhileStatement, {
			condition,
			body: lua.block(statements),
		});
	}
}

export default lua;
