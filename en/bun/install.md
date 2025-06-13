# install

```sh
sudo apt update
sudo apt install unzip -y
curl -fsSL https://bun.sh/install | bash
```


| 类别       | 命令                       | 说明                            |
| -------- |--------------------------|-------------------------------|
| 📦 依赖管理  | `bun install`            | 安装 `package.json` 中的依赖        |
|          | `bun add <pkg>`          | 添加依赖（默认是生产依赖）                 |
|          | `bun add -D <pkg>`       | 添加开发依赖（等同 `--dev`）            |
|          | `bun remove <pkg>`       | 移除依赖                          |
| 🛠️ 脚本运行 | `bun run <script>`       | 运行 `package.json` 中的指定 script |
|          | `bun run`                | 列出所有可运行的 scripts              |
|          | `bun x <cmd>`            | 类似 `npx`，运行本地依赖的可执行命令         |
| 🧪 代码执行  | `bun <file>`             | 运行 JS/TS 文件（可替代 `node`）       |
|          | `bun repl`               | 启动交互式 JS/TS shell             |
| ⚙️ 项目工具  | `bun init`               | 初始化项目，创建 `package.json`       |
|          | `bun upgrade`            | 升级 Bun 自身                     |
|          | `bun install --no-cache` | 跳过缓存强制重新安装依赖                  |
|          | `bun --version`          | 查看当前 Bun 的版本                  |
|          | `bun pm`                 | 查看当前使用的包管理器状态                 |
|          | `bun pm ls`              | 查看当前使用的包版本                    |
|          | `bun pm cache`           | 查看全局缓存目录                    |
| 📁 相关文件  | `package.json`           | 项目配置和依赖列表                     |
|          | `bun.lockb`              | Bun 的锁定文件，保证依赖一致              |
|          | `node_modules/`          | Bun 创建的依赖目录，使用硬链接提高性能         |
|          | `~/.bun`                 | Bun 的缓存目录（依赖缓存、安装工具等）         |
