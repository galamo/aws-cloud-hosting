// Creating MongoDB user for accessing northwind database.
// This file must run first, thus it starts with "1-".
// The MONGO_INITDB_ROOT_USERNAME and MONGO_INITDB_ROOT_PASSWORD gives credentials to admin database and not to northwind database.

// Connect to northwind using MongoShell global commands (available here):
const db = connect("mongodb://127.0.0.1:27017/northwind");

// Create a user for northwind:
db.createUser({
    user: "Alice",
    pwd: "Wonderland",
    roles: [{ db: "northwind", role: "readWrite" }]
});

// Print success message (console.log won't work here):
print("Weeeeee - successfully created user for northwind.");

// From now on, when accessing northwind, we must supply the above credentials.
