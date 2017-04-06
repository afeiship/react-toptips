import ReactTopTips from 'components/react-toptips';

let instance;
let timer;
export default class {

  static createInstance(inProps) {
    instance = instance || ReactTopTips.newInstance(inProps);
    return instance;
  }

  static show(inOptions){
    instance.component.show(inOptions);
    clearTimeout(timer);
    timer=setTimeout(() => {
      instance.component.hide();
    },inOptions.interval || 2000);
  }

  static hide(inOptions){
    instance.component.hide();
  }

  static destroy(){
    instance.destroy();
    instance = null;
  }

}
