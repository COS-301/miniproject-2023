# functioning cloud function for creating memory

# Tests
## using postman
```JSON
method: "POST",
url: "http://127.0.0.1:5005/demo-project/us-central1/createMemory"
````

## Request
```JSON
{
    "data": {
        "memory": {
            "username":"Dena_Champlin@gmail.com",
            "userId": "0104fa66-5a7b-429c-aedd-acab833be72e",
            "title": "Summer Holiday",
            "description": "it worlks",
            "imgUrl": "https://bit.ly/3MCrcnB" // optional, will be generated
        }
    }
}
```

## Response
```JSON
{
    "result": {
        "ICreateMemoryResponse": {
            "userId": "0104fa66-5a7b-429c-aedd-acab833be72e",
            "username": "Dena52",
            "title": "Summer Holiday",
            "description": "it worlks",
            "imgUrl": "https://bit.ly/3MCrcnB",
            "profileImgUrl": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/508.jpg",
            "created": {
                "_seconds": 1681722777,
                "_nanoseconds": 860000000
            },
            "commentsCount": 0,
            "remainingTime": 86400,
            "alive": true
        }
    }
}
# Run Test
```sh
    yarn test libs/api/core/feature/test/memories.functions.test.ts
```

