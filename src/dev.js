import './dev.scss';
import {Toptips,ToptipsCtrl} from './main';


class App extends React.Component{
  componentDidMount(){
    ToptipsCtrl.createInstance({
      size:'14px'
    });
  }

  _show(status){
    ToptipsCtrl.show({
      theme:status,
      content:'Cool!,I am a very long text!!!'
    })
  }
  render(){
    return (
      <div className="hello-react-toptips">
        <button onClick={this._show.bind(this,'default')}>Click to show - default</button>
        <button onClick={this._show.bind(this,'success')}>Click to show - success</button>
        <button onClick={this._show.bind(this,'warn')}>Click to show - warn</button>
        <button onClick={this._show.bind(this,'info')}>Click to show - info</button>
        <button onClick={this._show.bind(this,'error')}>Click to show - error</button>
      </div>
    );
  }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
);
