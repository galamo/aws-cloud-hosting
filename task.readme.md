Here’s a clear and structured **README / Lab Instructions** you can use for your Full Stack Developers Lab 👇

---

# 🧪 Full Stack Developers Lab  Loan Request Application

## 📋 Overview

In this lab, two developers will collaboratively build a simple **Loan Request Application** with a **backend API** and a **frontend UI**.
Each developer will work on a separate **Amazon EC2** instance:

* 🧑‍💻 **Developer 1** – Backend/API (Node.js + MySQL)
* 🧑‍💻 **Developer 2** – Frontend/UI (React)
* Dockerized applications
* 
The application simulates a **loan request system** where users submit loan applications to a bank.

---


## 📌 Business Requirements

1. Users should be able to **submit a loan request** containing:

   * `bankAccount` (string)
   * `name` (string)
   * `id` (string)
   * `amount` (number)

2. Loan requests are stored in a **MySQL database** with a status of `"PENDING"` by default.

3. Admin/API should be able to **approve a loan** using a secure token:

   * If the token is correct → update status to `"APPROVED"`.
   * If the token is invalid → return `401 Unauthorized`.

4. The UI should allow:

   * Submitting a new loan request.
   * Viewing loan status.

---

## 🧑‍💻 Developer 1 - Backend/API Instructions

### 🖥 Environment Setup

1. Launch an **EC2 instance** with Node.js installed.
2. Install and configure **MySQL**.
3. Expose necessary ports (e.g., 3000 for API, 3306 for DB if needed).

### 🗄 Database

Create a `loans` table with the following structure:

| Field       | Type          | Notes                         |
| ----------- | ------------- | ----------------------------- |
| id          | INT (PK)      | Auto Increment                |
| bankAccount | VARCHAR(50)   |                               |
| name        | VARCHAR(100)  |                               |
| amount      | DECIMAL(10,2) |                               |
| status      | VARCHAR(20)   | Default: `"PENDING"`          |
| created_at  | TIMESTAMP     | Default: CURRENT_TIMESTAMP    |

---

### 🧰 API Endpoints

#### `POST /submit-loan`

* **Description:** Creates a new loan request.
* **Request Body:**

  ```json
  {
    "bankAccount": "123456789",
    "name": "John Doe",
    "id": "A12345",
    "amount": 10000
  }
  ```
* **Response:**

  ```json
  {
    "message": "Loan request submitted",
    "loanId": 1
  }
  ```

#### `POST /approve-loan/:id`

* **Description:** Approves a loan if authorized.
* **Headers:** `Authorization: Bearer <TOKEN>`
* **Request Body:**

  ```json
  {
    "token": "<CONSTANT_TOKEN>"
  }
  ```
* **Response on success:**

  ```json
  {
    "message": "Loan approved"
  }
  ```
* **Response on failure:**

  ```json
  {
    "message": "Unauthorized"
  }
  ```

### 🔐 Notes

* Use a **hardcoded constant token** for simplicity, e.g. `TOKEN=abc123`.
* Validate the token before approving.
* Update `status` column to `"APPROVED"` on successful approval.

---

## 🧑‍💻 Developer 2 — Frontend/UI Instructions

### 🖥 Environment Setup

1. Launch a separate **EC2 instance** for the UI.
2. Use any frontend stack (HTML/CSS/JavaScript, React, Vue, etc.).
3. Configure CORS on backend to allow UI origin.

### 📄 UI Requirements

* A form to submit loan details (`bankAccount`, `name`, `id`, `amount`).
* A button to send the form to the backend API (`/submit-loan`).
* A section to show a **confirmation message** after submission.
* (Optional) A view to check the loan status after submission.

---

## 🔄 Integration Steps

1. **Developer 1** provides API base URL to **Developer 2**.

   * Example: `http://<backend-ec2-public-ip>:3000`

2. **Developer 2** Create React frontend application to point to this base URL for API calls.

3. Test the flow:

   * Submit loan via UI.
   * Verify record is created in DB with status `PENDING`.
   * in A diff page/route approve loan via API (`POST /approve-loan/:id` with correct token).
   * Check DB for updated status `APPROVED`.

---



## 📚 Deliverables

Working Application URL
---

## 🚀 Bonus

* Add GET `/loans` endpoint to list all loans.
* Add UI table to display loan list with statuses.
* Add simple login for loan approval.
* Containerize backend using Docker.

