import { render } from "./render/init";

namespace lua {
	export enum SyntaxKind {
		Identifier,
		BinaryExpression,
		CallExpression,
		FalseLiteralExpression,
		FunctionExpression,
		NilLiteralExpression,
		NumberLiteralExpression,
		StringLiteralExpression,
		TableLiteralExpression,
		TrueLiteralExpression,
		UnaryExpression,
		VarArgsExpression,

		AssignmentStatement,
		DoStatement,
		ExpressionStatement,
		ForStatement,
		FunctionStatement,
		IfStatement,
		NumericForStatement,
		ReturnStatement,
		WhileStatement,
	}

	export enum OperatorKind {
		Plus,
		Minus,
		Caret,
		Asterisk,
		Slash,
	}

	export interface Node<T extends lua.SyntaxKind = lua.SyntaxKind> {
		kind: T;
		parent?: lua.Node<lua.SyntaxKind>;
		children: lua.Node<lua.SyntaxKind>[];
	}

	export interface Expression<T extends lua.SyntaxKind> extends lua.Node<T> {}
	export interface Statement<T extends lua.SyntaxKind> extends lua.Node<T> {}

	// Expressions

	export interface Identifier extends lua.Expression<lua.SyntaxKind.Identifier> {}

	export interface BinaryExpression extends lua.Expression<lua.SyntaxKind.BinaryExpression> {
		left: lua.Node;
		operator: lua.OperatorKind;
		right: lua.Node;
	}

	export interface CallExpression extends lua.Expression<lua.SyntaxKind.CallExpression> {
		expression: lua.Identifier;
	}

	export interface FalseLiteralExpression extends lua.Expression<lua.SyntaxKind.FalseLiteralExpression> {}
	export interface FunctionExpression extends lua.Expression<lua.SyntaxKind.FunctionExpression> {}
	export interface NilLiteralExpression extends lua.Expression<lua.SyntaxKind.NilLiteralExpression> {}
	export interface NumberLiteralExpression extends lua.Expression<lua.SyntaxKind.NumberLiteralExpression> {}
	export interface StringLiteralExpression extends lua.Expression<lua.SyntaxKind.StringLiteralExpression> {}
	export interface TableLiteralExpression extends lua.Expression<lua.SyntaxKind.TableLiteralExpression> {}
	export interface TrueLiteralExpression extends lua.Expression<lua.SyntaxKind.TrueLiteralExpression> {}
	export interface UnaryExpression extends lua.Expression<lua.SyntaxKind.UnaryExpression> {}
	export interface VarArgsExpression extends lua.Expression<lua.SyntaxKind.VarArgsExpression> {}

	// Statements
	export interface AssignmentStatement extends lua.Statement<lua.SyntaxKind.AssignmentStatement> {}
	export interface DoStatement extends lua.Statement<lua.SyntaxKind.DoStatement> {}
	export interface ExpressionStatement extends lua.Statement<lua.SyntaxKind.ExpressionStatement> {}
	export interface ForStatement extends lua.Statement<lua.SyntaxKind.ForStatement> {}
	export interface FunctionStatement extends lua.Statement<lua.SyntaxKind.FunctionStatement> {}
	export interface IfStatement extends lua.Statement<lua.SyntaxKind.IfStatement> {}
	export interface NumericForStatement extends lua.Statement<lua.SyntaxKind.NumericForStatement> {}
	export interface ReturnStatement extends lua.Statement<lua.SyntaxKind.ReturnStatement> {}
	export interface WhileStatement extends lua.Statement<lua.SyntaxKind.WhileStatement> {}

	// Creation
	interface NodeByKind {
		[lua.SyntaxKind.Identifier]: lua.Identifier;
		[lua.SyntaxKind.BinaryExpression]: lua.BinaryExpression;
		[lua.SyntaxKind.CallExpression]: lua.CallExpression;
		[lua.SyntaxKind.FalseLiteralExpression]: lua.FalseLiteralExpression;
		[lua.SyntaxKind.FunctionExpression]: lua.FunctionExpression;
		[lua.SyntaxKind.NilLiteralExpression]: lua.NilLiteralExpression;
		[lua.SyntaxKind.NumberLiteralExpression]: lua.NumberLiteralExpression;
		[lua.SyntaxKind.StringLiteralExpression]: lua.StringLiteralExpression;
		[lua.SyntaxKind.TableLiteralExpression]: lua.TableLiteralExpression;
		[lua.SyntaxKind.TrueLiteralExpression]: lua.TrueLiteralExpression;
		[lua.SyntaxKind.UnaryExpression]: lua.UnaryExpression;
		[lua.SyntaxKind.VarArgsExpression]: lua.VarArgsExpression;

		[lua.SyntaxKind.AssignmentStatement]: lua.AssignmentStatement;
		[lua.SyntaxKind.DoStatement]: lua.DoStatement;
		[lua.SyntaxKind.ExpressionStatement]: lua.ExpressionStatement;
		[lua.SyntaxKind.ForStatement]: lua.ForStatement;
		[lua.SyntaxKind.FunctionStatement]: lua.FunctionStatement;
		[lua.SyntaxKind.IfStatement]: lua.IfStatement;
		[lua.SyntaxKind.NumericForStatement]: lua.NumericForStatement;
		[lua.SyntaxKind.ReturnStatement]: lua.ReturnStatement;
		[lua.SyntaxKind.WhileStatement]: lua.WhileStatement;
	}

	export function create<T extends keyof NodeByKind>(
		kind: T,
		fields: { [K in Exclude<keyof NodeByKind[T], keyof lua.Node>]: NodeByKind[T][K] },
	): NodeByKind[T] {
		return (Object.assign(
			{ kind, parent: undefined, children: new Array<lua.Node>() },
			fields,
		) as unknown) as NodeByKind[T];
	}
}

const x = lua.create(lua.SyntaxKind.BinaryExpression, {
	left: lua.create(lua.SyntaxKind.NumberLiteralExpression, {}),
	operator: lua.OperatorKind.Plus,
	right: lua.create(lua.SyntaxKind.NumberLiteralExpression, {}),
});

console.log(render(x));

export default lua;
