

<img src="https://ga-core.s3.amazonaws.com/production/uploads/program/default_image/5225/JS-logo-official.png" style="max-width: 100px; border: none; box-shadow: none" />
## Class 15: Authentication

---
### Agenda
| Timing | Topic                                    |
| ------ | ---------------------------------------- |
| 5  min | Check In                                 |
| 50 min | Lab Review                               |
| 5  min | Break                                    |
| 15 min | Final Project Discussion                 |
| 30 min | Middleware                               |
| 5  min | Break                                    |
| 50 min | Authentication                           |
| 5  min | Closing Questions & Exit                 |

---
## Looking Ahead
| Lesson No. |        Topic             |
| ---------- | -----------------------  |
|   **15**   | **Authentication**       |
|     16     | Single Page Apps         |
|     17     | Deployment               |
|     18     | Final Project            |
|     19     | Presentations            |

---
## Final Projects
- Designing and building a web application of your choice
- check out https://gallery.generalassemb.ly/ for ideas!

--
### Important Deadlines
|  |  |
| ------------- | --------------------------------- |
| Oct 26th      | Idea Submission                   |
| Oct 31st      | UI Draft and Project Requirements |
| Nov 2nd       | In Class Lab Time                 |
| Nov 7th       | Due - Presentation                |

--
### Necessary Deliverables
- a production ready web application (live, on the web)
- a new git repository hosted on GitHub
- a 5-10 minute presentation including: 3 technical hurdles, 2 new things you learned, Q&A

--
### Project Feedback and Evaluation
- Technical Requirements
- Creativity
- Code Quality
- Problem Solving

---
## Middleware
Express is based on two things:
1. Routing
2. Middleware

--
### Middleware
Middleware is/are functions that have access to the request and response objects, and the next middleware function

--
### Sample Middleware function
```
function someMiddleware( req, res, next ) {
  // do some stuff to req and res

  next()
}
```

--
### Middleware
- Middleware can run whenever/wherever we need it to
- Lets see some examples

---
## Authentication

--
### Authentication
Authentication is the process of confirming and proving identity.

--
### Break out discussion
Challenge: we need to design a system that will take a user name and password once and then know from then on what a user is allowed to do in our application. <br>
(treat this like the planning exercise from our lab!)

--
### Break it down

--
### Build an application with it!
