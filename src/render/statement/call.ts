import { render } from "..";
import lua from "../../main";
import { RenderState } from "../../RenderState";

export function renderCallStatement(state: RenderState, node: lua.CallStatement) {
	const expStr = render(state, node.expression);
	return state.indent + `${expStr};\n`;
}
