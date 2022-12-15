import axios from "axios";

export class ApiServise{

    async fetch(q,p){
    
        try {
          const searchParams = new URLSearchParams({
            key: '30433479-40b3b6ba46d38a0b1e7112d23',
            q: q,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true,
            page: p,
            per_page: 12,
        });

            const request = `https://pixabay.com/api/?${searchParams}`;
            console.log(request)

        const data = await axios.get(request);
       
       
             return [data.data.hits]
        } catch (error) {
            console.log(error.message)
        };
        
    };
};

