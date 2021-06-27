import axios from "axios";
import sibApiV3SDK from "sib-api-v3-sdk"



function getRequestParams(email){
    const API_KEY = process.env.API_KEY;
    const LIST_ID = 2;

    // const DATA_CENTER = API_KEY.split("-")[1];
    // console.log(DATA_CENTER)
    // const url = `https://emailoctopus.com/api/1.5/lists/${LIST_ID}/contacts`;
    const url = `https://api.sendinblue.com/v3/contacts`;


    const data = {
        api_key: API_KEY,
        email_address: email,
        status: "SUBSCRIBED"
    }
    // MAILCHIMP
    // const base64apikey = Buffer.from(`mystring:${API_KEY}`).toString("base64")
    const headers = {"Accept": 'application/json', 'Content-Type': 'application/json'}

    return {
        url,
        data
    }
}

export default async (req, res)=>{
    let defaultClient = sibApiV3SDK.ApiClient.instance
    let apiKey = defaultClient.authentications['api-key']
    apiKey.apiKey = process.env.API_KEY

    let apiInstance = new sibApiV3SDK.ContactsApi()
    let createContact = new sibApiV3SDK.CreateContact()

    const { email } = req.body;
    const { expertise } = req.body
    
    if(!email || !email.length){
        return res.status(200).json({
            error: "forgot to add your email?"
        })

    }try{
        console.log(expertise)
        createContact.email = email
        switch(expertise){
            case "Animator" :
                createContact.listIds = [3]
                break;
            case "Concept Artist" :
                createContact.listIds = [4]
                break;
            case "Developer" :
                createContact.listIds = [5]
                break;
            case "Environment Artist" :
                createContact.listIds = [6]
                    break;
            case "FX Artist" :
                createContact.listIds = [7]
                break;
            case "Lighting Artist" :
                createContact.listIds = [8]
                break;
            case "Texture Artist" :
                createContact.listIds = [9]
                break;
            case "Unity" :
                createContact.listIds = [10]
                break;
            case "Unreal" :
                createContact.listIds = [11]
                break;
        }


        apiInstance.createContact(createContact).then((data )  => {
            console.log('API called successfully. Returned data: ' + JSON.stringify(data));
            return res.status(200).json({
                error: null
            })
        }, function(error) {
            console.error(error.response.body.message)
            return res.status(200).json({
                error: error.response.body.message
            })
        });
        // console.log("getting request params")
        // const {url, data, headers} = getRequestParams(email)
        // const response = await axios.post(url, data)
        // return res.status(201).json({
        //     error: null,
        //     message: "Thanks for believing in cubeheads.io!"
        // })
    }catch(error){
        console.log(error.response)
        return res.status(200).json({
            error: error.response.data.error.message
        })
        
    
        
    }
}
