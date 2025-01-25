# JWT

1. **Looks like a randomized string and has a structure.**
![JWT Structure](../imgs/jwt.png)

```token

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```

## **header**

The header of the token is a json object consists of the important information such as type of algorithm used to create the token, type and key id associated with the token

## **Body || Payload**

In a JWT (JSON Web Token), the **body** is referred to as the **payload**. The payload is one of the three main parts of a JWT (the others being the **header** and the **signature**). The payload contains the **claims**, which are statements about an entity (typically the user) and additional metadata.

### Structure of the JWT Payload

The payload is a JSON object that consists of **claims**.
Claims are **key-value pairs** that provide information about the subject (e.g., user) and other relevant data. There are three types of claims:

1. **Registered Claims**: Standard, predefined claims with specific meanings.

2. **Public Claims**: Custom claims that are defined by the users of JWTs.

3. **Private Claims**: Custom claims agreed upon between parties.

---

### Most Important Information in the Payload

#### 1. **Registered Claims (Standard Claims)**

- **`sub` (Subject)**: Identifies the principal (e.g., user ID) for whom the token was issued.

 ```json
 "sub": "12345"
 ```

- **`iss` (Issuer)**: Identifies the issuer of the token (e.g., your authentication server)

 ```json
 "iss": "https://example.com"
 ```

- **`aud` (Audience)**: Identifies the intended recipients of the token (e.g., your application).

 ```json
 "aud": "https://api.example.com"
 ```

- **`exp` (Expiration Time)**: Specifies the expiration time of the token (in Unix timestamp format).

 ```json
 "exp": 1672502400
 ```

- **`iat` (Issued At)**: Specifies when the token was issued (in Unix timestamp format).

  ```json
  "iat": 1672498800
  ```

- **`nbf` (Not Before)**: Specifies the time before which the token should not be accepted.

  ```json
  "iat": 1672498800
  ```

---

#### **Public or Custom Claims**

These are additional claims that you can define based on your application's needs. For example:

- **User roles:** Specify the roles or permissions of the user.

 ```json
 "roles": ["admin", "user"]
```

- **User Email**: Include the user's email address.

 ```json
 "email": "user@example.com"

```

- **Custom Data**: Any other data relevant to your application.

 ```json
 "userId": "12345",
 "preferences": { "theme": "dark" }
```

---

#### 3. **Private Claims**

private claims s are not part of the standard JWT claims defined in the JWT specification.
they are additional information specific to your application. They are called "private" because **they are not standardized and are only meaningful to the parties that agree to use them**.

##### Example of Private Claims

```json
{
  "sub": "12345",
  "iss": "https://example.com",
  "exp": 1672502400,
  "userId": "12345", // Private claim
  "preferences": {   // Private claim
    "theme": "dark",
    "language": "en"
  }
}
```

---
