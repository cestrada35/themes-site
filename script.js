
            const fg = document.getElementById("foreground");
            const title = document.getElementById("title");
            const standard = document.getElementById('standard');
            const terminal = document.getElementById('terminal');
            const sunset = document.getElementById('sunset');
            const cyber = document.getElementById('cyber');
            const vid = document.getElementById("theVideo");
            
            const para = document.getElementById("inspiration");

            //Arrays containing multiple elements to change all at once
            const divFonts = document.getElementsByTagName("div");
            const lines = document.getElementsByTagName("hr");
            const cardBGs = document.getElementsByClassName("cards");
            

            function changeColor(color){
                switch (color){
                    case 'terminal':
                        document.body.style.backgroundColor = "black";
                        fg.style.backgroundColor = "#313d66";
                        title.style.backgroundColor = "black";
                        title.style.borderColor = "white";
                        Array.from(cardBGs).forEach(v => v.style.backgroundColor = "black");
                        Array.from(divFonts).forEach(v => v.style.color = "lime");
                        Array.from(divFonts).forEach(v => v.style.borderColor = "white");
                        Array.from(lines).forEach(v => v.style.color = "lime");
                        break;
                    case 'sunset':
                        document.body.style.backgroundColor = "purple";
                        fg.style.backgroundColor = "#DE3163";
                        title.style.backgroundColor = "yellow";
                        title.style.borderColor = "#6d00ff";
                        Array.from(cardBGs).forEach(v => v.style.backgroundColor = "yellow");
                        Array.from(divFonts).forEach(v => v.style.color = "black");
                        Array.from(divFonts).forEach(v => v.style.borderColor = "#6d00ff");
                        Array.from(lines).forEach(v => v.style.color = "blue");
                        break;
                    case 'cyber':
                        document.body.style.backgroundColor = "yellow";
                        fg.style.backgroundColor = "black";
                        title.style.backgroundColor = "#037582";
                        title.style.borderColor = "#00e5ff";
                        Array.from(cardBGs).forEach(v => v.style.backgroundColor = "#037582");
                        Array.from(divFonts).forEach(v => v.style.color = "#00e5ff");
                        Array.from(divFonts).forEach(v => v.style.borderColor = "#00e5ff");
                        Array.from(lines).forEach(v => v.style.color = "#00e5ff");
                        break;
                    default:
                        document.body.style.backgroundColor = "white";
                        fg.style.backgroundColor = "#0044ff";
                        title.style.backgroundColor = "white";
                        title.style.borderColor = "black";
                        Array.from(cardBGs).forEach(v => v.style.backgroundColor = "white");
                        Array.from(divFonts).forEach(v => v.style.color = "black");
                        Array.from(divFonts).forEach(v => v.style.borderColor = "black");
                        Array.from(lines).forEach(v => v.style.color = "black");
                        break;
                        break;
                }
            }

            function changeInspiration(theme){
                switch (theme){
                    case "terminal":
                        para.textContent = 
                        "This theme was inspired by how fun it was to pick up arch linux."+ 
                        " An unexpected pebble of joy that comes from learning to use an operating system that-you-have-to-install-each-and-every-component-for "+
                        " is how much you utilize the terminal and how it makes you feel like a hacker straight out of a 90's movie!";
                        break;
                    case "sunset":
                        para.textContent = 
                        "This theme is simply inspired by a category of music that really helps me focus (especially when coding) called lo-fi."+ 
                        " Yes, you can rest assured that I defiitely listened to lo-fi while making this little project."+
                        " I can especially get into the zone when there is an actual sunset outside of my window.";
                        break;
                    case "cyber":
                        para.textContent = 
                        "This theme was heavily inspired by my favorite most-recent game: Cyberpunk 2077."+ 
                        " I seriously enjoyed how immersive this games' world is."+
                        " A future project/challenge of mine will definitely be creating a website that is identical to this games' user-interface."+
                        " Coming soon!...";
                        break;
                    default: 
                        para.textContent = 
                        "This simple theme was inspired in part by the color schemes of the windows 98 browser."+ 
                        " This theme would have made itself right at home at the time, unfortunately I wasn't practicing web developement yet.";
                        break;
                }
            }

            function changeVideo(video){
                switch (video){
                    case "terminal":
                        vid.src ="https://www.youtube.com/embed/PQgyW10xD8s";
                        break;
                    case "sunset":
                        vid.src ="https://www.youtube.com/embed/3ubUGdr_hq0";
                        break;
                    case "cyber":
                        vid.src ="https://www.youtube.com/embed/GhX9ltmVyfw";
                        break;
                    default: 
                        vid.src ="https://www.youtube.com/embed/1mGsb8ykrFg";
                        break;
                }
            }
            
            standard.addEventListener('click', function(){
                changeColor('standard');
            });
            terminal.addEventListener('click', function(){
                changeColor('terminal');
            });
            sunset.addEventListener('click', function(){
                changeColor('sunset');
            });
            cyber.addEventListener('click', function(){
                changeColor('cyber');
            });


            standard.addEventListener('click', function(){
                changeInspiration('standard');
            });
            terminal.addEventListener('click', function(){
                changeInspiration('terminal');
            });
            sunset.addEventListener('click', function(){
                changeInspiration('sunset');
            });
            cyber.addEventListener('click', function(){
                changeInspiration('cyber');
            });
            

            standard.addEventListener('click', function(){
                changeVideo('standard');
            });
            terminal.addEventListener('click', function(){
                changeVideo('terminal');
            });
            sunset.addEventListener('click', function(){
                changeVideo('sunset');
            });
            cyber.addEventListener('click', function(){
                changeVideo('cyber');
            });