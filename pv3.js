const request = require('request');
const https = require('https');
const fs=require('fs');
const urlobj=require('url');
const path=require('path');
const DownLoad = require('downLoadFile');


loop(10,5)
function loop(aousum,worksSum) {
    const seach='https://www.pixiv.net/search.php?word=%E6%9D%B1%E6%96%B9project%201000users%E5%85%A5%E3%82%8A&order=date_d&p=2';
    const index=`https://www.pixiv.net/rpc/index.php?mode=get_recommend_users_and_works_by_user_ids&user_ids=22190423%2C6214%2C1050881%2C787998%2C11&user_num=${aousum}&work_num=${worksSum}&tt=07836215ff146df49cb4d2855ccb45c3`;
    const cookie='first_visit_datetime_pc=2018-06-26+18%3A58%3A46; p_ab_id=3; p_ab_id_2=2; _ga=GA1.2.1976150256.1530007024; privacy_policy_agreement=1; a_type=0; b_type=1; login_ever=yes; __utmv=235335808.|2=login%20ever=yes=1^3=plan=normal=1^5=gender=male=1^6=user_id=26877498=1^9=p_ab_id=3=1^10=p_ab_id_2=2=1^11=lang=zh=1; ki_s=189784%3A0.0.0.0.0; ki_t=1533279523293%3B1535000331825%3B1535000440323%3B3%3B6; ki_r=; p_ab_d_id=1435201524; yuid_b=lwIzGEA; PHPSESSID=26877498_38b3bd0786c35f479b606433183be263; device_token=1ed1a33e2408d24a24d31c6fd99ca4ea; module_orders_mypage=%5B%7B%22name%22%3A%22sketch_live%22%2C%22visible%22%3Atrue%7D%2C%7B%22name%22%3A%22tag_follow%22%2C%22visible%22%3Atrue%7D%2C%7B%22name%22%3A%22recommended_illusts%22%2C%22visible%22%3Atrue%7D%2C%7B%22name%22%3A%22everyone_new_illusts%22%2C%22visible%22%3Atrue%7D%2C%7B%22name%22%3A%22following_new_illusts%22%2C%22visible%22%3Atrue%7D%2C%7B%22name%22%3A%22mypixiv_new_illusts%22%2C%22visible%22%3Atrue%7D%2C%7B%22name%22%3A%22fanbox%22%2C%22visible%22%3Atrue%7D%2C%7B%22name%22%3A%22featured_tags%22%2C%22visible%22%3Atrue%7D%2C%7B%22name%22%3A%22contests%22%2C%22visible%22%3Atrue%7D%2C%7B%22name%22%3A%22user_events%22%2C%22visible%22%3Atrue%7D%2C%7B%22name%22%3A%22sensei_courses%22%2C%22visible%22%3Atrue%7D%2C%7B%22name%22%3A%22spotlight%22%2C%22visible%22%3Atrue%7D%2C%7B%22name%22%3A%22booth_follow_items%22%2C%22visible%22%3Atrue%7D%5D; limited_ads=%7B%22responsive%22%3A%22%22%7D; categorized_tags=6sZKldb07K~8NfvpmigcD~CADCYLsad0~DN6RDM1CuJ~IfpAckJr8v~OT-C6ubi9i~dX9jAZ-RmD; tag_view_ranking=kimgK7cJmi~517vPDsYZe~HJlYy6YUYF~ofEIowAoQl~VxDshDaNt0~wmxKAirQ_H~0kugzBh7fN~66styxRFKS~fAWkkRackx~lRxin4V3-v~-B0wgi3Odg~BxzympfYVP~zHTw5LN6pu~a2uW9FEWmw~S-UxNeWJhs~VQA20ZDKeQ~RJlbIJA0Wz~EGefOqA6KB~iFcW6hPGPU~E10s4iC-Ph~jycw0mDeFx~LcbvV3w_si~64toum72lP~ojUG7gl5F-~blN5RWq7CX~F5MZpMB1da~at5kYG0Mvu~zZ_AmEMnkk~AKT2U2P4W6~4TDL3X7bV9~9N4HkC8Q5z~KkZjlHjyuW~7mKonyZRdI~8hUFUoFjtM~iBLDaqWuM2~Cp5keYns6b~opuscjyi1Z~cSrf2fb8aq~HttLPzc3WA~HE3XkN91P9~_2VbUVYbNA~TvTA3zzCau~qUOlu8mrGM~zBibRqUA3t~lF94pbna2Q~588u-_zw9L~ZZmg1pbe1i~af6aCXObh4~bYbt0XhzC9~aVCh4y7G-j~wYgFTHA2CM~OSGrY_amwf~HKacS-D5BU~CVthVtCCp7~yHQkpQ4lOT~IiGPMh50Z2~znh45f9x-t~Fw90AOPpI7~tIt8gyQoxP~0jgdd7MBGR~1Xn1rApx2-~XLgHEMNrFk~co8ElCE3iv~eUbbGVR9IC~_S9Zkevoox~SiuISpdchb~-GdbJLIBPc~nQRrj5c6w_~0ALwvP1uZn~kokMsqJMrY~mz3z_gou3U~ptuRsUrwnw~ISchYZeYM7~UeHcK0u_wo~ip9cfPm_16~eUlqbXebLk~q3eUobDMJW~RTJMXD26Ak~3flTOcdC02~iMS9Uq37xC~LSMG1IED0S~obNLFtMHZi~_ZamSPz5cZ; c_type=21; is_sensei_service_user=1; __utmc=235335808; __utmz=235335808.1547545138.9.6.utmcsr=baidu|utmccn=(organic)|utmcmd=organic; tags_sended=1; __utma=235335808.1976150256.1530007024.1547545138.1547550964.10; __utmt=1; __utmb=235335808.1.10.1547550964'
    const options={
        url: index,
        headers: {
            'cookie':cookie,
        }
    }
    request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            let imgurl=[]
            let a=JSON.parse(body).body;
            for (let i=0;i<a.length;i++){
                for(let j=0;j<a[i].illusts.length;j++){
                    imgurl.push(a[i].illusts[j].url['480mw'])
                    // dwImg.addItem(a[i].illusts[j].url['480mw'],`img/${i}.jpg`);
                    download(a[i].illusts[j].url['480mw'])
                }
            }
        }
        else {
            console.log('出错',error)
        }
    })
}


//加入队列下载
const dwImg = new DownLoad({
    limited:50, //同时下载数量
    /*
        @description 单个下载完成
        @param {String} url 下载地址
        @param {Boolean} isFullDown 校验数据是否接受完整
    */
    onfinish: (url,isFullDown)=>{
        console.log(`${url}-下载完成`);
    },
    /*
        @description 错误处理
        @param {Object} err
    */
    onerror: (err)=>{
        console.log(err);
    },
    /*
        @description 全部下载完成
    */
    onend: ()=>{
        console.log('it is end');
        console.log(`下载了:${dwImg.downNum}，失败:${dwImg.failNum}`);
    },
    progressEnabled: true, //是否开启进度打印
    /*
        @description 每个文件下载进度
        @param {String} uri 下载url
        @param {Number} total 文件总大小
        @param {Number} length 当前接收文件大小
    */
    onProgress: (uri,total,length)=>{
        console.log(uri,length*100/total+'%');
    }
});

//定义一个下载图片的函数
function download(url){
    //分析得到文件名

    var u1=urlobj.parse(url).pathname; //通过URL获取到文件路径 bm
    var filename=path.basename(u1); //通过文件路径获取到文件名
    //利用.get抓取图片
    https.get(url,function(res){
        var s1=fs.createWriteStream('img/'+filename); //创建一个可以写入的流
        res.pipe(s1); //通过流的方式直接将图片的字节流写入到硬盘中
    });
}

function delDamageImg(){
    fs.readdir('./img',function(err,list){
        for(let i=0;i<list.length;i++){
            fs.stat('./img/'+list[i],function(err,stats){
                if(stats==undefined){
                    request
                }
                if(stats.size<1000){
                    fs.unlink('./img/'+list[i],function(err){
                        if(err){
                            throw err;
                        }else{
                            console.log('删除受损图片！');
                        }
                    });
                }

            });
        }

    });
}
delDamageImg()



