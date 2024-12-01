Wk9 Assignments

I achieved the requirements apart from adding a Radix UI or similar. I tried 3 types of component - a form, a delete alert and a selector/drop-down list from Next.js. I searched for solutions to the errors without success.

In addition, my all-users profile page will only show the signed-in users profile. I have two profile pages, one for the signed-in user to see, change their details and delete posts, and the second is for all users (if you are signed-in). The second page should show profile information (with no edit or delete buttons) for the user you click on in the Posts page. It should also have the username, not the clerk_id. I'm sure with a bit more time, I'd get this sorted. I've been getting confused with the pages.

There is a working 404 page. It shows when I make an error, but not when I try and force it. See "error.js". I have replicated this as a page when you click on "comments" in the header, but this is technically not an error - it's there as an example.

At the bottom of /posts/page you can see code I inially used to show the userform or postform, however, I didn't feel the flow was right and my page now does:
// if user is signed-in (===1) shows PostForm.
// if user is not signed-in it prompts to sign-in in order to post
I've also left the unused UserForm component in the file.

Similar to last week, my Stretch goals would be:
To have a filter/search/sort function.
Include a tailwind hero styling page.
To have a dropdown option to find your favourite villager and a link to an image of the villager and his/her stats (e.g type of villager/animal, birthday, favourite saying, how rare they are) - like top trumps. I now have access to the Nookipedia API that contains all Animal Crossing data.

I spent quite a while amending week 8's version to use as a base for week 9. I'd like to add in comments that display on the same page as the posts. I did manage to reduce the number of pages by combining the posts and post form pages into one, achieved by moving the post form into components. My delete button works nicely this week!

I'm a little disapointed I didn't get further with this assignment. I've not finished it yet and I'd like to bring in the Nookipedia API now SuperHamster has given me a key.

Thank you
Liz
