var posts=["posts/e97b05bf/","posts/b69fdc9a/","posts/929c4470/","posts/cd2961f9/","posts/1a49cda9/","posts/2b2375e6/","posts/c45359f9/","posts/447b7d46/","posts/98d355fa/","posts/5909fb66/","posts/8ce04600/","posts/7c83cdf5/","posts/8d089640/","posts/350215c8/","posts/335575a2/","posts/69695e5f/","posts/200b9824/","posts/d0eb61f9/","posts/519d21a7/","posts/acfbec66/","posts/e3433884/","posts/916e1c19/","posts/d8a4486f/","posts/ef648e38/","posts/e8c8ba03/","posts/f1e2eb87/","posts/7ee4dd5d/","posts/78925916/","posts/a4d77d0c/","posts/f247ac05/","posts/bbdc5ca1/","posts/9b96106c/","posts/31bccfd0/","posts/edc08b46/","posts/91246aed/","posts/a65fec86/","posts/d7a64e72/","posts/678af8a5/","posts/43b5f41/","posts/970eea45/","posts/a3db79a2/","posts/6f687f2f/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};var friend_link_list=[{"name":"Hexo","link":"https://hexo.io/zh-tw/","avatar":"https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg","descr":"快速、简单且强大的网站框架"},{"name":"anzhiyu主题","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/sudoxin-images@1.0.4/photos/63232b7d91d22.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/sudoxin-images@1.0.4/photos/anzhiy.cn.jpg"},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/sudoxin-images@1.0.4/photos/63232b7d91d22.jpg","descr":"生活明朗，万物可爱"},{"name":"远方博客","link":"https://blog.ltyuanfang.cn/","avatar":"https://tucdn.ltyuanfang.cn/images/2020/11/26/eebc2ac86abd7.jpg","descr":"做最好的自己！"}];
    var refreshNum = 1;
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };