var windowsService = require('node-windows').Service;
 
// Create a new service object 
var wsvc = new windowsService({
  name:'Thumbnails Resize Service',
  description: '将node.js项目thumbnails注册为windows服务',
  script: 'C:\\nodework\\thumbnails\\app.js',
  env:[{
    name:'PUBLIC',
    value:process.env['THUMBNAILS_PUBLIC']
  }]
});
 
// Listen for the "install" event, which indicates the 
// process is available as a service. 
/*
wsvc.on('install',function(){
    console.log('service installed');
  wsvc.start();
});
 
wsvc.install();
*/
/***************************************************** */
// Listen for the "uninstall" event so we know when it's done. 

wsvc.on('uninstall',function(){
  console.log('Uninstall complete.');
  console.log('The service exists: ',wsvc.exists);
});
 
// Uninstall the service. 
wsvc.uninstall();
