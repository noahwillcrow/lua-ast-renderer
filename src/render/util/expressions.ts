import { RenderState } from "../../RenderState";
import lua from "../../main";
import { render } from "..";

export function renderExpressions(state: RenderState, expressions: lua.Expressions) {
	return expressions.map(v => render(state, v)).join(", ");
}
