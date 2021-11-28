
let startBtn = document.querySelector('.btn');
startBtn.addEventListener('click',startGame);

function startGame() {
    let tiles = [
        '<i class="fab fa-earlybirds"></i>',
        '<i class="fas fa-crow"></i>',
        '<i class="fas fa-couch"></i>',
        '<i class="fas fa-cocktail"></i>',
        '<i class="fas fa-cloud-sun"></i>',
        '<i class="fab fa-canadian-maple-leaf"></i>',
        '<i class="fas fa-candy-cane"></i>',
        '<i class="fas fa-calculator"></i>',
        '<i class="fas fa-birthday-cake"></i>',
        '<i class="fas fa-binoculars"></i>',
        '<i class="fas fa-bell"></i>',
        '<i class="fas fa-basketball-ball"></i>',
        '<i class="fas fa-beer"></i>',
        '<i class="fas fa-balance-scale"></i>',
        '<i class="fas fa-atom"></i>',
        '<i class="fas fa-at"></i>',
        '<i class="fab fa-apple"></i>',
        '<i class="fab fa-android"></i>',
        '<i class="fab fa-earlybirds"></i>',
        '<i class="fas fa-crow"></i>',
        '<i class="fas fa-couch"></i>',
        '<i class="fas fa-cocktail"></i>',
        '<i class="fas fa-cloud-sun"></i>',
        '<i class="fab fa-canadian-maple-leaf"></i>',
        '<i class="fas fa-candy-cane"></i>',
        '<i class="fas fa-calculator"></i>',
        '<i class="fas fa-birthday-cake"></i>',
        '<i class="fas fa-binoculars"></i>',
        '<i class="fas fa-bell"></i>',
        '<i class="fas fa-basketball-ball"></i>',
        '<i class="fas fa-beer"></i>',
        '<i class="fas fa-balance-scale"></i>',
        '<i class="fas fa-atom"></i>',
        '<i class="fas fa-at"></i>',
        '<i class="fab fa-apple"></i>',
        '<i class="fab fa-android"></i>'
    ];

    let container = document.querySelector('.container');
    
    let twoFlippedTiles = [];

    function createTable(){
        let text = ``;
        for (let i = 0; i < 36; i++) {
            let rand = Math.floor(Math.random()*tiles.length) // 35
            text += `
                <div class="card">
                    <div class="back-face">${tiles[rand]}</div>
                    <div class="front-face"></div>
                </div>
            `
            tiles.splice(rand,1);
        }
        container.innerHTML = text;
    };
        createTable();
    
    let cards = document.querySelectorAll('.card');
        addClicks();
    
    function flipOver(){
        this.removeEventListener('click',flipOver);
        twoFlippedTiles.push(this);
        let back = this.querySelector('.back-face');
        let front = this.querySelector('.front-face');
        front.style.transform = "rotateY(180deg)";
        back.style.transform = "rotateY(0deg)";
        if(twoFlippedTiles.length === 2){
            checkTiles();
        }
    }

    function checkTiles(){
        removeCliks();

        let front1 = twoFlippedTiles[0].querySelector('.front-face');
        let back1 = twoFlippedTiles[0].querySelector('.back-face');
        let front2 = twoFlippedTiles[1].querySelector('.front-face');
        let back2 = twoFlippedTiles[1].querySelector('.back-face');
        if(back1.innerHTML === back2.innerHTML){
            twoFlippedTiles[0].className = "flipped";
            twoFlippedTiles[1].className = "flipped";
            twoFlippedTiles.length = 0;

            addClicks();
        }else{
            setTimeout(()=>{
                front1.style.transform = "rotateY(0deg)";
                back1.style.transform = "rotateY(180deg)";
                front2.style.transform = "rotateY(0deg)";
                back2.style.transform = "rotateY(180deg)";
                twoFlippedTiles.length = 0;
                addClicks();
            },700)
        }
    };

    function removeCliks(){
        cards.forEach(card=> card.removeEventListener('click',flipOver))
    };

    function addClicks(){
        let cards = document.querySelectorAll('.card');
            cards.forEach(card=> card.addEventListener('click',flipOver));
    };

};

startGame();

