import { RenderState } from "../../RenderState";
import lua from "../../main";
import { render } from "..";
import { renderBlock } from "./block";

export function renderIfStatement(state: RenderState, node: lua.IfStatement) {
	let result = "";

	result += state.indent + `if ${render(state, node.condition)} then\n`;
	if (node.body) {
		state.pushIndent();
		result += renderBlock(state, node.body);
		state.popIndent();
	}

	if (node.elseIfs) {
		for (const elseIf of node.elseIfs) {
			result += `elseif ${render(state, elseIf.condition)} then\n`;
			state.pushIndent();
			result += renderBlock(state, elseIf.body);
			state.popIndent();
		}
	}

	if (node.elseBody) {
		result += state.indent + `else\n`;
		state.pushIndent();
		result += renderBlock(state, node.elseBody);
		state.popIndent();
	}

	result += state.indent + `end;\n`;

	return result;
}
