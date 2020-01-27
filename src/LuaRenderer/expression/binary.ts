import { render } from "..";
import * as lua from "../../LuaAST";
import { RenderState } from "../RenderState";

export function renderBinaryExpression(state: RenderState, node: lua.BinaryExpression) {
	const leftStr = render(state, node.left);
	const rightStr = render(state, node.right);
	if (node.operator === lua.BinaryOperator.Plus) {
		return `${leftStr} + ${rightStr}`;
	} else if (node.operator === lua.BinaryOperator.Minus) {
		return `${leftStr} - ${rightStr}`;
	} else if (node.operator === lua.BinaryOperator.Asterisk) {
		return `${leftStr} * ${rightStr}`;
	} else if (node.operator === lua.BinaryOperator.Slash) {
		return `${leftStr} / ${rightStr}`;
	} else if (node.operator === lua.BinaryOperator.Caret) {
		return `${leftStr} ^ ${rightStr}`;
	} else {
		throw `Unexpected operator! ${lua.BinaryOperator[node.operator]} `;
	}
}
