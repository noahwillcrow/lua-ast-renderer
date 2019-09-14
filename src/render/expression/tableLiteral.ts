import lua from "../../main";
import { RenderState } from "../../RenderState";
import { render } from "..";
import { isExpression } from "../../typeGuards";

export function renderTableLiteral(state: RenderState, node: lua.TableLiteral) {
	if (node.fields.length === 0) {
		return "{}";
	}

	let isArray = node.fields.every(field => isExpression(field));
	let result = "";

	if (isArray) {
		result += "{ " + node.fields.map(v => render(state, v)).join(", ") + " }";
	} else {
		result += "{\n";
		state.pushIndent();
		for (const field of node.fields) {
			result += state.indent + `${render(state, field)},\n`;
		}
		state.popIndent();
		result += state.indent + "}";
	}

	return result;
}
