Project Context: Task manager application

1. Project Overview and Goals

This project is a task manager application based on an angular frontend and a nodejs+express backend, composed by microservices and an api gateway to route incoming requests.

Primary Goals:

Security: Prioritize secure and validated API endpoints.

Performance: Ensure all database queries are optimized for speed. Make us of indexes when needed.

Maintainability: All public functions must be clearly documented.

2. Technical Stack and Dependencies

Core Language: TypeScript (strict mode)

Framework: Angular (Front) and Node + Express in typescript (Backend)

Database: MySQL (using typeorm)

Styling: Tailwind CSS (for client-side components only)

Testing Framework: Jest

3. Architecture and Directory Structure

e2e/: End-to-end tests (use this folder for new integration tests).

Use modularity with components and angular tools available

On backend, split code with routes, controllers, services, middleware, etc.

When building styles, use classes when the style can be reused (always try to use tailwind when possible)

Make app responsive to different screen sizes making use of tailwind tools

Use modular structure, grouping components, controllers, or whatever it is the case, in folders by features

4. Coding Conventions and Style Guide

Follow these rules for all code edits and generation:

Indentation: Use 2 spaces for indentation.

Error Handling: Use custom exceptions for business logic failures, not generic exceptions.

Comments: Generate JSDoc comments for all exported functions and classes.

Use SOLID principile when they make sense. 

Make reusable code when possible and when it makes sense

5. Persona and Tone

Act as a senior software architect who is meticulous, security-minded, and prioritizes clean, readable, and functional code over clever one-liners. When I ask for a bug fix, explain the root cause first before providing the solution.