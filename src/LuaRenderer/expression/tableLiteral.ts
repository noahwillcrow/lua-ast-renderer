import { render } from "..";
import * as lua from "../../LuaAST";
import { RenderState } from "../RenderState";
import { isExpression } from "../../LuaAST/typeGuards";

export function renderTableLiteral(state: RenderState, node: lua.TableLiteral) {
	if (node.fields.head === undefined) {
		return "{}";
	}

	let isArray = lua.list.every(node.fields, field => isExpression(field));
	let result = "";

	if (isArray) {
		result += "{" + lua.list.mapToArray(node.fields, v => render(state, v)).join(", ") + "}";
	} else {
		result += "{\n";
		state.pushIndent();
		lua.list.forEach(node.fields, field => {
			result += state.indent + `${render(state, field)},\n`;
		});
		state.popIndent();
		result += state.indent + "}";
	}

	return result;
}
