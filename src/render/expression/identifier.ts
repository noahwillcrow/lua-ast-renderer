import lua from "../../main";
import { RenderState } from "../../RenderState";

export function renderIdentifier(state: RenderState, node: lua.Identifier) {
	return node.name;
}
