import lua from "../../main";
import { RenderState } from "../../RenderState";
import { render } from "..";

export function renderParenthesizedExpression(state: RenderState, node: lua.ParenthesizedExpression) {
	return `(${render(state, node.expression)})`;
}
