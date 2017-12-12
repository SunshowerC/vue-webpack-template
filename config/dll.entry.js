/**
 * Created by willchen on 2017/11/10.
 */
let fs = require("fs");
let {resolve} = require("path");
let exec = require("child_process").exec;

let {outputDir, webRootDir} = require("./webpack.base.config");




let existDllFile = () => {
    let manifestPath = resolve(webRootDir, "config/manifest.json");
    return !fs.existsSync(manifestPath) ? Promise.resolve() : Promise.reject();
};

/* 如果已经存在 dll 文件，跳过 dll 执行命令 */
existDllFile()
    .then(() => {
        let cmdStr = "webpack --config config/webpack.dll.config.js -p";

        exec(cmdStr, (err, stdout, stderr) => {
            if(err) {
                console.log("error:" + stderr);
            } else {
                console.log(stdout);
                console.log("webpack dll successfully!");
            }
        });
    }).catch(() => {
        console.info("There exists dll file.Skip it.");
    });
/*
exec(cmdStr, (err,stdout,stderr)=>{
    if(err) {
        console.log('error:'+stderr);
    } else {
        console.log(`webpack dll successfully!`)
    }
});
*/


