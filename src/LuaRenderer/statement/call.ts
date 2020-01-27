import { render } from "..";
import * as lua from "../../LuaAST";
import { RenderState } from "../RenderState";

export function renderCallStatement(state: RenderState, node: lua.CallStatement) {
	const expStr = render(state, node.expression);

	const listNode = state.peekListNode();
	if (listNode && listNode.next && lua.isCallStatement(listNode.next.value)) {
		return state.indent + `${expStr};\n`;
	} else {
		return state.indent + `${expStr}\n`;
	}
}
