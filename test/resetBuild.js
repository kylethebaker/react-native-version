import apiMacro from "./helpers/apiMacro";
import cliMacro from "./helpers/cliMacro";
import expected from "./fixtures";
import npmScriptsMacro from "./helpers/npmScriptsMacro";
import test from "ava";

test(
	"postversion (legacy)",
	npmScriptsMacro,
	{ postversion: "-r -L" },
	expected.version.resetBuild,
	expected.tree.buildNumber.amended
);

test(
	"postversion",
	npmScriptsMacro,
	{ postversion: "-r" },
	expected.version.resetBuild,
	expected.tree.buildNumber.amended
);

test(
	"version (legacy)",
	npmScriptsMacro,
	{ version: "-r -L" },
	expected.version.resetBuild,
	expected.tree.buildNumber.amended
);

test(
	"version",
	npmScriptsMacro,
	{ version: "-r" },
	expected.version.resetBuild,
	expected.tree.buildNumber.amended
);

test(
	"CLI (legacy)",
	cliMacro,
	["-r", "-L"],
	expected.version.resetBuild,
	expected.tree.buildNumber.notAmended
);

test(
	"CLI",
	cliMacro,
	["-r"],
	expected.version.resetBuild,
	expected.tree.buildNumber.notAmended
);

test(
	"API (legacy)",
	apiMacro,
	{ resetBuild: true, legacy: true },
	expected.version.resetBuild,
	expected.tree.buildNumber.notAmended
);

test(
	"API",
	apiMacro,
	{ resetBuild: true },
	expected.version.resetBuild,
	expected.tree.buildNumber.notAmended
);
