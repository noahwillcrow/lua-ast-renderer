import { RenderState } from "../../RenderState";
import lua from "../../main";
import { render } from "..";

export function renderReturnStatement(state: RenderState, node: lua.ReturnStatement) {
	return `return ${render(state, node.expression)}`;
}
