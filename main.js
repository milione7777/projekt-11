// завдання 1
const bankAccount = {
    ownerName: 'Ім`я Власника',
    accountNumber: '123456789',
    balance: 0,
    deposit(amount) {
        this.balance += amount;
        this.updateBalanceDisplay();
    },
    withdraw(amount) {
        if(amount <= this.balance) {
            this.balance -= amount;
        } else {
            alert('Недостатньо коштів на рахунку');
        }
        this.updateBalanceDisplay();
    },
    updateBalanceDisplay() {
        document.getElementById('balance').innerText = `Залишок на рахунку: ${this.balance} грн`;
    }
}

function deposit() {
    const amount = parseFloat(document.getElementById('amount').value);
    if(!isNaN(amount) && amount > 0)  {
        bankAccount.deposit(amount);
    } else {
        alert('Будь ласка, введіть коректну суму для поповнення');
    }
}

function withdraw() {
    const amount = parseFloat(document.getElementById('amount').value);
    if(!isNaN(amount) && amount > 0)  {
        bankAccount.withdraw(amount);
    } else {
        alert('Будь ласка, введіть коректну суму для зняття');
    }
}

// завдання 2
const weather = {
  temperature: 0,
  humidity: 0,
  windSpeed: 0,
  isBelowZero() {
    return this.temperature < 0;
  },
};

function checkTemperature() {
  const tempInput = parseFloat(document.getElementById("temperature").value);
  if (!isNaN(tempInput)) {
    weather.temperature = tempInput;
    if (weather.isBelowZero()) {
      document.getElementById("message").innerText =
        "Температура нижче 0 градусів Цельсія";
    } else {
      document.getElementById("message").innerText =
        "Температура вище або рівна 0 градусів Цельсія";
    }
  } else {
    alert("Будь ласка, введіть коректну температуру");
  }
}

// завдання 3
const user = {
    name: '',
    email: '',
    password: '',
    login(inputEmail, inputPassword) {
        if (this.email === inputEmail && this.password === inputPassword) {
            alert('Успішний вхід');
        } else {
            alert('Неправильний email або пароль');
        }
    },
    setUserDetails(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
};

function updateUser() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    user.setUserDetails(name, email, password);
    alert('Дані користувача збережено');
}

function loginUser() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    user.login(email, password);
}

// завдання 4 
const movie = {
    title: '',
    director: '',
    year: 0,
    rating: 0,
    isHighlyRated() {
        return this.rating > 8;
    },
    setMovieDetails(title, director, year, rating) {
        this.title = title;
        this.director = director;
        this.year = year;
        this.rating = rating;
        this.displayMovieDetails();
    },
    displayMovieDetails() {
        document.getElementById('movieTitle').innerText = this.title;
        document.getElementById('movieDirector').innerText = `Director: ${this.director}`;
        document.getElementById('movieYear').innerText = `Year: ${this.year}`;
        document.getElementById('movieRating').innerText = `Rating: ${this.rating}`;

        if (this.isHighlyRated()) {
            document.getElementById('movieTitle').style.color = 'green';
        } else {
            document.getElementById('movieTitle').style.color = 'black';
        }
    }
};

function updateMovie() {
    const title = document.getElementById('title').value;
    const director = document.getElementById('director').value;
    const year = parseInt(document.getElementById('year').value);
    const rating = parseFloat(document.getElementById('rating').value);

    if (isNaN(year) || isNaN(rating)) {
        alert('Будь ласка, введіть коректний рік і рейтинг');
        return;
    }

    movie.setMovieDetails(title, director, year, rating);
}
