import { render } from "..";
import lua from "../../main";
import { RenderState } from "../../RenderState";

export function renderComputedIndexExpression(state: RenderState, node: lua.ComputedIndexExpression) {
	const expStr = render(state, node.expression);
	const indexStr = render(state, node.index);
	return `${expStr}[${indexStr}]`;
}
