import { render, renderArgs } from "..";
import lua from "../../main";
import { RenderState } from "../../RenderState";

export function renderFunctionDeclaration(state: RenderState, node: lua.FunctionDeclaration) {
	let result = "";

	const argStr = renderArgs(state, node.args);
	const idStr = render(state, node.name);

	result += state.indent + `local function ${idStr}(${argStr})\n`;
	state.pushIndent();
	result += render(state, node.body);
	state.popIndent();
	result += state.indent + `end;\n`;

	return result;
}
