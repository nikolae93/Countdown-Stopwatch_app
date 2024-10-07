//console.log("Router connected");

document.addEventListener("click",(e)=>{
   const {target} = e;
   if(!target.matches("header div a")){
    return;
   }
    e.preventDefault();
    // console.log("Kliki kliki");
    urlRoute();
});

const urlRoutes = {
    "404":{
        template:"/templates/404.html",
        title:"",
        description:""
    },
    "/":{
        template:"/templates/index.html",
        title:"",
        description:""
    },
    "/test":{
        template:"/templates/test.html",
        title:"",
        description:""
    },
    "/test2":{
        template:"/templates/test2.html",
        title:"",
        description:""
    },
    "/one_counter.html":{
        template:"/templates/one_counter.html",
        title:"",
        description:""
    },
    "/two_counters.html":{
        template:"/templates/two_counters.html",
        title:"",
        description:""
    },
    "/four_counters.html":{
        template:"/templates/four_counters.html",
        title:"",
        description:""
    },
    "/stopwatch.html":{
        template:"/templates/stopwatch.html",
        title:"",
        description:""
    }

}

function urlRoute(event){
      event = event || window.event;
      event.preventDefault();
      // 
      window.history.pushState({},"",event.target.href);
      urlLocationHandler();
}

const  urlLocationHandler= async()=>{
    const location = window.location.pathname;
    if(location.length===0){
        location='/';
    }

    const route = urlRoutes[location] || urlRoutes["404"];
    const html = await fetch(route.template).then((res)=>res.text());

    document.getElementById("content").innerHTML=html;
}

window.onpopstate= urlLocationHandler;
window.route=urlRoute;

urlLocationHandler();