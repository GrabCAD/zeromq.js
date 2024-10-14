# How to rebuild and upgrade the version of ZeroMQ

## Prerequisites for node 16.17.1 and electron 22.2.14

### Visual Studio 2017 Build Tools

You will need to install Visual Studio 2017 build tools, it's advisable to run [setup_vs2017_build_tools.ps1](https://github.com/GrabCAD/eagle-print/blob/master/scripts/setup_vs2017_build_tools.ps1) from eagle-print to initially install most of the tools we need.

- If this script is not available, when installing VS2017 build tools, select `Visual C++ build tools` package and `.NET desktop build tools` package

Additionally you will need to install Windows 10 SDK.

- You can do this by opening up the `Visual Studio Installer` -> `Modify` and press the `Individual Components` tab at the top
- Scroll (most likely to the bottom) and check the latest `Windows 10 SDK` and install.

## Update the version

In the [package.json](../package.json), update the version.

If are wanting to update the version of node and electron which is being used then you will need to update the `prebuildify` `prebuildify-ia32` and script commands.

The following example is for node v16.17.1 and electron v22.3.14:

```json
{
    ...
    "scripts": {
        ...
        "prebuildify": "prebuildify -t node@16.17.1 -t electron@22.3.14 --strip",
        "prebuildify-ia32": "prebuildify --arch=ia32 -t node@16.17.1 -t electron@22.3.14 --strip",
        ...
        }
    ...
}
```

## How to build and publish new version

```shell
npm install
npm run prebuildify
npm publish
```

## Troubleshooting

When running `npm run prebuildify`, you should see what versions of packages are being used.

They should be similar to the following:

```shell
gyp info using node-gyp@9.4.0
gyp info using node@16.17.1 | win32 | x64
gyp info find Python using Python version 3.10.1 found at "C:\Program Files\Python310\python.exe"
gyp info find VS using VS2017 (15.9.33926.519) found at:
gyp info find VS "C:\Program Files (x86)\Microsoft Visual Studio\2017\BuildTools"
```
