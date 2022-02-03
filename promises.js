
const myAsyncFunc = async () => {
    const userResponse = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await userResponse.json()
    console.log(users)
}
myAsyncFunc()