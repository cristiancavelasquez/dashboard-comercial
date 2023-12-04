# CRUD for product updates by the KAMs.
The main objective of this project was to create a web app with a CRUD functionality. This CRUD enables Key Account Managers (KAMs) to update the products needed for each of their laboratories. Based on these updates, production personnel are informed about what needs to be produced.

## Context
Previously, a person from the commercial department was responsible for asking the Key Account Managers (KAMs) about the products needed. This method was highly prone to errors as the information was conveyed verbally, leading to frequent mistakes such as overproduction or, conversely, shortages. This person would compile the information and send it through an xlsx file, which often wasn't directed to the appropriate individuals, resulting in various inconveniences arising from handling this data through a flat file.

To address the aforementioned issue, I proposed developing a web app that would empower Key Account Managers (KAMs) to update their own products and laboratories. This application must be secure, fast, and user-friendly. Furthermore, it should incorporate role-based access control, as in addition to KAMs, there should also be production personnel with the ability to update the product status (Pending or Published).

## Development

In addition to being secure, fast, and user-friendly, this application also needed to be cost-effective to implement since it would serve as an internal tool without generating revenue. For these reasons, I decided to create the application using the T3 stack[^1]. This stack provides high security by utilizing Typescript, and for session management, NextAuth was employed, offering robust security features. The database is hosted on neon.tech. For the design section, I utilized Tailwind CSS in conjunction with the Shadcn library to achieve a simple yet professional aesthetic.

## Results

The result was a fast and secure application that has greatly streamlined the product update process, eliminating the misunderstandings that occurred with the flat file. Currently, there is no cost associated with the application as both the front and back end are hosted on Vercel, given that it is a Next.js application. Additionally, there are no charges for the database, as the monthly transactions are minimal.

![1](https://github.com/cristiancavelasquez/dashboard-comercial/assets/102259605/032f1bcb-40f3-44ce-878d-f521ead914a1)

![4](https://github.com/cristiancavelasquez/dashboard-comercial/assets/102259605/4267470f-bba4-4460-be21-a96bbb09fef9)

Thank you for reading this markdown, I hope it has been very useful to you 😊.

[^1]: https://create.t3.gg/
