import './style.scss';

import PropTypes from 'prop-types';
import {PureComponent} from 'react';
import appendToDocument from 'react-append-to-document';
import classNames from 'classnames';
import noop from 'noop';

export default class ReactTopTips extends PureComponent{
  static propTypes = {
    className:PropTypes.string,
    theme:PropTypes.string,
    size:PropTypes.string,
    onClick:PropTypes.func
  };

  static defaultProps = {
    visible:false,
    theme:'default',
    size:'12px'
  };

  static newInstance(inProps){
    return appendToDocument(ReactTopTips,inProps,{
      className:'toptips-wrapper'
    });
  }

  constructor(props){
    super(props);
    this.state = {
      ...props,
      content:''
    };
  }

  show(inOptions){
    this.setState({
      ...inOptions,
      visible:true
    });
  }

  hide(){
    this.setState({
      visible:false
    });
  }

  _onClick = (inEvent) =>{
    this.hide();
  }

  render(){
    const {visible,theme,size,className,content} = this.state;
    return (
      <div data-visible={visible}
        data-theme={theme}
        onClick={this._onClick}
        style={{
          fontSize:size
        }}
        className={classNames('react-toptips',className)}
        dangerouslySetInnerHTML={{__html: content}}>
      </div>
    );
  }
}
