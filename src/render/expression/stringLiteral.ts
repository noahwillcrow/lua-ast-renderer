import lua from "../../main";
import { RenderState } from "../../RenderState";

export function renderStringLiteral(render: RenderState, node: lua.StringLiteral) {
	return `"${node.value}"`;
}
