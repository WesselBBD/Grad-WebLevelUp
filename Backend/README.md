# Backend

## Setup

#### Create User or Edit User

- Make sure you have created db locally _(OnlyFansDB)_
- Either create a user with name `admin` and password `admin` or change the login details in `Backend/.env`
- Ensure SQL Login is setup on local machine

## Installing Dependencies

In the root directory, run `npm run install:backend`. \
Alternatively `cd Backend && npm i`

## Running

In the root directory, run `npm run start:backend`. \
Alternatively, `cd Backend && serverless offline`

## Details

- App will run on `PORT:4000` but don't mess with `4000`, 4001` or `4002`.
- `Backend/client.rest` contains endpoints to test with expected results defined in comment above
