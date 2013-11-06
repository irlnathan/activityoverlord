# activityOverlord
### a Sails application
This is a part of a series of screencasts which build a sails application from scratch.  You can follow the progress over at my github [sailscasts](http://irlnathan.github.io/sailscasts/) page.

A live version of the project is available at: (http://activityoverlord.herokuapp.com/)

- [Episode 1](http://irlnathan.github.io/sailscasts/blog/2013/08/20/building-a-sails-application-ep1-installing-sails-and-create-initial-project/ "Episode 1"): goes over installing sails and creating the initial sails project. 

- [Episode 2](http://irlnathan.github.io/sailscasts/blog/2013/08/21/building-a-sails-application-ep2-creating-a-sign-up-page/ "Episode 2"): Creating a Sign-up Page, ‘First-look’ at Routes, and Adding Twitter Bootstrap
 
- [Episode 2a](http://irlnathan.github.io/sailscasts/blog/2013/08/22/building-a-sails-application-ep2a-a-quick-supplement-to-some-stuff-i-forgot-to-mention-in-episode-2/): Added jquery, showed ya how to load jquery.js before bootstrap.js by changing Gruntfile.js, minor changes to layout.ejs and added a custom.less file to styles.

- [Episode 3[Updated]](http://irlnathan.github.io/sailscasts/blog/2013/08/25/building-a-sails-application-ep3-update-creating-a-user-model-and-controller/): Creating a user model and controller, creating a sign-up page, 'first-look' at sails blueprints.

- [Episode 4](http://localhost:4000/sailscasts/blog/2013/08/26/building-a-sails-application-ep4-creating-a-user-account/): Creating a user account and enabling csrf protection.

- [Episode 5](http://localhost:4000/sailscasts/blog/2013/08/27/building-a-sails-application-ep4-handling-validation-errors-with-a-flash-message/): Handling validation errors, creating a flash message and injecting it into the sign-up page.

- [Episode 6](http://localhost:4000/sailscasts/blog/2013/08/28/building-a-sails-application-ep5-creating-a-policy-and-adding-client-side-validation/): Creating a policy and adding client-side validation to the sign-up page.

- [Episode 7](http://irlnathan.github.io/sailscasts/blog/2013/08/28/building-a-sails-application-ep7-adding-a-show-action-a-dot-k-a-a-profile-page/): Create a show action which will be our very humble profile page.

- [Episode 8](http://irlnathan.github.io/sailscasts/blog/2013/08/28/building-a-sails-application-ep8-building-a-user-list/): You'll prevent html from being run on user generated content, create a user administrative page as well as flesh out the index, edit, and update action.

- [Episode 9](http://irlnathan.github.io/sailscasts/blog/2013/08/29/building-a-sails-application-ep9-deleting-a-user-account/): In episode 9 you'll create a delete action and implement a best practices methodolgy using a form with a hidden input field for deleting a user account.


- [Episode 10](http://irlnathan.github.io/sailscasts/blog/2013/08/30/building-a-sails-application-ep10-changing-databases-to-mongodb-with-sails-adapters/): In episode 10 you'll quickly switch out the application's underlying database to mongoDB with a few changes to the adapter configuration files.

**Special Note:** I moved the adapter configuration to local.js which is ignored by .gitignore, therefore, you'll have to make the changes specified on the video on your own.

- [Episode 11](http://irlnathan.github.io/sailscasts/blog/2013/08/30/building-a-sails-application-ep11-encrypting-passwords-with-bcrypt/): In episode 11 you start encrypting passwords with bcrypt.

- [Episode 12](http://irlnathan.github.io/sailscasts/blog/2013/08/31/building-a-sails-application-ep12-starting-a-project-in-the-middle-using-git-clone/): In episode 12 learn how to clone the activityOverlord project, install the necessary dependencies as well as tasks to get the application up and running from the github repository.

- [Episode 13](http://irlnathan.github.io/sailscasts/blog/2013/09/01/building-a-sails-application-ep13-sign-in-page/): In episode 13 learn how to create a sign-in page, create a session controller with a new action and take a relatively deep dive into understanding sessions.

- [Episode 14](http://irlnathan.github.io/sailscasts/blog/2013/09/02/building-a-sails-application-ep14-user-authentication-and-restricting-access-through-policies/): In episode 14 learn more about user authentication, creating the create and destroy actions of the session controller as well as restricting access to the application through the use of policies.

**Special Note:** There's an issue in this episode that requires one to be authenticated to create an account...oops. This issue was described in episode 16 and fixed in the Episode 16-17 commit. 

- [Episode 15](http://irlnathan.github.io/sailscasts/blog/2013/09/02/building-a-sails-application-ep15-improving-user-authenticated-navigation/): In episode 15 you’ll change the layout page to greatly improve post authentication navigation.

- [Episode 16](http://irlnathan.github.io/sailscasts/blog/2013/09/04/building-a-sails-application-ep16-fixing-and-issue-with-policies-from-episode-14/): In episode 16 you'll make a change to the policies and sign a user in when an account is created.  This will fix some stuff I forgot to do back in episode 14.

- [Episode 17](http://irlnathan.github.io/sailscasts/blog/2013/09/05/building-a-sails-application-ep17-creating-a-distinction-between-admin-and-regular-users/): In episode 17 you'll add a distinction between a regular user and an admin user through the use of additional policies.

- [Episode 17a](http://irlnathan.github.io/sailscasts/blog/2013/09/24/building-a-sails-application-ep17a-marshalling-request-parameters/): In episode 17a you'll fix an issue by marshalling request parameters, that allowed a user to inject html to create an admin user.

- [Episode 18](http://irlnathan.github.io/sailscasts/blog/2013/09/06/building-a-sails-application-ep18-understanding-web-sockets-and-socket-io-including-room-creation-and-management/): In episode 18 you'll get a better understanding of how web sockets and socket.io works using a chat example incorporating the concept of rooms.

**Special Note:** The repository for files used in this episode can be found at: (https://github.com/irlnathan/nodeChatSocket)

- [Episode 19](http://irlnathan.github.io/sailscasts/blog/2013/09/10/building-a-sails-application-ep19-create-the-necessary-ui-and-mechanics-for-sign-in-and-sign-out-in-preparation-for-using-web-sockets/): In episode 19 you'll create the necessary ui and mechanics for sign-in and sign-out in preparation for using web sockets.

- [Episode 20](http://irlnathan.github.io/sailscasts/blog/2013/09/15/episode-20-adding-real-time-events-to-models-in-4-lines-of-code/): In episode 20 you'll use an app to explore and understand how socket.io works within sails using a client side app that renders the majority of its views via ajax.  With four lines of code, the app monitors the user model and alerts any subscribing sockets with changes to the model.

- [Episode 21](http://irlnathan.github.io/sailscasts/blog/2013/10/10/building-a-sails-application-ep21-integrating-socket-dot-io-and-sails-with-custom-controller-actions-using-real-time-model-events/): In episode 21 you'll learn how to integrate socket.io and sails with custom controller actions using Real Time Model Events.

**Special Note:** Starting with Episode 21, you should be on sails v.0.9.7 are greater.

- [Episode 22](http://irlnathan.github.io/sailscasts/blog/2013/10/10/building-a-sails-application-ep22-manipulating-the-dom-based-upon-changes-via-real-time-model-events/): In episode 22 you'll learn how to manipulate the DOM within server rendered views based upon Real Time Model Events.

- [Episode 23](http://irlnathan.github.io/sailscasts/blog/2013/10/16/building-a-sails-application-ep23-adding-real-time-flash-messages-using-real-time-model-events/): In episode 23 you'll learn how to create real-time flash messages based upon real-time model events.

- [Episode 24](http://irlnathan.github.io/sailscasts/blog/2013/10/21/building-a-sails-application-ep24-correcting-a-publishupdate-event-and-adding-a-policy-to-the-user-controllers-subscribe-action/): In episode 24 you'll correct and issue with passing user.name to the publishUpdate method and add a policy to subscribe action of user controller.

- [Episode 25](http://irlnathan.github.io/sailscasts/blog/2013/10/25/building-a-sails-application-ep25-what-is-commonjs-in-relation-to-node-what-does-it-do-how-do-i-use-it/): In episode 25 you'll learn what CommonJS is, what it does, and how to use it.

- [Episode 26](http://irlnathan.github.io/sailscasts/blog/2013/11/05/building-a-sails-application-ep26-deploying-a-sails-app-to-heroku/): In episode 25 you'll learn how to deploy a sails app to heroku.

**Special Note:** A live version of the site is available at (activityoverlord.herokuapp.com)