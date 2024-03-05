import { NextApiRequest, NextApiResponse } from 'next';
export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        try {
            // Destructure the required fields from the request body
            const { name, email, phone, message } = req.body;
            
            // Create a FormData object and append the fields to it
            const formData = new FormData();
            formData.append('Name', name);
            formData.append('Email', email);
            formData.append('Phone', phone);
            formData.append('Message', message);

            // Make a POST request to the Google Sheets API endpoint
            const response = await fetch(`${process.env.Google_sheet_url}`, {
                method: 'POST',
                body: formData,
            });

            // Check if the response is successful
            if (response.ok) {
                // If successful, send a success response
                res.status(200).json({ success: true });
            } else {
                // If not successful, send an error response with the reason
                res.status(response.status).json({ error: `Failed to submit data: ${response.statusText}` });
            }
        } catch (error) {
            // Catch any unexpected errors and send an internal server error response
            res.status(500).json({ error: 'Internal server error' });
        }
    } else {
        // If the request method is not POST, send a Method Not Allowed response
        res.status(405).json({ error: 'Method Not Allowed' });
    }
};
