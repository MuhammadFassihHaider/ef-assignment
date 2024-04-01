## Links

### Deployed Link

https://ef-assignment.vercel.app/

### Github Link

https://github.com/MuhammadFassihHaider/ef-assignment

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Changes in design

I took some liberties with the design at places where I found the design to be inconsistent or where I did not like certain aspects of the design. I took these liberties because I did not have a Figma design and it was mentioned that a pixel perfect implementation was not a requirement. Areas where I made include:

### Changes on home page (mobile)

I increased the dropdown width to 100% to match with the input. I decreased the margins between them since they are closely related (filters) and increased the margins between the filters and the countries.

[Image for reference](./src/docs/resources/changes-on-home-page-mobile.png)

### Changes on details page (mobile)

I changed the padding of the content to align with navigation to make it consistent.

[Image for reference](./src/docs/resources/changes-on-details-page-mobile.png)

### Changes on details page

I made minor changes to the back button to make the way I like it. I made the flag corners rounded to make it consistent with the overall theme. I kept the border country chips on the next line to align it with mobile design.

[Image for reference](./src/docs/resources/changes-on-details-page.png)

### Deviation from the style guide

I deviated from the font sizes provided and used what I thought looked better.

## Explanation of code choices

### Commits

I used [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for project's version control commit messages.

### Folder Structure & Component Organization

I've structured the project's components and files following a customized approach based on the principles of [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/), with adaptations made to better suit the project's requirements and scale. Here's a breakdown of the logic behind the organization:

#### src/app

This directory contains components that are specifically tailored to individual pages within the project. These components are designed to meet the unique needs of each page and are not intended for reuse across multiple sections of the application.

#### src/components

The src/components directory houses reusable components that follow the Atomic Design methodology. These components are designed to be modular, enabling their reuse throughout the project and potentially across different projects. Since this is a small project, components that I know are used multiple times in a large project are still in the components folder (Dropdown, Input, BackButton, Icons etc.)

### Lack of a component library

I opted not to utilize a component library for this project due to its relatively small scale and the limited number of components required. Typically, for larger projects, I leverage Tailwind UI or Shadcn UI both of which offer comprehensive collections of pre-built components designed with accessibility in mind. I am aware that my dropdown does not account for accessibility due to time constraints.

### Error handling

I've implemented error handling in a manner inspired by Rust and Go practices, where errors are treated as values and handled explicitly within the codebase.

### Issues that I am aware of

#### Border country names

The country details page does not show the names of the border countries, rather their codes. I could not get the country names from the codes because the endpoint (https://restcountries.com/#endpoints-code) is probably rate limited.
It would probably be possible to get the country names by adding time between API calls (I was using Promise.all and sending all the request at the same time).

#### No pagination

I'm aware that pagination is currently not implemented on the home page. Unfortunately, the REST Country endpoints do not support pagination as far as I can tell. While I considered creating a custom Next.js endpoint to enable pagination, time constraints prevented me from implementing this solution.

### Example of code that I own that uses Atomic Design, Next.js, Tailwind, Redux Toolkit, Redux Toolkit Query

https://github.com/MuhammadFassihHaider/nomadly
