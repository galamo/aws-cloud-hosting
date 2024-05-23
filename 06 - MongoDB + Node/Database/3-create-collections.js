// Creating new collections inside northwind database.
// This file must run after northwind user has been created, thus it starts with "3-".

(async () => {

    // Connect to northwind using MongoShell global commands (available here) with the created user:
    const db = connect("mongodb://Alice:Wonderland@127.0.0.1:27017/northwind");

    // Create "genders" collection (can send options as second parameter if needed) and insert documents:
    await db.createCollection("genders");
    await db.genders.insertOne({ gender: "Male" });
    await db.genders.insertOne({ gender: "Female" });

    // Create cities collection and insert documents (can use also insertOne instead):
    await db.cities.insertMany([
        { cityName: "Tel Aviv" },
        { cityName: "Jerusalem" },
        { cityName: "Haifa" }
    ]);

    // Print success message (console.log won't work here):
    print("Weeeeee - successfully created collections.");

})();
