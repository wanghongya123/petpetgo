
import $ from "jquery"
const position=()=>(
  dispatch=>{
      let showPosition=(position)=>{
        console.log('5555');
        $.ajax({
          url:`http://api.map.baidu.com/geocoder/v2/?output=json&ak=h60kMdXBxcFeuem79GOZQtctxg1O3QTA&location=${position.coords.latitude},${position.coords.longitude}`,
          type: 'GET',
          dataType: 'JSONP',//here
          success: data=>{
            dispatch({type:'POSITION',content:{...data.result.addressComponent}})
          }
        });
      }
      let showError=error=>{
          dispatch({type:'POSITION',content:{errorPosition:'定位失败'}})
        }
      if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition,showError);
      }else{alert('浏览器不支持定位')}
  }
)

export { position };
