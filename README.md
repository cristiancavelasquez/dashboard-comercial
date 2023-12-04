# CRUD for product updates by the KAMs.
The main objective of this project was to create a web app with a CRUD functionality. This CRUD enables Key Account Managers (KAMs) to update the products needed for each of their laboratories. Based on these updates, production personnel are informed about what needs to be produced.

## Context
Previously, a person from the commercial department was responsible for asking the Key Account Managers (KAMs) about the products needed. This method was highly prone to errors as the information was conveyed verbally, leading to frequent mistakes such as overproduction or, conversely, shortages. This person would compile the information and send it through an xlsx file, which often wasn't directed to the appropriate individuals, resulting in various inconveniences arising from handling this data through a flat file.

To address the aforementioned issue, I proposed developing a web app that would empower Key Account Managers (KAMs) to update their own products and laboratories. This application must be secure, fast, and user-friendly. Furthermore, it should incorporate role-based access control, as in addition to KAMs, there should also be production personnel with the ability to update the product status (Pending or Published).

## Development

In addition to being secure, fast, and user-friendly, this application also needed to be cost-effective to implement since it would serve as an internal tool without generating revenue. For these reasons, I decided to create the application using the T3 stack. This stack provides high security by utilizing Typescript, and for session management, NextAuth was employed, offering robust security features. The database is hosted on neon.tech.[^1]

## Results

The result was an automated process created with Python, where you need to organize the addresses you want to search for in an Excel file, run the program, and obtain a final dataframe with the provided data along with the data that was found.

- **Result of the script ```addressToUtc.py```**
  
![utc](https://github.com/cristiancavelasquez/Maps_Automation/blob/31208ee67a7368d54116f5daaa513350c9f8ee78/Screenhot_folder/result1.png)

- **Result of the script ```coordsToAddress.py```**

![utc](https://github.com/cristiancavelasquez/Maps_Automation/blob/31208ee67a7368d54116f5daaa513350c9f8ee78/Screenhot_folder/result2.png)

With this structure, the person in charge can compare the initially entered address with the found address and determine visually whether they are a close match. If they are very similar, it is assumed that the UTC was assigned correctly. For those that are not, manual assignment is necessary.

From the tests that have been conducted, this code successfully matches information in approximately 70% of cases. The remaining 30% needs to be assigned manually, but this tool has significantly reduced time and costs.


Thank you for reading this markdown, I hope it has been very useful to you 😊.



[^1]: A geographically delimited area for georeferencing purposes, based on the concept of a zip code. However, some modifications are made to it, with large cities being subdivided into smaller zones and small cities being treated as a single zone.
