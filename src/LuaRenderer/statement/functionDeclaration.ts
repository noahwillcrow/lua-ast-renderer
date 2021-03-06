import { render } from "..";
import * as lua from "../../LuaAST";
import { RenderState } from "../RenderState";
import { renderParameters } from "../util/parameters";
import { renderStatements } from "../util/statements";

export function renderFunctionDeclaration(state: RenderState, node: lua.FunctionDeclaration) {
	let result = "";
	result += state.indent + `local function ${render(state, node.name)}(${renderParameters(state, node)})\n`;
	state.pushIndent();
	result += renderStatements(state, node.statements);
	state.popIndent();
	result += state.indent + `end\n`;
	return result;
}
