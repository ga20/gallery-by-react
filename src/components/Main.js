require('normalize.css/normalize.css');
require('styles/App.css');

var imageDatas=require('../data/imageDatas.json');
import React from 'react';
//获取图片相关数据
//利用自执行函数，图片名信息转换为url
imageDatas=(function genImageURL(imageDatasArr){
	for( var i =0,j=imageDatasArr.length;i<j;i++)
	{
		var singleImageData=imageDatasArr[i];
		singleImageData.imageRUL=require('../images/'+singleImageData.fileName);
		imageDatasArr[i]=singleImageData;		
	}
	return imageDatasArr;
})(imageDatas);

class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
     	 <section className="img-sec">
     	 </section>

     	 <nav className="controller-nav">
     	 </nav>
      </section>

    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
