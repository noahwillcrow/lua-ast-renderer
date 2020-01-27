import { render } from "..";
import * as lua from "../../LuaAST";
import { RenderState } from "../RenderState";

export function renderComputedTableField(state: RenderState, node: lua.ComputedTableField) {
	const indexStr = render(state, node.index);
	const valueStr = render(state, node.value);
	return `[${indexStr}] = ${valueStr}`;
}
