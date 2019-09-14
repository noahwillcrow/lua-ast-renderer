import { RenderState } from "../../RenderState";
import lua from "../../main";
import { render } from "..";

export function renderWhileStatement(state: RenderState, node: lua.WhileStatement) {
	let result = "";

	result += state.indent + `while ${render(state, node.condition)} do\n`;
	state.pushIndent();
	result += render(state, node.body);
	state.popIndent();
	result += state.indent + `end;\n`;

	return result;
}
