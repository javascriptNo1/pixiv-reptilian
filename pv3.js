const request = require('request');
const https = require('https');
const fs=require('fs');
const urlobj=require('url');
const path=require('path');
const DownLoad = require('downLoadFile');


loop(10,5)
function loop(aousum,worksSum) {
    const index=`https://www.pixiv.net/rpc/index.php?mode=get_recommend_users_and_works_by_user_ids&user_ids=22190423%2C6214%2C1050881%2C787998%2C11&user_num=${aousum}&work_num=${worksSum}&tt=07836215ff146df49cb4d2855ccb45c3`;
    const cookie='p_ab_id=4; p_ab_id_2=9; _ga=GA1.2.1073715814.1526278533; device_token=ed3a6e24caabc1f3b6561d0fdf05a6f2; c_type=20; a_type=0; b_type=1; module_orders_mypage=%5B%7B%22name%22%3A%22sketch_live%22%2C%22visible%22%3Atrue%7D%2C%7B%22name%22%3A%22tag_follow%22%2C%22visible%22%3Atrue%7D%2C%7B%22name%22%3A%22recommended_illusts%22%2C%22visible%22%3Atrue%7D%2C%7B%22name%22%3A%22showcase%22%2C%22visible%22%3Atrue%7D%2C%7B%22name%22%3A%22everyone_new_illusts%22%2C%22visible%22%3Atrue%7D%2C%7B%22name%22%3A%22following_new_illusts%22%2C%22visible%22%3Atrue%7D%2C%7B%22name%22%3A%22mypixiv_new_illusts%22%2C%22visible%22%3Atrue%7D%2C%7B%22name%22%3A%22fanbox%22%2C%22visible%22%3Atrue%7D%2C%7B%22name%22%3A%22featured_tags%22%2C%22visible%22%3Atrue%7D%2C%7B%22name%22%3A%22contests%22%2C%22visible%22%3Atrue%7D%2C%7B%22name%22%3A%22user_events%22%2C%22visible%22%3Atrue%7D%2C%7B%22name%22%3A%22sensei_courses%22%2C%22visible%22%3Atrue%7D%2C%7B%22name%22%3A%22spotlight%22%2C%22visible%22%3Atrue%7D%2C%7B%22name%22%3A%22booth_follow_items%22%2C%22visible%22%3Atrue%7D%5D; yuid=NzMYACQ19; login_ever=yes; __utmv=235335808.|2=login%20ever=yes=1^3=plan=normal=1^5=gender=male=1^6=user_id=26877498=1^9=p_ab_id=4=1^10=p_ab_id_2=9=1^11=lang=zh=1; __gads=ID=31658a10dcdc37fd:T=1526278688:S=ALNI_MYVQLYmSlmewCgj3X4KBxRvq4SKJw; limited_ads=%7B%22header%22%3A%22%22%7D; is_sensei_service_user=1; __utmc=235335808; privacy_policy_agreement=1; login_bc=1; _gid=GA1.2.1145720461.1526864722; PHPSESSID=26877498_294ef6ba0f7955030b27bee68f909e66; __utma=235335808.1073715814.1526278533.1526864530.1526874402.14; __utmz=235335808.1526874402.14.5.utmcsr=pximg.net|utmccn=(referral)|utmcmd=referral|utmcct=/; __utmt=1; tag_view_ranking=RTJMXD26Ak~Lt-oEicbBr~Ce-EdaHA-3~zIv0cf5VVk~jH0uD88V6F~jhuUT0OJva~_pwIgrV8TB~iFcW6hPGPU~BU9SQkS-zU~81BOcT1ZAV~EUwzYuPRbU~pzzjRSV6ZO~EGefOqA6KB~wb0taLpkzz~YRDwjaiLZn~y8GNntYHsi~1F9SMtTyiX~q3eUobDMJW~AaBbSF1H2D~zMxnJ6p5R7~tAu08Nnfj1~CLR9k9dHAQ~ZZltVrbyeV~8ozhDN5Sad~azESOjmQSV~V7xeGPo3-2~KvAGITxIxH~aQaUXmU2Cz~eQO7Nnq-Qm~jLrhFf00US~3rv-dnMi1O~2-Jit0sxgf~BGSGAQ1ZUb~PJlcDKH8I2~nPPenOvgXu~Y6fKlRsRt6~BY352vWaHE~KE3MutU-b9~bJN2jVPQc8~5OXRF8yfCA~Nb37AEHFPN~V9WUAkfln2~ejvrAKPyXn~68PmkVvVgf~5MnVWD1XOk~nRnn8VBmkN~Qvz63d1tt-~uTLuPiXhcX~x_2ji7VK9Y~mv-jOivdpn~4NI6thmiwW~OeRxnDYt_s~qtVr8SCFs5~NpsIVvS-GF~KN7uxuR89w~-IFvvQUqnw~tIqkVZurKP~jyw53VSia0~8TeibF5Wky~5JFCUydJSd~RybylJRnhJ~mHukPa9Swj~phJ0iXTMWq~7HZDAjto5A~nqXiFPp5zI~fTCHoJT-TJ~qvqXJkzT2e~bXMh6mBhl8~8jwtFm-uaC~7lCcHqqmgj~CvzNxNMpiE~CoE5hbdJby~7-_0Ru_DVk~nRp2ZLPLbj~w8ffkPoJ_S~EZqSuzYsWd~meSg0jXRDp~KIG1n8Y6AD~ZBa0VOoLo_~D6SEJn3yCM~-oGijJmC5S~1tqMRQtF5z~ZmXn-gvCzD~QviSTvyfUE~uCl78ezw0i~r1vRjXa1Om~CrFcrMFJzz~c8y2glRxy1~HLTvFcV98c~18TSf2zYVV~4CEfWpm7-W~TmJvjpdCJd~SX9Wrwyb4r~O8n4dPo2XK~gQ9f732ax3~5RvyKm3yea~m3EJRa33xU~tTvZK72fmv~_jm8oBqAts~XEuS3TPyCa; __utmb=235335808.70.9.1526876385042'

    const options={
        url: index,
        headers: {
            'cookie':cookie,
        }
    };

    request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {

            let imgurl=[]
            let a=JSON.parse(body).body;

            for (let i=0;i<a.length;i++){
                for(let j=0;j<a[i].illusts.length;j++){
                    imgurl.push(a[i].illusts[j].url['480mw'])
                }
            }
            function b(sum) {
                if(sum>=imgurl.length){
                    return
                }
                console.log('开始下载'+imgurl[sum])
                downloadNOEimg(imgurl[sum]).then((filename)=>{
                    console.log(filename)
                    b(sum+1)
                })
            }
            b(0)

        }
        else {
            console.log('出错',error)
        }
    })
}

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

// 下载完成读取图片信息，是损坏的就删除
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

// 下载单张图片
function downloadNOEimg(url){
    return new Promise((resolve,reject)=>{
        //分析得到文件名
        var u1=urlobj.parse(url).pathname; //通过URL获取到文件路径 bm
        var filename=path.basename(u1); //通过文件路径获取到文件名
        //利用.get抓取图片
        https.get(url,function(res){
            let mas='下载完成\n';
            let s1=fs.createWriteStream('img/'+filename); //创建一个可以写入的流
            res.pipe(s1); //通过流的方式直接将图片的字节流写入到硬盘中
            s1.on('finish',function () {
                fs.stat('./img/'+filename,function(err,stats){
                    if(err){
                        console.log(err)
                    }
                    if(stats.size<1000){
                        fs.unlink('./img/'+filename,function(err){
                            if(err){
                                throw err;
                            }else{
                                mas='图片受损，已删除\n';
                                resolve(mas)
                            }
                        });
                    }
                    else {
                        resolve(mas)
                    }

                });
            })

        });
    })

}

//另外处理受损图片
function HandleImg(url) {

}
// gethtml(68503452).then(()=>{
//     downloadNOEimg('https://i.pximg.net/c/600x600/img-master/img/2018/05/01/20/05/03/68503452_p0_master1200.jpg').then((d)=>{
//         console.log(d)
//     })
// });

function gethtml(id) {
    return new Promise((resolve,reject)=>{
        const index=`http://www.pixiv.net/member_illust.php?mode=medium&illust_id=${id}`;
        const cookie='p_ab_id=4; p_ab_id_2=9; _ga=GA1.2.1073715814.1526278533; device_token=ed3a6e24caabc1f3b6561d0fdf05a6f2; c_type=20; a_type=0; b_type=1; module_orders_mypage=%5B%7B%22name%22%3A%22sketch_live%22%2C%22visible%22%3Atrue%7D%2C%7B%22name%22%3A%22tag_follow%22%2C%22visible%22%3Atrue%7D%2C%7B%22name%22%3A%22recommended_illusts%22%2C%22visible%22%3Atrue%7D%2C%7B%22name%22%3A%22showcase%22%2C%22visible%22%3Atrue%7D%2C%7B%22name%22%3A%22everyone_new_illusts%22%2C%22visible%22%3Atrue%7D%2C%7B%22name%22%3A%22following_new_illusts%22%2C%22visible%22%3Atrue%7D%2C%7B%22name%22%3A%22mypixiv_new_illusts%22%2C%22visible%22%3Atrue%7D%2C%7B%22name%22%3A%22fanbox%22%2C%22visible%22%3Atrue%7D%2C%7B%22name%22%3A%22featured_tags%22%2C%22visible%22%3Atrue%7D%2C%7B%22name%22%3A%22contests%22%2C%22visible%22%3Atrue%7D%2C%7B%22name%22%3A%22user_events%22%2C%22visible%22%3Atrue%7D%2C%7B%22name%22%3A%22sensei_courses%22%2C%22visible%22%3Atrue%7D%2C%7B%22name%22%3A%22spotlight%22%2C%22visible%22%3Atrue%7D%2C%7B%22name%22%3A%22booth_follow_items%22%2C%22visible%22%3Atrue%7D%5D; yuid=NzMYACQ19; login_ever=yes; __utmv=235335808.|2=login%20ever=yes=1^3=plan=normal=1^5=gender=male=1^6=user_id=26877498=1^9=p_ab_id=4=1^10=p_ab_id_2=9=1^11=lang=zh=1; __gads=ID=31658a10dcdc37fd:T=1526278688:S=ALNI_MYVQLYmSlmewCgj3X4KBxRvq4SKJw; limited_ads=%7B%22header%22%3A%22%22%7D; is_sensei_service_user=1; __utmc=235335808; privacy_policy_agreement=1; login_bc=1; _gid=GA1.2.1145720461.1526864722; PHPSESSID=26877498_294ef6ba0f7955030b27bee68f909e66; __utma=235335808.1073715814.1526278533.1526864530.1526874402.14; __utmz=235335808.1526874402.14.5.utmcsr=pximg.net|utmccn=(referral)|utmcmd=referral|utmcct=/; __utmt=1; tag_view_ranking=RTJMXD26Ak~Lt-oEicbBr~Ce-EdaHA-3~zIv0cf5VVk~jH0uD88V6F~jhuUT0OJva~_pwIgrV8TB~iFcW6hPGPU~BU9SQkS-zU~81BOcT1ZAV~EUwzYuPRbU~pzzjRSV6ZO~EGefOqA6KB~wb0taLpkzz~YRDwjaiLZn~y8GNntYHsi~1F9SMtTyiX~q3eUobDMJW~AaBbSF1H2D~zMxnJ6p5R7~tAu08Nnfj1~CLR9k9dHAQ~ZZltVrbyeV~8ozhDN5Sad~azESOjmQSV~V7xeGPo3-2~KvAGITxIxH~aQaUXmU2Cz~eQO7Nnq-Qm~jLrhFf00US~3rv-dnMi1O~2-Jit0sxgf~BGSGAQ1ZUb~PJlcDKH8I2~nPPenOvgXu~Y6fKlRsRt6~BY352vWaHE~KE3MutU-b9~bJN2jVPQc8~5OXRF8yfCA~Nb37AEHFPN~V9WUAkfln2~ejvrAKPyXn~68PmkVvVgf~5MnVWD1XOk~nRnn8VBmkN~Qvz63d1tt-~uTLuPiXhcX~x_2ji7VK9Y~mv-jOivdpn~4NI6thmiwW~OeRxnDYt_s~qtVr8SCFs5~NpsIVvS-GF~KN7uxuR89w~-IFvvQUqnw~tIqkVZurKP~jyw53VSia0~8TeibF5Wky~5JFCUydJSd~RybylJRnhJ~mHukPa9Swj~phJ0iXTMWq~7HZDAjto5A~nqXiFPp5zI~fTCHoJT-TJ~qvqXJkzT2e~bXMh6mBhl8~8jwtFm-uaC~7lCcHqqmgj~CvzNxNMpiE~CoE5hbdJby~7-_0Ru_DVk~nRp2ZLPLbj~w8ffkPoJ_S~EZqSuzYsWd~meSg0jXRDp~KIG1n8Y6AD~ZBa0VOoLo_~D6SEJn3yCM~-oGijJmC5S~1tqMRQtF5z~ZmXn-gvCzD~QviSTvyfUE~uCl78ezw0i~r1vRjXa1Om~CrFcrMFJzz~c8y2glRxy1~HLTvFcV98c~18TSf2zYVV~4CEfWpm7-W~TmJvjpdCJd~SX9Wrwyb4r~O8n4dPo2XK~gQ9f732ax3~5RvyKm3yea~m3EJRa33xU~tTvZK72fmv~_jm8oBqAts~XEuS3TPyCa; __utmb=235335808.70.9.1526876385042'

        const options={
            url: index,
            headers: {
                'cookie':cookie,
            }
        };

        request(options, function (error, response, body) {
            if (!error && response.statusCode === 200) {
                // let a=JSON.parse(body).body;
                resolve()
            }
            else {
                console.log('出错',error)
            }
        })
    })
}