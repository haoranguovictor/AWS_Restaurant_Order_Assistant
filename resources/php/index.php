<!DOCTYPE html>
<html lang="en">
    <head>
        
        <meta name="viewport" content="width=device-width, initial scale=1.0">
        
        <link rel="stylesheet" type="text/css" href="vendors/css/normalize.css">
        <link rel="stylesheet" type="text/css" href="vendors/css/grid.css">
        <link rel="stylesheet" type="text/css" href="vendors/css/ionicons.css">
        <link rel="stylesheet" type="text/css" href="vendors/css/animate.css">
        <link rel="stylesheet" type="text/css" href="resources/css/style.css">
        <link rel="stylesheet" type="text/css" href="resources/css/queries.css">
        
        <link href="https://fonts.googleapis.com/css?family=Lato:100,300,300i,400" rel="stylesheet">
        <title>Omnifood</title>
        
        <link rel="apple-touch-icon" sizes="180x180" href="/resources/favicons/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="/resources/favicons/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/resources/favicons/favicon-16x16.png">
        <link rel="manifest" href="/resources/favicons/manifest.json">
        <link rel="mask-icon" href="/resources/favicons/safari-pinned-tab.svg" color="#5bbad5">
        <link rel="shortcut icon" href="/resources/favicons/favicon.ico">
        <meta name="msapplication-config" content="/resources/favicons/browserconfig.xml">
        <meta name="theme-color" content="#ffffff">
        
    </head>
    <body>
        <header>
            <nav> <!--navigation-->
                <div class="row">
                    <img src="resources/img/logo-white.png" alt="Omnifood logo" class="logo">
                    <img src="resources/img/logo.png" alt="Omnifood logo" class="logo-black">
                    <ul class="main-nav js--main-nav">
                        <!--ul for un** list-->
                        <li><a href = "#features">Food delivery</a></li>
                        <!--li for list-->
                        <li><a href = "#steps">How it works</a></li>
                        <li><a href = "#cities">Our cities</a></li>
                        <li><a href = "#signup">Sign up</a></li>
                    </ul>
                    <a class="mobile-nav-icon js--nav-icon"><i class="ion-navicon-round"></i></a>
                </div>
            </nav>
            
            <div class="hero-text-box">
                <h1>Goodbye junk food. <br>Hello super healthy meals</h1> <!--br means a break-->
                <a class="btn btn-full js--scroll-to-plans" href="#">I'm hungry</a> <!-- a is hyperlink-->
                <a class="btn btn-ghost js--scroll-to-start" href="#">Show me more</a>
            </div>
        
        </header>
        
        <section class="section-features js--section-features" id="features">
            <div class="row">
                <h2>Get food fast &mdash; not fast food.</h2>
                <p class="long-copy">
                    Hello, we’re Omnifood, your new premium food delivery service. We know you’re always busy. No time for cooking. So let us take care of that, we’re really good at it, we promise!
                </p>
            </div>
            
            <div class="row js--wp-1">
                <div class="col span-1-of-4 box">
                    <i class="ion-ios-infinite-outline icon-big"></i>
                    <h3>
                        Up to 365 days/year
                    </h3>
                    <p>
                        Never cook again! We really mean that. Our subscription plans include up to 365 days/year coverage. You can also choose to order more flexibly if that's your style.
                    </p>
                </div>
                <div class="col span-1-of-4 box">
                    <i class="ion-ios-time-outline icon-big"></i>
                    <h3>
                        Ready in 20 minutes
                    </h3>
                    <p>
                        You're only twenty minutes away from your delicious and super healthy meals delivered right to your home. We work with the best chefs in each town to ensure that you're 100% happy.
                    </p>
                </div>
                <div class="col span-1-of-4 box">
                    <i class="ion-leaf icon-big"></i>
                    <h3>
                        100% organic
                    </h3>
                    <p>
                        All our vegetables are fresh, organic and local. Animals are raised without added hormones or antibiotics. Good for your health, the environment, and it also tastes better!
                    </p>
                </div>
                <div class="col span-1-of-4 box">
                    <i class="ion-ios-home-outline icon-big"></i>
                    <h3>
                        Order anything
                    </h3>
                    <p>
                        We don't limit your creativity, which means you can order whatever you feel like. You can also choose from our menu containing over 100 delicious meals. It's up to you!
                    </p>
                </div>
            </div>
            
        </section>
        
        <section class="section-meals">
            <ul class="meals-showcase clearfix">
                <li>
                    <figure class="meal-photo">
                        <img src="resources/img/1.jpg" alt="Korean bibimbap with egg and vegetables">
                    </figure>
                </li>
                <li>
                    <figure class="meal-photo">
                        <img src="resources/img/2.jpg" alt="Simple italian pizza with cherry tomatoes">
                    </figure>
                </li>
                <li>
                    <figure class="meal-photo">
                        <img src="resources/img/3.jpg" alt="Chicken breast steak with vegetables">
                    </figure>
                </li>
                <li>
                    <figure class="meal-photo">
                        <img src="resources/img/4.jpg" alt="Autumn pumpkin soup">
                    </figure>
                </li>
            </ul>
            <ul class="meals-showcase clearfix">
                <li>
                    <figure class="meal-photo">
                        <img src="resources/img/5.jpg" alt="Paleo beef steak with vegetables">
                    </figure>
                </li>
                <li>
                    <figure class="meal-photo">
                        <img src="resources/img/6.jpg" alt="Healthy baguette with egg and vegetables">
                    </figure>
                </li>
                <li>
                    <figure class="meal-photo">
                        <img src="resources/img/7.jpg" alt="Burger with cheddar and bacon">
                    </figure>
                </li>
                <li>
                    <figure class="meal-photo">
                        <img src="resources/img/8.jpg" alt="Granola with cherries and strawberries">
                    </figure>
                </li>
            </ul>
        </section>
        
        <section class="section-steps" id="steps">
            <div class="row">
                <h2>
                    How it works - Simple as 1, 2, 3
                </h2>
            </div>
            <div class="row">
                <div class="col span-1-of-2 steps-box">
                    <img src="resources/img/app-iPhone.png"
                         alt="Omnifood app on iPhone" class="app-screen js--wp-2">
                </div>
                <div class="col span-1-of-2 steps-box">
                    <div class="work-step">
                        <div>1</div>
                        <p>Choose the subscription plan that best fits your needs and sign up today.</p>
                    </div>
                    <div class="work-step">
                        <div>2</div>
                        <p>Order your delicious meal using our mobile app or website. Or you can even call us!</p>
                    </div>
                    <div class="work-step">
                        <div>3</div>
                        <p>Enjoy your meal after less than 20 minutes. See you the next time!</p>
                    </div>
                    
                    <a href="#" class="btn-app">
                        <img src="resources/img/download-app.svg" alt="App Store Button">
                    </a>
                    <a href="#" class="btn-app">
                        <img src="resources/img/download-app-android.png" alt="PlayStore Button">
                    </a>
                </div>
            </div>
        </section>
        
        <section class="section-cities" id="cities">
            <div class="row">
                <h2>
                    We're currently in these cities
                </h2>
            </div>
            <div class="row city-container js--wp-3">
                <div class="col span-1-of-4 city-box">
                    <img src="resources/img/lisbon-3.jpg", alt="lisbon", class="city-img">
                    <h3>
                        Lisbon
                    </h3>
                    <i class="ion-android-contacts icon-small"></i><br>
                        1600+ happy eaters<br>60+ top chefs<br><i class="ion-social-twitter icon-small"></i><br>
                    <a href="#">@omnifood_lx</a>
                </div>
                <div class="col span-1-of-4 city-box">
                    <img src="resources/img/san-francisco.jpg", alt="san", class="city-img">
                    <h3>
                        San Francisco
                    </h3>
                    <i class="ion-android-contacts icon-small"></i><br>
                        3700+ happy eaters<br>160+ top chefs<br>
                    <i class="ion-social-twitter icon-small"></i><br>
                    <a href="#">@omnifood_sf</a>
                </div>
                <div class="col span-1-of-4 city-box">
                    <img src="resources/img/berlin.jpg", alt="berlin", class="city-img">
                        <h3>
                            Berlin
                        </h3>
                    <i class="ion-android-contacts icon-small"></i><br>
                            2300+ happy eaters<br>110+ top chefs<br>
                    <i class="ion-social-twitter icon-small"></i><br>
                    <a href="#">@omnifood_berlin</a>
                </div>
                <div class="col span-1-of-4 city-box">
                    <img src="resources/img/london.jpg", alt="london", class="city-img">
                        <h3>
                            London
                        </h3>
                    <i class="ion-android-contacts icon-small"></i><br>
                    1200+ happy eaters<br>
                    50+ top chefs<br>
                    <i class="ion-social-twitter icon-small"></i><br>
                    <a href="#">@omnifood_london</a>
                </div>
            </div>
        </section>
        
        <section class="section-testmonials">
            <div class="row">
                <h2>
                    Our customers can't live without us
                </h2>
            </div>
            <div class="row">
                <div class="col span-1-of-3">
                    <blockquote>
                        Omnifood is just awesome! I just launched a startup which leaves me with no time for cooking, so Omnifood is a life-saver. Now that I got used to it, I couldn't live without my daily meals!
                            <cite><img src="resources/img/customer-1.jpg">Alberto Duncan</cite>
                    </blockquote>
                </div>
                <div class="col span-1-of-3">
                    <blockquote>
                        Inexpensive, healthy and great-tasting meals, delivered right to my home. We have lots of food delivery here in Lisbon, but no one comes even close to Omifood. Me and my family are so in love!
                            <cite><img src="resources/img/customer-2.jpg">Joana Silva</cite>
                    </blockquote>
                </div>
                <div class="col span-1-of-3">
                    <blockquote>
                        I was looking for a quick and easy food delivery service in San Franciso. I tried a lot of them and ended up with Omnifood. Best food delivery service in the Bay Area. Keep up the great work!
                            <cite><img src="resources/img/customer-3.jpg">Milton Chapman</cite>
                    </blockquote>
                </div>
            </div>
        </section>
        
        <section class="section-plans js--section-plans" id="signup">
            <div class="row">
                <h2>Start eating healthy today</h2>
            </div>
            <div class="row">
                <div class="col span-1-of-3">
                    <div class="plan-box js--wp-2">
                        <div>
                            <h3>Premium</h3>
                            <p class="plan-price">399$ <span>/ month</span></p>
                            <p class="plan-price-meal">That’s only 13.30$ per meal</p>
                        </div>
                        <div>
                            <ul>
                                <li><i class="ion-checkmark-round">1 meal every day</i></li><br>
                                <li><i class="ion-checkmark-round">Order 24/7</i></li><br>
                                <li><i class="ion-checkmark-round">Access to newest creations</i></li><br>
                                <li><i class="ion-checkmark-round">Free delivery</i></li><br>
                            </ul>
                        </div>
                        <div>
                            <a href="#" class="btn btn-full">Sign up now</a>
                        </div>
                    </div>
                </div>
                <div class="col span-1-of-3">
                    <div class="plan-box">
                        <div>
                            <h3>Pro</h3>
                            <p class="plan-price">149$ <span>/ month</span></p>
                            <p class="plan-price-meal">That’s only 14.90$ per meal</p>
                        </div>
                        <div>
                            <ul>
                                <li><i class="ion-checkmark-round">1 meal 10 days/month</i></li><br>
                                <li><i class="ion-checkmark-round">Order 24/7</i></li><br>
                                <li><i class="ion-checkmark-round">Access to newest creations</i></li><br>
                                <li><i class="ion-checkmark-round">Free delivery</i></li><br>
                            </ul>
                        </div>
                        <div>
                            <a href="#" class="btn btn-ghost">Sign up now</a>
                        </div>
                    </div>
                </div>
                <div class="col span-1-of-3">
                    <div class="plan-box">
                        <div>
                            <h3>Starter</h3>
                            <p class="plan-price">19$ <span>/ month</span></p>
                            <p class="plan-price-meal">&nbsp;</p> <!-- &nbsp is a space line-->
                        </div>
                        <div>
                            <ul>
                                <li><i class="ion-checkmark-round">1 meal</i></li><br>
                                <li><i class="ion-checkmark-round">Order from 8 am to 12 pm</i></li><br>
                                <li><i class="ion-close-round"></i></li><br>
                                <li><i class="ion-checkmark-round">Free delivery</i></li><br>
                            </ul>
                        </div>
                        <div>
                            <a href="#" class="btn btn-ghost">Sign up now</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <div class="map-box">
            
            <div class="map"></div>
            
            <div class="form-box" id="form">
                <div class="row">
                    <h2>We're happy to hear from you</h2>
                </div>
                
                <div class="row">
                
                    <form method="post" action="mailer.php" class="contact-form">
                        <div class="row">
                           <?php 
                                if($_GET['success']==1){
                                    echo "<div class=\"form-messages success\">Thanks for your content!</div>"
                                }
                            
                                if($_GET['success']==-1){
                                    echo "<div class=\"form-messages failed\">Oops, error occured.</div>"
                                }
                        ?>
                        <div class="row">
                        <div class="col span-1-of-3">
                            <label for="name">Name</label>
                        </div>
                        <div class="col span-2-of-3">
                            <input type="text" name="name" id="name" placeholder="Your name" required>
                        </div><!--the second column is twice as large as the first one-->
                    </div>
                    <div class="row">
                        <div class="col span-1-of-3">
                            <label for="email">Email</label>
                        </div>
                        <div class="col span-2-of-3">
                            <input type="text" name="email" id="email" placeholder="E-mail" required>
                        </div><!--the second column is twice as large as the first one-->
                    </div>
                    <div class="row">
                        <div class="col span-1-of-3">
                            <label for="find-us">How do you find us</label>
                        </div>
                        <div class="col span-2-of-3">
                            <select name="find-us" id="find-us">
                                <option value="friends" selected>
                                    Friends
                                </option>
                                <option value="search">
                                    Search engine
                                </option>
                                <option value="ad">
                                    Advertisement
                                </option>
                                <option value="other">
                                    Other
                                </option>
                            </select>
                        </div><!--the second column is twice as large as the first one-->
                    </div>
                    <div class="row">
                        <div class="col span-1-of-3">
                            <label for="news">Newsletter?</label>
                        </div>
                        <div class="col span-2-of-3">
                            <input type="checkbox" name="news" id="news" checked> Notice me via e-mail
                        </div>
                    </div>
                    <div class="row">
                        <div class="col span-1-of-3">
                            <label>Drop us a line</label>
                        </div>
                        <div class="col span-2-of-3">
                            <textarea name="message" placeholder="Your message"></textarea>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col span-1-of-3">
                            <label>&nbsp;</label>
                        </div>
                        <div class="col span-2-of-3">
                            <input type="submit" value="Send it!">
                        </div>
                    </div>
                </form>
            </div>
            </div>    
        </div>
        
        <footer>
            <div class="row">
                <div class="col span-1-of-2">
                    <ul class="footer-nav">
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Press</a></li>
                        <li><a href="#">iOS App</a></li>
                        <li><a href="#">Android App</a></li>
                    </ul>
                </div>
                <div class="col span-1-of-2">
                    <ul class="social-links">
                        <li><a href="#"><i class="ion-social-facebook small-icon"></i></a></li>
                        <li><a href="#"><i class="ion-social-instagram small-icon"></i></a></li>
                        <li><a href="#"><i class="ion-social-twitter small-icon"></i></a></li>
                        <li><a href="#"><i class="ion-social-linkedin small-icon"></i></a></li>
                        
                    </ul>
                </div>
            </div>
            <div class="row">
                <p>
                    Copyright &copy; 2018 by Victor Guo. All rights reserved.
                </p>
            </div>
        </footer>
    
        
        
        <script src="https://cdnjs.cloudflare.com/ajax/libs/respond.js/1.4.2/respond.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/selectivizr/1.0.2/selectivizr-min.js"></script>
        
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="vendors/js/jquery.waypoints.min.js"></script>
        <script src="http://maps.google.com/maps/api/js"></script>
        
        <script src="resources/js/script.js" ></script>   
        <script src="resources/js/gmaps.js"></script>
        
    </body>
    
    
    
</html>

