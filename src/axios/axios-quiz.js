import axios from 'axios'

export default axios.create({
    baseURL: 'https://react-quiz-e86d0.firebaseio.com/'
})