import { render } from "..";
import * as lua from "../../LuaAST";
import { RenderState } from "../RenderState";

export function renderTableField(state: RenderState, node: lua.TableField) {
	const valueStr = render(state, node.value);
	return `${node.name} = ${valueStr}`;
}
