# 欢迎使用图片尺寸调整服务
***
## 使用说明
* post地址：http://{replace-with-server-ip}:3000/resize
* 请一定设置 Content-Type 为 application/json
* 请求体需至少包括 **inPath** *{string}*, **outPath** *{string}*, **width/height** *{string|number}* 三个参数  
  分别代表：输入图片路径，输出图片路径，调整后的宽度/高度  
* 额外的可选参数为 **height/width** *{string|number}*, **aspectRatio** *{string}*  
  分别代表：宽度，是否维持原图横纵比(若为`'!'`，则代表不考虑横纵比，完全满足宽度和高度参数的数值)  
* 几个json对象示例：

  **吻合宽度**  
  `{`  
　　`inPath: 'C:/beau.jpg',`  
　　`outPath: 'C:/beau-800w.jpg',`  
　　`width: 500`  
  `}`  
  **吻合高度**  
  `{`  
　　`inPath: 'C:/beau.jpg',`  
　　`outPath: 'C:/beau-400h.jpg',`  
　　`height: 400`  
  `}`  
  **维持横纵比，且宽度不超过700，高度不超过600**  
  `{`  
　　`inPath: 'C:/beau.jpg',`  
　　`outPath: 'C:/beau-after.jpg',`  
　　`width: 700,`  
　　`height: 600`  
  `}`  
  **不考虑横纵比，完全符合 宽度700 高度600**  
  `{`  
　　`inPath: 'C:/beau.jpg',`  
　　`outPath: 'C:/beau-after.jpg',`  
　　`width: 700,`  
　　`height: 600,`  
　　`aspectRatio: '!'`  
  `}` 

***  
## 测试用例