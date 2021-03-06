import { render } from "..";
import * as lua from "../../LuaAST";
import { RenderState } from "../RenderState";

export function renderUnaryExpression(state: RenderState, node: lua.UnaryExpression) {
	const expStr = render(state, node);
	if (node.operator === lua.UnaryOperator.Plus) {
		return `+${expStr}`;
	} else if (node.operator === lua.UnaryOperator.Minus) {
		return `-${expStr}`;
	} else if (node.operator === lua.UnaryOperator.Not) {
		return `not ${expStr}`;
	}
}
