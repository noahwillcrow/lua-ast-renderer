import { render } from "./render";
import { RenderState } from "./RenderState";
import lua from "./main";
import * as fs from "fs";
import * as path from "path";

const statements = new Array<lua.Statement>();

statements.push(lua.varDec("Workspace", lua.method(lua.id("game"), "GetService", [lua.string("Workspace")])));

statements.push(
	lua.create(lua.SyntaxKind.IfStatement, {
		condition: lua.bool(true),
		body: lua.block([lua.call(lua.id("print"), [lua.number(1), lua.number(2), lua.number(3)])]),
		elseIfs: [],
		elseBody: undefined,
	}),
);

statements.push(
	lua.whileDo(lua.bool(true), [lua.call(lua.id("print"), [lua.number(1), lua.number(2), lua.number(3)])]),
);

const luaSource = render(new RenderState(), lua.block(statements));

fs.writeFileSync(path.resolve(__dirname, "..", "out.lua"), luaSource);
