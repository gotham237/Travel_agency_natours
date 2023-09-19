# Natours - An awesome tour booking site built on top of NodeJS.
Built with modern technologies: Node.js, Express, MongoDb, mongoose. Created tests in Cypress.
# Features
- Authentication and Authorization:
  - Sign up, Log in, Logout, Update, and reset password.
- User profile:
  - Update username, photo, email, password, and other information
  - A user can be either a regular user or an admin or a lead guide or a guide.
  - When a user signs up, that user by default regular user.
- Tour:
  - Manage booking, check tour map, check users' reviews and rating
  - Tours can be created by an admin user or a lead-guide.
  - Tours can be seen by every user.
  - Tours can be updated by an admin user or a lead guide.
  - Tours can be deleted by an admin user or a lead-guide.
- Bookings:
  - Only regular users can book tours (make a payment).
  - Regular users can not book the same tour twice.
  - Regular users can see all the tours they have booked.
  - An admin user or a lead guide can see every booking on the app.
  - An admin user or a lead guide can delete any booking.
  - An admin user or a lead guide can create a booking (manually, without payment).
  - An admin user or a lead guide can not create a booking for the same user twice.
  - An admin user or a lead guide can edit any booking.
- Reviews:
  - Only regular users can write reviews for tours that they have booked.
  - All users can see the reviews of each tour.
  - Regular users can edit and delete their own reviews.
  - Regular users can not review the same tour twice.
  - An admin can delete any review.
- Favorite Tours:
  - A regular user can add any of their booked tours to their list of favorite tours.
  - A regular user can remove a tour from their list of favorite tours.
  - A regular user can not add a tour to their list of favorite tours when it is already a favorite.
- Credit card Payment
# Preview
Home Page:
https://github.com/gotham237/Travel_agency_natours/assets/86183687/86c872e4-4c68-4b99-9172-7bb6523af993
![image](https://github.com/gotham237/Travel_agency_natours/assets/86183687/3255f187-f4f3-435f-bd44-74900d861f62)

Tour Details:
https://github.com/gotham237/Travel_agency_natours/assets/86183687/ecfd5a91-f046-4858-95ca-6260bebf4939
![image](https://github.com/gotham237/Travel_agency_natours/assets/86183687/05f83e2d-66fb-43f8-8d88-14b2c8e61df6)

Stripe Payment:
![image](https://github.com/gotham237/Travel_agency_natours/assets/86183687/c281250f-6fbd-4632-9194-3f47309ec573)

Profile:
![image](https://github.com/gotham237/Travel_agency_natours/assets/86183687/6f29b004-a54e-4267-9251-9bdf0149dc4f)

# Technologies
- NodeJS - JS runtime environment
- Express - The web framework used
- Mongoose - Object Data Modelling (ODM) library
- MongoDB Atlas - Cloud database service
- Pug - High performance template engine
- JSON Web Token - Security token
- ParcelJS - Blazing fast, zero configuration web application bundler
- Stripe - Online payment API and Making payments on the app.
- Postman - API testing
- Mailtrap & Sendgrid - Email delivery platform
- Mapbox - Displaying the different locations of each tour.

