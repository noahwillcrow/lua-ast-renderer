import lua from "../../main";
import { RenderState } from "../../RenderState";

export function renderVarArgsLiteral(state: RenderState, node: lua.VarArgsLiteral) {
	return "...";
}
