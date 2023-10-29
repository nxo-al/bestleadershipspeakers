fetch('https://bestleadershipspeakers.netlify.app/')
    .then((response) => {
        if (response.status === 404) {
            throw new Error(
                '404 Not Found: The requested resource was not found on the server.'
            )
        }
        if (!response.ok) {
            throw new Error('Network response was not ok')
        }
        return response.json()
    })
    .then((data) => {
        console.log('Success:', data)
    })
    .catch((error) => {
        console.error('Error:', error.message)
    })
