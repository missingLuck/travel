const path = require("path"); //引入path模块
function resolve(dir) {
    return path.join(__dirname, dir); //path.join(__dirname)设置绝对路径
}
module.exports = {
    publicPath: "./",
    outputDir: "dist", // 输出文件目录
    chainWebpack: (config)=>{
        config.resolve.alias
        //set第一个参数：设置的别名，第二个参数：设置的路径
            .set("@", resolve("./src"))
            .set("components", resolve("./src/components"))
            .set("assets", resolve("./src/assets"))
            .set("views", resolve("./src/views"));
    //注意 store 和 router 没必要配置
    },
    configureWebpack: (config) => {
        if (process.env.NODE_ENV === 'production') {
            // 生产环境
            config.mode = 'production'
        } else {
            // 开发环境
            config.mode = 'development'
        }
    },
};
