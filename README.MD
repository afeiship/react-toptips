#react-toptips
> Toptips for react.


## resource:
+ http://www.cnblogs.com/Kummy/p/4966937.html
+ https://github.com/steven5538/vue-button
+ https://yarnpkg.com/en/docs/install


## properties:
```javascript
{
    className:PropTypes.string,
    theme:PropTypes.string,
    size:PropTypes.string,
    onClick:PropTypes.func
}
```

## usage:
```jsx
class App extends React.Component{
  componentDidMount(){
    ReactToptipsCtrl.createInstance({
      size:'14px'
    });
  }

  _show(status){
    ReactToptipsCtrl.show({
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
```
