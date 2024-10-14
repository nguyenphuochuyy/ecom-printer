export const listUser = async () => {
    const res = await fetch('http://localhost:3000/users')
    const result = await res.json();
    return result
    
}
