import { renderArgs, render } from "..";
import lua from "../../main";
import { RenderState } from "../../RenderState";

export function renderFunctionExpression(state: RenderState, node: lua.FunctionExpression) {
	let result = "";

	result += `function(${renderArgs(state, node.args)})\n`;
	state.pushIndent();
	result += render(state, node.body);
	state.popIndent();
	result += state.indent + `end`;

	return result;
}
