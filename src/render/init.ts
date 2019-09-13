import lua from "../main";
import { isBinaryExpression } from "../typeGuards";
import { renderBinaryExpression } from "./expression/renderBinaryExpression";

export function render(node: lua.Node): string {
	if (isBinaryExpression(node)) {
		return renderBinaryExpression(node);
	} else {
		throw `Unexpected node! ${lua.SyntaxKind[node.kind]}`;
	}
}
