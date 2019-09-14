import lua from "../../main";
import { RenderState } from "../../RenderState";

export function renderTrueLiteral(state: RenderState, node: lua.TrueLiteral) {
	return "true";
}
