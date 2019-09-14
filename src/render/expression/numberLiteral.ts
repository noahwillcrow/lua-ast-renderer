import lua from "../../main";
import { RenderState } from "../../RenderState";

export function renderNumberLiteral(state: RenderState, node: lua.NumberLiteral) {
	return `${node.value}`;
}
