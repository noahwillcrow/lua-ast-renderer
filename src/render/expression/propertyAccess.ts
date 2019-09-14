import { render } from "..";
import lua from "../../main";
import { RenderState } from "../../RenderState";

export function renderPropertyAccessExpression(state: RenderState, node: lua.PropertyAccessExpression) {
	const expStr = render(state, node.expression);
	return `${expStr}.${node.name}`;
}
