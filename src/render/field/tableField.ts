import lua from "../../main";
import { RenderState } from "../../RenderState";
import { render } from "..";

export function renderTableField(state: RenderState, node: lua.TableField) {
	const valueStr = render(state, node.value);
	return `${node.name} = ${valueStr}`;
}
