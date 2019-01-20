// shade start --------------------------------------------
window.addEventListener("load",function(){
    var shade = document.getElementsByClassName("shade");
    var nowy = window.pageYOffset;
    var windowh = window.innerHeight;

    for(var i = 0;i < shade.length;i++){
        var pointy = shade[i].getBoundingClientRect().top + nowy;
        if(windowh + nowy > pointy){
            if(!shade[i].classList.contains("show")){
                shade[i].classList.toggle("show");
                shade[i].getElementsByTagName("img")[0].classList.toggle("show");
            }
        }
    }

    window.onscroll = function(){
        var nowy = window.pageYOffset;
        for(var i = 0;i < shade.length;i++){
            var pointy = shade[i].getBoundingClientRect().top + nowy;
            if(nowy > pointy - windowh){
                if(nowy > pointy + shade[i].clientHeight){
                    if(shade[i].classList.contains("show")){
                        shade[i].classList.toggle("show");
                        shade[i].getElementsByTagName("img")[0].classList.toggle("show");
                    }

                }else{
                    if(!shade[i].classList.contains("show")){
                        shade[i].classList.toggle("show");
                        shade[i].getElementsByTagName("img")[0].classList.toggle("show");
                    }
                }
            }else if(nowy + windowh < pointy){
                if(shade[i].classList.contains("show")){
                    shade[i].classList.toggle("show");
                    shade[i].getElementsByTagName("img")[0].classList.toggle("show");
                }
            }

        }

    }
});
// shade end --------------------------------------------
