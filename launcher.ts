import { spawnSync } from "child_process";
import { resolve } from "path";
import { ensureDir } from "fs-extra";

export class Launcher {
  private getArgs(): string[] {
    const argv = process.argv.slice(2);
    const args = this.checkEnv(argv);
    return args;
  }

  private checkEnv(argv: string[]) {
    for (const arg of argv) {
      if (arg.includes("env")) {
        const envArg = arg.replace("--env=", "");
        process.env.ENV = envArg;
        argv = argv.filter(function (value, index, arr) {
          return value != arg;
        });
      }
    }

    return argv;
  }

  private async getConfigs(): Promise<string[]> {
    const args = this.getArgs();
    const standard = this.getStandard();
    const require = await this.getRequire();
    const configs = standard.concat(require, args);

    return configs;
  }

  private async getRequire(): Promise<string[]> {
    let requireConfig: string[] = [];

    return requireConfig;
  }

  private getStandard() {
    const standard = [
      "--format",
      "./node_modules/@cucumber/pretty-formatter",
      "--format",
      "json:./reports/cucumber_report.json",
      "--require",
      "./node_modules/@dbservices/scorpion-core/step_definitions/*.js",
      "--require",
      "./node_modules/@dbservices/scorpion-core/support/*.js",
      "--publish-quiet",
    ];

    return standard;
  }

  public async run() {
    const command: string =
      process.platform === "win32"
        ? ".\\node_modules\\.bin\\cucumber-js.cmd"
        : "./node_modules/.bin/cucumber-js";
    await ensureDir(resolve(__dirname, "..", "..", "..", "reports"));
    spawnSync(command, await this.getConfigs(), { stdio: "inherit" });
  }
}

(async () => {
  const launcher = new Launcher();
  await launcher.run();
})();