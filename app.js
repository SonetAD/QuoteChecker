class QuoteChecker {
  constructor() {
    this.quoteList = JSON.parse(localStorage.getItem('quotelist'));
    if (this.quoteList == null) {
      localStorage.setItem('quotelist', JSON.stringify([]));
    }
  }

  checkQuote() {
    let listitems = JSON.parse(localStorage.getItem('quotelist'));
    let userInput = document.querySelector('input').value;
    if (userInput != '') {
      if (listitems.length != 0) {
        for (let i = 0; i < listitems.length; i++) {
          if (userInput.toLocaleLowerCase() === listitems[i]) {
            document.querySelector('.checkpage').style.display = 'none';
            document.querySelector('.one').style.display = 'none';
            document.querySelector('.zero').style.display = 'block';
            break;
          } else {
            let newQuoteList = JSON.parse(localStorage.getItem('quotelist'));

            newQuoteList.push(userInput);
            localStorage.setItem('quotelist', JSON.stringify(newQuoteList));
            document.querySelector('.checkpage').style.display = 'none';
            document.querySelector('.zero').style.display = 'none';
            document.querySelector('.one').style.display = 'block';
          }
        }
      } else {
        let userInput = document.querySelector('input').value;

        let newQuoteList = JSON.parse(localStorage.getItem('quotelist'));
        newQuoteList.push(userInput);
        localStorage.setItem('quotelist', JSON.stringify(newQuoteList));
        document.querySelector('.checkpage').style.display = 'none';
        document.querySelector('.zero').style.display = 'none';
        document.querySelector('.one').style.display = 'block';
      }
    }
  }
}

let checkQuote = new QuoteChecker();

document.querySelector('.check').addEventListener('click', (e) => {
  checkQuote.checkQuote();
  document.querySelector('input').value = '';
  e.preventDefault();
});

document.querySelectorAll('.reload').forEach((k) => {
  k.addEventListener('click', (e) => {
    window.location.href = 'index.html';
    e.preventDefault();
  });
});
