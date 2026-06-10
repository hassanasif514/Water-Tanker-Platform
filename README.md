# Water-Tanker-Platform

# &#x20;Water Tanker Booking and Water Shortage Reporting Platform

A full-stack web application for verified water tanker booking, water shortage reporting, vendor management, order tracking, complaints, ratings, and AI-assisted analytics for Islamabad and Rawalpindi.

The platform is designed to solve the problem of unreliable and informal water tanker booking by providing verified vendors, transparent order tracking, shortage reporting, customer-side delivery confirmation, and admin-controlled vendor assignment.

---

## Table of Contents

* [Project Overview](#project-overview)
* [Problem Statement](#problem-statement)
* [Core Features](#core-features)
* [User Roles](#user-roles)
* [System Architecture](#system-architecture)
* [Technology Stack](#technology-stack)
* [Project Structure](#project-structure)
* [Feature Modules](#feature-modules)
* [AI and Analytics Features](#ai-and-analytics-features)
* [Database Overview](#database-overview)
* [Installation and Setup](#installation-and-setup)
* [Environment Variables](#environment-variables)
* [Running the Project](#running-the-project)
* [Docker Setup](#docker-setup)
* [Git Workflow](#git-workflow)
* [Testing](#testing)
* [Deployment Plan](#deployment-plan)
* [10-Week Development Plan](#10-week-development-plan)
* [Future Enhancements](#future-enhancements)

---

## Project Overview

This project is a web-based platform that allows residents, societies, apartments, and housing colonies to book verified water tankers and report water shortages.

The platform includes three main dashboards:

1. Customer / Society Manager Dashboard
2. Admin / Dispatcher Dashboard
3. Vendor / Driver Dashboard

The system supports tanker booking, society bulk orders, delivery tracking, vendor verification, shortage reporting, complaint handling, ratings, live location tracking, and AI-assisted analytics.

---

## Problem Statement

Islamabad and Rawalpindi face recurring water shortages, especially during summer. Many residents rely on private tanker vendors, but the current process is mostly informal and unreliable.

Common problems include:

* Lack of verified tanker vendors
* No transparent pricing
* Difficulty comparing vendors
* No proper order tracking
* Delayed or cancelled deliveries
* Overcharging
* No structured complaint system
* No reliable shortage reporting system
* No data-driven way to identify high-demand or shortage-prone areas

This platform aims to improve trust, transparency, and operational efficiency in the water tanker booking process.

---

## Core Features

### Customer Features

* User registration and login
* Role-based dashboard access
* Save delivery addresses
* Book water tanker
* Place resident tanker order
* Place society bulk tanker order
* View order history
* Track order using tracking code
* View order status timeline
* View assigned vendor and vehicle details
* Confirm delivery from customer dashboard
* Submit rating after delivery
* Submit complaint
* Report water shortage
* View in-app notifications

---

### Admin / Dispatcher Features

* View all orders
* Filter orders by status, area, urgency, vendor, and date
* Assign vendor manually
* Assign vehicle and driver
* Edit or confirm price
* Manage vendors
* Verify vendor details
* Manage vehicles and drivers
* Review shortage reports
* Mark shortage reports as verified, duplicate, or rejected
* Manage complaints
* View vendor performance
* View statistics dashboard
* View AI price prediction
* View AI demand forecasting
* View AI shortage pinpointing
* View AI vendor ranking
* Approve AI-based vendor recommendation

---

### Vendor / Driver Features

* Vendor login
* View assigned orders
* Accept or reject assigned orders
* Update delivery status
* Mark tanker filling
* Mark order as on the way
* Share live location
* Mark order as arrived
* Manage availability
* Manage tanker vehicles
* Manage driver details

---

## User Roles

The system supports the following user roles:

| Role               | Description                                                          |
| ------------------ | -------------------------------------------------------------------- |
| Customer           | Books tankers, tracks orders, reports shortages, rates vendors       |
| Society Manager    | Places bulk tanker orders for societies, apartments, or buildings    |
| Admin / Dispatcher | Manages orders, vendors, complaints, reports, pricing, and analytics |
| Vendor             | Accepts and fulfils assigned tanker orders                           |
| Driver             | Handles delivery and location updates                                |

---

## System Architecture

The system follows a **modular monolithic architecture**.

The backend is developed as a single Express.js application, but the codebase is divided into separate modules such as authentication, customer operations, admin operations, vendor operations, orders, complaints, shortage reports, notifications, live tracking, and AI analytics.

This architecture is suitable for the MVP and 10-week project timeline because it is easier to build, test, debug, and deploy.

In the future, if the platform grows to a larger scale, selected modules such as notifications, AI analytics, live tracking, or payments can be separated into microservices.

---

## Technology Stack

### Frontend

* React.js
* Tailwind CSS
* React Router
* Axios / Fetch API

### Backend

* Node.js
* Express.js
* JWT Authentication
* REST APIs

### Database

* MySQL

### DevOps and Deployment

* Git
* GitHub
* GitHub Actions
* Docker
* AWS

### AI / Analytics

* Rule-based analytics for MVP
* AI-assisted insights using real database records
* Future integration with ML/AI APIs

---

## Project Structure

```txt
water-tanker-platform/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── layouts/
│   │   ├── pages/
│   │   │   ├── auth/
│   │   │   ├── customer/
│   │   │   ├── admin/
│   │   │   └── vendor/
│   │   ├── services/
│   │   ├── hooks/
│   │   ├── utils/
│   │   ├── routes/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── Dockerfile
│
├── server/
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js
│   │   ├── routes/
│   │   │   ├── authRoutes.js
│   │   │   ├── customerRoutes.js
│   │   │   ├── adminRoutes.js
│   │   │   ├── vendorRoutes.js
│   │   │   └── aiRoutes.js
│   │   ├── controllers/
│   │   │   ├── authController.js
│   │   │   ├── customerController.js
│   │   │   ├── adminController.js
│   │   │   ├── vendorController.js
│   │   │   └── aiController.js
│   │   ├── services/
│   │   │   ├── authService.js
│   │   │   ├── orderService.js
│   │   │   ├── vendorService.js
│   │   │   ├── notificationService.js
│   │   │   └── aiService.js
│   │   ├── middleware/
│   │   │   ├── authMiddleware.js
│   │   │   ├── roleMiddleware.js
│   │   │   └── errorMiddleware.js
│   │   ├── utils/
│   │   ├── app.js
│   │   └── server.js
│   ├── package.json
│   └── Dockerfile
│
├── database/
│   └── schema.sql
│
├── docs/
│   ├── SRS.md
│   ├── ERD.md
│   ├── flow-diagrams.md
│   └── weekly-progress.md
│
├── .github/
│   └── workflows/
│       └── ci.yml
│
├── docker-compose.yml
├── .gitignore
├── README.md
└── package.json
```

---

## Feature Modules

### 1. Authentication Module

The authentication module handles user registration, login, password validation, JWT generation, and role-based access.

Main actions:

* Register user
* Login user
* Validate credentials
* Generate authentication token
* Redirect user based on role
* Protect dashboard routes

Roles supported:

* Customer
* Society Manager
* Admin / Dispatcher
* Vendor
* Driver

---

### 2. Customer Address Management

Customers can save one or more delivery addresses.

Address details include:

* Area
* Sector
* Street or block
* Full address
* Optional notes
* Optional location coordinates

Saved addresses are used during tanker booking.

---

### 3. Tanker Booking Module

Customers can place tanker booking requests.

Booking details include:

* Address
* Tanker size
* Tanker quantity
* Required delivery time
* Urgency
* Notes
* Order type

Order types:

1. Resident Order
2. Society Bulk Order

When an order is created, the backend generates a unique tracking code and saves the order with `Pending` status.

---

### 4. Society Bulk Order Module

Society managers can place bulk tanker orders for societies, apartments, or buildings.

Bulk order details include:

* Society or building name
* Delivery point
* Tanker size
* Number of tankers required
* Required time
* Urgency
* Notes

For the MVP, bulk ordering uses a quantity field. Advanced versions may allow multiple tanker sizes in one order.

---

### 5. Admin Order Management

Admins can view and manage all tanker orders.

Admin actions include:

* View pending orders
* Assign vendor
* Assign vehicle
* Assign driver
* Confirm or edit price
* Update order status
* Cancel order
* View order timeline
* Use AI vendor recommendation

---

### 6. Vendor Assignment Module

Orders are assigned to vendors by admins.

Assignment can be:

1. Manual Assignment
2. AI Recommended Assignment with Admin Approval

The system checks:

* Vendor service area
* Vendor availability
* Vehicle availability
* Driver availability
* Vendor rating
* Complaint history
* Queue length

---

### 7. Vendor Dashboard Module

Vendors can view assigned orders and update delivery status.

Vendor order statuses include:

* Assigned
* Accepted
* Tanker Filling
* On the Way
* Arrived
* Delivered
* Cancelled

For MVP, final delivery confirmation is done by the customer from the tracking page.

---

### 8. Live Tracking Module

Live tracking allows customers to see the latest tanker location after the vendor marks the order as `On the Way`.

How it works:

1. Vendor marks order as `On the Way`.
2. Vendor enables live location sharing.
3. Browser requests location permission.
4. Vendor location is sent to the backend.
5. Backend stores location updates in MySQL.
6. Customer tracking page displays the latest location.

MVP version:

* Latest latitude and longitude
* Last updated time
* Google Maps link

Advanced version:

* Embedded map
* Moving marker
* Realtime location updates

---

### 9. Customer Delivery Confirmation

For the MVP, delivery confirmation is customer-side.

Flow:

1. Vendor marks order as `Arrived`.
2. Customer receives in-app notification.
3. Customer opens tracking page.
4. Customer checks tanker/vendor details.
5. Customer clicks `Confirm Delivery`.
6. Backend verifies that the logged-in customer owns the order.
7. Order status changes to `Delivered`.
8. Customer can submit rating or complaint.

OTP-based delivery confirmation can be added later if stronger delivery proof is required.

---

### 10. Shortage Reporting Module

Customers can report water shortage issues.

Report fields include:

* Area
* Sector
* Street or block
* Issue type
* Severity
* Description
* Optional photo
* Optional location pin

Issue types include:

* No water supply
* Low pressure
* Dirty water
* Tank empty
* Tanker unavailable
* Overpriced tanker
* Repeated shortage

Admins can review reports and mark them as verified, duplicate, or rejected.

---

### 11. Complaint Management Module

Customers can file complaints against completed or problematic orders.

Complaint types include:

* Late delivery
* Overcharging
* Less water delivered
* Dirty tanker
* Bad behavior
* Wrong tanker size
* Cancelled after confirmation

Complaint statuses include:

* Open
* Vendor contacted
* Resolved
* Rejected
* Refund requested
* Vendor penalized

Complaints affect vendor performance scoring.

---

### 12. Rating Module

After delivery, customers can rate the vendor.

Rating categories include:

* Timeliness
* Price fairness
* Quantity accuracy
* Driver behavior
* Tanker condition
* Overall rating

Ratings are used in vendor ranking and performance dashboards.

---

### 13. Notification Module

The system provides in-app notifications.

Notification events include:

* New order created
* Vendor assigned
* Order accepted
* Tanker on the way
* Tanker arrived
* Delivery confirmed
* Complaint opened
* Complaint resolved
* High demand area alert

Future versions may support:

* SMS
* WhatsApp
* Email
* Browser push notifications

---

## AI and Analytics Features

AI features use real database records. The system should not generate fake values when real data is insufficient.

---

### 1. AI Price Prediction

The AI price prediction feature suggests a fair tanker price range.

It uses:

* Previous completed orders
* Manual price ranges
* Area
* Sector
* Tanker size
* Urgency
* Shortage reports in the area

MVP approach:

* Rule-based and statistical calculation
* Uses MySQL records
* Shows manual price range when data is insufficient

Output example:

* Minimum expected price
* Fair price
* Maximum expected price
* Reason for suggestion

---

### 2. Demand Forecasting

Demand forecasting predicts which areas may face higher tanker demand.

It uses:

* Recent orders
* Shortage reports
* Society bulk orders
* Area-wise demand
* Vendor availability
* Seasonal patterns, if available

MVP approach:

* Rule-based demand score
* Area-wise demand level: Low, Medium, High

Advanced approach:

* Machine learning forecasting model

---

### 3. Shortage Pinpointing

Shortage pinpointing identifies areas with repeated or severe shortage reports.

It uses:

* Area
* Sector
* Street or block
* Issue type
* Severity
* Time of report
* Optional location pin

The system groups reports and highlights repeated issues.

Example:

```txt
G-13/1 has repeated low-pressure reports.
I-14 has high tanker unavailability.
A specific society has repeated tank-empty complaints.
```

---

### 4. Vendor Ranking

Vendor ranking helps admins choose the best vendor for an order.

It uses:

* Average rating
* Completed orders
* Cancelled orders
* Complaint count
* Availability
* Queue length
* Verification status

The system recommends the best vendor, but admin approval is required in the MVP.

---

### 5. AI Analytics Assistant

The AI analytics assistant helps admins ask questions about platform data.

Example questions:

* Which area has the most shortage reports?
* Which vendor has the most complaints?
* Which sector has the highest demand?
* What is the fair price for a tanker in G-13?
* Which vendor should be assigned to this order?

The assistant should only use real database records.

---

## Database Overview

The project uses MySQL as the relational database.

Main tables include:

* users
* roles
* addresses
* societies
* vendors
* vehicles
* drivers
* service_areas
* orders
* order_status_events
* order_location_events
* shortage_reports
* complaints
* ratings
* price_ranges
* notifications
* ai_insights
* vendor_order_requests

No dummy data should be inserted into the database. Data should be created through real application actions.

---

## Installation and Setup

### Prerequisites

Install the following:

* Node.js
* npm
* MySQL
* Git
* Docker Desktop
* GitHub Desktop
* VS Code

---

### Clone the Repository

```bash
git clone https://github.com/your-username/water-tanker-platform.git
cd water-tanker-platform
```

---

### Install Frontend Dependencies

```bash
cd client
npm install
```

---

### Install Backend Dependencies

```bash
cd ../server
npm install
```

---

## Environment Variables

### Backend Environment

Create a `.env` file inside the `server` folder.

```env
PORT=5000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=water_tanker_platform
DB_PORT=3306

JWT_SECRET=your_jwt_secret

OPENAI_API_KEY=your_openai_api_key
OPENAI_MODEL=gpt-4.1-mini
```

---

### Frontend Environment

Create a `.env` file inside the `client` folder.

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

---

## Running the Project

### Run Backend

```bash
cd server
npm run dev
```

Backend will run on:

```txt
http://localhost:5000
```

---

### Run Frontend

Open a new terminal:

```bash
cd client
npm run dev
```

Frontend will run on:

```txt
http://localhost:5173
```

---

## Docker Setup

The project will use Docker for containerized development and deployment.

Expected Docker files:

```txt
client/Dockerfile
server/Dockerfile
docker-compose.yml
```

Run using:

```bash
docker compose up --build
```

Docker services:

* React frontend
* Express backend
* MySQL database, optional local container

---

## Git Workflow

The project uses Git and GitHub for version control.

Recommended branch naming:

```txt
feature/auth-login-signup
feature/customer-address
feature/tanker-booking
feature/admin-order-management
feature/vendor-dashboard
feature/shortage-reporting
feature/ai-analytics
```

Recommended commit messages:

```txt
Initial project setup
Add MySQL database schema
Add authentication module
Add customer address feature
Add tanker booking feature
Add admin order assignment
Add vendor dashboard
Add shortage reporting module
Add AI analytics module
```

---

## Testing

Testing will include:

* Authentication tests
* API validation tests
* Order creation tests
* Role-based access tests
* Vendor assignment tests
* Order status update tests
* Complaint and rating tests
* AI calculation tests

Suggested testing tools:

* Jest
* Supertest
* React Testing Library

---

## Deployment Plan

The project is planned for AWS deployment.

Possible deployment approach:

### Frontend

* AWS S3 + CloudFront
* or AWS Amplify

### Backend

* AWS App Runner
* or AWS Elastic Beanstalk
* or AWS EC2

### Database

* MySQL on AWS RDS
* or local/development MySQL during MVP

---

## 10-Week Development Plan

### Week 1

* Set up MySQL database for core modules
* Connect MySQL database with Express.js backend
* Create login and sign-up functionality
* Implement role-based dashboard routing
* Create customer address management feature
* Create basic tanker booking feature

### Week 2

* Complete customer dashboard
* Add resident tanker booking flow
* Add society bulk booking flow
* Generate backend tracking code
* Save order status history

### Week 3

* Build admin order management
* View pending orders
* Add manual vendor assignment
* Assign price, vehicle, and driver

### Week 4

* Build vendor dashboard
* Add order acceptance
* Add delivery status updates
* Notify customer about order progress

### Week 5

* Add order tracking page
* Add customer-side delivery confirmation
* Add rating and complaint options

### Week 6

* Add shortage reporting
* Add admin shortage review
* Add shortage report grouping by area

### Week 7

* Add vendor verification
* Add vehicle and driver management
* Add vehicle availability lifecycle

### Week 8

* Add statistics dashboard
* Add AI price prediction
* Add demand forecasting
* Add shortage pinpointing

### Week 9

* Add AI vendor ranking
* Add admin-approved AI vendor recommendation
* Add in-app notifications

### Week 10

* Add testing
* Add Docker setup
* Add GitHub Actions CI
* Prepare AWS deployment plan
* Final documentation and demo

---

## Future Enhancements

* WhatsApp booking
* SMS alerts
* Payment gateway
* Advanced Google Maps live tracking
* Vendor bidding system
* Mobile app
* Advanced AI price prediction
* Machine learning demand forecasting
* Image verification for complaints
* Water quality verification through lab partnership
* Society monthly water usage reports
* Public shortage heatmap

---

## Current Project Status

The project is currently in the initial development phase.

Current focus:

* MySQL database setup
* Backend database connection
* Login and sign-up pages
* Role-based dashboard routing
* Customer address management
* Basic tanker booking feature

---

## License

This project is developed for academic and learning purposes.

---

## Author

**Project:** Verified Water Tanker Booking and Water Shortage Reporting Platform
**Developer:** Abdullah Basit
**Location:** Islamabad / Rawalpindi, Pakistan
