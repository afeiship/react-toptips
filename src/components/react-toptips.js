import './style.scss';
import classNames from 'classnames';
import appendToDocument from 'react-append-to-document';

class TopTips extends React.Component{
  static propTypes = {
    cssClass:React.PropTypes.string,
    theme:React.PropTypes.string,
    size:React.PropTypes.string
  };

  static defaultProps = {
    visible:false,
    theme:'default',
    size:'12px'
  };

  static newInstance(inProps){
    return appendToDocument(TopTips,inProps,{
      className:'toptips-wrapper'
    });
  }

  constructor(props){
    super(props);
    this.state = {
      theme:this.props.theme,
      visible:props.visible,
      content:'',
      size:props.size
    };
  }

  show(inOptions){
    this.setState({
      theme:inOptions.theme,
      content:inOptions.content,
      visible:true
    });
  }

  hide(){
    this.setState({
      visible:false
    });
  }

  _onClick(){
    this.hide();
  }

  render(){
    return (
      <div data-visible={this.state.visible}
        data-theme={this.state.theme}
        onClick={this._onClick.bind(this)}
        style={{
          fontSize:this.state.size
        }}
        className={classNames('react-toptips',this.props.cssClass)}
        dangerouslySetInnerHTML={{__html: this.state.content}}>
      </div>
    );
  }
}

export default TopTips;
