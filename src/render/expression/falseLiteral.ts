import lua from "../../main";
import { RenderState } from "../../RenderState";

export function renderFalseLiteral(state: RenderState, node: lua.FalseLiteral) {
	return "false";
}
