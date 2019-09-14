import lua from "../../main";
import { RenderState } from "../../RenderState";

export function renderNilLiteral(state: RenderState, node: lua.NilLiteral) {
	return "nil";
}
