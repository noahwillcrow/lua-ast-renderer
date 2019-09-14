import { RenderState } from "../../RenderState";
import lua from "../../main";
import { render } from "..";

export function renderAssignment(state: RenderState, node: lua.Assignment) {
	const leftStr = render(state, node.left);
	const rightStr = render(state, node.right);
	return state.indent + `${leftStr} = ${rightStr};\n`;
}
