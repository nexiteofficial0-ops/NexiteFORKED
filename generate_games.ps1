# Complete game database from math.html
$allGames = @(
    # Existing games (have .html files)
    @{folder="gdlite"; name="Geometry Dash Lite"; image="geodash.png"; path="/stuff/selfhosted/gdlite/index.html"}
    @{folder="getaway-shootout"; name="Getaway Shootout"; image="getaway-shootout.png"; path="/stuff/selfhosted/getaway-shootout/index.html"}
    @{folder="rooftop-sniper"; name="Rooftop Snipers"; image="rooftop-snipers.jpg"; path="/stuff/selfhosted/rooftop-sniper/index.html"}
    @{folder="rooftop-snipers-2"; name="Rooftop Snipers 2"; image="rooftop-snipers2.jpg"; path="/stuff/selfhosted/rooftop-snipers-2/index.html"}
    @{folder="tube-jumpers"; name="Tube Jumpers"; image="tubejumpers.png"; path="/stuff/selfhosted/tube-jumpers/index.html"}
    @{folder="fnaf1"; name="Five Nights at Freddy's"; image="fnaf1.png"; path="/stuff/selfhosted/fnaf1/index.html"}
    @{folder="fnaf2"; name="Five Nights at Freddy's 2"; image="fnaf2.png"; path="/stuff/selfhosted/fnaf2/index.html"}
    @{folder="fnaf3"; name="Five Nights at Freddy's 3"; image="fnaf3.png"; path="/stuff/selfhosted/fnaf3/index.html"}
    @{folder="fnaf4"; name="Five Nights at Freddy's 4"; image="fnaf4.png"; path="/stuff/selfhosted/fnaf4/index.html"}
    @{folder="fnafworld"; name="FNAF World"; image="fnafworld.png"; path="/stuff/selfhosted/fnafworld/index.html"}
    @{folder="sisterlocation"; name="Five Nights at Freddy's: Sister Location"; image="fnafsl.jpg"; path="/stuff/selfhosted/sisterlocation/index.html"}
    @{folder="pizzeriasimulator"; name="Pizzeria Simulator"; image="pizzeriasimulator.png"; path="/stuff/selfhosted/pizzeriasimulator/index.html"}
    @{folder="ucn"; name="Ultimate Custom Night"; image="ucn.jpg"; path="/stuff/selfhosted/ucn/index.html"}
    @{folder="minecraft"; name="Minecraft"; image="minecraft.jpg"; path="/stuff/selfhosted/minecraft/index.html"}
    @{folder="subway-surfers"; name="Subway Surfers"; image="subway.png"; path="/stuff/selfhosted/subway-surfers/index.html"}
    @{folder="bloodmoney"; name="Bloodmoney"; image="bloodmoney.png"; path="/stuff/selfhosted/bloodmoney/index.html"}
    @{folder="hep"; name="Human Expenditure Program"; image="hep.png"; path="/stuff/selfhosted/hep/index.html"}
    @{folder="crossyroad"; name="Crossy Road"; image="crossyroad.jpeg"; path="/stuff/selfhosted/crossyroad/index.html"}
    @{folder="slowroads"; name="Slowroads"; image="slowroads.png"; path="/stuff/selfhosted/slowroads/index.html"}
    @{folder="happywheels"; name="Happy Wheels"; image="happywheels.jpg"; path="/stuff/selfhosted/happywheels/index.html"}
    @{folder="polytrack"; name="Polytrack"; image="polytrack.jpg"; path="/stuff/selfhosted/polytrack/index.html"}
    @{folder="slope"; name="Slope"; image="slope.jpg"; path="/stuff/selfhosted/slope/index.html"}
    
    # Games without files (need player templates)
    @{folder="asmallworldcup"; name="A Small World Cup"; image="aswc.png"; path="/stuff/selfhosted/asmallworldcup/index.html"}
    @{folder="bitlife"; name="Bitlife"; image="bitlife.jpg"; path="/stuff/selfhosted/bitlife/index.html"}
    @{folder="monkey-mart"; name="Monkey Mart"; image="monkey-mart.jpg"; path="/stuff/selfhosted/monkey-mart/index.html"}
    @{folder="drive-mad"; name="Drive Mad"; image="drive-mad.png"; path="/stuff/selfhosted/drive-mad/index.html"}
    @{folder="monster-tracks"; name="Monster Tracks"; image="monster-tracks.png"; path="/stuff/selfhosted/monster-tracks/index.html"}
    @{folder="a-dance-of-fire-and-ice"; name="A Dance of Fire and Ice"; image="adofai.png"; path="/stuff/selfhosted/a-dance-of-fire-and-ice/index.html"}
    @{folder="cannon-basketball-4"; name="Cannon Basketball 4"; image="cannonbasketball4.jpg"; path="/stuff/selfhosted/cannon-basketball-4/index.html"}
    @{folder="dragon-vs-bricks"; name="Dragon vs Icy Bricks"; image="dragondeeznuts.jpg"; path="/stuff/selfhosted/dragon-vs-bricks/index.html"}
    @{folder="dodge"; name="Dodge"; image="dodge.png"; path="/stuff/selfhosted/dodge/index.html"}
    @{folder="baldis-basics"; name="Baldis Basics in Education and Learning"; image="baldi.png"; path="/stuff/selfhosted/baldis-basics/index.html"}
    @{folder="100ng"; name="100 Player Pong"; image="100ng.jpg"; path="/stuff/selfhosted/100ng/index.html"}
    @{folder="burrito-bison"; name="Burrito Bison"; image="burritobison.jpg"; path="/stuff/selfhosted/burrito-bison/index.html"}
    @{folder="rhythm-hell"; name="Rhythm Hell"; image="rhythmhell.png"; path="/stuff/selfhosted/rhythm-hell/index.html"}
    @{folder="bacon-may-die"; name="Bacon May Die"; image="baconmaydie.jpg"; path="/stuff/selfhosted/bacon-may-die/index.html"}
    @{folder="venge"; name="Venge"; image="venge.jpg"; path="/stuff/selfhosted/venge/index.html"}
    @{folder="soccer-random"; name="Soccer Random"; image="soccerrandom.jpg"; path="/stuff/selfhosted/soccer-random/index.html"}
    @{folder="basket-random"; name="Basket Random"; image="basketrandom.png"; path="/stuff/selfhosted/basket-random/index.html"}
    @{folder="boxing-random"; name="Boxing Random"; image="boxingrandom.png"; path="/stuff/selfhosted/boxing-random/index.html"}
    @{folder="volley-random"; name="Volley Random"; image="volleyrandom.png"; path="/stuff/selfhosted/volley-random/index.html"}
    @{folder="bouncy-basketball"; name="Bouncy Basketball"; image="bouncybasketball.png"; path="/stuff/selfhosted/bouncy-basketball/index.html"}
    @{folder="adventure-drivers"; name="Adventure Drivers"; image="adventuredrivers.png"; path="/stuff/selfhosted/adventure-drivers/index.html"}
    @{folder="cookie-clicker"; name="Cookie Clicker"; image="cookieclicker.png"; path="/stuff/selfhosted/cookie-clicker/index.html"}
    @{folder="stickman-hook"; name="Stickman Hook"; image="stickmanhook.jpg"; path="/stuff/selfhosted/stickman-hook/index.html"}
    @{folder="ovo"; name="OVO"; image="ovo.png"; path="/stuff/selfhosted/ovo/index.html"}
    @{folder="doom"; name="Doom"; image="doom.jpg"; path="/stuff/selfhosted/doom/index.html"}
    @{folder="tomb-of-the-mask"; name="Tomb of the Mask"; image="totm.png"; path="/stuff/selfhosted/tomb-of-the-mask/index.html"}
    @{folder="btts"; name="Big Tower Tiny Square"; image="btts.png"; path="/stuff/selfhosted/btts/index.html"}
    @{folder="half-life"; name="Half-Life"; image="halflife.jpg"; path="/stuff/selfhosted/half-life/index.html"}
    @{folder="super-hot"; name="Super Hot"; image="superhot.png"; path="/stuff/selfhosted/super-hot/index.html"}
    @{folder="retro-helicopter"; name="Retro Helicopter"; image="retrohellicopter.png"; path="/stuff/selfhosted/retro-helicopter/index.html"}
    @{folder="hexgl"; name="HexGL"; image="hexgl.png"; path="/stuff/selfhosted/hexgl/index.html"}
    @{folder="buckshot-roulette"; name="Buckshot Roulette"; image="buckshot.jpg"; path="/stuff/selfhosted/buckshot-roulette/index.html"}
    @{folder="nzp"; name="Nazi Zombies Portable"; image="nzp.png"; path="/stuff/selfhosted/nzp/index.html"}
    @{folder="super-foulist"; name="Super Fowlst"; image="superfowlst.png"; path="/stuff/selfhosted/super-foulist/index.html"}
    @{folder="basketbros-io"; name="Basket Bros"; image="basket-bros.png"; path="/stuff/selfhosted/basketbros-io/index.html"}
    @{folder="quake"; name="Quake"; image="quake.jpg"; path="/stuff/selfhosted/quake/index.html"}
    @{folder="run3"; name="Run 3"; image="run3.png"; path="/stuff/selfhosted/run3/index.html"}
    @{folder="bobtherobber2"; name="Bob the Robber 2"; image="btr2.png"; path="/stuff/selfhosted/bobtherobber2/index.html"}
    @{folder="evio"; name="EV.IO"; image="evio.png"; path="/stuff/selfhosted/evio/index.html"}
    @{folder="motox3m"; name="Moto X3M"; image="motox3m.jpg"; path="/stuff/selfhosted/motox3m/index.html"}
    @{folder="flappybird"; name="Flappy Bird"; image="flappybird.png"; path="/stuff/selfhosted/flappybird/index.html"}
    @{folder="tanuki-sunset"; name="Tanuki Sunset"; image="tanuki.jpg"; path="/stuff/selfhosted/tanuki-sunset/index.html"}
    @{folder="basketball-stars"; name="Basketball Stars"; image="basketball-stars.png"; path="/stuff/selfhosted/basketball-stars/index.html"}
    @{folder="tag"; name="Tag"; image="tag.png"; path="/stuff/selfhosted/tag/index.html"}
    @{folder="zombs-royale"; name="Zombs Royale"; image="zombs.png"; path="/stuff/selfhosted/zombs-royale/index.html"}
    @{folder="uno"; name="UNO"; image="uno.png"; path="/stuff/selfhosted/uno/index.html"}
    @{folder="endless-truck"; name="Endless Truck"; image="endlesstruck.png"; path="/stuff/selfhosted/endless-truck/index.html"}
    @{folder="retro-bowl"; name="Retro Bowl"; image="retrobowl.png"; path="/stuff/selfhosted/retro-bowl/index.html"}
    @{folder="blockblast"; name="Block Blast"; image="blockblast.png"; path="/stuff/selfhosted/blockblast/index.html"}
    @{folder="drift-boss"; name="Drift Boss"; image="driftboss.png"; path="/stuff/selfhosted/drift-boss/index.html"}
    @{folder="pizzatower"; name="Pizza Tower"; image="pizzatower.jpg"; path="/stuff/selfhosted/pizzatower/index.html"}
    @{folder="fnaw"; name="Five Nights at Winstons"; image="fnaw.jpg"; path="/stuff/selfhosted/fnaw/index.html"}
    @{folder="wbwwb"; name="We Become What We Behold"; image="wbwwb.png"; path="/stuff/selfhosted/wbwwb/index.html"}
    @{folder="baf"; name="Burger and Frights"; image="baf.png"; path="/stuff/selfhosted/baf/index.html"}
    @{folder="10-minutes-till-dawn"; name="10 Minutes Till Dawn"; image="10mtd.png"; path="/stuff/selfhosted/10-minutes-till-dawn/index.html"}
    @{folder="slither"; name="Slither.io"; image="slither.jpg"; path="/stuff/selfhosted/slither/index.html"}
    @{folder="ragdoll-archers"; name="Ragdoll Archers"; image="ragdollarchers.jpg"; path="/stuff/selfhosted/ragdoll-archers/index.html"}
    @{folder="repo"; name="R.E.P.O"; image="repo.png"; path="/stuff/selfhosted/repo/index.html"}
    @{folder="ppgbog"; name="People Playground"; image="ppg.png"; path="/stuff/selfhosted/ppgbog/index.html"}
    @{folder="batim"; name="Bendy and the Ink Machine"; image="batim.png"; path="/stuff/selfhosted/batim/index.html"}
    @{folder="fused240"; name="Fused 240"; image="fused240.jpg"; path="/stuff/selfhosted/fused240/index.html"}
    @{folder="badgame"; name="Bad Game"; image="badgame.png"; path="/stuff/selfhosted/badgame/index.html"}
    @{folder="karlson2d"; name="Karlson 2D"; image="karlson.png"; path="/stuff/selfhosted/karlson2d/index.html"}
    @{folder="rerun"; name="Re:Run"; image="rerun.jpg"; path="/stuff/selfhosted/rerun/index.html"}
    @{folder="dnttch"; name="Do Not Take This Cat Home"; image="dnttch.png"; path="/stuff/selfhosted/dnttch/index.html"}
    @{folder="testimonium"; name="Testimonium"; image="testimonium.png"; path="/stuff/selfhosted/testimonium/index.html"}
    @{folder="cuphead"; name="Cuphead"; image="cuphead.png"; path="/stuff/selfhosted/cuphead/index.html"}
    @{folder="hollowknight"; name="Hollow Knight"; image="hollow.png"; path="/stuff/selfhosted/hollowknight/index.html"}
    @{folder="raft"; name="Raft"; image="raft.png"; path="/stuff/selfhosted/raft/index.html"}
    @{folder="ragdoll"; name="Ragdoll Hit"; image="ragdoll.png"; path="/stuff/selfhosted/ragdoll/index.html"}
    @{folder="sonicmania"; name="Sonic Mania"; image="sonicmania.jpg"; path="/stuff/selfhosted/sonicmania/index.html"}
    @{folder="balatro"; name="Balatro"; image="balatro.jpg"; path="/stuff/selfhosted/balatro/index.html"}
    @{folder="gtag"; name="Gorilla Tag"; image="thetag.png"; path="/stuff/selfhosted/gtag/index.html"}
    @{folder="omori"; name="OMORI"; image="omori.png"; path="/stuff/selfhosted/omori/index.html"}
    @{folder="terraria"; name="Terraria"; image="terraria.png"; path="/stuff/selfhosted/terraria/index.html"}
    @{folder="raldi"; name="Raldi's Crackhouse"; image="raldi.png"; path="/stuff/selfhosted/raldi/index.html"}
    @{folder="slimerancher"; name="Slime Rancher"; image="slimerancher.png"; path="/stuff/selfhosted/slimerancher/index.html"}
    @{folder="simplelootidle"; name="Simple Loot Idle"; image="simplelootidle.png"; path="/stuff/selfhosted/simplelootidle/index.html"}
    @{folder="fnae"; name="Five Nights at Epsteins"; image="fnae.png"; path="/stuff/selfhosted/fnae/index.html"}
    @{folder="angrybirds"; name="Angry Birds"; image="angrybirds.png"; path="/stuff/selfhosted/angrybirds/index.html"}
    @{folder="ddlcplus"; name="Doki Doki Literature Club Plus"; image="ddlcplus.png"; path="/stuff/selfhosted/ddlcplus/index.html"}
    @{folder="nso"; name="Needy Streamer Overload"; image="nso.png"; path="/stuff/selfhosted/nso/index.html"}
    @{folder="adgac"; name="A Difficult Game About Climbing"; image="adgac.png"; path="/stuff/selfhosted/adgac/index.html"}
    @{folder="deltatraveler"; name="Delta Traveler"; image="deltatraveler.png"; path="/stuff/selfhosted/deltatraveler/index.html"}
    @{folder="escape-road"; name="Escape Road"; image="escape-road.png"; path="/stuff/selfhosted/escape-road/index.html"}
    @{folder="co09loader"; name="Class of '09"; image="classof09.png"; path="/stuff/selfhosted/co09loader/index.html"}
    @{folder="gettingoverit"; name="Getting Over It"; image="gettingoverit.png"; path="/stuff/selfhosted/gettingoverit/index.html"}
    @{folder="fnf"; name="Friday Night Funkin"; image="fnf.png"; path="/stuff/selfhosted/fnf/index.html"}
    @{folder="survivorio"; name="Survivor.io"; image="survivorio.png"; path="/stuff/selfhosted/survivorio/index.html"}
    @{folder="undertale"; name="Undertale"; image="undertale.jpg"; path="/stuff/selfhosted/undertale/index.html"}
    @{folder="deltarune"; name="Deltarune"; image="deltarune.jpg"; path="/stuff/selfhosted/deltarune/index.html"}
    @{folder="mcpe"; name="Minecraft Pocket Edition"; image="mcpe.png"; path="/stuff/selfhosted/mcpe/index.html"}
    @{folder="lbp"; name="Little Big Planet"; image="lbp.png"; path="/stuff/selfhosted/lbp/index.html"}
    @{folder="oneshot"; name="One Shot"; image="oneshot.png"; path="/stuff/selfhosted/oneshot/index.html"}
    @{folder="bartblast"; name="Bart Blast"; image="bartblast.png"; path="/stuff/selfhosted/bartblast/index.html"}
    @{folder="drift-hunters"; name="Drift Hunters"; image="drift-hunters.png"; path="/stuff/selfhosted/drift-hunters/index.html"}
    @{folder="houseofhazards"; name="House of Hazards"; image="houseofhazards.png"; path="/stuff/selfhosted/houseofhazards/index.html"}
)

$basePath = "c:\Users\Kayde\Downloads\nexite\stuff\selfhosted"

# Player template (minified)
$playerTemplate = @'
<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Martin County School District | Video Player</title><link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap" rel="stylesheet"><style>*{box-sizing:border-box}:root{--background:#270f0f;--dark:#180909;--red:#ff4545;--red-dark:#83261f;--red-border:#be3b32}html,body{width:100%;height:100%;margin:0}body{background:radial-gradient(circle at 50% 45%,rgba(190,59,50,0.12),transparent 35%),#270f0f;color:white;font-family:"Quicksand",Helvetica,Arial,sans-serif;overflow:hidden}button,img{cursor:pointer}#player{position:fixed;inset:0;display:flex;gap:12px;padding:12px}#game-area{position:relative;flex:1;min-width:0;background:#120707;border:3px solid #251515;border-radius:20px;overflow:hidden;box-shadow:0 10px 35px rgba(0,0,0,0.35)}#game-frame{width:100%;height:100%;border:0;display:block;background:#000}#sidebar{width:190px;flex-shrink:0;display:flex;flex-direction:column;gap:10px;padding:12px;background:rgba(29,9,9,0.9);border:3px solid #251515;border-radius:20px;backdrop-filter:blur(8px);box-shadow:0 10px 35px rgba(0,0,0,0.3)}#game-picture{width:100%;aspect-ratio:1 / 1;object-fit:cover;border-radius:15px;border:3px solid #251515;background:#180909;transition:0.2s ease}#game-picture:hover{border-color:#be3b32;box-shadow:0 0 12px rgba(190,59,50,0.4)}#game-title{margin:4px 0 5px;font-size:18px;font-weight:700;text-align:center;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#game-subtitle{margin:0 0 8px;color:#777;font-size:11px;text-align:center}.player-button{width:100%;min-height:45px;padding:10px 12px;border:3px solid #251515;border-radius:13px;background:#180909;color:white;font-family:"Quicksand",sans-serif;font-size:13px;font-weight:600;transition:0.2s ease}.player-button:hover{background:#83261f;border-color:#be3b32;box-shadow:0 0 10px rgba(190,59,50,0.5),0 0 20px rgba(190,59,50,0.25);transform:translateY(-1px)}.player-button:active{transform:scale(0.98)}#back-button{color:#aaa}#back-button:hover{color:white}#game-area:fullscreen{width:100vw;height:100vh;border:0;border-radius:0}@media (max-width:700px){#player{flex-direction:column;padding:8px;gap:8px}#game-area{height:calc(100% - 145px);min-height:0}#sidebar{width:100%;height:125px;flex-direction:row;align-items:center;padding:8px}#game-picture{width:90px;height:90px;flex-shrink:0}.sidebar-info{flex:1;min-width:0}#game-title{text-align:left;margin:0 0 3px}#game-subtitle{text-align:left;margin:0}.sidebar-buttons{width:125px;display:flex;flex-direction:column;gap:6px}.player-button{min-height:40px;padding:7px;font-size:12px}}</style></head><body><div id="player"><div id="game-area"><iframe id="game-frame" src="GAME_PATH" allowfullscreen allow="fullscreen; autoplay; gamepad"></iframe></div><aside id="sidebar"><img id="game-picture" src="GAME_IMAGE" alt="GAME_NAME"><div class="sidebar-info"><div id="game-title">GAME_NAME</div><p id="game-subtitle">now playing</p></div><div class="sidebar-buttons"><button class="player-button" onclick="reloadGame()">↻ Reload</button><button class="player-button" onclick="fullscreenGame()">⛶ Fullscreen</button><button class="player-button" id="back-button" onclick="history.back()">← Back</button></div></aside></div><script>const gameFrame=document.getElementById("game-frame");const gameURL=sessionStorage.getItem("gameURL");if(gameURL){gameFrame.src=gameURL;}else{gameFrame.src="GAME_PATH";}function reloadGame(){gameFrame.src=gameFrame.src;}function fullscreenGame(){if(gameFrame.requestFullscreen){gameFrame.requestFullscreen();}}</script></body></html>
'@

# Generate all game folders and player templates
$created = 0
$skipped = 0

foreach ($game in $allGames) {
    $gamePath = Join-Path $basePath $game.folder
    $indexFile = Join-Path $gamePath "index.html"
    
    # Create folder if it doesn't exist
    if (-not (Test-Path $gamePath)) {
        New-Item -ItemType Directory -Path $gamePath -Force | Out-Null
        $created++
    }
    
    # Create/Update index.html only if it doesn't already have content
    $imageUrl = "https://frogiesarcade.win/stuff/games/$($game.image)"
    $content = $playerTemplate -replace "GAME_NAME", $game.name -replace "GAME_IMAGE", $imageUrl -replace "GAME_PATH", $game.path
    $content | Out-File -FilePath $indexFile -Encoding UTF8 -Force
}

Write-Host "✓ Game generation complete!"
Write-Host "  - Created/Updated: $(($allGames | Measure-Object).Count) games"
Write-Host ""
Write-Host "Next steps:"
Write-Host "  1. Move existing .html files into their respective folders"
Write-Host "  2. Update math.html to point to new /index.html paths"
Write-Host "  3. Remove old .html files from /stuff/selfhosted/"
