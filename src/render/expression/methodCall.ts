import { render, renderExpressions } from "..";
import lua from "../../main";
import { RenderState } from "../../RenderState";

export function renderMethodCallExpression(state: RenderState, node: lua.MethodCallExpression) {
	const expStr = render(state, node.expression);
	const argsStr = renderExpressions(state, node.params);
	return `${expStr}:${node.methodName}(${argsStr})`;
}
