//let counter = JSON.parse(localStorage.getItem('counter'))||0;

document.querySelector('.js-increment-button').addEventListener('click',()=>{
    count.IncreaseNumber();
})
document.querySelector('.js-decrement-button').addEventListener('click',()=>{
    count.DecreaseNumber();
})

document.getElementById('js-save-button').addEventListener('click',()=>{
    count.saveHistory();
})



class Counter{
    counter;
    #location;
    historyHtml;
    static countHtml;
    constructor(location){
        this.#location = location;
        this.counter = JSON.parse(localStorage.getItem(this.#location))|| 0;
        Counter.countHtml =  document.querySelector('.count');
        this.historyHtml = document.querySelector('.js-history');
        Counter.countHtml.innerHTML = `${this.counter}`
    }
   
    IncreaseNumber(){
        this.counter++;
        Counter.countHtml.innerHTML = `${this.counter}`
        this.saveToStorage();
    }
    DecreaseNumber(){
        
        this.counter--;
        Counter.countHtml.innerHTML = `${this.counter}`
        this.saveToStorage();
    }
    saveHistory(){
        this.historyHtml.innerHTML += `${this.counter} - `;
        this.counter = 0;
        Counter.countHtml.innerHTML = `${this.counter}`
        this.saveToStorage();
    }
    saveToStorage(){
        return localStorage.setItem(this.#location, JSON.stringify(this.counter));
    }
}

const count = new Counter('counter');

