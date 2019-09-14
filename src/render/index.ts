export * from "./expression";
export * from "./field";
export * from "./statement";
export * from "./util";

import {
	renderBinaryExpression,
	renderBlock,
	renderCallExpression,
	renderCallStatement,
	renderComputedIndexExpression,
	renderComputedTableField,
	renderFalseLiteral,
	renderFunctionDeclaration,
	renderFunctionExpression,
	renderIdentifier,
	renderIfStatement,
	renderMethodCallExpression,
	renderNilLiteral,
	renderNumberLiteral,
	renderParenthesizedExpression,
	renderPropertyAccessExpression,
	renderStringLiteral,
	renderTableField,
	renderTableLiteral,
	renderTrueLiteral,
	renderVarArgsLiteral,
	renderVariableDeclaration,
	renderWhileStatement,
} from ".";
import lua from "../main";
import { RenderState } from "../RenderState";
import {
	isBinaryExpression,
	isBlock,
	isCallExpression,
	isCallStatement,
	isComputedIndexExpression,
	isComputedTableField,
	isFalseLiteralExpression,
	isFunctionDeclaration,
	isFunctionExpression,
	isIdentifier,
	isIfStatement,
	isMethodCallExpression,
	isNilLiteralExpression,
	isNumberLiteralExpression,
	isParenthesizedExpression,
	isPropertyAccessExpression,
	isStringLiteralExpression,
	isTableField,
	isTableLiteralExpression,
	isTrueLiteralExpression,
	isVarArgsLiteral,
	isVariableDeclaration,
	isWhileStatement,
} from "../typeGuards";

export function render(state: RenderState, node: lua.Node): string {
	// weird syntax so that it's easy to sort lines

	// expressions
	if (false) return "";
	else if (isBinaryExpression(node)) return renderBinaryExpression(state, node);
	else if (isBlock(node)) return renderBlock(state, node);
	else if (isCallExpression(node)) return renderCallExpression(state, node);
	else if (isComputedIndexExpression(node)) return renderComputedIndexExpression(state, node);
	else if (isFalseLiteralExpression(node)) return renderFalseLiteral(state, node);
	else if (isFunctionExpression(node)) return renderFunctionExpression(state, node);
	else if (isIdentifier(node)) return renderIdentifier(state, node);
	else if (isMethodCallExpression(node)) return renderMethodCallExpression(state, node);
	else if (isNilLiteralExpression(node)) return renderNilLiteral(state, node);
	else if (isNumberLiteralExpression(node)) return renderNumberLiteral(state, node);
	else if (isParenthesizedExpression(node)) return renderParenthesizedExpression(state, node);
	else if (isPropertyAccessExpression(node)) return renderPropertyAccessExpression(state, node);
	else if (isStringLiteralExpression(node)) return renderStringLiteral(state, node);
	else if (isTableLiteralExpression(node)) return renderTableLiteral(state, node);
	else if (isTrueLiteralExpression(node)) return renderTrueLiteral(state, node);
	else if (isVarArgsLiteral(node)) return renderVarArgsLiteral(state, node);

	// statements
	if (false) return "";
	else if (isCallStatement(node)) return renderCallStatement(state, node);
	else if (isFunctionDeclaration(node)) return renderFunctionDeclaration(state, node);
	else if (isVariableDeclaration(node)) return renderVariableDeclaration(state, node);
	else if (isIfStatement(node)) return renderIfStatement(state, node);
	else if (isWhileStatement(node)) return renderWhileStatement(state, node);

	// fields
	if (false) return "";
	else if (isComputedTableField(node)) return renderComputedTableField(state, node);
	else if (isTableField(node)) return renderTableField(state, node);

	throw `Unexpected node! ${lua.SyntaxKind[node.kind]}`;
}
