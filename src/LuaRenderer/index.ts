import * as lua from "../LuaAST";
import { renderBinaryExpression } from "./expression/binary";
import { renderCallExpression } from "./expression/call";
import { renderComputedIndexExpression } from "./expression/computedIndex";
import { renderFalseLiteral } from "./expression/falseLiteral";
import { renderFunctionExpression } from "./expression/function";
import { renderIdentifier } from "./expression/identifier";
import { renderMethodCallExpression } from "./expression/methodCall";
import { renderNilLiteral } from "./expression/nilLiteral";
import { renderNumberLiteral } from "./expression/numberLiteral";
import { renderParenthesizedExpression } from "./expression/parenthesized";
import { renderPropertyAccessExpression } from "./expression/propertyAccess";
import { renderStringLiteral } from "./expression/stringLiteral";
import { renderTableLiteral } from "./expression/tableLiteral";
import { renderTrueLiteral } from "./expression/trueLiteral";
import { renderVarArgsLiteral } from "./expression/varArgs";
import { renderComputedTableField } from "./field/computedTableField";
import { renderTableField } from "./field/tableField";
import { RenderState } from "./RenderState";
import { renderCallStatement } from "./statement/call";
import { renderFunctionDeclaration } from "./statement/functionDeclaration";
import { renderIfStatement } from "./statement/if";
import { renderVariableDeclaration } from "./statement/variable";
import { renderWhileStatement } from "./statement/while";

export function render(state: RenderState, node: lua.Node): string {
	// weird syntax so that it's easy to sort lines

	// expressions
	if (false) return "";
	else if (lua.isBinaryExpression(node)) return renderBinaryExpression(state, node);
	else if (lua.isCallExpression(node)) return renderCallExpression(state, node);
	else if (lua.isComputedIndexExpression(node)) return renderComputedIndexExpression(state, node);
	else if (lua.isFalseLiteralExpression(node)) return renderFalseLiteral(state, node);
	else if (lua.isFunctionExpression(node)) return renderFunctionExpression(state, node);
	else if (lua.isIdentifier(node)) return renderIdentifier(state, node);
	else if (lua.isMethodCallExpression(node)) return renderMethodCallExpression(state, node);
	else if (lua.isNilLiteralExpression(node)) return renderNilLiteral(state, node);
	else if (lua.isNumberLiteralExpression(node)) return renderNumberLiteral(state, node);
	else if (lua.isParenthesizedExpression(node)) return renderParenthesizedExpression(state, node);
	else if (lua.isPropertyAccessExpression(node)) return renderPropertyAccessExpression(state, node);
	else if (lua.isStringLiteralExpression(node)) return renderStringLiteral(state, node);
	else if (lua.isTableLiteralExpression(node)) return renderTableLiteral(state, node);
	else if (lua.isTrueLiteralExpression(node)) return renderTrueLiteral(state, node);
	else if (lua.isVarArgsLiteral(node)) return renderVarArgsLiteral(state, node);

	// statements
	if (false) return "";
	else if (lua.isCallStatement(node)) return renderCallStatement(state, node);
	else if (lua.isFunctionDeclaration(node)) return renderFunctionDeclaration(state, node);
	else if (lua.isVariableDeclaration(node)) return renderVariableDeclaration(state, node);
	else if (lua.isIfStatement(node)) return renderIfStatement(state, node);
	else if (lua.isWhileStatement(node)) return renderWhileStatement(state, node);

	// fields
	if (false) return "";
	else if (lua.isComputedTableField(node)) return renderComputedTableField(state, node);
	else if (lua.isTableField(node)) return renderTableField(state, node);

	throw `Unexpected node! ${lua.SyntaxKind[node.kind]}`;
}
