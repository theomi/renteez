const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app");
const api = supertest(app);
const Listing = require("../models/listingModel");
const User = require("../models/userModel");
const listings = require("./data/listings");

let token = null;
let listingsInDb = null;

beforeAll(async () => {
  await User.deleteMany({});
  const result = await api.post("/api/signup").send({
    title: "Mr",
    first_name: "John",
    last_name: "Paul",
    email: "john@paul.fi",
    password: "abcABC123!",
    phone: "+3173189711",
  });
  token = result.body.token;
});

describe("Testing Lisiting API", () => {
  beforeEach(async () => {
    await Listing.deleteMany({});

    await Promise.all(
      listings.map(async (listing) => {
        await api
          .post("/api/listings")
          .set("Authorization", "bearer " + token)
          .send(listing);
      })
    );

    listingsInDb = await Listing.find({});
  });

  test("Getting user listings", async () => {
    const result = await api
      .get("/api/listings/userlistings/")
      .set("Authorization", "bearer " + token)
      .expect(200)
      .expect("Content-Type", /application\/json/);
    expect(result.body).toHaveLength(listings.length);
  });

  test("Getting a listing by id", async () => {
    const listingToGet = listingsInDb[0];
    await api
      .get(`/api/listings/${listingToGet._id.toString()}`)
      .set("Authorization", "bearer " + token)
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });

  test("Deleting a listing", async () => {
    const id = listingsInDb[0]._id.toString();
    const result = await api
      .delete(`/api/listings/${id}`)
      .set("Authorization", "bearer " + token)
      .expect(200);
    expect(result.body).toHaveProperty("message", id + " has been deleted");
  });

  test("Adding a listing with valid fields", async () => {
    const newListing = {
      title: "Condo in the centre of Stockholm",
      description: "It is really in Stockholm.",
      picture:
        "data:image/png;base64,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",
      address: "Somewhere in Sweden 12",
      postalCode: "10009",
      city: "Turkuu",
      surface: "23",
      roomCount: "2",
      rent: "888",
      charges: "111",
      transport: "1",
      elevator: "No",
      internet: "No",
      electricity: "No",
      water: "No",
      parking: "No",
      disability: "No",
    };
    await api
      .post("/api/listings")
      .set("Authorization", "bearer " + token)
      .send(newListing)
      .expect(201);
  });

  test("Not being able to add an invalid listing", async () => {
    const newListing = { invalidField: "invalidContent" };
    await api
      .post("/api/listings")
      .set("Authorization", "bearer " + token)
      .send(newListing)
      .expect(400);
  });

  test("Updating a specific listing", async () => {
    const listingToUpdate = listingsInDb[0];
    const updatedListingData = {
      address: "Outside Helsinki 1",
    };
    await api
      .patch(`/api/listings/${listingToUpdate._id.toString()}`)
      .set("Authorization", "bearer " + token)
      .send(updatedListingData)
      .expect(200);

    const updatedListing = await Listing.findById(
      listingToUpdate._id.toString()
    );
    expect(updatedListing).toMatchObject(updatedListingData);
  });
});

afterAll(() => {
  mongoose.connection.close();
});
