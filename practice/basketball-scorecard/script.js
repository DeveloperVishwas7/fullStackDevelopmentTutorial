let homeScore = 0;
let guestScore = 0;
document.querySelectorAll('.js-score-button').forEach((button)=>{
    button.addEventListener('click',()=>{
        const {scoreId, teamId} = button.dataset;
        if(teamId === "home"){
            let scoreHtml = document.querySelector('.home-score');
            homeScore += Number(scoreId);
            scoreHtml.innerHTML = `${homeScore}`
        }else if(teamId === "guest"){
            let scoreHtml = document.querySelector('.guest-score');
            guestScore += Number(scoreId);
            scoreHtml.innerHTML = `${guestScore}`
        }
    })
    
})