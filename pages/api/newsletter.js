import axios from "axios";

function getRequestParams(email){
    const API_KEY = process.env.API_KEY;
    const LIST_ID = process.env.LIST_ID;

    // const DATA_CENTER = API_KEY.split("-")[1];
    // console.log(DATA_CENTER)
    const url = `https://emailoctopus.com/api/1.5/lists/${LIST_ID}/contacts`;

    const data = {
        api_key: API_KEY,
        email_address: email,
        status: "SUBSCRIBED"
    }
    // MAILCHIMP
    // const base64apikey = Buffer.from(`mystring:${API_KEY}`).toString("base64")
    // const headers = {
    //     "Content-Type": "application/json",
    //     Authorization: `Basic ${base64apikey}`
    // };

    return {
        url,
        data
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
        const response = await axios.post(url, data)
        return res.status(201).json({
            error: null,
            message: "Thanks for believing in cubeheads.io!"
        })
    }catch(error){
        console.log(error.response)
        return res.status(200).json({
            error: error.response.data.error.message
        })
        
        // switch(error.response.data.title){
        //     case "Member Exists":
        //         return res.status(200).json({
        //             error: "What a supporter, You're already in!"
        //         })
        //         break;
        //     case "Invalid Resource":
        //         return res.status(200).json({
        //             error: "This email looks fake!"
        //         })
        //         break;
        //     default:
        //         break;
        // }
        
    }
}
