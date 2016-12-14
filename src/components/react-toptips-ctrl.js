import TopTips from 'components/react-toptips';

let instance;
let timer;
export default class TopTipsCtrl {
  static createInstance(inProps) {
    instance = instance || TopTips.newInstance(inProps);
    return instance;
  }
  static show(inOptions){
    instance.component.show(inOptions);
    clearTimeout(timer);
    timer=setTimeout(function(){
      instance.component.hide();
    },inOptions.interval || 2000);
  }
}
