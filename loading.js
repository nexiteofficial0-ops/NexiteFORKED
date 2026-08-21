document.addEventListener("DOMContentLoaded", function () {

    const loadingScreen =
        document.getElementById("loading-screen");

    const message =
        document.getElementById("messageforyou");

    const counter =
        document.getElementById("elementcounter");

    const loadingBar =
        document.getElementById("loadingbar");

    const skipButton =
        document.getElementById("skiploading");


    /*
        Loading messages
    */

    const loadingMessages = [
        "Bro someone tell janoah to SHUT THE FUCK UP",
        "Loading your education...",
        "most likely your computer is being monitored 24/7",
        "This kid Kaden is a bum bro",
        "loading the loading...",
        "ts website so buns bro istg nb gon use ts💔",
        "this was a pain in the ass making",
        "i used to do crack - Luis from SML",
        "bro kaden js be saying shi sometimes",
        "teto got into my wifi and now is deadass dedicated in this server",
        "wont blow up your chromebook",
        "goguardian and got NOTHING on this",
        "be patient",
        "bro i swear complex.lat is the best minecraft server",
        "i will be getting BULLIED for these messages",
        "BOI WHAT U SAY ABOUT LEGEND",
        "jamaking me dinner???",
        "bro Ms. Cherry i will OBILERATE you the next time you call my mom💔",
        "🎵Black lake, blue pond, I hear the sirens call, I'm in my special place🎵",
        "easton you SUCK at fortnite",
        "goodbye obsidian.gg, hello nexite!",
        "teto is fucking peak idc what u say",
        "bro mckenzie is SO rascist💔",
        "bro WHAT are these reccomendations",
        "ew isabella",
        "i LOVE chips ahoy",
        "annaleah ima touch u",
        "bro what are these ship or dip accounts💔",
        "why is legendd1 so obsessed with spirit halloween💔💔",
        "i gooned on the ghost from phasmophobia",
        "bro scarlett STILL likes levi",
        "its cown",
        "what am i doing making these loading messages",
        "loading... be patient.",
        "wont turn your chromebook into a nuetron star!",
        "isabella THINKS shes from the hood",
        "fuck dem damn juniors",
        "bro my online friends are literal GOONERS bro",
        "aw man you gotta try this sandwich its no ordinary sandwich its a sausage biscuit with grape jellyy🎵",
        "completely optional btw",
        "ya the 808 crazy af",
        "pictures for the top bar by frogiee1 btw.",
        "inspiration from frogiee1",
        "bro the styles.css has the MOST code💔",
        "im bored innit",
        "WHO let gumball on the mic",
        "i dont think ms mcghee operates like that",
        "BRO ms mcghee is SO dumb bro💔",
        "petition to get me homeschooled", 
        "luv u callie❤️",
        "bro chris u got 4-2ed shut up",
        "bro chips ahoy is SOOO GOOD🤤🤤",
        "67 on a merry rizzmas",
        "BRO I LOVE MCKENZIE BUT IDK WHAT TO SAY",
        "kenzie needs to GET her life together💔",
        "FUCK maps testing bro",
        "esc reload power ctrl d enter x2 hehe",
        "you've made it to the lucky loading message congrats show pic to me for a link",
        "ms mcghee teeth big as shit",
        "w loading screen right????",
        "also check out spaceyy.win",
        "yay -S nexite???",
        "also try nexiteOS!",
        "panic key coming soon?",
        "to my principals yall can never find out who made it so just stop.",
        "puh boy make sure that backdoor locked",
        "YALL ARE CHEATING!! geniune autistic levels at play here",
        "kaden stop going to sleep in class",
        "ms mcghee be TRIPPING sometimes bro",
        "i swear mckenzie is a bum bro",
        "die",
        "bro mckenzie HIT me in the lip with her bookbag and my lip was bleeding bro💔",
        "bro bella watches tv all day",
        "ms mcghee does NOT know how to use a computer",
        "yall lwk ass at blocking nexite",
        "also go to spaceyy.win",
        "teto bad as shi",
        "pushups! down up MAN FUCK THAT SHI",
        "kaden said he was gay",
        "scarlett still like kaden????",
        "jacari shut up nerd",
        "making these loading messages in the morning",
        "ow",
        "this beat is my recital i think its very vital",
        "lucas still my dad??",
        "also check out nexiteos https://github.com/spaceyy1",
        "why u heff to be mad",
        "oh no",
        "OH SHIDDINGS",
        "layla bald",
        "oh ya soul tie",
        "3.5 put it in my bag",
        "have yall ever felt what its like to get nutted in",
        "ight lets go work on nexiteos rq",
        "67",
        "join the discord!",
        "this is the most useless message you will read today.",
        "all unblocked!",
        "miku got into my wifi, and now she is in my dedicated server 💔",
        "nexite v2 when?",
        "yeah yeah shut up kaden",

    ];


    /*
        Start with a random message
    */

    message.innerText =
        loadingMessages[
            Math.floor(Math.random() * loadingMessages.length)
        ];


    /*
        Count loaded elements
    */

    let totalElements = 0;
    let loadedElements = 0;


    const observer = new MutationObserver(() => {

        totalElements =
            document.querySelectorAll("*").length;

    });


    observer.observe(document, {
        childList: true,
        subtree: true
    });


    /*
        Check if an element is loaded
    */

    function isElementLoaded(element) {

        if (element.tagName === "IMG") {
            return element.complete;
        }


        if (element.tagName === "SCRIPT") {
            return (
                element.readyState === "complete" ||
                element.readyState === "loaded"
            );
        }


        if (
            element.tagName === "LINK" &&
            element.rel === "stylesheet"
        ) {
            return true;
        }


        return true;
    }


    /*
        Update loading progress
    */

    function checkLoadedElements() {

        const allElements =
            document.querySelectorAll("*");


        totalElements =
            allElements.length;


        loadedElements = 0;


        allElements.forEach(element => {

            if (isElementLoaded(element)) {
                loadedElements++;
            }

        });


        const percent =
            totalElements > 0
                ? (loadedElements / totalElements) * 100
                : 0;


        loadingBar.style.width =
            `${percent.toFixed(1)}%`;


        counter.innerText =
            `${loadedElements}/${totalElements} loaded...`;


        /*
            Keep checking while the page loads
        */

        if (document.readyState !== "complete") {

            requestAnimationFrame(
                checkLoadedElements
            );

        } else {

            loadingBar.style.width = "100%";

            counter.innerText = "done!";

            observer.disconnect();

            finishLoading();

        }

    }


    /*
        Finish loading
    */

    function finishLoading() {

        setTimeout(() => {

            loadingScreen.classList.add(
                "fade-out"
            );

        }, 350);

    }


    /*
        Skip button becomes available
        after a few seconds
    */

    setTimeout(() => {

        skipButton.style.display = "block";

    }, 3000);


    /*
        Skip loading
    */

    window.skipLoading = function () {

        loadingBar.style.width = "100%";

        counter.innerText = "done!";

        loadingScreen.classList.add(
            "fade-out"
        );

    };


    /*
        Begin checking
    */

    requestAnimationFrame(
        checkLoadedElements
    );

});