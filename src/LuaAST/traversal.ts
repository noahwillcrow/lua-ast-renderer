import * as lua from ".";

export function getAncestorOfKind<T extends lua.SyntaxKind>(node: lua.Node, kind: T): lua.NodeByKind[T] | undefined {
	let parent = node.parent;
	while (parent) {
		if (parent.kind === kind) {
			return (parent as unknown) as lua.NodeByKind[T];
		}
		parent = parent.parent;
	}
}
