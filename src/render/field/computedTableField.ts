import lua from "../../main";
import { RenderState } from "../../RenderState";
import { render } from "..";

export function renderComputedTableField(state: RenderState, node: lua.ComputedTableField) {
	const indexStr = render(state, node.index);
	const valueStr = render(state, node.value);
	return `[${indexStr}] = ${valueStr}`;
}
