import lua from "../../main";
import { render } from "../init";

export function renderBinaryExpression(node: lua.BinaryExpression) {
	const leftStr = render(node.left);
	const rightStr = render(node.left);
	if (node.operator === lua.OperatorKind.Plus) {
		return `${leftStr} + ${rightStr}`;
	} else if (node.operator === lua.OperatorKind.Minus) {
		return `${leftStr} - ${rightStr}`;
	} else if (node.operator === lua.OperatorKind.Asterisk) {
		return `${leftStr} * ${rightStr}`;
	} else if (node.operator === lua.OperatorKind.Slash) {
		return `${leftStr} / ${rightStr}`;
	} else if (node.operator === lua.OperatorKind.Caret) {
		return `${leftStr} ^ ${rightStr}`;
	} else {
		throw `Unexpected operator! ${lua.OperatorKind[node.operator]} `;
	}
}
