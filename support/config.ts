import * as path from "path";
import * as fs from "fs";
import * as fse from "fs-extra";
import * as toml from "toml";
import * as jspath from "jspath";

export class Config {
  constructor() {}

  public async getValue(mapping: string) {
    return (await this.get(mapping)).toString();
  }

  public async getArray(mapping: string): Promise<string[]> {
    return await this.get(mapping);
  }

  private async get(mapping: string) {
    const config = toml.parse(await this.load());
    return jspath.apply(`.${mapping}`, config);
  }

  private async load() {
    const env = process.env.ENV || "default";
    const configPath = path.resolve(
      __dirname,
      "..",
      "..",
      "..",
      "..",
      "configs"
    );
    const tomlFile = path.resolve(
      __dirname,
      configPath,
      `${env.toLowerCase()}.toml`
    );
    await fse.ensureDir(configPath);
    await fse.ensureFile(tomlFile);
    return fs.readFileSync(tomlFile, "utf-8");
  }
}
