<script>
import sha256 from 'crypto-js/sha256';

let form;
let showPw = false;

function checkLogin(){
    let users = JSON.parse(localStorage.getItem('users'));
    if(users == undefined){
        users = [];
    }
    users.forEach(user => {
        console.log(`${user['user'][0]}${sha256(form['password'].value).toString()}`);
        if(user['pw'] == `${user['user'][0]}${sha256(form['password'].value).toString()}` && user['user']==form['username'].value){
            sessionStorage.setItem('currentUser', JSON.stringify(user));
            window.location = '/userpage/';
            return true;
        }
    });
}

</script>
    
    <head>
        <title>Log in to account</title>
        <link rel="stylesheet" href="/styles/theme.css">
        <link rel="stylesheet" href="/styles/register.css">
    </head>
    
    <body>
        <nav>
            <a href="/" class="logo select-light"><span class="icon"></span> Placeholder Title</a>
            <div class="links">
                <a href="/" class="select-hidden">Home <span class="underline"></span></a>
                <a href="/register" class="select-hidden">Register<span class="underline"></span></a>
            </div>
        </nav>

        <section class="sat-container">
            <div class="sat"></div>
        </section>
    
        <main>
            <div class="container">
            <p class="title select-light">Log in to account</p>
    
            <form on:submit={checkLogin} autocomplete="off" bind:this={form}>
                <div class="field">
                    <input class="select-light" placeholder=" " type="text" id="username" name="username" maxlength="16" required/>
                    <label for="username" class="select-hidden">Username</label>
                </div>
                <div class="field">
                    <input class="select-light" placeholder=" " type="{showPw ? 'text' : 'password'}" id="password" name="password" required/>
                    <label for="password" class="select-hidden">Password</label>
                    <span class="select-hidden {showPw ? 'eye open' : 'eye'}" on:click={()=>{showPw=!showPw}} on:keypress={()=>{showPw=!showPw}}></span>
                </div>
                <input type="submit" value="Log in">
            </form>
            
            <p class="login-text select-light">Or <a href="/register" class="select-light">register</a> a new account</p>
            </div>
        </main>
    
        <footer></footer>
    </body>