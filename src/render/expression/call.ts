import { render, renderExpressions } from "..";
import lua from "../../main";
import { RenderState } from "../../RenderState";

export function renderCallExpression(state: RenderState, node: lua.CallExpression) {
	const expStr = render(state, node.expression);
	const argsStr = renderExpressions(state, node.params);
	return `${expStr}(${argsStr})`;
}
