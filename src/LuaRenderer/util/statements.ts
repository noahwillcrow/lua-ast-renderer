import { render } from "..";
import * as lua from "../../LuaAST";
import { RenderState } from "../RenderState";

export function renderStatements(state: RenderState, statements: lua.List<lua.Statement>) {
	let result = "";

	let listNode = statements.head;
	while (listNode !== undefined) {
		state.pushListNode(listNode);

		result += render(state, listNode.value);

		listNode = listNode.next;
		state.popListNode();
	}

	return result;
}
