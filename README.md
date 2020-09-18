## My Cafe Memories

This is a social network site for users to share memories of their cafes.


The goal for the user is to share their cafe memories with other like-minded people, who would like to explore and find an ideal cafe for themselves.
Also, they can look at their cafe memories, go back to their memories, and it's good to see good memories of their cafes.
They can choose either private or public for each memory, so they don't have to be worried about showing all the images they want to store for themselves.

In the future, this will give me an opportunity to ask cafe owners to provide their information by themselves, and also coupon code for their customers.


<ul>
<li>A non-user can browse this website to see everyone's cafe memories.</li>
<li>If they become an user, they will be able to add their cafe memories.</li>
<li>They can add their memories from "Add memory" page. </li>
<li>They can search the cafe names by auto complete. </li>
<li>They can add cafe name(auto-complete), description, photo link, rating(1 to 5), Date(datepicker).</li>
<li>If they are unable to find the cafe, they can add a cafe from "Add cafe" page.</li>
<li>On "Add cafe" page, they can add area name(auto-complete), cafe name, website, postal address, postcode, photo link, and youtube link(optional).
</li>
<li>They can also browse and edit/ delete cafes from "Manage cafes" page.</li>
</ul>


## Deployed page is available here
http://milestone3-data-centric-mlk.herokuapp.com/


## Wireframe

https://github.com/machikolacey/milestone3/blob/master/pdf/wireframe-ny-cafe-memories.pdf


## UX

If they haven't visited the website (detected by cookie), the homepage displays a modal popup to describe what this website for.
This navigates an user to either registration page or login page, or if they decide not to register, just closes the popup.

The steps:
 
 If register:

<ol>
<li>The user can add username and password to register their account</li>
<li>It will navigate the user to "Edit your profile" page</li>
<li>If they want to add their image, they can click on "Edit" button to go to "Edit your profile" page</li>
<li>The user can add their image by adding link to their image</li>
<li>Click on "Save" to go to "Everyone's memories" page</li>
</ol>


 If login:

<ol>
<li>An user can fill in the form to go to "Your cafe memories" page</li>
<li>It will navigate the user to "Edit your profile" page</li>
<li>On the page, they can click on "Add your memory" button to fo to "Add your cafe memory" page</li>
<li>On the page, they can add the cafe name, description, photo link, ratings, and date. Also they can choose if this memory is private(display to the user only)</li>
<li>By clicking on "Save", go to "Your cafe memories" page</li>
<li>The user can see their memory is added on the page</li>
<li>The user can edit or delete the memory by clicking on the buttons</li>
<li>The user can add or edit cafe information</li>
</ol>



## Features


### Existing Features

<ul>
<li><b>Feature 1</b> - allows users browsing all the posted memories, by visiting home "Everyone's memories" page</li>
<li><b>Feature 2</b> - allows users reading cafe information by clicking the image and name of the cafe </li>
<li><b>Feature 3</b> - allows users adding & editing cafe information, cafe memory by filling in the forms</li>
<li><b>Feature 4</b> - allows users adding & editing their cafe memory by filling 'Add memory' form</li>
<li><b>Feature 5</b> - Auto complete - allows users to search for the area & cafe name by inserting text in the input</li>
<li><b>Feature 6</b> - Photos - they can add their photos by adding a link from a photo cloud (such as https://cloudinary.com/)</li>
<li><b>Feature 7</b> - Sort - users can sort by date, cafe name, and rating</li>
<li><b>Feature 8</b> - Pagination - users can browse cafe memories and cafe informations using pagination, so they can easily navigate through the list</li>
</ul>


### Features Left to Implement
- I would like to categorise cafes
- I would like to add more user information and user role - so cafe owner has more privilage to add their cafe information and also coupon code
- I would like to add coupon provided by cafe owners. This will potentially we can provide a package for cafe owners to have their subscriptions, give them ability to add campaigns targeting cafe freaks. 
- I would like to add a facility to give users more coupon code, when they contribute to this website by adding more memories. Hopefully we can provide subscriptions packages for them so they can benefit from sharing their memories.


## Technologies Used


###  Back-end 
<ul>
<li><a href="https://www.python.org/" rel="nofollow">Python</a></li>
<li><a href="https://flask.palletsprojects.com/en/1.1.x/" rel="nofollow">Flask</a> - For pagination, etc</li>
<li><a href="https://pypi.org/project/dnspython/" rel="nofollow">Dnspython</a></li>
<li><a href="https://www.heroku.com" rel="nofollow">Heroku</a> </li>
<li><a href="https://www.mongodb.com/cloud/atlas" rel="nofollow">Mongo DB Atlas</a> - non relational, NO-SQL Database</li>
</ul>


###  Front-end 
<ul>
<li><a href="https://www.javascript.com/" rel="nofollow">Javascript</a></li>
<li><a href="https://jquery.com/" rel="nofollow">Jquery</a></li>
<li><a href="https://getbootstrap.com/" rel="nofollow">Bootstrap</a></li>
<li><a href="https://materializecss.com/" rel="nofollow">Materialize</a> - for clean front-end design</li>
</ul>


       
## Testing
This code was tested by using PC, tablet, and android phone, also using Google Chrome's Responsive Tester. This repository was tested by peer code review channel on Code Institute's community on Slack.

Also, this was run through these validators.

<ul>
<li><a href="https://jigsaw.w3.org/css-validator/" target="_blank">CSS Validation Service</a></li>
<li><a href="https://validator.w3.org/" target="_blank">Markup Validation Service</a></li>
<li><a href="https://jshint.com/" target="_blank">JS Hint</a></li>
</ul>

<h3>User Stories</h3>
If register:

<ol>
<li>The user can add username and password to register their account</li>
<li>It will navigate the user to "Edit your profile" page</li>
<li>If they want to add their image, they can click on "Edit" button to go to "Edit your profile" page</li>
<li>The user can add their image by adding link to their image</li>
<li>Click on "Save" to go to "Everyone's memories" page</li>
</ol>


 If login:

<ol>
<li>An user can fill in the form to go to "Your cafe memories" page</li>
<li>It will navigate the user to "Edit your profile" page</li>
<li>On the page, they can click on "Add your memory" button to fo to "Add your cafe memory" page</li>
<li>On the page, they can add the cafe name, description, photo link, ratings, and date. Also they can choose if this memory is private(display to the user only)</li>
<li>By clicking on "Save", go to "Your cafe memories" page</li>
<li>The user can see their memory is added on the page</li>
<li>The user can edit or delete the memory by clicking on the buttons</li>
<li>The user can add or edit cafe information</li>
</ol>



## Deployment

My repository can be found on Github. I used HTML, CSS and javascript and no database.

The page is deployed by Github pages. There is only master branch. 

There is no past versions to look at so far. Deployed page is found here:
https://milestone3-data-centric-mlk.herokuapp.com/

To run this reponsitory locally, you could
<ul>
<li>Follow the respository link above to the GitHub Dashboard, and click on "Clone" or "Download".</li>
<li>If you "Clone", initialize git on your local environment's folder and clone the file by pasting the copied command on your command line.</li>
<li>If you "Downlowd" expand and copy all the files downloaded into the folder in your chosen development environment.</li>
</ul>


## Credits

### Content
- All the marker icons are made by Machiko Lacey-Kimura.

- Descriptions, address, details are taken from:

https://www.google.co.uk/maps
https://www.facebook.com


### Media
- The photos and texts used in this website are taken from:
https://restaurantsbrighton.co.uk
https://www.getawriggleon.com
https://www.brighton-hove.gov.uk/
https://www.atlasobscura.com/places/the-goldstone-hove-england
https://www.facebook.com

- The videos used in this website are taken from:
https://www.youtube.com/



### Acknowledgements

- I received inspiration for this project from a resume project provided by Code Institute.

