var alert1 = false
var mouseY = 0
var mode = "home"
var mouseX = 0
var pi = 3.1415926535897932384626433
var movies
var randInt = 0
var triSize = 1
var speedBoost = false
var nukefound = false
var zoom = 1
var rotate = 0
var rotatez = 0
var timeCool = 0
var cons = true
var botCount = 0
var button1x = screenWidth / 2 - 200
var button1y = screenHeight / 2 + 50
var button1h = 100
var button1w = 400
var button2x = screenWidth / 2 - 600
var button2y = screenHeight / 2 + 50
var button2h = 100
var button2w = 200
var blueP = 0
var player
var nukeMODEz = false
var score = 0
var easymode = {mode:"easy",coinX:1,botReload:1,botMAX:1,greenFoold:1,color1:0,color2:1}
var hardmode = {mode:"hard",coinX:2,botReload:2,botMAX:1.5,greenFoold:2,color1:1,color2:0}
var difficulty = easymode

var level
var highscore = 0
var kills = 0
var mostkills = 0
var coinsmade = 0
var played = false
var slideShop = 0
var lock = loadImage("lock.png")
var totalBots = 0
//
var firingMode = "reloaded"
//
var gun1 = {delay:8,dmg:10,cooldown:0,typez:"gun",labelg:"standard"}
var gun3 = {delay:90,dmg:200,cooldown:0,typez:"gun",labelg:"cannon"}
var gun2 = {delay:2,dmg:4, cooldown:0,typez:"gun",labelg:"machine gun"}
var gun4 = {delay:15,dmg:30,cooldown:0,typez:"gun",labelg:"sniper"}
var gun5 = {delay:1,dmg:10,cooldown:100,shottime:50,typez:"gun",labelg:"lazer"}
var gun6 = {delay:600, dmg:0, cooldown:0,typez:"gun",labelg:"nuke"}
var yourgun = 0
var skin1 = {typez:"skin",labelg:"earth, health bonus",boostHP:1.25,boostSpeed:1,boostDMG:1}
//earth 1.25x HP BOOST
var skin2 = {typez:"skin",labelg:"water, speed bonus",boostSpeed:1.25,boostHP:1,boostDMG:1}
//WATER 1.25x SPEED BOOST
var skin3 = {typez:"skin",labelg:"fire, damage bonus",boostDMG:1.25,boostHP:1,boostSpeed:1}
//FIRE 1.25x DMG BOOST
var skin4 = {typez:"skin",labelg:"metal, improved health bonus",boostHP:1.5,boostSpeed:1,boostDMG:1}
//Metal 1.5x HP BOOST
var skin5 = {typez:"skin",labelg:"air, improved speed bonus",boostSpeed:1.6,boostHP:1,boostDMG:1}
//Air 1.5x HP BOOST
var skin6 = {typez:"skin",labelg:"magic, improved damage bonus",boostDMG:1.5,boostHP:1,boostSpeed:1}
//MAGIC
var totalFoold = 0
var playerGun = "standard"
var unusefulDelayVar = 8
var shops = [{x:150,y:30,width:100,height:50,label:"< BACK",font:14}] 
for(var w = 0; w<12; w++){
	var c = w%3
	var r = floor((w%6)/3)
	hspace = (screenWidth - 1200)/4
	vspace = (screenHeight - 800)/3
	insertBack(shops, ({x:(c+1)*hspace + c*400, y:(r+1)*vspace+r*400, width:400, height:400,font:40}))
	
}

if(!localStorage.getItem("alert004")){
	localStorage.alert004 = 1
	
	//alert("UPDATE 0.0.4: ALL SHOP BUGS FIXED! Buy guns, skins, and it will all save as long as you use the same browser! More info about update 0.0.4 can be found here: https://github.com/SammyAwesome/bubblewars/commits/master")
}
if(!localStorage.getItem("botMAX")){
	localStorage.botMAX = 12
}
if(!localStorage.getItem("gunP2")){
	localStorage.gunP2 = 0
}
if(!localStorage.getItem("gunP3")){
	localStorage.gunP3 = 0
}
if(!localStorage.getItem("gunP4")){
	localStorage.gunP4 = 0
}
if(!localStorage.getItem("gunP5")){
	localStorage.gunP5 = 0
}
if(!localStorage.getItem("gunP6")){
	localStorage.gunP6 = 0
}
if(!localStorage.getItem("skinP2")){
	localStorage.skinP2 = 0
}
if(!localStorage.getItem("skinP3")){
	localStorage.skinP3 = 0
}
if(!localStorage.getItem("skinP4")){
	localStorage.skinP4 = 0
}
if(!localStorage.getItem("skinP5")){
	localStorage.skinP5 = 0
}
if(!localStorage.getItem("skinP6")){
	localStorage.skinP6 = 0
}
if(!localStorage.getItem("levelPlayer")){
	localStorage.levelPlayer = 1
}
shops[1].label = "STANDARD"
shops[1].price = 0
shops[1].purchased = true
shops[2].label = "MACHINE GUN"
shops[2].price = 15000
if(localStorage.gunP2 == "0"){
	shops[2].purchased = false
}else{
	shops[2].purchased = true
}
shops[3].label = "CANNON"
shops[3].price = 50000
if(localStorage.gunP3 == "0"){
	shops[3].purchased = false
}else{
	shops[3].purchased = true
}
shops[4].label = "EARTH"

//Well rounded skin!
shops[4].price = 0
shops[4].puchased = true
shops[5].label = "WATER"
shops[5].price = 15000
if(localStorage.skinP2 == "0"){
	shops[5].purchased = false
}else{
	shops[5].purchased = true
}
//It's really hot outside, 90º!
shops[6].label = "FIRE"
shops[6].price = 50000
if(localStorage.skinP3 == "0"){
	shops[6].purchased = false
}else{
	shops[6].purchased = true
}
shops[7].label = "SNIPER"
shops[7].price = 150000
if(localStorage.gunP4 == "0"){
	shops[7].purchased = false
}else{
	shops[7].purchased = true
}
shops[8].label = "LASER"
shops[8].price = 300000
if(localStorage.gunP5 == "0"){
	shops[8].purchased = false
}else{
	shops[8].purchased = true
}
shops[9].label = "NUKE"
shops[9].price = 1000000
if(localStorage.gunP6 == "0"){
	shops[9].purchased = false
}else{
	shops[9].purchased = true
}
shops[10].label = "METAL"
shops[10].price = 150000
if(localStorage.skinP4 == "0"){
	shops[10].purchased = false
}else{
	shops[10].purchased = true
}
shops[11].label = "AIR"
shops[11].price = 300000
if(localStorage.skinP5 == "0"){
	shops[11].purchased = false
}else{
	shops[11].purchased = true
}
shops[12].label = "MAGIC"
shops[12].price = 1000000
if(localStorage.skinP6 == "0"){
	shops[12].purchased = false
}else{
	shops[12].purchased = true
}
//Do or do not, there is no TRI!
shops[1].item = gun1
shops[2].item = gun2
shops[3].item = gun3
shops[4].item = skin1
shops[5].item = skin2
shops[6].item = skin3
shops[7].item = gun4
shops[8].item = gun5
shops[9].item = gun6
shops[10].item = skin4
shops[11].item = skin5
shops[12].item = skin6
if(!localStorage.getItem("coins")){
	localStorage.coins = 0
	
}
if(!localStorage.getItem("gun")){
	localStorage.gun = 1
}
//----------------------------------------

if(!localStorage.getItem("gunP2")){
	localStorage.gunP2 = 0
}
if(!localStorage.getItem("gunP3")){
	localStorage.gunP3 = 0
}
if(!localStorage.getItem("gunP4")){
	localStorage.gunP4 = 0
}
if(!localStorage.getItem("gunP5")){
	localStorage.gunP5 = 0
}
if(!localStorage.getItem("gunP6")){
	localStorage.gunP6 = 0
}
//{x:150,y:200,width:400,height:400}, {x:screenWidth/2 -200,y:200,width:400,height:400},{x:screenWidth - 550,y:200,width:400,height:400},
function onTouchStart(x, y){
	cons = true
	if(mode=="shop"){
		if(x > shops[0].x && x < shops[0].x + shops[0].width && y > shops[0].y && y < shops[0].y + shops[0].height){
			mode = "home"
			
		}
		if(x > screenWidth - 220 && x < screenWidth - 90 && y > screenHeight -160&& y <screenHeight - 40){
			slideShop = 1
		}
		//fillRectangle(screenWidth - 220, screenHeight - 160, 130,120,makeColor(.92,.95,.7),20)
		
		for(var i = slideShop*6 +1; i < (slideShop+1)*6 + 1; i++){
			if(x > shops[i].x && x < shops[i].x + shops[i].width && y > shops[i].y && y < shops[i].y + shops[i].height){
				
				if(shops[i].item != player.gun){
					if(shops[i].item.typez == "gun"){
						if(shops[i].purchased == true){
								player.gun = shops[i].item
						//		localStorage.gun = i
						//		console.log("setting gun "+ i)
						}else if(coinConvertor() >= shops[i].price){
							if(shops[i].item == gun2){
								localStorage.gunP2 = "1"
							}
							if(shops[i].item == gun3){
								localStorage.gunP3 = "1"
								
							}
							if(shops[i].item == gun4){
								localStorage.gunP4 = "1"
								
							}
							if(shops[i].item == gun5){
								localStorage.gunP5 = "1"
							}
							if(shops[i].item == gun6){
								localStorage.gunP6 = "1"
							}
								localStorage.botMAX = botMAXConvertor() + 1
								
								player.gun = shops[i].item
							//	console.log("setting gun "+ i)
								shops[i].purchased = true
								localStorage.coins = coinConvertor() - shops[i].price
							
						}else{
							alert("You cannot afford this item")
						}
					}
				}
				
				if(shops[i].item != player.skin){
					if(shops[i].item.typez == "skin"){
						if(shops[i].purchased == true){
								player.skin = shops[i].item
						//		console.log("setting skin "+ i)
						}else if(coinConvertor() >= shops[i].price){
									if(shops[i].item == skin2){
										localStorage.skinP2 = "1"
									}
									if(shops[i].item == skin3){
										localStorage.skinP3 = "1"
									}
									if(shops[i].item ==skin4){
										localStorage.skinP4 = "1"
									}
									if(shops[i].item == skin5){
										localStorage.skinP5 = "1"
									}
									if(shops[i].item == skin6){
										localStorage.skinP6 = "1"
									}
								player.skin = shops[i].item
								shops[i].purchased = true
								localStorage.coins = coinConvertor() - shops[i].price
						//		console.log("setting skin "+ i)
					
								
									
						}else{
							alert("You cannot afford this item")
						}
					}
				}
			}
		}
	}
	/*if(mode=="ingame"){
		if(player.delay>player.gun.delay-1){
			if(cons == true){
				
				insertBack(movies, {x:player.x, y:player.y, t:Theta(), type:"tack", size:10})
				player.delay = 0
			}
		}
	}
		*/
	if(mode=="home"){
		if(x > button1x && x < button1x + button1w && y > button1y && y < button1y + button1h){
			mode = "ingame"
			player.hp = 100* player.skin.boostHP
		}
		if(x> button2x && x < button2x + button2w && y > button2y && y < button2y + button2h){
			mode = "shop"
		}
		if(x > (screenWidth /2 - 200) && x <screenWidth/2 +200 && y > button1y +150 && y <button1y + 250){
			if(difficulty == easymode){
				difficulty = hardmode
				
			}else if (difficulty == hardmode){
				difficulty = easymode
			}
		}
	}
}
function onTouchEnd(x, y){
	if(mode=="ingame"){
		cons = false
	//	console.log("END")
	}
}
function start(){
	if(played == false){
		movies = [{x:0,y:0,r:0,g:1,hp:100*skin1.boostHP,size:45,type:"player",delay:30,gun:gun1,skin:skin1}]
		
	}else{
		movies = [{x:0,y:0,r:0,g:1,hp:100*player.skin.boostHP,size:45,type:"player",delay:30,gun:player.gun,skin:player.skin}]
		
	}
	player = movies[0]
	speedBoost = false
	nukeMODEz = false
	nukefound = false
	played = true
	for(var i = 0; i < 1000; i++){
		insertBack(movies, {x:randomReal(-10000,10000), y:randomReal(-10000,10000), type:"foold", size:20})
	
	
	}
	
}
function timer(s){
	s.delay++
	if(s.delay >= (s.gun.delay) * (2.5 / difficulty.botReload) ){
		if(s.gun == gun3){
			insertBack(movies, {x:s.x, y:s.y, t:(atan2(player.x - s.x, player.y - s.y) + (3 *pi) /2),type:"botCANNON", size:10})
			s.delay = 0
		}
		if(s.gun == gun2){
			insertBack(movies, {x:s.x, y:s.y, t:(atan2(player.x - s.x, player.y - s.y) + (3 *pi) /2),type:"botMACHINE", size:10})
			s.delay = 0
		}
		if(s.gun == gun1){
			insertBack(movies, {x:s.x, y:s.y, t:(atan2(player.x - s.x, player.y - s.y) + (3 *pi) /2),type:"botTACK", size:10})
			s.delay = 0
		}
	}
	
}
function fireDelay(){
	if(player.delay < player.gun.delay){
		player.delay++
	}
}
function onWheel(x,y,dx,dy){
	if(mode=="shop"){
		
	}
	
}
function onKeyStart(key){
	if (key == 27) {
		if(mode == "ingame"){
			if(kills > mostkills){
				mostkills = kills
			}
			kills = 0
			if(score > highscore){
				highscore = score
			}
			score = 0
			coinsmade = 0
			mode = "home"
			start()
			console.log("U DED")
		}
	}
	if(key == 27){
		mode = "home"
	}
	if(key == 90){
	//	int c = -1
	//	for(var i = 0; i < movies.length; i++){
	//		if(movies[i].type == "bot"){
	//			if(c < 1){
	//				c = i
	//			}else if(movies[c])
	//		}
	//	}
	}
	if(key == 39){
		if(mode == "shop"){
			if(slideShop<1)
			slideShop++
		}
		
	}
	if(key == 37){
		if(mode == "shop"){
			if(slideShop>0)
			slideShop--
		}
	}
	if(key == 32){
		if(player.size > 45){
			speedBoost = true
		}
	}
	if(key == 66){
		//insertBack(movies, {x:randomReal(-1000, 1000), y:randomReal(-1000, 1000), size:45, type:"bot", hp:100, r:0, g:1, angle:randomReal(0, 2 * pi), delay:0})
		
	}
	if(key == 88){
		if(player.gun == gun6){
			nukeMODEz = !nukeMODEz
			
			
		}
	}
	if(key == 65){
		var botcount = 0
		var fooldcount = 0
		var fooldHPcount = 0
		var fooldBadcount = 0
		var tackscount = 0
		for(var i = 0; i < movies.length; i++){
			if(movies[i].type == "bot"){
				botcount++
			}
			if(movies[i].type == "foold"){
				fooldcount++
			}
			if(movies[i].type == "fooldHP"){
				fooldHPcount++
			}
			if(movies[i].type == "fooldBad"){
				fooldBadcount++
			}
			if(movies[i].type == "tack"){
				tackscount++
			}
		}
	//	console.log(botcount, fooldcount, fooldHPcount, fooldBadcount, tackscount)
		
	}
	
	


}
function nukeMODE(){
	if(nukeMODEz == true){
		var mmWidth = screenHeight
		var mmHeight = screenHeight
		fillRectangle(0,0,screenWidth,screenHeight,makeColor(0,0,0))
		fillRectangle((screenWidth - mmWidth)/2, screenHeight - mmHeight, mmWidth, mmHeight, makeColor(.4 ,.7 ,.8))
	//	strokeRectangle(screenWidth - mmWidth, screenHeight - mmHeight, mmWidth, mmHeight, makeColor(1,1,1), 5)
	//	fillText("MiniMap", screenWidth - (mmWidth / 2), screenHeight - mmHeight, makeColor(1, 1, 1), "20pt sans-serif", "center", "bottom")
		fillCircle((player.x / (20000/mmWidth)) +(mmWidth)/2 +(screenWidth - mmWidth)/2, -player.y / (20000/mmWidth) + screenHeight - mmHeight / 2, 10, makeColor(.5, 0, .5))
		for(var i = 0; i < movies.length; i++){
			var m = movies[i] 
			if(m.type == "bot"){
				fillCircle((m.x / (20000/mmWidth)) +(mmWidth)/2 +(screenWidth - mmWidth)/2, -m.y / (20000/mmWidth) + screenHeight - mmHeight / 2, 10, makeColor(m.r, m.g, 0))
				if(m.gun == gun2){
					strokeCircle((m.x / (20000/mmWidth)) +(mmWidth)/2 +(screenWidth - mmWidth)/2, -m.y / (20000/mmWidth) + screenHeight - mmHeight / 2, 8, makeColor(0, 0, 0),1)
					
				}else if(m.gun == gun3){
					strokeCircle((m.x / (20000/mmWidth)) +(mmWidth)/2 +(screenWidth - mmWidth)/2, -m.y / (20000/mmWidth) + screenHeight - mmHeight / 2, 8, makeColor(0, 0, 0),1)
					strokeCircle((m.x / (20000/mmWidth)) +(mmWidth)/2 +(screenWidth - mmWidth)/2, -m.y / (20000/mmWidth) + screenHeight - mmHeight / 2, 6, makeColor(0, 0, 0),1)
					
				}
			}if(m.type == "foold"){
				fillCircle((m.x / (20000/mmWidth)) +(mmWidth)/2 +(screenWidth - mmWidth)/2, -m.y / (20000/mmWidth) + screenHeight - mmHeight / 2, 5, makeColor(1,1,1))

			}if(m.type == "fooldHP"){
				fillCircle((m.x / (20000/mmWidth)) +(mmWidth)/2 +(screenWidth - mmWidth)/2, -m.y / (20000/mmWidth) + screenHeight - mmHeight / 2, 5, makeColor(0, .3,0))

			}if(m.type == "fooldBad"){
				fillCircle((m.x / (20000/mmWidth)) +(mmWidth)/2 +(screenWidth - mmWidth)/2, -m.y / (20000/mmWidth) + screenHeight - mmHeight / 2, 5, makeColor(.7,0,0))

			}if(m.type == "botTACK" || "botCANNON"){
				fillCircle((m.x / (20000/mmWidth)) +(mmWidth)/2 +(screenWidth - mmWidth)/2, -m.y / (20000/mmWidth) + screenHeight - mmHeight / 2, 1, makeColor(1,0,0))

			}if(m.type == "nuke"){
				fillCircle((m.x / (20000/mmWidth)) +(mmWidth)/2 +(screenWidth - mmWidth)/2, -m.y / (20000/mmWidth) + screenHeight - mmHeight / 2, m.size / (20000/mmWidth), makeColor(1,0,0))
			}
		}
	}
}
function nuke(moviez, number){
//	console.log(moviez)
//	console.log(nukefound)
	if(nukefound == true){
		if(moviez.size < 4000){
			moviez.size = moviez.size + 20
		}else{
			moviez.dead = true
			removeAt(movies, number)
		}
	}
}
function onKeyEnd(key){
	if(key == 32){
		speedBoost = false
	}
}
function onMouseMove(x, y){ 
	mouseX = x
	mouseY = y 
}
function Theta(){
	var theta = atan2(mouseY - screenHeight / 2, mouseX - screenWidth / 2)
	return theta
}
function moveMovies(){
	for (var i = 0; i < movies.length; i++){
		var m = movies[i]
		switch(m.type){
		case "botCANNON":
				m.x = m.x + cos(m.t) *50 *.65
				m.y = m.y - sin(m.t) * 50 *.65
				
			
			break;
		case "botMACHINE":
			m.x = m.x + cos(m.t) * 50 * .73	
			m.y = m.y - sin(m.t) * 50 * .73
			
			break;
	
		case "tack":
		//	console.log(player.gun.labelg)
			
			if(player.gun.labelg == "standard"){
				m.x = m.x + cos(m.t) * 50 * .73	
				m.y = m.y - sin(m.t) * 50 * .73
			}else if(player.gun.labelg == "lazer"){
				m.x = m.x + cos(m.t) * 50 * .73	
				m.y = m.y - sin(m.t) * 50 * .73
			}else if(player.gun.labelg == "cannon"){
				
				m.x = m.x + cos(m.t) * 50 * .65	
				m.y = m.y - sin(m.t) * 50 * .65
			}else if(player.gun.labelg == "machine gun"){
				m.x = m.x + cos(m.t) * 50 * .73	
				m.y = m.y - sin(m.t) * 50 * .73
				
			}else if(player.gun.labelg == "sniper"){
				m.x = m.x + cos(m.t) * 100 * .73	
				m.y = m.y - sin(m.t) * 100 * .73
				
			}
			break;
		case "bot":
		
			botAI(m)
			m.angle = (m.angle + randomReal(-pi/8,pi/8)) % (2 * pi)
			if(sin(m.angle) < 0){
				if(m.y < 10000){
					m.y = m.y - sin(m.angle) * 10
				}
			}if(sin(m.angle) > 0){
				if(m.y > -10000){
					m.y = m.y - sin(m.angle) * 10
				}
			}if(cos(m.angle) > 0){
				if(m.x < 10000){
					m.x = m.x + cos(m.angle) * 10
				}
			}if(cos(m.angle) < 0){
				if(m.x > -10000){
					m.x = m.x + cos(m.angle) * 10
				}
			}
			rainbowP(m)
			
			if(m.gun == gun1){
				
			}else if(m.gun == gun2){
				
			}else if(m.gun == gun3){
				
			}
			
			break;
		case "botTACK":
			m.x = m.x + cos(m.t) *50 
			m.y = m.y - sin(m.t) * 50
			
			break;
		case "nuke":
			console.log(m)
			nuke(m,i)
			nukefound = true
			break;
		case "player":
			var angle = Theta()
			rainbowP(player)
			if(player.skin==skin2){
			}else if(player.skin==skin6){
				
				rotations()
			}else{
			}
	
			//if's are for border
			if(speedBoost == true){
				zoom = 3
				if(randomInteger(0,1) == 1){
					player.size = player.size * .995
				}
			} else{
				zoom = 1
			}
			if(sin(angle)  < 0){
				if(player.y < 10000){
					player.y = player.y - sin(angle) *3 / (player.size/300) * zoom * player.skin.boostSpeed
				}
			}if(sin(angle) > 0){
				if(player.y > -10000){
					player.y = player.y - sin(angle) *3 / (player.size/300) * zoom * player.skin.boostSpeed
				}
			}if(cos(angle)> 0){
				if(player.x < 10000){
					player.x = player.x + cos(angle) *3 / (player.size/300) * zoom * player.skin.boostSpeed
				}
			}if(cos(angle)< 0){
				if(player.x > -10000){
					player.x = player.x + cos(angle) *3 / (player.size/300) * zoom * player.skin.boostSpeed
				}
			}
			break;
		}
	}
}
function drawMovies(){
//	fillCircle(screenWidth/2 + 10, screenHeight/2 + 10, 20, makeColor(1,1,1));
	for (var i = 0; i < movies.length; i++){
		var m = movies[i]
		switch(m.type){
		case "botCANNON":
				fillCircle(m.x - player.x + screenWidth / 2, screenHeight / 2 - (m.y - player.y),m.size + 20, makeColor(0,0,0))
				
			
			break;
		case "botMACHINE":
			fillTransformedTriangle(m.x - player.x + screenWidth / 2, screenHeight / 2 - (m.y - player.y), makeColor(.5, .5, .5), m.size - 3, m.t)
			
			break;
		case "foold":
		
			fillCircle(screenWidth / 2 + (m.x - player.x), screenHeight / 2 - (m.y - player.y), 20, makeColor(1, 1, 1))
			break;
		case "fooldHP":
			fillCircle(screenWidth / 2 + (m.x - player.x), screenHeight / 2 - (m.y - player.y), 20, makeColor(0, .7, 0))
			break;
		case "fooldBad":
			fillCircle(screenWidth / 2 + (m.x - player.x), screenHeight / 2 - (m.y - player.y), 20, makeColor(.7, 0, 0))
			break;
		case "tack":
		//	console.log(player.gun.labelg)
			
			if(player.gun.labelg == "standard"){
				fillTransformedTriangle(m.x - player.x + screenWidth / 2, screenHeight / 2 - (m.y - player.y), makeColor(.5, .5, .5), m.size, m.t)
			}else if(player.gun.labelg == "lazer"){
				fillCircle(m.x - player.x + screenWidth / 2, screenHeight / 2 - (m.y - player.y),m.size + 5, makeColor(.8,.2,.2))
			}else if(player.gun.labelg == "cannon"){
				
				fillCircle(m.x - player.x + screenWidth / 2, screenHeight / 2 - (m.y - player.y),m.size + 20, makeColor(0,0,0))
			}else if(player.gun.labelg == "machine gun"){
			
				fillTransformedTriangle(m.x - player.x + screenWidth / 2, screenHeight / 2 - (m.y - player.y), makeColor(.5, .5, .5), m.size - 3, m.t)
				
			}else if(player.gun.labelg == "sniper"){
		
				fillTransformedTriangle(m.x - player.x + screenWidth / 2, screenHeight / 2 - (m.y - player.y), makeColor(.5, .5, .5), m.size +3, m.t)
				
			}
			break;
		case "bot":
		
			
			strokeCircle(screenWidth / 2 + (m.x - player.x), screenHeight / 2 - (m.y - player.y),(m.size), makeColor(m.r - .1, m.g - .1, 0), 10)
			fillCircle(screenWidth / 2 + (m.x - player.x), screenHeight / 2 - (m.y - player.y),(m.size), makeColor(m.r, m.g, 0))
			
			if(m.gun == gun1){
				
			}else if(m.gun == gun2){
				strokeCircle(screenWidth / 2 + (m.x - player.x), screenHeight / 2 - (m.y - player.y),(m.size) - 10, makeColor(0,0,0), 10)
				
			}else if(m.gun == gun3){
				strokeCircle(screenWidth / 2 + (m.x - player.x), screenHeight / 2 - (m.y - player.y),(m.size)- 10, makeColor(0,0,0), 5)
				strokeCircle(screenWidth / 2 + (m.x - player.x), screenHeight / 2 - (m.y - player.y),(m.size)- 20, makeColor(0,0,0), 5)
				
			}
			fillText(m.gun.labelg, screenWidth / 2 + (m.x - player.x), screenHeight / 2 - (m.y - player.y), makeColor(1, 1, 1), "30pt Baloo Bhaina")
			
			break;
		case "botTACK":
			
			fillTransformedTriangle(screenWidth / 2 + (m.x - player.x), screenHeight / 2 - (m.y - player.y), makeColor(.5, .5, .5), m.size,  m.t)
			break;
		case "nuke":
	
			fillCircle(screenWidth / 2 + (m.x-player.x), screenHeight / 2 - (m.y - player.y),m.size,makeColor(.8,.1,.1))
			break;
		case "player":
			
			strokeCircle(screenWidth / 2, screenHeight / 2, player.size, makeColor(player.r -.1, player.g-.1, blueP), 10)
			fillCircle(screenWidth / 2, screenHeight / 2, player.size, makeColor(player.r, player.g, blueP))
			if(player.skin==skin2){
				fillRectangle(screenWidth / 2 - player.size/sqrt(2), screenHeight / 2 - player.size/sqrt(2), sqrt(2)*(player.size),sqrt(2)*(player.size), makeColor(.5,.5,.5))
			}else if(player.skin==skin6){
				fillTransformedTriangle(screenWidth / 2, screenHeight / 2, makeColor(.5,.5,.5), player.size, rotate)
				fillTransformedTriangle(screenWidth / 2, screenHeight / 2, makeColor(.2,.2,.2), player.size, rotatez)
				
			}else{
				fillCircle(screenWidth / 2, screenHeight / 2, player.size - 10, makeColor(.5, .5, .5))
			}
	
			
			fillText("HP " + round(player.hp * player.size / 30) + "/" + round(100 *player.skin.boostHP * player.size / 30),  screenWidth / 2, screenHeight / 2, makeColor(1, 1, 1), "20pt sans-serif", "center")
			fillText("Mass " + round(player.size),  screenWidth / 2, screenHeight / 2 + 20, makeColor(1, 1, 1), "20pt sans-serif", "center")
			break;
		}
	}
	
}
function rotations(){
	rotate = rotate + .1
	rotatez = rotatez + .05
}
function botAI(s){
/*	for(int i = 0; i < movies.length; i++){
		k = movies[i]
		c = undefined
		if(k.type == "bot"){
			if((k.x +))
		}
	}
	*/ 
	
	if(sqrt(pow(s.x - player.x, 2) + pow(s.y - player.y, 2)) < 1000){
		//fire
			timer(s)
	}
}
function detectCollision(){
	for (var i = 0; i < movies.length; i++){
		var m1 = movies[i]
		if (m1.type == "player"){
			for (var j = 1; j < movies.length; j++){
			
				var m2 = movies[j]
				if(sqrt(pow(m1.x - m2.x, 2) + pow(m1.y - m2.y, 2)) < m1.size + m2.size){
					if(i != j){
						
						if(m2.type == "foold" && (! m2.dead)){
							m1.size = sqrt(pow(m1.size,2) + pow(m2.size,2))
							m2.dead = true
							localStorage.coins = coinConvertor() + 10 *difficulty.coinX
							coinsmade = coinsmade + 10*difficulty.coinX
						}
						if(m2.type == "fooldHP" && (! m2.dead)){
							if(player.hp > 100*(player.skin.boostHP) - 50){
								player.hp = 100*(player.skin.boostHP)
								m2.dead = true
								localStorage.coins = coinConvertor() + 20*difficulty.coinX
								coinsmade = coinsmade + 20*difficulty.coinX
							}else{
								player.hp = player.hp + 50
								m2.dead = true
								
							}
						}
						if(m2.type == "nuke" && (!m2.dead)){
							player.hp = player.hp - 101.216
						}
						if(m2.type == "fooldBad" && (! m2.dead)){
							if(player.hp < 10){
								player.hp = 0
								m2.dead = true
								
							}else{
								player.hp = player.hp - 10
								m2.dead = true
						
								
							}
						}
						if(m2.type == "botTACK" && (!m2.dead)){
							player.hp = player.hp - 450 / m1.size
							m2.dead=true
						}
						if(m2.type == "botCANNON" && (!m2.dead)){
							player.hp = player.hp - 9000 / m1.size
							m2.dead=true
						}
						if(m2.type == "botMACHINE" && (!m2.dead)){
							player.hp = player.hp - 450 *.4 / m1.size
							m2.dead=true
						}
					}
				}
			}
		}else if (m1.type == "bot") {
			for (var j = 1; !m1.dead && j < movies.length; j++){
				var m2 = movies[j]
				if(sqrt(pow(m1.x - m2.x, 2) + pow(m1.y - m2.y, 2)) < m1.size + m2.size){
					if(i != j){
						if(m2.type == "tack" && (! m2.dead)){
							
							m1.hp = m1.hp - player.gun.dmg*player.skin.boostDMG/m1.size*50
							m2.dead = true
							if(m1.hp <= 0){
								m1.dead = true
								localStorage.coins = coinConvertor() + 500 * difficulty.coinX
								coinsmade = coinsmade + (500 * difficulty.coinX)
								kills++
								for(var i = 0; i < .4 * (m1.size); i++){
									insertBack(movies, {x:m1.x + randomReal(-m1.size,m1.size), y:m1.y + randomReal(-m1.size,m1.size), type:"foold", size:20})
									
								}
							}
						}
						if(m2.type == "foold" && (! m2.dead)){
							m1.size = sqrt(pow(m1.size,2) + pow(m2.size,2))
							m2.dead = true
						}
						if(m2.type == "nuke" && (!m2.dead)){
							m1.dead = true
							localStorage.coins = coinConvertor() + 500 *difficulty.coinX
							coinsmade = coinsmade + 500*difficulty.coinX
							kills++
							for(var i = 0; i < .4 * (m1.size); i++){
								insertBack(movies, {x:m1.x + randomReal(-m1.size,m1.size), y:m1.y + randomReal(-m1.size,m1.size), type:"foold", size:20})
								
							}
						}
					}
				}
			}
		}
	}
	for (var i = 0; i < movies.length; i++){
		if(movies[i].dead || ((movies[i].type == "tack" || movies[i].type == "botTACK") && (movies[i].x < -10000 || movies[i].x > 10000 || movies[i].y < -10000 || movies[i].y > 10000))){
			removeAt(movies, i)
			i--
		}
	}
/*		switch(m.type){
		case "foold":
		case "fooldHP":
		case "fooldBad":
			if((player.x - (30 * player.size) < m.x && player.x + (30 * player.size) > m.x) && (player.y + (30 * player.size) > m.y && player.y - (30 * player.size) < m.y)){
				if(m.type == "foold"){
					player.size = player.size + .1
					removeAt(movies, i)
					i--
				}else if(m.type == "fooldBad"){
					if(player.hp < 10){
						player.hp = 0
						removeAt(movies, i)
						i--
					}else{
						player.hp = player.hp - 10
						removeAt(movies, i)
						i--
					}
				}else if(m.type == "fooldHP"){
					if(player.hp > 50){
						player.hp = 100
						removeAt(movies, i)
						i--
					}else{
						player.hp = player.hp + 50
						removeAt(movies, i)
						i--
					}
				}
			}
			break;
			
		}
		*/
		
	
	
}
function rainbowP(movie){
	if(movie.hp < 50){
		movie.g = movie.hp / 50
	}else{
		movie.g = 1
	}
	if(movie.hp > 50){
		movie.r = (100 - movie.hp) / 50
	}else{
		movie.r = 1
	}
}
function fillTransformedTriangle(x, y, color, size, angle){
	fillTriangle(x + size * cos(angle), y + size * sin(angle), x + size * cos(angle + 2 * pi / 3), y + size * sin(angle + 2 * pi / 3), x + size * cos(angle + 4 * pi / 3), y + size * sin(angle + 4 * pi / 3), color)
	
}
function drawMiniMap(){
	var mmWidth = 400
	var mmHeight = 400
	fillRectangle(screenWidth - mmWidth, screenHeight - mmHeight, mmWidth, mmHeight, makeColor(.4 ,.7 ,.8))
	strokeRectangle(screenWidth - mmWidth, screenHeight - mmHeight, mmWidth, mmHeight, makeColor(1,1,1), 5)
	fillText("MiniMap", screenWidth - (mmWidth / 2), screenHeight - mmHeight, makeColor(1, 1, 1), "20pt sans-serif", "center", "bottom")
	fillCircle(player.x / 50 + screenWidth - mmWidth / 2, -player.y / 50 + screenHeight - mmHeight / 2, 5, makeColor(.5, 0, .5))
	for(var i = 0; i < movies.length; i++){
		var m = movies[i] 
		if(m.type == "bot"){
			fillCircle(m.x / 50 + screenWidth - mmWidth / 2, -m.y / 50 + screenHeight - mmHeight / 2, 5, makeColor(m.r, m.g, 0))
			if(m.gun == gun2){
				strokeCircle(m.x / 50 + screenWidth - mmWidth / 2, -m.y / 50 + screenHeight - mmHeight / 2, 3, makeColor(0, 0, 0),1)
				
			}else if(m.gun == gun3){
				strokeCircle(m.x / 50 + screenWidth - mmWidth / 2, -m.y / 50 + screenHeight - mmHeight / 2, 3, makeColor(0, 0, 0),1)
				strokeCircle(m.x / 50 + screenWidth - mmWidth / 2,-m.y / 50 + screenHeight - mmHeight / 2, 2, makeColor(0, 0, 0),1)
				
			}
		}if(m.type == "foold"){
			fillCircle(m.x / 50 + screenWidth - mmWidth / 2, -m.y / 50 + screenHeight - mmHeight / 2, 2, makeColor(1,1,1))
			
		}if(m.type == "fooldHP"){
			fillCircle(m.x / 50 + screenWidth - mmWidth / 2, -m.y / 50 + screenHeight - mmHeight / 2, 2, makeColor(0, .3,0))
			
		}if(m.type == "fooldBad"){
			fillCircle(m.x / 50 + screenWidth - mmWidth / 2, -m.y / 50 + screenHeight - mmHeight / 2, 2, makeColor(.7,0,0))
			
		}if(m.type == "botTACK"){
			fillCircle(m.x / 50 + screenWidth - mmWidth / 2, -m.y / 50 + screenHeight - mmHeight / 2, 5, makeColor(1,0,0))
			
		}if(m.type == "nuke"){
			fillCircle(m.x / 50 + screenWidth - mmWidth / 2, -m.y / 50 + screenHeight - mmHeight / 2, m.size / 50, makeColor(1,0,0))
		}
	}
}
function onSetup(){
	start()
}
function coinConvertor(){
	return parseInt(localStorage.coins)
}
//====================================
function botMAXConvertor(){
	return parseInt(localStorage.botMAX)
}


function playerFire(){
	if(firingMode == "shooting" || firingMode == "reloaded"){
		if(player.delay>player.gun.delay-1){
			if(cons == true){
				if(nukeMODEz == false){
						if(player.gun != gun6){
							insertBack(movies, {x:player.x, y:player.y, t:Theta(), type:"tack", size:10})
							player.delay = 0
							if(firingMode == "reloaded"){
								firingMode = "shooting"
							}
						}
				}else{
					if(mouseX > (screenWidth - screenHeight)/2 && mouseX < screenWidth - (screenWidth - screenHeight)/2){
						player.delay = 0
						insertBack(movies,{x:(mouseX - (screenWidth - screenHeight)/2)*(20000/screenHeight) - 10000,y:-(mouseY *(20000/screenHeight)) + 10000,size:1000,type:"nuke"})
						
					}
				}
			}
		}
	}
	
}
function botCounter(){
	totalBots = 0
	for(var k = 0; k < movies.length; k++){
		if(movies[k].type == "bot"){
			totalBots++
		}
		if(movies[k].type == "foold" || movies[k].type == "fooldHP"){
			totalFoold++
		}
		
	}
}
function timerCooldown(){
	if(firingMode == "cooldown"){
		if(player.gun.cooldown > timeCool){
			timeCool++
		}else{
			timeCool = 0
			firingMode = "reloaded"
		}
	}else if(firingMode == "shooting"){
		if(player.gun.shottime  > timeCool){
			timeCool++
		}else{
			timeCool = 0
			firingMode = "cooldown"
		}
	}
}

function onTick(){
	
	console.log(player.hp)
	if(mode == "shop"){
		fillRectangle(0,0, screenWidth, screenHeight, makeColor(.5, .8,  .1))
		strokeRectangle(0,0, screenWidth, screenHeight, makeColor(0,.3,.15), 30,0)
		fillRectangle(screenWidth - 570, 30, 500, 70, makeColor(.92,.95,.7), 50)
		//fillPolygon(screenWidth - 200, screenHeight - 200, screenWidth - 200, screenHeight - 100, screenWidth - 100, screenHeight - 150, makeColor(1,1,1))

		fillText("Coins: " + localStorage.coins, screenWidth - 550, 80, makeColor(0,0,0), shops[2].font - 5+"pt Baloo Bhaina")
		
		for(var i = slideShop*6 +1; i < (slideShop+1)*6 + 1; i++){
			
			if(shops[i].purchased == false){
				fillRectangle(shops[i].x,shops[i].y,shops[i].width,shops[i].height, makeColor(.72,.75,.5),30)
				drawImage(lock, shops[i].x + shops[i].width  / 2 - 50,shops[i].y + 10, 120, 140)
				fillText("Cost: " + shops[i].price, shops[i].x +shops[i].width/2,shops[i].y + shops[i].height/2 + 120, makeColor(0,0,0), shops[i].font +"pt Baloo Bhaina", "center")
			}else{
				fillRectangle(shops[i].x,shops[i].y,shops[i].width,shops[i].height, makeColor(.92,.95,.7),30)
			}
			fillText(shops[i].label, shops[i].x +shops[i].width/2,shops[i].y + shops[i].height/2, makeColor(0,0,0), shops[i].font +"pt Baloo Bhaina", "center")
			if(shops[i].item == player.gun){
				strokeRectangle(shops[i].x,shops[i].y,shops[2].width, shops[2].height, makeColor(0,.3,.15),15,30)
				
			}
			if(shops[i].item == player.skin){
				strokeRectangle(shops[i].x,shops[i].y,shops[5].width, shops[5].height, makeColor(0,.3,.1),15,30)
			}
		}
		fillRectangle(screenWidth - 220, screenHeight - 160, 130,120,makeColor(.92,.95,.7),20)
		fillPolygon([screenWidth - 200, screenHeight - 150, screenWidth - 200, screenHeight - 50, screenWidth - 100, screenHeight - 100], makeColor(0,.3,.1))
		
	}
	if(mode == "home"){
		
		
		fillRectangle(0,0, screenWidth, screenHeight, makeColor(.5,.8,1))
		fillRectangle(button1x, button1y, button1w, button1h, makeColor(0,.7,0), 50)
		fillText("Bubble Wars", screenWidth / 2, screenHeight / 2, makeColor(1, 1, 1), "158pt Baloo Bhaina", "center")
		fillText("PLAY!", button1x + button1w / 2, button1y - 25, makeColor(1, 1, 1), "58pt Baloo Bhaina", "center", "top")
		fillRectangle(button2x, button2y, button2w, button2h, makeColor(1, .7, 0), 30)
		fillText("SHOP", button2x + button2w / 2, button2y - 10, makeColor(1, 1, 1), "49pt Baloo Bhaina", "center", "top")
		fillRectangle(screenWidth / 2 + 350, button1y, 300, 100, makeColor(1, 1, 1), 30)
		fillText("COINS: " + localStorage.coins, screenWidth / 2 + 500, button1y + 50, makeColor(0, 0, 0), "49pt Baloo Bhaina", "center", "middle")
		//fillRectangle(mouseX, mouseY, 130,120,makeColor(.92,0,0),20)
		//fillRectangle(screenWidth / 2 + 350, button1y, 300, 100, makeColor(1, 1, 1), 30)
	//	strokeRectangle(200, button1y +120, 1000, 70, makeColor(0, 0, 0), 20,60)
	//	fillRectangle(200, button1y +120, 1000, 70, makeColor(.5, .8, 0), 60)
		
	//	fillText("Level: " + localStorage.levelPlayer, button1x + button1w / 2, button1y + 100, makeColor(1, 1, 1), "58pt Baloo Bhaina", "center", "top")
		
		fillRectangle(screenWidth / 2 -200, button1y + 150, 400, 100, makeColor(difficulty.color2, difficulty.color2, difficulty.color2), 30)
		
		fillText("Difficulty: " + difficulty.mode, screenWidth /2, button1y  + 200, makeColor(difficulty.color1,difficulty.color1,difficulty.color1), "39pt Baloo Bhaina", "center", "middle")
		fillText("Update 0.0.6", 200, screenHeight - 50, makeColor(1, 1, 1), "49pt Baloo Bhaina", "center", "middle")
	}
	if(player.size < 100){
		speedBoost = false
	}
	if(mode == "ingame"){
		
		if(player.hp <= 0){
			
			if(kills > mostkills){
				mostkills = kills
			}
			kills = 0
			if(score > highscore){
				highscore = score
			}
			score = 0
			coinsmade = 0
			mode = "home"
			start()
			console.log("U DED")
			
		}
		fillRectangle(0, 0, screenWidth, screenHeight, makeColor(.527, .804, .976))
		strokeRectangle(screenWidth / 2 +(-11000 -player.x), screenHeight / 2 - (11000 - player.y), 22000, 22000, makeColor(.5,.5,.5), 2000, 20)
		moveMovies()
		timerCooldown()
		playerFire()
		botCounter()
		drawMovies()
		drawMiniMap()
		detectCollision()
		fireDelay()
		if(nukeMODEz == true){
			nukeMODE()
			
		}
		if(player.gun == gun5){
			
			if(firingMode == "reloaded"){
				fc2 = 1
				fc1 = 0
				fc3 = 0
			}else if(firingMode == "shooting"){
				fc3 = 1
				fc1 = 0
				fc2 = 0
				fillText("                      : "+ (player.gun.shottime -timeCool) * 30 /1000, mouseX, mouseY, makeColor(1, 1, 1), "30pt Baloo Bhaina")
				
			}else if(firingMode = "cooldown"){
				fc1 = 1
				fc2 = 0
				fc3 = 0
				fillText("                      : "+ (player.gun.cooldown -timeCool) * 30 /1000, mouseX, mouseY, makeColor(1, 1, 1), "30pt Baloo Bhaina")
				
			}
			strokeCircle(mouseX+10,mouseY+10,20,makeColor(fc1,fc2,fc3),5)
			fillText(firingMode, mouseX, mouseY, makeColor(1, 1, 1), "30pt Baloo Bhaina")
		}else if(player.delay>player.gun.delay-1){
			strokeCircle(mouseX+10,mouseY+10,20,makeColor(0,1,0),5)
			fillText("reloaded", mouseX, mouseY, makeColor(1, 1, 1), "30pt Baloo Bhaina")
		}else{
			strokeCircle(mouseX+10,mouseY+10,20,makeColor(1,0,0),5)
			fillText("reloading: "+ (player.gun.delay-player.delay) * 30 /1000, mouseX, mouseY, makeColor(1, 1, 1), "30pt Baloo Bhaina")
		}
		
		
		fillText("MOST KILLS " + mostkills, 100, 200, makeColor(1, 1, 1), "30pt Baloo Bhaina")
		fillText("KILLS " + kills, 100, 250, makeColor(1, 1, 1), "30pt Baloo Bhaina")
		
		fillText("COINS EARNED: " + coinsmade, 100, screenHeight - 200, makeColor(1, 1, 1), "30pt Baloo Bhaina")
		fillText("GUN: " + player.gun.labelg, 100, screenHeight - 150, makeColor(1, 1, 1), "30pt Baloo Bhaina")
		fillText("SKIN: " + player.skin.labelg, 100, screenHeight - 100, makeColor(1, 1, 1), "30pt Baloo Bhaina")
		
		if(randomInteger(0,2) == 1){
			if(totalFoold < 100){
				insertBack(movies, {x:randomReal(-10000,10000), y:randomReal(-10000,10000), type:"foold", size:20})
			}
		}
	//	if(randomInteger(0,10) == 7){
	//		insertBack(movies, {x:randomReal(-10000,10000), y:randomReal(-10000,10000), type:"fooldBad", size:20})
	//	}
		if(randomInteger(0,(50*difficulty.greenFoold)) == 12){
			//if(totalFoold < 110){
				insertBack(movies, {x:randomReal(-10000,10000), y:randomReal(-10000,10000), type:"fooldHP", size:20})
				
		//	}
			
		}
		if(randomInteger(0,20) == 17){
			if(totalBots < (botMAXConvertor(localStorage.botMAX)) * difficulty.botMAX){
				randInt = randomInteger(0,5)
				console.log(randInt)
				if(randInt == 0){
					insertBack(movies, {x:randomReal(-10000, 10000), y:randomReal(-10000, 10000), size:45, type:"bot", hp:100, r:0, g:1, angle:randomReal(0, 2 * pi), delay:0,gun:gun3})
				//	console.log("hi there")
				}else if(randInt == 1){
					insertBack(movies, {x:randomReal(-10000, 10000), y:randomReal(-10000, 10000), size:45, type:"bot", hp:100, r:0, g:1, angle:randomReal(0, 2 * pi), delay:0,gun:gun2})
				//	console.log("bye there")
				}else{
					insertBack(movies, {x:randomReal(-10000, 10000), y:randomReal(-10000, 10000), size:45, type:"bot", hp:100, r:0, g:1, angle:randomReal(0, 2 * pi), delay:0,gun:gun1})
					
				}
			}
		}
	}
}
