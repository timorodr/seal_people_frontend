

// const URL = process.env.REACT_APP_URL
const URL = "https://backend-lab-initial.onrender.com"

export const peopleLoader = async () => {
    const response = await fetch(`${URL}/people`)
    const people = await  response.json()
    return people
}

export const personLoader = async ({params}) => {
    const response = await fetch(`${URL}/people/${params.id}`)
    const person = await response.json()
    return person
}