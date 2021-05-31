import axios from "axios";

function getRequestParams(email){
    const API_KEY = process.env.API_KEY;
    const LIST_ID = process.env.LIST_ID;

    const DATA_CENTER = API_KEY.split("-")[1];
    console.log(DATA_CENTER)
    const url = `https://${DATA_CENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`;

    const data = {
        email_address: email,
        status: "subscribed"
    }

    const base64apikey = Buffer.from(`mystring:${API_KEY}`).toString("base64")
    const headers = {
        "Content-Type": "application/json",
        Authorization: `Basic ${base64apikey}`
    };

    return {
        url,
        data,
        headers
    }
}

export default async (req, res)=>{
    const { email } = req.body;
    
    if(!email || !email.length){
        return res.status(200).json({
            error: "forgot to add your email?"
        })

    }try{
        console.log("getting request params")
        const {url, data, headers} = getRequestParams(email)
        const response = await axios.post(url, data, {headers})
        return res.status(201).json({
            error: null,
            message: "Thanks for believing in cubeheads.io!"
        })
    }catch(error){
        console.log(error.response.data)
        switch(error.response.data.title){
            case "Member Exists":
                return res.status(200).json({
                    error: "What a supporter, You're already in!"
                })
                break;
            case "Invalid Resource":
                return res.status(200).json({
                    error: "This email looks fake!"
                })
                break;
            default:
                break;
        }
        
    }
}
