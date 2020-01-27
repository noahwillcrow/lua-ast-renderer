import { render } from "..";
import * as lua from "../../LuaAST";
import { RenderState } from "../RenderState";

export function renderStatements(state: RenderState, statements: lua.List<lua.Statement>) {
	let result = "";
	lua.list.forEach(statements, statement => (result += render(state, statement)));
	return result;
}
