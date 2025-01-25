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

## AccessToken

- An access token is a short-lived token that grants access to protected resources.

- It is typically a JWT (JSON Web Token) that contains claims (e.g., user ID, roles, expiration time).

- It is signed by the server to ensure its authenticity.

### Key Characteristics Of AccessToken

- **Short-Lived**: Expires after a short period (e.g., 15 minutes to 1 hour).

- **Stateless**: Contains all the information needed to verify the user’s identity and permissions.

- **Bearer Token**: The client includes it in the Authorization header of HTTP requests to access protected resources.

### How AccessToken Works

1. The user logs in, and the server generates an access token.

2. The client stores the access token (e.g., in memory or local storage).

3. The client includes the access token in the Authorization header of each request:

```http
GET /api/protected-resource
Authorization: Bearer <access-token>
```

4. The server validates the access token and grants access to the requested resource.

## Refresh Token

- A refresh token is a long-lived token used to obtain a new access token when the current one expires.

- It is stored securely (e.g., in an HTTP-only cookie or a secure database) and is not sent with every request.

- It is used to maintain a user’s session without requiring them to log in again.

### Key Characteristics Of Refresh Token

Long-Lived: Expires after a longer period (e.g., 7 days to 30 days).

Secure: Stored securely and not exposed to the client-side JavaScript.

Single Use: Typically invalidated after being used to generate a new access token.

### How Refresh Token Works

1. The user logs in, and the server generates both an access token and a refresh token.

2. The client stores the access token (e.g., in memory or local storage) and the refresh token (e.g., in an HTTP-only cookie).

3. When the access token expires, the client sends the refresh token to the server to request a new access token:

```http
POST /api/refresh-token
Cookie: refresh-token=<refresh-token>
```

4. The server validates the refresh token and issues a new access token.

##  Why Use Both Access Tokens and Refresh Tokens?

Using both tokens provides a balance between **security** and user **experience**:

### Security

- **Short-Lived Access Tokens**: If an access token is compromised, it is only valid for a short time.

- **Secure Refresh Tokens**: Refresh tokens are stored securely and are not exposed to the client-side JavaScript, reducing the risk of theft.

### User Experience

- **Seamless Session Management**: Users don’t need to log in repeatedly because the refresh token can be used to obtain new access tokens.

- **Reduced Server Load**: The server doesn’t need to validate long-lived tokens with every request.