<script>
import sha256 from 'crypto-js/sha256';

let form;
let showPw = false;
let pwInput;
let hasUppercase = false;
let hasLowercase = false;
let hasNumber = false;
let hasLength = false;

function createAccount(){
    let exists = false;
    
    let users = JSON.parse(localStorage.getItem('users'));
    let newUser = {
        user: form['username'].value,
        pw: `${form['username'].value[0]}${sha256(form['password'].value).toString()}`,
        data: {
            'budget': 100000,
            'stocks': {},
        },
    }

    if (users==undefined){
        users = [];
    }
    
    users.forEach(user => {
        if(user.user == form['username'].value){
            exists = true;
        }
    });

    if(!exists){
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        sessionStorage.setItem('currentUser', JSON.stringify(newUser));
        window.location = "/userpage";
        return true;
    }
    
    alert('Username is already taken');
    return false;
}

function validate(){
    hasUppercase = /[A-Z]/.test(pwInput.value);
    hasLowercase = /[a-z]/.test(pwInput.value);
    hasNumber = /[0-9]/.test(pwInput.value);
    hasLength = pwInput.value.length >= 8;
}
</script>

<head>
    <title>Create new account</title>
    <link rel="stylesheet" href="/styles/theme.css">
    <link rel="stylesheet" href="/styles/register.css">
</head>

<body>
    <nav>
        <a href="/" class="logo select-hidden logo-font"><span class="icon"></span> Innovocks</a>
        <div class="links">
            <a href="/" class="select-hidden">Home <span class="underline"></span></a>
            <a href="/login" class="select-hidden">Log In<span class="underline"></span></a>
        </div>
    </nav>

    <section class="sat-container">
        <div class="sat"></div>
    </section>

    <main>
        <div class="container">
        <p class="title select-light">Create account</p>

        <form on:submit={createAccount} autocomplete="off" bind:this={form}>
            <div class="field">
                <input class="select-light" placeholder=" " type="text" id="username" name="username" maxlength="16" required/>
                <label for="username" class="select-hidden">Username</label>
            </div>
            <div class="field">
                <input class="select-light" placeholder=" " type="{showPw ? 'text' : 'password'}" id="password" name="password" pattern='^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).&#123;8,&#125;$' on:keyup={validate} bind:this={pwInput} required/>
                <label for="password" class="select-hidden">Password</label>
                <span class="select-hidden {showPw ? 'eye open' : 'eye'}" on:click={()=>{showPw=!showPw}} on:keypress={()=>{showPw=!showPw}}></span>
            </div>
            <input type="submit" value="Register">
            <div class="pw-requirements select-light">
                Password requirements
                <span class="select-light"><span class="icon {hasLength ? 'checked' : ''}"></span> 8 or more total characters</span>
                <span class="select-light"><span class="icon {hasUppercase ? 'checked' : ''}"></span> 1 Upper case letter</span>
                <span class="select-light"><span class="icon {hasLowercase ? 'checked' : ''}"></span> 1 Lower case letter</span>
                <span class="select-light"><span class="icon {hasNumber ? 'checked' : ''}"></span> 1 or more numbers</span>
            </div>
        </form>
        
        <p class="login-text select-light">Or <a href="/login" class="select-light">log in</a> to an existing account</p>
        </div>
    </main>
    
    <footer></footer>
</body>