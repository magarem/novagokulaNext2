export default defineEventHandler(async (event) => {
    // const query = getQuery(event)
    const body = await readBody(event)

    console.log(111, body);
    const username = body.username
    const password = body.password
    console.log('event:', event)
    console.log('username:', username);
    console.log('password:', password);
    
    
    if (username == 'adm' && password == '12345') {
        let ret = {
            "id": 15,
            "username": "kminchelle",
            "email": "kminchelle@qq.com",
            "firstName": "Jeanne",
            "lastName": "Halvorson",
            "gender": "female",
            "image": "https://robohash.org/Jeanne.png?set=set4",
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsInVzZXJuYW1lIjoia21pbmNoZWxsZSIsImVtYWlsIjoia21pbmNoZWxsZUBxcS5jb20iLCJmaXJzdE5hbWUiOiJKZWFubmUiLCJsYXN0TmFtZSI6IkhhbHZvcnNvbiIsImdlbmRlciI6ImZlbWFsZSIsImltYWdlIjoiaHR0cHM6Ly9yb2JvaGFzaC5vcmcvSmVhbm5lLnBuZz9zZXQ9c2V0NCIsImlhdCI6MTcwNDM3ODI4MSwiZXhwIjoxNzA0MzgxODgxfQ.3LBq9lXcFM_7-YvZ_toLbS5jjKbJCesPxGa-wTM8hgE"
        }
        return ret;
    }else{

        return false;
    }
    

})