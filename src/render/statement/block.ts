import { RenderState } from "../../RenderState";
import lua from "../../main";
import { render } from "..";

export function renderBlock(state: RenderState, node: lua.Block) {
	let result = "";
	for (const statement of node.statements) {
		result += render(state, statement);
	}
	return result;
}
