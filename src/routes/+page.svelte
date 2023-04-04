<script>

</script>

<head>
    <title>Placeholder Title</title>
    <link rel="stylesheet" href="/styles/theme.css">
    <link rel="stylesheet" href="/styles/home.css">
</head>

<body>
    <nav>
        <a href="/" class="logo select-light"><span class="icon"></span> Placeholder Title</a>
        <div class="links">
            <a href="/login" class="select-hidden">Log In<span class="underline"></span></a>
            <a href="/register" class="select-hidden">Register<span class="underline"></span></a>
            <a href="#contact" class="select-hidden">Contact<span class="underline"></span></a>
        </div>
    </nav>

    <main>
        <div class="title-section">
            <p class="title select-light">Placeholder Title</p>
            <p class="description select-light">Placeholder text placeholder text placeholder text placeholder text placeholder text placeholder text placeholder text </p>
            <a href="/register" class="CTA select-hidden">Register</a>
        </div>

        <div class="svg-container"></div>
    </main>

    <section class="feature-section">
        <div class="container">
            <p class="title select-light">Placeholder title</p>
            <p class="description select-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus soluta, saepe velit doloremque non, temporibus voluptatum, beatae et voluptate facere hic. Obcaecati ipsam facere facilis modi omnis architecto, temporibus fuga quos.</p>
        </div>
    </section>
    
    <section class="feature-section">
        <div class="container">
            <p class="title select-light">Placeholder title</p>
            <p class="description select-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus soluta, saepe velit doloremque non, temporibus voluptatum, beatae et voluptate facere hic. Obcaecati ipsam facere facilis modi omnis architecto, temporibus fuga quos.</p>
        </div>
    </section>

    <section class="feature-section">
        <div class="container">
            <p class="title select-light">Placeholder title</p>
            <p class="description select-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus soluta, saepe velit doloremque non, temporibus voluptatum, beatae et voluptate facere hic. Obcaecati ipsam facere facilis modi omnis architecto, temporibus fuga quos.</p>
        </div>
    </section>

    <section class="contact" id="contact">
        <p class="title select-light">Contact Us</p>
        <form action="" autocomplete="off">
            <div class="field-row">
                <div class="field">
                    <input class="select-light" placeholder=" " type="text" id="name" name="name" required/>
                    <label for="name" class="select-hidden">Name</label>
                </div>
                <div class="field">
                    <input class="select-light" placeholder=" " type="text" id="email" name="email" pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`&#123;|&#125;~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$" required/>
                    <label for="email" class="select-hidden">Email</label>
                </div>
                <div class="field">
                    <input class="select-light" placeholder=" " type="text" id="phonenr" name="phonenr" pattern="^(\+\d&#123;1,2&#125;\s?)?\(?\d&#123;3&#125;\)?[\s.-]?\d&#123;3&#125;[\s.-]?\d&#123;4&#125;$"/>
                    <label for="phonenr" class="select-hidden">Phone number<span class="select-hidden">(optional)</span></label>
                </div>
            </div>
            <div class="field-row">
                <div class="field">
                    <input class="select-light" placeholder=" " type="text" id="companyName" name="companyName"/>
                    <label for="companyName" class="select-hidden">Company name <span class="select-hidden">(optional)</span></label>
                </div>
                <div class="field">
                    <input class="select-light" placeholder=" " type="text" id="companyURL" name="companyURL"/>
                    <label for="companyURL" class="select-hidden">Website URL <span class="select-hidden">(optional)</span></label>
                </div>
                <div class="field">
                    <input class="select-light" placeholder=" " type="text" id="subject" name="subject" required/>
                    <label for="subject" class="select-hidden">Subject</label>
                </div>
            </div>

            <input type="submit" value="Submit">
        </form>
    </section>
</body>