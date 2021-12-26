"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.onDefault = void 0;
const io = __importStar(require("@actions/io"));
const core = __importStar(require("@actions/core"));
const exec_1 = require("@actions/exec");
const manifest = __importStar(require("../utils/manifest"));
const retry_1 = require("../utils/retry");
const git = __importStar(require("../utils/git"));
const fileManager = __importStar(require("../utils/file-manager"));
const user_input_1 = require("../utils/user-input");
function onDefault(params) {
    return __awaiter(this, void 0, void 0, function* () {
        const input = (0, user_input_1.userInput)();
        const paths = fileManager.paths(params);
        const PUBLIC_URL = `/${paths.byRepo}/${paths.byHeadCommit}`;
        core.info(`
    -> Paths:
    -> Your app will be hosted in github pages:
    -> "https://${params.repository.owner}.github.io/${params.repository.name}/${paths.byHeadCommit}"

    -> We'll build your app with the proper PUBLIC_URL: ${PUBLIC_URL}
    -> For more info:
    -> https://github.com/facebook/create-react-app/pull/937/files#diff-9b26877ecf8d15b7987c96e5a17502f6
    -> https://www.gatsbyjs.com/docs/path-prefix/
  `);
        core.info(`
    -> Building app
  `);
        core.exportVariable('PUBLIC_URL', PUBLIC_URL);
        yield (0, exec_1.exec)(input.buildCmd);
        core.info(`
    -> Current working branch: ${params.branch.name}"
    -> Will move (and override) the build result on '${input.dist}' to '${paths.byHeadCommit}' in ${input.branch}"
  `);
        yield git.stageChanges(input.dist);
        yield git.commit(`Persisting dist output for ${input.slug}`);
        yield (0, retry_1.retry)(5)(updateApp.bind(null, input, params, paths));
        core.debug('Return to original state');
        yield git.hardReset(params.branch.name);
    });
}
exports.onDefault = onDefault;
function updateApp(input, params, paths) {
    return __awaiter(this, void 0, void 0, function* () {
        yield git.hardReset(input.branch);
        yield git.getFilesFromOtherBranch(params.branch.name, input.dist);
        manifest.replaceApp(params);
        core.debug('Copying from input.dist to -> ' + paths.byHeadCommit);
        core.debug(input.dist + '->' + paths.byHeadCommit);
        yield io.cp(input.dist, paths.byHeadCommit, {
            recursive: true,
            force: true,
        });
        core.debug('Finished copying');
        yield git.stageChanges(paths.byHeadCommit, 'index.html', 'manifest.json');
        yield git.commit(`Updating app ${paths.byHeadCommit}`);
        yield git.push(input.branch);
    });
}
