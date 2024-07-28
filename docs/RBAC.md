# Introduction

> Role-based access control (RBAC) restricts network access based on a person's role within an organization and has become one of the main methods for advanced access control. The roles in RBAC refer to the levels of access that employees have to the network. Employees are only allowed to access the information necessary to effectively perform their job duties. Access can be based on several factors, such as authority, responsibility, and job competency. In addition, access to computer resources can be limited to specific tasks such as the ability to view, create, or modify a file. As a result, lower-level employees usually do not have access to sensitive data if they do not need it to fulfill their responsibilities. This is especially helpful if you have many employees and use third-parties and contractors that make it difficult to closely monitor network access. Using RBAC will help in securing your company’s sensitive data and important applications.

# Design database idea

**Accounts**

| Name field | Description                       | Type         | Condition                                                                    | Key         | Default |
| ---------- | --------------------------------- | ------------ | ---------------------------------------------------------------------------- | ----------- | ------- |
| id         | The id of account                 | Guid         | unique                                                                       | Primary key | -       |
| username   | The username of account           | string (20)  | unique, min length: 6, max length: 20, required                              | -           | -       |
| email      | The email of account              | string (100) | unique, required                                                             | -           | -       |
| password   | The password of account           | string (max) | one lower, upper and special character, hash string, min length: 8, required | -           | -       |
| roleId     | The role of account               | Guid         | required                                                                     | Foreign key | -       |
| userId     | The user information of account   | Guid         | required                                                                     | Foreign key | -       |
| permission | The permission of account         | string (max) | -                                                                            | -           | ""      |
| createdAt  | The time to create account        | Datetime     | -                                                                            | -           | now     |
| updatedAt  | The time to update / edit account | Datetime     | -                                                                            | -           | -       |
| active     | The status of account             | Boolean      | -                                                                            | -           | true    |

**Users**

| Name field   | Description                        | Type         | Condition | Key         | Default |
| ------------ | ---------------------------------- | ------------ | --------- | ----------- | ------- |
| id           | The id of user                     | Guid         | unique    | Primary key | -       |
| firstName    | The first name of user             | string (200) | required  | -           | -       |
| lastName     | The last name of user              | string (200) | required  | -           | -       |
| address      | The address of user                | string (max) | -         | -           | -       |
| phone        | The phone number of user           | string (15)  | -         | -           | ""      |
| birthday     | The birthday information of user   | DateTime     | -         | -           | null    |
| photoUrl     | The photo of user                  | String       | -         | -           | null    |
| departmentId | The department information of user | Guid         | -         | Foreign key | null    |
| officeId     | The department information of user | Guid         | -         | Foreign key | null    |

**Permissions**

| Name field  | Description                          | Type         | Condition                                            | Key         | Default |
| ----------- | ------------------------------------ | ------------ | ---------------------------------------------------- | ----------- | ------- |
| id          | The id of permission                 | Guid         | unique                                               | Primary key | -       |
| name        | The name of permission               | string (100) | unique, required                                     | -           | -       |
| code        | The code of permission               | string (20)  | unique, it must be english, max length: 20, required | -           | -       |
| description | The description of permission        | string(max)  | -                                                    | -           | -       |
| createdAt   | The time to create permission        | Datetime     | -                                                    | -           | now     |
| updatedAt   | The time to update / edit permission | Datetime     | -                                                    | -           | -       |

**Roles**

| Name field  | Description                    | Type         | Condition                                            | Key         | Default |
| ----------- | ------------------------------ | ------------ | ---------------------------------------------------- | ----------- | ------- |
| id          | The id of role                 | Guid         | unique                                               | Primary key | -       |
| name        | The name of role               | string (100) | unique, required                                     | -           | -       |
| code        | The code of role               | string (20)  | unique, it must be english, max length: 20, required | -           | -       |
| description | The description of role        | string (max) | -                                                    | -           | -       |
| createdAt   | The time to create role        | Datetime     | -                                                    | -           | now     |
| updatedAt   | The time to update / edit role | Datetime     | -                                                    | -           | -       |

**RolePermission**

| Name field    | Description           | Type   | Condition | Key         | Default |
| ------------- | --------------------- | ------ | --------- | ----------- | ------- |
| id            | The id                | Guid   | unique    | Primary key | -       |
| permissionId  | The permission id     | Guid   | -         | Foreign key | -       |
| roleId        | The role id           | Guid   | -         | Foreign key | -       |
| permissionStr | The permission string | string | -         | -           | -       |

# Description

If my account is role manager and my account does not have access to see or create groups, I want to add them, and my account string permission is "group:read;group:create".

If my account is a manager and the manager role has a manage category, the code for manage category is category. If I want to limit access to delete categories for my account, I can add "group:read;group:create;category:delete:deny" to my account string permission.

Check role permissions in api deletion category is passed if role account equals "superadmin" or (role account equals "manager" | "admin" or permission account has "category:delete") and my account string permission does not have "category:delete:deny".
-> role == "superadmin" | (((role == "admin) || (role == "manager) || permission.contains("category:delete")) &&!permission.contains("category:delete:deny"))
