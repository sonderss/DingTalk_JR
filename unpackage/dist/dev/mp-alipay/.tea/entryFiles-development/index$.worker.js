if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');


      function getUserAgentInPlatformWeb() {
        return typeof navigator !== 'undefined' ? navigator.swuserAgent || navigator.userAgent || '' : '';
      }
      if(getUserAgentInPlatformWeb() && (getUserAgentInPlatformWeb().indexOf('LyraVM') > 0 || getUserAgentInPlatformWeb().indexOf('AlipayIDE') > 0) ) {
        var AFAppX = self.AFAppX.getAppContext ? self.AFAppX.getAppContext().AFAppX : self.AFAppX;
      } else {
        importScripts('https://appx/af-appx.worker.min.js');
        var AFAppX = self.AFAppX;
      }
      self.getCurrentPages = AFAppX.getCurrentPages;
      self.getApp = AFAppX.getApp;
      self.Page = AFAppX.Page;
      self.App = AFAppX.App;
      self.my = AFAppX.bridge || AFAppX.abridge;
      self.abridge = self.my;
      self.Component = AFAppX.WorkerComponent || function(){};
      self.$global = AFAppX.$global;
      self.requirePlugin = AFAppX.requirePlugin;
    

if(AFAppX.registerApp) {
  AFAppX.registerApp({
    appJSON: appXAppJson,
  });
}



function success() {
require('../../app');
require('../../component/headNav?hash=591ac642b6f57a184fac9330fa292ccf33c32471');
require('../../component/cusTable?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../component/uniSteps?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../pages/login/index?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/index/index?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/message/index?hash=6dfb59cd4ad7096f58e335e04a57e5e141c0305f');
require('../../pages/billMaterials/index?hash=38c32183534516775f901d2f87d9a25435027b87');
require('../../pages/orderTracking/index?hash=5e4cf5feecfb92a89e49ac2b99d0c5d9b32337e9');
require('../../pages/orderDetail/index?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/mine/index?hash=6dfb59cd4ad7096f58e335e04a57e5e141c0305f');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}