// @flow

export const antIconPrefix = 'anticon';

// Ref: https://github.com/ant-design/ant-design/blob/master/site/theme/template/IconSet/index.jsx
const AntIconNames = {
  direction: [
    'step-backward',
    'step-forward',
    'fast-backward',
    'fast-forward',
    'shrink',
    'arrows-alt',
    'down',
    'up',
    'left',
    'right',
    'caret-up',
    'caret-down',
    'caret-left',
    'caret-right',
    'up-circle',
    'down-circle',
    'left-circle',
    'right-circle',
    'up-circle-o',
    'down-circle-o',
    'right-circle-o',
    'left-circle-o',
    'double-right',
    'double-left',
    'verticle-left',
    'verticle-right',
    'forward',
    'backward',
    'rollback',
    'enter',
    'retweet',
    'swap',
    'swap-left',
    'swap-right',
    'arrow-up',
    'arrow-down',
    'arrow-left',
    'arrow-right',
    'play-circle',
    'play-circle-o',
    'up-square',
    'down-square',
    'left-square',
    'right-square',
    'up-square-o',
    'down-square-o',
    'left-square-o',
    'right-square-o',
    'login',
    'logout',
    'menu-fold',
    'menu-unfold',
  ],
  suggestion: [
    'question',
    'question-circle-o',
    'question-circle',
    'plus',
    'plus-circle-o',
    'plus-circle',
    'pause',
    'pause-circle-o',
    'pause-circle',
    'minus',
    'minus-circle-o',
    'minus-circle',
    'plus-square',
    'plus-square-o',
    'minus-square',
    'minus-square-o',
    'info',
    'info-circle-o',
    'info-circle',
    'exclamation',
    'exclamation-circle-o',
    'exclamation-circle',
    'close',
    'close-circle',
    'close-circle-o',
    'close-square',
    'close-square-o',
    'check',
    'check-circle',
    'check-circle-o',
    'check-square',
    'check-square-o',
    'clock-circle-o',
    'clock-circle',
    'warning',
  ],
  logo: [
    'android',
    'android-o',
    'apple',
    'apple-o',
    'windows',
    'windows-o',
    'ie',
    'chrome',
    'github',
    'aliwangwang',
    'aliwangwang-o',
    'dingding',
    'dingding-o',
    'weibo-square',
    'weibo-circle',
    'taobao-circle',
    'html5',
    'weibo',
    'twitter',
    'wechat',
    'youtube',
    'alipay-circle',
    'taobao',
    'skype',
    'qq',
    'medium-workmark',
    'gitlab',
    'medium',
    'linkedin',
    'google-plus',
    'dropbox',
    'facebook',
    'codepen',
    'amazon',
    'google',
    'codepen-circle',
    'alipay',
    'ant-design',
    'aliyun',
    'zhihu',
    'slack',
    'slack-square',
    'behance',
    'behance-square',
    'dribbble',
    'dribbble-square',
    'instagram',
    'yuque',
  ],
  other: [
    'lock',
    'unlock',
    'area-chart',
    'pie-chart',
    'bar-chart',
    'dot-chart',
    'bars',
    'book',
    'calendar',
    'cloud',
    'cloud-download',
    'code',
    'code-o',
    'copy',
    'credit-card',
    'delete',
    'desktop',
    'download',
    'edit',
    'ellipsis',
    'file',
    'file-text',
    'file-unknown',
    'file-pdf',
    'file-word',
    'file-excel',
    'file-jpg',
    'file-ppt',
    'file-markdown',
    'file-add',
    'folder',
    'folder-open',
    'folder-add',
    'hdd',
    'frown',
    'frown-o',
    'meh',
    'meh-o',
    'smile',
    'smile-o',
    'inbox',
    'laptop',
    'appstore-o',
    'appstore',
    'line-chart',
    'link',
    'mail',
    'mobile',
    'notification',
    'paper-clip',
    'picture',
    'poweroff',
    'reload',
    'search',
    'setting',
    'share-alt',
    'shopping-cart',
    'tablet',
    'tag',
    'tag-o',
    'tags',
    'tags-o',
    'to-top',
    'upload',
    'user',
    'video-camera',
    'home',
    'loading',
    'loading-3-quarters',
    'cloud-upload-o',
    'cloud-download-o',
    'cloud-upload',
    'cloud-o',
    'star-o',
    'star',
    'heart-o',
    'heart',
    'environment',
    'environment-o',
    'eye',
    'eye-o',
    'camera',
    'camera-o',
    'save',
    'team',
    'solution',
    'phone',
    'filter',
    'exception',
    'export',
    'customer-service',
    'qrcode',
    'scan',
    'like',
    'like-o',
    'dislike',
    'dislike-o',
    'message',
    'pay-circle',
    'pay-circle-o',
    'calculator',
    'pushpin',
    'pushpin-o',
    'bulb',
    'select',
    'switcher',
    'rocket',
    'bell',
    'disconnect',
    'database',
    'compass',
    'barcode',
    'hourglass',
    'key',
    'flag',
    'layout',
    'printer',
    'sound',
    'usb',
    'skin',
    'tool',
    'sync',
    'wifi',
    'car',
    'schedule',
    'user-add',
    'user-delete',
    'usergroup-add',
    'usergroup-delete',
    'man',
    'woman',
    'shop',
    'gift',
    'idcard',
    'medicine-box',
    'red-envelope',
    'coffee',
    'copyright',
    'trademark',
    'safety',
    'wallet',
    'bank',
    'trophy',
    'contacts',
    'global',
    'shake',
    'api',
    'fork',
    'dashboard',
    'form',
    'table',
    'profile',
  ],
};

export const AntIconList = [
  `.${antIconPrefix}-step-forward:before { content: "\\e600"; }`,
  `.${antIconPrefix}-step-backward:before { content: "\\e601"; }`,
  `.${antIconPrefix}-forward:before { content: "\\e602"; }`,
  `.${antIconPrefix}-backward:before { content: "\\e603"; }`,
  `.${antIconPrefix}-caret-right:before { content: "\\e604"; }`,
  `.${antIconPrefix}-caret-left:before { content: "\\e605"; }`,
  `.${antIconPrefix}-caret-down:before { content: "\\e606"; }`,
  `.${antIconPrefix}-caret-up:before { content: "\\e607"; }`,
  `.${antIconPrefix}-right-circle:before { content: "\\e608"; }`,
  `.${antIconPrefix}-circle-right:before { content: "\\e608"; } // antd@1.x compatibility alias: right-circle`,
  `.${antIconPrefix}-caret-circle-right:before { content: "\\e608"; } // antd@1.x compatibility alias: right-circle`,
  `.${antIconPrefix}-left-circle:before { content: "\\e609"; }`,
  `.${antIconPrefix}-circle-left:before { content: "\\e609"; } // antd@1.x compatibility alias: left-circle`,
  `.${antIconPrefix}-caret-circle-left:before { content: "\\e609"; } // antd@1.x compatibility alias: left-circle`,
  `.${antIconPrefix}-up-circle:before { content: "\\e60a"; }`,
  `.${antIconPrefix}-circle-up:before { content: "\\e60a"; } // antd@1.x compatibility alias: up-circle`,
  `.${antIconPrefix}-caret-circle-up:before { content: "\\e60a"; } // antd@1.x compatibility alias: up-circle`,
  `.${antIconPrefix}-down-circle:before { content: "\\e60b"; }`,
  `.${antIconPrefix}-circle-down:before { content: "\\e60b"; } // antd@1.x compatibility alias: down-circle`,
  `.${antIconPrefix}-caret-circle-down:before { content: "\\e60b"; } // antd@1.x compatibility alias: down-circle`,
  `.${antIconPrefix}-right-circle-o:before { content: "\\e60c"; }`,
  `.${antIconPrefix}-circle-o-right:before { content: "\\e60c"; } // antd@1.x compatibility alias: right-circle-o`,
  `.${antIconPrefix}-caret-circle-o-right:before { content: "\\e60c"; } // antd@1.x compatibility alias: right-circle-o`,
  `.${antIconPrefix}-left-circle-o:before { content: "\\e60d"; }`,
  `.${antIconPrefix}-circle-o-left:before { content: "\\e60d"; } // antd@1.x compatibility alias: left-circle-o`,
  `.${antIconPrefix}-caret-circle-o-left:before { content: "\\e60d"; } // antd@1.x compatibility alias: left-circle-o`,
  `.${antIconPrefix}-up-circle-o:before { content: "\\e60e"; }`,
  `.${antIconPrefix}-circle-o-up:before { content: "\\e60e"; } // antd@1.x compatibility alias: up-circle-o`,
  `.${antIconPrefix}-caret-circle-o-up:before { content: "\\e60e"; } // antd@1.x compatibility alias: up-circle-o`,
  `.${antIconPrefix}-down-circle-o:before { content: "\\e60f"; }`,
  `.${antIconPrefix}-circle-o-down:before { content: "\\e60f"; } // antd@1.x compatibility alias: down-circle-o`,
  `.${antIconPrefix}-caret-circle-o-down:before { content: "\\e60f"; } // antd@1.x compatibility alias: down-circle-o`,
  `.${antIconPrefix}-verticle-left:before { content: "\\e610"; }`,
  `.${antIconPrefix}-verticle-right:before { content: "\\e611"; }`,
  `.${antIconPrefix}-rollback:before { content: "\\e612"; }`,
  `.${antIconPrefix}-retweet:before { content: "\\e613"; }`,
  `.${antIconPrefix}-shrink:before { content: "\\e614"; }`,
  `.${antIconPrefix}-arrows-alt:before { content: "\\e615"; }`,
  `.${antIconPrefix}-arrow-salt:before { content: "\\e615"; } // antd@1.x compatibility alias: arrows-alt`,
  `.${antIconPrefix}-reload:before { content: "\\e616"; }`,
  `.${antIconPrefix}-double-right:before { content: "\\e617"; }`,
  `.${antIconPrefix}-double-left:before { content: "\\e618"; }`,
  `.${antIconPrefix}-arrow-down:before { content: "\\e619"; }`,
  `.${antIconPrefix}-arrow-up:before { content: "\\e61a"; }`,
  `.${antIconPrefix}-arrow-right:before { content: "\\e61b"; }`,
  `.${antIconPrefix}-arrow-left:before { content: "\\e61c"; }`,
  `.${antIconPrefix}-down:before { content: "\\e61d"; }`,
  `.${antIconPrefix}-up:before { content: "\\e61e"; }`,
  `.${antIconPrefix}-right:before { content: "\\e61f"; }`,
  `.${antIconPrefix}-left:before { content: "\\e620"; }`,
  `.${antIconPrefix}-minus-square-o:before { content: "\\e621"; }`,
  `.${antIconPrefix}-minus-circle:before { content: "\\e622"; }`,
  `.${antIconPrefix}-minus-circle-o:before { content: "\\e623"; }`,
  `.${antIconPrefix}-minus:before { content: "\\e624"; }`,
  `.${antIconPrefix}-plus-circle-o:before { content: "\\e625"; }`,
  `.${antIconPrefix}-plus-circle:before { content: "\\e626"; }`,
  `.${antIconPrefix}-plus:before { content: "\\e627"; }`,
  `.${antIconPrefix}-info-circle:before { content: "\\e628"; }`,
  `.${antIconPrefix}-info-circle-o:before { content: "\\e629"; }`,
  `.${antIconPrefix}-info:before { content: "\\e62a"; }`,
  `.${antIconPrefix}-exclamation:before { content: "\\e62b"; }`,
  `.${antIconPrefix}-exclamation-circle:before { content: "\\e62c"; }`,
  `.${antIconPrefix}-exclamation-circle-o:before { content: "\\e62d"; }`,
  `.${antIconPrefix}-close-circle:before { content: "\\e62e"; }`,
  `.${antIconPrefix}-cross-circle:before { content: "\\e62e"; } // antd@1.x compatibility alias: close-circle`,
  `.${antIconPrefix}-close-circle-o:before { content: "\\e62f"; }`,
  `.${antIconPrefix}-cross-circle-o:before { content: "\\e62f"; } // antd@1.x compatibility alias: close-circle-o`,
  `.${antIconPrefix}-check-circle:before { content: "\\e630"; }`,
  `.${antIconPrefix}-check-circle-o:before { content: "\\e631"; }`,
  `.${antIconPrefix}-check:before { content: "\\e632"; }`,
  `.${antIconPrefix}-close:before { content: "\\e633"; }`,
  `.${antIconPrefix}-cross:before { content: "\\e633"; } // antd@1.x compatibility alias: close`,
  `.${antIconPrefix}-customer-service:before { content: "\\e634"; }`,
  `.${antIconPrefix}-customerservice:before { content: "\\e634"; } // antd@1.x compatibility alias: customer-service`,
  `.${antIconPrefix}-credit-card:before { content: "\\e635"; }`,
  `.${antIconPrefix}-code-o:before { content: "\\e636"; }`,
  `.${antIconPrefix}-book:before { content: "\\e637"; }`,
  `.${antIconPrefix}-bars:before { content: "\\e639"; }`,
  `.${antIconPrefix}-question:before { content: "\\e63a"; }`,
  `.${antIconPrefix}-question-circle:before { content: "\\e63b"; }`,
  `.${antIconPrefix}-question-circle-o:before { content: "\\e63c"; }`,
  `.${antIconPrefix}-pause:before { content: "\\e63d"; }`,
  `.${antIconPrefix}-pause-circle:before { content: "\\e63e"; }`,
  `.${antIconPrefix}-pause-circle-o:before { content: "\\e63f"; }`,
  `.${antIconPrefix}-clock-circle:before { content: "\\e640"; }`,
  `.${antIconPrefix}-clock-circle-o:before { content: "\\e641"; }`,
  `.${antIconPrefix}-swap:before { content: "\\e642"; }`,
  `.${antIconPrefix}-swap-left:before { content: "\\e643"; }`,
  `.${antIconPrefix}-swap-right:before { content: "\\e644"; }`,
  `.${antIconPrefix}-plus-square-o:before { content: "\\e645"; }`,
  `.${antIconPrefix}-frown:before { content: "\\e646"; }`,
  `.${antIconPrefix}-frown-circle:before { content: "\\e646"; } // antd@1.x compatibility alias: frown`,
  `.${antIconPrefix}-ellipsis:before { content: "\\e647"; }`,
  `.${antIconPrefix}-copy:before { content: "\\e648"; }`,
  `.${antIconPrefix}-menu-fold:before { content: "\\e9ac"; }`,
  `.${antIconPrefix}-mail:before { content: "\\e659"; }`,
  `.${antIconPrefix}-logout:before { content: "\\e65a"; }`,
  `.${antIconPrefix}-link:before { content: "\\e65b"; }`,
  `.${antIconPrefix}-area-chart:before { content: "\\e65c"; }`,
  `.${antIconPrefix}-line-chart:before { content: "\\e65d"; }`,
  `.${antIconPrefix}-home:before { content: "\\e65e"; }`,
  `.${antIconPrefix}-laptop:before { content: "\\e65f"; }`,
  `.${antIconPrefix}-star:before { content: "\\e660"; }`,
  `.${antIconPrefix}-star-o:before { content: "\\e661"; }`,
  `.${antIconPrefix}-folder:before { content: "\\e662"; }`,
  `.${antIconPrefix}-filter:before { content: "\\e663"; }`,
  `.${antIconPrefix}-file:before { content: "\\e664"; }`,
  `.${antIconPrefix}-exception:before { content: "\\e665"; }`,
  `.${antIconPrefix}-meh:before { content: "\\e666"; }`,
  `.${antIconPrefix}-meh-circle:before { content: "\\e666"; } // antd@1.x compatibility alias: meh`,
  `.${antIconPrefix}-meh-o:before { content: "\\e667"; }`,
  `.${antIconPrefix}-shopping-cart:before { content: "\\e668"; }`,
  `.${antIconPrefix}-save:before { content: "\\e669"; }`,
  `.${antIconPrefix}-user:before { content: "\\e66a"; }`,
  `.${antIconPrefix}-video-camera:before { content: "\\e66b"; }`,
  `.${antIconPrefix}-to-top:before { content: "\\e66c"; }`,
  `.${antIconPrefix}-team:before { content: "\\e66d"; }`,
  `.${antIconPrefix}-tablet:before { content: "\\e66e"; }`,
  `.${antIconPrefix}-solution:before { content: "\\e66f"; }`,
  `.${antIconPrefix}-search:before { content: "\\e670"; }`,
  `.${antIconPrefix}-share-alt:before { content: "\\e671"; }`,
  `.${antIconPrefix}-setting:before { content: "\\e672"; }`,
  `.${antIconPrefix}-poweroff:before { content: "\\e6d5"; }`,
  `.${antIconPrefix}-picture:before { content: "\\e674"; }`,
  `.${antIconPrefix}-phone:before { content: "\\e675"; }`,
  `.${antIconPrefix}-paper-clip:before { content: "\\e676"; }`,
  `.${antIconPrefix}-notification:before { content: "\\e677"; }`,
  `.${antIconPrefix}-mobile:before { content: "\\e678"; }`,
  `.${antIconPrefix}-menu-unfold:before { content: "\\e9ad"; }`,
  `.${antIconPrefix}-inbox:before { content: "\\e67a"; }`,
  `.${antIconPrefix}-lock:before { content: "\\e67b"; }`,
  `.${antIconPrefix}-qrcode:before { content: "\\e67c"; }`,
  `.${antIconPrefix}-play-circle:before { content: "\\e6d0"; }`,
  `.${antIconPrefix}-play-circle-o:before { content: "\\e6d1"; }`,
  `.${antIconPrefix}-tag:before { content: "\\e6d2"; }`,
  `.${antIconPrefix}-tag-o:before { content: "\\e6d3"; }`,
  `.${antIconPrefix}-tags:before { content: "\\e67d"; }`,
  `.${antIconPrefix}-tags-o:before { content: "\\e67e"; }`,
  `.${antIconPrefix}-cloud-o:before { content: "\\e67f"; }`,
  `.${antIconPrefix}-cloud:before { content: "\\e680"; }`,
  `.${antIconPrefix}-cloud-upload:before { content: "\\e681"; }`,
  `.${antIconPrefix}-cloud-download:before { content: "\\e682"; }`,
  `.${antIconPrefix}-cloud-download-o:before { content: "\\e683"; }`,
  `.${antIconPrefix}-cloud-upload-o:before { content: "\\e684"; }`,
  `.${antIconPrefix}-environment:before { content: "\\e685"; }`,
  `.${antIconPrefix}-environment-o:before { content: "\\e686"; }`,
  `.${antIconPrefix}-eye:before { content: "\\e687"; }`,
  `.${antIconPrefix}-eye-o:before { content: "\\e688"; }`,
  `.${antIconPrefix}-camera:before { content: "\\e689"; }`,
  `.${antIconPrefix}-camera-o:before { content: "\\e68a"; }`,
  `.${antIconPrefix}-windows:before { content: "\\e68b"; }`,
  `.${antIconPrefix}-apple:before { content: "\\e68c"; }`,
  `.${antIconPrefix}-apple-o:before { content: "\\e6d4"; }`,
  `.${antIconPrefix}-android:before { content: "\\e938"; }`,
  `.${antIconPrefix}-android-o:before { content: "\\e68d"; }`,
  `.${antIconPrefix}-aliwangwang:before { content: "\\e68e"; }`,
  `.${antIconPrefix}-aliwangwang-o:before { content: "\\e68f"; }`,
  `.${antIconPrefix}-export:before { content: "\\e691"; }`,
  `.${antIconPrefix}-edit:before { content: "\\e692"; }`,
  `.${antIconPrefix}-appstore-o:before { content: "\\e695"; }`,
  `.${antIconPrefix}-appstore:before { content: "\\e696"; }`,
  `.${antIconPrefix}-scan:before { content: "\\e697"; }`,
  `.${antIconPrefix}-file-text:before { content: "\\e698"; }`,
  `.${antIconPrefix}-folder-open:before { content: "\\e699"; }`,
  `.${antIconPrefix}-hdd:before { content: "\\e69a"; }`,
  `.${antIconPrefix}-ie:before { content: "\\e69b"; }`,
  `.${antIconPrefix}-file-jpg:before { content: "\\e69c"; }`,
  `.${antIconPrefix}-like:before { content: "\\e64c"; }`,
  `.${antIconPrefix}-like-o:before { content: "\\e69d"; }`,
  `.${antIconPrefix}-dislike:before { content: "\\e64b"; }`,
  `.${antIconPrefix}-dislike-o:before { content: "\\e69e"; }`,
  `.${antIconPrefix}-delete:before { content: "\\e69f"; }`,
  `.${antIconPrefix}-enter:before { content: "\\e6a0"; }`,
  `.${antIconPrefix}-pushpin-o:before { content: "\\e6a1"; }`,
  `.${antIconPrefix}-pushpin:before { content: "\\e6a2"; }`,
  `.${antIconPrefix}-heart:before { content: "\\e6a3"; }`,
  `.${antIconPrefix}-heart-o:before { content: "\\e6a4"; }`,
  `.${antIconPrefix}-pay-circle:before { content: "\\e6a5"; }`,
  `.${antIconPrefix}-pay-circle-o:before { content: "\\e6a6"; }`,
  `.${antIconPrefix}-smile:before { content: "\\e6a7"; }`,
  `.${antIconPrefix}-smile-circle:before { content: "\\e6a7"; }  // antd@1.x compatibility alias: smile`,
  `.${antIconPrefix}-smile-o:before { content: "\\e6a8"; }`,
  `.${antIconPrefix}-frown-o:before { content: "\\e6a9"; }`,
  `.${antIconPrefix}-calculator:before { content: "\\e6aa"; }`,
  `.${antIconPrefix}-message:before { content: "\\e6ab"; }`,
  `.${antIconPrefix}-chrome:before { content: "\\e6ac"; }`,
  `.${antIconPrefix}-github:before { content: "\\e6ad"; }`,
  `.${antIconPrefix}-file-unknown:before { content: "\\e6af"; }`,
  `.${antIconPrefix}-file-excel:before { content: "\\e6b0"; }`,
  `.${antIconPrefix}-file-ppt:before { content: "\\e6b1"; }`,
  `.${antIconPrefix}-file-word:before { content: "\\e6b2"; }`,
  `.${antIconPrefix}-file-pdf:before { content: "\\e6b3"; }`,
  `.${antIconPrefix}-desktop:before { content: "\\e6b4"; }`,
  `.${antIconPrefix}-upload:before { content: "\\e6b6"; }`,
  `.${antIconPrefix}-download:before { content: "\\e6b7"; }`,
  `.${antIconPrefix}-pie-chart:before { content: "\\e6b8"; }`,
  `.${antIconPrefix}-unlock:before { content: "\\e6ba"; }`,
  `.${antIconPrefix}-calendar:before { content: "\\e6bb"; }`,
  `.${antIconPrefix}-windows-o:before { content: "\\e6bc"; }`,
  `.${antIconPrefix}-dot-chart:before { content: "\\e6bd"; }`,
  `.${antIconPrefix}-bar-chart:before { content: "\\e6be"; }`,
  `.${antIconPrefix}-code:before { content: "\\e6bf"; }`,
  `.${antIconPrefix}-api:before { content: "\\e951"; }`,
  `.${antIconPrefix}-plus-square:before { content: "\\e6c0"; }`,
  `.${antIconPrefix}-minus-square:before { content: "\\e6c1"; }`,
  `.${antIconPrefix}-close-square:before { content: "\\e6c2"; }`,
  `.${antIconPrefix}-close-square-o:before { content: "\\e6c3"; }`,
  `.${antIconPrefix}-check-square:before { content: "\\e6c4"; }`,
  `.${antIconPrefix}-check-square-o:before { content: "\\e6c5"; }`,
  `.${antIconPrefix}-fast-backward:before { content: "\\e6c6"; }`,
  `.${antIconPrefix}-fast-forward:before { content: "\\e6c7"; }`,
  `.${antIconPrefix}-up-square:before { content: "\\e6c8"; }`,
  `.${antIconPrefix}-down-square:before { content: "\\e6c9"; }`,
  `.${antIconPrefix}-left-square:before { content: "\\e6ca"; }`,
  `.${antIconPrefix}-right-square:before { content: "\\e6cb"; }`,
  `.${antIconPrefix}-right-square-o:before { content: "\\e6cc"; }`,
  `.${antIconPrefix}-left-square-o:before { content: "\\e6cd"; }`,
  `.${antIconPrefix}-down-square-o:before { content: "\\e6ce"; }`,
  `.${antIconPrefix}-up-square-o:before { content: "\\e6cf"; }`,
  `.${antIconPrefix}-loading:before { content: "\\e64d"; }`,
  `.${antIconPrefix}-loading-3-quarters:before { content: "\\e6ae"; }`,
  `.${antIconPrefix}-bulb:before { content: "\\e649"; }`,
  `.${antIconPrefix}-select:before { content: "\\e64a"; }`,
  `.${antIconPrefix}-addfile:before,`,
  `.${antIconPrefix}-file-add:before { content: "\\e910"; }`,
  `.${antIconPrefix}-addfolder:before,`,
  `.${antIconPrefix}-folder-add:before { content: "\\e914"; }`,
  `.${antIconPrefix}-switcher:before { content: "\\e913"; }`,
  `.${antIconPrefix}-rocket:before { content: "\\e90f"; }`,
  `.${antIconPrefix}-dingding:before { content: "\\e923"; }`,
  `.${antIconPrefix}-dingding-o:before { content: "\\e925"; }`,
  `.${antIconPrefix}-bell:before { content: "\\e64e"; }`,
  `.${antIconPrefix}-disconnect:before { content: "\\e64f"; }`,
  `.${antIconPrefix}-database:before { content: "\\e650"; }`,
  `.${antIconPrefix}-compass:before { content: "\\e6db"; }`,
  `.${antIconPrefix}-barcode:before { content: "\\e652"; }`,
  `.${antIconPrefix}-hourglass:before { content: "\\e653"; }`,
  `.${antIconPrefix}-key:before { content: "\\e654"; }`,
  `.${antIconPrefix}-flag:before { content: "\\e655"; }`,
  `.${antIconPrefix}-layout:before { content: "\\e656"; }`,
  `.${antIconPrefix}-login:before { content: "\\e657"; }`,
  `.${antIconPrefix}-printer:before { content: "\\e673"; }`,
  `.${antIconPrefix}-sound:before { content: "\\e6e9"; }`,
  `.${antIconPrefix}-usb:before { content: "\\e6d7"; }`,
  `.${antIconPrefix}-skin:before { content: "\\e6d8"; }`,
  `.${antIconPrefix}-tool:before { content: "\\e6d9"; }`,
  `.${antIconPrefix}-sync:before { content: "\\e6da"; }`,
  `.${antIconPrefix}-wifi:before { content: "\\e6d6"; }`,
  `.${antIconPrefix}-car:before { content: "\\e6dc"; }`,
  `.${antIconPrefix}-copyright:before { content: "\\e6de"; }`,
  `.${antIconPrefix}-schedule:before { content: "\\e6df"; }`,
  `.${antIconPrefix}-user-add:before { content: "\\e6ed"; }`,
  `.${antIconPrefix}-user-delete:before { content: "\\e6e0"; }`,
  `.${antIconPrefix}-usergroup-add:before { content: "\\e6dd"; }`,
  `.${antIconPrefix}-usergroup-delete:before { content: "\\e6e1"; }`,
  `.${antIconPrefix}-man:before { content: "\\e6e2"; }`,
  `.${antIconPrefix}-woman:before { content: "\\e6ec"; }`,
  `.${antIconPrefix}-shop:before { content: "\\e6e3"; }`,
  `.${antIconPrefix}-gift:before { content: "\\e6e4"; }`,
  `.${antIconPrefix}-idcard:before { content: "\\e6e5"; }`,
  `.${antIconPrefix}-medicine-box:before { content: "\\e6e6"; }`,
  `.${antIconPrefix}-red-envelope:before { content: "\\e6e7"; }`,
  `.${antIconPrefix}-coffee:before { content: "\\e6e8"; }`,
  `.${antIconPrefix}-trademark:before { content: "\\e651"; }`,
  `.${antIconPrefix}-safety:before { content: "\\e6ea"; }`,
  `.${antIconPrefix}-wallet:before { content: "\\e6eb"; }`,
  `.${antIconPrefix}-bank:before { content: "\\e6ee"; }`,
  `.${antIconPrefix}-trophy:before { content: "\\e6ef"; }`,
  `.${antIconPrefix}-contacts:before { content: "\\e6f0"; }`,
  `.${antIconPrefix}-global:before { content: "\\e6f1"; }`,
  `.${antIconPrefix}-shake:before { content: "\\e94f"; }`,
  `.${antIconPrefix}-fork:before { content: "\\e6f2"; }`,
  `.${antIconPrefix}-dashboard:before { content: "\\e99a"; }`,
  `.${antIconPrefix}-profile:before { content: "\\e999"; }`,
  `.${antIconPrefix}-table:before { content: "\\e998"; }`,
  `.${antIconPrefix}-warning:before { content: "\\e997"; }`,
  `.${antIconPrefix}-form:before { content: "\\e996"; }`,
  `.${antIconPrefix}-spin:before {
    display: inline-block;
    animation: loadingCircle 1s infinite linear;
  }`,

  `.${antIconPrefix}-weibo-square:before { content: "\\e6f5"; }`,
  `.${antIconPrefix}-weibo-circle:before { content: "\\e6f4"; }`,
  `.${antIconPrefix}-taobao-circle:before { content: "\\e6f3"; }`,
  `.${antIconPrefix}-html5:before { content: "\\e9c7"; }`,
  `.${antIconPrefix}-weibo:before { content: "\\e9c6"; }`,
  `.${antIconPrefix}-twitter:before { content: "\\e9c5"; }`,
  `.${antIconPrefix}-wechat:before { content: "\\e9c4"; }`,
  `.${antIconPrefix}-youtube:before { content: "\\e9c3"; }`,
  `.${antIconPrefix}-alipay-circle:before { content: "\\e9c2"; }`,
  `.${antIconPrefix}-taobao:before { content: "\\e9c1"; }`,
  `.${antIconPrefix}-skype:before { content: "\\e9c0"; }`,
  `.${antIconPrefix}-qq:before { content: "\\e9bf"; }`,
  `.${antIconPrefix}-medium-workmark:before { content: "\\e9be"; }`,
  `.${antIconPrefix}-gitlab:before { content: "\\e9bd"; }`,
  `.${antIconPrefix}-medium:before { content: "\\e9bc"; }`,
  `.${antIconPrefix}-linkedin:before { content: "\\e9bb"; }`,
  `.${antIconPrefix}-google-plus:before { content: "\\e9ba"; }`,
  `.${antIconPrefix}-dropbox:before { content: "\\e9b9"; }`,
  `.${antIconPrefix}-facebook:before { content: "\\e9b8"; }`,
  `.${antIconPrefix}-codepen:before { content: "\\e9b7"; }`,
  `.${antIconPrefix}-amazon:before { content: "\\e9b6"; }`,
  `.${antIconPrefix}-google:before { content: "\\e9b5"; }`,
  `.${antIconPrefix}-codepen-circle:before { content: "\\e9b4"; }`,
  `.${antIconPrefix}-alipay:before { content: "\\e9b3"; }`,
  `.${antIconPrefix}-ant-design:before { content: "\\e9b2"; }`,
  `.${antIconPrefix}-aliyun:before { content: "\\e9f4"; }`,
  `.${antIconPrefix}-zhihu:before { content: "\\e703"; }`,
  `.${antIconPrefix}-file-markdown:before { content: "\\e704"; }`,
  `.${antIconPrefix}-slack:before { content: "\\e705"; }`,
  `.${antIconPrefix}-slack-square:before { content: "\\e706"; }`,
  `.${antIconPrefix}-behance:before { content: "\\e707"; }`,
  `.${antIconPrefix}-behance-square:before { content: "\\e708"; }`,
  `.${antIconPrefix}-dribbble:before { content: "\\e709"; }`,
  `.${antIconPrefix}-dribbble-square:before { content: "\\e70a"; }`,
  `.${antIconPrefix}-instagram:before { content: "\\e70b"; }`,
  `.${antIconPrefix}-yuque:before { content: "\\e70c"; }`,
];

export default AntIconNames;
