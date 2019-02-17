<p align="center">
	<a href="https://softuni.bg/"><img src="https://www.jobs.bg/assets/logo/2017-09-01/b_6e048c01c340d967f2a6e540e9825d46.png" alt="Softuni logo" width="400" align="center">
	</a>
<p>

## IMDB Exam Prep

## Including:
- 1 C# sample working application(CRUD + MySQL DB)
- 1 Java sample working application(CRUD + MySQL DB)
- 1 PHP sample working application(CRUD + MySQL DB)
- 1 JS sample working application(CRUD + MySQL DB)

### All projects have the following functionality
- Create entity (and persist data into DB)
- Edit entity (and save changes into DB)
- Delete entity (and remove data from DB)
- Get all entities from DB

### How to run each app:

1. Install xampp
2. Install HeidiSQL (optional - this is UI program to manage DB)
3. Run xampp
4. From the xampp CPanel start MySQL
5. Continue reading below for more information relevant to each project

#### C# (ASP.NET MVC, Entity Framework Core, Razor view engine)
6. Open "IMDB.sln"
7. Run project (press CTRL + F5)
8. Project is running on http://localhost:53171

#### Java (Spring MVC + Boot + Data, Hibernate ORM, Thymeleaf view engine)
6. Run IntelliJ Idea
7. Click Import Project and navigate to "java" folder
8. Import the project as "External model" - "Maven" & click Next
9. Click Next three times
10. Click Finish!
11. Project is running on http://localhost:8003

#### PHP (Symfony, Doctrine ORM, Twig view engine)
6. From the xampp CPanel start Apache
7. Navigate to "php" folder
8. Open Command Prompt window in the "php" directory
9. Run "composer install" and await the packages installation
10. Run "php bin/console server:run"
11. Project is running on http://127.0.0.1:8000

#### JavaScript (NodeJS + ExpressJS, Sequelize ORM, Handlebars view engine)
6. Navigate to "js" folder
7. Open Command Prompt window in the "js" directory
8. Run "npm install" and await the package installation
9. Run "npm start"
10. Project is running on http://localhost:8001