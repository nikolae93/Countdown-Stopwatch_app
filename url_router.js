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
        title:"404 page not found - Countdown app",
        description:"Page was not found"
    },
    "/":{
        template:"/templates/index.html",
        title:"Home - Countdown app",
        description:"Home page"
    },
    "/test":{
        template:"/templates/test.html",
        title:"test",
        description:"test"
    },
    "/test2":{
        template:"/templates/test2.html",
        title:"test",
        description:"test"
    },
    "/one_counter.html":{
        template:"/templates/one_counter.html",
        title:"One counter - Countdown app",
        description:"Page with one countdown"
    },
    "/two_counters.html":{
        template:"/templates/two_counters.html",
        title:"Two counters - Countdown app",
        description:"Page with two countdowns"
    },
    "/four_counters.html":{
        template:"/templates/four_counters.html",
        title:"Four counters - Countdown app",
        description:"Page with three countdowns"
    },
    "/stopwatch.html":{
        template:"/templates/stopwatch.html",
        title:"Stopwatch page - Countdown app",
        description:"Stopwatch page"
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

    clearAllIntervals();
    document.getElementById("content").innerHTML=html;
    document.title=route.title;
    document.querySelector('meta[name="description"]').setAttribute("content",route.description);
}

window.onpopstate= urlLocationHandler;
window.route=urlRoute;

urlLocationHandler();