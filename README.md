This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

##
# Google Sheets Integration

This project includes integration with Google Sheets for data collection from the contact form submissions. Below are the details of the integration:

## Objective
The objective of integrating with Google Sheets is to securely collect and store the data submitted through the contact form. By integrating with Google Sheets, I can easily manage and analyze the contact form submissions in a structured format.

## Implementation Details
To achieve Google Sheets integration, the following steps were taken:

1. **Setting Up Google Sheets API**: First, I set up the Google Sheets API . This involves creating a new google sheet, enabling the appscripts extension, and obtaining the necessary credentials (e.g., API key, sheeturl, etc.).

2. **Authentication**: We implemented authentication with Google Sheets API using the api key, This allows the application to securely access the Google Sheets on behalf of the user.

3. **Form Submission Handling**: Upon form submission, the data is collected and sent to a designated endpoint in the backend. From there, the backend server interacts with the Google Sheets API to insert the form data into the designated Google Sheets document.

4. **Data Validation**: Before submitting the data to Google Sheets, I perform validation to ensure that the submitted data is in the correct format and meets any required criteria.

5. **Error Handling**: Proper error handling is implemented to handle any errors that may occur during the integration process. This includes handling authentication errors, data sent by user, and any other potential issues.

6. **Security**: We ensure that all data transmitted to and from Google Sheets is encrypted using secure HTTPS connections. Additionally, I follow best practices for securing API keys and credentials to prevent unauthorized access.

## Further Information
To make this project work locally make sure to make a .env file then place your url or api key then reference it from there when setting up functionality code
---
Feel free to expand or modify the content as needed to provide more context or detail on the Google Sheets integration in your project.
