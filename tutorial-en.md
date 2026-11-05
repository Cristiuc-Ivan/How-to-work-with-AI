##) Keywords that may improve efficiency
	- explore

## How AI thinks

AI tends to work in horizontal layers (implementing the backend, frontend, and database separately). This is not very efficient because the changes can be extensive and harder to test.

It is better to work in vertical phases, with each phase covering all the parts related to a particular aspect.


Look into file pointers to avoid filling up the context

## Using a weaker model for implementation and a stronger model for review can lead to a better result.


## How to start a project from scratch:
1) Explain the idea to the AI, provide all available context, and discuss it. Let it ask questions and suggest solutions or improvements (you can use grill for this). You can save the discussion and ideas in documents such as research.md.
2) Create a prototype to get a clearer picture of what you want to build.
3) Describe the User Experience and Agent Experience (feedback loops, technology choice, module shape, testing strategies).
4) Generate an initial application design.

## Before starting a project, tell the AI:
1) The code should be simple and easy to understand, without unnecessary complexity.
2) Follow SOLID design principles when writing code:
	- S stands for Single Responsibility Principle (a class should have one primary responsibility).
	- O stands for Open/Closed Principle (the code should be open to expansion but closed to modification).
	- L stands for Liskov Substitution Principle (a child class should be substitutable for a parent class without breaking the logic).
	- I stands for Interface Segregation Principle (it's better to have several small interfaces than one large one).
	- D stands for Dependency Inversion Principle (high-level modules should not depend on low-level modules; both should depend on abstractions).
3) Also remember encapsulation (an object's internal state is hidden from external code).
4) When a decision is needed, choose the simplest effective option available. A feature can always be made more complex later, but simplifying it can be harder. Apply the same principle when suggesting options: choose the simplest effective one available.
5) Run tests only for code that was written or changed. Run the full project test suite only when explicitly requested or at the end of a slice, spec, or major completed phase.
6) In most cases, there is no need to test the backend separately from the frontend, since frontend tests can also reveal backend bugs.
7) After each slice, spec, or major completed phase, suggest clear steps for the user to test the application.
8) When breaking a spec into tickets, create vertical tickets rather than horizontal ones. This makes the code easier to test, and lets each ticket cover all parts related to one aspect in a single pass.
9) Run parallel tickets in separate worktrees. In each ticket, specify what it owns, what it may only append to, what it is forbidden to change, and whom to contact. If another ticket's schema or interface is needed, stop and request context (NEEDS_CONTEXT).
10) Add a repository script that runs the application with settings close to production and uses real dependencies. The run succeeds only if it produces the expected result. If a defect is found, first write a test that reproduces it, then fix it and add a guard test.
11) Add a guard test for each bug class. In particular, check that:
- every endpoint has @PreAuthorize;
- services have no public final methods;
- indexes are registered;
- secrets are not included in responses.
For each new guard test, first show that it fails when the corresponding rule is violated.
12) Add a “Definition of Done” section to the “Plan” template:
- the test fails first and then passes, with output from both runs;
- permissions are checked for every entry point;
- the error format is checked;
- responses contain no secrets;
- manual changes to generated code are recorded in a registry;
- requirements are traceable to tests or checks;
- the build exits with code 0.
13) Approve the specification and ticket breakdown together in one response. Prepare the parallel-work plan as a whole. Approval is still required for irreversible actions.
14) Run /code-review on every ticket to check for bugs. Review standards and spec compliance once for the whole batch, and for every security-related ticket.
15) Prepare .gitignore before creating worktrees. Do not create temporary or duplicate branches. Before merging, check git log base..HEAD. Merge tickets one at a time and run a quick check after each merge. After the final merge, run the full test suite and the live script.
