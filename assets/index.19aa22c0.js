(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const S={view:async()=>`
        <ul class="hiddenNavigation">
    <li><a href="/">welcome</a></li>
    <li><a href="/LeSquizzz/#slider">slider</a></li>
    <li><a href="/LeSquizzz/#difficulty">difficulty</a></li>
    <li><a href="/LeSquizzz/#quiz">quiz</a></li>
    <li><a href="../#score">score</a></li>

    
</ul>
`,after:()=>{console.log("Component navigation mounted")}};let L={"Content-Type":"application/json","X-Api-Key":"wqxkFYNFj4PGuv7uudJTFXmEGLfhX5kDwGXjVoe3"};const q={view:async()=>`
    <div class="blackCircle"><img src="/LeSquizzz/img/background.svg"  alt="image de fond"></div>

    <div class="imgAlbumSlider">
        <img class="firstAlbumSlider" src="/LeSquizzz/img/boobaCut.jpg" alt="album de booba">
        <img class="secondAlbumSlider" src="/LeSquizzz/img/medine.jpg" alt="album de medine">
        <img class="thirdAlbumSlider" src="/LeSquizzz/img/sch.jpg" alt="album de sch">
        <img class="fourthAlbumSlider" src="/LeSquizzz/img/liltjayCut.jpg" alt="album de liltjay">
        
        <div class="logoLeSquizzz">
        <h1>Le Squizzz</h1> 
        <a href=""><img src="/LeSquizzz/img/logoLeSquizz.png" alt="Logo le squizz"></a></div>
    </div>
    
    <div class="containerSlider">
        <div class="slider">
            <div class="leftContainerDifficulty">
                <img src="/LeSquizzz/img/Kacem.svg" alt="Album de kacem">
            </div>
            <hr class="hrMiddle">
            <div class="rightContainerDifficulty">
                <div class="rules">
                    <h2>Rules</h2>
                    
                    <div><p>Answer the 9 questions of this quiz,
                    each correct answer will reveal a square of our mysterious star. <br><br>
                    Try to discover which album cover is hidden behind our mystery star
                    to win 5 extra points.
                    </div></p>
                   
                </div>
                    <hr>

                    <div class="difficultyParent">
                        <div class="difficulty"><a href="/LeSquizzz/#quiz"><button value="easy" class="difficult">EASY</button></a></div>
                        <div class="difficulty"><a href="/LeSquizzz/#quiz"><button value="medium" class="difficult">MEDIUM</button></a></div>
                        <div class="difficulty"><a href="/LeSquizzz/#quiz"><button value="hard" class="difficult">HARD</button></a></div>
                    </div>
            </div>
        </div>
    </div>
`,after:()=>{console.log("Component About mounted");let o=localStorage.tags,l=document.getElementsByClassName("difficult");for(const i of l)i.addEventListener("click",async()=>{const a=function(){const u=async()=>(await(await fetch("https://accounts.spotify.com/api/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Basic ODZlMWI4ZTdlNjEwNGFiM2IyYjEyNDEwNzhhNWQ4NTU6NjA2ZjYzMTg4Njk2NDE3NGFjMmI5ZTY2NTM4YTRmOTg="},body:new URLSearchParams({grant_type:"client_credentials"})})).json()).access_token,h=async(g,z)=>await(await fetch(` https://api.spotify.com/v1/playlists/${z}?limit=${10}&locale=fr_FR`,{method:"GET",headers:{Authorization:"Bearer "+g}})).json();return{getToken(){return u()},getPlaylist(g,z){return h(g,z)}}}();function e(u,h){return Math.floor(Math.random()*(h-u+1)+u)}let t=await a.getToken(),r=(await a.getPlaylist(t,"4l1CEhc7ZPbaEtiPdCSGbl")).tracks.items,n=r[e(0,80)];console.log(r),albumImage.src=n.track.album.images[0].url;let d=n.track.artists[0].name,p=n.track.album.name;localStorage.setItem("albumImage",JSON.stringify(albumImage.src)),localStorage.setItem("nameArtist",JSON.stringify(d)),localStorage.setItem("nameAlbum",JSON.stringify(p));const c="https://quizapi.io/api/v1/questions";localStorage.setItem("difficulty",i.value);let m=localStorage.difficulty;const v="?limit=9&category="+o+"&difficulty="+m;let f=await fetch(c+v,{method:"GET",headers:L}).then(function(u){return u.json()}).then(function(u){return u});localStorage.setItem("response",JSON.stringify(f))})}};function b(o){let l=parseInt(o.getItem("number")),i=JSON.parse(o.getItem("response")),a=document.getElementById("question"),e=document.getElementById("containerResponseQuizz");if(a.innerText=i[l].question,l===0){for(const s in i[l].answers){let r=document.createElement("div");r.classList.add("answerLeSquizz");let n=document.createElement("span");n.classList.add("answer"),n.setAttribute("id",s),n.innerText=i[l].answers[s],r.appendChild(n),e.appendChild(r)}let t=document.getElementsByClassName("answer");for(const s of t){for(const r in i[l].answers)t[r].innerText=i[l].answers[r];s.innerText===""?s.style.display="none":s.style.display="flex"}}else{let t=document.getElementsByClassName("answer");for(const s of t){for(const r in i[l].answers)t[r].innerText=i[l].answers[r];s.innerText===""?s.style.display="none":s.style.display="flex"}}}const C={view:async()=>`
<div id="block" class="container">
        <ul class="loader">
            <li class="animatedLogo"></li>
            <li class="animatedLogo"></li>
            <li class="animatedLogo"></li>
            <li class="animatedLogo"></li>
            <li class="animatedLogo"></li>
            <li class="animatedLogo"></li>
        </ul>
</div>
    

    <div class="sidebar">
    <div class="buttonSidebar" id="buttonSidebar"><img src="/LeSquizzz/img/rightArrow.png" alt="fl\xE8che de droite">
        </div>
       
        <div class="parentGrid">
            <div class="personality">
            <img src="" alt="" id="albumImage">
            </div>
            <div class="grid">
                <div class="grid0"></div>
                <div class="grid1"></div>
                <div class="grid2"></div>
                <div class="grid3"></div>
                <div class="grid4"></div>
                <div class="grid5"></div>
                <div class="grid6"></div>
                <div class="grid7"></div>
                <div class="grid8"></div>
            </div>
            
        </div>
        <div id="containerResponseAlbum" class="containerResponseSidebar">
            <div class="responseSidebar">
                <input id="responseAlbum" class="responseAlbum" type="text">
                <input id="buttonAlbum" class="buttonAlbum" type="button" value="valider">
            </div>
        </div>
    </div>

<div class="logoLeSquizzz">
        <h1>Le Squizzz</h1>
        <a href=""><img src="/LeSquizzz/img/logoLeSquizz.png" alt="Logo le squizz"></a></div>
    
    <form class="pictureAlbumQuiz">
    
        <li class="firstAlbumQuiz">
            <img src="/LeSquizzz/img/liveLoveAsap.jpg" alt="Album de Asap">
         
        </li>
        <li class="fourAlbumQuiz">
            <img src="/LeSquizzz/img/gazo.jpg" alt="Album de Gazo">
            <img src="/LeSquizzz/img/kendrickLamar.jpg" alt="Album de Kendrick">
        </li>
    
    </form>
    
    <div class="containerQuiz">
        <div class="questionQuiz">
            <div class="containerQuestion">
                <span id="question" class="questionLeSquizz"</span>
                                                                             
            </div>  
        </div>
    
        <div id="containerResponseQuizz" class="containerAnswer">
                       
        </div>
    </div>
    
`,after:async()=>{console.log("Component Home mounted");let o=document.getElementById("albumImage");o.innerText=localStorage.getItem("albumImage");let l=document.getElementById("block");window.addEventListener("animationiteration",()=>{setTimeout(()=>{l.style.display="none"},1500)});let i=document.getElementsByClassName("buttonSidebar")[0],a=document.getElementsByClassName("sidebar")[0];i.addEventListener("click",()=>{a.classList.toggle("openSidebar"),i.classList.toggle("rotateButton")});let e=0;localStorage.setItem("number",e);let t=0;localStorage.setItem("result",t),b(localStorage);let s=JSON.parse(localStorage.getItem("response"));console.log(e);let r=document.getElementsByClassName("answer");for(const c of r)c.addEventListener("click",async()=>{let m=parseInt(localStorage.getItem("number"));if(m++,localStorage.setItem("number",m),m<9)if(c.id===s[m-1].correct_answer){let v=parseInt(localStorage.getItem("result"));v++,localStorage.setItem("result",v),c.style.backgroundColor="#21CB13",setTimeout(()=>{c.style.backgroundColor="",a.classList.add("openSidebar"),i.classList.toggle("rotateButton"),setTimeout(()=>{b(localStorage)},700)},500);let u=document.querySelector(".grid").children.length,h="grid"+Math.floor(Math.random()*u),g=document.querySelector(`.${h}`);g.style.backgroundColor="transparent"}else c.id!==s[m-1].correct_answer&&(c.style.backgroundColor="#C51818",setTimeout(()=>{c.style.backgroundColor="",setTimeout(()=>{b(localStorage)},700)},1500));else if(m===9){if(c.id===s[m-1].correct_answer){b(localStorage);let f=parseInt(localStorage.getItem("result"));f++,localStorage.setItem("result",f)}let v=document.getElementById("containerResponseAlbum");a.classList.add("openSidebar"),v.style.display="flex",i.style.display="none"}});let n=localStorage.getItem("nameAlbum"),d=document.getElementById("responseAlbum").value;document.getElementById("buttonAlbum").addEventListener("click",()=>{if(d===n){let c=parseInt(localStorage.getItem("result"));localStorage.setItem("result",c),window.location.href="#score"}else console.log("toto"),window.location.href="#score"})}},A={view:async()=>`

    <section id="welcomePage" class="loaderHome">
        <div class="firstCircle">
            <img src="/LeSquizzz/img/firstCircleWhite.svg" alt="firstCircleWhite">
        </div>
        
        <div class="secondCircle">
            <img src="/LeSquizzz/img/secondCircleWhite.svg" alt="secondCircleWhite">
        </div>
        
        <form class="pictureAlbum">
            <li class="firstAlbum">
                <img src="/LeSquizzz/img/liveLoveAsap.jpg" alt="Album de Asap">
            </li>
            <li class="secondAlbum">
                <img src="/LeSquizzz/img/kendrickLamar.jpg" alt="Album de Kendrick">
            </li>
            <li class="thirdAlbum">
                <img src="/LeSquizzz/img/kaaris.jpg" alt="Album de Kaaris">
            </li>
            <li class="fourAlbum">
                <img src="/LeSquizzz/img/gazo.jpg" alt="Album de Gazo">
            </li>
        </form>
        
        
        <div class="titleMain">
            <div class="title">
                <h1>Le Squizzz</h1>
            <a href="#"><img src="/LeSquizzz/img/logoLeSquizz.png" alt="Logo le squizz"></a>
            </div>  
            <div>
                <button id="buttonWelcome" class="buttonSwitchSlide">Welcome</button>
            </div>
        </div>
    </section>
    
    
        <div class="blackCircle"><img src="/LeSquizzz/img/background.svg" alt="image"></div>

        <div class="imgAlbumSlider">
        <img class="firstAlbumSlider" src="/LeSquizzz/img/boobaCut.jpg" alt="album de booba">
        <img class="secondAlbumSlider" src="/LeSquizzz/img/medine.jpg" alt="album de medine">
        <img class="thirdAlbumSlider" src="/LeSquizzz/img/sch.jpg" alt="album de sch">
        <img class="fourthAlbumSlider" src="/LeSquizzz/img/liltjayCut.jpg" alt="album de liltjay">
        
        <div class="logoLeSquizzz">
        <h1>Le Squizzz</h1>
        <a href=""><img src="/LeSquizzz/img/logoLeSquizz.png" alt=""></a></div>
    </div>
        <div class="titleContainer">
            <h1>Choose your category</h1></div>
        <div class="containerSlider1">
            <div class="containerContentSlider">
            <div class="prevArrowSlider"><img src="/LeSquizzz/img/prevArrow.png" alt="fl\xE8che pr\xE9c\xE9dent"></div>
                                <div class="slider1">
                                    <div class="mainContainerDifficulty1 active">
                                    <div class="leftContainerDifficulty1">
                                        <div class="content">
                                            <h2>Quiz <br> linux</h2>
                                        </div>
        
                                    </div>
                                    <hr class="hrMiddle">
                                    <div class="rightContainerDifficulty1">
                                        <div class="rules1">
                                            <h2>Rules</h2>
                                            <span>Answer the 9 questions of this quiz,
                                            each correct answer will reveal a square of our mysterious star. <br><br>
                                            Try to discover which album cover is hidden behind our mystery star
                                            to win 5 extra points.
                                                </span>
                                        </div>
                                        <hr>
                                        <div class="buttonCategory">
                                           <a href="/LeSquizzz/#difficulty"><button value="Linux" class="difficulty1">Choose this category</button></a>
                                        </div>
                                    </div>
                                    </div>
                                    <div class="mainContainerDifficulty1">
                                        <div class="leftContainerDifficulty1">
                                            <div class="content">
                                                <h2>Quiz <br> devops</h2>
                                            </div>
        
                                        </div>
                                        <hr class="hrMiddle">
                                        <div class="rightContainerDifficulty1">
                                            <div class="rules1">
                                                <h2>Rules</h2>
                                                <span>Answer the 9 questions of this quiz,
                                                each correct answer will reveal a square of our mysterious star. <br><br>
                                                Try to discover which album cover is hidden behind our mystery star
                                                to win 5 extra points.
                                                </span>
                                            </div>
                                            <hr>
                                            <div class="buttonCategory">
                                                <a href="/LeSquizzz/#difficulty"><button value="Devops" class="difficulty1">Choose this category</button></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mainContainerDifficulty1">
                                        <div class="leftContainerDifficulty1">
                                            <div class="content">
                                                <h2>Quiz <br> networking</h2>
                                            </div>
        
                                        </div>
                                        <hr class="hrMiddle">
                                        <div class="rightContainerDifficulty1">
                                            <div class="rules1">
                                                <h2>Rules</h2>
                                                <span>Answer the 9 questions of this quiz,
                                                each correct answer will reveal a square of our mysterious star. <br><br>
                                                Try to discover which album cover is hidden behind our mystery star
                                                to win 5 extra points.
                                                </span>
                                            </div>
                                            <hr>
                                            <div class="buttonCategory">
                                                <a href="/LeSquizzz/#difficulty"><button value="Networking" class="difficulty1">Choose this category</button></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mainContainerDifficulty1">
                                        <div class="leftContainerDifficulty1">
                                            <div class="content">
                                                <h2>Quiz <br> programming</h2>
                                            </div>
        
                                        </div>
                                        <hr class="hrMiddle">
                                        <div class="rightContainerDifficulty1">
                                            <div class="rules1">
                                                <h2>Rules</h2>
                                                <span>Answer the 9 questions of this quiz,
                                                each correct answer will reveal a square of our mysterious star. <br><br>
                                                Try to discover which album cover is hidden behind our mystery star
                                                to win 5 extra points.
                                                </span>
                                            </div>
                                            <hr>
                                            <div class="buttonCategory">
                                                <a href="/LeSquizzz/#difficulty"><button value="Programming" class="difficulty1">Choose this category</button></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mainContainerDifficulty1">
                                        <div class="leftContainerDifficulty1">
                                            <div class="content">
                                                <h2>Quiz <br> cloud</h2>
                                            </div>
        
                                        </div>
                                        <hr class="hrMiddle">
                                        <div class="rightContainerDifficulty1">
                                            <div class="rules1">
                                                <h2>Rules</h2>
                                                <span>Answer the 9 questions of this quiz,
                                                each correct answer will reveal a square of our mysterious star. <br><br>
                                                Try to discover which album cover is hidden behind our mystery star
                                                to win 5 extra points.
                                                </span>
                                            </div>
                                            <hr>
                                            <div class="buttonCategory">
                                                <a href="/LeSquizzz/#difficulty"><button value="Cloud" class="difficulty1">Choose this category</button></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mainContainerDifficulty1">
                                        <div class="leftContainerDifficulty1">
                                            <div class="content">
                                                <h2>Quiz <br> docker</h2>
                                            </div>
        
                                        </div>
                                        <hr class="hrMiddle">
                                        <div class="rightContainerDifficulty1">
                                            <div class="rules1">
                                                <h2>Rules</h2>
                                                <span>Answer the 9 questions of this quiz,
                                                each correct answer will reveal a square of our mysterious star. <br><br>
                                                Try to discover which album cover is hidden behind our mystery star
                                                to win 5 extra points.
                                                </span>
                                            </div>
                                            <hr>
                                            <div class="buttonCategory">
                                                <a href="/LeSquizzz/#difficulty"><button value="Docker" class="difficulty1">Choose this category</button></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mainContainerDifficulty1">
                                        <div class="leftContainerDifficulty1">
                                            <div class="content">
                                                <h2>Quiz <br> kubernetes</h2>
                                            </div>
        
                                        </div>
                                        <hr class="hrMiddle">
                                        <div class="rightContainerDifficulty1">
                                            <div class="rules1">
                                                <h2>Rules</h2>
                                                <span>Answer the 9 questions of this quiz,
                                                each correct answer will reveal a square of our mysterious star. <br><br>
                                                Try to discover which album cover is hidden behind our mystery star
                                                to win 5 extra points.
                                                </span>
                                            </div>
                                            <hr>
                                            <div class="buttonCategory">
                                                <a href="/LeSquizzz/#difficulty"><button value="kubernetes" class="difficulty1">Choose this category</button></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                <div class="nextArrowSlider"><img src="/LeSquizzz/img/nextArrow.png" alt="fl\xE8che suivant"></div>
            </div>
        </div>
`,after:()=>{console.log("Component Home mounted");let o=document.getElementById("buttonWelcome"),l=document.getElementById("welcomePage");o.addEventListener("click",()=>{l.classList.add("loading")});let i=document.getElementsByClassName("mainContainerDifficulty1"),a=0,e=i.length,t=document.querySelector(".prevArrowSlider"),s=document.querySelector(".nextArrowSlider");function r(){for(let d=0;d<e;d++)i[d].classList.remove("active")}s.addEventListener("click",function(){a++,a>=e&&(a=0),r(),i[a].classList.add("active")}),console.log(s),t.addEventListener("click",function(){a--,a<0&&(a=e-1),r(),i[a].classList.add("active")});let n=document.getElementsByClassName("difficulty1");for(const d of n)d.addEventListener("click",async p=>{localStorage.setItem("tags",d.value)})}},E={view:async()=>`
<div>
    <div class="blackCircle"><img src="/LeSquizzz/img/background.svg"  alt="image de fond"></div>
    <div class="groupScore">
        <span class="titleScore">
            <h2>Your Score</h2>
        </span>
        <span class="containerScore">
            <p class="numberScore"><span id="countNumberScore">10</span>/15 pts</p>
        </span>
        <span>
            <p id="compliment"></p>
        </span>
    </div>
    <div class="buttonContainer">
        <a  href=""><div id="buttonWelcome" class="buttonWelcome">Back to home</div></a>
    </div>
</div>`,after:()=>{console.log("Component Home mounted");let o=parseInt(localStorage.getItem("result")),l=document.getElementById("countNumberScore");l.innerText=o;let i=document.getElementById("compliment");o<=8||(i.innerText="Good job brother")}},y={difficulty:q,"/":A,quiz:C,score:E},I=document.getElementById("app"),k=document.getElementById("navigation"),w=async()=>{let o=location.hash.split("#")[1]||"/";k.innerHTML=await S.view(),await S.after(),y[o]||(y[o]=Error404),I.innerHTML=await y[o].view(),y[o].after()};window.addEventListener("hashchange",async()=>{await w()});window.addEventListener("load",async()=>{await w()});
