import React, {PropTypes} from 'react';

export default class Markdown extends  React.Component {
    render(){
        return(
            <div className="nav-tabs-custom">
                <ul className="nav nav-tabs">
                    <li className="active"><a href="#edit" data-toggle="tab"><i className="fa fa-pencil fa-fw"></i>编辑</a></li>
                    <li><a href="#preview" data-toggle="tab" ><i className="fa fa-eye fa-fw"></i>预览</a></li>
                </ul>
                <div className="tab-content">
                    <div className="active tab-pane" id="edit">
                        <div className="form-group">
                            <textarea  className="form-control"  id="text-input" rows="3" placeholder="请在此输入文本 ..." onBlur={this.update.bind(this)}></textarea>
                        </div>
                    </div>
                    <div className="tab-pane md-preview" id="preview">

                        <div id="preview" dangerouslySetInnerHTML={ this.tohtml() }>

                        </div>
                    </div>
                </div>
            </div>
        );
    }

    update(event){
        this.props.preview(markdown.toHTML(event.target.value));
    }

    tohtml(){
        return {__html:this.props.addArticle.preview}
    }
}
