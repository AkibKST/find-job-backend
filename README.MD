# Find job portal system backend.

---

# Documentation:

# --Live Demo:

# \_\_\_Frontend: https://find-job-ffde3.web.app

# \_\_\_Backend: https://find-job-server-lxnesn19j-akibul-islams-projects.vercel.app

## Project Name: Find job portal system backend.

## I have been assigned the task of building the backend for a find job portal System. The main focus of this project is to implement error handling, CRUD operations, authentication, and authorization, Transaction & Rollback (If necessary)

### Story

CAREER-CODE: A JOB PORTAL SYSTEM
A comprehensive job portal platform designed to enable seamless interaction between job seekers and employers. The system provides full CRUD operations for managing job postings, user authentication, and streamlined job application processes.

**Models:**

1. **Job Model**
2. **Job Application Model**

### Technology Stack:

- **Programming Language**: TypeScript
- **Web Framework**: Express.js
- **ODM & Validation Library**: Zod, Mongoose for MongoDB

### 🌟 Project Purpose

The purpose of this project is to assess skills, creativity, and problem-solving abilities while providing an efficient recruitment and job application experience.

### 💡 Key Features

# Authentication System: Email/password login, Google login, account recovery, and protected routes.

- Job Management: Add, update, delete, and view job postings.
- Job Search & Filters: Search jobs by title and filter by job type, experience level, and salary range.
- Job Applications: Apply for jobs with detailed forms and manage your applications.
- Employer Tools: Employers can review applications, update jobs, and manage postings.
- Error Handling: User-friendly error messages and loading indicators.
- Session Management: Secure session management with JWT tokens.

### 🖌️ Application Pages

## Public Pages

# Home Page (/): Displays Name.

# All Jobs (/api/job/getAllJobs): View all jobs, search, filter, and sort by deadline.

### Protected Pages

# Add Job (/api/job/createJob): Form for creating job postings with employer details.

# Get Single Job (/api/job/getSingleJob/:id)

# Get Specific Job by User (/api/job/getAllJobs?email=hr@innovatetech.com)

# Create Job Application (/api/jobApplication/createJobApplication): create a job application by user.

# Get My Job Application (/api/jobApplication/UserJobApplication?email=error@debug.com)

# Get Job Application By Job Id (/api/jobApplication/jobs/:id)

### 📂 Architecture

### Navbar: Includes company logo, navigation links, user info, and authentication controls.

### Footer: Displays company information, policies, and social links.

### Dynamic Routing: Main section renders pages based on routes.

### 🛠️ Technologies Used

### Frontend: React.js, Tailwind CSS, DaisyUI

### Backend: Node.js, Express.js, Typescript, Mongoose

### Database: MongoDB

### Authentication: Firebase Auth, Google Authentication

### Deployment: vercel CLI

### Version Control: GitHub

### 🚀 Features Checklist

- Authentication System
- User registration and login with email/password or Google Authentication.
- Password recovery system with input validation.
- Protected routes for all pages except landing and authentication pages.
- Job Functionality
- Full CRUD operations for jobs.
- Search and filter by job type, experience level, and salary range.
- Sort by application deadline.
- Application Process
- Form for submitting applications with personal and job-specific details.
- Manage applications with withdrawal options.
- Employer Tools
- View, edit, and delete job postings.
- Review applications with dropdown actions (Rejected, Shortlisted, Hired, Scheduled).
- Security
- Secure session management with JWT tokens.
- Authorization for API routes.

### 📜 Best Practices Followed

### 🧹 Code Quality

# Modular Code: Code is divided into reusable components and modules for better maintainability.

# Clean and Readable: Proper indentation, meaningful variable names, and comments for clarity.

# DRY Principle: Reused logic to avoid redundancy and ensure maintainability.

# Consistent Naming Conventions: Followed camelCase for variables and functions, and PascalCase for components.

### 🚦 Error Handling

- Frontend Errors: Clear and user-friendly error messages are displayed for invalid inputs, failed requests, or other issues.
- Backend Errors: Properly structured error responses with HTTP status codes.
- Boundary Testing: Validations to handle edge cases and ensure application stability.

### 🔒 Security

- JWT Authentication: Used secure JSON Web Tokens to protect API endpoints and user sessions.
- Input Validation: Sanitized and validated user inputs to prevent security vulnerabilities like XSS and SQL injection.
- Protected Routes: Ensured sensitive pages and APIs are accessible only to authenticated users.

### 🖌️ Responsive Design

- Mobile-First Approach: Designed the UI to adapt seamlessly to various screen sizes.
- Scalable Layouts: Used flexible grid systems (Tailwind CSS) to ensure cross-device compatibility.
- Accessible UI: Followed web accessibility standards to enhance usability for all users.

### 📂 Project Organization

- Folder Structure: Followed a clear folder structure separating components, pages, services, and assets.
- Meaningful Commits: Used descriptive commit messages to track changes effectively.
- README Documentation: Added detailed instructions for setting up, running, and understanding the project.

### ⚡ Performance Optimization

- Lazy Loading: Dynamically loaded components to improve initial page load speed.
- Efficient State Management: Used local state and React Query to manage data efficiently.
- Reduced Re-renders: Optimized components to prevent unnecessary re-renders for better performance.

### 🌐 Deployment

# Error-Free Hosting: Ensured the deployed application is free of runtime errors.

# Live Updates: Automatically updates changes on the live application through CI/CD pipelines.

# Environment Variables: Secured sensitive data using .env files.

### ✅ Testing

- Manual Testing: Tested all user flows to ensure the app functions as intended.
- Error Scenarios: Simulated errors to verify the robustness of error-handling mechanisms.
- These practices ensure that the project is scalable, maintainable, and user-friendly. 🚀

### 📜 License

This project is licensed under the MIT License.
You are free to use, modify, and distribute this project under the terms of the license.

### 📄 MIT License

### Middleware and Error Handling:

1. **No Data Found**:
   - When finding data, if the database collection is empty or does not match any data, return a generic message: "No data found."
     - **Response**:
       ```json
       {
         "success": false,
         "message": "No Data Found",
         "data": []
       }
       ```
2. **Error Handling**:

   - Implement proper error handling throughout the application. Use global error handling middleware to catch and handle errors, providing appropriate error responses error messages.
   - Error Response Object should include the following properties:

     - **success**: false
     - **message**: Error Type (e.g., Validation Error, Cast Error, Duplicate Entry)
     - **errorMessages**:
       ```json
       [
         {
           "path": "",
           "message": "Error message"
         }
       ]
       ```
     - **Sample Error Response**:

       ```json
       {
         "success": false,
         "message": "E11000 duplicate key error collection:: email_1 dup key: { email: \\"user2@gmail.com\\" }",
         "errorMessages": [
           {
             "path": "",
             "message": "E11000 duplicate key error index: email_1 dup key: { email: \\"user2@gmail.com\\" }"
           }
         ],
         "stack": "error stack"
       }

       ```

3. **Not Found Route**:
   - Implement a global "Not Found" handler for unmatched routes. When a route is not found, respond with a generic message: "Not Found."
     - **Response**:
       ```json
       {
         "success": false,
         "statusCode": 404,
         "message": "Not Found"
       }
       ```

### **4\. Authentication Middleware:**

Implement an Authentication Middleware to authenticate your application. Ensures that only user and admin can access their own accessible routes.

```json
{
  "success": false,
  "statusCode": 401,
  "message": "You have no access to this route"
}
```

### **5\. Zod Validation:**

The API employs Zod for input validation, ensuring data consistency. When validation fails, a 400 Bad Request status code is returned, accompanied by detailed error messages specifying the erroneous fields and reasons.
