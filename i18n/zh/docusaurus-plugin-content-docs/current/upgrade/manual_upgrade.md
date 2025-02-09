---
title: 手动升级
---


你可以使用安装脚本升级 RKE2，也可以手动安装所需版本的二进制文件。

> **注意**：首先升级 Server 节点，一次可以升级一个。升级完所有 Server 后，你可以升级 Agent 节点。

### 版本 Channels

通过安装脚本或使用我们的[自动升级](automated_upgrade.md)功能执行的升级可以绑定到不同的版本 channels。

目前，`latest` 是唯一可用的 channel。如果我们有了更多版本并且需要区分最新版本和稳定版本，我们会添加一个 stable channel 并将其设置为默认。

有关详细的最新 channel 列表，你可以访问 [rke2 channel 服务 API](https://update.rke2.io/v1-release/channels)。有关 channel 如何工作的更多信息，请参阅 [channelserver 项目](https://github.com/rancher/channelserver)。

### 使用安装脚本升级 RKE2

要升级旧版本的 RKE2，你可以使用相同的标志重新运行安装脚本，例如：

```sh
curl -sfL https://get.rke2.io | sh -
```
默认情况下将升级到 stable channel 中的最新版本。

如果想升级到特定 channel（如 latest）中的最新版本，你可以指定 channel：
```sh
curl -sfL https://get.rke2.io | INSTALL_RKE2_CHANNEL=latest sh -
```

如果要升级到特定版本，可以运行以下命令：

```sh
curl -sfL https://get.rke2.io | INSTALL_RKE2_VERSION=vX.Y.Z+rke2rN sh -
```

安装后记得重启 rke2 进程：

```sh
# Server 节点：
systemctl restart rke2-server

# Agent 节点：
systemctl restart rke2-agent
```

### 使用二进制文件手动升级 RKE2

或者手动升级 RKE2：

1. 从 [releases](https://github.com/rancher/rke2/releases) 页面下载所需版本的 RKE2 二进制文件
2. 将下载的二进制文件复制到 `/usr/local/bin/rke2`（使用 tarball 安装的 RKE2）或 `/usr/bin`（使用 RPM 安装的 RKE2）
3. 停止旧的 RKE2 二进制文件
4. 启动新的 RKE2 二进制文件

### 重启 RKE2

systemd 的安装脚本支持重启 RKE2。

**systemd**

手动重启 Server：
```sh
sudo systemctl restart rke2-server
```

手动重启 Agent：
```sh
sudo systemctl restart rke2-agent
```
