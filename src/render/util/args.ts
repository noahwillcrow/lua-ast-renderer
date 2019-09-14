import { render } from "..";
import lua from "../../main";
import { RenderState } from "../../RenderState";

export function renderArgs(state: RenderState, args: lua.Arguments) {
	return args.map(arg => render(state, arg)).join(", ");
}
