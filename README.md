# simple-ssr-frontend

## Motivation

As developer Iwant to have great react app with SSR template, which can be used for creating scalable, fast and friendly in development apps.
In this repo I'll try to create simple frontend, but friendly for further development.

I will focus on issues taken from one of real-life projects I worked on. I don't want to use complex frameworks and I don't want to create one - my goal is just to find simple solutions, which could be taken and adapted. 

## Proof of concept

### Goals:
* Performance
	* Can app respond with rendered HTML?
	* Do app serve properly cached content?
	* Can app force browser to load new version after deploying it?
	* Can app work offline?
* Development
	* Do app have development mode with fast source rebuilding, without connection resets?
	* Is it possible to see server side logs in chrome console?
	* Is it possible to add new pages in ssr frontend without creating extra server side code?
	* Do app use newest libraries and patterns? (react-hooks, router 5)
* Testing
	* Is frontend code partially covered with unit tests?
	* Is server side partially code covered with unit tests?
	* Is frontend covered by basic frontend tests?
	* Is it possible to generate docs from frontend tests?
	* Is it possible to generate docs from server side tests?
	
	
### Milestones:
* Some frontend page with state [x]
* Basic SSR
* Unit tests reports for both sides
* Quick rebuilding and reloading code in dev mode
* Waiting with server responses until rebuild is completed
* Caching files with service workers
* Connecting nodejs console to chrome
* Component tests
* Generating test reports
* Offline app
* Isomorphic code for frontend and server side
