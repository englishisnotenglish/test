import React from 'react';

class TodayArticle extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            lis: []  //推文
        };
    }

    //添加推文
    addContent(){
        if(this.state.lis.length >= 4){
            H.Modal('只能是4条，不能再添加了');
            return;
        }
        let lis = this.state.lis;
        let newArticle = {
            'area_id': 0,
            'article_id': 0,
            'article_type': 0,
            'article_title': '',
            'article_image': 'Public/Uploads/oa-article/default-article.png'
        };
        lis.push(newArticle);
        this.setState({
            lis: lis
        });
    }

    //改变标题
    changeTitle(index, e){
        let lis=this.state.lis;
        lis[index].article_title = e.target.value;
        this.setState({
            lis: lis
        });
    }

    //createTweetsList(){

   //}

    //推文置顶
    toTop(index){
        let lis = this.state.lis;
        let select = lis[index];
        lis.splice(index, 1);
        lis.unshift(select);
        this.setState({
            lis: lis
        });
    }

    //删除推文
    delTweets(article_id, index){
        let lis = this.state.lis;
        if(article_id == lis[index].article_id){
            lis.splice(index, 1);
            this.setState({
                lis: lis
            });
        }
    }

    render(){
        return (
            <div className="tweets-edit">
                <div className="tweets-edit-title">
                    推文编辑区
                </div>

                <div className="tweets-edit-wrap">
                    <div className="tweets-edit-ul-wrap">
                        <ul className="tweets-edit-ul">
                            {
                                this.state.lis.map((li, index) => {
                                    if(index == 0){
                                        return(
                                        //lis.push(
                                            <li key={index} >
                                                <div className="first-tweets-img-wrap">
                                                    <img src={'http://img.idongpin.com/' + li.article_image} className="first-tweets-img" width="100%" height="162"/>
                                                    <input type="file" className="up-img"/>
                                                </div>

                                                <div className="first-input-wrap">
                                                    <input type="text" className="first-input" value={li.article_title}  onChange={this.changeTitle.bind(this, index)}/>
                                                </div>

                                                <div className="article-type">

                                                </div>

                                                <i className="placed-top glyphicon glyphicon-circle-arrow-up"  onClick={this.toTop.bind(this, index)}></i>
                                                <i className="tweets-del glyphicon glyphicon-minus" onClick={this.delTweets.bind(this, li.article_id, index)} ></i>
                                            </li>
                                            //)
                                        );
                                    }else{
                                        return (
                                            //lis.push(
                                            <li key={index}>
                                                <div className="tweets-input-trap">
                                                    <textarea className="tweets-input" rows="2" value={li.article_title}  onChange={this.changeTitle.bind(this, index)}></textarea>
                                                </div>

                                                <div className="tweets-img-wrap">
                                                    <img className="tweets-img" src={'http://img.idongpin.com/' + li.article_image} width="55px" height="55px" />
                                                    <input className="up-img" type="file" />
                                                </div>

                                                <div className="article-type">

                                                </div>

                                                <i className="placed-top glyphicon glyphicon-circle-arrow-up" onClick={this.toTop.bind(this, index)} ></i>
                                                <i className="tweets-del glyphicon glyphicon-minus" onClick={this.delTweets.bind(this, li.article_id, index)}></i>
                                            </li>
                                            //)
                                        );
                                    }
                                })
                            }
                        </ul>
                    </div>
                    <btn className="tweets-add-btn" onClick={this.addContent.bind(this)}>添加</btn>
                    <div className="tweets-save-btn">保存</div>
                </div>
            </div>
        );
    }
}
export default TodayArticle;